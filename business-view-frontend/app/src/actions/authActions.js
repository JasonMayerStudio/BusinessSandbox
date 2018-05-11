import { UserManager } from 'oidc-client';

import * as types from './actionTypes';
import { getPreferences } from '../api/preferenceApi';

import { saveState } from '../store/browserStorage';
import initialState from '../reducers/initialState';
import { clearGlobalFilter } from './globalFilterActions';
import { logoutFromCache } from '../api/authApi';

export function setAuthToken(webToken) {
  return { type: types.SET_AUTH_TOKEN, webToken };
}

export function requestLogin() {
  return { type: types.REQUEST_AUTH_LOGIN };
}

export function loginSuccess(session) {
  return { type: types.AUTH_LOGIN_SUCCESS, session };
}

export function loginFailure(error) {
  return { type: types.AUTH_LOGIN_FAILURE, error };
}

export function requestNewAuthPreferences() {
  return { type: types.REQUEST_NEW_AUTH_PREFERENCES };
}

// @TODO Whenever we are able to have one source of truth for the authenticated user's name, we can write some worthwhile unit tests to check update of the name - right now we have to update the entire preferences object and inject it into the auth user, only then will it update 🙃
export function receiveNewAuthPreferencesSuccess(session) {
  return { type: types.RECEIVE_NEW_AUTH_PREFERENCES_SUCCESS, session };
}

export function receiveNewAuthPreferencesFailure(error) {
  return { type: types.RECEIVE_NEW_AUTH_PREFERENCES_FAILURE, error };
}

export function reseedAuthPreferences(userId) {
  return function dispatchReseedPreferences(dispatch) {
    dispatch(requestNewAuthPreferences());

    return getPreferences(userId)
      .then((response) => {
        const session = {
          user: {
            preferences: response,
          },
        };

        dispatch(receiveNewAuthPreferencesSuccess(session));
      })
      .catch((error) => {
        dispatch(receiveNewAuthPreferencesFailure(error));
      });
  };
}

export function logoutFromState() {
  return { type: types.AUTH_LOGOUT };
}

export function logout() {
  return function dispatchLogout(dispatch) {
    logoutFromCache();
    saveState({
      auth: initialState.auth,
      globalFilter: initialState.globalFilter,
    });
    dispatch(clearGlobalFilter());
    dispatch(logoutFromState());

    const port = (window.location.port) ? `:${window.location.port}` : '';
    const redirectUri = `${window.location.protocol}//${window.location.hostname}${port}/login`;
    const settings = {
      authority: __authority__,
      client_id: __client_id__,
      post_logout_redirect_uri: redirectUri,
      response_type: 'id_token', // Can be 'code' or 'id_token' (id_token=JWT)
      scope: 'openid',
      extraQueryParams: {
        response_mode: 'query', // custom Microsoft B2C setting, b/c Global switched their AD to return a fragment by default
      },
    };

    const userManager = new UserManager(settings);
    userManager.signoutRedirect();
  };
}
