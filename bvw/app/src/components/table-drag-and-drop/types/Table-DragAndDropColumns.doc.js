// @TODO actual transaction column data

import React from 'react';

// Services
import Listener from 'Utils/listener';

import StatusBadge from 'Components/status-badge/StatusBadge.js';

export const statusList = [
  {
    value: 'activated',
    text: 'Activated',
  },
  {
    value: 'deactivated',
    text: 'Deactivated',
  },
];

const columns = [
  {
    property: 'firstName',
    header: {
      label: 'First Name',
      formatters: [
        (label) => (
          <span>
            {label}
          </span>
        ),
      ],
      props: {
        label: 'First Name',
        onMove: (o) => Listener.trigger('REORDER_COLUMN', o),
      },
    },
    cell: {
      formatters: [
        (firstName) => (
          <div className="fixed-width">
            {firstName}
          </div>
        ),
      ],
    },
  },
  {
    property: 'lastName',
    header: {
      label: 'Last Name',
      formatters: [
        (label) => (
          <span>
            {label}
          </span>
        ),
      ],
      props: {
        label: 'Last Name',
        onMove: (o) => Listener.trigger('REORDER_COLUMN', o),
      },
    },
    cell: {
      formatters: [
        (lastName) => (
          <div className="fixed-width">
            {lastName}
          </div>
        ),
      ],
    },
  },
  {
    property: 'email',
    header: {
      label: 'Email Address',
      formatters: [
        (label) => (
          <span>
            {label}
          </span>
        ),
      ],
      props: {
        label: 'Email Address',
        onMove: (o) => Listener.trigger('REORDER_COLUMN', o),
      },
    },
    cell: {
      formatters: [
        (email) => (
          <div className="fixed-width">
            {email}
          </div>
        ),
      ],
    },
  },
  {
    property: 'status',
    header: {
      label: 'Status',
      formatters: [
        (label) => (
          <span>
            {label}
          </span>
        ),
      ],
      props: {
        label: 'Status',
        onMove: (o) => Listener.trigger('REORDER_COLUMN', o),
      },
    },
    cell: {
      formatters: [
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
      ],
    },
  },
  {
    property: 'acquirer',
    header: {
      label: 'Acquirer',
      formatters: [
        (label) => (
          <span>
            {label}
          </span>
        ),
      ],
      props: {
        label: 'Acquirer',
        onMove: (o) => Listener.trigger('REORDER_COLUMN', o),
      },
    },
    cell: {
      formatters: [
        (acquirer) => (
          <div className="fixed-width">
            {acquirer}
          </div>
        ),
      ],
    },
  },
];

export default columns;
