import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function featureFlagsReducer(state = initialState.featureFlags, action) {
  switch (action.type) {
    case types.SET_FEATURE_FLAGS:
      return Object.assign(
        {},
        state,
        action.flagObject,
      );

    default:
      return state;
  }
}
