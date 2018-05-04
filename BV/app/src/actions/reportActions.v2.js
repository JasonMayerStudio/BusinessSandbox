import * as types from './actionTypes';

import {
  apiGetReports,
  apiGetOneReport,
  apiFetchReportPreview,
  apiGetReportData,
  apiGetReportSummary,
  apiDeleteReport,
  apiDeleteReportFilter,
  apiGetReportUserFilters,
  apiSaveReportUserFilters,
  apiGetReportVisualizations,
  apiSaveReportDefinition,
} from '../api/reportApi.v2';

export function requestDeleteReportUserFilters(reportId, filterId, filters) {
  return {
    type: types.REQUEST_DELETE_REPORT_USER_FILTERS_V2,
    reportId,
    filterId,
    filters,
  };
}

export function receiveDeleteReportUserFiltersSuccess(reportId, filterId, filters) {
  return {
    type: types.RECEIVE_DELETE_REPORT_USER_FILTERS_SUCCESS_V2,
    reportId,
    filterId,
    filters,
    receivedAt: Date.now(),
  };
}

export function deleteReportUserFilter(reportId, filterId, filters) {
  return function dispatchDeleteUserFilter(dispatch) {
    dispatch(requestDeleteReportUserFilters(reportId, filterId));

    return apiDeleteReportFilter(reportId, filterId)
      .then(() => {
        dispatch(receiveDeleteReportUserFiltersSuccess(reportId, filterId, filters));
      })
      .catch((error) => {
        console.log(error); // eslint-disable-line
      });
  };
}

export function requestReportUserFilters(reportId) {
  return {
    type: types.REQUEST_REPORT_USER_FILTERS_V2,
    reportId,
  };
}

export function receiveReportUserFiltersSuccess(reportId, reportUserFilters) {
  return {
    type: types.RECEIVE_REPORT_USER_FILTERS_SUCCESS_V2,
    reportId,
    reportUserFilters,
    receivedAt: Date.now(),
  };
}

export function getReportUserFilters(reportId) {
  return function dispatchGetUserFilters(dispatch) {
    dispatch(requestReportUserFilters(reportId));

    return apiGetReportUserFilters(reportId)
      .then(({ data, headers }) => {
        dispatch(receiveReportUserFiltersSuccess(reportId, data, headers));
      })
      .catch((error) => {
        console.log(error); // eslint-disable-line
      });
  };
}

export function requestSaveReportFilter() {
  return { type: types.REQUEST_SAVE_REPORT_FILTER_V2 };
}

export function saveReportFilterSuccess(reportId, response) {
  return {
    type: types.RECEIVE_SAVE_REPORT_FILTER_SUCCESS_V2,
    reportId,
    savedFilters: response.data,
    receivedAt: Date.now(),
  };
}

export function saveReportFilterFailure(reportId, error) {
  return {
    type: types.RECEIVE_SAVE_REPORT_FILTER_FAILURE_V2,
    reportId,
    error,
  };
}

export function saveNamedFilter(reportId, name, filtersToSend) {
  return function dispatchNamedFilter(dispatch) {
    dispatch(requestSaveReportFilter());

    const filterJson = JSON.stringify(filtersToSend);

    const filtersToSave = {
      name,
      filterJson,
    };

    return apiSaveReportUserFilters(reportId, filtersToSave)
      .then((response) => {
        dispatch(saveReportFilterSuccess(reportId, response));
      })
      .catch((error) => {
        console.log(error); // eslint-disable-line
        dispatch(saveReportFilterFailure(error));
      });
  };
}

export function requestReports() {
  return { type: types.REQUEST_REPORTS_V2 };
}

export function receiveReportsSuccess(reports, headers) {
  return {
    type: types.RECEIVE_REPORTS_SUCCESS_V2,
    reports,
    headers,
    receivedAt: Date.now(),
  };
}

export function getAllReports() {
  return function dispatchGetAllReports(dispatch) {
    dispatch(requestReports());

    return apiGetReports()
      .then(({ data, headers }) => {
        dispatch(receiveReportsSuccess(data, headers));
      });
  };
}

export function requestOneReport(reportId) {
  return {
    type: types.REQUEST_ONE_REPORT_V2,
    reportId,
  };
}

export function receiveOneReportSuccess(reportDefinition, headers, reportId) {
  return {
    type: types.RECEIVE_ONE_REPORT_SUCCESS_V2,
    reportDefinition,
    headers,
    reportId,
    receivedAt: Date.now(),
  };
}

export function getSingleReportData(reportKey) {
  return function dispatchGetSingleReportData(dispatch) {
    dispatch(requestOneReport());

    apiGetReports()
      .then(({ data, headers }) => {
        dispatch(receiveReportsSuccess(data, headers));

        const reportId = data.find((report) => {
          return report.key === reportKey;
        },
        ).reportId;

        apiGetOneReport(reportId)
          .then((result) => {
            dispatch(receiveOneReportSuccess(result.data, result.headers, reportId));
          })
          .catch((error) => {
            console.log('error get key matched report in getSingleReportData', error); // eslint-disable-line no-console
          });
      })
      .catch((error) => {
        console.log('error get all reports in getSingleReportData', error); // eslint-disable-line no-console
      });
  };
}

