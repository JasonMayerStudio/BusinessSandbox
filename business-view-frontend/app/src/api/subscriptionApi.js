import axios from 'axios';
import getBaseUrl from './baseUrl';
import {
  configureHttpHeaders,
  filterRequestPayloadArray,
} from './apiHelpers';

const baseUrl = getBaseUrl();

export function getSubscriptions(userId) {
  configureHttpHeaders(axios);
  return get(`profile/subscriptions/${userId}`);
}

export function saveSubscriptions(subs) {
  configureHttpHeaders(axios);

  const allowedKeys = [
    'subscribed',
    'subscriptionId',
  ];
  const filteredSubscriptions = filterRequestPayloadArray(subs.updateSubscription, allowedKeys);

  const filteredObj = Object.assign({}, subs, { updateSubscription: filteredSubscriptions });

  return put(`profile/subscriptions/${subs.userId}`, filteredObj);
}

function put(url, subs) {
  return axios.put(`${baseUrl}${url}`, subs)
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
  getSubscriptions,
  saveSubscriptions,
};
