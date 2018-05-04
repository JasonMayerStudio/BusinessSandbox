import React, { Component } from 'react';
import { Page, ReactSpecimen } from 'catalog';

import {
  getSingleReportv2,
  getSingleReportDatav2,
  getSummaryDatav2,
} from 'Helpers/testHelpers/testReportAPIv2Mocks';

import englishCurrencyList from 'Utils/currency-lists/en-US_currencies';
import frenchCurrencyList from 'Utils/currency-lists/fr-CA_currencies';
import simplifiedChineseCurrencyList from 'Utils/currency-lists/zh-Hans_currencies';
import traditionalChineseCurrencyList from 'Utils/currency-lists/zh-Hant_currencies';

import GDReportRunner from './GDReportRunner.js';

const report = getSingleReportv2();
const data = getSingleReportDatav2();
const summaryData = getSummaryDatav2();
const translations = {
  active: 'Active',
  addAll: 'Add All',
  apply: 'Apply',
  backLinkText: 'Back to Reports',
  cancel: 'Cancel',
  columns: 'Columns',
  createAFilterContent: 'To select a filter, please create a filter.',
  createAFilterTitle: 'Start by creating a filter',
  export: 'Export',
  exporting: 'Exporting',
  exportTypesTitle: 'What do you want to export?',
  fileName: 'Name of file:',
  fileTypesTitle: 'Export As:',
  filterPaneTriggerText: 'Filter',
  header: 'Export Data',
  hideAll: 'Hide All',
  next: 'Next',
  prev: 'Prev',
  page: 'Page',
  placeholder: 'Search by Filter Name...',
  preposition: 'of',
  removeAll: 'Remove All',
  save: 'Save',
  showAll: 'Show All',
  show25perPage: 'Show 25 per page',
  show50perPage: 'Show 50 per page',
  show75perPage: 'Show 75 per page',
  show100perPage: 'Show 100 per page',
  showingRecords: 'Showing records',
  summaryTitle: 'Summary',
  title: 'Saved Filters',
};

class GDReportRunnerDoc extends Component {
  constructor() {
    super();

    this.state = {
      currentData: data.slice(0, 25),
      report,
      summaryData,
      vizList: [],
      selectedCurrency: '(USD)',
    };
  }

  onCurrencyChange = (id, selector, value) => {
    const key = (selector === 'end') ? 'end' : 'start';
    const currencies = this.state.currencies.map((currency) => {
      if (currency.id === id) {
        return Object.assign({}, currency, { [key]: value || '' });
      } else {
        return currency;
      }
    });

    this.setState({ currencies });
  }

  setCurrencyList = (language) => {
    switch (language) {
      case 'en-GB':
        return englishCurrencyList;
      case 'fr-CA':
        return frenchCurrencyList;
      case 'zh-Hans':
        return simplifiedChineseCurrencyList;
      case 'zh-Hant':
        return traditionalChineseCurrencyList;
      default:
        return englishCurrencyList;
    }
  }

  getNewData = ({ page, perPage = 25 }) => {
    const start = (page - 1) * perPage;
    const end = page * perPage;
    this.setState({
      currentData: data.slice(start, end),
    });
  }

  selectCurrency = (currency) => {
    this.setState({
      selectedCurrency: currency,
    });
  }

  routeToPreviousPage = () => {
    alert('In the app, this function handler should use React Router to return to the list page of whichever section this report runner component is placed in.'); // eslint-disable-line no-alert
  }

  render() {
    return (
      <Page>
        <h2>GDReportRunner</h2>

        <p>Use this component for encapsulating a whole-page report view, with all the following elements.</p>

        <ol>
          <li><strong>GDReportHeader:</strong> report group title, sub-reports, and filter section</li>
          <li><strong>GDReportActionsBar:</strong> back link, other actions (currency selector, show/hide visualizations)</li>
          <li><strong>GDReportVisualizations:</strong> two visualizations</li>
          <li><strong>GDTable:</strong> everything related to the tabular view of a report, including
            <ul>
              <li>Table title</li>
              <li>Record count</li>
              <li>Search</li>
              <li>SettingsSelector</li>
              <li>ColumnSelector</li>
              <li>ExportSelector</li>
              <li>SummaryRow</li>
              <li>Table headings</li>
              <li>Table rows, with actions</li>
              <li>Rows per page selector</li>
              <li>Repeated record count</li>
              <li>Pagination</li>
            </ul>
          </li>
        </ol>

        <ReactSpecimen span={6}>
          <GDReportRunner
            data={this.state.currentData}
            extraClass="some-class"
            getNewData={this.getNewData}
            perPage={25}
            report={this.state.report}
            routeToPreviousPage={this.routeToPreviousPage}
            savedFilters={[]}
            summaryData={this.state.summaryData}
            totalRecords={data.length}
            translations={translations}
            visualizations={this.state.vizList}
            currencyList={this.setCurrencyList('en-GB')}
            handleSelectedCurrency={this.selectCurrency}
          />
        </ReactSpecimen>

        <h3>Parameters</h3>

        <h4>Required Parameters</h4>
        <ul>
          <li><strong>data</strong>: an array of objects whose keys are the columnKeys, and whose values are the corresponding value for the table cell for that column</li>
          <li><strong>getNewData</strong>: a function to refresh the data from the appropriate API</li>
          <li><strong>report</strong>: the report definition, with dataColumns, filters, and summaryColumns</li>
          <li><strong>summraryData</strong>: an array of objects for the summary row, whose keys are the columnKeys, and whose values are the corresponding value for the table cell for that column. Required, but if pass an empty array, no summary row will display.</li>
          <li><strong>totalRecords</strong>: the total number of records found for the current query, used to calculate pagination.</li>
          <li><strong>translations</strong>: an object with all the needed translated text</li>
          <li><strong>visualizations</strong>: an array of URLs to use for the embedded iframes for visualizations</li>
          <li><strong>currencyList</strong>: an array of objects for the currency selector embedded in the report runner</li>
          <li><strong>handleSelectedCurrency</strong>: a function to call to update the currency chosen for the report runner</li>
        </ul>

        <h4>Optional Parameters</h4>
        <ul>
          <li><strong>exportng</strong>: a boolean to signal whether there is currently an export running</li>
          <li><strong>extraClass</strong>:
            an extra style class that will go on the component root element
          </li>
          <li><strong>featureFlags</strong>: an object of boolean to turn on and off features</li>
          <li><strong>perPage</strong>: the number of records to show per page of the table (defaults to 25)</li>
          <li><strong>routeToPreviousPage</strong>: a function to call when a the Back link is clicked</li>
          <li><strong>savedFilters</strong>: an array of any saved <strong>filter sets</strong></li>
        </ul>

      </Page>
    );
  }
}

export default GDReportRunnerDoc;
