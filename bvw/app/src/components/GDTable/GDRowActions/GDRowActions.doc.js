import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import GDRowActions from './GDRowActions.js';

const report = {
  reportActions: [
    {
      name: 'Linked report 1',
      description: 'Linked Report 1 desc',
      linkedReportID: 1,
      linkedReportKey: 'chkbck',
      link_type: 'report',
      linkedColumns: [
        {
          fromID: 1,
          fromKey: 'abc',
          toId: 2,
          toKey: 'xyz',
        },
        {
          fromID: 3,
          fromKey: 'def',
          toId: 4,
          toKey: 'hij',
        },
      ],
    },
    {
      name: 'Linked report 2',
      description: 'Linked Report 2 desc',
    },
  ],
  reportRowActions: [
    {
      name: 'Linked report 1',
      description: 'Linked Report 1 desc',
      linkedReportID: 1,
      linkedReportKey: 'chkbck',
      link_type: 'row',
      linkedColumns: [
        {
          fromID: 1,
          fromKey: 'abc',
          toId: 2,
          toKey: 'xyz',
        }, {
          fromID: 3,
          fromKey: 'def',
          toId: 4,
          toKey: 'hij',
        },
      ],
    },
    {
      name: 'Linked report 2',
      description: 'Linked Report 2 desc',
      linkedReportID: 2,
      linkedReportKey: 'batch',
      link_type: 'row',
    },
  ],
};

const rowActions = report.reportRowActions.map((action) => {
  return {
    callback: (rowId) => { alert(`Action ${action.name} called on ${rowId}`); }, // eslint-disable-line no-alert
    id: action.linkedReportID,
    text: action.name,
  };
});

const merchantNumbers = [
  '0008788105000001',
  '0008788105000001',
  '0008788105000001',
  '0008788242869240',
  '0008788242869240',
  '1042415705',
  '1670656194',
  '1670656195',
  '2692095704',
  '2695895704',
  '2695895704',
  '2695895704',
  '40176305704',
  '40176655704',
  '40176655704',
  '70042295704',
  '89586131',
  '90153715704',
];

const rows = merchantNumbers.map((merchant) => {
  return (
    <tr>
      <td>
        {merchant}
      </td>
      <GDRowActions
        actions={rowActions}
        rowId={merchant}
        triggerText="Actions"
      />
    </tr>
  );
});

export default () => (
  <Page>
    <h2>GDRowActions</h2>

    <p>Use this component <strong>inside</strong> a row of a <code>&lt;GDTable&gt;</code> component, add a popup list of actions to take for a particular row.</p>

    <ReactSpecimen span={3}>
      <table>
        <tbody>
          {rows}
        </tbody>
      </table>
    </ReactSpecimen>

    <h3>TODO: Parameters</h3>

    <h4>Required Parameters</h4>
    <ul>
      <li><strong>content</strong>: the string to display in the cell</li>
    </ul>

    <h4>Optional Parameters</h4>
    <ul>
      <li><strong>extraClass</strong>:
        an extra style class that will go on the component root element
      </li>
    </ul>

  </Page>
);
