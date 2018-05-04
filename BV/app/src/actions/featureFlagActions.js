import * as types from './actionTypes';

export function setFeatureFlags(flagObject) {
  return { type: types.SET_FEATURE_FLAGS, flagObject };
}

export default {
  setFeatureFlags,
};
