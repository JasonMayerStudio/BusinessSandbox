import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function preferenceReducer(state = initialState.subscriptions, action) {
  switch (action.type) {
    case types.REQUEST_USER_SUBSCRIPTIONS:
      return Object.assign({}, state, {
        isFetching: true,
        error: null,
      });

    case types.RECEIVE_USER_SUBSCRIPTIONS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.subscriptions,
        error: null,
      });

    case types.RECEIVE_USER_SUBSCRIPTIONS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error,
      });

    case types.REQUEST_SAVE_USER_SUBSCRIPTIONS:
      return Object.assign({}, state, {
        data: action.subscriptions,
        isFetching: true,
        error: null,
      });

    case types.RECEIVE_SAVE_USER_SUBSCRIPTIONS_SUCCESS:
      return Object.assign({}, state, {
        data: action.subscriptions,
        isFetching: false,
        error: null,
      });

    case types.RECEIVE_SAVE_USER_SUBSCRIPTIONS_FAILURE:
      return Object.assign({}, state, {
        data: action.subscriptions,
        isFetching: false,
        error: action.error,
      });

    default:
      return state;
  }
}
