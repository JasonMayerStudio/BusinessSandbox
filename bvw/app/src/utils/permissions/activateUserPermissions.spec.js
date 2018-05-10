/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import { expect } from 'chai';

// mocks
import { getMockUser } from 'Helpers/testHelpers/testUserMocks';

// system under test
import { checkActivateUserPermissions } from './activateUserPermissions';

describe('Permissions checkActivateUserPermissions Utils', function () {
  describe('checkActivateUserPermissions', function () {
    it('should return all false values if no activate permissions', function () {
      const mockGlobablUser = getMockUser('GLOBAL_PAYMENTS_EMPLOYEE');

      const activateUserPermissions = checkActivateUserPermissions(mockGlobablUser.role.permissions);

      const hasAnyActivatePermission = activateUserPermissions.some((permission) => permission.hasPermission);
      expect(hasAnyActivatePermission).to.be.false;
    });

    it('should return true for activate Merchant User', function () {
      const mockGlobablUser = getMockUser('GLOBAL_PAYMENTS_EMPLOYEE');

      mockGlobablUser.role.permissions.push({
        name: 'foo',
        description: 'This is a description of',
        key: 'ACTIVATE_AND_DEACTIVATE_MERCHANT_USERS',
        id: 999,
      });

      const activateUserPermissions = checkActivateUserPermissions(mockGlobablUser.role.permissions);

      const hasMerchantUserActivatePermission = activateUserPermissions.findIndex((permission) => {
        return (
          permission.role === 'MERCHANT_USER' &&
          permission.hasPermission
        );
      });

      expect(hasMerchantUserActivatePermission).to.be.above(-1);
    });

    it('should return true for activate Merchant Account Administrator', function () {
      const mockGlobablUser = getMockUser('GLOBAL_PAYMENTS_EMPLOYEE');

      mockGlobablUser.role.permissions.push({
        name: 'bar',
        description: 'This is a description of',
        key: 'ACTIVATE_AND_DEACTIVATE_MERCHANT_ACCOUNT_ADMIN',
        id: 998,
      });

      const activateUserPermissions = checkActivateUserPermissions(mockGlobablUser.role.permissions);

      const hasMerchantAccountAdminstratorActivatePermission = activateUserPermissions.findIndex((permission) => {
        return (
          permission.role === 'MERCHANT_ACCOUNT_ADMINISTRATOR' &&
          permission.hasPermission
        );
      });

      expect(hasMerchantAccountAdminstratorActivatePermission).to.be.above(-1);
    });

    it('should return true for activate Global Payments Employee', function () {
      const mockGlobablUser = getMockUser('GLOBAL_PAYMENTS_EMPLOYEE');

      mockGlobablUser.role.permissions.push({
        name: 'baz',
        description: 'This is a description of',
        key: 'ACTIVATE_AND_DEACTIVATE_GP_EMPLOYEE',
        id: 997,
      });

      const activateUserPermissions = checkActivateUserPermissions(mockGlobablUser.role.permissions);

      const hasGlobalEmployeeActivatePermission = activateUserPermissions.findIndex((permission) => {
        return (
          permission.role === 'GLOBAL_PAYMENTS_EMPLOYEE' &&
          permission.hasPermission
        );
      });

      expect(hasGlobalEmployeeActivatePermission).to.be.above(-1);
    });

    it('should return true for activate Global Payments Regional PM', function () {
      const mockGlobablUser = getMockUser('GLOBAL_PAYMENTS_EMPLOYEE');

      mockGlobablUser.role.permissions.push({
        name: 'snafu',
        description: 'This is a description of',
        key: 'ACTIVATE_AND_DEACTIVATE_GP_REGIONAL_PM',
        id: 996,
      });

      const activateUserPermissions = checkActivateUserPermissions(mockGlobablUser.role.permissions);

      const hasGlobalRegionalPmActivatePermission = activateUserPermissions.findIndex((permission) => {
        return (
          permission.role === 'GLOBAL_PAYMENTS_REGIONAL_PM' &&
          permission.hasPermission
        );
      });

      expect(hasGlobalRegionalPmActivatePermission).to.be.above(-1);
    });

    it('should return true for activate Global Payments Worldwide PM', function () {
      const mockGlobablUser = getMockUser('GLOBAL_PAYMENTS_EMPLOYEE');

      mockGlobablUser.role.permissions.push({
        name: 'snafu',
        description: 'This is a description of',
        key: 'ACTIVATE_AND_DEACTIVATE_GP_WORLDWIDE_PM',
        id: 995,
      });

      const activateUserPermissions = checkActivateUserPermissions(mockGlobablUser.role.permissions);

      const hasGlobalWorldwidePmActivatePermission = activateUserPermissions.findIndex((permission) => {
        return (
          permission.role === 'GLOBAL_PAYMENTS_WORLDWIDE_PM' &&
          permission.hasPermission
        );
      });

      expect(hasGlobalWorldwidePmActivatePermission).to.be.above(-1);
    });

    it('should return true for activate Global Payments Customer Service', function () {
      const mockGlobablUser = getMockUser('GLOBAL_PAYMENTS_EMPLOYEE');

      mockGlobablUser.role.permissions.push({
        name: 'whiskey',
        description: 'This is a description of',
        key: 'ACTIVATE_AND_DEACTIVATE_GP_CUSTOMER_SERVICE',
        id: 994,
      });

      const activateUserPermissions = checkActivateUserPermissions(mockGlobablUser.role.permissions);

      const hasGlobalCustomerServiceActivatePermission = activateUserPermissions.findIndex((permission) => {
        return (
          permission.role === 'GLOBAL_PAYMENTS_CUSTOMER_SERVICE' &&
          permission.hasPermission
        );
      });

      expect(hasGlobalCustomerServiceActivatePermission).to.be.above(-1);
    });

    it('should return true for activate Global Payments Masterfile Analyst', function () {
      const mockGlobablUser = getMockUser('GLOBAL_PAYMENTS_EMPLOYEE');

      mockGlobablUser.role.permissions.push({
        name: 'tango',
        description: 'This is a description of',
        key: 'ACTIVATE_AND_DEACTIVATE_GP_MASTERFILE_ANALYST',
        id: 993,
      });

      const activateUserPermissions = checkActivateUserPermissions(mockGlobablUser.role.permissions);

      const hasGlobalMasterfileAnalystActivatePermission = activateUserPermissions.findIndex((permission) => {
        return (
          permission.role === 'GLOBAL_PAYMENTS_MASTERFILE_ANALYST' &&
          permission.hasPermission
        );
      });

      expect(hasGlobalMasterfileAnalystActivatePermission).to.be.above(-1);
    });

    it('should return true for activate Global Payments Tech Support Admin', function () {
      const mockGlobablUser = getMockUser('GLOBAL_PAYMENTS_EMPLOYEE');

      mockGlobablUser.role.permissions.push({
        name: 'foxtrot',
        description: 'This is a description of',
        key: 'ACTIVATE_AND_DEACTIVATE_GP_TECH_SUPPORT_ADMIN',
        id: 992,
      });

      const activateUserPermissions = checkActivateUserPermissions(mockGlobablUser.role.permissions);

      const hasGlobalTechSupportAdminActivatePermission = activateUserPermissions.findIndex((permission) => {
        return (
          permission.role === 'GLOBAL_PAYMENTS_TECH_SUPPORT_ADMIN' &&
          permission.hasPermission
        );
      });

      expect(hasGlobalTechSupportAdminActivatePermission).to.be.above(-1);
    });

    it('should return true for activate Acquirer User', function () {
      const mockGlobablUser = getMockUser('GLOBAL_PAYMENTS_EMPLOYEE');

      mockGlobablUser.role.permissions.push({
        name: 'alpha',
        description: 'This is a description of',
        key: 'ACTIVATE_AND_DEACTIVATE_ACQUIRER_USER',
        id: 991,
      });

      const activateUserPermissions = checkActivateUserPermissions(mockGlobablUser.role.permissions);

      const hasAcquirerUserActivatePermission = activateUserPermissions.findIndex((permission) => {
        return (
          permission.role === 'ACQUIRER_USER' &&
          permission.hasPermission
        );
      });

      expect(hasAcquirerUserActivatePermission).to.be.above(-1);
    });

    it('should return true for activate Acquirer Account Admin', function () {
      const mockGlobablUser = getMockUser('GLOBAL_PAYMENTS_EMPLOYEE');

      mockGlobablUser.role.permissions.push({
        name: 'bravo',
        description: 'This is a description of',
        key: 'ACTIVATE_AND_DEACTIVATE_ACQUIRER_ACCOUNT_ADMIN',
        id: 990,
      });

      const activateUserPermissions = checkActivateUserPermissions(mockGlobablUser.role.permissions);

      const hasAcquirerAccountAdminActivatePermission = activateUserPermissions.findIndex((permission) => {
        return (
          permission.role === 'ACQUIRER_ACCOUNT_ADMIN' &&
          permission.hasPermission
        );
      });

      expect(hasAcquirerAccountAdminActivatePermission).to.be.above(-1);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
