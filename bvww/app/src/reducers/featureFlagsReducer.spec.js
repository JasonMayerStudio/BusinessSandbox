/* eslint-disable func-names, prefer-arrow-callback */

import { expect } from 'chai';

import * as featureFlagActions from '../actions/featureFlagActions';
import featureFlagsReducer from './featureFlagsReducer';
import initialState from './initialState';

describe('Feature Flag reducer', function () {
  describe('Set feature flag action', function () {
    it('should add a feature flag to an empty feature flag state', function () {
      const stateBefore = initialState.featureFlags;
      const newFeatureFlag = {
        isQa2: true,
      };

      const action = featureFlagActions.setFeatureFlags(newFeatureFlag);
      const stateAfter = {
        isQa2: true,
      };

      const result = featureFlagsReducer(stateBefore, action);

      expect(result).to.eql(stateAfter);
    });

    it('should override an existing feature flag', function () {
      const stateBefore = initialState.featureFlags;
      stateBefore.isQa2 = true;

      const newFeatureFlag = {
        isQa2: false,
      };

      const action = featureFlagActions.setFeatureFlags(newFeatureFlag);
      const stateAfter = {
        isQa2: false,
      };

      const result = featureFlagsReducer(stateBefore, action);

      expect(result).to.eql(stateAfter);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback */
