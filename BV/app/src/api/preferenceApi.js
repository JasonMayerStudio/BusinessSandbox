import axios from 'axios';
import getBaseUrl from './baseUrl';
import {
  configureHttpHeaders,
  filterRequestPayloadObject,
} from './apiHelpers';

const baseUrl = getBaseUrl();

export function getPreferences(userId) {
  configureHttpHeaders(axios);

  return get(`profile/preferences/${userId}`);
}

export function savePreferences(prefs, userId) {
  configureHttpHeaders(axios);

  const allowedKeys = [
    'dateFormat',
    'firstName',
    'language',
    'lastName',
    'timeFormat',
  ];
  const filteredPrefs = filterRequestPayloadObject(prefs, allowedKeys);

  return put(`profile/preferences/${userId}`, filteredPrefs);
}

function put(url, prefs) {
  return axios.put(`${baseUrl}${url}`, prefs)
    .then(onSuccess)
    .catch(onError);
}

function get(url) {
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
  getPreferences,
  savePreferences,
};
