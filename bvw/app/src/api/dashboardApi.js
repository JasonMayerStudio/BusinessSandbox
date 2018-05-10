import axios from 'axios';
import getReportsApiV2BaseUrl from './reportsApi.v2.baseUrl';
import {
  configureHttpHeaders,
  filterRequestPayloadObject,
} from './apiHelpers';

const baseUrl = getReportsApiV2BaseUrl();

export function getDashboardVisualizations(dashboardRequestObject) {
  configureHttpHeaders(axios);

  const allowedKeys = [
    'filters',
  ];
  const filteredFilters = filterRequestPayloadObject(dashboardRequestObject, allowedKeys);

  return get('dashboards/primary_dashboard', filteredFilters);
}

function get(url, body) {
  return axios.get(`${baseUrl}${url}`, body)
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
  getDashboardVisualizations,
};
