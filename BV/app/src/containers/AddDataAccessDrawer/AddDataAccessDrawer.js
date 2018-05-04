/* eslint-disable react/prefer-stateless-function, class-methods-use-this */
import counterpart from 'counterpart';
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Button from 'Components/Button';
import CloseIcon from 'Components/icons/CloseIcon';
import PrimaryButton from 'Components/Button/PrimaryButton';

import { initCommonTranslate } from 'Utils/languages';

import { normalizeUser } from 'Selectors/userSelectors';
import {
  mapDataAccessList,
  getAllSelectableMerchants,
  getLowestSelectedOrgs,
  getCurrentDataAccess,
} from 'Selectors/dataAccessSelectors';
import { selectCurrentPreferences } from 'Selectors/preferencesSelectors';

import { combineUserProperties } from '../../api/apiHelpers';
import { getUserById, getUserDataAccessById } from '../../api/userApi';
import DataAccessFilter from '../DataAccessFilter';
import {
  CORP_INDEX,
  REGION_INDEX,
  PRINCIPAL_INDEX,
  ASSOCIATE_INDEX,
  CHAIN_INDEX,
  MERCHANT_INDEX,
  mapSelectors,
  buildFilteredDataAccess,
  getSelectorColumns,
  getNewDataAccessFilter,
} from '../../utils/dataAccessUtils';
import { revertStatusText } from '../../utils/userUtils';

import * as userActions from '../../actions/userActions';

