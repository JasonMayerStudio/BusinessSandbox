import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import counterpart from 'counterpart';
import filesaver from 'file-saver';
import moment from 'moment';
import queryString from 'query-string';
import unionBy from 'lodash/unionBy';

import BallSyncLoader from 'Components/loaders/BallSyncLoader';
import GDReportRunner from 'Components/GDReportRunner';

import { selectCurrentPreferences } from 'Selectors/preferencesSelectors';
import { getReportById } from 'Selectors/reportSelectors';

import {
  filterArrayKeys,
  makeDateFilterValue,
} from 'Utils/reports/reportFilterUtils';
import { parseTotalRecords } from 'Utils/reportDataUtils';
import { parseDataColumnsSortKey } from 'Utils/reports/parseDataColumnsSortKey';
import {
  normalizeQueryString,
  makeReportQueryString,
} from 'Utils/reports/reportQueryUtils.js';
import englishCurrencyList from 'Utils/currency-lists/en-US_currencies';
import frenchCurrencyList from 'Utils/currency-lists/fr-CA_currencies';
import simplifiedChineseCurrencyList from 'Utils/currency-lists/zh-Hans_currencies';
import traditionalChineseCurrencyList from 'Utils/currency-lists/zh-Hant_currencies';

import * as reportActionsV2 from '../../actions/reportActions.v2';
import {
  apiGetReportExport,
} from '../../api/reportApi.v2';

import './ReportView.scss';

// @todo, 2018-03-14, remove this placeholder from before the reports v2 API was available
const primaryDateFilter =
  '[{"id":75,"v1":"last_seven_days","type":"STARTS_WITH"}]'; // for report with db ID 6

class ReportView extends Component {
  constructor(props) {
    super(props);

    const normalizedString = normalizeQueryString(props.location.search);

    const { page, filters } = this.getReportQueryParams(normalizedString);

    const initialHardcodedFilter = (props.reportDefinition.primaryDateFilterId)
      ? makeDateFilterValue(props.reportDefinition.primaryDateFilterId, 'last_seven_days')
      : Object.assign({}, JSON.parse(primaryDateFilter)[0], {
        isPrimaryFilter: true,
      });

    this.state = {
      currentFilterValues: filters,
      // @todo, 2018-03-14, remove this placeholder from before the reports v2 API was available
      exporting: false,
      primaryDateFilter: initialHardcodedFilter,
      page,
      perPage: 25,
      sort: parseDataColumnsSortKey(
        props.reportDefinition.dataColumns,
      ),
    };

    if (props.reportDefinition.primaryDateFilterId) {
      const requestObject = {
        filters: [initialHardcodedFilter],
        page,
      };

      this.refreshAllData(requestObject);
    }

    this.attachBindings();
  }

