import React, { Component } from 'react';
import { Page, ReactSpecimen } from 'catalog';
import * as sort from 'sortabular';

import { getUsersForTable } from 'Selectors/userSelectors';

import StatusBadge from 'Components/status-badge/StatusBadge.js';
import Table from './Table.js';

// Data
import columns from './types/TableColumns.doc.js';

const statusList = [
  {
    value: 'activated',
    text: 'Activated',
  },
  {
    value: 'deactivated',
    text: 'Deactivated',
  },
];

const rows = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@gmail.com',
    status: 'ACTIVE',
    statusKey: 'Active',
    role: {
      name: 'GP Admin',
    },
    acquirer: 'Acquirer Name',
    userId: 1,
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'janedoe@gmail.com',
    status: 'PENDING',
    statusKey: 'Pending',
    role: {
      name: 'Merchant User',
    },
    acquirer: 'Acquirer Name',
    userId: 2,
  },
];

export default class TableDoc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortingColumns: null,
      columns,
      rows: getUsersForTable(rows, 'en-US'),
    };
    this.getSortingColumns = () => this.state.sortingColumns || {};
    this.setupSorter();
  }

  componentDidMount() {
    this.sortConfig();
  }

  setupSorter() {
    const getSortingColumns = this.getSortingColumns;

    this.sortable = sort.sort({
      getSortingColumns,
      onSort: (selectedColumn) => {
        this.setState({
          sortingColumns: sort.byColumn({
            sortingColumns: this.state.sortingColumns,
            selectedColumn,
          }),
        });
      },
      strategy: sort.strategies.byProperty,
    });
  }

  sortConfig() {
    const sortable = this.sortable;
    const getSortingColumns = this.getSortingColumns;

    columns.forEach((column) => {
      if (column.property === 'status') {
        column.cell.formatters = [ // eslint-disable-line no-param-reassign
          (status, data) => (
            <div className="fixed-width">
              <StatusBadge
                row={data}
                dataList={statusList}
                selectedItem={data.rowData.statusData}
                wrapperClass="status-badge"
              />
            </div>
          ),
        ];
      }

      column.header.transforms = [this.sortable]; // eslint-disable-line no-param-reassign
      column.header.formatters = [ // eslint-disable-line no-param-reassign
        (sort.header({
          sortable,
          getSortingColumns,
          strategy: sort.strategies.byProperty,
        })),
      ];
    });

    this.setState({ columns });
  }

  render() {
    return (
      <Page>
        <h2>Table</h2>

        <p>Use this component for a table</p>

        <ReactSpecimen span={6}>
          <Table
            columns={this.state.columns}
            rows={this.state.rows}
            perPage={25}
            rowKey="userId"
          />
        </ReactSpecimen>

        <h3>Parameters</h3>

        <h4>Required Parameters</h4>
        <ul>
          <li><strong>columns</strong>: the header text for each column</li>
          <li><strong>rows</strong>: the text content for each respective column</li>
          <li><strong>perPage</strong>: how many rows to show on a table by default</li>
          <li><strong>rowKey</strong>: a unique identifier for each row</li>
        </ul>

        <h4>Optional Parameters</h4>
        <ul>
          <li><strong>activateUserRolesAllowed</strong>:
            a list of roles for which the status badge in a row should be a live control
          </li>
          <li><strong>error</strong>:
            any error message to display for the table
          </li>
        </ul>

      </Page>
    );
  }
}
