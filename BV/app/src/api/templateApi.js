import axios from 'axios';
import getReportsApiV2BaseUrl from './reportsApi.v2.baseUrl';
import {
  configureHttpHeaders,
} from './apiHelpers';

/**
 * baseUrl - templates are served through the reports microservice
 * @type {string}
 */
const baseUrl = getReportsApiV2BaseUrl();

export function getTemplates() {
  configureHttpHeaders(axios);

  return get('templates');
}

export function getOneTemplate(templateId) {
  configureHttpHeaders(axios);

  return get(`templates/${templateId}`);
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
  console.log(error); // eslint-disable-line no-console
  const returnedError = error && error.response && error.response.data;
  throw returnedError;
}

export default {
  getTemplates,
};
