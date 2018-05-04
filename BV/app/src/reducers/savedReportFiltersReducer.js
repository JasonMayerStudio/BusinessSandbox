/* eslint-disable no-case-declarations */

import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function currentReportFiltersReducer(state = initialState.savedReportFilters, action) {
  switch (action.type) {
    case types.REQUEST_REPORT_USER_FILTERS:
      return Object.assign({}, state, {
        [action.reportId]: {
          reportId: action.reportId,
          data: [],
          isFetching: true,
          lastUpdated: null,
        },
      });

    case types.RECEIVE_REPORT_USER_FILTERS_SUCCESS:
      return Object.assign({}, state, {
        [action.reportId]: {
          reportId: action.reportId,
          data: action.reportUserFilters,
          isFetching: false,
          lastUpdated: action.receivedAt,
        },
      });

    case types.RECEIVE_SAVE_REPORT_FILTER_SUCCESS:
      const existingNamedFilters = (state[action.reportId] &&
                                    state[action.reportId].data)
                                   || [];
      return Object.assign({}, state, {
        [action.reportId]: {
          reportId: action.reportId,
          data: [...existingNamedFilters, action.savedFilter],
          isFetching: false,
          lastUpdated: action.receivedAt,
        },
      });

    default:
      return state;
  }
}

/* eslint-enable no-case-declarations */
