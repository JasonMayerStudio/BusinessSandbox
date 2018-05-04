import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function reportReducer(state = initialState.currentReport, action) {
  switch (action.type) {
    case types.REQUEST_REPORT_DATA:
      return Object.assign({}, state, {
        reportId: action.reportId,
        data: {},
        isFetching: true,
        error: null,
      });

    case types.RECEIVE_REPORT_DATA_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.reportData,
        lastUpdated: action.receivedAt,
        error: null,
      });

    case types.REQUEST_REPORT_VISUALIZATIONS:
      return Object.assign({}, state, {
        visualizations: [],
      });

    case types.RECEIVE_REPORT_VISUALIZATIONS_SUCCESS:
      return Object.assign({}, state, {
        visualizations: action.reportVisualizations,
      });

    default:
      return state;
  }
}
