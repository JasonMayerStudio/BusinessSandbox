const statusUnmap = {
  activated: 'ACTIVE',
  deactivated: 'INACTIVE',
  'pending-invite': 'PENDING',
};

export function revertStatusText(status) {
  // eslint-disable-line class-methods-use-this
  return statusUnmap[status];
}

export function retrieveFirstLetter(name) {
  return name ? name[0].toUpperCase() : '';
}

export default {
  revertStatusText,
  retrieveFirstLetter,
};
