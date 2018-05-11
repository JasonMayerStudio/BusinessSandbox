import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function merchantReducer(state = initialState.merchants, action) {
  switch (action.type) {
    case types.REQUEST_MERCHANTS:
      return Object.assign({}, state, {
        isFetching: true,
        error: null,
      });

    case types.REQUEST_ALL_USERS_BY_MERCHANT_ID:
      return Object.assign({}, state, {
        isFetching: true,
        error: null,
      });

    case types.RECEIVE_MERCHANTS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.merchants,
        lastUpdated: action.receivedAt,
        error: null,
      });

    case types.RECEIVE_MERCHANTS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error,
      });

    case types.REQUEST_UPDATE_LOCATION:
      return Object.assign({}, state, {
        isFetching: true,
        error: null,
      });

    case types.RECEIVE_UPDATE_LOCATION_SUCCESS: {
      const merchantData = [
        ...state.data.filter((merchant) => merchant.merchantId !== action.merchant.merchantId),
        Object.assign({}, action.merchant),
      ];

      return Object.assign({}, state, {
        isFetching: false,
        data: merchantData,
        lastUpdated: action.receivedAt,
        error: null,
      });
    }

    case types.RECEIVE_UPDATE_LOCATION_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error,
      });

    case types.POST_REGISTER_MERCHANT:
      return Object.assign({}, state, {
        isFetching: true,
        lastMerchantRegistered: null,
        error: null,
      });

    case types.REGISTER_MERCHANT_SUCCESS: {
      const merchantData = [
        ...state.data,
        Object.assign({}, action.registeredMerchant),
      ];

      return Object.assign({}, state, {
        isFetching: false,
        data: merchantData,
        lastMerchantRegistered: action.registeredMerchant,
        lastUpdated: action.receivedAt,
        error: null,
      });
    }

    case types.REGISTER_MERCHANT_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error,
      });

    case types.CLEAR_LAST_REGISTERED_MERCHANT:
      return Object.assign({}, state, {
        isFetching: false,
        lastMerchantRegistered: null,
        error: null,
      });

    default:
      return state;
  }
}
