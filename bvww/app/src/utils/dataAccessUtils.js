import {
  mapDataAccessList,
  getAllSelectableMerchants,
  getNewSelectorFilter,
} from '../selectors/dataAccessSelectors';

export const CORP_INDEX = 0;
export const REGION_INDEX = 1;
export const PRINCIPAL_INDEX = 2;
export const ASSOCIATE_INDEX = 3;
export const CHAIN_INDEX = 4;
export const MERCHANT_INDEX = 5;

/**
 * from https://gist.github.com/jed/982883
 * @param  {Boolean} a  flag to use Math.random or not
 * @return {string}     random string of form xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx,
 *                      where each x is replaced with a random hexadecimal digit from 0 to f,
 *                      and y is replaced with a random hexadecimal digit from 8 to b.
 */
/* eslint-disable */
export function uuidv4(a) {
  return a // if the a was passed, return
    ? (              // a random number from 0 to 15
      a ^            // unless b is 8,
      Math.random()  // in which case
      * 16           // a random number from
      >> a / 4         // 8 to 11
    ).toString(16) // in hexadecimal
    : (              // or otherwise a concatenated string:
      [1e7] +        // 10000000 +
      -1e3 +         // -1000 +
      -4e3 +         // -4000 +
      -8e3 +         // -80000000 +
      -1e11          // -100000000000,
    ).replace(     // replacing
      /[018]/g,    // zeroes, ones, and eights with
      uuidv4);     // random hex digits
}
/* eslint-enable */

export function getNewDataAccessFilter(dataAccess) {
  const augmentedDataAccess = mapDataAccessList(dataAccess);
  const newFilter = getNewSelectorFilter(augmentedDataAccess);
  const availableMerchants = getAllSelectableMerchants(newFilter.startData, []);
  newFilter.availableMerchants = mapDataAccessList(availableMerchants, 'label', 'name');
  newFilter.dirty = false;

  return newFilter;
}

/**
 * Transforms a filter object to row object to populate a UI data-access row
 * @param  {number}   filterChainIndex the index of the row in the UI to update on changes
 * @param  {Object}   filter           data for each level in data access hierarchy
 * @param  {Array}    selectorColumns  a configurable list of columns to expext in the filter Object
 * @param  {function} changeFunction   function to call when Autocomplete component is updated
 * @param  {function} selectFunction   function to call when Autocomplete component is selected
 * @param  {object}   target           the this-object of the component showing the filters
 * @return {Array}                     a list of data objects to create a DataAccessFilter component
 */
export function mapSelectors(filterChainIndex, filter, selectorColumns, changeFunction, selectFunction, target) {
  return selectorColumns.map((level, index) => {
    const currentTerm = (filter[level.selectorKeyType] &&
      filter[level.selectorKeyType].label)
      ? filter[level.selectorKeyType].label
      : '';

    return ({
      singularName: level.singularName,
      pluralName: level.pluralName,
      selectorDataType: level.dataKeyType,
      selectedItemType: level.selectorKeyType,
      currentData: filter[level.dataKeyType],
      currentSelectedItem: filter[level.selectorKeyType],
      currentSearchTerm: currentTerm,
      currentOnChange: changeFunction(filterChainIndex, filter[level.dataKeyType], index).bind(target),
      currentHandleSelect: selectFunction(filterChainIndex, filter[level.dataKeyType], index, false).bind(target),
    });
  });
}

