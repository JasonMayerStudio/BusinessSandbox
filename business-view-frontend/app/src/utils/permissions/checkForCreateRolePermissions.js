import uniq from 'lodash/uniq';

export function checkForCreateRolePermissions(permissions, roleList) {
  const rolesToPopulate = [];
  for (let i = 0; i < permissions.length; i += 1) {
    const permission = permissions[i];

    if (permission.key.indexOf('CREATE') > -1) {
      const newPermission = Object.assign({}, permission);
      const roleType = newPermission.key.slice(7, permission.key.length);
      const returnGpRoleType = roleType.indexOf('GP') > -1 ?
                               roleType.replace('GP', 'GLOBAL_PAYMENTS') :
                               roleType;

      const returnAdminRoleType = returnGpRoleType.indexOf('ADMIN') > 1 &&
                                  returnGpRoleType.indexOf('GLOBAL') === -1 &&
                                  returnGpRoleType.indexOf('ACQUIRER') === -1 ?
                                  returnGpRoleType.replace('ADMIN', 'ADMINISTRATOR') :
                                  returnGpRoleType;

      rolesToPopulate.push(returnAdminRoleType);
    }
  }

  const uniqueRoles = uniq(rolesToPopulate);

  const newRoles = roleList.filter((role) => {
    return uniqueRoles.indexOf(role.key) > -1;
  });

  return newRoles;
}

export default {
  checkForCreateRolePermissions,
};
