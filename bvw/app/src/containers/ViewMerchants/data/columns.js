import React from 'react';

const columns = [
  {
    property: 'merchantNumber',
    header: {
      label: 'Merchant ID',
      props: {
        label: 'Merchant ID',
      },
    },
    cell: {
      formatters: [
        (merchantId) => (
          <div className="fixed-width">
            {merchantId}
          </div>
        ),
      ],
    },
  },
  {
    property: 'businessName',
    header: {
      label: 'DBA Name',
      props: {
        label: 'DBA Name',
      },
    },
    cell: {
      formatters: [
        (businessName) => (
          <div>
            {businessName}
          </div>
        ),
      ],
    },
  },
  {
    property: 'fullAddress',
    header: {
      label: 'Address',
      props: {
        label: 'Address',
      },
    },
    cell: {
      formatters: [
        (fullAddress) => (
          <div>
            {fullAddress}
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
          <div>
            {acquirer}
          </div>
        ),
      ],
    },
  },
];

export default columns;
