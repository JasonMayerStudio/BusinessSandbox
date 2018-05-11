/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import { expect } from 'chai';

// system under test
import { getFeatureFlags } from 'Utils/featureFlagUtils';

describe('Feature Flag Utils', function () {
  describe('getFeatureFlags', function () {
    it('should return a true flag if hostname contains qa2', function () {
      const hostname = 'merchantplatform-qa2.globalpay.com';

      const featureFlags = getFeatureFlags(hostname);

      expect(featureFlags.isQa2).to.be.true;
    });

    it('should return a false flag if hostname contains qa2', function () {
      const hostname = 'merchantplatform-qa1.globalpay.com';

      const featureFlags = getFeatureFlags(hostname);

      expect(featureFlags.isQa2).to.be.false;
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
