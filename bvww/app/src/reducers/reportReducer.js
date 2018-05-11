import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function reportReducer(state = initialState.reports, action) {
  switch (action.type) {
    case types.REQUEST_REPORTS:
      return Object.assign({}, state, {
        isFetching: true,
        error: null,
      });

    case types.RECEIVE_REPORTS_SUCCESS: {
      const newReportData = action.reports.map((report) => {
        const matchingReport = state.data.find((existingReport) => {
          return existingReport.id === report.id;
        });

        const newReport = (matchingReport)
          ? Object.assign({}, matchingReport, report)
          : report;

        return newReport;
      });
      return Object.assign({}, state, {
        isFetching: false,
        data: newReportData,
        lastUpdated: action.receivedAt,
        error: null,
      });
    }

    case types.REQUEST_REPORT_METADATA:
      return Object.assign({}, state, {
        isFetching: true,
        error: null,
      });

    case types.RECEIVE_REPORT_METADATA_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: [
          ...state.data.filter((report) => report.id !== action.reportMetadata.id),
          Object.assign({}, action.reportMetadata),
        ],
        lastUpdated: action.receivedAt,
        error: null,
      });

    default:
      return state;
  }
}
