export function parseRoleKeys(roleKey) {
  const parseAdmin = roleKey.indexOf('ADMINISTRATOR') > -1 ?
                     roleKey.replace('ADMINISTRATOR', 'ADMIN') :
                     roleKey;

  const parseGp = parseAdmin.indexOf('GLOBAL_PAYMENTS') > -1 ?
                  parseAdmin.replace('GLOBAL_PAYMENTS', 'GP') :
                  parseAdmin;

  return parseGp;
}

export default {
  parseRoleKeys,
};
