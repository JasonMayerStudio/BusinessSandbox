import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function preferenceReducer(state = initialState.preferences, action) {
  switch (action.type) {
    case types.REQUEST_USER_PREFERENCES:
      return Object.assign({}, state, {
        isFetching: true,
        error: null,
      });

    case types.RECEIVE_USER_PREFERENCES_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.preferences,
        error: null,
      });

    case types.RECEIVE_USER_PREFERENCES_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error,
      });

    case types.REQUEST_SAVE_USER_PREFERENCES:
      return Object.assign({}, state, {
        isFetching: true,
        error: null,
      });

    case types.RECEIVE_SAVE_USER_PREFERENCES_SUCCESS:
      return Object.assign({}, state, {
        data: action.preferences,
        isFetching: false,
        error: null,
      });

    case types.RECEIVE_SAVE_USER_PREFERENCES_FAILURE:
      return Object.assign({}, state, {
        data: action.preferences,
        isFetching: false,
        error: action.error,
      });

    default:
      return state;
  }
}
