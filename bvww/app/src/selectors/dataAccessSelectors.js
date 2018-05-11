export function mapDataAccessList(listToAugment = [], mainLineField = 'label', subLineField) {
  return listToAugment.map((item) => {
    const newItem = Object.assign({}, item, { mainLine: item[mainLineField] });
    if (subLineField) {
      newItem.subLine = item[subLineField];
    }
    return newItem;
  });
}

/**
 * descend from a point in the data hierarchy, to find all merchants at the leaves
 * @param  {Array}  dataList   a segment of a data access hierarchy tree
 * @param  {Array}  parentIds  the beginning of an array to hold the lineage of
 *                             each merchant
 *                             (empty array if starting from a list of corps;,
 *                              otherwise, id of org whose child orgs are in first arg)
 * @return {Array}             a flat array of merchant objects from a data access
 *                             structure, with the lineage of org ids adding to each
 */
export function getAllSelectableMerchants(dataList, parentIds) {
  return dataList.reduce((list, org) => {
    let parentOrg;
    if (org.organizations.length) {
      // org has children, so dive deeper
      parentOrg = getAllSelectableMerchants(org.organizations, [...parentIds, org.id]);
    }

    if (parentOrg) {
      return list.concat(parentOrg);
    } else {
      // at a merchant "leaf", so add this to the list
      const foundMerchant = Object.assign({}, org);
      foundMerchant.parentIds = parentIds;
      return list.concat(foundMerchant);
    }
  }, []);
}

export function getNewSelectorFilter(dataList = []) {
  return {
    startData: dataList,
    corps: dataList,
    selectedCorp: null,
    regions: [],
    selectedRegion: null,
    principals: [],
    selectedPrincipal: null,
    associates: [],
    selectedAssociate: null,
    chains: [],
    selectedChain: null,
    availableMerchants: [],
    selectedMerchants: null,
  };
}

export function getLowestSelectedOrgs(dataFilter = []) {
  return dataFilter.reduce((list, org) => {
    // start an array for this level
    let nextLevel = [];
    if (org.organizations.length) {
      // if there are levels below this one, check them first
      nextLevel = getLowestSelectedOrgs(org.organizations);
    } else {
      // otherwise, we are at the merchant level, so let's try to build an array
      if (org.selected) { // eslint-disable-line no-lonely-if
        // this merchant is selected, so ADD it to the array
        return list.concat(org.id);
      } else {
        // this merchant is not selected, so just return existing merchant array
        return list;
      }
    }

    if (nextLevel.length) {
      // if we got an array from a lower level, just pass it on up
      return nextLevel;
    } else {
      // if still no array, check this level
      if (org.selected) { // eslint-disable-line no-lonely-if
        // this higher level becomes our one-element array
        return [org.id];
      } else {
        // no change here, so pass existing empty list
        return list;
      }
    }
  }, []);
}

export function getCurrentDataAccess(access = []) {
  const dataAccessRows = [];

  if (access) {
    access.forEach((corp) => {
      if (corp.hasAccess) {
        dataAccessRows.push({
          corp: Object.assign({}, corp, { endOfChain: true }),
          region: { label: 'All' },
          principal: { label: 'All' },
          associate: { label: 'All' },
          chain: { label: 'All' },
          merchant: { label: 'All' },
        });
      } else {
        corp.organizations.forEach((region) => {
          if (region.hasAccess) {
            dataAccessRows.push({
              corp,
              region: Object.assign({}, region, { endOfChain: true }),
              principal: { label: 'All' },
              associate: { label: 'All' },
              chain: { label: 'All' },
              merchant: { label: 'All' },
            });
          } else {
            region.organizations.forEach((principal) => {
              if (principal.hasAccess) {
                dataAccessRows.push({
                  corp,
                  region,
                  principal: Object.assign({}, principal, { endOfChain: true }),
                  associate: { label: 'All' },
                  chain: { label: 'All' },
                  merchant: { label: 'All' },
                });
              } else {
                principal.organizations.forEach((associate) => {
                  if (associate.hasAccess) {
                    dataAccessRows.push({
                      corp,
                      region,
                      principal,
                      associate: Object.assign({}, associate, { endOfChain: true }),
                      chain: { label: 'All' },
                      merchant: { label: 'All' },
                    });
                  } else {
                    associate.organizations.forEach((chain) => {
                      if (chain.hasAccess) {
                        dataAccessRows.push({
                          corp,
                          region,
                          principal,
                          associate,
                          chain: Object.assign({}, chain, { endOfChain: true }),
                          merchant: { label: 'All' },
                        });
                      } else {
                        chain.organizations.forEach((merchant) => {
                          if (merchant.hasAccess) {
                            dataAccessRows.push({
                              corp,
                              region,
                              principal,
                              associate,
                              chain,
                              merchant: Object.assign({}, merchant, { endOfChain: true }),
                            });
                          }
                        });
                      }
                    });
                  }
                });
              }
            });
          }
        });
      }
    });
  }

  return dataAccessRows;
}

export default {
  mapDataAccessList,
  getAllSelectableMerchants,
  getNewSelectorFilter,
  getLowestSelectedOrgs,
  getCurrentDataAccess,
};
