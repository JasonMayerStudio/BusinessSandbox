import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authReducer(state = initialState.auth, action) {
  switch (action.type) {
    case types.SET_AUTH_TOKEN: {
      const sessionWithNewToken = Object.assign({}, state.session, { sessionToken: action.webToken });

      return Object.assign({}, state, {
        session: sessionWithNewToken,
      });
    }

    case types.REQUEST_AUTH_LOGIN:
      return Object.assign({}, state, { isFetching: true, error: null });

    case types.AUTH_LOGIN_SUCCESS:
      return Object.assign({}, {
        isFetching: false,
        session: action.session,
        error: null,
      });

    case types.AUTH_LOGIN_FAILURE:
      return Object.assign({}, {
        isFetching: false,
        session: null,
        error: action.error,
      });

    case types.AUTH_LOGOUT:
      return Object.assign({}, {
        isFetching: false,
        session: null,
        error: null,
      });

    case types.REQUEST_NEW_AUTH_PREFERENCES:
      return Object.assign({}, {
        isFetching: true,
        session: state.session,
        error: null,
      });

    case types.RECEIVE_NEW_AUTH_PREFERENCES_SUCCESS: {
      const user = Object.assign({}, state.session.user, {
        firstName: action.session.user.preferences.firstName,
        lastName: action.session.user.preferences.lastName,
        preferences: action.session.user.preferences,
      });

      return Object.assign({}, {
        isFetching: false,
        session: {
          sessionToken: state.session.sessionToken,
          user,
        },
        error: null,
      });
    }

    case types.RECEIVE_NEW_AUTH_PREFERENCES_FAILURE:
      return Object.assign({}, {
        isFetching: false,
        session: state.session,
        error: action.error,
      });

    default:
      return state;
  }
}
