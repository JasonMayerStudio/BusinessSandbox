import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function currentReportFiltersReducer(state = initialState.currentReportFilters, action) {
  switch (action.type) {
    case types.SET_CURRENT_REPORT_FILTER:
      return [
        ...state.filter((filter) => filter.reportId !== action.reportId),
        Object.assign({}, {
          reportId: action.reportId,
          filters: action.filters,
          lastUpdated: action.receivedAt,
        }),
      ];
    case types.CLEAR_CURRENT_REPORT_FILTER:
      return [...state.filter((filter) => filter.reportId !== action.reportId)];
    default:
      return state;
  }
}
