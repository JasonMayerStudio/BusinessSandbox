import axios from 'axios';
import getBaseUrl from './messagesBaseUrl';
import { configureHttpHeaders } from './apiHelpers';

const baseUrl = getBaseUrl();

export function getMessages() {
  configureHttpHeaders(axios);
  return get('messages');
}

export function getMessageCount() {
  configureHttpHeaders(axios);
  return get('messages/counts');
}

/**
 * ask the API to update all messages given to the provided status
 * @param  {Array} messagesToUpdate  an array of messages
 * @param  {string} newStatus        an allowed status ('READ' or 'UNREAD')
 * @return {Promise}                 an HTTP client request promise
 */
export function updateMessagesStatus(messagesToUpdate, newStatus) {
  const messageIds = messagesToUpdate.map((message) => {
    return message.id;
  });
  const status = ['READ', 'UNREAD'].includes(newStatus) ? newStatus : 'READ';
  const messagesStatusObject = {
    messageIds,
    status,
  };

  return put('messages/status', messagesStatusObject);
}

function get(url) {
  return axios.get(`${baseUrl}${url}`)
    .then(onSuccess)
    .catch(onError);
}

function put(url, messages) {
  return axios.put(`${baseUrl}${url}`, messages)
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
  getMessages,
  getMessageCount,
  updateMessagesStatus,
};
