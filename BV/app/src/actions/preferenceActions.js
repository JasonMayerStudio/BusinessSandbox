import * as types from './actionTypes';

import {
  getPreferences,
  savePreferences,
} from '../api/preferenceApi';

export function requestUserPreferences() {
  return { type: types.REQUEST_USER_PREFERENCES };
}

export function receiveUserPreferencesSuccess(preferences) {
  return { type: types.RECEIVE_USER_PREFERENCES_SUCCESS, preferences };
}

export function receiveUserPreferencesFailure(error) {
  return { type: types.RECEIVE_USER_PREFERENCES_FAILURE, error };
}

export function getUserPreferences(userId) {
  return function dispatchGetUserPreferences(dispatch) {
    dispatch(requestUserPreferences());

    return getPreferences(userId)
      .then((preferences) => {
        dispatch(receiveUserPreferencesSuccess(preferences));
      })
      .catch((error) => {
        dispatch(receiveUserPreferencesFailure(error));
      });
  };
}

export function requestSaveUserPreferences() {
  return { type: types.REQUEST_SAVE_USER_PREFERENCES };
}

export function receiveSavedUserPreferencesSuccess(preferences) {
  return { type: types.RECEIVE_SAVE_USER_PREFERENCES_SUCCESS, preferences };
}

export function receiveSavedUserPreferencesFailure(error) {
  return { type: types.RECEIVE_SAVE_USER_PREFERENCES_FAILURE, error };
}

export function saveUserPreferences(preferences, userId) {
  return function dispatchSaveUserPreferences(dispatch) {
    dispatch(requestSaveUserPreferences());

    return savePreferences(preferences, userId)
      .then(() => {
        dispatch(receiveSavedUserPreferencesSuccess(preferences));
      })
      .catch((error) => {
        dispatch(receiveSavedUserPreferencesFailure(error));
      });
  };
}
