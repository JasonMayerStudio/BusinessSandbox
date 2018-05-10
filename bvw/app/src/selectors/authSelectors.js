const compareName = (a, b) => {
  if (a.name < b.name) { return -1; }
  if (a.name > b.name) { return 1; }
  return 0;
};

export function getAuthRole(auth) {
  let authRole = null;

  if (auth &&
    auth.session &&
    auth.session.user) {
    const permissions = auth.session.user.role.permissions.sort(compareName);
    authRole = { ...auth.session.user.role, permissions };
  }
  return authRole;
}

export function isAuthenticated(auth) {
  return (auth.session &&
    auth.session.sessionToken &&
    auth.session.user)
    ? true  // eslint-disable-line no-unneeded-ternary
    : false;
}

export default {
  getAuthRole,
  isAuthenticated,
};