  componentDidMount() {
    this.getReportInfo(this.props.reportId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.reportId !== this.props.reportId) {
      this.setState({
        currentFilterValues: [],
        primaryDateFilter: {},
      });

      this.getReportInfo(nextProps.reportId);
    } else if (nextProps.reportDefinition.primaryDateFilterId &&
      nextProps.reportDefinition.primaryDateFilterId !== this.props.reportDefinition.primaryDateFilterId) {
      const newPrimaryDateFilter = makeDateFilterValue(nextProps.reportDefinition.primaryDateFilterId, 'last_seven_days');

      const presetFilterValues = nextProps.reportDefinition.filters
        .filter((filter) => filter.defaultValue)
        .map((filter) => {
          try {
            const defaultValueObj = JSON.parse(filter.defaultValue);
            defaultValueObj.id = filter.reportFilterId;
            return defaultValueObj;
          } catch (err) {
            return {};
          }
        });

      // add or replace existing date filter
      const existingDateFilterIndex = presetFilterValues.findIndex(
        (filter) => {
          return parseInt(filter.id, 10) === newPrimaryDateFilter.id;
        },
      );

      const newFilters =
        existingDateFilterIndex !== -1
          ? presetFilterValues
          : presetFilterValues.concat(newPrimaryDateFilter);

      const normalizedString = normalizeQueryString(nextProps.location.search);
      const { page: urlPage, filters: paramFilters } = this.getReportQueryParams(normalizedString);

      const mergedFilters = unionBy(paramFilters, newFilters, 'id');

      // @todo, 2018-03-14, remove this placeholder from before the reports v2 API was available
      const newHardcodedFilterIndex = mergedFilters.findIndex((filter) => {
        return parseInt(filter.id, 10) === newPrimaryDateFilter.id;
      });

      const requestObject = {
        filters: mergedFilters,
        page: urlPage || this.state.page,
      };

      this.setState({
        currentFilterValues: mergedFilters,
        page: urlPage || this.state.page,
        // @todo, 2018-03-14, remove this placeholder from before the reports v2 API was available
        primaryDateFilter: Object.assign(
          {},
          mergedFilters[newHardcodedFilterIndex],
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

  getReportInfo(reportId) {
    this.props.reportActions.getOneReport(reportId);

    this.props.reportActions.getReportUserFilters(reportId);
  }

  getReportQueryParams(search) {
    const params = queryString.parse(search);
    const page = parseInt(params.page, 10) || 1;

    const filterString = params.filters || '[]';

    let jsonFilters;
    try {
      const decoded = decodeURI(filterString);
      jsonFilters = JSON.parse(decoded);
    } catch (e) { // catches a malformed URI
      console.error(e); // eslint-disable-line no-console
    }

    return {
      page,
      filters: jsonFilters,
    };
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

  getNewData({ page, perPage = 25, sortColumnKey = null, respectSort }) {
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
  }

  setCurrencyList(language) {
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

  refreshAllData(requestObject) {
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
  }

  applyFilters(newValues) {
    const newFilterValues = Object.keys(newValues).map((key) => {
      return Object.assign({}, newValues[key], { id: key });
    });

    if (!newFilterValues.length) {
      const newPrimaryDateFilter = makeDateFilterValue(this.props.reportDefinition.primaryDateFilterId, 'last_seven_days');

      newFilterValues.push(newPrimaryDateFilter);
    }

    const filtersWithType = newFilterValues.map((filterValue) => {
      let type = '';
      if (filterValue.v1 && !filterValue.v2) {
        type = 'STARTS_WITH';
      } else if (!filterValue.v1 && filterValue.v2) {
        type = 'ENDS_WITH';
      } else {
        type = 'BETWEEN';
      }

      // @todo, 2018-03-13, convert dates from ISO8691 to Unix timestamp, until we can convince
      //                    the API team that human-readable dates are better
      const isDateFilter =
        this.props.dateFilters.findIndex(
          (dateFilter) => dateFilter.reportFilterId === Number(filterValue.id),
        ) > -1; // eslint-disable-line
      if (isDateFilter) {
        const isPresetFilter = [
          'yesterday',
          'last_seven_days',
          'this_month',
          'last_month',
          'this_year',
        ].includes(filterValue.v1);

        if (isPresetFilter) {
          filterValue.type = 'EXACT'; // eslint-disable-line
        } else {
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
    };

    this.refreshAllData(requestObject);

    this.setState({
      currentFilterValues: filtersWithType,
      page: 1,
    });
  }

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
      sortOrder: this.state.sortOrder,
      sortColumnKey: this.state.sortColumnKey,
    };
    this.props.reportActions.getReportData(this.props.reportId, requestObject);
  }

  saveFilter(filterName, activeFilters) {
    this.props.reportActions.saveNamedFilter(this.props.reportId, filterName, activeFilters)
      .then(() => {
        this.props.reportActions.getReportUserFilters(this.props.reportId);
      });
  }

  deleteFilter(filters, id) {
    this.props.reportActions.deleteReportUserFilter(this.props.reportId, id, filters)
      .then(() => {
        this.props.reportActions.getReportUserFilters(this.props.reportId);
      });
  }

  goToDetailView(row, detailViewStructure) {
    const reportId = this.props.reportId;
    const report = this.props.reportDefinition;

    this.props.history.push({
      pathname: `/report-view/${reportId}/details/${row.seq_key}`,
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
  }

  handleRowAction({ row, action }) {
    // find row values
    const compositeLinks = action.reportColumnLinks.map((link) => {
      const linkedColumn = this.props.reportDefinition.dataColumns.find((column) => {
        return column.reportColumnId === link.fromColumnId;
      });

      return Object.assign({}, link, {
        value: row[link.fromColumnKey],
        type: linkedColumn.displayType,
      });
    });

    const targetFilters = compositeLinks.map((link) => {
      const target = {
        id: link.toFilterId,
        v1: link.value,
        type: 'CONTAINS',
      };

      if (link.type === 'DATE') {
        const rawDate = moment(link.value);
        const start = rawDate.startOf('day').unix(); // set to 12:00 am that date
        const end = rawDate.endOf('day').unix(); // set to 23:59 pm that date

        target.v1 = start;
        target.v2 = end;
        target.type = 'BETWEEN';
      }

      return target;
    });

    const targetQueryString = makeReportQueryString({ filters: targetFilters });

    this.props.history.push({
      pathname: `/reports/${action.targetReportId}`,
      search: `?${targetQueryString}`,
    });
  }

  exportAction({ exportType, fileType, fileName }) {
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
            alert('An error occurred while exporting the report'); // eslint-disable-line no-alert
            this.setState({ exporting: false });
          });
      } else {
        apiGetReportExport(this.props.reportId, this.state.currentFilterValues, fileType)
          .then((response) => {
            this.setState({ exporting: false });
            filesaver.saveAs(response, `${fileName}.csv`);
          })
          .catch(() => {
            alert('An error occurred while exporting the report'); // eslint-disable-line no-alert
            this.setState({ exporting: false });
          });
      }

      this.setState({
        selectedFileType: null,
        selectedExportType: null,
      });
    }
  }

  saveCurrentlyVisibleColumns(columns) {
    this.props.reportActions.updateVisibleReportColumns(this.props.reportId, columns);
  }

  routeToPreviousPage() {
    this.props.history.push({
      pathname: '/reports',
    });
  }

  attachBindings() {
    this.getReportInfo = this.getReportInfo.bind(this);
    this.getNewData = this.getNewData.bind(this);
    this.setCurrencyList = this.setCurrencyList.bind(this);
    this.refreshAllData = this.refreshAllData.bind(this);
    this.applyFilters = this.applyFilters.bind(this);
    this.applySavedFilterSet = this.applySavedFilterSet.bind(this);
    this.saveFilter = this.saveFilter.bind(this);
    this.deleteFilter = this.deleteFilter.bind(this);
    this.goToDetailView = this.goToDetailView.bind(this);
    this.handleRowAction = this.handleRowAction.bind(this);
    this.exportAction = this.exportAction.bind(this);
    this.saveCurrentlyVisibleColumns = this.saveCurrentlyVisibleColumns.bind(this);
    this.routeToPreviousPage = this.routeToPreviousPage.bind(this);
  }

  render() {
    const translations = {
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
      hideGraph: counterpart('globalTranslate.common.hideGraph'),
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
      save: counterpart('globalTranslate.common.save'),
      saveFilterLabel: counterpart('globalTranslate.common.filterName'),
      saveFilterTitle: `${counterpart(
        'globalTranslate.common.save',
      )} ${counterpart('globalTranslate.common.filter')}`,
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
      showGraph: counterpart('globalTranslate.common.showGraph'),
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
      <div className="report-view">
        {!Boolean(this.props.reportDefinition.dataColumns.length) &&
          !Boolean(this.props.reportDefinition.name.length) && (
            <BallSyncLoader />
          )}
        {Boolean(this.props.reportDefinition.dataColumns.length) && (
          <GDReportRunner
            activeFilters={this.state.activeFilters}
            applyFilters={this.applyFilters}
            applySavedFilterSet={this.applySavedFilterSet}
            clearAllFilters={this.clearAllFilters}
            currencyList={this.setCurrencyList(this.props.preferences.language)}
            currentFilterValues={this.state.currentFilterValues}
            currentPage={this.state.page}
            data={this.props.data}
            deactivateFilter={this.deactivateFilter}
            deleteFilter={this.deleteFilter}
            exportAction={this.exportAction}
            exporting={this.state.exporting}
            extraClass="some-class"
            featureFlags={this.props.featureFlags}
            getNewData={this.getNewData}
            goToDetailView={this.goToDetailView}
            handleRowAction={this.handleRowAction}
            isReportUpdating={this.props.isReportUpdating}
            perPage={this.state.perPage}
            primaryDateFilter={this.state.primaryDateFilter}
            report={this.props.reportDefinition}
            routeToPreviousPage={this.routeToPreviousPage}
            saveCurrentlyVisibleColumns={this.saveCurrentlyVisibleColumns}
            savedFilters={this.props.savedFilters}
            saveFilter={this.saveFilter}
            sort={this.state.sort}
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

ReportView.propTypes = {
  data: PropTypes.array.isRequired,
  dateFilters: PropTypes.array.isRequired,
  featureFlags: PropTypes.object,
  history: PropTypes.object.isRequired,
  isReportUpdating: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired, // eslint-disable-line react/no-unused-prop-types
  multiselectFilters: PropTypes.array.isRequired,
  preferences: PropTypes.object.isRequired,
  reportActions: PropTypes.object.isRequired,
  reportDefinition: PropTypes.object.isRequired,
  reportId: PropTypes.number.isRequired,
  savedFilters: PropTypes.array,
  summaryData: PropTypes.array,
  totalRecords: PropTypes.number,
  vizList: PropTypes.array,
};

ReportView.defaultProps = {
  featureFlags: {},
  filters: [],
  savedFilters: [],
  summaryData: [],
  totalRecords: 0,
  vizList: [],
};

function mapStateToProps(state, ownProps) {
  const reportId = parseInt(ownProps.match.params.reportId, 10) || 0;
  const report = getReportById(reportId, state.reportsV2.data);
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
  const featureFlags = state.featureFlags;

  // @todo, 2018-03-13, find all filters of type DATE, so make it easy to
  //                    convert dates from ISO8691 to Unix timestamp, until we can convince
  //                    the API team that human-readable dates are better
  const dateFilters =
    reportDefinition.filters && reportDefinition.filters.length
      ? reportDefinition.filters.filter(
        (reportFilter) => reportFilter.filterType === 'DATE',
      )
      : [];

  // @todo, 2018-03-28, find all filters of type MULTISELECT, so make it easy to
  //                    convert limit those filters to a single value, until the API can
  //                    accept multiple v1 values
  const multiselectFilters =
    reportDefinition.filters && reportDefinition.filters.length
      ? reportDefinition.filters.filter(
        (reportFilter) => reportFilter.filterType === 'MULTISELECT',
      )
      : [];


  return {
    data,
    dateFilters, // @todo, remove when Unix time no longer needed
    featureFlags,
    isReportUpdating,
    multiselectFilters, // @todo, remove when multiselects can take more than one value
    preferences: selectCurrentPreferences(state.preferences),
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
  connect(mapStateToProps, mapDispatchToProps)(ReportView),
);
