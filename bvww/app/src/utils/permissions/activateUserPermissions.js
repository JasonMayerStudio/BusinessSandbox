export function checkActivateUserPermissions(permissions) {
  const activateUserPermissions = [];

  const activateMerchantPermissions = {
    role: 'MERCHANT_USER',
    hasPermission: false,
  };

  const activateMerchantAccountAdminPermissions = {
    role: 'MERCHANT_ACCOUNT_ADMINISTRATOR',
    hasPermission: false,
  };

  const activateGpEmployeePermissions = {
    role: 'GLOBAL_PAYMENTS_EMPLOYEE',
    hasPermission: false,
  };

  const activateGpRegionalPmPermissions = {
    role: 'GLOBAL_PAYMENTS_REGIONAL_PM',
    hasPermission: false,
  };

  const activateGpWorldwidePmPermissions = {
    role: 'GLOBAL_PAYMENTS_WORLDWIDE_PM',
    hasPermission: false,
  };

  const activateGpCustomerServicePermissions = {
    role: 'GLOBAL_PAYMENTS_CUSTOMER_SERVICE',
    hasPermission: false,
  };

  const activateGpMasterfileAnalystPermissions = {
    role: 'GLOBAL_PAYMENTS_MASTERFILE_ANALYST',
    hasPermission: false,
  };

  const activateGpTechSupportAdminPermissions = {
    role: 'GLOBAL_PAYMENTS_TECH_SUPPORT_ADMIN',
    hasPermission: false,
  };

  const activateAcquirerUserPermissions = {
    role: 'ACQUIRER_USER',
    hasPermission: false,
  };

  const activateAcquirerAccountAdminPermissions = {
    role: 'ACQUIRER_ACCOUNT_ADMIN',
    hasPermission: false,
  };


  permissions.map((permission) => {
    const activateMerchantUser = Object.values(permission).indexOf('ACTIVATE_AND_DEACTIVATE_MERCHANT_USERS') > -1;
    const activateMerchantAccountAdmin = Object.values(permission).indexOf('ACTIVATE_AND_DEACTIVATE_MERCHANT_ACCOUNT_ADMIN') > -1;
    const activateGpEmployee = Object.values(permission).indexOf('ACTIVATE_AND_DEACTIVATE_GP_EMPLOYEE') > -1;
    const activateGpRegionalPm = Object.values(permission).indexOf('ACTIVATE_AND_DEACTIVATE_GP_REGIONAL_PM') > -1;
    const activateGpWorldwidePm = Object.values(permission).indexOf('ACTIVATE_AND_DEACTIVATE_GP_WORLDWIDE_PM') > -1;
    const activateGpCustomerService = Object.values(permission).indexOf('ACTIVATE_AND_DEACTIVATE_GP_CUSTOMER_SERVICE') > -1;
    const activateGpMasterfileAnalyst = Object.values(permission).indexOf('ACTIVATE_AND_DEACTIVATE_GP_MASTERFILE_ANALYST') > -1;
    const activateGpTechSupportAdmin = Object.values(permission).indexOf('ACTIVATE_AND_DEACTIVATE_GP_TECH_SUPPORT_ADMIN') > -1;
    const activateAcquirerUser = Object.values(permission).indexOf('ACTIVATE_AND_DEACTIVATE_ACQUIRER_USER') > -1;
    const activateAcquirerAccountAdmin = Object.values(permission).indexOf('ACTIVATE_AND_DEACTIVATE_ACQUIRER_ACCOUNT_ADMIN') > -1;

    if (activateMerchantUser) {
      activateMerchantPermissions.hasPermission = true;
    }

    if (activateMerchantAccountAdmin) {
      activateMerchantAccountAdminPermissions.hasPermission = true;
    }

    if (activateGpEmployee) {
      activateGpEmployeePermissions.hasPermission = true;
    }

    if (activateGpRegionalPm) {
      activateGpRegionalPmPermissions.hasPermission = true;
    }

    if (activateGpWorldwidePm) {
      activateGpWorldwidePmPermissions.hasPermission = true;
    }

    if (activateGpCustomerService) {
      activateGpCustomerServicePermissions.hasPermission = true;
    }

    if (activateGpMasterfileAnalyst) {
      activateGpMasterfileAnalystPermissions.hasPermission = true;
    }

    if (activateGpTechSupportAdmin) {
      activateGpTechSupportAdminPermissions.hasPermission = true;
    }

    if (activateAcquirerUser) {
      activateAcquirerUserPermissions.hasPermission = true;
    }

    if (activateAcquirerAccountAdmin) {
      activateAcquirerAccountAdminPermissions.hasPermission = true;
    }


    return false;
  });

  activateUserPermissions.push(activateMerchantPermissions,
    activateMerchantAccountAdminPermissions,
    activateGpEmployeePermissions,
    activateGpRegionalPmPermissions,
    activateGpWorldwidePmPermissions,
    activateGpCustomerServicePermissions,
    activateGpMasterfileAnalystPermissions,
    activateGpTechSupportAdminPermissions,
    activateAcquirerUserPermissions,
    activateAcquirerAccountAdminPermissions);

  return activateUserPermissions;
}

export default {
  checkActivateUserPermissions,
};
