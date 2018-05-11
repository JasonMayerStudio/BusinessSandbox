import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.users, action) {
  switch (action.type) {
    case types.REQUEST_USERS:
      return Object.assign({}, state, {
        isFetching: true,
        error: null,
      });

    case types.RECEIVE_USERS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.users,
        lastUpdated: action.receivedAt,
        error: null,
      });

    case types.RECEIVE_USERS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error,
      });

    case types.REQUEST_SAVE_USER:
      return Object.assign({}, state, {
        isFetching: true,
        error: null,
      });

    case types.RECEIVE_SAVE_USER_SUCCESS: {
      const userData = [
        ...state.data.filter((user) => user.userId !== action.user.userId),
        Object.assign({}, action.user),
      ];

      return Object.assign({}, state, {
        isFetching: false,
        data: userData,
        lastUpdated: action.receivedAt,
        error: null,
      });
    }

    case types.REQUEST_USER_DATA_ACCESS:
      return Object.assign({}, state, {
        isFetching: true,
        error: null,
      });

    case types.RECEIVE_USER_DATA_ACCESS_SUCCESS: {
      const userData = state.data.map((user) => {
        if (user.userId === action.userId) {
          return Object.assign({}, user, {
            dataAccess: action.dataAccess,
          });
        }
        return user;
      });

      return Object.assign({}, state, {
        isFetching: false,
        data: userData,
        lastUpdated: action.receivedAt,
        error: null,
      });
    }

    case types.RECEIVE_USER_DATA_ACCESS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error,
      });

    case types.REQUEST_USER_MERCHANTS:
      return Object.assign({}, state, {
        isFetching: true,
        error: null,
      });

    case types.RECEIVE_USER_MERCHANTS_SUCCESS: {
      const userData = state.data.map((user) => {
        if (user.userId === action.userId) {
          return Object.assign({}, user, {
            merchants: action.merchants,
          });
        }
        return user;
      });

      return Object.assign({}, state, {
        isFetching: false,
        data: userData,
        lastUpdated: action.receivedAt,
        error: null,
      });
    }

    case types.RECEIVE_USER_MERCHANTS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error,
      });

    default:
      return state;
  }
}
