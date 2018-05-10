// Libs / Helpers
import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import * as dnd from 'reactabular-dnd';

import { getUsersForTable } from 'Selectors/userSelectors';

// Components
import TableDragAndDrop from './Table-DragAndDrop.js';

// Data
import columns from './types/Table-DragAndDropColumns.doc.js';

const rows = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@gmail.com',
    status: 'ACTIVE',
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
    role: {
      name: 'Merchant User',
    },
    acquirer: 'Acquirer Name',
    userId: 2,
  },
];

const components = {
  header: {
    cell: dnd.Header,
  },
  body: {
    row: dnd.Row,
  },
};

export default () => (
  <Page>
    <h2>Drag and Drop Table</h2>

    <p>Use this component for a table with drag and drop functionality</p>

    <ReactSpecimen span={6}>
      <TableDragAndDrop
        columns={columns}
        components={components}
        rows={getUsersForTable(rows)}
        perPage={25}
        rowKey="userId"
      />
    </ReactSpecimen>

    <h3>Parameters</h3>

    <h4>Required Parameters</h4>
    <ul>
      <li><strong>columns</strong>: the header text for each column</li>
      <li><strong>components</strong>: attaching drag and drop context to table components object header and body cells</li>
      <li><strong>rows</strong>: the text content for each respective column</li>
      <li><strong>perPage</strong>: how many rows to show on a table by default</li>
      <li><strong>rowKey</strong>: a unique identifier for each row</li>
    </ul>

    <h4>Optional Parameters</h4>
    <ul>
      <li><strong>error</strong>:
        any error message to display for the table
      </li>
    </ul>

  </Page>
);
