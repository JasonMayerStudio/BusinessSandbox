export function checkForAdminPermissions(permissions) {
  let hasPermissions = false;
  permissions.map((permission) => {
    if (permission.key.indexOf('VIEW') > -1 &&
        permission.key.indexOf('PRODUCT') === -1 &&
        permission.key.indexOf('MESSAGES') === -1 &&
        permission.key.indexOf('STATEMENTS') === -1 &&
        permission.key.indexOf('TRANSACTION') === -1 &&
        permission.key.indexOf('REPORT') === -1 &&
        permission.key.indexOf('CREDIT') === -1) {
      hasPermissions = true;
    }
    return false;
  });
  return hasPermissions;
}

export default {
  checkForAdminPermissions,
};
