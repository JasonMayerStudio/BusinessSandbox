import * as types from './actionTypes';

import {
  getSubscriptions,
  saveSubscriptions,
} from '../api/subscriptionApi';

export function requestUserEmailSubscriptions() {
  return { type: types.REQUEST_USER_SUBSCRIPTIONS };
}

export function receiveUserEmailSubscriptionsSuccess(subscriptions) {
  return { type: types.RECEIVE_USER_SUBSCRIPTIONS_SUCCESS, subscriptions };
}

export function receiveUserEmailSubscriptionsFailure(error) {
  return { type: types.RECEIVE_USER_SUBSCRIPTIONS_FAILURE, error };
}

export function getUserEmailSubscriptions(userId) {
  return function dispatchGetUserEmailSubscriptions(dispatch) {
    dispatch(requestUserEmailSubscriptions());

    return getSubscriptions(userId)
      .then((subscriptions) => {
        dispatch(receiveUserEmailSubscriptionsSuccess(subscriptions.subscriptions));
      })
      .catch((error) => {
        dispatch(receiveUserEmailSubscriptionsFailure(error));
      });
  };
}

export function requestSaveUserEmailSubscriptions() {
  return { type: types.REQUEST_SAVE_USER_SUBSCRIPTIONS };
}

export function receiveSavedUserEmailSubscriptionsSuccess(subscriptions) {
  return { type: types.RECEIVE_SAVE_USER_SUBSCRIPTIONS_SUCCESS, subscriptions };
}

export function receiveSavedUserEmailSubscriptionsFailure(error) {
  return { type: types.RECEIVE_SAVE_USER_SUBSCRIPTIONS_FAILURE, error };
}

export function saveUserSubscriptions(subscriptions, userId) {
  return function dispatchSaveUserEmailSubscriptions(dispatch) {
    dispatch(requestSaveUserEmailSubscriptions());

    return saveSubscriptions(subscriptions, userId)
      .then(() => {
        dispatch(receiveSavedUserEmailSubscriptionsSuccess(subscriptions));
      })
      .catch((error) => {
        dispatch(receiveSavedUserEmailSubscriptionsFailure(error));
      });
  };
}
