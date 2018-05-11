import React, { Component } from 'react';
import { Page, ReactSpecimen } from 'catalog';

import FilterDefinition from 'Components/FilterDefinition';
import Search from 'Components/search';

import WidgetButton from './WidgetButton.js';

class WidgetButtonDoc extends Component {
  constructor(props) {
    super(props);

    const filterColumns = getFilterDefinitions();

    const [head, ...tail] = filterColumns;

    this.state = {
      filterColumns: tail,
      filterToAdd: head,
      count: 0,
      showPopup: false,
      searchFilter: '',
    };
  }

  onChange = (newFilter) => {
    this.setState({ searchFilter: newFilter });
  }

  addFilter = () => {
    const newCount = this.state.count + 1;
    const newFilter = Object.assign(
      {},
      this.state.filterToAdd,
      {
        identifier: `${this.state.filterToAdd.identifier}${newCount}`,
        name: `${this.state.filterToAdd.name} ${newCount}`,
      },
    );
    const newFilters = this.state.filterColumns.concat(newFilter);

    this.setState({
      filterColumns: newFilters,
      count: newCount,
    });
  }

  addFilterPopup = () => {
    this.setState({ showPopup: !this.state.showPopup });
  }

  render() {
    const filterList = this.state.filterColumns.map((column) => {
      return (
        <FilterDefinition
          column={column}
          isOpen={false}
          key={column.identifier}
          removeHandler={() => {}}
          saveHandler={() => {}}
          toggleHandler={() => {}}
        />
      );
    });

    const { showPopup, searchFilter } = this.state;

    return (
      <Page>
        <h2>WidgetButton</h2>

        <p>Use this component to display a configurable filter for a report.</p>

        <ReactSpecimen span={6}>
          <div>
            <h2>Filter List with Add Button</h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {filterList}
              <div className="widget-button__popup-wrapper">
                <WidgetButton
                  action={this.addFilterPopup}
                  iconType="plus"
                >
                  Add
                </WidgetButton>
                { showPopup ?
                  <div className="widget-button__popup">
                    <span className="widget-button__popup-header">
                      Available Report Filters
                    </span>
                    <div className="widget-button__popup-row">
                      <Search
                        filterText={searchFilter}
                        onChange={this.onChange}
                        placeholder="Search Filters"
                      />
                    </div>
                    <div className="widget-button__popup-content">
                      <span>Batch Filters</span>
                      {/* @TODO display Filters from API */}
                    </div>
                  </div>
                  : ''
                }
              </div>
            </div>
          </div>
        </ReactSpecimen>

        <ReactSpecimen span={6}>
          <div>
            <h2>Widget Button</h2>
            <div style={{ display: 'flex' }}>
              <WidgetButton
                action={this.addFilter}
              >
                Warp
              </WidgetButton>
            </div>
            <h2>Widget Button with Icon</h2>
            <div style={{ display: 'flex' }}>
              <WidgetButton
                action={this.addFilter}
                iconType="plus"
              >
                Add
              </WidgetButton>
            </div>
            <h2>Filter List with Add Button</h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {filterList}
              <WidgetButton
                action={this.addFilter}
                iconType="plus"
              >
                Add
              </WidgetButton>
            </div>
          </div>
        </ReactSpecimen>

        <h3>Parameters</h3>

        <h4>Required Parameters</h4>
        <ul>
          <li><strong>action</strong>: function to call when the button was selected</li>
        </ul>

        <h4>Optional Parameters</h4>
        <ul>
          <li><strong>children</strong>:
            the particular kind of input required to select a default value for a filter (the children need to supply their own update handlers)
          </li>
          <li><strong>extraClass</strong>:
            an extra style class that will go on the component root element
          </li>
          <li><strong>iconType</strong>:
            string indicating an icon to add in front of the children in the button content
          </li>
        </ul>

      </Page>
    );
  }
}

export default WidgetButtonDoc;

function getFilterDefinitions() {
  return [
    {
      desc: 'This shows the date the batch was settled.',
      extraClass: '',
      identifier: 'comet',
      isSelected: true,
      isHidden: false,
      name: 'Batch Date',
      isOpen: false,
      type: 'date',
      filter: {
        default: 'Last 7 Days',
        type: 'date',
      },
    },
    {
      desc: 'This shows the total amount of all the transactions in the batch.',
      extraClass: '',
      identifier: 'cupid',
      isSelected: true,
      isHidden: false,
      name: 'Batch Amount',
      isOpen: false,
      type: 'currency',
      filter: {
        default: '',
        type: 'currency',
      },
    },
    {
      desc: 'This shows the card account number that was used for the transaction.',
      extraClass: '',
      identifier: 'donner',
      isSelected: true,
      isHidden: true,
      isOpen: false,
      name: 'Card Number',
      type: 'card_number',
      filter: {
        default: '',
        type: 'card_number',
      },
    },
    {
      desc: 'This shows the issuer of the card used in the transaction.',
      extraClass: '',
      identifier: 'blitzen',
      isSelected: true,
      isHidden: false,
      isOpen: false,
      name: 'Card Type',
      type: 'card_type',
      filter: {
        default: '',
        type: 'card_type',
      },
    },
  ];
}
