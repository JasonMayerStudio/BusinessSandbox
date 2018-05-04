import React, { Component } from 'react';
import { Page, ReactSpecimen } from 'catalog';

import { getSortedData } from 'Utils/tableUtils';

import TableDynamicColumns from './TableDynamicColumns.js';

const columns = [
  {
    columnId: 1,
    displayOrder: 1,
    isDefault: true,
    jsonKey: 'firstName',
    label: 'First Name',
    type: 'string',
  },
  {
    columnId: 2,
    displayOrder: 2,
    isDefault: true,
    jsonKey: 'lastName',
    label: 'Last Name',
    type: 'string',
  },
  {
    columnId: 3,
    displayOrder: 3,
    isDefault: true,
    jsonKey: 'nickName',
    label: 'Nickname',
    type: 'string',
  },
  {
    columnId: 5,
    displayOrder: 5,
    isDefault: true,
    jsonKey: 'hobby',
    label: 'Hobby',
    type: 'string',
  },
  {
    columnId: 6,
    displayOrder: 6,
    isDefault: true,
    jsonKey: 'birthdate',
    label: 'Birthdate',
    type: 'date',
  },
  {
    columnId: 7,
    displayOrder: 7,
    isDefault: true,
    jsonKey: 'lastLogin',
    label: 'Last Login',
    type: 'datetime',
  },
  {
    columnId: 8,
    displayOrder: 8,
    isDefault: true,
    jsonKey: 'seq_key',
    label: 'Sequence Key',
    type: 'string',
  },
];

const data = [
  {
    seq_key: 1,
    firstName: 'Fred',
    lastName: 'Jones',
    nickName: 'Freddie',
    hairColor: 'Blonde',
    hobby: 'Setting Traps',
    birthdate: '1976-03-08T09:09:13-08:00',
    lastLogin: '2017-10-01T09:09:13-08:00',
  },
  {
    seq_key: 2,
    firstName: 'Daphne',
    lastName: 'Blake',
    nickName: 'Danger-prone Daphne',
    hairColor: 'Red',
    hobby: 'Karate',
    birthdate: '1977-04-14T19:29:18-08:00',
    lastLogin: '2017-10-02T19:29:18-08:00',
  },
  {
    seq_key: 3,
    firstName: 'Velma',
    lastName: 'Dinkley',
    nickName: '(none)',
    hairColor: 'Auburn',
    hobby: 'Weight Lifting',
    birthdate: '1975-06-25T10:59:23-08:00',
    lastLogin: '2017-10-02T10:59:23-08:00',
  },
  {
    seq_key: 4,
    firstName: 'Norville',
    lastName: 'Rogers',
    nickName: 'Shaggy',
    hairColor: 'Dirty Blonde',
    hobby: 'Eating',
    birthdate: '1970-01-24T12:15:43-08:00',
    lastLogin: '2017-10-02T12:15:43-08:00',
  },
];

export default class TableDynamicColumnsDoc extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dateFormat: 'DD/MM/YYYY',
      timeFormat: 'HH:mm',
      idColumnKey: 'seq_key',
      selectedItem: null,
      sort: {
        key: undefined,
        order: 0,
      },
      data,
    };

    this.attachBindings();
  }

  attachBindings() {
    this.selectRow = this.selectRow.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }

  handleSort(key) {
    const sort = (this.state.sort.key === key)
      // key matches, update order
      ? { key, order: (this.state.sort.order + 1) % 3 }
      // key differs, start with 'asc' order
      : { key, order: 1 };

    const sortedData = getSortedData(data, sort.key, sort.order);

    this.setState({
      sort,
      data: sortedData,
    });
  }

  selectRow(e) {
    const dataId = e.currentTarget.getAttribute('data-id');
    const newSelectedItem = data.find((row) => {
      return row.seq_key == dataId; // eslint-disable-line
    });

    this.setState({
      selectedItem: newSelectedItem,
    });
  }

  render() {
    return (
      <Page>
        <h2>TableDynamicColumns</h2>

        <p>Use this component to display reports where the columns can be chosen dynamically by the user.</p>

        <ReactSpecimen>
          <TableDynamicColumns
            idColumnKey={this.state.idColumnKey}
            columns={columns}
            data={this.state.data}
            clickHandler={this.selectRow}
            dateFormat={this.state.dateFormat}
            timeFormat={this.state.timeFormat}
            extraClass="some-class"
            handleSort={this.handleSort}
          />
        </ReactSpecimen>

        {this.state.selectedItem && <p>The last selected row was: <strong>{`${this.state.selectedItem.firstName} ${this.state.selectedItem.lastName}`}</strong> {this.state.timeFormat}</p>}

        <h3>Parameters</h3>

        <h4>Required Parameters</h4>
        <ul>
          <li><strong>idColumnKey</strong>: a string for the property to send when a row is clicked</li>
          <li><strong>columns</strong>: an array of objects with column metadata</li>
          <li><strong>data</strong>: an array of objects whose keys match the column metadata</li>
          <li><strong>clickHandler</strong>: a callback function which is attached to each row</li>
          <li><strong>dateFormat</strong>: a format string for columns of type date, or the first part of datetime columns. Ex., &quot;MM-DD-YYYY&quot; (the default)</li>
          <li><strong>timeFormat</strong>: a format string for columns of type time, or the last part of datetime columns. Ex., &quot;hh:mm a&quot; (the default)</li>
          <li><strong>handleSort</strong>: a callback function which is attached to each column heading</li>
        </ul>

        <h4>Optional Parameters</h4>
        <ul>
          <li><strong>extraClass</strong>:
            an extra style class that will go on the component root element
          </li>
        </ul>

      </Page>
    );
  }
}
