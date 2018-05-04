import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function reportDetailsReducer(state = initialState.currentReportDetail, action) {
  switch (action.type) {
    case types.REQUEST_REPORT_ROW_DETAILS:
      return Object.assign({}, state, {
        isFetching: true,
        error: null,
      });

    case types.RECEIVE_REPORT_ROW_DETAILS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.details,
        rowId: action.rowId,
        lastUpdated: action.receivedAt,
        error: null,
      });

    case types.RECEIVE_REPORT_ROW_DETAILS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        lastUpdated: action.receivedAt,
        error: action.error,
      });

    default:
      return state;
  }
}
