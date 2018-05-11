import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import RecentSearch from './GDHierarchySelectorRecentSearchListItem';

import './GDHierarchySelectorRecentSearchList.scss';

const GDHierarchySelectorRecentSearchList = (props) => {
  const {
    extraClass,
    recentSearches,
    onBrowse,
    onRecentSearch,
    translations,
  } = props;

  const wrapperClass = classnames('gd-hierarchy-selector-recent-search-list', {
    [extraClass]: extraClass,
  });

  const displayRecentSearchList = recentSearches.map((search) => (
    <RecentSearch
      key={search.id}
      searchItem={search}
      onRecentSearch={onRecentSearch}
    />
  ));

  return (
    <div className={wrapperClass}>
      {displayRecentSearchList}
      <div className="gd-hierarchy-selector-recent-search-list__footer">
        <div
          role="button"
          tabIndex="-1"
          onClick={onBrowse}
        >
          {translations.browseAllItems}
        </div>
      </div>
    </div>
  );
};

GDHierarchySelectorRecentSearchList.propTypes = {
  extraClass: PropTypes.string,
  recentSearches: PropTypes.array,
  onBrowse: PropTypes.func,
  onRecentSearch: PropTypes.func,
  translations: PropTypes.object.isRequired,
};

GDHierarchySelectorRecentSearchList.defaultProps = {
  extraClass: '',
  recentSearches: [],
  onBrowse: () => { },
  onRecentSearch: () => { },
};

export default GDHierarchySelectorRecentSearchList;
