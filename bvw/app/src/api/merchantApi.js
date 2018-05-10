import axios from 'axios';
import getBaseUrl from './baseUrl';
import {
  configureHttpHeaders,
  filterRequestPayloadObject,
  filterRequestPayloadArray,
} from './apiHelpers';

const baseUrl = getBaseUrl();

export function apiGetMerchants() {
  configureHttpHeaders(axios);

  return get('merchants');
}

export function apiGetAllUsersForMerchant(merchant) {
  configureHttpHeaders(axios);

  return get(`merchants/${merchant.merchantNumber}/users`);
}

export function apiGetProducts(merchantId) {
  configureHttpHeaders(axios);

  return get(`merchants/${merchantId}/products`);
}

export function getMerchantsFuzzySearch(query) {
  configureHttpHeaders(axios);

  return getQuery('merchants', query);
}

export function apiRegisterMerchant(merchantNumber, validationNumber) {
  const body = {
    value: validationNumber.toString(),
  };
  configureHttpHeaders(axios);

  return post('merchants', body, merchantNumber);
}

export function apiSaveMerchant(merchant) {
  configureHttpHeaders(axios);

  const allowedKeys = [
    'email',
    'fax',
    'merchantId',
    'phoneNumber',
  ];
  const filteredPayload = filterRequestPayloadObject(merchant, allowedKeys);

  if (merchant.merchantId) {
    return put(`merchants/${merchant.merchantNumber}`, filteredPayload);
  } else {  // eslint-disable-line no-else-return
    return Promise.reject('No merchant ID number supplied.');
  }
}

export function saveProduct(merchantId, product) {
  configureHttpHeaders(axios);

  const allowedKeys = [
    'isActive',
    'productId',
  ];
  const filteredProducts = filterRequestPayloadArray(product.merchantProducts, allowedKeys);

  const filteredObj = {
    merchantProducts: filteredProducts,
  };

  return put(`merchants/${merchantId}/products`, filteredObj);
}

export function overrideProduct(merchantId, product) {
  configureHttpHeaders(axios);

  const allowedKeys = [
    'chargeFrequency',
    'currencyCodeId',
    'isActive',
    'price',
    'productId',
  ];
  const filteredProducts = filterRequestPayloadArray(product.adminProducts, allowedKeys);

  const filteredObj = {
    adminProducts: filteredProducts,
  };

  return put(`merchants/${merchantId}/products/price`, filteredObj);
}

function getQuery(url, query) {
  if (query.length) {
    return axios.get(`${baseUrl}${url}/search?searchString=${query}`)
      .then(onSuccess)
      .catch(onError);
  }
  return false;
}

function get(url) {
  /* eslint-enable dot-notation */
  return axios.get(`${baseUrl}${url}`)
    .then(onSuccess)
    .catch(onError);
}

function put(url, merchant) {
  return axios.put(`${baseUrl}${url}`, merchant)
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
  apiGetAllUsersForMerchant,
  apiGetProducts,
  apiGetMerchants,
  apiRegisterMerchant,
  apiSaveMerchant,
  saveProduct,
  overrideProduct,
};
