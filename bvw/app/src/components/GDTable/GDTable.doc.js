import React, { Component } from 'react';
import { Page, ReactSpecimen } from 'catalog';
import counterpart from 'counterpart';

import {
  getSingleReportv2,
  getSingleReportDatav2,
  getSummaryDatav2,
} from 'Helpers/testHelpers/testReportAPIv2Mocks';

import GDTable from 'Components/GDTable';

import {
  divideReportActionTypes,
} from 'Utils/reportActionUtils';
import { getSortedData } from 'Utils/tableUtils';

const report = getSingleReportv2();
const data = getSingleReportDatav2();
const summaryData = getSummaryDatav2();

const translations = {
  addAll: 'Add All',
  apply: 'Apply',
  cancel: 'Cancel',
  columns: 'Columns',
  export: 'Export',
  exporting: 'Exporting',
  exportTypesTitle: 'What do you want to export?',
  fileName: 'Name of file:',
  fileTypesTitle: 'Export As:',
  header: 'Export Data',
  hideAll: 'Hide All',
  next: 'Next',
  prev: 'Prev',
  page: 'Page',
  preposition: 'of',
  removeAll: 'Remove All',
  showAll: 'Show All',
  show25perPage: 'Show 25 per page',
  show50perPage: 'Show 50 per page',
  show75perPage: 'Show 75 per page',
  show100perPage: 'Show 100 per page',
  showingRecords: 'Showing records',
  summaryTitle: 'Summary',
};

class GDTableDoc extends Component {
  constructor(props) {
    super(props);

    const recordsShown = data.length > 25 ? 25 : data.length; // hard coded for now, until we integrate the "Show X" feature

    // @todo, this step will move to the API response parsing in the real app
    const { reportActions, reportRowActions } = divideReportActionTypes(report.actions);
    report.reportActions = reportActions;
    report.reportRowActions = reportRowActions;

    counterpart.setLocale('en-US'); // for translations purposes

    this.state = {
      report,
      data: data.slice(0, recordsShown),
      totalData: data,
      recordsShown,
      currentPage: 1,
      totalRecords: data.length,
      totalPages: Math.ceil(data.length / recordsShown),
      sort: {
        key: undefined,
        order: 0,
      },
      filterText: '',
      filterExportIsVisible: false,
    };
  }

  onRowClick = (event, sequenceKey) => {
    if ((!event.target.id &&
      !event.target.classList.contains('gd-row-actions') &&
      !event.target.classList.contains('dropdown-menu-trigger')) ||
      event.target.parentNode.classList.contains('primary')) {
      alert(`Row #${sequenceKey} clicked.`); // eslint-disable-line
    }
  }

  // @TODO find out why the heck this is so slow to render
  onSearchChange = (filterText) => {
    this.setState({ filterText });
  }

  setDataRange = () => {
    const offset = Math.ceil((this.state.currentPage - 1) * this.state.recordsShown);

    this.setState({
      data: this.state.totalData.slice(offset, offset + this.state.recordsShown),
    });

    this.gdTable.scrollIntoView();
  }

  // @TODO in the app, this should be hitting a sorting end point to return sorted data rather than handling on the front end
  handleSort = (key) => {
    const sort = (this.state.sort.key === key)
      // key matches, update order
      ? { key, order: (this.state.sort.order + 1) % 2 }
      // key differs, start with 'asc' order
      : { key, order: 1 };

    const sortParam = (sort.order) ? 'DESCENDING' : 'ASCENDING'; // 1 = DESC, 0 = ASC

    const sortedData = getSortedData(this.state.data, sort.key, sortParam);

    this.setState({
      sort,
      data: sortedData,
    });
  }

  pageHandler = (newPage, newPerPage) => {
    if (newPage) {
      this.setState({
        currentPage: newPage,
        recordsShown: newPerPage,
      }, this.setDataRange);
    }
  }

  toggleFileExport = () => {
    this.setState({ filterExportIsVisible: !this.state.filterExportIsVisible });
  }

  exportAction = (fileName) => {
    this.toggleFileExport();

    if (typeof fileName === 'string') {
      this.setState({ exporting: true }, () => {
        setTimeout(() => {
          alert(`File ${fileName} exported.`); // eslint-disable-line no-alert
          this.setState({ exporting: false });
        }, 2000);
      });
    }
  }

  render() {
    const hasSummaryRow = summaryData.length > 0; // will come from length of return to GET /reports/:reportId/summary

    return (
      <Page>
        <h2>GDTable</h2>

        <p>Use this component to build a summary box for a multi-step processes.</p>

        <h3>GDTable Examples</h3>

        <ReactSpecimen span={6}>
          <div ref={((ref) => (this.gdTable = ref))}>
            <GDTable
              report={this.state.report}
              data={this.state.data}
              totalPages={this.state.totalPages}
              totalRecords={this.state.totalRecords}
              recordsCountText={{ showingRecords: 'Showing records', preposition: 'of' }}
              currentPage={this.state.currentPage}
              recordsShown={this.state.recordsShown}
              hasSummaryRow={hasSummaryRow}
              summaryData={summaryData}
              sort={this.state.sort}
              handleSort={this.handleSort}
              pageHandler={this.pageHandler}
              translations={translations}
              filterText={this.state.filterText}
              onRowClick={this.onRowClick}
              onSearchChange={this.onSearchChange}
              isNextPage={this.state.isNextPage}
              exporting={this.state.exporting}
              exportAction={this.exportAction}
              filterExportIsVisible={this.state.filterExportIsVisible}
              toggleFileExport={this.toggleFileExport}
            />
          </div>
        </ReactSpecimen>

        <h3>Subcomponents and Parameters</h3>

        <h4>GDTable</h4>
        <p>This is a god-object component to display a table and associated controls for any report.</p>
        <h5>Required Parameters</h5>
        <ul>
          <li><strong>currentPage</strong>: the current page of the data being displayed</li>
          <li><strong>date</strong>: the data for the table</li>
          <li><strong>pageHandler</strong>: function called when the paginator changes pages</li>
          <li><strong>report</strong>: the report object</li>
          <li><strong>totalRecords</strong>: the count of records on all pages</li>
          <li><strong>translations</strong>: object with all required translated strings</li>
        </ul>

        <h5>Optional Parameters</h5>
        <ul>
          <li><strong>extraClass</strong>:
            an extra style class that will go on the component root element
          </li>
        </ul>
      </Page>
    );
  }
}

export default GDTableDoc;
