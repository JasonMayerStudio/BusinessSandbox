/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import { expect } from 'chai';

// mocks
import { getMockUser } from 'Helpers/testHelpers/testUserMocks';

// system under test
import { checkForSingularPermission } from './checkForSingularPermission';

describe('Permissions checkForSingularPermission Utils', function () {
  describe('checkForSingularPermission', function () {
    it('should return true if permission is in given list of permissions', function () {
      const mockGlobablUser = getMockUser('GLOBAL_PAYMENTS_EMPLOYEE');
      const permissionToCheck = 'VIEW_MERCHANT_ACCOUNT_ADMIN';

      const hasSingularPermission = checkForSingularPermission(mockGlobablUser.role.permissions, permissionToCheck);

      expect(hasSingularPermission).to.be.true;
    });

    it('should return false if permission is in given list of permissions', function () {
      const mockGlobablUser = getMockUser('GLOBAL_PAYMENTS_EMPLOYEE');
      const permissionToCheck = 'CREATE_MERCHANT_ACCOUNT_ADMIN';

      const hasSingularPermission = checkForSingularPermission(mockGlobablUser.role.permissions, permissionToCheck);

      expect(hasSingularPermission).to.be.false;
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
