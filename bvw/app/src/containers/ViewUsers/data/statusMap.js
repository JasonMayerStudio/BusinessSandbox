import counterpart from 'counterpart';
import { initCommonTranslate } from 'Utils/languages';

export function statusMap(status, language) {
  if (language) counterpart.setLocale(language);
  initCommonTranslate();

  const list = {
    ACTIVE: {
      value: 'activated',
      text: counterpart('globalTranslate.admin.activated'),
    },
    ACTIVATED: {
      value: 'activated',
      text: counterpart('globalTranslate.admin.activated'),
    },
    DEACTIVATED: {
      value: 'deactivated',
      text: counterpart('globalTranslate.admin.deactivated'),
    },
    INACTIVE: {
      value: 'deactivated',
      text: counterpart('globalTranslate.admin.deactivated'),
    },
    DELETED: {
      value: 'deactivated',
      text: counterpart('globalTranslate.admin.deactivated'),
    },
    PENDING: {
      value: 'pending-invite',
      text: counterpart('globalTranslate.admin.pendingInvite'),
    },
  };

  return list[status.toUpperCase()];
}

export default statusMap;
