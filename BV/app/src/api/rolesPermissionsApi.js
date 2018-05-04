import axios from 'axios';
import getBaseUrl from './baseUrl';
import { configureHttpHeaders, isLanguageSupported } from './apiHelpers';

const baseUrl = getBaseUrl();

export function getRolesWithPermissions(lang = 'en-US') {
  configureHttpHeaders(axios);

  if (isLanguageSupported(lang)) {
    const paramsArray = [lang];

    return get('roles/language/', paramsArray);
  } else {
    throw new Error('Tried to get roles and permissions for unsupported language');
  }
}

function get(url, params) {
  let urlParams = '';

  if (params && params.length) {
    urlParams += params.join('/');
  }

  const completeUrl = `${baseUrl}${url}${urlParams}`;

  return axios.get(completeUrl)
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
  getRolesWithPermissions,
};
