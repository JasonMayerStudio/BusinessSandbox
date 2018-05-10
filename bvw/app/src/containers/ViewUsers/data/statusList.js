import counterpart from 'counterpart';
import { initCommonTranslate } from 'Utils/languages';

export function statusList() {
  initCommonTranslate();

  const list = [
    {
      value: 'activated',
      text: counterpart('globalTranslate.admin.activated'),
    },
    {
      value: 'deactivated',
      text: counterpart('globalTranslate.admin.deactivated'),
    },
  ];

  return list;
}

export default statusList;
