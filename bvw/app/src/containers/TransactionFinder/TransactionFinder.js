import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import counterpart from 'counterpart';
import filesaver from 'file-saver';
import moment from 'moment';

import BallSyncLoader from 'Components/loaders/BallSyncLoader';
import GDReportRunner from 'Components/GDReportRunner';

import {
  filterArrayKeys,
  makeDateFilterValue,
} from 'Utils/reports/reportFilterUtils';
import { parseTotalRecords } from 'Utils/reportDataUtils';
import { parseDataColumnsSortKey } from 'Utils/reports/parseDataColumnsSortKey';
import * as reportActionsV2 from '../../actions/reportActions.v2';
import {
  apiGetReportExport,
} from '../../api/reportApi.v2';

import './TransactionFinder.scss';

// @todo, 2018-03-14, remove this placeholder from before the reports v2 API was available
const primaryDateFilter =
  '[{"id":75,"v1":"last_seven_days","type":"STARTS_WITH"}]'; // for report with db ID 6

class TransactionFinder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentFilterValues: [],
      // @todo, 2018-03-14, remove this placeholder from before the reports v2 API was available
      exporting: false,
      filterPaneIsVisible: true,
      primaryDateFilter: Object.assign({}, JSON.parse(primaryDateFilter)[0], {
        isPrimaryFilter: true,
      }),
      page: 1,
      perPage: 25,
      sort: parseDataColumnsSortKey(
        props.reportDefinition.dataColumns,
      ),
    };
  }

  componentDidMount() {
    this.props.reportActions.getSingleReportData('vw_bi_transaction_finder');
    if (this.props.reportId) {
      this.props.reportActions.getReportUserFilters(this.props.reportId);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.reportId &&
      nextProps.reportId) {
      this.props.reportActions.getReportUserFilters(nextProps.reportId);
    }

    if (nextProps.reportDefinition.primaryDateFilterId &&
      nextProps.reportDefinition.primaryDateFilterId !== this.props.reportDefinition.primaryDateFilterId) {
      const newPrimaryDateFilter = makeDateFilterValue(nextProps.reportDefinition.primaryDateFilterId, 'last_seven_days');

      // add or replace existing date filter
      const existingDateFilterIndex = this.state.currentFilterValues.findIndex(
        (filter) => {
          return filter.id === newPrimaryDateFilter.id;
        },
      );

      const newFilters =
        existingDateFilterIndex !== -1
          ? this.state.currentFilterValues.map((currentFilter) => {
            if (currentFilter.id === newPrimaryDateFilter.id) {
              return newPrimaryDateFilter;
            } else {
              return currentFilter;
            }
          })
          : this.state.currentFilterValues.concat(newPrimaryDateFilter);

      // @todo, 2018-03-14, remove this placeholder from before the reports v2 API was available

      const newHardcodedFilterIndex = newFilters.findIndex((filter) => {
        return filter.id === newPrimaryDateFilter.id;
      });

      const requestObject = { filters: newFilters };

      this.setState({
        currentFilterValues: newFilters,
        // @todo, 2018-03-14, remove this placeholder from before the reports v2 API was available

        primaryDateFilter: Object.assign(
          {},
          newFilters[newHardcodedFilterIndex],
          {
            isPrimaryFilter: true,
          },
        ),
        sort: parseDataColumnsSortKey(
          nextProps.reportDefinition.dataColumns,
        ),
      },
        () => {
          this.refreshAllData(requestObject);
        },
      );
    }
  }

  getSortOrder(currentSortObj, sortColumnKey, newPage, respectSort) {
    // Rule 1
    if (respectSort === false && newPage === 1 && sortColumnKey === currentSortObj.key) {
      return currentSortObj.order === 1 ? 0 : 1;
    }
    // Rule 2
    if (respectSort === false && newPage === 1 && sortColumnKey !== currentSortObj.key) {
      return 1;
    }
    // Rule 3
    if (respectSort === true && sortColumnKey === currentSortObj.key) {
      return currentSortObj.order;
    }
    // Default rule
    return 1;
  }

  getUpdatedSortObj(sortColumnKey, newPage, respectSort) {
    const currentSortObj = this.state.sort;
    const newSortOrder = this.getSortOrder(currentSortObj, sortColumnKey, newPage, respectSort);
    return {
      key: sortColumnKey,
      newSortOrder,
      orderStr: newSortOrder ? 'ASCENDING' : 'DESCENDING',
    };
  }

  getNewData = ({ page, perPage = 25, sortColumnKey = null, respectSort }) => {
    const newSortObj = this.getUpdatedSortObj(sortColumnKey, page, respectSort);
    const requestObject = {
      page,
      limit: perPage,
      filters: this.state.currentFilterValues,
      sortOrder: newSortObj.orderStr,
      sortColumnKey: newSortObj.key,
    };
    this.setState(
      {
        page,
        perPage,
        sort: newSortObj,
      },
      () => {
        this.props.reportActions.getReportData(this.props.reportId, requestObject);
      },
    );
  };


  refreshAllData = (requestObject) => {
    this.props.reportActions.getReportVisualizations(
      this.props.reportId,
      requestObject,
    );
    this.props.reportActions.getReportData(this.props.reportId, requestObject);

    if (
      this.props.reportDefinition.summaryColumns &&
      this.props.reportDefinition.summaryColumns.length
    ) {
      this.props.reportActions.getReportSummary(
        this.props.reportId,
        requestObject,
      );
    }
  };

  applyFilters = (newValues) => {
    const newFilterValues = Object.keys(newValues).map((key) => {
      return Object.assign({}, newValues[key], { id: key });
    });

    if (!newFilterValues.length) {
      const newPrimaryDateFilter = makeDateFilterValue(this.props.reportDefinition.primaryDateFilterId, 'last_seven_days');

      newFilterValues.push(newPrimaryDateFilter);
    }

    const filtersWithType = newFilterValues.map((filterValue) => {
      const type = filterValue.v2 ? 'BETWEEN' : 'STARTS_WITH';

      // @todo, 2018-03-13, convert dates from ISO8691 to Unix timestamp, until we can convince
      //                    the API team that human-readable dates are better
      const isDateFilter =
        this.props.dateFilters.findIndex(
          (dateFilter) => dateFilter.reportFilterId === Number(filterValue.id),
        ) > -1; // eslint-disable-line

      const isCurrencyFilter =
        this.props.currencyFilters.findIndex(
          (currencyFilter) => currencyFilter.reportFilterId === Number(filterValue.id),
        ) > -1; // eslint-disable-line

      if (isCurrencyFilter) {
        let normalizedValue = null;
        normalizedValue = parseFloat(filterValue.v1);
        filterValue.v1 = Number.isNaN(normalizedValue) ? 0 : normalizedValue;// eslint-disable-line
        normalizedValue = parseFloat(filterValue.v2);
        filterValue.v2 = Number.isNaN(normalizedValue) ? 0 : normalizedValue;// eslint-disable-line
      }

      if (isDateFilter) {
        const isPresetFilter = [
          'yesterday',
          'last_seven_days',
          'this_month',
          'last_month',
          'this_year',
        ].includes(filterValue.v1);

        if (!isPresetFilter) {
          filterValue.v1 = moment(filterValue.v1).unix(); // eslint-disable-line
          filterValue.v2 = moment(filterValue.v2).unix(); // eslint-disable-line
        }
      }


      return Object.assign({}, filterValue, { type });
    });

    const requestObject = {
      page: 1,
      limit: this.state.perPage,
      filters: filtersWithType,
      sortOrder: this.state.sortOrder,
      sortColumnKey: this.state.sortColumnKey,
    };

    this.refreshAllData(requestObject);

    this.setState({
      currentFilterValues: filtersWithType,
      page: 1,
    });
  };

  applySavedFilterSet = (activeFilters) => {
    let newActiveFilters = [this.state.primaryDateFilter];

    activeFilters.forEach((filter) => {
      if (filter.isActive) {
        newActiveFilters = JSON.parse(filter.filterJson).filter((newFilter) => {
          return Number(newFilter.id) !== this.state.primaryDateFilter.id;
        }).concat(...[this.state.primaryDateFilter]);
      }
    });

    const requestObject = {
      page: 1,
      limit: this.state.perPage,
      filters: filterArrayKeys(newActiveFilters),
    };

    this.props.reportActions.getReportData(this.props.reportId, requestObject);
  }

  saveFilter = (filterName, activeFilters) => {
    this.props.reportActions.saveNamedFilter(this.props.reportId, filterName, activeFilters)
      .then(() => {
        this.props.reportActions.getReportUserFilters(this.props.reportId);
      });
  }

  deleteFilter = (filters, id) => {
    this.props.reportActions.deleteReportUserFilter(this.props.reportId, id, filters)
      .then(() => {
        this.props.reportActions.getReportUserFilters(this.props.reportId);
      });
  }

  goToDetailView = (row, detailViewStructure) => {
    const reportId = this.props.reportId;
    const report = this.props.reportDefinition;

    this.props.history.push({
      pathname: `/transaction-finder/${reportId}/details/${row.seq_key}`,
      state: {
        row,
        detailViewStructure,
        hierarchyTitle: counterpart('globalTranslate.common.hierarchy'),
        hierarchyContent: 'Lorem ipsum dolor',
        subtitleTitle: `${report.name} ${counterpart(
          'globalTranslate.common.details',
        )}`,
        subtitleContent: 'Lorem ipsum dolor',
        translations: {
          corp: counterpart('globalTranslate.common.corp'),
          region: counterpart('globalTranslate.common.region'),
          principal: counterpart('globalTranslate.common.prin'),
          associate: counterpart('globalTranslate.common.associate'),
          chain: counterpart('globalTranslate.common.chain'),
          title: report.name,
          returnToText: `Return to ${report.name}`,
          hierarchy: counterpart('globalTranslate.common.hierarchy'),
          subtitle: `${report.name} ${counterpart(
            'globalTranslate.common.details',
          )}`,
        },
        reportId,
        sequenceKey: row.seq_key,
        tableData: this.props.data,
      },
    });
  };

  exportAction = ({ exportType, fileType, fileName }) => {
    if (fileType.value === 'pdf') {
      alert(`Exporting ${exportType.text.toLowerCase()} in ${fileType.text} format, with filename "${fileName}".`); // eslint-disable-line no-alert
    } else {
      this.setState({ exporting: true });

      if (exportType === 'visible-columns') {
        apiGetReportExport(this.props.reportId, this.state.currentFilterValues, fileType)
          .then((response) => {
            this.setState({ exporting: false });
            filesaver.saveAs(response, `${fileName}.csv`);
          })
          .catch(() => {
            this.setState({ exporting: false });
          });
      } else {
        apiGetReportExport(this.props.reportId, this.state.currentFilterValues, fileType)
          .then((response) => {
            this.setState({ exporting: false });
            filesaver.saveAs(response, `${fileName}.csv`);
          })
          .catch(() => {
            this.setState({ exporting: false });
          });
      }

      this.setState({
        selectedFileType: null,
        selectedExportType: null,
      });
    }
  }

  render() {
    const translations = {
      more: counterpart('globalTranslate.reports.more'),
      less: counterpart('globalTranslate.reports.less'),
      active: counterpart('globalTranslate.common.active'),
      activeColumns: counterpart('globalTranslate.manageColumns.activeColumns'),
      addAll: counterpart('globalTranslate.common.addAll'),
      apply: counterpart('globalTranslate.common.apply'),
      availableColumns: counterpart(
        'globalTranslate.manageColumns.availableColumns',
      ),
      backLinkText: counterpart('globalTranslate.reports.returnToReports'),
      cancel: counterpart('globalTranslate.common.cancel'),
      clear: counterpart('globalTranslate.common.clear'),
      clearAll: counterpart('globalTranslate.common.clearAll'),
      columns: counterpart('globalTranslate.reports.columns'),
      createAFilterContent: counterpart(
        'globalTranslate.reports.createAFilterContent',
      ),
      createAFilterTitle: counterpart(
        'globalTranslate.reports.createAFilterTitle',
      ),
      currency: counterpart('globalTranslate.common.currency'),
      export: counterpart('globalTranslate.common.export'),
      exporting: counterpart('globalTranslate.common.exporting'),
      exportTypesTitle: counterpart('globalTranslate.common.exportTitle'),
      fileNameLabel: counterpart('globalTranslate.common.nameOfFile'),
      fileTypesTitle: counterpart('globalTranslate.common.exportAsTitle'),
      filterPaneTriggerText: counterpart('globalTranslate.common.filter'),
      filters: counterpart('globalTranslate.reports.filters'),
      exportHeader: counterpart('globalTranslate.common.exportData'),
      hideAll: counterpart('globalTranslate.common.hideAll'),
      hideGraph: '',
      inactive: counterpart('globalTranslate.common.inactive'),
      loading: `${counterpart('globalTranslate.common.loading')}...`,
      next: counterpart('globalTranslate.common.next'),
      noActiveFilters: counterpart('globalTranslate.reports.noActiveFilters'),
      noActiveFiltersContent: counterpart(
        'globalTranslate.reports.noActiveFiltersContent',
      ),
      noResults: counterpart('globalTranslate.common.noResults'),
      prev: counterpart('globalTranslate.common.prev'),
      page: counterpart('globalTranslate.common.page'),
      placeholder: `${counterpart(
        'globalTranslate.common.searchBy',
      )} ${counterpart('globalTranslate.common.filterName')}...`,
      preposition: counterpart('globalTranslate.common.of'),
      removeAll: counterpart('globalTranslate.common.removeAll'),
      searchActiveColumns: `${counterpart(
        'globalTranslate.forms.search',
      )} ${counterpart('globalTranslate.manageColumns.activeColumns')}`,
      searchAvailableColumns: `${counterpart(
        'globalTranslate.forms.search',
      )} ${counterpart('globalTranslate.manageColumns.availableColumns')}`,
      searchCurrencies: `${counterpart(
        'globalTranslate.forms.search',
      )} ${counterpart('globalTranslate.common.currencies')}...`,
      select: counterpart('globalTranslate.common.select'),
      selected: counterpart('globalTranslate.manageColumns.selected'),
      showAll: counterpart('globalTranslate.common.showAll'),
      showGraph: '',
      showingRecords: counterpart('globalTranslate.common.showingRecords'),
      show25perPage: counterpart('globalTranslate.common.showPerPage', {
        count: 25,
      }),
      show50perPage: counterpart('globalTranslate.common.showPerPage', {
        count: 50,
      }),
      show75perPage: counterpart('globalTranslate.common.showPerPage', {
        count: 75,
      }),
      show100perPage: counterpart('globalTranslate.common.showPerPage', {
        count: 100,
      }),
      summaryTitle: counterpart('globalTranslate.common.summary'),
      title: counterpart('globalTranslate.common.savedFilters'),
    };
    /* eslint-disable no-extra-boolean-cast */
    return (
      <div className="transactionFinder-view">
        {!Boolean(this.props.reportDefinition.dataColumns.length) &&
          !Boolean(this.props.reportDefinition.name.length) && (
            <BallSyncLoader />
          )}
        {Boolean(this.props.reportDefinition.dataColumns.length) && (
          <GDReportRunner
            activeFilters={this.state.activeFilters}
            currentFilterValues={this.state.currentFilterValues}
            applyFilters={this.applyFilters}
            clearAllFilters={this.clearAllFilters}
            data={this.props.data}
            deactivateFilter={this.deactivateFilter}
            deleteFilter={this.deleteFilter}
            exportAction={this.exportAction}
            exporting={this.state.exporting}
            extraClass="some-class"
            featureFlags={this.props.featureFlags}
            filterPaneIsVisible={this.state.filterPaneIsVisible}
            getNewData={this.getNewData}
            goToDetailView={this.goToDetailView}
            primaryDateFilter={this.state.primaryDateFilter}
            isReportUpdating={this.props.isReportUpdating}
            perPage={this.state.perPage}
            pushFilterPane
            report={this.props.reportDefinition}
            sort={this.state.sort}
            saveFilter={this.saveFilter}
            savedFilters={this.props.savedFilters}
            summaryData={this.props.summaryData}
            totalRecords={this.props.totalRecords}
            translations={translations}
            visualizations={this.props.vizList}
          />
        )}
      </div>
    );
    /* eslint-enable no-extra-boolean-cast */
  }
}

