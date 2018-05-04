/* eslint-disable func-names, prefer-arrow-callback */

import { expect } from 'chai';
import * as featureFlagActions from './featureFlagActions';
import * as types from './actionTypes';

describe('Feature Flag actions', function () {
  it('should add a feature flag to the feature flag object', function () {
    // arrange
    const qaFlag = {
      isQa2: true,
    };
    const expectedAction = {
      type: types.SET_FEATURE_FLAGS,
      flagObject: qaFlag,
    };

    // act
    const action = featureFlagActions.setFeatureFlags(qaFlag);

    // asset
    expect(action).to.eql(expectedAction);
  });
});

/* eslint-enable func-names, prefer-arrow-callback */
