import * as types from './actionTypes';

import {
  getUsers,
  getUserMerchants,
  getUserById,
  saveUser,
  getUserDataAccessById,
} from '../api/userApi';

export function requestUsers() {
  return { type: types.REQUEST_USERS };
}

export function receiveUsersSuccess(users) {
  return {
    type: types.RECEIVE_USERS_SUCCESS,
    users,
    receivedAt: Date.now(),
  };
}

export function receiveUsersFailure(error) {
  return {
    type: types.RECEIVE_USERS_FAILURE,
    error,
  };
}

export function getAllUsers() {
  return function dispatchGetUsers(dispatch) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.
    dispatch(requestUsers());

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.
    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.
    return getUsers()
      .then((response) => {
        return response;
      })
      .then((json) => {
        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.
        dispatch(receiveUsersSuccess(json));
      });
  };
}

export function requestUserById() {
  return { type: types.REQUEST_USER_BY_ID };
}

export function receiveUserByIdSuccess(user) {
  return {
    type: types.RECEIVE_USER_BY_ID_SUCCESS,
    user,
    receivedAt: Date.now(),
  };
}

export function receiveUserByIdFailure(error) {
  return {
    type: types.RECEIVE_USER_BY_ID_FAILURE,
    error,
  };
}

export function fetchUserById(userId) {
  return function dispatchGetUserById(dispatch) {
    dispatch(requestUserById());

    return getUserById(userId)
      .then((user) => {
        dispatch(receiveUserByIdSuccess(user));
      })
      .catch((error) => {
        dispatch(receiveUserByIdFailure(error));
      });
  };
}

export function requestSaveUser() {
  return { type: types.REQUEST_SAVE_USER };
}

export function receiveSaveUserSuccess(user) {
  return {
    type: types.RECEIVE_SAVE_USER_SUCCESS,
    user,
    receivedAt: Date.now(),
  };
}

export function receiveSaveUserFailure(error) {
  return {
    type: types.RECEIVE_SAVE_USER_FAILURE,
    error,
  };
}

export function updateUser(user) {
  return function dispatchSaveUser(dispatch) {
    dispatch(requestSaveUser());

    return saveUser(user)
      .then(() => {
        dispatch(receiveSaveUserSuccess(user));
        dispatch(fetchUserDataAccessById(user.userId));
      })
      .catch((error) => {
        dispatch(receiveSaveUserFailure(error));
      });
  };
}

export function requestUserDataAccess() {
  return { type: types.REQUEST_USER_DATA_ACCESS };
}

export function receiveUserDataAccessSuccess(dataAccess, userId) {
  return {
    type: types.RECEIVE_USER_DATA_ACCESS_SUCCESS,
    userId,
    dataAccess,
    receivedAt: Date.now(),
  };
}

export function receiveUserDataAccessFailure(error) {
  return {
    type: types.RECEIVE_USER_DATA_ACCESS_FAILURE,
    error,
  };
}

export function fetchUserDataAccessById(userId) {
  return function dispatchGetUserDataAccessById(dispatch) {
    dispatch(requestUserDataAccess());

    return getUserDataAccessById(userId)
      .then((dataAccess) => {
        dispatch(receiveUserDataAccessSuccess(dataAccess, userId));
      })
      .catch((error) => {
        dispatch(receiveUserDataAccessFailure(error));
      });
  };
}

export function requestUserMerchants() {
  return { type: types.REQUEST_USER_MERCHANTS };
}

export function receiveUserMerchantsSuccess(merchants, userId) {
  return {
    type: types.RECEIVE_USER_MERCHANTS_SUCCESS,
    userId,
    merchants,
    receivedAt: Date.now(),
  };
}

export function receiveUserMerchantsFailure(error) {
  return {
    type: types.RECEIVE_USER_MERCHANTS_FAILURE,
    error,
  };
}

export function fetchUserMerchantsById(user) {
  return function dispatchGetUserById(dispatch) {
    dispatch(requestUserMerchants());

    return getUserMerchants(user)
      .then((merchants) => {
        dispatch(receiveUserMerchantsSuccess(merchants, user));
      })
      .catch((error) => {
        dispatch(receiveUserMerchantsFailure(error));
      });
  };
}
