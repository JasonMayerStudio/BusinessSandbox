import React from 'react';

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
      props: {
        label: 'First Name',
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
      props: {
        label: 'Last Name',
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
      props: {
        label: 'Email Address',
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
      props: {
        label: 'Status',
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
    property: 'roleName',
    header: {
      label: 'Role',
      props: {
        label: 'Role',
      },
    },
    cell: {
      formatters: [
        (role) => (
          <div className="fixed-width">
            {role}
          </div>
        ),
      ],
    },
  },
  {
    property: 'acquirer',
    header: {
      label: 'Acquirer',
      props: {
        label: 'Acquirer',
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
