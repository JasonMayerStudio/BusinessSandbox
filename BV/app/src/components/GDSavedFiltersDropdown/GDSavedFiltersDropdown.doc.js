import React, { Component } from 'react';
import { Page, ReactSpecimen } from 'catalog';
import GDSavedFiltersDropdown from 'Components/GDSavedFiltersDropdown';
import OptionBoxPopup from 'Components/OptionBoxPopup';

import {
  getSavedFiltersv2,
} from 'Helpers/testHelpers/testReportAPIv2Mocks';

import {
  mapSavedFilters,
} from 'Utils/reports/reportFilterUtils';

const savedFilters = getSavedFiltersv2();

export default class GDSavedFiltersDropdownDoc extends Component {
  constructor() {
    super();

    this.state = {
      currentSearchTerm: '',
      currentSavedFilters: mapSavedFilters(savedFilters),
      noSavedFilters: savedFilters.length === 0,
    };
  }

  setSavedFilterAsActive = (id) => {
    const newFilters = this.state.currentSavedFilters.map((filter) => {
      return Object.assign({}, filter, {
        isActive: filter.id === id ? !filter.isActive : filter.isActive,
      });
    });

    this.setState({
      currentSavedFilters: newFilters,
    });
  }

  removeSavedFilter = (id) => {
    const newFilters = this.state.currentSavedFilters.filter((filter) => {
      return filter.id !== id;
    });

    this.setState({
      currentSavedFilters: newFilters,
    });
  }

  updateSearchField = (value) => {
    const lowercaseSearchTerm = value && value.toLowerCase && value.toLowerCase();
    const filteredFilters = savedFilters.filter((filter) => { // the most redundant, yet appropriate name ever
      const lowercaseFilterName = filter.name.toLowerCase();
      return lowercaseFilterName.includes(lowercaseSearchTerm);
    });

    this.setState({
      currentSearchTerm: value,
      currentSavedFilters: filteredFilters,
    });
  }

  render() {
    const translations = {
      active: 'Active',
      createAFilterContent: 'To select a filter, please create a filter.',
      createAFilterTitle: 'Start by creating a filter',
      title: 'Saved Filters',
      placeholder: 'Search by Filter Name...',
    };

    return (
      <Page>
        <h2>GDSavedFiltersDropdown</h2>

        <p>Use this component for presenting a list of saved filters to apply to a data set, search through a list of filters, or remove a saved filter. </p>

        <h5>With data</h5>

        <ReactSpecimen span={3}>
          <div style={{ textAlign: 'right' }} className="gd-filters-dropdown__wrapper">
            <OptionBoxPopup
              triggerText={translations.title}
            >
              <GDSavedFiltersDropdown
                extraClass="some-class"
                noSavedFilters={this.state.noSavedFilters}
                onChange={this.updateSearchField}
                removeSavedFilter={this.removeSavedFilter}
                savedFilters={this.state.currentSavedFilters}
                searchTerm={this.state.currentSearchTerm}
                setSavedFilterAsActive={this.setSavedFilterAsActive}
                translations={translations}
              />
            </OptionBoxPopup>
          </div>
        </ReactSpecimen>

        <h5>Without data</h5>

        <ReactSpecimen span={3}>
          <div style={{ textAlign: 'right' }} className="gd-filters-dropdown__wrapper">
            <OptionBoxPopup
              triggerText={translations.title}
            >
              <GDSavedFiltersDropdown
                extraClass="some-class"
                noSavedFilters
                savedFilters={[]}
                translations={translations}
              />
            </OptionBoxPopup>
          </div>
        </ReactSpecimen>

        <h3>Parameters</h3>

        <h4>Optional Parameters</h4>
        <ul>
          <li><strong>extraClass</strong>:
            an extra style class that will go on the component root element
          </li>
          <li><strong>noSavedFilters</strong>: conditional to show or hide search functionality based on original data set length</li>
          <li><strong>onChange</strong>: handler to update the search term in the parent container</li>
          <li><strong>removeSavedFilter</strong>: handler to remove a saved filter from the list</li>
          <li><strong>savedFilters</strong>: list of objects with name, id, active/inactive state, and filterJson of a report filter</li>
          <li><strong>searchTerm</strong>: what the user has typed in the search field so far</li>
          <li><strong>setSavedFilterAsActive</strong>: handler to set a filter as active or inactive</li>
          <li><strong>translations</strong>: an object list of strings to translate static text</li>
        </ul>

      </Page>
    );
  }
}
