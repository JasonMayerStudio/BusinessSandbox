const compareName = (a, b) => {
  if (a.name < b.name) { return -1; }
  if (a.name > b.name) { return 1; }
  return 0;
};

export function getRolesForDropdown(rolesPermissions = []) {
  return rolesPermissions
    .map((role) => {
      return Object.assign({}, role, {
        value: role.id,
        text: role.name.replace(/_/g, ' '),
      });
    })
    .sort(compareName);
}

export default {
  getRolesForDropdown,
};
