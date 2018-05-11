import counterpart from 'counterpart';
import { initCommonTranslate } from 'Utils/languages';

export function statusMap(status) {
  initCommonTranslate();

  const list = {
    ACTIVE: {
      value: counterpart('globalTranslate.admin.activated'),
    },
    ACTIVATED: {
      value: counterpart('globalTranslate.admin.activated'),
    },
    DEACTIVATED: {
      value: counterpart('globalTranslate.admin.deactivated'),
    },
    INACTIVE: {
      value: counterpart('globalTranslate.admin.deactivated'),
    },
    DELETED: {
      value: counterpart('globalTranslate.admin.deactivated'),
    },
    PENDING: {
      value: counterpart('globalTranslate.admin.pendingInvite'),
    },
  };

  return list[status.toUpperCase()].value;
}

export default statusMap;