TransactionFinder.propTypes = {
  data: PropTypes.array.isRequired,
  dateFilters: PropTypes.array.isRequired,
  currencyFilters: PropTypes.array.isRequired,
  featureFlags: PropTypes.object,
  history: PropTypes.object.isRequired,
  isReportUpdating: PropTypes.bool.isRequired,
  match: PropTypes.object.isRequired, // eslint-disable-line react/no-unused-prop-types
  reportDefinition: PropTypes.object.isRequired,
  reportActions: PropTypes.object.isRequired,
  reportId: PropTypes.number.isRequired,
  savedFilters: PropTypes.array,
  summaryData: PropTypes.array,
  totalRecords: PropTypes.number,
  vizList: PropTypes.array,
};

TransactionFinder.defaultProps = {
  featureFlags: {},
  filters: [],
  savedFilters: [],
  summaryData: [],
  totalRecords: 0,
  vizList: [],
};

function mapStateToProps(state) {
  const report = state.reportsV2.data.find((item) => {
    return item.key.includes('transaction_finder');
  });
  const reportId = report ? report.reportId : 0;
  const reportDefinition =
    report && report.longReportDefinition
      ? report.longReportDefinition
      : {
        dataColumns: [],
        name: '',
      };

  const data = report && report.reportData ? report.reportData : [];
  const totalRecords =
    report && report.contentRange ? parseTotalRecords(report.contentRange) : 0;
  const summaryData = report && report.summaryData ? report.summaryData : [];

  const vizList = (report && report.vizList)
    ? report.vizList
    : [];
  const savedFilters = (report && report.savedFilters)
    ? report.savedFilters
    : [];
  const isReportUpdating = state.reportsV2.isFetching;

  // @todo, 2018-03-13, find all filters of type DATE, so make it easy to
  //                    convert dates from ISO8691 to Unix timestamp, until we can convince
  //                    the API team that human-readable dates are better
  const dateFilters =
    reportDefinition.filters && reportDefinition.filters.length
      ? reportDefinition.filters.filter(
        (reportFilter) => reportFilter.filterType === 'DATE',
      )
      : [];

  const currencyFilters =
      reportDefinition.filters && reportDefinition.filters.length
        ? reportDefinition.filters.filter(
          (reportFilter) => reportFilter.filterType === 'CURRENCY',
        )
        : [];
  const featureFlags = state.featureFlags;
  featureFlags.isQa2 = true;

  return {
    data,
    dateFilters,
    currencyFilters,
    featureFlags,
    isReportUpdating,
    reportDefinition,
    reportId,
    savedFilters,
    summaryData,
    totalRecords,
    vizList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    reportActions: bindActionCreators(reportActionsV2, dispatch),
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TransactionFinder),
);
