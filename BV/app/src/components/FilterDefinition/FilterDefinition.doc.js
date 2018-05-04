import React, { Component } from 'react';
import { Page, ReactSpecimen } from 'catalog';

import TextInput from 'Components/forms/text-input/TextInput.js';

import FilterDefinition from './FilterDefinition.js';

class FilterDefinitionDoc extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterColumns: [
        {
          desc: 'This shows the date the batch was settled.',
          extraClass: '',
          identifier: 'comet',
          isSelected: false,
          isHidden: false,
          name: 'Batch Date',
          isOpen: false,
          type: 'date',
          filterDefault: 'Last 7 Days',
          filter: {
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
          filterDefault: '',
          filter: {
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
          filterDefault: '',
          filter: {
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
          filterDefault: '',
          filter: {
            type: 'card_type',
          },
        },
      ],
      filterToAdd: {
        desc: 'This shows the control number for the batch.',
        extraClass: '',
        identifier: 'donner',
        isSelected: false,
        isHidden: false,
        name: 'Batch Amount',
        isOpen: false,
        type: 'string',
        filterDefault: '',
        filter: {
          type: 'string',
        },
      },
    };
  }

  removeFilter = (identifier) => {
    const newState = this.state.filterColumns.filter((column) => {
      return column.identifier !== identifier;
    });

    this.setState({ filterColumns: newState });
  }

  saveFilter = (identifier) => {
    const newState = this.state.filterColumns.map((column) => {
      if (column.identifier === identifier) {
        const newFilter = Object.assign({}, column.filter, { default: column.tempValue });

        return Object.assign({}, column, {
          isOpen: !column.isOpen,
          tempValue: column.filter.default || '',
          filter: newFilter,
        });
      } else {
        return column;
      }
    });

    this.setState({ filterColumns: newState });
  }

  toggleOpen = (identifier) => {
    const newState = this.state.filterColumns.map((column) => {
      if (column.identifier === identifier) {
        return Object.assign({}, column, {
          isOpen: !column.isOpen,
          tempValue: column.filter.default || '',
        });
      } else {
        return column;
      }
    });

    this.setState({ filterColumns: newState });
  }

  updateFormState = (event) => {
    const field = event.target.name;

    const newState = this.state.filterColumns.map((column) => {
      if (column.identifier === field) {
        return Object.assign({}, column, { tempValue: event.target.value });
      } else {
        return column;
      }
    });

    this.setState({ filterColumns: newState });
  }

  render() {
    const [head, ...tail] = this.state.filterColumns;

    const primaryFilter = (head)
      ? (
        <FilterDefinition
          column={head}
          extraClass="primary-filter"
          isOpen={head.isOpen}
          removeHandler={this.removeFilter}
          saveHandler={this.saveFilter}
          toggleHandler={this.toggleOpen}
        >
          <TextInput
            name={head.identifier}
            label={head.name}
            type="text"
            onChange={this.updateFormState}
            value={head.tempValue}
          />
        </FilterDefinition>
      )
      :
      null;

    const otherFilters = tail.map((column) => {
      return (
        <FilterDefinition
          column={column}
          isOpen={column.isOpen}
          key={column.identifier}
          removeHandler={this.removeFilter}
          saveHandler={this.saveFilter}
          toggleHandler={this.toggleOpen}
        >
          <TextInput
            name={column.identifier}
            label={column.name}
            type="text"
            onChange={this.updateFormState}
            value={column.tempValue}
          />
        </FilterDefinition>
      );
    });

    return (
      <Page>
        <h2>FilterDefinition</h2>

        <p>Use this component to display a configurable filter for a report.</p>

        <ReactSpecimen span={3}>
          <div>
            <h2>Available Filters</h2>
            <FilterDefinition
              addHandler={() => {}}
              column={this.state.filterToAdd}
            />
          </div>
        </ReactSpecimen>

        <ReactSpecimen span={6}>
          <div>
            <h2>Date Selection</h2>
            {primaryFilter}
            <h2>Batch Filters</h2>
            {otherFilters}
          </div>
        </ReactSpecimen>

        <h3>Parameters</h3>

        <h4>Required Parameters</h4>
        <ul>
          <li><strong>column</strong>: a report column object with a nested filter object</li>
        </ul>

        <h4>Optional Parameters</h4>
        <ul>
          <li><strong>children</strong>:
            the particular kind of input required to select a default value for a filter (the children need to supply their own update handlers)
          </li>
          <li><strong>extraClass</strong>:
            an extra style class that will go on the component root element
          </li>
          <li><strong>isOpen</strong>:
            boolean indicating whether the filter drop panel is open to show its children
          </li>
          <li><strong>removeHandler</strong>:
            a function for removing this filter from whatever list of filters it is in
          </li>
          <li><strong>saveHandler</strong>:
            a function for saving the value of what is in the children’s input
          </li>
          <li><strong>toggleHandler</strong>:
            a function for toggling the filter drop panel open or closed
          </li>
        </ul>

      </Page>
    );
  }
}

export default FilterDefinitionDoc;
