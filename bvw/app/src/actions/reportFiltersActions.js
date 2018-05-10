import * as types from './actionTypes';

import {
  apiGetReportUserFilters,
  apiSaveReportUserFilters,
} from '../api/reportApi';

export function setCurrentReportFilter(reportId, filters) {
  return {
    type: types.SET_CURRENT_REPORT_FILTER,
    reportId,
    filters,
    receivedAt: Date.now(),
  };
}

export function clearCurrentReportFilter(reportId) {
  return {
    type: types.CLEAR_CURRENT_REPORT_FILTER,
    reportId,
    receivedAt: Date.now(),
  };
}

export function requestReportUserFilters(reportId) {
  return {
    type: types.REQUEST_REPORT_USER_FILTERS,
    reportId,
  };
}

export function receiveReportUserFiltersSuccess(reportId, reportUserFilters) {
  return {
    type: types.RECEIVE_REPORT_USER_FILTERS_SUCCESS,
    reportId,
    reportUserFilters,
    receivedAt: Date.now(),
  };
}

export function getReportUserFilters(reportId) {
  return function dispatchGetUserFilters(dispatch) {
    dispatch(requestReportUserFilters(reportId));

    return apiGetReportUserFilters(reportId)
      .then((json) => {
        dispatch(receiveReportUserFiltersSuccess(reportId, json));
      })
      .catch((error) => {
        console.log(error); // eslint-disable-line no-console
      });
  };
}

export function requestSaveReportFilter() {
  return { type: types.REQUEST_SAVE_REPORT_FILTER };
}

export function saveReportFilterSuccess(reportId, savedFilter) {
  return {
    type: types.RECEIVE_SAVE_REPORT_FILTER_SUCCESS,
    reportId,
    savedFilter,
    receivedAt: Date.now(),
  };
}

export function saveReportFilterFailure(reportId, error) {
  return {
    type: types.RECEIVE_SAVE_REPORT_FILTER_FAILURE,
    reportId,
    error,
    receivedAt: Date.now(),
  };
}

export function saveNamedFilter(reportId, name, filtersToSend) {
  return function dispatchNamedFilter(dispatch) {
    dispatch(requestSaveReportFilter());

    const filterJson = JSON.stringify(filtersToSend);
    const filtersToSave = {
      id: 0,
      name,
      filterJson,
    };

    return apiSaveReportUserFilters(reportId, filtersToSave)
      .then((response) => {
        dispatch(saveReportFilterSuccess(reportId, response));
      })
      .catch((error) => {
        dispatch(saveReportFilterFailure(error));
      });
  };
}

export default {
  setCurrentReportFilter,
  clearCurrentReportFilter,
  requestReportUserFilters,
  receiveReportUserFiltersSuccess,
  saveReportFilterSuccess,
  saveReportFilterFailure,
};
