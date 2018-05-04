import * as types from './actionTypes';

import {
  getMessages,
  getMessageCount,
  updateMessagesStatus,
} from '../api/messageApi';

export function requestMessages() {
  return { type: types.REQUEST_MESSAGES };
}

export function receiveMessagesSuccess(messages) {
  return { type: types.RECEIVE_MESSAGES_SUCCESS, messages };
}

export function receiveMessagesFailure(error) {
  return { type: types.RECEIVE_MESSAGES_FAILURE, error };
}

export function fetchMessages() {
  return function dispatchGetMessages(dispatch) {
    dispatch(requestMessages());

    return getMessages()
      .then((messages) => {
        dispatch(receiveMessagesSuccess(messages));
      })
      .catch((error) => {
        dispatch(receiveMessagesFailure(error));
      });
  };
}

export function requestUpdateMessagesStatus() {
  return { type: types.REQUEST_MESSAGES_UPDATE_STATUS };
}

export function receiveMessagesUpdateStatusSuccess(messages, newStatus) {
  return {
    type: types.RECEIVE_MESSAGES_UPDATE_STATUS_SUCCESS,
    messages,
    newStatus,
  };
}

export function receiveMessagesUpdateStatusFailure(error) {
  return { type: types.RECEIVE_MESSAGES_UPDATE_STATUS_FAILURE, error };
}

export function fetchUpdateMessagesStatus(messagesToUpdate, newStatus) {
  return function dispatchUpdateMessagesStatus(dispatch) {
    dispatch(requestUpdateMessagesStatus());

    return updateMessagesStatus(messagesToUpdate, newStatus)
      .then((messages) => {
        dispatch(receiveMessagesUpdateStatusSuccess(messages, newStatus));
        fetchMessageCount();
      })
      .catch((error) => {
        dispatch(receiveMessagesUpdateStatusFailure(error));
      });
  };
}

export function receiveMessagesUpdateSuccess(updatedMessages) {
  return {
    type: types.RECEIVE_MESSAGES_UPDATE_STATUS_SUCCESS,
    messages: updatedMessages,
  };
}

export function requestMessageCount() {
  return { type: types.REQUEST_MESSAGE_COUNT };
}

export function receiveMessageCountSuccess(count) {
  return { type: types.RECEIVE_MESSAGE_COUNT_SUCCESS, count };
}

export function receiveMessageCountFailure(error) {
  return { type: types.RECEIVE_MESSAGE_COUNT_FAILURE, error };
}

export function fetchMessageCount() {
  return function dispatchGetMessageCount(dispatch) {
    dispatch(requestMessageCount());

    return getMessageCount()
      .then((count) => {
        dispatch(receiveMessageCountSuccess(count));
      })
      .catch((error) => {
        dispatch(receiveMessageCountFailure(error));
      });
  };
}
