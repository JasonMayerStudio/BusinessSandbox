// @flow

export function getParsedPermissions(permissions: Array<Object> = []): Object {
  const parsedPermissionStructure = getParsedPermissionStructure();

  return permissions.reduce((permissionObj, permission) => {
    const newObject = Object.assign({}, permissionObj);

    switch (permission.key) {
      case 'VIEW_MERCHANT_USER': {
        newObject.users.canView = true;
        newObject.users.rolesViewable.push('MERCHANT_USER');
        break;
      }

      case 'VIEW_MERCHANT_ACCOUNT_ADMIN': {
        newObject.users.canView = true;
        newObject.users.rolesViewable.push('MERCHANT_ACCOUNT_ADMINISTRATOR');
        break;
      }

      case 'VIEW_GP_EMPLOYEE': {
        newObject.users.canView = true;
        newObject.users.rolesViewable.push('GLOBAL_PAYMENTS_EMPLOYEE');
        break;
      }

      case 'VIEW_GP_REGIONAL_PM': {
        newObject.users.canView = true;
        newObject.users.rolesViewable.push('GLOBAL_PAYMENTS_REGIONAL_PM');
        break;
      }

      case 'VIEW_GP_WORLDWIDE_PM': {
        newObject.users.canView = true;
        newObject.users.rolesViewable.push('GLOBAL_PAYMENTS_WORLDWIDE_PM');
        break;
      }

      case 'VIEW_GP_TECH_SUPPORT_ADMIN': {
        newObject.users.canView = true;
        newObject.users.rolesViewable.push('GLOBAL_PAYMENTS_TECH_SUPPORT_ADMIN');
        break;
      }

      case 'VIEW_GP_CUSTOMER_SERVICE': {
        newObject.users.canView = true;
        newObject.users.rolesViewable.push('GLOBAL_PAYMENTS_CUSTOMER_SERVICE');
        break;
      }

      case 'VIEW_GP_MASTERFILE_ANALYST': {
        newObject.users.canView = true;
        newObject.users.rolesViewable.push('GLOBAL_PAYMENTS_MASTERFILE_ANALYST');
        break;
      }

      case 'VIEW_ACQUIRER_USER': {
        newObject.users.canView = true;
        newObject.users.rolesViewable.push('ACQUIRER_USER');
        break;
      }

      case 'VIEW_ACQUIRER_ACCOUNT_ADMIN': {
        newObject.users.canView = true;
        newObject.users.rolesViewable.push('ACQUIRER_ACCOUNT_ADMIN');
        break;
      }

      case 'CREATE_MERCHANT_USER': {
        newObject.users.canCreate = true;
        newObject.users.rolesCreatable.push('MERCHANT_USER');
        break;
      }

      case 'CREATE_MERCHANT_ACCOUNT_ADMIN': {
        newObject.users.canCreate = true;
        newObject.users.rolesCreatable.push('MERCHANT_ACCOUNT_ADMINISTRATOR');
        break;
      }

      case 'CREATE_GP_EMPLOYEE': {
        newObject.users.canCreate = true;
        newObject.users.rolesCreatable.push('GLOBAL_PAYMENTS_EMPLOYEE');
        break;
      }

      case 'CREATE_GP_REGIONAL_PM': {
        newObject.users.canCreate = true;
        newObject.users.rolesCreatable.push('GLOBAL_PAYMENTS_REGIONAL_PM');
        break;
      }

      case 'CREATE_GP_WORLDWIDE_PM': {
        newObject.users.canCreate = true;
        newObject.users.rolesCreatable.push('GLOBAL_PAYMENTS_WORLDWIDE_PM');
        break;
      }

      case 'CREATE_GP_TECH_SUPPORT_ADMIN': {
        newObject.users.canCreate = true;
        newObject.users.rolesCreatable.push('GLOBAL_PAYMENTS_TECH_SUPPORT_ADMIN');
        break;
      }

      case 'CREATE_GP_CUSTOMER_SERVICE': {
        newObject.users.canCreate = true;
        newObject.users.rolesCreatable.push('GLOBAL_PAYMENTS_CUSTOMER_SERVICE');
        break;
      }

      case 'CREATE_GP_MASTERFILE_ANALYST': {
        newObject.users.canCreate = true;
        newObject.users.rolesCreatable.push('GLOBAL_PAYMENTS_MASTERFILE_ANALYST');
        break;
      }

      case 'CREATE_ACQUIRER_USER': {
        newObject.users.canCreate = true;
        newObject.users.rolesCreatable.push('ACQUIRER_USER');
        break;
      }

      case 'CREATE_ACQUIRER_ACCOUNT_ADMIN': {
        newObject.users.canCreate = true;
        newObject.users.rolesCreatable.push('ACQUIRER_ACCOUNT_ADMIN');
        break;
      }

      case 'EDIT_MERCHANT_USER_ROLE': {
        newObject.users.canEditRole = true;
        newObject.users.rolesEditableForRole.push('MERCHANT_USER');
        break;
      }

      case 'EDIT_MERCHANT_ACCOUNT_ADMIN_ROLE': {
        newObject.users.canEditRole = true;
        newObject.users.rolesEditableForRole.push('MERCHANT_ACCOUNT_ADMINISTRATOR');
        break;
      }

      case 'EDIT_GP_EMPLOYEE_ROLE': {
        newObject.users.canEditRole = true;
        newObject.users.rolesEditableForRole.push('GLOBAL_PAYMENTS_EMPLOYEE');
        break;
      }

      case 'EDIT_GP_REGIONAL_PM_ROLE': {
        newObject.users.canEditRole = true;
        newObject.users.rolesEditableForRole.push('GLOBAL_PAYMENTS_REGIONAL_PM');
        break;
      }

      case 'EDIT_GP_WORLDWIDE_PM_ROLE': {
        newObject.users.canEditRole = true;
        newObject.users.rolesEditableForRole.push('GLOBAL_PAYMENTS_WORLDWIDE_PM');
        break;
      }

      case 'EDIT_GP_TECH_SUPPORT_ADMIN_ROLE': {
        newObject.users.canEditRole = true;
        newObject.users.rolesEditableForRole.push('GLOBAL_PAYMENTS_TECH_SUPPORT_ADMIN');
        break;
      }

      case 'EDIT_GP_CUSTOMER_SERVICE_ROLE': {
        newObject.users.canEditRole = true;
        newObject.users.rolesEditableForRole.push('GLOBAL_PAYMENTS_CUSTOMER_SERVICE');
        break;
      }

      case 'EDIT_GP_MASTERFILE_ANALYST_ROLE': {
        newObject.users.canEditRole = true;
        newObject.users.rolesEditableForRole.push('GLOBAL_PAYMENTS_MASTERFILE_ANALYST');
        break;
      }

      case 'EDIT_ACQUIRER_USER_ROLE': {
        newObject.users.canEditRole = true;
        newObject.users.rolesEditableForRole.push('ACQUIRER_USER');
        break;
      }

      case 'EDIT_ACQUIRER_ACCOUNT_ROLE': {
        newObject.users.canEditRole = true;
        newObject.users.rolesEditableForRole.push('ACQUIRER_ACCOUNT_ADMIN');
        break;
      }

      case 'EDIT_MERCHANT_USERS_OPTIONAL_PERMISSIONS': {
        newObject.users.canEditOptionalPermissions = true;
        newObject.users.rolesEditableForOptionalPermissions.push('MERCHANT_USER');
        break;
      }

      case 'EDIT_MERCHANT_ACCOUNT_ADMINS_OPTIONAL_PERMISSIONS': {
        newObject.users.canEditOptionalPermissions = true;
        newObject.users.rolesEditableForOptionalPermissions.push('MERCHANT_ACCOUNT_ADMINISTRATOR');
        break;
      }

      case 'EDIT_GP_EMPLOYEES_OPTIONAL_PERMISSIONS': {
        newObject.users.canEditOptionalPermissions = true;
        newObject.users.rolesEditableForOptionalPermissions.push('GLOBAL_PAYMENTS_EMPLOYEE');
        break;
      }

      case 'EDIT_GP_REGIONAL_PMS_OPTIONAL_PERMISSIONS': {
        newObject.users.canEditOptionalPermissions = true;
        newObject.users.rolesEditableForOptionalPermissions.push('GLOBAL_PAYMENTS_REGIONAL_PM');
        break;
      }

      case 'EDIT_GP_WORLDWIDE_PMS_OPTIONAL_PERMISSIONS': {
        newObject.users.canEditOptionalPermissions = true;
        newObject.users.rolesEditableForOptionalPermissions.push('GLOBAL_PAYMENTS_WORLDWIDE_PM');
        break;
      }

      case 'EDIT_GP_TECH_SUPPORT_ADMINS_OPTIONAL_PERMISSIONS': {
        newObject.users.canEditOptionalPermissions = true;
        newObject.users.rolesEditableForOptionalPermissions.push('GLOBAL_PAYMENTS_TECH_SUPPORT_ADMIN');
        break;
      }

      case 'EDIT_GP_CUSTOMER_SERVICES_OPTIONAL_PERMISSIONS': {
        newObject.users.canEditOptionalPermissions = true;
        newObject.users.rolesEditableForOptionalPermissions.push('GLOBAL_PAYMENTS_CUSTOMER_SERVICE');
        break;
      }

      case 'EDIT_GP_MASTERFILE_ANALYSTS_OPTIONAL_PERMISSIONS': {
        newObject.users.canEditOptionalPermissions = true;
        newObject.users.rolesEditableForOptionalPermissions.push('GLOBAL_PAYMENTS_MASTERFILE_ANALYST');
        break;
      }

      case 'EDIT_ACQUIRER_USERS_OPTIONAL_PERMISSIONS': {
        newObject.users.canEditOptionalPermissions = true;
        newObject.users.rolesEditableForOptionalPermissions.push('ACQUIRER_USER');
        break;
      }

      case 'EDIT_ACQUIRER_ACCOUNT_ADMINS_OPTIONAL_PERMISSIONS': {
        newObject.users.canEditOptionalPermissions = true;
        newObject.users.rolesEditableForOptionalPermissions.push('ACQUIRER_ACCOUNT_ADMIN');
        break;
      }

      case 'EDIT_MERCHANT_USER_DATA_ACCESS': {
        newObject.users.canEditDataAccess = true;
        newObject.users.rolesEditableForDataAccess.push('MERCHANT_USER');
        break;
      }

      case 'EDIT_MERCHANT_ACCOUNT_ADMIN_DATA_ACCESS': {
        newObject.users.canEditDataAccess = true;
        newObject.users.rolesEditableForDataAccess.push('MERCHANT_ACCOUNT_ADMINISTRATOR');
        break;
      }

      case 'EDIT_GP_EMPLOYEE_DATA_ACCESS': {
        newObject.users.canEditDataAccess = true;
        newObject.users.rolesEditableForDataAccess.push('GLOBAL_PAYMENTS_EMPLOYEE');
        break;
      }

      case 'EDIT_GP_REGIONAL_PM_DATA_ACCESS': {
        newObject.users.canEditDataAccess = true;
        newObject.users.rolesEditableForDataAccess.push('GLOBAL_PAYMENTS_REGIONAL_PM');
        break;
      }

      case 'EDIT_GP_WORLDWIDE_PM_DATA_ACCESS': {
        newObject.users.canEditDataAccess = true;
        newObject.users.rolesEditableForDataAccess.push('GLOBAL_PAYMENTS_WORLDWIDE_PM');
        break;
      }

      case 'EDIT_GP_TECH_SUPPORT_ADMIN_DATA_ACCESS': {
        newObject.users.canEditDataAccess = true;
        newObject.users.rolesEditableForDataAccess.push('GLOBAL_PAYMENTS_TECH_SUPPORT_ADMIN');
        break;
      }

      case 'EDIT_GP_CUSTOMER_SERVICE_DATA_ACCESS': {
        newObject.users.canEditDataAccess = true;
        newObject.users.rolesEditableForDataAccess.push('GLOBAL_PAYMENTS_CUSTOMER_SERVICE');
        break;
      }

      case 'EDIT_GP_MASTERFILE_ANALYST_DATA_ACCESS': {
        newObject.users.canEditDataAccess = true;
        newObject.users.rolesEditableForDataAccess.push('GLOBAL_PAYMENTS_MASTERFILE_ANALYST');
        break;
      }

      case 'EDIT_ACQUIRER_USER_DATA_ACCESS': {
        newObject.users.canEditDataAccess = true;
        newObject.users.rolesEditableForDataAccess.push('ACQUIRER_USER');
        break;
      }

      case 'EDIT_ACQUIRER_ACCOUNT_ADMIN_DATA_ACCESS': {
        newObject.users.canEditDataAccess = true;
        newObject.users.rolesEditableForDataAccess.push('ACQUIRER_ACCOUNT_ADMIN');
        break;
      }

      case 'ACTIVATE_AND_DEACTIVATE_MERCHANT_USERS': {
        newObject.users.canActivateAndDeactivate = true;
        newObject.users.rolesActivatable.push('MERCHANT_USER');
        break;
      }

      case 'ACTIVATE_AND_DEACTIVATE_MERCHANT_ACCOUNT_ADMIN': {
        newObject.users.canActivateAndDeactivate = true;
        newObject.users.rolesActivatable.push('MERCHANT_ACCOUNT_ADMINISTRATOR');
        break;
      }

      case 'ACTIVATE_AND_DEACTIVATE_GP_EMPLOYEE': {
        newObject.users.canActivateAndDeactivate = true;
        newObject.users.rolesActivatable.push('GLOBAL_PAYMENTS_EMPLOYEE');
        break;
      }

      case 'ACTIVATE_AND_DEACTIVATE_GP_REGIONAL_PM': {
        newObject.users.canActivateAndDeactivate = true;
        newObject.users.rolesActivatable.push('GLOBAL_PAYMENTS_REGIONAL_PM');
        break;
      }

      case 'ACTIVATE_AND_DEACTIVATE_GP_WORLDWIDE_PM': {
        newObject.users.canActivateAndDeactivate = true;
        newObject.users.rolesActivatable.push('GLOBAL_PAYMENTS_WORLDWIDE_PM');
        break;
      }

      case 'ACTIVATE_AND_DEACTIVATE_GP_TECH_SUPPORT_ADMIN': {
        newObject.users.canActivateAndDeactivate = true;
        newObject.users.rolesActivatable.push('GLOBAL_PAYMENTS_TECH_SUPPORT_ADMIN');
        break;
      }

      case 'ACTIVATE_AND_DEACTIVATE_GP_CUSTOMER_SERVICE': {
        newObject.users.canActivateAndDeactivate = true;
        newObject.users.rolesActivatable.push('GLOBAL_PAYMENTS_CUSTOMER_SERVICE');
        break;
      }

      case 'ACTIVATE_AND_DEACTIVATE_GP_MASTERFILE_ANALYST': {
        newObject.users.canActivateAndDeactivate = true;
        newObject.users.rolesActivatable.push('GLOBAL_PAYMENTS_MASTERFILE_ANALYST');
        break;
      }

      case 'ACTIVATE_AND_DEACTIVATE_ACQUIRER_USER': {
        newObject.users.canActivateAndDeactivate = true;
        newObject.users.rolesActivatable.push('ACQUIRER_USER');
        break;
      }

      case 'ACTIVATE_AND_DEACTIVATE_ACQUIRER_ACCOUNT_ADMIN': {
        newObject.users.canActivateAndDeactivate = true;
        newObject.users.rolesActivatable.push('ACQUIRER_ACCOUNT_ADMIN');
        break;
      }

      case 'VIEW_LOCATIONS_MIDS_AND_DATA_HIERARCHY': {
        newObject.merchants.canView = true;
        break;
      }

      case 'REGISTER_MID': {
        newObject.merchants.canRegister = true;
        break;
      }

      case 'EDIT_MID_INFORMATION': {
        newObject.merchants.canEdit = true;
        break;
      }

      case 'CAN_OWN_MERCHANTS': {
        newObject.merchants.canOwnMerchants = true;
        break;
      }

      case 'CAN_TRANSFER_OWNERSHIP': {
        newObject.merchants.canTransferOwnership = true;
        break;
      }

      case 'CAN_VIEW_PRODUCT_SELECTION': {
        newObject.merchants.canViewProductSelection = true;
        break;
      }

      case 'CAN_UPDATE_PRODUCT_PRICING': {
        newObject.merchants.canUpdateProductPricing = true;
        break;
      }

      case 'VIEW_MESSAGES': {
        newObject.messages.canView = true;
        break;
      }

      case 'CAN_DRAFT_MESSAGES': {
        newObject.messages.canDraft = true;
        break;
      }

      case 'APPROVE_AND_SEND_MESSAGES': {
        newObject.messages.canApproveAndSend = true;
        break;
      }

      case 'CAN_VIEW_TRANSACTION_SEARCH': {
        newObject.transactions.canSearch = true;
        break;
      }

      case 'CAN_VIEW_FULL_CREDIT_CARD_NUMBER': {
        newObject.creditCardNumber.canViewFullNumber = true;
        break;
      }

      case 'CAN_GIVE_PERMISSION_TO_VIEW_FULL_CREDIT_CARD_NUMBER': {
        newObject.creditCardNumber.canGivePermissionToViewFullNumber = true;
        break;
      }

      case 'VIEW_STATEMENTS': {
        newObject.statements.canView = true;
        break;
      }

      case 'CAN_VIEW_REPORTS': {
        newObject.reports.canView = true;
        break;
      }

      case 'CAN_EXPORT_REPORTS': {
        newObject.reports.canExport = true;
        break;
      }

      case 'CAN_EXPORT_REPORTS_WITH_FULL_CARD_NUMBER': {
        newObject.reports.canExportWithFullCardNumber = true;
        break;
      }

      case 'CAN_VIEW_CUSTOM_REPORTS': {
        newObject.reports.canViewCustomReports = true;
        break;
      }

      case 'CAN_CREATE_CUSTOM_REPORTS': {
        newObject.reports.canCreateCustomReports = true;
        break;
      }

      case 'CAN_SAVE_SHARED_REPORT_AS_COPY': {
        newObject.reports.canSaveSharedReportAsCopy = true;
        break;
      }

      case 'CAN_MODIFY_SAVED_COPY_OF_SHARED_REPORT': {
        newObject.reports.canModifySavedCopyOfSharedReport = true;
        break;
      }

      case 'CAN_EDIT_CUSTOM_REPORTS': {
        newObject.reports.canEditCustomReports = true;
        break;
      }

      case 'CAN_DELETE_CUSTOM_REPORTS': {
        newObject.reports.canDeleteCustomReports = true;
        break;
      }

      case 'CAN_SHARE_CUSTOM_REPORTS': {
        newObject.reports.canShareCustomReports = true;
        break;
      }

      case 'CAN_VIEW_SCHEDULED_REPORTS': {
        newObject.reports.canViewScheduledReports = true;
        break;
      }

      case 'CAN_SCHEDULE_REPORTS': {
        newObject.reports.canSchedule = true;
        break;
      }

      case 'CAN_EDIT_REPORT_SCHEDULE': {
        newObject.reports.canEditSchedule = true;
        break;
      }

      case 'CAN_DELETE_SCHEDULED_REPORTS': {
        newObject.reports.canDeleteScheduledReports = true;
        break;
      }

      case 'CAN_PAUSE_SCHEDULED_REPORTS': {
        newObject.reports.canPauseScheduledReports = true;
        break;
      }

      case 'CAN_SCHEDULE_REPORTS_FOR_OTHERS': {
        newObject.reports.canScheduleForOthers = true;
        break;
      }

      case 'EDIT_PERSONAL_INFORMATION': {
        newObject.personalInformation.canEdit = true;
        break;
      }

      case 'CAN_LOG_IN': {
        newObject.login.canLogIn = true;
        break;
      }

      default: {
        newObject[permission.key] = 'unknown';
        break;
      }
    }

    return newObject;
  }, parsedPermissionStructure);
}

