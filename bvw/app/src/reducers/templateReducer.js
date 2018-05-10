import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function templateReducer(state = initialState.templates, action) {
  switch (action.type) {
    case types.REQUEST_TEMPLATES:
      return Object.assign({}, state, {
        isFetching: true,
        error: null,
      });

    case types.RECEIVE_TEMPLATES_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.templates,
        lastUpdated: action.receivedAt,
        error: null,
      });

    case types.RECEIVE_TEMPLATES_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error,
      });

    case types.REQUEST_ONE_TEMPLATE:
      return Object.assign({}, state, {
        isFetching: true,
        error: null,
      });

    case types.RECEIVE_ONE_TEMPLATE_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: [
          ...state.data.filter((template) => template.id !== action.template.id),
          Object.assign({}, action.template),
        ],
        lastUpdated: action.receivedAt,
        error: null,
      });

    case types.RECEIVE_ONE_TEMPLATE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error,
      });

    default:
      return state;
  }
}