export function getOneReport(reportId) {
  return function dispatchGetOneReport(dispatch) {
    dispatch(requestOneReport());

    return apiGetOneReport(reportId)
      .then(({ data, headers }) => {
        dispatch(receiveOneReportSuccess(data, headers));

        const reportId = data.reportId || data.id;
        const parsedReport = {
          longerDefinition: data,
          reportId,
        };

        return parsedReport;
      })
      .catch((error) => {
        console.log(error); // eslint-disable-line no-console
      });
  };
}

export function requestReportData(reportId) {
  return {
    type: types.REQUEST_REPORT_DATA_V2,
    reportId,
  };
}

export function receiveReportDataSuccess(reportId, reportData, headers) {
  return {
    type: types.RECEIVE_REPORT_DATA_SUCCESS_V2,
    reportId,
    reportData,
    headers,
    receivedAt: Date.now(),
  };
}

/**
 * manages the call to the API client for getting report data rows
 * @param  {number} reportId       the database ID of the report
 * @param  {object} requestObject  parameters to pass to the API
 *                                   limit: max number of records to return
 *                                   page: window into the total records
 *                                   filterString: JSON string of all filters
 *                                   sortOrder: sort order
 *                                   sortColumnKey: column to sort by
 * @return {Promise}               the promise returned by our API client, passed to redux-thunk
 */
export function getReportData(reportId, requestObject) {
  return function dispatchGetReportData(dispatch) {
    dispatch(requestReportData());

    return apiGetReportData(reportId, requestObject)
      .then(({ data, headers }) => {
        dispatch(receiveReportDataSuccess(reportId, data, headers));
      })
      .catch((error) => {
        console.log(error); // eslint-disable-line no-console
      });
  };
}

export function requestReportSummary(reportId) {
  return {
    type: types.REQUEST_REPORT_SUMMARY_V2,
    reportId,
  };
}

export function receiveReportSummarySuccess(reportId, summaryData, headers) {
  return {
    type: types.RECEIVE_REPORT_SUMMARY_SUCCESS_V2,
    reportId,
    summaryData,
    headers,
    receivedAt: Date.now(),
  };
}

export function getReportSummary(reportId, requestObject) {
  return function dispatchGetReportSummary(dispatch) {
    dispatch(requestReportSummary());
    return apiGetReportSummary(reportId, requestObject)
      .then(({ data, headers }) => {
        dispatch(receiveReportSummarySuccess(reportId, data, headers));
      })
      .catch((error) => {
        console.log(error); // eslint-disable-line no-console
      });
  };
}

export function requestReportVisualizations(reportId) {
  return {
    type: types.REQUEST_REPORT_VISUALIZATIONS_V2,
    reportId,
  };
}

export function receiveReportVisualizationsSuccess(reportId, vizList, headers) {
  return {
    type: types.RECEIVE_REPORT_VISUALIZATIONS_SUCCESS_V2,
    reportId,
    vizList,
    headers,
    receivedAt: Date.now(),
  };
}

export function getReportVisualizations(reportId, requestObject) {
  return function dispatchGetReportVisualizations(dispatch) {
    dispatch(requestReportVisualizations());

    return apiGetReportVisualizations(reportId, requestObject)
      .then(({ data, headers }) => {
        dispatch(receiveReportVisualizationsSuccess(reportId, data, headers));
      })
      .catch((error) => {
        console.log(error); // eslint-disable-line no-console
      });
  };
}

export function requestSaveReport() {
  return { type: types.REQUEST_SAVE_REPORT_V2 };
}

export function receiveSaveReportSuccess(report) {
  return {
    type: types.RECEIVE_SAVE_REPORT_V2_SUCCESS,
    report,
    receivedAt: Date.now(),
  };
}

export function saveReport(report) {
  return function dispatchSaveReport(dispatch) {
    dispatch(requestSaveReport());

    return apiSaveReportDefinition(report)
      .then(({ data, headers }) => {
        dispatch(receiveOneReportSuccess(data, headers));
        const reportId = data.reportId || data.id;
        const parsedReport = {
          longerDefinition: data,
          reportId,
        };

        return parsedReport;
      })
      .catch((error) => {
        const errorObj = error || new Error('An unknown error has occurred.');
        console.log(error); // eslint-disable-line no-console
        throw errorObj;
      });
  };
}

export function deleteReport(reportId) {
  return function dispatchDeleteReport(dispatch) {
    return apiDeleteReport(reportId)
      .then(({ data, headers }) => {
        return true;
      })
      .catch((error) => {
        const errorObj = error || new Error('An unknown error has occurred.');
        console.log(error); // eslint-disable-line no-console
        throw errorObj;
      });
  };
}

export function fetchReportPreview(report) {
  return function dispatchFetchReportPreview(dispatch) {
    return apiFetchReportPreview(report)
      .then(({ data, headers }) => {
        return data;
      })
      .catch((error) => {
        const errorObj = error || new Error('An unknown error has occurred.');
        console.log(error); // eslint-disable-line no-console
        throw errorObj;
      });
  };
}

export function clearReportData() {
  return {
    type: types.CLEAR_REPORT_DATA,
  };
}
