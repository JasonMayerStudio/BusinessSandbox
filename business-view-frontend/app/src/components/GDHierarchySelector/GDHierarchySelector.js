import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Collapse } from 'react-collapse';

import {
  GDHierarchySelectorFavoriteList,
  GDHierarchySelectorRecentSearchList,
  GDHierarchySelectorSearchManager,
  GDHierarchySelectorSearchList,
} from 'Components/GDHierarchySelector';
import OutsideClickHandler from '../OutsideClickHandler';

import './GDHierarchySelector.scss';

class GDHierarchySelector extends Component {
  constructor(props) {
    super(props);

    this.attachBindings();

    this.state = {
      searchText: '',
      isOpen: false,
      showRecentSearchList: false,
      showFavoritesList: false,
      showSearchList: false,
      showSelectionsList: false,
      activeItems: props.activeItems,
      tempActiveItems: props.activeItems,
      recentSearches: this.updateRecentSearches('', props.recentSearches),
    };
  }

  updateRecentSearches(searchText = '', searches) {
    if (searchText !== '') {
      return searches
        .filter((item) => item.query !== searchText)
        .concat({
          id: new Date().valueOf(),
          query: searchText,
        })
        .sort((a, b) => b.id - a.id)
        .slice(0, 5);
    }
    return searches
      .sort((a, b) => b.id - a.id)
      .slice(0, 5);
  }

  attachBindings() {
    this.handleApply = this.handleApply.bind(this);
    this.handleBrowse = this.handleBrowse.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.searchChangeHandler = this.searchChangeHandler.bind(this);
    this.searchRecentSelectHandler = this.searchRecentSelectHandler.bind(this);
    this.searchTextFocusHandler = this.searchTextFocusHandler.bind(this);
    this.toggleFavorites = this.toggleFavorites.bind(this);
    this.toggleRecentSearchList = this.toggleRecentSearchList.bind(this);
    this.toggleSearchList = this.toggleSearchList.bind(this);
    this.toggleSelectionsList = this.toggleSelectionsList.bind(this);
    this.updateRecentSearches = this.updateRecentSearches.bind(this);
  }

  handleApply(updatedItems) {
    const { recentSearches, searchText } = this.state;
    this.setState({
      activeItems: updatedItems,
      tempActiveItems: updatedItems,
      searchText: '',
      isOpen: false,
      showRecentSearchList: false,
      showFavoritesList: false,
      showSearchList: false,
      showSelectionsList: false,
      recentSearches: this.updateRecentSearches(searchText, recentSearches),
    });
  }

  handleChecked(updatedTempItems) {
    this.setState({
      tempActiveItems: updatedTempItems,
    });
  }

  handleBrowse() {
    this.setState({
      searchText: '',
      isOpen: true,
      showRecentSearchList: false,
      showFavoritesList: false,
      showSearchList: true,
      showSelectionsList: false,
    });
  }

  handleClose() {
    this.setState({
      searchText: '',
      isOpen: false,
      showRecentSearchList: false,
      showFavoritesList: false,
      showSearchList: false,
      showSelectionsList: false,
    });
  }

  handleClickOutside() {
    const { showSearchList } = this.state;
    if (showSearchList) return; // always keep search list open if the user clicks outside

    this.setState({
      searchText: '',
      isOpen: false,
      showRecentSearchList: false,
      showFavoritesList: false,
      showSearchList: false,
      showSelectionsList: false,
    });
  }

  handleSave() {
    /* TODO: (2018-05-03) NEED OPTION TO DISPLAY SAVE DIALOG */
    alert('DISPLAY SAVE DIALOG'); // eslint-disable-line no-alert
  }

  toggleFavorites() {
    const { showFavoritesList } = this.state;
    this.setState({
      searchText: '',
      isOpen: !showFavoritesList,
      showFavoritesList: !showFavoritesList,
      showRecentSearchList: false,
      showSearchList: false,
      showSelectionsList: false,
    });
  }

  toggleRecentSearchList() {
    const { showRecentSearchList } = this.state;
    this.setState({
      searchText: '',
      isOpen: !showRecentSearchList,
      showRecentSearchList: !showRecentSearchList,
      showFavoritesList: false,
      showSearchList: false,
      showSelectionsList: false,
    });
  }

  toggleSearchList() {
    this.setState({
      searchText: '',
      isOpen: true,
      showRecentSearchList: false,
      showFavoritesList: false,
      showSearchList: true,
      showSelectionsList: false,
    });
  }

  toggleSelectionsList() {
    const { showSelectionsList } = this.state;
    this.setState({
      searchText: '',
      isOpen: !showSelectionsList,
      showRecentSearchList: false,
      showFavoritesList: false,
      showSearchList: false,
      showSelectionsList: !showSelectionsList,
    });
  }

