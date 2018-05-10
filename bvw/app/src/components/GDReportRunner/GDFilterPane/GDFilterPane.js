import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { findItem } from 'Components/forms/select-input';
import GDFilterElement from 'Components/GDReportRunner/GDFilterElement';
import PrimaryButton from 'Components/Button/PrimaryButton';
import Button from 'Components/Button/Button';
import TriangleDown from 'Components/icons/TriangleDown/TriangleDown';

import './GDFilterPane.scss';

class GDFilterPane extends Component {
  constructor(props) {
    super(props);

    const showMoreFilters = false; // always start by only showing first 8 filters

    const currentValuesObj = this.props.currentValues.reduce((obj, value) => {
      return Object.assign(obj, {
        [value.id]: {
          v1: value.v1,
          v2: value.v2,
          type: value.type,
        },
      });
    }, {});

    this.state = {
      selectedCardType: null,
      currentValues: currentValuesObj,
      filtersCount: this.props.filterList.length,
      selectedItem: this.props.filterList[0],
      showMoreFilters,
      sortedFilterList: this.getCurrentlyShownFilters(props.filterList, showMoreFilters),
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.filterList.length !== this.props.filterList.length) {
      const newSortedFilterList = this.getCurrentlyShownFilters(nextProps.filterList, this.state.showMoreFilters);

      this.setState({ sortedFilterList: newSortedFilterList });
    }

    if (nextProps.currentValues.length !== this.props.currentValues.length) {
      const currentValuesObj = nextProps.currentValues.reduce((obj, value) => {
        return Object.assign(obj, {
          [value.id]: {
            v1: value.v1,
            v2: value.v2,
            type: value.type,
          },
        });
      }, {});

      this.setState({ currentValues: currentValuesObj });
    }
  }

  getCurrentlyShownFilters = (filters, showAll) => {
    const visibleFilters = filters
      .filter((filter) => filter.isVisible)
      .map((filter) => {
        return Object.assign({}, filter, {
          id: filter.reportFilterId,
        });
      });

    return (showAll)
      ? this.sortFilters(visibleFilters)
      : this.sortFilters(visibleFilters).slice(0, 8);
  }

  handleSingleSelection = (value, event) => {
    event.stopPropagation();
    const field = Number(event.target.dataset.name);
    const findFilterList = this.props.filterList.filter((filter) => {
      return filter.reportFilterId === Number(event.target.dataset.name);
    });
    const foundFilter = findFilterList.shift();

    if (foundFilter) {
      const newSelection = findItem(foundFilter.filterValues, value);
      const newValues = Object.assign({}, this.state.currentValues, {
        [field]: { v1: value },
      });

      if (newSelection) {
        this.setState({ currentValues: newValues });
      }
    }
  }


  handleSelection = (value, event) => {
    event.stopPropagation();

    const field = Number(event.target.dataset.name);
    const findFilterList = this.props.filterList.filter((filter) => {
      return filter.reportFilterId === Number(event.target.dataset.name);
    });

    const foundFilter = findFilterList.shift();

    if (foundFilter) {
      const newSelection = findItem(foundFilter.filterValues, value);

      const currentMultiSelectValue = (this.state.currentValues[field])
        ? this.state.currentValues[field].v1
        : [];

      currentMultiSelectValue.push(newSelection.value);

      const newValues = Object.assign({}, this.state.currentValues, {
        [field]: { v1: currentMultiSelectValue },
      });

      if (newSelection) {
        this.setState({
          currentValues: newValues,
        });
      }
    }
  }

  sortFilters = (filterList = []) => {
    return filterList.sort((filterA, filterB) => {
      return Number(filterA.displayOrder) - Number(filterB.displayOrder);
    });
  }

  get displayFilterList() {
    return this.state.sortedFilterList.map((filter) => {
      return (
        <GDFilterElement
          currentValues={this.state.currentValues[filter.reportFilterId]}
          filter={filter}
          handleSelection={this.handleSelection}
          handleSingleSelection={this.handleSingleSelection}
          key={filter.id}
          onChange={this.updateFormState}
          onRangeChange={this.handleRangeChange}
          translations={this.props.translations}
        />
      );
    });
  }

  /**
   * handler called by STRING type filters to update the input value in state
   * @param    {Event} event standard synthetic React event wrapper around DOM event
   * @modifies {state}       updates the matching value in currentValues array in component state
   *
   * @description each value object for a STRING looks like this:
   *                {"id":267, "v1":"last_year", "type":"EXACT"}
   *                where id = filter ID
   *                      v1 = the single value
   *                      type = match type
   */
  updateFormState = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    const newValues = Object.assign({}, this.state.currentValues, {
      [field]: { v1: value },
    });

    if (value === '') { delete newValues[field]; }