export class AddDataAccessDrawer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pendingChanges: false,
      savedFilters: [],
    };

    this.attachBindings();
  }

  componentDidMount() {
    this.toggleDrawer();

    getUserById(this.props.userId)
      .then((response) => {
        const user = Object.assign({}, response);

        getUserDataAccessById(user.userId)
          .then((dataAccess) => {
            user.dataAccess = dataAccess;
            this.setState({
              user: normalizeUser(user),
            }, () => {
              this.getDataAccessRows();
            });
          });
      });
  }

  componentWillUnmount() {
    this.toggleDrawer();
  }

  getDataAccessRows() {
    this.setState({
      dataAccessRows: getCurrentDataAccess(this.state.user.dataAccess),
    }, () => {
      let startingFilters;
      const rowNumber = +(this.props.match.params.rowNumber);
      if (Number.isInteger(rowNumber)) {
        const rowToFilter = this.state.dataAccessRows[rowNumber];
        const existingFilter = [this.transformFilterForForm(rowToFilter)];
        startingFilters = this.prepopulateExistingFilter(existingFilter);
      } else {
        const blankFilter = this.getFilter(this.props.dataAccess, 0);
        startingFilters = [blankFilter];
      }

      this.setState({
        savedFilters: startingFilters,
      });
    });
  }

  getFilter(dataAccess, filterChainIndex = 0) {
    const newFilter = getNewDataAccessFilter(dataAccess);

    const selectorColumns = getSelectorColumns();
    const newRow = mapSelectors(
      filterChainIndex,
      newFilter,
      selectorColumns,
      this.getFilterListSearchField,
      this.getHandleSelect,
      this);

    newFilter.currentRow = newRow;

    return newFilter;
  }

  getFilterListSearchField(filterChainIndex, dataSource, columnIndex) {
    return function updateSearchField(value) {
      const lowercaseSearchTerm = value && value.toLowerCase && value.toLowerCase();
      const filteredItems = dataSource.filter((item) => {
        const lowerMain = item.mainLine.toLowerCase();
        const lowerSub = item.subLine && item.subLine.toLowerCase();
        return (lowerMain.includes(lowercaseSearchTerm) ||
                (lowerSub && lowerSub.includes(lowercaseSearchTerm)));
      });
      const validatedItems = (filteredItems.length) ? filteredItems : [{
        id: 0,
        mainLine: 'No items found',
      }];

      const currentFilterChain = this.state.savedFilters[filterChainIndex];
      const newRow = [...currentFilterChain.currentRow];

      newRow[columnIndex].currentData = validatedItems;
      newRow[columnIndex].currentSearchTerm = value;

      const newSavedFilters = this.state.savedFilters.map((filter, index) => {
        if (filterChainIndex === index) {
          return Object.assign({}, filter, { currentRow: newRow });
        } else {
          return filter;
        }
      });

      this.setState({
        savedFilters: newSavedFilters,
      });
    };
  }

  getHandleSelect(filterChainIndex, dataSource, columnIndex) {
    return function handleItemSelect(value) {
      const selectedItemIndex = dataSource.findIndex((item) => {
        return item.id === value;
      });

      if (selectedItemIndex === -1) {
        return;
      }

      const selectedItem = dataSource[selectedItemIndex];
      const newSelectedState = !selectedItem.selected;
      selectedItem.selected = newSelectedState;

      const currentFilterChain = this.state.savedFilters[filterChainIndex];
      const newRow = [...currentFilterChain.currentRow];

      newRow[columnIndex].currentData = dataSource;
      newRow[columnIndex].currentSearchTerm = '';

      if (columnIndex < MERCHANT_INDEX) {
        const beginningOfLineage = [];
        let orgsForMerchants;

        // check for selection vs. deselection
        if (selectedItem.selected) {
          // item just got selected
          // step: unselect any other selected item
          const newDataSource = dataSource.map((item) => {
            const isItemSelected = (item.id === selectedItem.id);
            return Object.assign({}, item, { selected: isItemSelected });
          });
          newRow[columnIndex].currentData = newDataSource;

          const subLineField = (columnIndex === CHAIN_INDEX) ? 'name' : null;
          const currentOrgs = mapDataAccessList(selectedItem.organizations, 'label', subLineField);

          newRow[columnIndex].forceClose = true;

          newRow[columnIndex].currentSelectedItem = selectedItem;

          newRow[columnIndex + 1].currentData = currentOrgs;
          newRow[columnIndex + 1].currentOnChange = this.getFilterListSearchField(filterChainIndex, currentOrgs, columnIndex + 1).bind(this);
          newRow[columnIndex + 1].currentHandleSelect = this.getHandleSelect(filterChainIndex, currentOrgs, columnIndex + 1, false).bind(this);

          orgsForMerchants = selectedItem.organizations;
          beginningOfLineage.push(selectedItem.id);
        } else {
          // item just got de-selected
          // step: unselect all items
          const newDataSource = dataSource.map((item) => {
            return Object.assign({}, item, { selected: false });
          });
          newRow[columnIndex].currentData = newDataSource;

          newRow[columnIndex].currentSelectedItem = null;
          for (let i = columnIndex + 1; i < MERCHANT_INDEX; i += 1) {
            newRow[i].currentData = [];
            newRow[i].currentSelectedItem = null;
          }
          newRow[MERCHANT_INDEX].currentSelectedItem = null;

          orgsForMerchants = newRow[columnIndex].currentData;
          if (columnIndex &&
              newRow[columnIndex - 1].currentSelectedItem) {
            beginningOfLineage.push(newRow[columnIndex - 1].currentSelectedItem.id);
          }
        }

        const filteredMerchants = mapDataAccessList(getAllSelectableMerchants(orgsForMerchants, beginningOfLineage), 'label', 'name');
        newRow[MERCHANT_INDEX].currentData = filteredMerchants;
        newRow[MERCHANT_INDEX].currentOnChange = this.getFilterListSearchField(filterChainIndex, filteredMerchants, MERCHANT_INDEX).bind(this);
        newRow[MERCHANT_INDEX].currentHandleSelect = this.getHandleSelect(filterChainIndex, filteredMerchants, MERCHANT_INDEX, true).bind(this);
      }

      const newFilter = Object.assign({}, currentFilterChain);
      if (columnIndex === MERCHANT_INDEX) {
        // backfill earlier selectors
        const ancestors = [...selectedItem.parentIds];

        while (ancestors.length) {
          let ancestorColumnIndex = MERCHANT_INDEX;
          switch (ancestors.length) {
            case 5: // corp
              ancestorColumnIndex = CORP_INDEX;
              break;
            case 4: // region
              ancestorColumnIndex = REGION_INDEX;
              break;
            case 3: // principal
              ancestorColumnIndex = PRINCIPAL_INDEX;
              break;
            case 2: // associate
              ancestorColumnIndex = ASSOCIATE_INDEX;
              break;
            case 1: // chain
              ancestorColumnIndex = CHAIN_INDEX;
              break;
            default:
              break;
          }

          const nextAncestor = ancestors.shift();
          const selectedAncestor = newRow[ancestorColumnIndex].currentData.find((item) => {
            return item.id === nextAncestor;
          });
          selectedAncestor.selected = true;

          const nextLevelData = mapDataAccessList(selectedAncestor.organizations);

          newRow[ancestorColumnIndex].currentSelectedItem = selectedAncestor;

          if (ancestorColumnIndex < CHAIN_INDEX) {
            newRow[ancestorColumnIndex + 1].currentData = nextLevelData;
          }

          const filterListToUpdate = newRow[ancestorColumnIndex].selectorDataType;
          const filterSelectedItemToUpdate = newRow[ancestorColumnIndex].selectedItemType;
          newFilter[filterListToUpdate] = dataSource;
          newFilter[filterSelectedItemToUpdate] = newRow[ancestorColumnIndex].currentSelectedItem;
        }

        newRow[MERCHANT_INDEX].currentSelectedItem = (newRow[MERCHANT_INDEX].currentSelectedItem &&
                                                   newRow[MERCHANT_INDEX].currentSelectedItem.length)
          ? newRow[MERCHANT_INDEX].currentSelectedItem.concat(selectedItem)
          : [selectedItem];

        const parentChainIds = newRow[CHAIN_INDEX].currentSelectedItem.organizations.map((org) => { return org.id; });
        newRow[MERCHANT_INDEX].currentData = newRow[MERCHANT_INDEX].currentData.reduce((memo, item) => {
          const selected = newRow[MERCHANT_INDEX].currentSelectedItem.includes(item);
          if (parentChainIds.includes(item.id)) {
            const selectedMerchant = Object.assign({}, item, { selected });
            memo.push(selectedMerchant);
          }
          return memo;
        }, []);
      }

      const filterListToUpdate = newRow[columnIndex].selectorDataType;
      const filterSelectedItemToUpdate = newRow[columnIndex].selectedItemType;
      newFilter[filterListToUpdate] = dataSource;
      newFilter[filterSelectedItemToUpdate] = (columnIndex === MERCHANT_INDEX)
        ? newRow[MERCHANT_INDEX].currentSelectedItem
        : selectedItem;

      newFilter.currentRow = newRow;

      const newSavedFilters = this.state.savedFilters.map((filter, index) => {
        if (filterChainIndex === index) {
          return newFilter;
        } else {
          return filter;
        }
      });

      this.setState({
        pendingChanges: true,
        savedFilters: newSavedFilters,
      });
    };
  }

  transformFilterForForm(rowToFilter) {
    const existingFilter = getNewDataAccessFilter(this.props.dataAccess);

    if (rowToFilter.corp.label !== 'All') {
      const selectedCorpIndex = this.props.dataAccess.findIndex((corp) => corp.id === rowToFilter.corp.id);
      if (selectedCorpIndex > -1) {
        existingFilter.selectedCorp = Object.assign({}, existingFilter.corps[selectedCorpIndex], { selected: true });
        existingFilter.regions = mapDataAccessList(existingFilter.selectedCorp.organizations);
      }

      if (rowToFilter.region.label !== 'All') {
        const selectedRegionIndex = existingFilter.regions.findIndex((region) => region.id === rowToFilter.region.id);
        if (selectedRegionIndex > -1) {
          existingFilter.selectedRegion = Object.assign({}, existingFilter.regions[selectedRegionIndex], { selected: true });
          existingFilter.principals = mapDataAccessList(existingFilter.selectedRegion.organizations);
        }

        if (rowToFilter.principal.label !== 'All') {
          const selectedPrincipalIndex = existingFilter.principals.findIndex((principal) => principal.id === rowToFilter.principal.id);
          if (selectedPrincipalIndex > -1) {
            existingFilter.selectedPrincipal = Object.assign({}, existingFilter.principals[selectedPrincipalIndex], { selected: true });
            existingFilter.associates = mapDataAccessList(existingFilter.selectedPrincipal.organizations);
          }

          if (rowToFilter.associate.label !== 'All') {
            const selectedAssociateIndex = existingFilter.associates.findIndex((associate) => associate.id === rowToFilter.associate.id);
            if (selectedAssociateIndex > -1) {
              existingFilter.selectedAssociate = Object.assign({}, existingFilter.associates[selectedAssociateIndex], { selected: true });
              existingFilter.chains = mapDataAccessList(existingFilter.selectedAssociate.organizations);
            }

            if (rowToFilter.chain.label !== 'All') {
              const selectedChainIndex = existingFilter.chains.findIndex((chain) => chain.id === rowToFilter.chain.id);
              if (selectedChainIndex > -1) {
                existingFilter.selectedChain = Object.assign({}, existingFilter.chains[selectedChainIndex], { selected: true });
                existingFilter.availableMerchants = mapDataAccessList(existingFilter.selectedChain.organizations, 'label', 'name');
              }

              if (rowToFilter.merchant.label !== 'All') {
                const selectedMerchantIndex = existingFilter.availableMerchants.findIndex((merchant) => merchant.id === rowToFilter.merchant.id);
                if (selectedMerchantIndex > -1) {
                  existingFilter.selectedMerchant = [
                    Object.assign({}, existingFilter.availableMerchants[selectedMerchantIndex], { selected: true }),
                  ];
                }
              }
            }
          }
        }
      }
    }

    existingFilter.startData = buildFilteredDataAccess(existingFilter);

    return existingFilter;
  }

  prepopulateExistingFilter(savedFilters) {
    const selectorColumns = getSelectorColumns();

    const hydratedFilters = savedFilters.map((filter, filterChainIndex) => {
      const newRow = mapSelectors(
        filterChainIndex,
        filter,
        selectorColumns,
        this.getFilterListSearchField,
        this.getHandleSelect,
        this);

      for (let i = 0; i < MERCHANT_INDEX; i += 1) {
        newRow[i].currentSearchTerm = '';
      }

      return Object.assign({}, filter, { currentRow: newRow });
    });

    return hydratedFilters;
  }

  addDataAccess() {
    const newFilter = this.state.savedFilters[0];
    newFilter.startData = buildFilteredDataAccess(newFilter);

    const newAccessId = getLowestSelectedOrgs(newFilter.startData);

    const existingOrganizationIds = this.state.dataAccessRows.map((org) => {
      const orgIdToSave = Object.values(org).reduce((foundId, field) => {
        if (field.endOfChain) {
          return field.id;
        } else {
          return foundId;
        }
      }, 0);

      return orgIdToSave;
    });

    const newOrganizationIds = existingOrganizationIds.concat(newAccessId);

    this.saveComplexDataAccess(newOrganizationIds);
  }

  saveComplexDataAccess(newDataAccess) {
    this.setState({ loading: true });

    const currentUserData = Object.assign({}, this.state.user);
    currentUserData.status = revertStatusText(currentUserData.status.toLowerCase());
    currentUserData.organizationIds = newDataAccess;

    const userToSave = combineUserProperties(
      currentUserData,
      currentUserData.role,
      currentUserData.permissions,
      currentUserData.organizationIds);

    this.props.userActions.updateUser(userToSave).then(() => {
      this.setState({
        loading: false,
        pendingChanges: false,
      });

      this.props.history.goBack();
    });
  }

  deleteRow(chainPosition) {
    return () => {
      const newSavedFilters = this.state.savedFilters.filter((filter, index) => {
        if (index !== chainPosition) {
          return true;
        }
        return false;
      });

      if (!newSavedFilters.length) {
        const blankFilter = this.getFilter(this.props.dataAccess, 0);
        newSavedFilters.push(blankFilter);
      }

      this.setState({
        pendingChanges: true,
        savedFilters: newSavedFilters,
      });
    };
  }

  clearAllAccess() {
    const newFilter = this.getFilter(this.props.dataAccess, 0);

    this.setState({
      pendingChanges: true,
      savedFilters: [newFilter],
    });
  }

  closeDrawer(event) {
    event.preventDefault();

    this.props.history.goBack();
  }

  attachBindings() {
    this.getFilter = this.getFilter.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
    this.addDataAccess = this.addDataAccess.bind(this);
    this.saveComplexDataAccess = this.saveComplexDataAccess.bind(this);
    this.toggleDrawer = this.props.toggleSecondaryDrawer.bind(this);
    this.clearAllAccess = this.clearAllAccess.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.getDataAccessRows = this.getDataAccessRows.bind(this);
  }

  render() {
    const dataAccessFilters = this.state.savedFilters.map((filter) => {
      return (
        <DataAccessFilter
          key={this.props.userId} // temporary solution here, because will only ever be one at a time
          filterChain={filter.currentRow}
          direction="vertical"
        />
      );
    });

    initCommonTranslate();

    const addOrEditDataAccess = this.props.match.params.rowNumber === 'new' ?
                                counterpart('globalTranslate.drawer.addDataAccess') :
                                counterpart('globalTranslate.drawer.editDataAccess');

    return (
      <form onSubmit={this.submitForm} className="drawer-content">
        <div className="drawer-heading">
          <h1 className="drawer-headline">{addOrEditDataAccess}</h1>
          <Button
            type="button"
            action={this.closeDrawer}
            iconDirection="right"
            icon={CloseIcon}
            verticalAlign="super"
          >
            {counterpart('globalTranslate.drawer.close')}
          </Button>
        </div>
        <div className="drawer-body">
          <div className="drawer-main">
            <div className="drawer-main-top">
              <div className="left-right-content-stacked">
                <h2 className="drawer-sub-head">{counterpart('globalTranslate.drawer.selectDataAccess')}</h2>
                <div className="button-group-horizontal">
                  <Button
                    category="link-inline"
                    action={this.clearAllAccess}
                    disabled={false}
                  >
                    {counterpart('globalTranslate.drawer.clearAll')}
                  </Button>
                </div>
              </div>
              <div>
                {dataAccessFilters}
              </div>
            </div>
            <div className="drawer-main-bottom">
              <div className="button-group-vertical">
                <PrimaryButton
                  action={this.addDataAccess}
                  disabled={!this.state.pendingChanges || this.props.userUpdating}
                >
                  {this.props.userUpdating ? counterpart('globalTranslate.drawer.adding') : addOrEditDataAccess}
                </PrimaryButton>
                <Button
                  type="button"
                  action={this.closeDrawer}
                >
                  {counterpart('globalTranslate.drawer.cancel')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

AddDataAccessDrawer.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  toggleSecondaryDrawer: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
  userActions: PropTypes.object.isRequired,
  dataAccess: PropTypes.array.isRequired,
  userUpdating: PropTypes.bool,
};

AddDataAccessDrawer.defaultProps = {
  userUpdating: false,
};

function mapStateToProps(state, ownProps) {
  return {
    userId: ownProps.match.params.userId,
    dataAccess: state.auth.session.user.dataAccess,
    userUpdating: (state.users.isFetching),
    preferences: selectCurrentPreferences(state.preferences),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddDataAccessDrawer));

/* eslint-enable react/prefer-stateless-function, class-methods-use-this */
