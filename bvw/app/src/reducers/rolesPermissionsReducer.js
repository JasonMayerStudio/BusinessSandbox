import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function rolesPermissionReducer(state = initialState.rolesPermissions, action) {
  switch (action.type) {
    case types.REQUEST_ROLES_PERMISSIONS:
      return Object.assign({}, state, {
        isFetching: true,
        error: null,
      });

    case types.RECEIVE_ROLES_PERMISSIONS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.rolesPermissions,
        lastUpdated: action.receivedAt,
      });

    case types.RECEIVE_ROLES_PERMISSIONS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error,
      });

    default:
      return state;
  }
}
