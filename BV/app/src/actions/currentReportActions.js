/**
 * @todo (2017-Sept-12) remove this import once the report API is stable
 *   - see catch() block below for more to remove
 */
import { getMockReportData } from 'Helpers/testHelpers/testMocks.js';

import * as types from './actionTypes';

import {
  apiGetReportData,
  apiGetReportVisualizations,
} from '../api/reportApi';

export function requestReportData(reportId) {
  return {
    type: types.REQUEST_REPORT_DATA,
    reportId,
  };
}

export function receiveReportDataSuccess(reportData) {
  return {
    type: types.RECEIVE_REPORT_DATA_SUCCESS,
    reportData,
    receivedAt: Date.now(),
  };
}

export function getReportData(reportRequestObject) {
  return function dispatchGetMerchants(dispatch) {
    dispatch(requestReportData(reportRequestObject.id));

    return apiGetReportData(reportRequestObject)
      .then((json) => {
        dispatch(receiveReportDataSuccess(json));
      })
      /**
       * @todo (2017-Sept-12) rework this error handling block once the report API is stable
       *   - see import at top of this file for more to remove
       */
      .catch((error) => {
        console.log(error); // eslint-disable-line no-console
        const mockReportData = getMockReportData();  // remove
        dispatch(receiveReportDataSuccess(mockReportData));  // change to real error handling
      });
  };
}

export function requestReportVisualizations(reportId) {
  return {
    type: types.REQUEST_REPORT_VISUALIZATIONS,
    reportId,
  };
}

export function receiveReportVisualizationsSuccess(reportVisualizations) {
  return {
    type: types.RECEIVE_REPORT_VISUALIZATIONS_SUCCESS,
    reportVisualizations,
  };
}

export function getReportVisualizations(reportRequestObject) {
  return function dispatchGetMerchants(dispatch) {
    dispatch(requestReportVisualizations(reportRequestObject.id));

    return apiGetReportVisualizations(reportRequestObject)
      .then((json) => {
        dispatch(receiveReportVisualizationsSuccess(json));
      })
      /**
       * @todo (2017-Sept-12) rework this error handling block once the report API is stable
       *   - see import at top of this file for more to remove
       */
      .catch((error) => {
        console.log(error); // eslint-disable-line no-console
      });
  };
}
