import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import GDColorCodedCell from './GDColorCodedCell.js';

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

const rowsWithColorCells = merchantNumbers.map((merchantNumber, index) => {
  const uniqueKey = `${merchantNumber}_${index}`;
  return (
    <tr key={uniqueKey}>
      <GDColorCodedCell
        content={merchantNumber}
        extraClass="extra-class"
      />
    </tr>
  );
});

export default () => (
  <Page>
    <h2>GDColorCodedCell</h2>

    <p>Use this component <strong>inside</strong> a row of a <code>&lt;GDTable&gt;</code> component, in order to add a colored indicator in front of the cell’s content</p>

    <ReactSpecimen span={3}>
      <table>
        <tbody>
          {rowsWithColorCells}
        </tbody>
      </table>
    </ReactSpecimen>

    <h3>Parameters</h3>

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