    this.setState({
      currentValues: newValues,
    });
  }

  /**
   * handler called by Range type filters (CURRENCY, DATE) to update the input value in state
   * @param    {number} id       the database ID of the matching filter
   * @param    {string} selector 'start' for the first value (v1),'end' for second value (v2)
   * @param    {string} value    the value to use
   * @modifies {state}           updates the matching value in currentValues array in component state
   *
   * @description each value object for a STRING looks like this:
   *                {"id":267, "v1":"last_year", "type":"EXACT"}
   *                where id = filter ID
   *                      v1 = the single value
   *                      type = match type
   */
  handleRangeChange = (id, selector, value) => {
    const key = (selector === 'end') ? 'v2' : 'v1';
    const currentRange = (this.state.currentValues[id]) || {};
    const newValue = value === '' ? undefined : value;

    // set newRange to undefined if v1 and v2 are both undefined
    let newRange = Object.assign(currentRange, { [key]: newValue });
    if (newRange.v1 === undefined && newRange.v2 === undefined) {
      newRange = undefined;
    }

    // update newValues
    let newValues = Object.assign({}, this.state.currentValues, {
      [id]: newRange,
    });

    // remove id key from newValues if newRange is undefined > cleanup newValues
    const ids = this.state.currentValues[id];
    if (ids !== undefined && newRange === undefined) {
      const { [id.toString()]: omit, ...rest } = newValues;
      newValues = rest;
    }

    const currentId = newValues[id];
    if ((currentId.v1 === null && currentId.v2 === null) ||
     (currentId.v1 === '' && currentId.v2 === '')) {
      delete newValues[id];
    }

    this.setState({
      currentValues: newValues,
    });
  }

  toggleFilters = () => {
    const newShowStatus = !this.state.showMoreFilters;
    const newSortedFilterList = this.getCurrentlyShownFilters(this.props.filterList, newShowStatus);
    this.setState({
      showMoreFilters: newShowStatus,
      sortedFilterList: newSortedFilterList,
    });
  }

  clearFilters = () => {
    this.setState({
      currentValues: {},
    });
  }

  applyFilters = () => {
    this.props.applyFilters(this.state.currentValues);
    this.props.closeFilterPane();
  }

  render() {
    const wrapperClass = classnames('gd-filter-pane', {
      [this.props.extraClass]: this.props.extraClass,
      hidden: !this.props.isVisible,
      show: this.props.isVisible,
      push: this.props.pushFilterPane,
    });

    const filterPaneContentClass = classnames('gd-filter-pane__content', {
      more: this.state.showMoreFilters,
      base: !this.state.showMoreFilters,
    });

    const moreLessText = (this.state.showMoreFilters)
      ? this.props.translations.less
      : this.props.translations.more;

    return (
      <div className={wrapperClass}>
        <div className={filterPaneContentClass}>
          <div className="filter-input-container">
            {this.displayFilterList}
          </div>
        </div>

        {this.props.filterList.length > 8 ?
          <div className="toggle-breakline">
            <PrimaryButton
              action={this.toggleFilters}
              extraClass="btn-breakline"
              iconDirection="right"
              icon={TriangleDown}
              id={`${this.props.reportName}_btn_${moreLessText}`}
            >
              {moreLessText}
            </PrimaryButton>
          </div>
          : ''
        }

        <div className="gd-filter-pane__footer">
          <Button
            action={this.clearFilters}
            extraClass="clear-filters"
            category="link-inline"
            id={`${this.props.reportName}_btn_clear`}
          >
            {this.props.translations.clear}
          </Button>
          <div className="gd-filter-pane__footer-right">
            <Button
              action={this.props.closeFilterPane}
              extraClass="gd-filter-pane__close-button"
              id={`${this.props.reportName}_btn_cancel`}
            >
              {this.props.translations.cancel}
            </Button>
            <PrimaryButton
              action={this.applyFilters}
              extraClass="gd-filter-pane__apply-button"
              id={`${this.props.reportName}_btn_apply`}
            >
              {this.props.translations.apply}
            </PrimaryButton>
          </div>
        </div>
      </div>
    );
  }
}

GDFilterPane.propTypes = {
  applyFilters: PropTypes.func.isRequired,
  closeFilterPane: PropTypes.func.isRequired,
  currentValues: PropTypes.array,
  extraClass: PropTypes.string,
  filterList: PropTypes.array.isRequired,
  isVisible: PropTypes.bool,
  pushFilterPane: PropTypes.bool,
  translations: PropTypes.object,
  reportName: PropTypes.string,
};

GDFilterPane.defaultProps = {
  currentValues: [],
  extraClass: '',
  reportName: '',
  filterList: [],
  isVisible: false,
  pushFilterPane: false,
  translations: {
    apply: 'Apply',
    cancel: 'Cancel',
    clear: 'Clear',
    less: 'Less',
    more: 'More',
  },
};

export default GDFilterPane;
