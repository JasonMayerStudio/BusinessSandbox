import React from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '../..//icons/SearchIcon';

const GDHierarchySelectorRecentSearchListItem = (props) => {
  const { searchItem, onRecentSearch } = props;

  return (
    <div
      key={`gdhs-recent-search-${searchItem.id}`}
      className="gd-hierarchy-selector-recent-search-list__item"
      onClick={() => onRecentSearch(searchItem.query)}
      role="button"
      aria-label={searchItem.query}
      tabIndex="-1"
    >
      <div className="gd-hierarchy-selector__sub-icon-container">
        <div className="gd-hierarchy-selector__sub-icon"><SearchIcon /></div>
      </div>
      {searchItem.query}
    </div>
  );
};

GDHierarchySelectorRecentSearchListItem.propTypes = {
  searchItem: PropTypes.object,
  onRecentSearch: PropTypes.func,
};

GDHierarchySelectorRecentSearchListItem.defaultProps = {
  searchItem: {},
  onRecentSearch: () => { },
};

export default GDHierarchySelectorRecentSearchListItem;
