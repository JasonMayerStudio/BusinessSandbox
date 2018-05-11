import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import InformationIcon from 'Components/icons/information-icon/InformationIcon.js';
import OutsideClickHandler from '../OutsideClickHandler';

import './GDActiveFiltersDropdown.scss';

class GDActiveFiltersDropdown extends Component {
  onClickOutside = () => {
    const infoButtonWrapper = this.infoBubbleWrapper;
    infoButtonWrapper.click();
  };

  render() {
    const {
      activeFilters,
      deactivateFilter,
      dropdownToggled,
      extraClass,
      toggleDropdown,
      translations,
    } = this.props;

    const wrapperClass = classnames('gd-active-filters-dropdown', {
      [extraClass]: extraClass,
    });

    const filterStatus = (activeFilters.length > 0)
      ? translations.active
      : translations.inactive;

    const id = (activeFilters.length > 0)
      ? 'active'
      : 'inactive';

    const contentClass = classnames('gd-active-filters-dropdown__wrapper', {
      'gd-active-filters-dropdown__inactive': !activeFilters.length,
      'gd-active-filters-dropdown__active': activeFilters.length > 0,
    });

    const mapActiveFilters = activeFilters.map((filter) => {
      return (
        <li className="gd-active-filters-dropdown__item" key={filter.id}>
          <span className="column-name">{filter.name}</span>
          {filter.value && <div>
            <span className="value">{filter.value}</span>
          </div>}
          {filter.values && <div>
            <span className="value">{filter.values.v1}-</span>
            <span className="value">{filter.values.v2}</span>
          </div>}
          {!filter.isPrimaryFilter && <span
            onClick={() => deactivateFilter(filter.id)}
            className="remove"
            role="button"
            tabIndex={0}
          />}
        </li>
      );
    });

    return (
      <div className={wrapperClass}>
        <span className="gd-active-filters-dropdown__trigger">{translations.filters}: <strong>{filterStatus}</strong></span>
        <div
          className="information-bubble__wrapper"
          id={id}
          onClick={(event) => toggleDropdown(event)}
          role="button"
          tabIndex={0}
          ref={(input) => { this.infoBubbleWrapper = input; }}
        >
          <InformationIcon />
        </div>
        {dropdownToggled[`${id}`] && activeFilters.length > 0 &&
          <OutsideClickHandler
            onClickOutside={this.onClickOutside}
          >
            <div className={contentClass}>
              <h1 className="gd-active-filters-dropdown__header">
                {translations.active} {translations.filters}
              </h1>
              <ul className="gd-active-filters-dropdown__content gd-active-filters-dropdown__content--has-filters">
                {mapActiveFilters}
              </ul>
            </div>
          </OutsideClickHandler>}
        {dropdownToggled[`${id}`] && !activeFilters.length &&
          <OutsideClickHandler
            onClickOutside={this.onClickOutside}
          >
            <div className={contentClass}>
              <h1 className="gd-active-filters-dropdown__header">
                {translations.inactive} {translations.filters}
              </h1>
              <div className="gd-active-filters-dropdown__content gd-active-filters-dropdown__content--no-filters">
                <span className="question-mark" />
                <span className="create-a-filter__title">{translations.noActiveFilters}</span>
                <span className="create-a-filter__content">{translations.noActiveFiltersContent}</span>
              </div>
            </div>
          </OutsideClickHandler>}
      </div>
    );
  }
}

GDActiveFiltersDropdown.propTypes = {
  activeFilters: PropTypes.array,
  dropdownToggled: PropTypes.object,
  deactivateFilter: PropTypes.func,
  extraClass: PropTypes.string,
  toggleDropdown: PropTypes.func,
  translations: PropTypes.object,
};

GDActiveFiltersDropdown.defaultProps = {
  activeFilters: [],
  deactivateFilter: () => { },
  dropdownToggled: {},
  extraClass: '',
  toggleDropdown: () => { },
  translations: {
    active: 'Active',
    filters: 'Filters',
    inactive: 'Inactive',
    noActiveFilters: 'You do not have any active filters.',
    noActiveFiltersContent: 'Apply a filter to see which are active.',
  },
};

export default GDActiveFiltersDropdown;
