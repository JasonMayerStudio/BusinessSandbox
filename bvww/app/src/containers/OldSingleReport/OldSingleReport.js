import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import counterpart from 'counterpart';
import classnames from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import isEqual from 'lodash/isEqual';
import filesaver from 'file-saver';

import BallSyncLoader from 'Components/loaders/BallSyncLoader';
import Button from 'Components/Button';
import ColumnManager from 'Components/column-manager/ColumnManager.js';
import ExportIcon from 'Components/icons/export-icon/ExportIcon.js';
import FileExport from 'Components/file-export/FileExport.js';
import FilterToggle from 'Components/filter-toggle/FilterToggle.js';
import LeftPointerIcon from 'Components/icons/left-pointer-icon/LeftPointerIcon.js';
import PrimaryButton from 'Components/Button/PrimaryButton';
import SelectionBar from 'Components/selection-bar/SelectionBar.js';
import TableDynamicColumns from 'Components/table-dynamic-columns/TableDynamicColumns.js';

import { selectCurrentPreferences } from 'Selectors/preferencesSelectors';

import Listener from 'Utils/listener';
import { initCommonTranslate } from 'Utils/languages';
import {
  getSelectedReportColumns,
  getIdColumnKey,
  getColumnsByType,
} from 'Utils/reportColumnUtils';
import {
  setUpDateList,
  getPrimaryFilterSetting,
  getSelectedTab,
  getPrimaryReportFilter,
  getCurrentReportFilters,
  mergeFilterValues,
} from 'Utils/reportFilterUtils';
import { getSortedData } from 'Utils/tableUtils';

import * as reportActions from '../../actions/reportActions';
import * as reportFiltersActions from '../../actions/reportFiltersActions';

import {
  apiGetReportData,
  apiGetReportVisualizations,
  apiGetReportExport } from '../../api/reportApi';

import setUpExportList from './data/exportList';

import './OldSingleReport.scss';

class OldSingleReport extends Component {
  constructor(props) {
    super(props);

    const dateList = setUpDateList();

    let selectedTab;
    if (this.props.currentFilters.filters) {
      selectedTab = getSelectedTab(this.props.currentFilters.filters, this.props.primaryFilter);
    } else {
      selectedTab = dateList[0];
    }
    const columnsByType = getColumnsByType(this.props.report.reportColumns || []);

    this.state = {
      report: this.props.report,
      reportColumns: getSelectedReportColumns(this.props.report.reportColumns || []),
      currentReportData: {
        isFetching: false,
        data: {
          rows: [],
        },
        error: null,
      },
      currentVisualizations: {
        isFetching: false,
        urls: [],
        error: null,
      },
      selectedItem: null,
      sort: {
        key: undefined,
        order: 0,
      },
      selectedTab,
      selectedFileType: null,
      selectedExportType: null,
      isVisible: false,
      isToggled: false,
      showDataViz: true,
      selectedColumns: columnsByType.selectedColumns,
      availableColumns: columnsByType.availableColumns,
      originalSelectedColumns: columnsByType.selectedColumns,
      originalAvailableColumns: columnsByType.availableColumns,
      isOpen: false,
      filterText: '',
      filteredColumns: [],
    };

    initCommonTranslate();

    this.attachBindings();
    this.attachListeners();
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleOutsideClick);

    this.props.reportFiltersActions.getReportUserFilters(this.props.reportId);

    if (!(this.props.report.reportColumns && this.props.report.reportColumns.length)) {
      this.props.reportActions.getReportMetadata(this.props.reportId);
    }

    if (this.props.report.reportColumns &&
        this.props.report.reportColumns.length &&
        this.props.primaryFilter.columnId &&
        Object.keys(this.props.currentFilters).length) {
      this.refreshReport(this.props.report, this.props.currentFilters.filters);
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.report.reportColumns &&
        (!this.props.report.reportColumns ||
         this.props.report.reportColumns.length !== newProps.report.reportColumns.length)) {
      const columnsByType = getColumnsByType(newProps.report.reportColumns);

      this.setState({
        reportColumns: getSelectedReportColumns(newProps.report.reportColumns),
        selectedColumns: columnsByType.selectedColumns,
        availableColumns: columnsByType.availableColumns,
        originalSelectedColumns: columnsByType.selectedColumns,
        originalAvailableColumns: columnsByType.availableColumns,
      }, () => {
        if (getPrimaryFilterSetting(newProps.currentFilters.filters, newProps.primaryFilter)) {
          this.refreshReport(newProps.report, newProps.currentFilters.filters);
        } else {
          const currentValues = {
            first: 'yesterday',
            last: 'yesterday',
          };
          this.setPrimaryFilter(newProps.currentFilters.filters, newProps.primaryFilter, currentValues);
        }
      });
    }

