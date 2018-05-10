import React, { Component } from 'react';
import { Page, ReactSpecimen } from 'catalog';

import { findItem } from 'Components/forms/select-input';
import {
  getSingleReportv2,
} from 'Helpers/testHelpers/testReportAPIv2Mocks';

import GDFilterElement from './GDFilterElement.js';

const filters = getSingleReportv2().filters;

class GDFilterElementDoc extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentValues: {},
      filters: [
        filters[0],
        filters[2],
        filters[6],
        filters[7],
      ],
    };
  }

  updateFormState = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    const newValues = Object.assign({}, this.state.currentValues, {
      [field]: { v1: value },
    });

    this.setState({
      currentValues: newValues,
    });
  }

  handleRangeChange = (id, selector, value) => {
    const key = (selector === 'end') ? 'v2' : 'v1';
    const currentRange = (this.state.currentValues[id]) || {};

    const newRange = Object.assign(currentRange, { [key]: value });

    const newValues = Object.assign({}, this.state.currentValues, {
      [id]: newRange,
    });

    this.setState({
      currentValues: newValues,
    });
  }

  handleSelection = (value, event) => {
    event.stopPropagation();

    const field = Number(event.target.dataset.name);
    const findFilterList = this.state.filters.filter((filter) => {
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
    const filterElements = this.state.filters.map((filter) => {
      return (
        <GDFilterElement
          currentValues={this.state.currentValues[filter.reportFilterId]}
          extraClass="some-class"
          filter={filter}
          handleSelection={this.handleSelection}
          key={filter.reportFilterId}
          onChange={this.updateFormState}
          onRangeChange={this.handleRangeChange}
        />
      );
    });

    return (
      <Page>
        <h2>GDFilterElement</h2>

        <p>Use this component to output a report filter</p>

        <ReactSpecimen span={6}>
          <div className="gd-filter-elements-container">
            {filterElements}
          </div>
        </ReactSpecimen>

        <h3>Parameters</h3>

        <h4>Required Parameters</h4>
        <ul>
          <li><strong>filter</strong>: the filter to be displayed</li>
          <li><strong>onChange</strong>: an event handler for single input fields, like text inputs</li>
          <li><strong>onRangeChange</strong>: an event handler for single input fields, like currency range and dates</li>
        </ul>

        <h4>Optional Parameters</h4>
        <ul>
          <li><strong>currentValues</strong>:
            an object that contains either the single value, under the key <strong>v1</strong>, or beginning and ending values, under the keys <strong>v2</strong> and <strong>v2</strong>
          </li>
          <li><strong>extraClass</strong>:
            an extra style class that will go on the component root element
          </li>
          <li><strong>translations</strong>: an object of translation text that contains a <strong>to</strong> key</li>
        </ul>

      </Page>
    );
  }
}

export default GDFilterElementDoc;
