import * as types from './actionTypes';

import { getRolesWithPermissions } from '../api/rolesPermissionsApi';

export function requestRolesPermissions() {
  return { type: types.REQUEST_ROLES_PERMISSIONS };
}

export function receiveRolesPermissionsSuccess(rolesPermissions) {
  return {
    type: types.RECEIVE_ROLES_PERMISSIONS_SUCCESS,
    rolesPermissions,
    receivedAt: Date.now(),
  };
}

export function receiveRolesPermissionsFailure(error) {
  return {
    type: types.RECEIVE_ROLES_PERMISSIONS_FAILURE,
    error,
  };
}

export function getAllRolesPermissions() {
  return function dispatchGetRolesPermissions(dispatch) {
    dispatch(requestRolesPermissions());

    return getRolesWithPermissions()
      .then((response) => {
        return response;
      })
      .then((json) => {
        dispatch(receiveRolesPermissionsSuccess(json));
      });
  };
}