    if (newProps.currentFilters &&
        (!this.props.currentFilters ||
         !isEqual(this.props.currentFilters, newProps.currentFilters))) {
      if (getPrimaryFilterSetting(newProps.currentFilters.filters, newProps.primaryFilter)) {
        const selectedTab = getSelectedTab(newProps.currentFilters.filters, newProps.primaryFilter);
        this.setState({
          selectedTab,
        });

        this.refreshReport(newProps.report, newProps.currentFilters.filters);
      } else {
        const currentValues = {
          first: 'yesterday',
          last: 'yesterday',
        };
        this.setPrimaryFilter(newProps.currentFilters.filters, newProps.primaryFilter, currentValues);
      }
    }
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleOutsideClick);
  }

  onChange(filterText) {
    this.setState({ filterText });
  }

  setPrimaryFilter(currentFilterData, primaryFilter, currentValues) {
    const newPrimaryFilter = Object.assign({}, primaryFilter, { currentValues });
    const newFilters = mergeFilterValues(currentFilterData, [newPrimaryFilter]);
    this.props.reportFiltersActions.setCurrentReportFilter(this.props.reportId, newFilters);
  }

  refreshReport(report, filters) {
    const reportRequestPayload = {
      report,
      filters,
    };
    this.refreshReportData(reportRequestPayload);
    this.refreshReportVisualizations(reportRequestPayload);
  }

  refreshReportData(reportRequestObject) {
    this.setState({
      currentReportData: {
        isFetching: true,
        data: {},
        error: null,
      },
    });

    apiGetReportData(reportRequestObject)
      .then((data) => {
        this.setState({
          currentReportData: {
            isFetching: false,
            data,
            error: null,
          },
        });
      })
      .catch((error) => {
        this.setState({
          currentReportData: {
            isFetching: false,
            data: {},
            error,
          },
        });
      });
  }

  refreshReportVisualizations(reportRequestObject) {
    this.setState({
      currentVisualizations: {
        isFetching: true,
        urls: [],
        error: null,
      },
    });

    apiGetReportVisualizations(reportRequestObject)
      .then((urls) => {
        this.setState({
          currentVisualizations: {
            isFetching: false,
            urls,
            error: null,
          },
        });
      })
      .catch((error) => {
        this.setState({
          currentVisualizations: {
            isFetching: false,
            urls: [],
            error,
          },
        });
      });
  }

  toggleFileExport() {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  }

  handleOutsideClick(event) {
    /* close menu when clicked outside */
    if (this.fileExport && !this.fileExport.contains(event.target) && this.state.isVisible) {
      this.toggleFileExport();
    }
  }

  attachBindings() {
    this.returnToOldReports = this.returnToOldReports.bind(this);
    this.refreshReport = this.refreshReport.bind(this);
    this.refreshReportData = this.refreshReportData.bind(this);
    this.refreshReportVisualizations = this.refreshReportVisualizations.bind(this);
    this.setPrimaryFilter = this.setPrimaryFilter.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.selectRow = this.selectRow.bind(this);
    this.handlePrimaryDateFilterSelection = this.handlePrimaryDateFilterSelection.bind(this);
    this.exportAction = this.exportAction.bind(this);
    this.selectExport = this.selectExport.bind(this);
    this.selectFileType = this.selectFileType.bind(this);
    this.toggleFileExport = this.toggleFileExport.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleVizes = this.toggleVizes.bind(this);
    this.toggleFilterDrawer = this.toggleFilterDrawer.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.onChange = this.onChange.bind(this);
    this.filterRows = this.filterRows.bind(this);
    this.saveManagement = this.saveManagement.bind(this);
    this.cancelManagement = this.cancelManagement.bind(this);
    this.sortDisplayOrder = this.sortDisplayOrder.bind(this);
    this.addToSelectedColumns = this.addToSelectedColumns.bind(this);
    this.removeSelectedColumn = this.removeSelectedColumn.bind(this);
    this.persistToggle = this.persistToggle.bind(this);
  }

  attachListeners() {
    Listener.on('FILTERS_DRAWER_CLOSED', this.toggle);
    Listener.on('FILTERS_DRAWER_OPEN', this.persistToggle);
  }

  sortDisplayOrder(a, b) {
    if (a.displayOrder < b.displayOrder) {
      return -1;
    }

    if (a.displayOrder > b.displayOrder) {
      return 1;
    }

    return 0;
  }

  toggleModal() {
    if (!this.state.isOpen) {
      this.setState({
        filterText: '',
      });
    }

    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  addToSelectedColumns(column) {
    const selectedColumns = [...this.state.selectedColumns];
    const oldAvailableColumns = [...this.state.availableColumns];

    selectedColumns.push(column);
    selectedColumns.sort(this.sortDisplayOrder);

    const availableColumns = oldAvailableColumns.map((oldColumn) => {
      const columnToUpdate = oldColumn;
      if (oldColumn.columnId === column.columnId) {
        columnToUpdate.selected = true;
      }
      return columnToUpdate;
    })
    .sort(this.sortDisplayOrder);

    this.setState({
      selectedColumns,
      availableColumns,
    });
  }

  removeSelectedColumn(column) {
    const oldSelectedColumns = [...this.state.selectedColumns];
    const availableColumns = [...this.state.availableColumns];

    const newAvailableColumns = availableColumns.map((availableColumn) => {
      const columnToUpdate = availableColumn;
      if (availableColumn.columnId === column.columnId) {
        columnToUpdate.selected = false;
      }
      return columnToUpdate;
    });

    const selectedColumns = oldSelectedColumns.filter((oldColumn) => {
      return oldColumn.columnId !== column.columnId;
    });

    this.setState({
      selectedColumns,
      availableColumns: newAvailableColumns,
    });
  }

  cancelManagement() {
    this.toggleModal();
    this.setState({
      selectedColumns: this.state.originalSelectedColumns,
      availableColumns: this.state.originalAvailableColumns,
    });
  }

  saveManagement() {
    this.toggleModal();
    this.setState({
      originalSelectedColumns: this.state.selectedColumns,
      originalAvailableColumns: this.state.availableColumns,
    }, () => {
      const report = Object.assign({}, this.props.report);
      const idColumn = this.props.report.reportColumns.find((column) => {
        return column.jsonKey === this.props.idColumnKey;
      });
      const columnsWithKey = this.state.availableColumns.concat(idColumn);
      report.reportColumns = columnsWithKey;

      this.refreshReportData({
        report,
        filters: this.props.currentFilters.filters,
      });
      this.setState({
        reportColumns: columnsWithKey,
      });
    });
  }

  filterRows() {
    this.setState((prevState) => {
      const newColumnItems = {
        filteredColumns: prevState.availableColumns.filter((column) => {
          const objKeys = Object.keys(column);
          const objKeyLength = objKeys.length;

          for (let i = 0; i < objKeyLength; i += 1) {
            const key = objKeys[i];
            if (key.toLowerCase().indexOf('id') === -1) {
              if (column[key] &&
              key === 'label' &&
              typeof column[key] !== 'object' &&
              column[key].toLowerCase &&
              column[key].toLowerCase().indexOf(this.state.filterText.toLowerCase()) > -1) {
                return column[key];
              }
            }
          }
          return false;
        }),
      };
      return newColumnItems;
    });
  }

  persistToggle() {
    if (!this.state.isToggled) {
      this.setState({
        isToggled: true,
      });
    }
  }

  toggle() {
    this.setState({
      isToggled: !this.state.isToggled,
    });
  }

  toggleFilterDrawer() {
    this.toggle();
    this.props.history.push(`/old-reports/${this.props.reportId}/filters`);
  }

  exportAction() {
    this.toggleFileExport();
    this.setState({ exporting: true });

    const selectedReportData = Object.assign({}, this.props.report);
    const currentDateTime = new Date();
    const fileName = `${this.props.report.name}_${currentDateTime.toISOString()}`;

    if (this.state.selectedExportType.value === 'visible-columns') {
      selectedReportData.reportColumns = this.state.reportColumns;
      apiGetReportExport({ report: selectedReportData, filters: this.props.currentFilters.filters })
        .then((response) => {
          this.setState({ exporting: false });
          filesaver.saveAs(response, `${fileName}.csv`);
        });
    } else {
      selectedReportData.reportColumns.map((column) => {
        const newColumn = column;
        newColumn.selected = true;
        return newColumn;
      });
      apiGetReportExport({ report: selectedReportData, filters: this.props.currentFilters.filters })
        .then((response) => {
          this.setState({ exporting: false });
          filesaver.saveAs(response, `${fileName}.csv`);
        });
    }

    this.setState({
      selectedFileType: null,
      selectedExportType: null,
    });
  }

  selectExport(exportOption) {
    this.setState({
      selectedExportType: exportOption,
    });
  }

  selectFileType(file) {
    this.setState({
      selectedFileType: file,
    });
  }

  returnToOldReports(event) {
    event.preventDefault();
    this.props.history.push('/old-reports');
  }

  toggleVizes() {
    this.setState({
      showDataViz: !this.state.showDataViz,
    });
  }

  handleSort(key) {
    /**
     * @todo, implement sorting after MVP
     */
    /* eslint-disable */
    return;
    /**
     * end @todo
     */
    const sort = (this.state.sort.key === key)
      // key matches, update order
      ? { key, order: (this.state.sort.order + 1) % 3 }
      // key differs, start with 'asc' order
      : { key, order: 1 };

    const sortedData = getSortedData(this.state.currentReportData.data.rows, sort.key, sort.order);

    const newCurrentReport = Object.assign({}, this.state.currentReportData.data, { rows: sortedData });

    this.setState({
      sort,
      currentReportData: newCurrentReport,
    });
    /* eslint-enable */
  }

  selectRow(event) {
    const dataId = event.currentTarget.getAttribute('data-id');
    const newSelectedItem = this.state.currentReportData.data.rows.find((row) => {
      return row[this.props.idColumnKey] === dataId; // eslint-disable-line
    });

    this.setState({
      selectedItem: newSelectedItem,
    }, () => {
      const detailId = newSelectedItem[this.props.idColumnKey];
      if (detailId) {
        this.props.history.push(`/old-reports/${this.props.reportId}/details/${detailId}`);
      }
    });
  }

  handlePrimaryDateFilterSelection(item) {
    this.setState({
      selectedTab: item,
    });
    if (item.value === 'custom_data_range') {
      this.props.history.push(`/old-reports/${this.props.reportId}/filters`);
    } else {
      const currentValues = {
        first: item.value,
        last: item.value,
      };
      this.setPrimaryFilter(this.props.currentFilters.filters, this.props.primaryFilter, currentValues);
    }
  }

  render() {
    const showDataVizLoader = Boolean(!(this.state.reportColumns && this.state.reportColumns.length) || this.state.currentVisualizations.isFetching);
    const showTableLoader = Boolean(!(this.state.reportColumns && this.state.reportColumns.length) || this.state.currentReportData.isFetching);

    const datavizes = this.state.currentVisualizations.urls.map((datavizUrl) => {
      return (
        <div className="iframe-container" key={datavizUrl}>
          <iframe title="First data visualization" src={datavizUrl} />
        </div>
      );
    });

    const toggleClass = classnames('report-toggle-graphs', {
      hidden: !this.state.showDataViz,
    });

    const availableColumns = this.state.filteredColumns.length && this.state.filterText
                    ? this.state.filteredColumns
                    : this.state.availableColumns;

    const hasExportPermissions = this.props.parsedPermissions.reports.canExport;

    const dateList = setUpDateList();
    const exportList = setUpExportList();

    const columnManagerTranslations = {
      title: counterpart('globalTranslate.manageColumns.title'),
      activeColumns: counterpart('globalTranslate.manageColumns.activeColumns'),
      selected: counterpart('globalTranslate.manageColumns.selected'),
      cancel: counterpart('globalTranslate.manageColumns.cancel'),
      saveColumns: counterpart('globalTranslate.manageColumns.saveColumns'),
    };

    return (
      <article className="single-report padded">
        <FilterToggle
          toggled={this.state.isToggled}
          buttonText={this.state.isToggled ? '' : counterpart('globalTranslate.common.filter')}
          action={this.toggleFilterDrawer}
        />
        <div className="go-back-button">
          <Button
            type="button"
            iconDirection="left"
            icon={LeftPointerIcon}
            action={this.returnToOldReports}
          >
            {counterpart('globalTranslate.reports.returnToOldReports')}
          </Button>
        </div>
        <h1>{this.props.report.name || ''} Report</h1>
        <div className="report-date-filter">
          <span className="report-date-title">
            {this.props.primaryFilter.label}:
          </span>
          <SelectionBar
            listItems={dateList}
            handleSelection={this.handlePrimaryDateFilterSelection}
            selectedTab={this.state.selectedTab}
          />
          <span className="report-extended-border" />
          <span
            tabIndex={0}
            role="button"
            className={toggleClass}
            onClick={this.toggleVizes}
          >
            {this.state.showDataViz ? counterpart('globalTranslate.common.hideGraph') : counterpart('globalTranslate.common.showGraph')}
          </span>
        </div>
        <ReactCSSTransitionGroup
          transitionName="graphs"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {this.state.showDataViz && <section className="report-dataviz">
            {
              showDataVizLoader &&
              <BallSyncLoader />
            }
            {
              !showDataVizLoader &&
              datavizes
            }
          </section>}
        </ReactCSSTransitionGroup>
        <section className="report-table">
          {
            showTableLoader &&
            <div className="ball-sync-loader"><BallSyncLoader /></div>
          }
          <div className="report-table__wrapper">
            <div className="report-table__heading">
              <h1>{this.props.report.name || ''}</h1>
              <div className="report-table__right">
                <ColumnManager
                  onChange={this.onChange}
                  toggleModal={this.toggleModal}
                  isOpen={this.state.isOpen}
                  filterRows={this.filterRows}
                  filterText={this.state.filterText}
                  placeholder={counterpart('globalTranslate.common.searchColumns')}
                  saveManagement={this.saveManagement}
                  cancelManagement={this.cancelManagement}
                  selectedColumns={this.state.selectedColumns}
                  availableColumns={availableColumns}
                  addToSelectedColumns={this.addToSelectedColumns}
                  removeSelectedColumn={this.removeSelectedColumn}
                  translations={columnManagerTranslations}
                />{hasExportPermissions && <div
                  className="file-export-wrapper"
                  ref={(ref) => (this.fileExport = ref)}
                >
                  <PrimaryButton
                    action={this.toggleFileExport}
                    iconDirection="left"
                    icon={ExportIcon}
                    verticalAlign="top"
                    disabled={!this.state.currentReportData.data.rows || !this.state.currentReportData.data.rows.length}
                  >
                    {this.state.exporting ?
                    `${counterpart('globalTranslate.common.exporting')}...` :
                    counterpart('globalTranslate.common.export')}
                  </PrimaryButton>
                  {
                    this.state.isVisible && <FileExport
                      header={counterpart('globalTranslate.common.exportHeader')}
                      title={counterpart('globalTranslate.common.exportTitle')}
                      buttonText={counterpart('globalTranslate.common.export')}
                      exportTypes={exportList}
                      exportAction={this.exportAction}
                      selectFileType={this.selectFileType}
                      selectExport={this.selectExport}
                      selectedFileType={this.state.selectedFileType}
                      selectedExportType={this.state.selectedExportType}
                    />
                  }
                </div>}
              </div>
            </div>
            <div className="scrollable-columns">
              {
                !showTableLoader &&
                <TableDynamicColumns
                  idColumnKey={this.props.idColumnKey}
                  columns={this.state.selectedColumns}
                  data={this.state.currentReportData.data.rows}
                  clickHandler={this.selectRow}
                  handleSort={this.handleSort}
                  reportName={this.props.report.lookerView}
                  dateFormat={this.props.preferences.dateFormat}
                  timeFormat={this.props.preferences.timeFormat}
                  sortColumns={[]}
                />
              }
            </div>
          </div>
        </section>
      </article>
    );
  }
}

