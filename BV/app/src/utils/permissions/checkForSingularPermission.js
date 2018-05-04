export function checkForSingularPermission(permissions, permissionKey) {
  let checkedPermission = false;

  permissions.map((permission) => {
    const permissionMatch = Object.values(permission).indexOf(permissionKey) > -1;

    if (permissionMatch) {
      checkedPermission = true;
    }

    return false;
  });
  return checkedPermission;
}

export default {
  checkForSingularPermission,
};
