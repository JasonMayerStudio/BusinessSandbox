
import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import GDDateCell from './GDDateCell.js';

const dateList = [
  {
    date: '2018-02-10 15:30:00 +00:00',
  },
  {
    date: '2018-03-10 00:00:00 +00:00',
  },
  {
    date: '2018-02-11 01:00:00 +00:00',
  },
  {
    date: '2018-02-10 01:00:00 +00:00',
  },
  {
    date: '2018-02-10 00:32:00 +00:00',
  },
  {
    date: '2018-05-16 15:20:00 +00:00',
  },
  {
    date: '2018-12-10 11:30:23 +00:00',
  },
];

const dateFormat = 'MM/DD/YYYY';
const dateFormatDDMM = 'DD/MM/YYYY';
const timeFormat = 'HH:mm';
const timeFormatAMPM = 'hh:mm a';

const rowsWithDates = (dFormat, tFormat) => {
  return dateList.map((dateString, index) => {
    const uniqueKey = `${dateString}_${index}`;
    return (
      <tr key={uniqueKey}>
        <GDDateCell
          date={dateString.date}
          dateFormat={dFormat}
          timeFormat={tFormat}
          extraClass="extra-class"
        />
      </tr>
    );
  });
};


export default () => (
  <Page>
    <h2>GDDateCell</h2>

    <p>Use this component <strong>inside</strong> a row of a <code>&lt;GDTable&gt;</code> component, in order to add a colored indicator in front of the cell’s content</p>

    <p>Note: <code>dateFormat</code> and <code>timeFormat</code> are pulled from <strong>User Settings</strong>/Preferences.</p>

    <ReactSpecimen span={3}>
      <table>
        <tbody>
          { rowsWithDates(dateFormat, timeFormat) }
        </tbody>
      </table>
    </ReactSpecimen>

    <ReactSpecimen span={3}>
      <table>
        <tbody>
          {rowsWithDates(dateFormatDDMM, timeFormat)}
        </tbody>
      </table>
    </ReactSpecimen>

    <ReactSpecimen span={3}>
      <table>
        <tbody>
          {rowsWithDates(dateFormat, timeFormatAMPM)}
        </tbody>
      </table>
    </ReactSpecimen>

    <ReactSpecimen span={3}>
      <table>
        <tbody>
          {rowsWithDates(dateFormatDDMM, timeFormatAMPM)}
        </tbody>
      </table>
    </ReactSpecimen>

    <h3>Parameters</h3>

    <h4>Required Parameters</h4>
    <ul>
      <li><strong>date</strong>: the date string format like <code>2018-12-10 11:30:23</code></li>
      <li><strong>dateFormat</strong>: from settings/preferences - format like <code>MM/DD/YYYY</code> as default</li>
      <li><strong>timeFormat</strong>: from settings/preferences - format like <code>HH:mm</code> as default</li>
    </ul>

    <h4>Optional Parameters</h4>
    <ul>
      <li><strong>extraClass</strong>:
        an extra style class that will go on the component root element
      </li>
    </ul>

  </Page>
);