export function buildFilteredDataAccess(filterToAdd) {
  const newStartData = [...filterToAdd.corps];

  const selectedCorpIndex = newStartData.findIndex((org) => {
    return filterToAdd.selectedCorp && (filterToAdd.selectedCorp.id === org.id);
  });

  if (selectedCorpIndex > -1) {
    newStartData[selectedCorpIndex].organizations = filterToAdd.regions;

    const selectedRegionIndex = newStartData[selectedCorpIndex].organizations.findIndex((org) => {
      return filterToAdd.selectedRegion && (filterToAdd.selectedRegion.id === org.id);
    });

    if (selectedRegionIndex > -1) {
      const regionPointer = newStartData[selectedCorpIndex].organizations[selectedRegionIndex];
      regionPointer.organizations = filterToAdd.principals;

      const selectedPrincipalIndex = regionPointer.organizations.findIndex((org) => {
        return filterToAdd.selectedPrincipal && (filterToAdd.selectedPrincipal.id === org.id);
      });

      if (selectedPrincipalIndex > -1) {
        const principalPointer = regionPointer.organizations[selectedPrincipalIndex];
        principalPointer.organizations = filterToAdd.associates;

        const selectedAssociateIndex = principalPointer.organizations.findIndex((org) => {
          return filterToAdd.selectedAssociate && (filterToAdd.selectedAssociate.id === org.id);
        });

        if (selectedAssociateIndex > -1) {
          const associatePointer = principalPointer.organizations[selectedAssociateIndex];
          associatePointer.organizations = filterToAdd.chains;

          const selectedChainIndex = associatePointer.organizations.findIndex((org) => {
            return filterToAdd.selectedChain && (filterToAdd.selectedChain.id === org.id);
          });

          if (selectedChainIndex > -1) {
            const chainPointer = associatePointer.organizations[selectedChainIndex];
            chainPointer.organizations = filterToAdd.availableMerchants;
          }
        }
      }
    }
  }

  return newStartData;
}

export function getSelectorColumns() {
  return [
    {
      singularName: 'Corp',
      pluralName: 'Corps',
      dataKeyType: 'corps',
      selectorKeyType: 'selectedCorp',
    },
    {
      singularName: 'Region',
      pluralName: 'Regions',
      dataKeyType: 'regions',
      selectorKeyType: 'selectedRegion',
    },
    {
      singularName: 'Principal',
      pluralName: 'Principals',
      dataKeyType: 'principals',
      selectorKeyType: 'selectedPrincipal',
    },
    {
      singularName: 'Associate',
      pluralName: 'Associates',
      dataKeyType: 'associates',
      selectorKeyType: 'selectedAssociate',
    },
    {
      singularName: 'Chain',
      pluralName: 'Chains',
      dataKeyType: 'chains',
      selectorKeyType: 'selectedChain',
    },
    {
      singularName: 'Merchant',
      pluralName: 'Merchants',
      dataKeyType: 'availableMerchants',
      selectorKeyType: 'selectedMerchants',
    },
  ];
}

/**
 * handles selected or deselecting merchants in a list where multiple merchants can be selected
 * @param  {Array}  merchantList        a list of merchant to use in an OrgSelectorWidget
 * @param  {Obejct} selectedItem        a merchant object from an OrgSelectorWidget
 * @param  {Array}  currentSelectedItem a list of currently-selected merchants in the merchantList
 * @return {Array}                      a revised list of currently-selected merchants
 */
export function handleMerchantSelection(merchantList, selectedItem, currentSelectedItem = []) {
  const currentItems = currentSelectedItem || []; // needed because null does not coerce to default arg
  const existingItemInList = merchantList.find((merchant) => {
    return merchant.id === selectedItem.id;
  });

  if (!existingItemInList) {
    return currentItems;
  }

  if (!selectedItem.selected) {
    return currentItems.filter((item) => {
      return item.id !== selectedItem.id;
    });
  } else {
    return [...currentItems, selectedItem];
  }
}

export function hasHeartlandHierarchyAccess(dataAccess) {
  let checkedReportId = true;
  if (dataAccess.length < 1) {
    return false;
  } else {
    dataAccess.map((orgId) => {
      if (orgId.label.replace(/ /g, '') === '055') {
        orgId.organizations.map((regionId) => {
          if (regionId.label.replace(/ /g, '') === '63' || regionId.label.replace(/ /g, '') === '64'
            || regionId.label.replace(/ /g, '') === '65' || regionId.label.replace(/ /g, '') === '66') {
            checkedReportId = false;
          }
        });
      }
    });
    if (checkedReportId === false) {
      return false;
    } else return true;
  }
}


export default {
  uuidv4,
  getNewDataAccessFilter,
  mapSelectors,
  buildFilteredDataAccess,
  getSelectorColumns,
  handleMerchantSelection,
  hasHeartlandHierarchyAccess,
};
