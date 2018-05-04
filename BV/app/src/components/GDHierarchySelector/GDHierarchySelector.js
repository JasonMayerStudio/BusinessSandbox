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

import './GDHierarchySelector.scss';

class GDHierarchySelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      isOpen: false,
      showRecentSearchList: false,
      showFavoritesList: false,
      showSearchList: false,
      showSelectionsList: false,
      activeMerchants: props.activeMerchants,
      recentSearches: this.getRecentSearches(props.recentSearches),
    };

    this.attachBindings();
  }

  getRecentSearches(searches) {
    if (this.state !== undefined && this.state.searchText !== undefined) {
      return searches
        .concat({
          id: new Date().valueOf(),
          query: this.state.searchText,
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
    this.handleClose = this.handleClose.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.getRecentSearches = this.getRecentSearches.bind(this);
    this.searchChangeHandler = this.searchChangeHandler.bind(this);
    this.searchRecentSelectHandler = this.searchRecentSelectHandler.bind(this);
    this.toggleFavorites = this.toggleFavorites.bind(this);
    this.toggleRecentSearchList = this.toggleRecentSearchList.bind(this);
    this.toggleSearchList = this.toggleSearchList.bind(this);
    this.toggleSelectionsList = this.toggleSelectionsList.bind(this);
  }

  handleApply(updatedMerchants) {
    const { recentSearches } = this.state;
    this.setState({
      activeMerchants: updatedMerchants,
      searchText: '',
      isOpen: false,
      showRecentSearchList: false,
      showFavoritesList: false,
      showSearchList: false,
      showSelectionsList: false,
      recentSearches: this.getRecentSearches(recentSearches),
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

  handleSave() {
    /* TODO: (2018-05-03) NEED OPTION TO DISPLAY SAVE DIALOG */
    alert('DISPLAY SAVE DIALOG'); // eslint-disable-line no-alert
  }

  toggleFavorites() {
    this.setState({
      searchText: '',
      isOpen: !this.state.showFavoritesList,
      showFavoritesList: !this.state.showFavoritesList,
      showRecentSearchList: false,
      showSearchList: false,
      showSelectionsList: false,
    });
  }

  toggleRecentSearchList() {
    this.setState({
      searchText: '',
      isOpen: !this.state.showRecentSearchList,
      showRecentSearchList: !this.state.showRecentSearchList,
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
    this.setState({
      searchText: '',
      isOpen: !this.state.showSelectionsList,
      showRecentSearchList: false,
      showFavoritesList: false,
      showSearchList: false,
      showSelectionsList: !this.state.showSelectionsList,
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

  searchRecentSelectHandler(recentSearch) {
    this.setState({
      searchText: recentSearch,
      showRecentSearchList: false,
      showFavoritesList: false,
      showSearchList: recentSearch !== '',
      showSelectionsList: false,
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
      activeMerchants,
      recentSearches,
    } = this.state;

    const {
      extraClass,
      availableMerchants,
      savedSelections,
    } = this.props;

    const wrapperClass = classnames('gd-hierarchy-selector', {
      [extraClass]: extraClass,
    });

    return (
      <div className={wrapperClass}>
        <GDHierarchySelectorSearchManager
          className="something"
          searchText={searchText}
          numberSelected={activeMerchants.length}
          onFavoritesListClick={this.toggleFavorites}
          onRecentSearchListClick={this.toggleRecentSearchList}
          onSearchTextChange={this.searchChangeHandler}
          onSearchTextFocus={this.searchChangeHandler}
          onSelectionsListClick={this.toggleSelectionsList}
          triggerFavorites={showFavoritesList}
        />

        <Collapse isOpened={isOpen}>
          {showFavoritesList && <GDHierarchySelectorFavoriteList
            className="something"
            numberSelected={activeMerchants.length}
            savedSelections={savedSelections}
            onSave={this.handleSave}
            onSelectionsListClick={this.toggleSelectionsList}
          />}

          {(showSearchList || showSelectionsList) && <GDHierarchySelectorSearchList
            className="something"
            searchText={searchText}
            availableMerchants={availableMerchants}
            activeMerchants={activeMerchants}
            onApply={this.handleApply}
            onClose={this.handleClose}
            onSave={this.handleSave}
            showSelections={showSelectionsList}
            isOpened={showSearchList || showSelectionsList}
          />}

          {showRecentSearchList && <GDHierarchySelectorRecentSearchList
            className="something"
            recentSearches={recentSearches}
            onBrowse={this.toggleSearchList}
            handleRecentSearch={this.searchRecentSelectHandler}
          />}
        </Collapse>
      </div >
    );
  }
}

GDHierarchySelector.propTypes = {
  extraClass: PropTypes.string,
  recentSearches: PropTypes.array,
  availableMerchants: PropTypes.array.isRequired,
  activeMerchants: PropTypes.array,
  savedSelections: PropTypes.array,
};

GDHierarchySelector.defaultProps = {
  extraClass: '',
  recentSearches: [],
  activeMerchants: [],
  savedSelections: [],
};

export default GDHierarchySelector;
