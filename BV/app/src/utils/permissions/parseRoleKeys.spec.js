/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import { expect } from 'chai';

// system under test
import { parseRoleKeys } from './parseRoleKeys';

describe('Permissions parseRoleKeys Utils', function () {
  describe('parseRoleKeys', function () {
    it('should return input as-is if no words to shorten', function () {
      const roleKey = 'MERCHANT_USER';

      const shortenedRoleKey = parseRoleKeys(roleKey);

      const expectedRoleKey = 'MERCHANT_USER';
      expect(shortenedRoleKey).to.equal(expectedRoleKey);
    });

    it('should shorten ADMINISTRATOR to ADMIN', function () {
      const roleKey = 'MERCHANT_ADMINISTRATOR';

      const shortenedRoleKey = parseRoleKeys(roleKey);

      const expectedRoleKey = 'MERCHANT_ADMIN';
      expect(shortenedRoleKey).to.equal(expectedRoleKey);
    });

    it('should shorten GLOBAL_PAYMENTS to GP', function () {
      const roleKey = 'GLOBAL_PAYMENTS_EMPLOYEE';

      const shortenedRoleKey = parseRoleKeys(roleKey);

      const expectedRoleKey = 'GP_EMPLOYEE';
      expect(shortenedRoleKey).to.equal(expectedRoleKey);
    });

    it('should shorten both ADMINISTRATOR and GLOBAL_PAYMENTS to GP', function () {
      const roleKey = 'GLOBAL_PAYMENTS_TECH_SUPPORT_ADMINISTRATOR';

      const shortenedRoleKey = parseRoleKeys(roleKey);

      const expectedRoleKey = 'GP_TECH_SUPPORT_ADMIN';
      expect(shortenedRoleKey).to.equal(expectedRoleKey);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
