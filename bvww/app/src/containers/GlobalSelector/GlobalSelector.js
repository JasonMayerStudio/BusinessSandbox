/* eslint-disable react/prefer-stateless-function, class-methods-use-this, global-require */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import counterpart from 'counterpart';

import Button from 'Components/Button';
import HollowButton from 'Components/Button/HollowButton';
import PrimaryButton from 'Components/Button/PrimaryButton';

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
  uuidv4,
  handleMerchantSelection,
} from '../../utils/dataAccessUtils';
import {
  mapDataAccessList,
  getAllSelectableMerchants,
} from '../../selectors/dataAccessSelectors';
import * as globalFilterActions from '../../actions/globalFilterActions';

import './GlobalSelector.scss';

export class GlobalSelector extends Component {
  constructor(props) {
    super(props);

    let startingFilters;
    if (props.globalSelector.filters && props.globalSelector.filters.length) {
      startingFilters = this.prepopulateExistingFilter(props.globalSelector.filters);
    } else {
      const blankFilter = this.getFilter(props.dataAccess, 0);
      startingFilters = [blankFilter];
    }

    this.state = {
      pendingChanges: props.globalSelector.filters && props.globalSelector.filters.length,
      savedFilters: startingFilters,
    };

    this.attachBindings();

    registerTranslations();
  }

  getFilter(dataAccess, filterChainIndex) {
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
    newFilter.isActive = true;
    newFilter.indexId = filterChainIndex;

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
          newFilter[filterListToUpdate] = newRow[ancestorColumnIndex].currentData;
          newFilter[filterSelectedItemToUpdate] = newRow[ancestorColumnIndex].currentSelectedItem;
        }

        newRow[MERCHANT_INDEX].currentSelectedItem =
          handleMerchantSelection(dataSource, selectedItem, newRow[MERCHANT_INDEX].currentSelectedItem);

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

  attachBindings() {
    this.getFilter = this.getFilter.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
    this.addAnotherFilter = this.addAnotherFilter.bind(this);
    this.updateSelector = this.updateSelector.bind(this);
    this.clearGlobalSelector = this.clearGlobalSelector.bind(this);
    this.closeGlobalSelector = this.closeGlobalSelector.bind(this);
    this.handleActive = this.handleActive.bind(this);
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

  addAnotherFilter() {
    const inactiveFilters = this.state.savedFilters.map((filter) => {
      return Object.assign({}, filter, { isActive: false });
    });
    const newFilter = this.getFilter(this.props.dataAccess, this.state.savedFilters.length);

    this.setState({
      savedFilters: inactiveFilters.concat(newFilter),
    });
  }

  updateSelector() {
    this.props.actions.clearGlobalFilter();

    this.state.savedFilters.forEach((filterToAdd) => {
      if (filterToAdd.selectedCorp) {
        const rollupStartData = buildFilteredDataAccess(filterToAdd);

        const newFilter = Object.assign({}, filterToAdd, { startData: rollupStartData });
        this.props.actions.addToGlobalFilter(newFilter);
      }
    });

    this.setState({
      pendingChanges: false,
    });

    this.props.history.goBack();
  }

  clearGlobalSelector() {
    const newFilter = this.getFilter(this.props.dataAccess, 0);

    this.setState({
      pendingChanges: true,
      savedFilters: [newFilter],
    });
  }

  closeGlobalSelector() {
    this.props.history.goBack();
  }

  handleActive(index) {
    const inactiveFilters = this.state.savedFilters.map((filter) => {
      return Object.assign({}, filter, { isActive: false });
    });

    inactiveFilters[index].isActive = true;

    this.setState({
      savedFilters: inactiveFilters,
    });
  }

  get totalSelectedMerchants() {
    return this.state.savedFilters.reduce((total, filter) => {
      const additionalMerchants = filter.currentRow[MERCHANT_INDEX].currentSelectedItem
        ? filter.currentRow[MERCHANT_INDEX].currentSelectedItem.length
        : filter.currentRow[MERCHANT_INDEX].currentData.length;
      return total + additionalMerchants;
    }, 0);
  }

  render() {
    // needed to prevent a missing translation key for pluralized translations
    // reference: https://github.com/martinandert/counterpart/issues/12#issuecomment-169392776
    counterpart.setFallbackLocale('en');

    const dataAccessFilters = this.state.savedFilters.map((filter, index) => {
      return (
        <DataAccessFilter
          key={uuidv4()}
          filterChain={filter.currentRow}
          onDelete={this.deleteRow(index)}
          direction="horizontal"
          indexId={filter.indexId}
          isActive={filter.isActive}
          selectActive={this.handleActive}
        />
      );
    });

    return (
      <article className="top-bottom-content global-selector-container">
        <div className="top-content">
          <header className="top-content">
            <div className="left-right-content padded">
              <h1>{counterpart('globalSelector.title')}</h1>
              <div className="button-group-horizontal">
                <Button
                  type="button"
                  action={this.clearGlobalSelector}
                >
                  {counterpart('globalSelector.clearAll')}
                </Button>
              </div>
            </div>
          </header>
          <section className="padded">
            <div className="global-selector">
              {dataAccessFilters}
            </div>
            <div className="button-group-vertical global-selector-addmore">
              <HollowButton
                action={this.addAnotherFilter}
                disabled={!this.state.pendingChanges}
              >
                <span>{counterpart('globalSelector.addMore')}</span>
                <span className="plus-icon show-xs">+</span>
              </HollowButton>
            </div>
          </section>
        </div>
        <footer className="bottom-content">
          <div className="left-right-content padded-tall">
            <div className="left-content">
              {this.totalSelectedMerchants} {counterpart('globalSelector.merchants', { count: this.totalSelectedMerchants })}
            </div>
            <div className="button-group-horizontal">
              <HollowButton
                type="button"
                action={this.closeGlobalSelector}
              >
                {counterpart('globalSelector.cancel')}
              </HollowButton>
              <PrimaryButton
                type="button"
                action={this.updateSelector}
                disabled={!this.state.pendingChanges}
              >
                {counterpart('globalSelector.update')}
              </PrimaryButton>
            </div>
          </div>
        </footer>
      </article>
    );
  }
}

GlobalSelector.propTypes = {
  dataAccess: PropTypes.array.isRequired,
  globalSelector: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    dataAccess: state.auth.session.user.dataAccess,
    globalSelector: state.globalFilter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(globalFilterActions, dispatch),
  };
}

function registerTranslations() {
  counterpart.registerTranslations('en-US', require('./translations/en-us.json'));
  counterpart.registerTranslations('en-GB', require('./translations/en-gb.json'));
  counterpart.registerTranslations('fr-CA', require('./translations/fr-ca.json'));
  counterpart.registerTranslations('zh-Hans', require('./translations/zh-Hans.json'));
  counterpart.registerTranslations('zh-Hant', require('./translations/zh-Hant.json'));
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GlobalSelector));

/* eslint-enable react/prefer-stateless-function, class-methods-use-this, global-require */
