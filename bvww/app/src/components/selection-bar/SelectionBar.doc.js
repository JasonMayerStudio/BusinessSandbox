import React, { Component } from 'react';
import { Page, ReactSpecimen } from 'catalog';
import SelectionBar from './SelectionBar.js';

const dateList = [
  {
    text: 'Yesterday',
    value: 'yesterday',
  },
  {
    text: 'Last 7 Days',
    value: 'last-7-days',
  },
  {
    text: 'Last 30 Days',
    value: 'last-30-days',
  },
  {
    text: 'Custom Date Range',
    value: 'custom-date-range',
  },
];

class SelectionBarDoc extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: dateList[0],
    };

    this.attachBindings();
  }

  attachBindings() {
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(item) {
    this.setState({
      selectedTab: item,
    });
  }

  render() {
    return (
      <Page>
        <h2>SelectionBar</h2>

        <p>Use this component for filtering based on a set of conditions</p>

        <ReactSpecimen span={5}>
          <SelectionBar
            listItems={dateList}
            handleSelection={this.handleSelection}
            selectedTab={this.state.selectedTab}
          />
        </ReactSpecimen>

        <h3>Parameters</h3>

        <h4>Required Parameters</h4>
        <ul>
          <li><strong>listItems</strong>: array of filterable conditions</li>
          <li><strong>selectedTab</strong>: an object that is the currently selected tab</li>
          <li><strong>handleSelection</strong>: a function that changes the currently selected tab on click</li>
        </ul>

        <h4>Optional Parameters</h4>
        <ul>
          <li>none</li>
        </ul>

      </Page>
    );
  }
}

export default SelectionBarDoc;
