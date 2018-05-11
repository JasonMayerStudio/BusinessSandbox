import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import FilterDefinition from 'Components/FilterDefinition';
import GDFilterElement from 'Components/GDReportRunner/GDFilterElement';
import Search from 'Components/search';
import WidgetButton from 'Components/WidgetButton';
import { findItem } from 'Components/forms/select-input/';

import './GDReportBuilderReportFilters.scss';

class GDReportBuilderReportFilters extends Component {
  constructor(props) {
    super(props);

    const parsedActiveFilters = props.activeFilters.map((filter) => {
      return Object.assign({}, filter, {
        identifier: filter.templateColumnId,
        id: filter.templateColumnId,
      });
    });

    this.state = {
      currentValues: {},
      searchFilter: '',
      showFilterPicker: false,
      activeFilters: parsedActiveFilters,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activeFilters.length !== this.props.activeFilters.length) {
      const parsedActiveFilters = nextProps.activeFilters.map((filter) => {
        return Object.assign({}, filter, {
          identifier: filter.identifier || filter.templateColumnId,
          id: filter.templateColumnId,
        });
      });

      this.setState({
        activeFilters: parsedActiveFilters,
      });
    }
  }

  onChange = (newSearchString) => {
    this.setState({ searchFilter: newSearchString });
  }

  toggleAddFilter = () => {
    this.setState({
      showFilterPicker: !this.state.showFilterPicker,
    });
  }

  toggleOpen = (identifier) => {
    const newState = this.state.activeFilters.map((filter) => {
      if (filter.identifier === identifier) {
        return Object.assign({}, filter, {
          isOpen: !filter.isOpen,
          tempValue: filter.filterDefault || '',
        });
      } else {
        return filter;
      }
    });

    this.setState({ activeFilters: newState });
  }

  addFilter = (templateColumnId) => {
    this.props.addFilter(templateColumnId);

    this.setState({
      searchFilter: '',
      showFilterPicker: false,
    });
  }

  saveFilter = (identifier) => {
    const newValues = this.state.currentValues[identifier];
    newValues.id = identifier;

    this.props.addValuesToFilter(newValues);

    this.toggleOpen(identifier);
  }

  removeFilter = (identifier) => {
    const newState = this.state.activeFilters.filter((filter) => {
      return filter.identifier !== identifier;
    });

    this.setState({ activeFilters: newState });
  }

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

  render() {
    const wrapperClass = classnames('gd-report-builder__report-filters', {
      [this.props.extraClass]: this.props.extraClass,
    });

    const { activeColumns, translations } = this.props;
    const { showFilterPicker, searchFilter } = this.state;

    const existingFilters = this.state.activeFilters.map((filter) => {
      return (
        <FilterDefinition
          column={filter}
          isOpen={filter.isOpen}
          key={filter.identifier}
          removeHandler={this.removeFilter}
          saveHandler={this.saveFilter}
          toggleHandler={this.toggleOpen}
        >
          <GDFilterElement
            currentValues={this.state.currentValues[filter.templateColumnId]}
            filter={filter}
            handleSelection={this.handleSelection}
            key={filter.templateColumnId}
            onChange={this.updateFormState}
            onRangeChange={this.handleRangeChange}
            translations={this.props.translations}
          />
        </FilterDefinition>
      );
    });

    const existingFilterIds = this.state.activeFilters.map((filter) => filter.templateColumnId);
    const availableFilters = activeColumns
      .filter((column) => {
        return !existingFilterIds.includes(column.templateColumnId);
      })
      .map((column) => {
        const parsedColumn = Object.assign({}, column, { identifier: column.templateColumnId.toString(), isSelected: false });

        return (
          <FilterDefinition
            addHandler={() => { this.addFilter(parsedColumn.templateColumnId); }}
            column={parsedColumn}
            key={parsedColumn.identifier}
          />
        );
      });

    return (
      <div className={wrapperClass}>
        <div>
          {existingFilters}
        </div>
        <div className="widget-button__popup-wrapper">
          <WidgetButton
            action={this.toggleAddFilter}
          >
            Add
          </WidgetButton>
          {
            showFilterPicker &&
            (
              <div className="widget-button__popup">
                <span className="widget-button__popup-header">
                  {translations.filterPopupTitle}
                </span>
                <div className="widget-button__popup-row">
                  <Search
                    filterText={searchFilter}
                    onChange={this.onChange}
                    placeholder={translations.filterPopupSearchPlaceholder}
                  />
                </div>
                <div className="widget-button__popup-content">
                  {availableFilters}
                </div>
              </div>
            )
          }
        </div>
      </div>
    );
  }
}

GDReportBuilderReportFilters.propTypes = {
  activeColumns: PropTypes.array,
  activeFilters: PropTypes.array,
  addFilter: PropTypes.func.isRequired,
  addValuesToFilter: PropTypes.func.isRequired,
  extraClass: PropTypes.string,
  translations: PropTypes.object.isRequired,
  filterList: PropTypes.array,
};

GDReportBuilderReportFilters.defaultProps = {
  activeColumns: [],
  activeFilters: [],
  filterList: [],
  extraClass: '',
};

export default GDReportBuilderReportFilters;
