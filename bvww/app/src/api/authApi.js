import axios from 'axios';

import { getParsedPermissions } from 'Utils/permissionsUtils';
import getAuthBaseUrl from './authBaseUrl';
import { configureHttpHeaders } from './apiHelpers';

const baseUrl = getAuthBaseUrl();

/**
 * checks with the API that a JWT is actually still valid
 * @param  {string} webToken  a JSON web token
 * @return {Promise}          an Axios request
 */
export function authTokenValidate(webToken) {
  axios.defaults.headers.common['Authorization'] = webToken; // eslint-disable-line no-param-reassign, dot-notation

  return get('auth/token/validate');
}

export function getAuthenticatedUser(webToken) {
  axios.defaults.headers.common['Authorization'] = webToken; // eslint-disable-line no-param-reassign, dot-notation
  return get('auth')
    .then((response) => {
      response.parsedPermissions = getParsedPermissions(response.role.permissions);
      return response;
    });
}

export function logoutFromCache() {
  configureHttpHeaders(axios);

  return get('auth/logout');
}

function get(url) {
  /* eslint-enable dot-notation */
  return axios.get(`${baseUrl}${url}`)
    .then(onSuccess)
    .catch(onError);
}

function onSuccess(response) {
  let result;
  if (response.status !== 204) {
    result = response.data;
  } else {
    result = 'Success';
  }
  return result;
}

function onError(error) {
  const returnedError = error && error.response && error.response.data;
  throw returnedError;
}

export default {
  authTokenValidate,
  getAuthenticatedUser,
  logoutFromCache,
};
