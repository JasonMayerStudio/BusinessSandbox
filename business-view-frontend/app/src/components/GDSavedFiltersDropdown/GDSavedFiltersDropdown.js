import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Search from 'Components/search/Search';

import './GDSavedFiltersDropdown.scss';

const GDSavedFiltersDropdown = ({
  extraClass,
  noSavedFilters,
  onChange,
  removeSavedFilter,
  savedFilters,
  searchTerm,
  setSavedFilterAsActive,
  translations,
}) => {
  const wrapperClass = classnames('gd-filters-dropdown', {
    [extraClass]: extraClass,
  });

  const contentClass = classnames('gd-filters-dropdown__content', {
    'gd-filters-dropdown__content--has-filters': savedFilters.length >= 0,
    'gd-filters-dropdown__content--no-filters': noSavedFilters,
  });

  const mapSavedFilters = savedFilters.map((filter) => {
    const filterClasses = classnames('filter-name', {
      'filter-active': filter.isActive,
    });

    return (
      <li
        className="gd-filters-dropdown__item"
        key={filter.id}
      >
        <span
          className="gd-filters-dropdown__filter-row"
          onClick={() => setSavedFilterAsActive(filter.id)}
          role="button"
          tabIndex={0}
        >
          <div
            className={filterClasses}
            title={filter.name}
          >
            {filter.name}
          </div>
          {filter.isActive && <span className="active loaded">{translations.active}</span>}
        </span>
        <span
          className="remove"
          onClick={() => removeSavedFilter(filter.id)}
          role="button"
          tabIndex={0}
        />
      </li>
    );
  });

  return (
    <div className={wrapperClass}>
      <h1 className="gd-filters-dropdown__header">{translations.title}</h1>
      {savedFilters.length >= 0 && !noSavedFilters && <div className={contentClass}>
        <Search
          filterText={searchTerm}
          onChange={onChange}
          placeholder={translations.placeholder}
        />
        <ul className="gd-filters-dropdown__items">
          {savedFilters.length === 0 ?
            <li className="gd-filters-dropdown__item">{translations.noResults}</li> :
          mapSavedFilters}
        </ul>
      </div>}
      {noSavedFilters && <div
        className={contentClass}
      >
        <span className="question-mark" />
        <span className="create-a-filter__title">{translations.createAFilterTitle}</span>
        <span className="create-a-filter__content">{translations.createAFilterContent}</span>
      </div>}
    </div>
  );
};

GDSavedFiltersDropdown.propTypes = {
  extraClass: PropTypes.string,
  noSavedFilters: PropTypes.bool,
  onChange: PropTypes.func,
  removeSavedFilter: PropTypes.func,
  savedFilters: PropTypes.array,
  searchTerm: PropTypes.string,
  setSavedFilterAsActive: PropTypes.func,
  translations: PropTypes.object,
};

GDSavedFiltersDropdown.defaultProps = {
  extraClass: '',
  noSavedFilters: false,
  onChange: () => {},
  removeSavedFilter: () => {},
  savedFilters: [],
  searchTerm: '',
  setSavedFilterAsActive: () => {},
  translations: {},
};

export default GDSavedFiltersDropdown;
