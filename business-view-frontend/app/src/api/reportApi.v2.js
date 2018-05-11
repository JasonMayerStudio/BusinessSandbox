import axios from 'axios';

import getReportsApiV2BaseUrl from './reportsApi.v2.baseUrl';
import {
  configureHttpHeaders,
  filterRequestPayloadObject,
  buildReportPreviewObject,
} from './apiHelpers';

const baseUrl = getReportsApiV2BaseUrl();

export function apiGetReports(options = {}) {
  configureHttpHeaders(axios);

  const allowedKeys = [
    'email',
  ];
  const filteredOptions = filterRequestPayloadObject(options, allowedKeys);

  return get('reports', filteredOptions);
}

export function apiGetOneReport(reportId) {
  configureHttpHeaders(axios);

  return get(`reports/${reportId}`);
}

export function apiGetReportUserFilters(reportId) {
  configureHttpHeaders(axios);

  return get(`reports/${reportId}/custom-filters`);
}

export function apiSaveReportUserFilters(reportId, savedFilterObject) {
  configureHttpHeaders(axios);

  const allowedKeys = [
    'filterJson',
    'id',
    'name',
  ];
  const filteredSavedFilterObject = filterRequestPayloadObject(savedFilterObject, allowedKeys);

  return post(`reports/${reportId}/custom-filters`, filteredSavedFilterObject);
}

export function apiFetchReportPreview(report) {
  configureHttpHeaders(axios);

  const reportPreviewObject = buildReportPreviewObject(report);

  const allowedKeys = [
    'columnIds',
    'filters',
    'templateId',
  ];
  const filteredReportObject = filterRequestPayloadObject(reportPreviewObject, allowedKeys);

  return post('reports/preview', filteredReportObject);
}

export function apiGetReportData(reportId, reportRequestObject) {
  configureHttpHeaders(axios);

  const allowedKeys = [
    'filters',
    'page',
    'limit',
    'sortOrder',
    'sortColumnKey',
  ];
  const filteredPayload = filterRequestPayloadObject(reportRequestObject, allowedKeys);
  filteredPayload.filters = JSON.stringify(filteredPayload.filters); // @todo, standard this hack needed for /data and /summary

  return get(`reports/${reportId}/data`, filteredPayload);
}

export function apiGetReportSummary(reportId, reportRequestObject) {
  configureHttpHeaders(axios);

  const allowedKeys = [
    'filters',
  ];
  const filteredPayload = filterRequestPayloadObject(reportRequestObject, allowedKeys);
  filteredPayload.filters = JSON.stringify(filteredPayload.filters); // @todo, standard this hack needed for /data and /summary

  return get(`reports/${reportId}/summary`, filteredPayload);
}

export function apiGetReportVisualizations(reportId, reportRequestObject) {
  configureHttpHeaders(axios);

  const allowedKeys = [
    'filters',
  ];
  const filteredPayload = filterRequestPayloadObject(reportRequestObject, allowedKeys);
  filteredPayload.filters = JSON.stringify(filteredPayload.filters); // @todo, standard this hack needed for /data and /summary

  return get(`reports/${reportId}/visualizations`, filteredPayload);
}

export function apiGetReportExport(reportId, filters, exportFormat) {
  configureHttpHeaders(axios);

  const sanitizedReportRequestObject = {
    filters,
  };

  const allowedKeys = [
    'filters',
  ];
  const filteredPayload = filterRequestPayloadObject(sanitizedReportRequestObject, allowedKeys);
  filteredPayload.filters = JSON.stringify(filteredPayload.filters); // @todo, standard this hack needed for /data and /summary

  if (exportFormat === 'pdf') {
    return getBlob(`reports/${reportId}/export/pdf`, filteredPayload, exportFormat);
  }
  return getBlob(`reports/${reportId}/export`, filteredPayload, exportFormat);
}

export function apiDeleteReportFilter(reportId, filterId) {
  configureHttpHeaders(axios);

  return deleteFilter(`reports/${reportId}/custom-filters/${filterId}`);
}

export function apiDeleteReport(reportId) {
  configureHttpHeaders(axios);

  return deleteFilter(`reports/${reportId}`);
}

/**
 * Custom report building calls
 */

export function apiSaveReportDefinition(reportDefinition) {
  configureHttpHeaders(axios);

  const allowedKeys = [
    'columns',
    'description',
    'filters',
    'isDraft',
    'isSystemReport',
    'name',
    'templateId',
    'reportId',
    'canManageColumns',
    'canSearch',
    'isExportable',
    'isListable',
  ];
  const filteredReport = filterRequestPayloadObject(reportDefinition, allowedKeys);

  if (filteredReport.reportId) {
    return put(`reports/${filteredReport.reportId}`, filteredReport);
  } else {  // eslint-disable-line no-else-return
    return post('reports', filteredReport);
  }
}

export function apiUpdateVisibleReportColumns(reportId, columns) {
  configureHttpHeaders(axios);

  const newVisibleColumns = columns.map((column, index) => {
    return {
      displayOrder: index,
      id: column.reportColumnId,
    };
  });

  return post(`reports/${reportId}/selected-columns`, newVisibleColumns);
}

function get(url, filteredOptions) {
  return axios.get(`${baseUrl}${url}`, {
    params: filteredOptions,
  })
    .then(onSuccess)
    .catch(onError);
}

function getBlob(url, body, exportFormat) {
  const endpoint = `${baseUrl}${url}`;
  let resType = 'text/csv';
  if (exportFormat === 'pdf') {
    resType = 'application/pdf';
  }

  return axios({ method: 'get', url: endpoint, responseType: 'arraybuffer', params: body })
    .then(onSuccess)
    .then((response) => {
      const blob = new Blob([response.data], { type: resType });
      return blob;
    })
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

function put(url, user) {
  return axios.put(`${baseUrl}${url}`, user)
    .then(onSuccess)
    .catch(onError);
}

function deleteFilter(url) {
  return axios.delete(`${baseUrl}${url}`)
    .then(onSuccess)
    .catch(onError);
}


function onSuccess(response) {
  let result;

  if (response.status !== 204) {
    result = {
      data: response.data,
      headers: response.headers,
    };
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
  apiGetOneReport,
  apiGetReportUserFilters,
  apiSaveReportUserFilters,
  apiGetReportData,
  apiGetReportVisualizations,
  apiSaveReportDefinition,
};
