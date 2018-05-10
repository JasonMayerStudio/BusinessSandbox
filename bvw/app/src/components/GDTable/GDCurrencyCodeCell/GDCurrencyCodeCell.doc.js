import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import GDCurrencyCodeCell from './GDCurrencyCodeCell.js';

const currencyList = [
  {
    value: 9.99,
    units: 'USD',
  },
  {
    value: 29.9,
  },
  {
    value: 2000.00,
    units: 'BTC',
  },
  {
    value: 2375,
    units: 'USD',
  },
  {
    value: 34430.41,
    units: 'EUR',
  },
];

const rowsWithCurrencyCode = currencyList.map((caseAmount, index) => {
  const uniqueKey = `${caseAmount}_${index}`;
  return (
    <tr key={uniqueKey}>
      <GDCurrencyCodeCell
        value={caseAmount.value}
        units={caseAmount.units}
        extraClass="extra-class"
      />
    </tr>
  );
});

export default () => (
  <Page>
    <h2>GDCurrencyCodeCell</h2>

    <p>Use this component <strong>inside</strong> a row of a <code>&lt;GDTable&gt;</code> component, in order to add a colored indicator in front of the cell’s content</p>

    <ReactSpecimen span={3}>
      <table>
        <tbody>
          {rowsWithCurrencyCode}
        </tbody>
      </table>
    </ReactSpecimen>

    <h3>Parameters</h3>

    <h4>Required Parameters</h4>
    <ul>
      <li><strong>value</strong>: the number to display in the cell</li>
    </ul>

    <h4>Optional Parameters</h4>
    <ul>
      <li><strong>units</strong>:
        Currency Code provides context of the amount.
      </li>
      <li><strong>extraClass</strong>:
        an extra style class that will go on the component root element
      </li>
    </ul>

  </Page>
);
