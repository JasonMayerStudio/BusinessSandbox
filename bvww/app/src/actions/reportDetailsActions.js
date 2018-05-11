import * as types from './actionTypes';

import {
  apiGetReportRowData,
} from '../api/reportApi';

export function requestReportRowDetails() {
  return { type: types.REQUEST_REPORT_ROW_DETAILS };
}

export function receiveReportRowDetailsSuccess(details, rowId) {
  return {
    type: types.RECEIVE_REPORT_ROW_DETAILS_SUCCESS,
    details,
    rowId,
    receivedAt: Date.now(),
  };
}

export function receiveReportRowDetailsFailure(error) {
  return {
    type: types.RECEIVE_REPORT_ROW_DETAILS_FAILURE,
    error,
    receivedAt: Date.now(),
  };
}

export function fetchReportRowDetails(reportId, rowId) {
  return function dispatchGetReportRowDetails(dispatch) {
    dispatch(requestReportRowDetails());

    return apiGetReportRowData(reportId, rowId)
      .then((details) => {
        dispatch(receiveReportRowDetailsSuccess(details, rowId));
      })
      .catch((error) => {
        dispatch(receiveReportRowDetailsFailure(error));
      });
  };
}
