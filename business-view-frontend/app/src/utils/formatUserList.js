import badgeStatusMap from '../containers/ViewUserList/data/statusMap';
import mapStatusText from '../containers/ViewUserList/data/mapStatusText';

export function formatUsersForTable(users = []) {
  const getBadge = (status) => {
    return badgeStatusMap(status);
  };

  const mapStatus = (status) => {
    return mapStatusText(status);
  };

  const byAscending = (a, b) => {
    return a.userId - b.userId;
  };

  return users.sort(byAscending).map((user) => {
    return {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      name: `${user.firstName} ${user.lastName}`,
      roleName: user.role,
      role: user.role,
      roleKey: user.roleKey,
      statusData: getBadge(user.statusKey),
      status: mapStatus(user.statusKey),
      userId: user.userId,
      acquirer: 'Acquirer Name',
      lastLoginDate: user.lastLoginDate,
    };
  });
}

export default {
  formatUsersForTable,
};