OldSingleReport.propTypes = {
  currentFilters: PropTypes.object.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
    history: PropTypes.object,
    location: PropTypes.object,
    staticContext: PropTypes.object,
    goBack: PropTypes.func,
  }).isRequired,
  idColumnKey: PropTypes.string,
  parsedPermissions: PropTypes.object.isRequired,
  preferences: PropTypes.object.isRequired,
  primaryFilter: PropTypes.object.isRequired,
  report: PropTypes.object.isRequired,
  reportActions: PropTypes.object.isRequired,
  reportFiltersActions: PropTypes.object.isRequired,
  reportId: PropTypes.number.isRequired,
};

OldSingleReport.defaultProps = {
  idColumnKey: '',
};

function mapStateToProps(state, ownProps) {
  const reportId = parseInt(ownProps.match.params.reportId, 10);
  const foundReport = state.reports.data.find((report) => {
    return report.id === reportId;
  }) || {};
  const primaryFilter = (foundReport.reportColumns &&
                        getPrimaryReportFilter(foundReport.reportColumns)) || {};
  const currentFilters = getCurrentReportFilters(reportId, state.currentReportFilters) || {};
  const idColumnKey = getIdColumnKey(foundReport);

  return {
    currentFilters,
    idColumnKey,
    parsedPermissions: state.auth.session.user.parsedPermissions,
    preferences: selectCurrentPreferences(state.preferences),
    primaryFilter,
    report: foundReport,
    reportId,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    reportActions: bindActionCreators(reportActions, dispatch),
    reportFiltersActions: bindActionCreators(reportFiltersActions, dispatch),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OldSingleReport));
