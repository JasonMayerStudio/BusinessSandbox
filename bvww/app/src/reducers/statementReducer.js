import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function statementReducer(state = initialState.statements, action) {
  switch (action.type) {
    case types.REQUEST_STATEMENTS:
      return Object.assign({}, state, {
        isFetching: true,
        error: null,
      });

    case types.RECEIVE_STATEMENTS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.statements,
        lastUpdated: action.receivedAt,
        error: null,
      });

    case types.RECEIVE_STATEMENTS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.statements,
        error: action.error,
      });

    default:
      return state;
  }
}
