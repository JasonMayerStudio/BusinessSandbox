import * as types from './actionTypes';

import {
  apiGetMerchants,
  apiGetAllUsersForMerchant,
  apiRegisterMerchant,
  apiSaveMerchant,
} from '../api/merchantApi';

export function requestMerchants() {
  return { type: types.REQUEST_MERCHANTS };
}

export function receiveMerchantsSuccess(merchants) {
  return {
    type: types.RECEIVE_MERCHANTS_SUCCESS,
    merchants,
    receivedAt: Date.now(),
  };
}

export function receiveMerchantsFailure(error) {
  return {
    type: types.RECEIVE_MERCHANTS_FAILURE,
    error,
  };
}

export function getAllMerchants() {
  return function dispatchGetMerchants(dispatch) {
    dispatch(requestMerchants());

    return apiGetMerchants()
      .then((json) => {
        dispatch(receiveMerchantsSuccess(json));
      });
  };
}

export function requestAllUsersForMerchant() {
  return { type: types.REQUEST_ALL_USERS_BY_MERCHANT_ID };
}

export function receiveAllUsersForMerchantSuccess(users) {
  return {
    type: types.RECEIVE_ALL_USERS_BY_MERCHANT_ID_SUCCESS,
    users,
    receivedAt: Date.now(),
  };
}

export function receiveAllUsersForMerchantFailure(error) {
  return {
    type: types.RECEIVE_ALL_USERS_BY_MERCHANT_ID_FAILURE,
    error,
  };
}

export function getAllUsersForMerchant(merchant) {
  return function dispatchGetAllUsersForMerchant(dispatch) {
    dispatch(requestAllUsersForMerchant());

    return apiGetAllUsersForMerchant(merchant)
      .then((json) => {
        dispatch(receiveAllUsersForMerchantSuccess(json));
      });
  };
}

export function postRegisterMerchant() {
  return { type: types.POST_REGISTER_MERCHANT };
}

export function registerMerchantSuccess(registeredMerchant) {
  return {
    type: types.REGISTER_MERCHANT_SUCCESS,
    registeredMerchant,
    receivedAt: Date.now(),
  };
}

export function registerMerchantFailure(error) {
  return { type: types.REGISTER_MERCHANT_FAILURE, error };
}

export function clearLastRegisteredMerchant() {
  return { type: types.CLEAR_LAST_REGISTERED_MERCHANT };
}

// thunks
export function registerMerchant(merchantNumber, validationNumber) {
  return function dispatchPostRegisterMerchant(dispatch) {
    dispatch(postRegisterMerchant());
    return apiRegisterMerchant(merchantNumber, validationNumber)
      .then((registeredMerchant) => {
        dispatch(registerMerchantSuccess(registeredMerchant));
      })
      .catch((error) => {
        dispatch(registerMerchantFailure(error));
      });
  };
}

export function requestEditLocation() {
  return { type: types.REQUEST_UPDATE_LOCATION };
}

export function receiveEditLocationSuccess(merchant) {
  return {
    type: types.RECEIVE_UPDATE_LOCATION_SUCCESS,
    merchant,
    receivedAt: Date.now(),
  };
}

export function receiveEditLocationFailure(error) {
  return {
    type: types.RECEIVE_UPDATE_LOCATION_FAILURE,
    error,
  };
}

export function updateMerchant(updatedMerchant) {
  return function dispatchSaveMerchant(dispatch) {
    dispatch(requestEditLocation());

    return apiSaveMerchant(updatedMerchant)
      .then(() => {
        dispatch(receiveEditLocationSuccess(updatedMerchant));
      })
      .catch((error) => {
        dispatch(receiveEditLocationFailure(error));
      });
  };
}
