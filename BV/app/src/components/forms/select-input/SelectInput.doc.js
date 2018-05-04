import React, { Component } from 'react';
import { Page, ReactSpecimen } from 'catalog';
import TextField from 'Components/forms/text-field/TextField';
import SelectInput, { findItem } from './SelectInput.js';

import '../../cards/InlineCard/InlineCard.scss';

const dataList = [
  {
    value: 'something',
    text: 'Filter by <strong>Something</strong>',
  },
  {
    value: 'something_else',
    text: 'Filter by <strong>Something Else</strong>',
  },
  {
    value: 'third_thing',
    text: 'Filter by a <strong>Third Thing</strong>',
  },
  {
    value: 'all',
    text: 'Filter by <strong>All</strong>',
  },
];

const roleList = [
  {
    value: 'gp_admin',
    text: 'Global Payments Admin',
  },
  {
    value: 'gp_employee',
    text: 'Global Payments Employee',
  },
  {
    value: 'merchant_admin',
    text: 'Merchant Admin',
  },
  {
    value: 'merchant_employee',
    text: 'Merchant Employee',
  },
];

const mockReportsList = [
  {
    value: 'edit_report',
    text: 'Edit Report',
  },
  {
    value: 'add_schedule',
    text: 'Add Schedule',
  },
  {
    value: 'edit_schedule',
    text: 'Edit Schedule',
  },
  {
    value: 'share',
    text: 'Share',
    separator: true,
  },
  {
    value: 'delete',
    text: 'Delete',
    important: true,
  },
];

class SelectInputDoc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
      selectedRole: roleList[0],
    };

    this.attachBindings();
  }

  attachBindings() {
    this.handleSelection = this.handleSelection.bind(this);
    this.selectRole = this.selectRole.bind(this);
  }

  handleSelection(value, event) {
    event.stopPropagation();
    const newSelection = findItem(dataList, value);

    if (newSelection) {
      this.setState({ selectedItem: newSelection });
    }
  }

  selectRole(value, event) {
    event.stopPropagation();
    const newSelection = findItem(roleList, value);

    if (newSelection) {
      this.setState({ selectedRole: newSelection });
    }
  }

  render() {
    return (
      <Page>
        <h2>SelectInput</h2>

        <p>Use this component to create a dropdown list that functions like an HTML select element, but with custom style.</p>

        <ReactSpecimen span={6}>
          <SelectInput
            dataList={dataList}
            handleSelection={this.handleSelection}
            selectedItem={this.state.selectedItem}
            promptText="Choose a filter"
            wrapperClass="select-menu__form"
            extraClass="some-class"
          />
        </ReactSpecimen>

        <p>
          Your last selection was: {this.state.selectedItem && <em>{this.state.selectedItem.value}</em>}
        </p>

        <ReactSpecimen span={6}>
          <div className="field-group-vertical">
            <TextField
              htmlFor={name}
              labelContent="Select Role"
            >
              <SelectInput
                dataList={roleList}
                handleSelection={this.selectRole}
                selectedItem={this.state.selectedRole}
                promptText="Choose a filter"
                wrapperClass="select-menu__form"
                extraClass="fixed-width"
              />
            </TextField>
          </div>
        </ReactSpecimen>

        <p>
          Your last selection was: {this.state.selectedRole && <em>{this.state.selectedRole.value}</em>}
        </p>

        <p> Used for Inline Report Cards example. </p>
        <ReactSpecimen span={6}>
          <div className="card report">
            <div />
            <SelectInput
              dataList={mockReportsList}
              handleSelection={this.handleSelection}
              selectedItem={this.state.selectedItem}
              promptText="More"
              wrapperClass="select-menu__form reports"
              extraClass="some-class"
            />
          </div>
        </ReactSpecimen>

        <h3>Parameters</h3>

        <h4>Required Parameters</h4>
        <ul>
          <li><strong>dataList</strong>: an array of objects with a value property and a text property</li>
          <li><strong>handleSelection</strong>: a function that gets called when an item is selected. It gets the <em>value</em> and the <em>event</em>.</li>
          <li><strong>wrapperClass</strong>: a class that determines what style of dropdown this menu is.</li>
        </ul>

        <h4>Optional Parameters</h4>
        <ul>
          <li><strong>selectedItem</strong>: the currently selected item (if any)</li>
          <li><strong>promptText</strong>: the value to display if no item is selected (default is <em>Choose one</em></li>
          <li><strong>extraClass</strong>:
            an extra style class that will go on the component root element
          </li>
          <li><strong>isDisabled</strong>:
            if true, disabled the menu from being activated, and removed it from the tab order
          </li>
        </ul>

      </Page>
    );
  }
}

export default SelectInputDoc;
