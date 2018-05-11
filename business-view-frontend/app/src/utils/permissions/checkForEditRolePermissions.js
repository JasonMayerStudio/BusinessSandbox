import uniq from 'lodash/uniq';

export function checkForEditRolePermissions(permissions, roleList) {
  const rolesToPopulate = [];
  for (let i = 0; i < permissions.length; i += 1) {
    const permission = permissions[i];

    if (permission.key.indexOf('EDIT') > -1 && permission.key.indexOf('ROLE') > -1) {
      const newPermission = Object.assign({}, permission);
      const roleType = newPermission.key.slice(5, newPermission.key.length);
      const length = roleType.length;
      const finalRoleType = roleType.slice(0, length - 5);

      const returnGpRoleType = finalRoleType.indexOf('GP') > -1 ?
                               finalRoleType.replace('GP', 'GLOBAL_PAYMENTS') :
                               finalRoleType;
      let returnAdminRoleType = returnGpRoleType.indexOf('ACCOUNT') > -1 ?
                                returnGpRoleType.replace('ADMIN', 'ADMINISTRATOR') :
                                returnGpRoleType;

      const returnAcquirerAdminRoleType = returnAdminRoleType.indexOf('ACQUIRER_ACCOUNT') > -1 ?
                                          returnAdminRoleType += '_ADMIN' :
                                          returnAdminRoleType;

      rolesToPopulate.push(returnAcquirerAdminRoleType);
    }
  }

  const uniqueRoles = uniq(rolesToPopulate);

  const newRoles = roleList.filter((role) => {
    return uniqueRoles.indexOf(role.key) > -1;
  });

  return newRoles;
}

export default {
  checkForEditRolePermissions,
};
