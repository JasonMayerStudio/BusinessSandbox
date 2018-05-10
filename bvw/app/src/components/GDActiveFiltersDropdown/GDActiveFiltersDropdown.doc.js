import React, { Component } from 'react';
import { Page, ReactSpecimen } from 'catalog';
import {
  getActiveFiltersList,
} from 'Helpers/testHelpers/testReportAPIv2Mocks';
import GDActiveFiltersDropdown from './GDActiveFiltersDropdown.js';

const filters = getActiveFiltersList();

export default class GDActiveFiltersDropdownDoc extends Component {
  constructor() {
    super();

    this.state = {
      activeFilters: filters,
      dropdownToggled: {
        active: false,
        inactive: false,
      },
    };
  }

  toggleDropdown = (event) => {
    event.persist();
    const dropdownToggled = this.state.dropdownToggled;

    dropdownToggled[`${event.currentTarget.id}`] = !dropdownToggled[`${event.currentTarget.id}`];

    this.setState({ dropdownToggled });
  }

  deactivateFilter = (id) => {
    const newFilters = this.state.activeFilters.filter((filter) => {
      return filter.id !== id;
    });

    this.setState({
      activeFilters: newFilters,
    });
  }

  render() {
    const translations = {
      active: 'Active',
      filters: 'Filters',
      inactive: 'Inactive',
      noActiveFilters: 'You do not have any active filters.',
      noActiveFiltersContent: 'Apply a filter to see which are active.',
    };

    return (
      <Page>
        <h2>GDActiveFiltersDropdown</h2>

        <p>Use this component for displaying currently applied filters on the data of the GDReportRunner.</p>

        <ReactSpecimen span={3}>
          <GDActiveFiltersDropdown
            activeFilters={this.state.activeFilters}
            deactivateFilter={this.deactivateFilter}
            dropdownToggled={this.state.dropdownToggled}
            extraClass="some-class"
            toggleDropdown={this.toggleDropdown}
            translations={translations}
          />
        </ReactSpecimen>

        <ReactSpecimen span={3}>
          <GDActiveFiltersDropdown
            activeFilters={[]}
            dropdownToggled={this.state.dropdownToggled}
            extraClass="some-class"
            toggleDropdown={this.toggleDropdown}
            translations={translations}
          />
        </ReactSpecimen>

        <h3>Parameters</h3>

        <ul>
          <li><strong>extraClass</strong>:
            an extra style class that will go on the component root element
          </li>
          <li><strong>activeFilters</strong>: array of filter data, including column id, column name, and parameters of either a single value or a range</li>
          <li><strong>deactivateFilter</strong>: handler to deactivate a filter and remove it from the list</li>
          <li><strong>dropdownToggled</strong>: conditional whether to show or hide active/inactive filter panel</li>
          <li><strong>toggleDropdown</strong>: handler to toggle the dropdown open or closed</li>
          <li><strong>translations</strong>: a list of strings to translate static data</li>
        </ul>

      </Page>
    );
  }
}
