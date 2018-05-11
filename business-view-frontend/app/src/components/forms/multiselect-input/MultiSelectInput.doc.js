import React, { Component } from 'react';
import { Page, ReactSpecimen } from 'catalog';
import MultiSelectInput, { findItem } from './MultiSelectInput.js';

class MultiSelectInputDoc extends Component {
  constructor(props) {
    super(props);

    const filterColumns = getMockValues();

    this.state = {

      selectedItems: [],

      filtersWithValues: filterColumns.map((filterColumn) => {
        const currentValues = {
          list: [],
        };

        return Object.assign({}, filterColumn, { currentValues });
      }),

    };

    this.attachBindings();
  }

  attachBindings() {
    this.handleMultiSelectChange = this.handleMultiSelectChange.bind(this);
  }

  handleMultiSelectChange(value, event) {
    event.stopPropagation();

    const foundFilter = this.state.filtersWithValues[0];

    if (foundFilter) {
      const newSelection = findItem(foundFilter.filterValues, value);


      const selectedItems = Object.assign([], this.state.selectedItems);
      const isPresent = selectedItems.filter((item) => { return item.value === newSelection.value; },
      );

      const selectedItemsIndex = (selectedItems)
       ? selectedItems.indexOf(isPresent[0]) : null;


      if (selectedItemsIndex !== -1) {
        selectedItems.splice(selectedItemsIndex, 1);
      } else {
        selectedItems.push({ value: newSelection.value,
          text: newSelection.text });
      }
      this.setState({
        selectedItems,
      });
    }
  }


  render() {
    return (


      <Page>
        <h2>MultiSelectInput</h2>

        <p>Use this component for selection of multiple items.</p>

        <ReactSpecimen span={6}>

          <MultiSelectInput
            name={this.state.filtersWithValues[0].reportFilterId}
            dataList={this.state.filtersWithValues[0].filterValues}
            handleSelection={this.handleMultiSelectChange}
            selectedItem={this.state.selectedItems}
            promptText="Select"
            wrapperClass="select-menu__form"
            extraClass="some-class"
          />

        </ReactSpecimen>


        <h3>Parameters</h3>

        <h4>Required Parameters</h4>
        <ul>
          <li><strong>dataList</strong>: an array of objects with a value property and a text property</li>
          <li><strong>handleSelection</strong>: a function that gets called when an item is selected. It gets the <em>value</em> and the <em>event</em>.</li>
          <li><strong>wrapperClass</strong>: a class that determines what style of dropdown this menu is.</li>
          <li><strong>promptText</strong>: the value to display if no item is selected (default is <em>Select</em>)</li>
        </ul>

        <h4>Optional Parameters</h4>
        <ul>
          <li><strong>selectedItem</strong>: the currently selected item (if any)</li>

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

function getMockValues() {
  return [
    {
      defaultValue: null,
      description: 'Response Code',
      displayOrder: 18,
      filterValueGroupId: 81,
      isReadOnly: false,
      isVisible: true,
      name: 'Response Code',
      reportFilterId: 473,
      filterType: 'MULTISELECT',
      filterValues: [{
        id: 2941,
        value: '00',
        text: 'Approved',
        desc: 'Approved',
        filterValueGroupId: 81,
      }, {
        id: 2942,
        value: '01',
        text: 'Decline',
        desc: 'Decline',
        filterValueGroupId: 81,
      }, {
        id: 2945,
        value: '05',
        text: 'Do not honor',
        desc: 'Do not honor',
        filterValueGroupId: 81,
      }, {
        id: 2946,
        value: '94',
        text: 'Duplicate',
        desc: 'Duplicate',
        filterValueGroupId: 81,
      }, {
        id: 2944,
        value: '101',
        text: 'Expired Card',
        desc: 'Expired Card',
        filterValueGroupId: 81,
      }, {
        id: 2943,
        value: '03',
        text: 'Partial Approval',
        desc: 'Partial Approval',
        filterValueGroupId: 81,
      }],
      isPrimaryDateFilter: false,
      isRequired: false,
    },


  ];
}

export default MultiSelectInputDoc;