  searchChangeHandler(searchText) {
    this.setState({
      searchText,
      isOpen: true,
      showRecentSearchList: searchText === '',
      showFavoritesList: false,
      showSearchList: searchText !== '',
      showSelectionsList: false,
    });
  }

  searchTextFocusHandler() {
    const { showSearchList } = this.state;
    this.setState({
      isOpen: true,
      showRecentSearchList: showSearchList === false,
      showFavoritesList: false,
      showSearchList: showSearchList === true,
      showSelectionsList: false,
    });
  }

  searchRecentSelectHandler(recentSearch) {
    const { recentSearches } = this.state;
    this.setState({
      searchText: recentSearch,
      showRecentSearchList: false,
      showFavoritesList: false,
      showSearchList: recentSearch !== '',
      showSelectionsList: false,
      recentSearches: this.updateRecentSearches(recentSearch, recentSearches),
    });
  }

  render() {
    const {
      isOpen,
      searchText,
      showRecentSearchList,
      showFavoritesList,
      showSearchList,
      showSelectionsList,
      activeItems,
      tempActiveItems,
      recentSearches,
    } = this.state;

    const {
      extraClass,
      availableItems,
      savedSelections,
      itemNumberColumnName,
      itemNameColumnName,
      translations,
    } = this.props;

    const wrapperClass = classnames('gd-hierarchy-selector', {
      [extraClass]: extraClass,
    });

    return (
      <OutsideClickHandler
        onClickOutside={this.handleClickOutside}
      >
        <div className={wrapperClass}>
          <GDHierarchySelectorSearchManager
            className="something"
            searchText={searchText}
            numberSelected={activeItems.length}
            onFavoritesListClick={this.toggleFavorites}
            onRecentSearchListClick={this.toggleRecentSearchList}
            onSearchTextChange={this.searchChangeHandler}
            onSearchTextFocus={this.searchTextFocusHandler}
            onSelectionsListClick={this.toggleSelectionsList}
            triggerFavorites={showFavoritesList}
            translations={translations}
          />

          <Collapse isOpened={isOpen}>
            {showFavoritesList && <GDHierarchySelectorFavoriteList
              className="something"
              numberSelected={activeItems.length}
              savedSelections={savedSelections}
              onSave={this.handleSave}
              onSelectionsListClick={this.toggleSelectionsList}
              translations={translations}
            />}

            {(showSearchList || showSelectionsList) && <GDHierarchySelectorSearchList
              className="something"
              searchText={searchText}
              availableItems={availableItems}
              activeItems={activeItems}
              tempActiveItems={tempActiveItems}
              onApply={this.handleApply}
              onChecked={this.handleChecked}
              onClose={this.handleClose}
              onSave={this.handleSave}
              showSelections={showSelectionsList}
              isOpened={showSearchList || showSelectionsList}
              itemNumberColumnName={itemNumberColumnName}
              itemNameColumnName={itemNameColumnName}
              translations={translations}
            />}

            {showRecentSearchList && <GDHierarchySelectorRecentSearchList
              className="something"
              recentSearches={recentSearches}
              onBrowse={this.handleBrowse}
              onRecentSearch={this.searchRecentSelectHandler}
              translations={translations}
            />}
          </Collapse>
        </div >
      </OutsideClickHandler>
    );
  }
}

GDHierarchySelector.propTypes = {
  extraClass: PropTypes.string,
  recentSearches: PropTypes.array,
  availableItems: PropTypes.array.isRequired,
  activeItems: PropTypes.array,
  savedSelections: PropTypes.array,
  itemNumberColumnName: PropTypes.string.isRequired,
  itemNameColumnName: PropTypes.string.isRequired,
  translations: PropTypes.object,
};

GDHierarchySelector.defaultProps = {
  extraClass: '',
  recentSearches: [],
  activeItems: [],
  savedSelections: [],
  translations: {
    refineByItem: 'Refine by Merchant Number',
    savedSelections: 'Saved Selections',
    noSavedSelections: 'Sorry, you don\'t have any Saved Selections',
    viewSelections: 'View Selections',
    createSavedSelection: 'To create a Saved Selection, search for Merchant Numbers you would like to save then click Save Selections.',
    itemsTitle: 'Merchant Number',
    pluralText: 's',
    browseAllItems: 'Browse All Merchant Numbers...',
    availableItems: 'Available Items',
    selectAll: 'Select All',
    clearSelected: 'Clear Selected',
    unapplied: 'Unapplied',
    cancel: 'Cancel',
    apply: 'Apply',
    currentSelected: 'Current Selected Item Numbers',
    clearAll: 'Clear All',
    saveSelections: 'Save Selections',
    none: 'None',
  },
};

export default GDHierarchySelector;
