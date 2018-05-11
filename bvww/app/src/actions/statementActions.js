import * as types from './actionTypes';
import { getStatements } from '../api/statementApi';

export function requestStatements() {
  return { type: types.REQUEST_STATEMENTS };
}

export function receiveStatementsSuccess(statements) {
  return {
    type: types.RECEIVE_STATEMENTS_SUCCESS,
    statements,
  };
}

export function receiveStatementsFailure(error) {
  return {
    type: types.RECEIVE_STATEMENTS_FAILURE,
    error,
  };
}

export function fetchStatements() {
  return function dispatchGetStatements(dispatch) {
    dispatch(requestStatements());

    return getStatements()
      .then((statements) => {
        dispatch(receiveStatementsSuccess(statements));
      })
      .catch((error) => {
        dispatch(receiveStatementsFailure(error));
      });
  };
}
