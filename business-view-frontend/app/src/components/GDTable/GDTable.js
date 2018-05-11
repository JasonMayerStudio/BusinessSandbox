import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import BallSyncLoader from 'Components/loaders/BallSyncLoader';

import GDTableHeader from './GDTableHeader';
import GDTableFooter from './GDTableFooter';
import GDTableContainer from './GDTableContainer';
import GDTableSummaryRow from './GDTableSummaryRow';

import './GDTable.scss';

class GDTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visibleColumns: this.selectVisibleColumns(
        this.props.report.dataColumns,
      ),
      selectedFileType: {},
      selectedExportType: {},
      detailViewAction: {
        name: 'View Detail',
        description: 'view detail description',
        linkedReportId: 'detail-view',
        linkedReportKey: '',
        actionType: 'ROW',
        reportLinks: [],
      },
    };

    this.attachBindings();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.report !== this.props.report && newProps.report.dataColumns) {
      this.setState({
        visibleColumns: this.selectVisibleColumns(
          newProps.report.dataColumns,
        ),
      });
    }
  }

  attachBindings() {
    this.selectOption = this.selectOption.bind(this);
    this.updateVisibleColumns = this.updateVisibleColumns.bind(this);
    this.selectVisibleColumns = this.selectVisibleColumns.bind(this);
  }

  selectOption(event, option) {
    this.setState({ [event.target.name]: option });
  }

  updateVisibleColumns(columns) {
    this.setState({ visibleColumns: columns });
    this.props.saveCurrentlyVisibleColumns(columns);
  }

  selectVisibleColumns(columns = []) {
    const visibleKeyToUse = columns.some((column) => column.userIsVisible)
      ? 'userIsVisible'
      : 'defaultIsVisible';

    return columns
      .filter((column) => {
        // @todo, 2018-03-21, implement revised userIsVisible functionality next sprint
        //                    removing userIsVisible check for demo (vwilson@cardinalsolutions.com)
        return column[visibleKeyToUse];
      })
      .sort((columnA, columnB) => {
        return Number(columnA.displayOrder) - Number(columnB.displayOrder);
      });
  }

  render() {
    const { detailViewAction } = this.state;
    const wrapperClass = classnames('gd-table', {
      [this.props.extraClass]: this.props.extraClass,
    });

    const rowActions =
      this.props.report.columnToFilterMaps &&
        this.props.report.columnToFilterMaps.length
        ? this.props.report.columnToFilterMaps.map((action) => {
          const uniqueKey = action.reportColumnLinks.reduce((accumulator, item) => {
            return `${accumulator}_${item}`;
          }, '');

          return {
            callback: (rowId) => {
              const rowToUse = this.props.data.find((row) => row['seq_key'] === rowId); // eslint-disable-line

              if (rowToUse) {
                this.props.handleRowAction({ row: rowToUse, action });
              }
            },
            id: uniqueKey,
            text: action.name,
            primary: false,
          };
        })
        : [];

    rowActions.unshift({
      callback: () => { },
      id: `${detailViewAction.linkedReportId}`,
      text: `${detailViewAction.name}`,
      primary: true,
    });

    return (
      <div className={wrapperClass}>
        <GDTableHeader
          title={this.props.report.name}
          columns={this.props.report.dataColumns}
          exporting={this.props.exporting}
          totalRecords={this.props.totalRecords}
          recordsCountText={this.props.recordsCountText}
          currentPage={this.props.currentPage}
          recordsShown={this.props.recordsShown}
          filterText={this.props.filterText}
          onSearchChange={this.props.onSearchChange}
          canSearch={this.props.report.canSearch}
          isNextPage={this.props.isNextPage}
          canExport={this.props.report.isExportable}
          exportAction={this.props.exportAction}
          toggleFileExport={this.props.toggleFileExport}
          filterExportIsVisible={this.props.filterExportIsVisible}
          selectOption={this.selectOption}
          selectedFileType={this.state.selectedFileType}
          selectedExportType={this.state.selectedExportType}
          translations={this.props.translations}
          canManageColumns={
            this.props.report.canManageColumns &&
            this.props.report.dataColumns.length > 5
          }
          updateVisibleColumns={this.updateVisibleColumns}
        />
        {this.props.hasSummaryRow && (
          <GDTableSummaryRow
            title={this.props.translations.summaryTitle}
            summaryColumns={this.props.report.summaryColumns}
            summaryData={this.props.summaryData}
            currencyCode={this.props.selectedCurrencyCode}
            id={this.props.report.name}
          />
        )}
        {this.props.isReportUpdating && <BallSyncLoader />}
        {!this.props.isReportUpdating && (
          <GDTableContainer
            columns={this.state.visibleColumns}
            data={this.props.data}
            sort={this.props.sort}
            handleRowAction={this.props.handleRowAction}
            handleSort={this.props.handleSort}
            rowActions={rowActions}
            onRowClick={this.props.onRowClick}
          />
        )}
        <GDTableFooter
          totalRecords={this.props.totalRecords}
          totalPages={this.props.totalPages}
          recordsCountText={this.props.recordsCountText}
          currentPage={this.props.currentPage}
          recordsShown={this.props.recordsShown}
          pageHandler={this.props.pageHandler}
          translations={this.props.translations}
          isNextPage={this.props.isNextPage}
          id={`${this.props.report.name}_GDTableFooter`}
        />
      </div>
    );
  }
}

GDTable.propTypes = {
  currentPage: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  data: PropTypes.array.isRequired,
  exportAction: PropTypes.func,
  exporting: PropTypes.bool,
  extraClass: PropTypes.string,
  filterExportIsVisible: PropTypes.bool,
  filterText: PropTypes.string,
  handleRowAction: PropTypes.func,
  handleSort: PropTypes.func, // generalize to refresh API call with new sort param
  hasSummaryRow: PropTypes.bool, // if GET /reports/:reportId/summary returns anything
  isNextPage: PropTypes.bool,
  isReportUpdating: PropTypes.bool,
  onRowClick: PropTypes.func,
  onSearchChange: PropTypes.func,
  pageHandler: PropTypes.func.isRequired,
  recordsCountText: PropTypes.object.isRequired,
  recordsShown: PropTypes.number,
  report: PropTypes.object.isRequired,
  saveCurrentlyVisibleColumns: PropTypes.func,
  selectedCurrencyCode: PropTypes.string,
  sort: PropTypes.object.isRequired,
  summaryData: PropTypes.array,
  toggleFileExport: PropTypes.func,
  totalPages: PropTypes.number.isRequired,
  totalRecords: PropTypes.number.isRequired,
  translations: PropTypes.object.isRequired,
};

GDTable.defaultProps = {
  canSearch: false,
  exportAction: null,
  exporting: false,
  extraClass: '',
  filterExportIsVisible: false,
  filterText: '',
  handleRowAction: null,
  handleSort: () => { },
  hasSummaryRow: false,
  isNextPage: false,
  isReportUpdating: false,
  onRowClick: () => { },
  onSearchChange: () => { },
  recordsShown: 25,
  saveCurrentlyVisibleColumns: () => { },
  selectedCurrencyCode: '',
  summaryData: [],
  toggleFileExport: () => { },
};

export default GDTable;
