import axios from 'axios';
import getReportsBaseUrl from './reportsBaseUrl';
import {
  configureHttpHeaders,
  filterRequestPayloadObject,
} from './apiHelpers';

const baseUrl = getReportsBaseUrl();

export function apiGetReports() {
  configureHttpHeaders(axios);

  return get('reports');
}

export function apiGetReportMetadata(reportId) {
  configureHttpHeaders(axios);

  return get(`reports/${reportId}/metadata`);
}

export function apiGetReportUserFilters(reportId) {
  configureHttpHeaders(axios);

  return get(`reports/${reportId}/user-filters`);
}

export function apiSaveReportUserFilters(reportId, savedFilterObject) {
  configureHttpHeaders(axios);

  const allowedKeys = [
    'filterJson',
    'id',
    'name',
  ];
  const filteredSavedFilterObject = filterRequestPayloadObject(savedFilterObject, allowedKeys);

  return post(`reports/${reportId}/user-filters`, filteredSavedFilterObject);
}

export function apiGetReportData(reportRequestObject) {
  configureHttpHeaders(axios);
  const sanitizedReportRequestObject = (!(Object.keys(reportRequestObject)).includes('filters'))
    ? Object.assign({}, reportRequestObject, { filters: [] })
    : reportRequestObject;

  const allowedKeys = [
    'filters',
    'report',
  ];
  const filteredPayload = filterRequestPayloadObject(sanitizedReportRequestObject, allowedKeys);

  return post(`reports/${reportRequestObject.report.id}`, filteredPayload);
}

export function apiGetReportDataWithoutFilter(reportRequestObject) {
  configureHttpHeaders(axios);
  const sanitizedReportRequestObject = Object.assign({}, reportRequestObject, { filters: [] });
  const allowedKeys = [
    'filters',
    'report',
  ];
  const filteredPayload = filterRequestPayloadObject(sanitizedReportRequestObject, allowedKeys);
  return post(`reports/${reportRequestObject.report.id}`, filteredPayload);
}

export function apiGetReportVisualizations(reportRequestObject) {
  configureHttpHeaders(axios);

  return post(`reports/${reportRequestObject.report.id}/visualizations`, reportRequestObject.filters || []);
}

export function apiGetReportRowData(reportId, rowId) {
  configureHttpHeaders(axios);

  return get(`/reports/${reportId}/${rowId}`);
}

export function apiGetReportExport(reportRequestObject, exportFormat) {
  configureHttpHeaders(axios);

  const sanitizedReportRequestObject = (!(Object.keys(reportRequestObject)).includes('filters'))
    ? Object.assign({}, reportRequestObject, { filters: [] })
    : reportRequestObject;

  const allowedKeys = [
    'filters',
    'report',
  ];
  const filteredPayload = filterRequestPayloadObject(sanitizedReportRequestObject, allowedKeys);


  if (exportFormat === 'pdf') {
    return postBlob(`reports/${reportRequestObject.report.id}/export/pdf`, filteredPayload, exportFormat);
  }
  return postBlob(`reports/${reportRequestObject.report.id}/export`, filteredPayload, exportFormat);
}


function get(url) {
  /* eslint-enable dot-notation */
  return axios.get(`${baseUrl}${url}`)
    .then(onSuccess)
    .catch(onError);
}

function post(url, body, id) {
  let endpoint = `${baseUrl}${url}`;

  if (id) {
    endpoint += `/${id}`;
  }

  return axios.post(endpoint, body)
    .then(onSuccess)
    .catch(onError);
}

function postBlob(url, body, exportFormat) {
  const endpoint = `${baseUrl}${url}`;
  let resType = 'application/csv';
  if (exportFormat === 'pdf') {
    resType = 'application/pdf';
  }

  return axios({ method: 'post', url: endpoint, responseType: 'arraybuffer', data: body })
  .then(onSuccess)
  .then((response) => {
    const blob = new Blob([response], { type: resType });
    return blob;
  })
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
  apiGetReports,
  apiGetReportMetadata,
  apiGetReportUserFilters,
  apiSaveReportUserFilters,
  apiGetReportData,
  apiGetReportVisualizations,
  apiGetReportRowData,
  apiGetReportExport,
  apiGetReportDataWithoutFilter,
};
