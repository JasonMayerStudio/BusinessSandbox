import axios from 'axios';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export function getRegisteredMerchant(merchantData) {
  axios.defaults.headers.common['Authorization'] = merchantData.sessionToken; // eslint-disable-line dot-notation
  axios.defaults.headers.common['userLang'] = merchantData.language; // eslint-disable-line dot-notation

  return get(`registration/merchant/${merchantData.merchantNumber}/${merchantData.ddaTaxId}`);
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
  getRegisteredMerchant,
};
