/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions, quotes, quote-props */

import { expect } from 'chai';

 // mocks
import { getMockUser } from 'Helpers/testHelpers/testUserMocks.js';

// system under test
import {
  getParsedPermissions,
  canEditRole,
  canEditDataAccess,
  canEditOptionalPermissions,
  canActivateAndDeactivateRole,
  getAdminSectionAccess,
  getParsedPermissionStructure,
} from './permissionsUtils';

describe('Permissions Utils', function () {
  describe('getParsedPermissions', function () {
    it('should return all false permissions for a user with no permissions', function () {
      const userWithNoPermissions = {
        role: {
          permissions: [],
        },
      };

      const parsedPermissions = getParsedPermissions(userWithNoPermissions.role.permissions);

      expect(parsedPermissions.users.canView).to.be.false;
      expect(parsedPermissions.users.canCreate).to.be.false;
      expect(parsedPermissions.users.canEditRole).to.be.false;
      expect(parsedPermissions.users.canEditOptionalPermissions).to.be.false;
      expect(parsedPermissions.users.canEditDataAccess).to.be.false;
      expect(parsedPermissions.users.canActivateAndDeactivate).to.be.false;
      expect(parsedPermissions.merchants.canView).to.be.false;
      expect(parsedPermissions.merchants.canRegister).to.be.false;
      expect(parsedPermissions.merchants.canEdit).to.be.false;
      expect(parsedPermissions.merchants.canOwnMerchants).to.be.false;
      expect(parsedPermissions.merchants.canTransferOwnership).to.be.false;
      expect(parsedPermissions.merchants.canViewProductSelection).to.be.false;
      expect(parsedPermissions.merchants.canUpdateProductPricing).to.be.false;
      expect(parsedPermissions.messages.canView).to.be.false;
      expect(parsedPermissions.messages.canDraft).to.be.false;
      expect(parsedPermissions.messages.canApproveAndSend).to.be.false;
      expect(parsedPermissions.transactions.canSearch).to.be.false;
      expect(parsedPermissions.creditCardNumber.canViewFullNumber).to.be.false;
      expect(parsedPermissions.creditCardNumber.canGivePermissionToViewFullNumber).to.be.false;
      expect(parsedPermissions.statements.canView).to.be.false;
      expect(parsedPermissions.reports.canView).to.be.false;
      expect(parsedPermissions.reports.canExport).to.be.false;
      expect(parsedPermissions.reports.canExportWithFullCardNumber).to.be.false;
      expect(parsedPermissions.reports.canViewCustomReports).to.be.false;
      expect(parsedPermissions.reports.canCreateCustomReports).to.be.false;
      expect(parsedPermissions.reports.canSaveSharedReportAsCopy).to.be.false;
      expect(parsedPermissions.reports.canModifySavedCopyOfSharedReport).to.be.false;
      expect(parsedPermissions.reports.canEditCustomReports).to.be.false;
      expect(parsedPermissions.reports.canDeleteCustomReports).to.be.false;
      expect(parsedPermissions.reports.canShareCustomReports).to.be.false;
      expect(parsedPermissions.reports.canViewScheduledReports).to.be.false;
      expect(parsedPermissions.reports.canSchedule).to.be.false;
      expect(parsedPermissions.reports.canEditSchedule).to.be.false;
      expect(parsedPermissions.reports.canDeleteScheduledReports).to.be.false;
      expect(parsedPermissions.reports.canPauseScheduledReports).to.be.false;
      expect(parsedPermissions.reports.canScheduleForOthers).to.be.false;
      expect(parsedPermissions.personalInformation.canEdit).to.be.false;
      expect(parsedPermissions.login.canLogIn).to.be.false;
    });

    it('should return correct permissions for the mock merchant user', function () {
      const mockMerchantUser = getMockUser('MERCHANT_USER');

      const parsedPermissions = getParsedPermissions(mockMerchantUser.role.permissions);

      expect(parsedPermissions.users.canView).to.be.true;
      expect(parsedPermissions.users.rolesViewable).to.eql([
        'MERCHANT_USER',
        'MERCHANT_ACCOUNT_ADMINISTRATOR',
      ]);

      expect(parsedPermissions.users.canCreate).to.be.true;
      expect(parsedPermissions.users.rolesCreatable).to.eql([
        'MERCHANT_USER',
      ]);

      expect(parsedPermissions.users.canEditRole).to.be.true;
      expect(parsedPermissions.users.rolesEditableForRole).to.eql([
        'MERCHANT_USER',
        'MERCHANT_ACCOUNT_ADMINISTRATOR',
      ]);

      expect(parsedPermissions.users.canEditOptionalPermissions).to.be.false;

      expect(parsedPermissions.users.canEditDataAccess).to.be.true;
      expect(parsedPermissions.users.rolesEditableForDataAccess).to.eql([
        'MERCHANT_USER',
      ]);

      expect(parsedPermissions.users.canActivateAndDeactivate).to.be.true;
      expect(parsedPermissions.users.rolesActivatable).to.eql([
        'MERCHANT_USER',
      ]);

      expect(parsedPermissions.merchants.canView).to.be.true;
      expect(parsedPermissions.merchants.canRegister).to.be.true;

      expect(parsedPermissions.merchants.canEdit).to.be.false;
      expect(parsedPermissions.merchants.canOwnMerchants).to.be.false;

      expect(parsedPermissions.merchants.canTransferOwnership).to.be.true;
      expect(parsedPermissions.merchants.canViewProductSelection).to.be.true;

      expect(parsedPermissions.merchants.canUpdateProductPricing).to.be.false;

      expect(parsedPermissions.messages.canView).to.be.true;

      expect(parsedPermissions.messages.canDraft).to.be.false;
      expect(parsedPermissions.messages.canApproveAndSend).to.be.false;

      expect(parsedPermissions.transactions.canSearch).to.be.true;
      expect(parsedPermissions.creditCardNumber.canViewFullNumber).to.be.true;

      expect(parsedPermissions.creditCardNumber.canGivePermissionToViewFullNumber).to.be.false;

      expect(parsedPermissions.statements.canView).to.be.true;

      expect(parsedPermissions.reports.canView).to.be.true;
      expect(parsedPermissions.reports.canExport).to.be.true;
      expect(parsedPermissions.reports.canExportWithFullCardNumber).to.be.true;

      expect(parsedPermissions.reports.canViewCustomReports).to.be.false;
      expect(parsedPermissions.reports.canCreateCustomReports).to.be.false;
      expect(parsedPermissions.reports.canSaveSharedReportAsCopy).to.be.false;
      expect(parsedPermissions.reports.canModifySavedCopyOfSharedReport).to.be.false;
      expect(parsedPermissions.reports.canEditCustomReports).to.be.false;
      expect(parsedPermissions.reports.canDeleteCustomReports).to.be.false;
      expect(parsedPermissions.reports.canShareCustomReports).to.be.false;
      expect(parsedPermissions.reports.canViewScheduledReports).to.be.false;
      expect(parsedPermissions.reports.canSchedule).to.be.false;
      expect(parsedPermissions.reports.canEditSchedule).to.be.false;
      expect(parsedPermissions.reports.canDeleteScheduledReports).to.be.false;
      expect(parsedPermissions.reports.canPauseScheduledReports).to.be.false;
      expect(parsedPermissions.reports.canScheduleForOthers).to.be.false;

      expect(parsedPermissions.personalInformation.canEdit).to.be.true;
      expect(parsedPermissions.login.canLogIn).to.be.true;
    });

    it('should return correct permissions for the mock global payments employee user', function () {
      const mockMerchantUser = getMockUser('GLOBAL_PAYMENTS_EMPLOYEE');

      const parsedPermissions = getParsedPermissions(mockMerchantUser.role.permissions);

      expect(parsedPermissions.users.canView).to.be.true;
      expect(parsedPermissions.users.rolesViewable).to.eql([
        'MERCHANT_USER',
        'MERCHANT_ACCOUNT_ADMINISTRATOR',
        'GLOBAL_PAYMENTS_EMPLOYEE',
        'GLOBAL_PAYMENTS_REGIONAL_PM',
        'GLOBAL_PAYMENTS_WORLDWIDE_PM',
        'GLOBAL_PAYMENTS_CUSTOMER_SERVICE',
        'GLOBAL_PAYMENTS_MASTERFILE_ANALYST',
        'GLOBAL_PAYMENTS_TECH_SUPPORT_ADMIN',
        'ACQUIRER_USER',
        'ACQUIRER_ACCOUNT_ADMIN',
      ]);

      expect(parsedPermissions.users.canCreate).to.be.false;
      expect(parsedPermissions.users.rolesCreatable).to.eql([]);

      expect(parsedPermissions.users.canEditRole).to.be.false;
      expect(parsedPermissions.users.rolesEditableForRole).to.eql([]);

      expect(parsedPermissions.users.canEditOptionalPermissions).to.be.false;
      expect(parsedPermissions.users.rolesEditableForOptionalPermissions).to.eql([]);

      expect(parsedPermissions.users.canEditDataAccess).to.be.false;
      expect(parsedPermissions.users.rolesEditableForDataAccess).to.eql([]);

      expect(parsedPermissions.users.canActivateAndDeactivate).to.be.false;
      expect(parsedPermissions.users.rolesActivatable).to.eql([]);

      expect(parsedPermissions.merchants.canView).to.be.true;

      expect(parsedPermissions.merchants.canRegister).to.be.false;
      expect(parsedPermissions.merchants.canEdit).to.be.false;
      expect(parsedPermissions.merchants.canOwnMerchants).to.be.false;
      expect(parsedPermissions.merchants.canTransferOwnership).to.be.false;

      expect(parsedPermissions.merchants.canViewProductSelection).to.be.true;

      expect(parsedPermissions.merchants.canUpdateProductPricing).to.be.false;

      expect(parsedPermissions.messages.canView).to.be.true;

      expect(parsedPermissions.messages.canDraft).to.be.false;
      expect(parsedPermissions.messages.canApproveAndSend).to.be.false;

      expect(parsedPermissions.transactions.canSearch).to.be.true;
      expect(parsedPermissions.creditCardNumber.canViewFullNumber).to.be.true;

      expect(parsedPermissions.creditCardNumber.canGivePermissionToViewFullNumber).to.be.false;

      expect(parsedPermissions.statements.canView).to.be.true;

      expect(parsedPermissions.reports.canView).to.be.true;
      expect(parsedPermissions.reports.canExport).to.be.true;
      expect(parsedPermissions.reports.canExportWithFullCardNumber).to.be.true;

      expect(parsedPermissions.reports.canViewCustomReports).to.be.false;
      expect(parsedPermissions.reports.canCreateCustomReports).to.be.false;
      expect(parsedPermissions.reports.canSaveSharedReportAsCopy).to.be.false;
      expect(parsedPermissions.reports.canModifySavedCopyOfSharedReport).to.be.false;
      expect(parsedPermissions.reports.canEditCustomReports).to.be.false;
      expect(parsedPermissions.reports.canDeleteCustomReports).to.be.false;
      expect(parsedPermissions.reports.canShareCustomReports).to.be.false;
      expect(parsedPermissions.reports.canViewScheduledReports).to.be.false;
      expect(parsedPermissions.reports.canSchedule).to.be.false;
      expect(parsedPermissions.reports.canEditSchedule).to.be.false;
      expect(parsedPermissions.reports.canDeleteScheduledReports).to.be.false;
      expect(parsedPermissions.reports.canPauseScheduledReports).to.be.false;
      expect(parsedPermissions.reports.canScheduleForOthers).to.be.false;

      expect(parsedPermissions.personalInformation.canEdit).to.be.true;
      expect(parsedPermissions.login.canLogIn).to.be.true;
    });
  });

  describe('canEditRole', function () {
    it('should return false if user does not have canEdit permission for any role', function () {
      const parsedPermissions = {
        users: {
          canView: true,
          rolesViewable: [
            'MERCHANT_USER',
            'MERCHANT_ACCOUNT_ADMINISTRATOR',
            'GLOBAL_PAYMENTS_EMPLOYEE',
          ],
          canEditRole: false,
          rolesEditableForRole: [],
        },
      };

      const canEditMerchantUser = canEditRole(parsedPermissions, 'MERCHANT_USER');

      expect(canEditMerchantUser).to.be.false;
    });

    it('should return false if user does not have canEdit permission for the requested role', function () {
      const parsedPermissions = {
        users: {
          canView: true,
          rolesViewable: [
            'MERCHANT_USER',
            'MERCHANT_ACCOUNT_ADMINISTRATOR',
            'GLOBAL_PAYMENTS_EMPLOYEE',
          ],
          canEditRole: true,
          rolesEditableForRole: [
            'MERCHANT_USER',
            'MERCHANT_ACCOUNT_ADMINISTRATOR',
            'GLOBAL_PAYMENTS_EMPLOYEE',
          ],
        },
      };

      const canEditGpRegionalPm = canEditRole(parsedPermissions, 'GLOBAL_PAYMENTS_REGIONAL_PM');

      expect(canEditGpRegionalPm).to.be.false;
    });

    it('should return true if user can edit the requested role', function () {
      const parsedPermissions = {
        users: {
          canView: true,
          rolesViewable: [
            'MERCHANT_USER',
            'MERCHANT_ACCOUNT_ADMINISTRATOR',
            'GLOBAL_PAYMENTS_EMPLOYEE',
          ],
          canEditRole: true,
          rolesEditableForRole: [
            'MERCHANT_USER',
            'MERCHANT_ACCOUNT_ADMINISTRATOR',
            'GLOBAL_PAYMENTS_EMPLOYEE',
          ],
        },
      };

      const canEditMerchantAccountAdmin = canEditRole(parsedPermissions, 'MERCHANT_ACCOUNT_ADMINISTRATOR');

      expect(canEditMerchantAccountAdmin).to.be.true;
    });
  });

  describe('canEditDataAccess', function () {
    it('should return false if user does not have canEditDataAccess permission for any role', function () {
      const parsedPermissions = {
        users: {
          canView: true,
          rolesViewable: [
            'MERCHANT_USER',
            'MERCHANT_ACCOUNT_ADMINISTRATOR',
            'GLOBAL_PAYMENTS_EMPLOYEE',
          ],
          canEditDataAccess: false,
          rolesEditableForDataAccess: [],
        },
      };

      const canEditMerchantUser = canEditDataAccess(parsedPermissions, 'MERCHANT_USER');

      expect(canEditMerchantUser).to.be.false;
    });

    it('should return false if user does not have canEditDataAccess permission for the requested role', function () {
      const parsedPermissions = {
        users: {
          canView: true,
          rolesViewable: [
            'MERCHANT_USER',
            'MERCHANT_ACCOUNT_ADMINISTRATOR',
            'GLOBAL_PAYMENTS_EMPLOYEE',
          ],
          canEditDataAccess: true,
          rolesEditableForDataAccess: [
            'MERCHANT_USER',
            'MERCHANT_ACCOUNT_ADMINISTRATOR',
            'GLOBAL_PAYMENTS_EMPLOYEE',
          ],
        },
      };

      const canEditMerchantUser = canEditDataAccess(parsedPermissions, 'GLOBAL_PAYMENTS_REGIONAL_PM');

      expect(canEditMerchantUser).to.be.false;
    });

    it('should return true if user can edit data access for the requested role', function () {
      const parsedPermissions = {
        users: {
          canView: true,
          rolesViewable: [
            'MERCHANT_USER',
            'MERCHANT_ACCOUNT_ADMINISTRATOR',
            'GLOBAL_PAYMENTS_EMPLOYEE',
          ],
          canEditDataAccess: true,
          rolesEditableForDataAccess: [
            'MERCHANT_USER',
            'MERCHANT_ACCOUNT_ADMINISTRATOR',
            'GLOBAL_PAYMENTS_EMPLOYEE',
          ],
        },
      };

      const canEditMerchantUser = canEditDataAccess(parsedPermissions, 'MERCHANT_USER');

      expect(canEditMerchantUser).to.be.true;
    });
  });

  describe('canEditOptionalPermissions', function () {
    it('should return false if user does not have canEditOptionalPermissions permission for any role', function () {
      const parsedPermissions = {
        users: {
          canView: true,
          rolesViewable: [
            'MERCHANT_USER',
            'MERCHANT_ACCOUNT_ADMINISTRATOR',
            'GLOBAL_PAYMENTS_EMPLOYEE',
          ],
          canEditOptionalPermissions: false,
          rolesEditableForOptionalPermissions: [],
        },
      };

      const canEditMerchantUserOptionalPermissions = canEditOptionalPermissions(parsedPermissions, 'MERCHANT_USER');

      expect(canEditMerchantUserOptionalPermissions).to.be.false;
    });

    it('should return false if user does not have canEditOptionalPermissions permission for the requested role', function () {
      const parsedPermissions = {
        users: {
          canView: true,
          rolesViewable: [
            'MERCHANT_USER',
            'MERCHANT_ACCOUNT_ADMINISTRATOR',
            'GLOBAL_PAYMENTS_EMPLOYEE',
          ],
          canEditOptionalPermissions: true,
          rolesEditableForOptionalPermissions: [
            'MERCHANT_USER',
            'MERCHANT_ACCOUNT_ADMINISTRATOR',
            'GLOBAL_PAYMENTS_EMPLOYEE',
          ],
        },
      };

      const canEditMerchantUserOptionalPermissions = canEditOptionalPermissions(parsedPermissions, 'GLOBAL_PAYMENTS_REGIONAL_PM');

      expect(canEditMerchantUserOptionalPermissions).to.be.false;
    });

    it('should return true if user can edit optional permissions for the requested role', function () {
      const parsedPermissions = {
        users: {
          canView: true,
          rolesViewable: [
            'MERCHANT_USER',
            'MERCHANT_ACCOUNT_ADMINISTRATOR',
            'GLOBAL_PAYMENTS_EMPLOYEE',
          ],
          canEditOptionalPermissions: true,
          rolesEditableForOptionalPermissions: [
            'MERCHANT_USER',
            'MERCHANT_ACCOUNT_ADMINISTRATOR',
            'GLOBAL_PAYMENTS_EMPLOYEE',
          ],
        },
      };

      const canEditMerchantUserOptionalPermissions = canEditOptionalPermissions(parsedPermissions, 'MERCHANT_USER');

      expect(canEditMerchantUserOptionalPermissions).to.be.true;
    });
  });

  describe('canActivateAndDeactivateRole', function () {
    it('should return false if user does not have canActivateAndDeactivate permission for any role', function () {
      const parsedPermissions = {
        users: {
          canView: true,
          rolesViewable: [
            'MERCHANT_USER',
            'MERCHANT_ACCOUNT_ADMINISTRATOR',
            'GLOBAL_PAYMENTS_EMPLOYEE',
          ],
          canActivateAndDeactivate: false,
          rolesActivatable: [],
        },
      };

      const canEditMerchantUser = canActivateAndDeactivateRole(parsedPermissions, 'MERCHANT_USER');

      expect(canEditMerchantUser).to.be.false;
    });

    it('should return false if user does not have canActivateAndDeactivate permission for the requested role', function () {
      const parsedPermissions = {
        users: {
          canView: true,
          rolesViewable: [
            'MERCHANT_USER',
            'MERCHANT_ACCOUNT_ADMINISTRATOR',
            'GLOBAL_PAYMENTS_EMPLOYEE',
          ],
          canActivateAndDeactivate: true,
          rolesActivatable: [
            'MERCHANT_USER',
            'MERCHANT_ACCOUNT_ADMINISTRATOR',
            'GLOBAL_PAYMENTS_EMPLOYEE',
          ],
        },
      };

      const canEditGpRegionalPm = canActivateAndDeactivateRole(parsedPermissions, 'GLOBAL_PAYMENTS_REGIONAL_PM');

      expect(canEditGpRegionalPm).to.be.false;
    });

    it('should return true if user can edit activate/deativate the requested role', function () {
      const parsedPermissions = {
        users: {
          canView: true,
          rolesViewable: [
            'MERCHANT_USER',
            'MERCHANT_ACCOUNT_ADMINISTRATOR',
            'GLOBAL_PAYMENTS_EMPLOYEE',
          ],
          canActivateAndDeactivate: true,
          rolesActivatable: [
            'MERCHANT_USER',
            'MERCHANT_ACCOUNT_ADMINISTRATOR',
            'GLOBAL_PAYMENTS_EMPLOYEE',
          ],
        },
      };

      const canEditMerchantAccountAdmin = canActivateAndDeactivateRole(parsedPermissions, 'MERCHANT_ACCOUNT_ADMINISTRATOR');

      expect(canEditMerchantAccountAdmin).to.be.true;
    });
  });

  describe('getAdminSectionAccess', function () {
    it('should return true if user has View Users permission', function () {
      const parsedPermissions = {
        users: {
          canView: true,
          rolesViewable: [
            'MERCHANT_USER',
          ],
        },
      };

      const hasAdminPermissions = getAdminSectionAccess(parsedPermissions);

      expect(hasAdminPermissions).to.be.true;
    });

    it('should return true if user has View Merchants permission', function () {
      const parsedPermissions = {
        merchants: {
          canView: true,
        },
      };

      const hasAdminPermissions = getAdminSectionAccess(parsedPermissions);

      expect(hasAdminPermissions).to.be.true;
    });
  });

  describe('getParsedPermissionStructure', function () {
    it('should return all false permissions', function () {
      const permissionsStructure = getParsedPermissionStructure();

      const topLevelKeys = Object.keys(permissionsStructure);

      // we have to loop through all the types of permissions
      const hasSomeTrueKeys = topLevelKeys.some((key) => {
        const innerKeys = Object.keys(permissionsStructure[key]);

        // in each type, we look for any permission that is true or is an array with any length
        return innerKeys.some((innerKey) => {
          if (permissionsStructure[key][innerKey].hasOwnProperty('length')) {
            return permissionsStructure[key][innerKey].length;
          } else {
            return permissionsStructure[key][innerKey];
          }
        });
      });

      // we should fine NO true or arrays with links
      // that is, no inner loops should ever return true
      expect(hasSomeTrueKeys).to.be.false;
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions, quotes, quote-props */