export function canEditRole(parsedPermissions: Object, roleKey: string): boolean {
  return parsedPermissions.users.canEditRole && roleIsInList(parsedPermissions.users.rolesEditableForRole, roleKey);
}

export function canEditDataAccess(parsedPermissions: Object, roleKey: string): boolean {
  return parsedPermissions.users.canEditDataAccess && roleIsInList(parsedPermissions.users.rolesEditableForDataAccess, roleKey);
}

export function canEditOptionalPermissions(parsedPermissions: Object, roleKey: string): boolean {
  return parsedPermissions.users.canEditOptionalPermissions && roleIsInList(parsedPermissions.users.rolesEditableForOptionalPermissions, roleKey);
}

export function canActivateAndDeactivateRole(parsedPermissions: Object, roleKey: string): boolean {
  return parsedPermissions.users.canActivateAndDeactivate && roleIsInList(parsedPermissions.users.rolesActivatable, roleKey);
}

/**
 * internal helper function to check whether a role is in the given list
 */
function roleIsInList(roleList: Array<Object> = [], roleKey: string): boolean {
  if (roleList && roleList.includes) {
    return roleList.includes(roleKey);
  } else {
    return false;
  }
}

export function getAdminSectionAccess(permissions: Object = {}): boolean {
  if (permissions.users) {
    const userAdminPermissions = [
      'canView',
      'canCreate',
      'canEditRole',
      'canEditOptionalPermissions',
      'canEditDataAccess',
      'canActivateAndDeactivate',
    ];

    const hasAdminThroughUser = userAdminPermissions.some((userPermission) => {
      return permissions.users[userPermission];
    });

    if (hasAdminThroughUser) {
      return true;
    }
  }

  if (permissions.merchants) {
    const merchantAdminPermissions = [
      'canView',
      'canRegister',
      'canEdit',
      'canOwnMerchants',
      'canTransferOwnership',
      'canViewProductSelection',
      'canUpdateProductPricing',
    ];

    const hasAdminThroughMerchant = merchantAdminPermissions.some((merchantPermission) => {
      return permissions.merchants[merchantPermission];
    });

    if (hasAdminThroughMerchant) {
      return true;
    }
  }

  return false;
}

