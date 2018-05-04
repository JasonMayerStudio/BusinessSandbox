export function checkAddUserPermissions(permissions) {
  let addUserPermissions = false;

  permissions.map((permission) => {
    const createMerchantUser = Object.values(permission).indexOf('CREATE_MERCHANT_USER') > -1;
    const createMerchantAccountAdmin = Object.values(permission).indexOf('CREATE_MERCHANT_ACCOUNT_ADMIN') > -1;
    const createGpEmployee = Object.values(permission).indexOf('CREATE_GP_EMPLOYEE') > -1;
    const createGpRegionalPm = Object.values(permission).indexOf('CREATE_GP_REGIONAL_PM') > -1;
    const createGpWorldwidePm = Object.values(permission).indexOf('CREATE_GP_WORLDWIDE_PM') > -1;
    const createGpCustomerService = Object.values(permission).indexOf('CREATE_GP_CUSTOMER_SERVICE') > -1;
    const createGpMasterfileAnalyst = Object.values(permission).indexOf('CREATE_GP_MASTERFILE_ANALYST') > -1;
    const createGpTechSupportAdmin = Object.values(permission).indexOf('CREATE_GP_TECH_SUPPORT_ADMIN') > -1;
    const createAcquirerUser = Object.values(permission).indexOf('CREATE_ACQUIRER_USER') > -1;
    const createAcquirerAccountAdmin = Object.values(permission).indexOf('CREATE_ACQUIRER_ACCOUNT_ADMIN') > -1;

    if (createMerchantUser) {
      addUserPermissions = true;
    }

    if (createMerchantAccountAdmin) {
      addUserPermissions = true;
    }

    if (createGpEmployee) {
      addUserPermissions = true;
    }

    if (createGpRegionalPm) {
      addUserPermissions = true;
    }

    if (createGpWorldwidePm) {
      addUserPermissions = true;
    }

    if (createGpCustomerService) {
      addUserPermissions = true;
    }

    if (createGpMasterfileAnalyst) {
      addUserPermissions = true;
    }

    if (createGpTechSupportAdmin) {
      addUserPermissions = true;
    }

    if (createAcquirerUser) {
      addUserPermissions = true;
    }

    if (createAcquirerAccountAdmin) {
      addUserPermissions = true;
    }

    return false;
  });

  return addUserPermissions;
}

export default {
  checkAddUserPermissions,
};
