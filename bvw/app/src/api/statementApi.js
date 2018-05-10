import axios from 'axios';
import getBaseUrl from './statementBaseUrl';
import {
  configureHttpHeaders,
} from './apiHelpers';

const baseUrl = getBaseUrl();

export function getMerchantPDFStatements(merchantPDFStatements, exportFormat, statementType) {
  configureHttpHeaders(axios);
  axios.defaults.headers.common.Accept = 'application/octet-stream';
  if (!statementType) {
    return postBlob('statements/download/merchant/', merchantPDFStatements, exportFormat);
  } else {
    return postBlob('statements/download/chain/', merchantPDFStatements, exportFormat);
  }
}

export function getMerchantViewStatements(merchantPDFStatements, statementType) {
  axios.defaults.headers.common.Accept = 'text/html,application/pdf,application/json';
  configureHttpHeaders(axios);
  if (!statementType) {
    return postBlobView('statements/eStatement/merchant', merchantPDFStatements);
  } else {
    return postBlobView('statements/eStatement/chain', merchantPDFStatements);
  }
}

function postBlob(url, body, exportFormat) {
  let resType = 'application/zip';
  if (exportFormat === 'pdf') {
    resType = 'application/pdf';
  }
  return axios({
    method: 'post',
    url: `${baseUrl}${url}${exportFormat}`,
    responseType: 'arraybuffer',
    data: body,
  }).then(onSuccess)
    .then((response) => {
      const blob = new Blob([response], { type: resType });
      return blob;
    })
    .catch(onError);
}

function postBlobView(url, body) {
  return axios({ method: 'post', url: `${baseUrl}${url}`, responseType: 'text', data: body })
    .then(onSuccess)
    .catch(onError);
}

function onError(error) {
  const returnedError = error && error.response && error.response.data;
  throw returnedError;
}

export function getStatements() {
  configureHttpHeaders(axios);
  return getQuery('statements/merchant');
}

function getQuery(url, query) {
  const prefixedQueryString = (query) ? `?${query}` : '';
  return axios.get(`${baseUrl}${url}${prefixedQueryString}`)
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

export default {
  getStatements,
};