export function getParsedPermissionStructure(): Object {
  return {
    users: {
      canView: false,
      rolesViewable: [],
      canCreate: false,
      rolesCreatable: [],
      canEditRole: false,
      rolesEditableForRole: [],
      canEditOptionalPermissions: false,
      rolesEditableForOptionalPermissions: [],
      canEditDataAccess: false,
      rolesEditableForDataAccess: [],
      canActivateAndDeactivate: false,
      rolesActivatable: [],
    },
    merchants: {
      canView: false,
      canRegister: false,
      canEdit: false,
      canOwnMerchants: false,
      canTransferOwnership: false,
      canViewProductSelection: false,
      canUpdateProductPricing: false,
    },
    messages: {
      canView: false,
      canDraft: false,
      canApproveAndSend: false,
    },
    transactions: {
      canSearch: false,
    },
    creditCardNumber: {
      canViewFullNumber: false,
      canGivePermissionToViewFullNumber: false,
    },
    statements: {
      canView: false,
    },
    reports: {
      canView: false,
      canExport: false,
      canExportWithFullCardNumber: false,
      canViewCustomReports: false,
      canCreateCustomReports: false,
      canSaveSharedReportAsCopy: false,
      canModifySavedCopyOfSharedReport: false,
      canEditCustomReports: false,
      canDeleteCustomReports: false,
      canShareCustomReports: false,
      canViewScheduledReports: false,
      canSchedule: false,
      canEditSchedule: false,
      canDeleteScheduledReports: false,
      canPauseScheduledReports: false,
      canScheduleForOthers: false,
    },
    personalInformation: {
      canEdit: false,
    },
    login: {
      canLogIn: false,
    },
  };
}

export default {
  getParsedPermissions,
  canEditRole,
  canEditDataAccess,
  canEditOptionalPermissions,
  canActivateAndDeactivateRole,
  getAdminSectionAccess,
  getParsedPermissionStructure,
};
