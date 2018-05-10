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
    handleRecentSearch,
  } = props;

  const wrapperClass = classnames('gd-hierarchy-selector-recent-search-list', {
    [extraClass]: extraClass,
  });

  const displayRecentSearchList = recentSearches.map((search) => (
    <RecentSearch
      key={search.id}
      searchItem={search}
      handleRecentSearch={handleRecentSearch}
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
          Browse All Merchant Numbers...
        </div>
      </div>
    </div>
  );
};

GDHierarchySelectorRecentSearchList.propTypes = {
  extraClass: PropTypes.string,
  recentSearches: PropTypes.array,
  onBrowse: PropTypes.func,
  handleRecentSearch: PropTypes.func,
};

GDHierarchySelectorRecentSearchList.defaultProps = {
  extraClass: '',
  recentSearches: [],
  onBrowse: () => { },
  handleRecentSearch: () => { },
};

export default GDHierarchySelectorRecentSearchList;
