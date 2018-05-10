import compose from 'Utils/functionalUtils';
import badgeStatusMap from '../containers/ViewUsers/data/statusMap';
import mapStatusText from '../containers/ViewUsers/data/mapStatusText';

export function getUsersForTable(users = [], language) {
  const byAscending = (a, b) => {
    return a.userId - b.userId;
  };

  return users.sort(byAscending).map((user) => {
    return normalizeUser(user, language);
  });
}

export function normalizeUser(user, language) {
  const getBadge = (status) => {
    return badgeStatusMap(status, language);
  };

  const mapStatus = (status) => {
    return mapStatusText(status);
  };

  const mapMerchants = (merchants) => { // eslint-disable-line consistent-return
    if (merchants !== undefined) {
      return merchants.map((merchant) => {
        const newMerchant = Object.assign({}, merchant);

        const csvAddressParts = [
          'address1',
          'address2',
          'city',
          'state',
        ].map((part) => {
          return merchant[part];
        }).filter(Boolean);  // remove missing address fields

        let fullAddress = csvAddressParts.join(', ');
        fullAddress = (merchant.postalCode)
          ? `${fullAddress} ${merchant.postalCode}`
          : fullAddress;
        newMerchant.fullAddress = fullAddress;
        newMerchant.dbaName = merchant.businessName;
        newMerchant.merchant_id = merchant.merchantNumber;
        newMerchant.hasAccess = false;

        return newMerchant;
      });
    }
  };

  const removeDuplicatePermissions = (permissions) => {
    if (permissions) {
      return permissions.filter((obj, pos, arr) => {
        return arr.map((mapObj) => mapObj.key).indexOf(obj.key) === pos;
      });
    } return null;
  };

  const compareName = (a, b) => {
    if (a.name < b.name) { return -1; }
    if (a.name > b.name) { return 1; }
    return 0;
  };

  const sortUserRolePermissions = (permissions) => {
    if (permissions) {
      return permissions.sort(compareName);
    }
    return null;
  };

  const getUserRolePermissions = (usr) => {
    const rolePermissions = usr.role.permissions;
    return typeof usr.role === 'object' && rolePermissions !== undefined ?
      sortUserRolePermissions(removeDuplicatePermissions(rolePermissions)) : null;
  };

  const getPermissions = (usr) => {
    const permissions = compose(
      (perms) => sortUserRolePermissions(perms),
      (perms) => removeDuplicatePermissions(perms),
      (auser) => getUserRolePermissions(auser),
    );
    return permissions(usr);
  };

  return {
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    name: `${user.firstName} ${user.lastName}`,
    role: {},
    roleName: user.roleName || user.role.name || user.role,
    roleKey: typeof user.role === 'object' && user.role.key !== undefined ? user.role.key : user.roleKey,
    permissions: getPermissions(user),
    statusData: getBadge(user.statusKey),
    status: mapStatus(user.statusKey),
    statusKey: user.statusKey ? user.statusKey : user.status,
    userId: user.userId,
    acquirer: 'Acquirer Name',
    merchants: mapMerchants(user.merchants),
    dataAccess: user.dataAccess || null,
    lastLoginDate: user.lastLoginDate,
    primaryMerchantId: user.primaryMerchantId,
  };
}

export function findUserById(users, id) {
  return users.find((user) => {
    return user.userId === parseInt(id, 10);
  }) || { role: {} };
}

export function getReportLimits(user) {
  return {
    isMerchant: checkForMerchantUser(user.role),
    maxMonthsAccess: user.maxMonths,
    isMerchantAdmin: user.role.key.toLowerCase().includes('merchant_account_admin'),
    isMerchantUser: user.role.key.toLowerCase().includes('merchant_user'),
  };
}

export function checkForAcquirerUser(userRole) {
  return userRole.key.toLowerCase().includes('acquirer');
}

export function checkForMerchantUser(userRole) {
  return userRole.key.toLowerCase().includes('merchant');
}

export default {
  getUsersForTable,
  normalizeUser,
  findUserById,
  getReportLimits,
  checkForAcquirerUser,
  checkForMerchantUser,
};
