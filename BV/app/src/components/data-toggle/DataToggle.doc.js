import React, { Component } from 'react';
import { Page, ReactSpecimen } from 'catalog';
import DataToggle from './DataToggle.js';

const dataSet = [
  {
    header: 'Merchant Information',
    value: 'merchant-information',
    key: 'merchant-information',
    data: [
      {
        value: 'merchant-name',
        key: 'Merchant Name',
        text: 'Lorem Ipsum',
      },
      {
        value: 'bank-id',
        key: 'Bank ID',
        text: '123456',
      },
      {
        value: 'merchant-contact',
        key: 'Merchant Contact',
        text: 'Alvin Friedman',
      },
      {
        value: 'merchant-number',
        key: 'Merchant Number',
        text: '64726492378',
      },
      {
        value: 'merchant-phone-number',
        key: 'Merchant Phone Number',
        text: '+1 (438) 237-7498',
      },
      {
        value: 'merchant-fax-number',
        key: 'Merchant Fax Number',
        text: '+1 (438) 237-7423',
      },
      {
        value: 'merchant-address-1',
        key: 'Merchant Address 1',
        text: '713 E. Craighead St.',
      },
      {
        value: 'merchant-address-2',
        key: 'Merchant Address 2',
        text: 'Unit 327',
      },
      {
        value: 'merchant-city',
        key: 'Merchant City',
        text: 'Charleston',
      },
      {
        value: 'merchant-state',
        key: 'Merchant State',
        text: 'South Carolina',
      },
      {
        value: 'merchant-usstcd',
        key: 'Merchant USSTCD',
        text: 'Lorem Ipsum',
      },
      {
        value: 'merchant-zip-code',
        key: 'Merchant Zip Code',
        text: '28327',
      },
    ],
  },
];


class DataToggleDoc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
    };
    this.toggleSection = this.toggleSection.bind(this);
  }

  toggleSection() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <Page>
        <h2>DataToggle</h2>

        <p>Use this component for showing a set of data under a grouping that is toggleable</p>

        <ReactSpecimen span={5}>
          <DataToggle
            dataSet={dataSet}
            toggleSection={this.toggleSection}
            isOpen={this.state.isOpen}
          />
        </ReactSpecimen>

        <h3>Parameters</h3>

        <h4>Required Parameters</h4>
        <ul>
          <li><strong>dataSet</strong>: array of data to map in toggle component</li>
          <li><strong>toggleSection</strong>: function that toggles data items by clicking on header</li>
          <li><strong>isOpen</strong>: boolean representing whether data is toggled or not</li>
        </ul>

        <h4>Optional Parameters</h4>
        <ul>
          <li>none</li>
        </ul>

      </Page>
    );
  }
}

export default DataToggleDoc;
