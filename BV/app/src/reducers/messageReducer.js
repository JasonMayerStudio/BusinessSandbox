import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function messageReducer(state = initialState.messages, action) {
  switch (action.type) {
    case types.REQUEST_MESSAGES:
      return Object.assign({}, state, {
        isFetching: true,
        error: null,
      });

    case types.RECEIVE_MESSAGES_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.messages,
        lastUpdated: action.receivedAt,
        error: null,
      });

    case types.RECEIVE_MESSAGES_FAILURE:
      return Object.assign({}, state, {
        data: action.messages,
        isFetching: false,
        error: action.error,
      });

    case types.REQUEST_MESSAGE_COUNT:
      return Object.assign({}, state, {
        isFetching: true,
        error: null,
      });

    case types.RECEIVE_MESSAGE_COUNT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        count: action.count,
        lastUpdated: action.receivedAt,
        error: null,
      });

    case types.RECEIVE_MESSAGE_COUNT_FAILURE:
      return Object.assign({}, state, {
        count: action.count,
        isFetching: false,
        error: action.error,
      });

    case types.REQUEST_MESSAGES_UPDATE_STATUS:
      return Object.assign({}, state, {
        isFetching: true,
        error: null,
      });

    case types.RECEIVE_MESSAGES_UPDATE_STATUS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        error: null,
      });

    case types.RECEIVE_MESSAGES_UPDATE_STATUS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error,
      });

    case types.RECEIVE_MESSAGES_UPDATE_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.messages,
        error: null,
      });


    default:
      return state;
  }
}
