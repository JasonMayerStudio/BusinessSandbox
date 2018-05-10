import counterpart from 'counterpart';
import { initCommonTranslate } from 'Utils/languages';

export function filterList() {
  initCommonTranslate();

  const list = [
    {
      value: 'status',
      text: `${counterpart('globalTranslate.admin.filterBy')} <strong>${counterpart('globalTranslate.admin.status')}</strong>`,
    },
    {
      value: 'role',
      text: `${counterpart('globalTranslate.admin.filterBy')} <strong>${counterpart('globalTranslate.admin.role')}</strong>`,
    },
    {
      value: 'acquirer',
      text: `${counterpart('globalTranslate.admin.filterBy')} <strong>${counterpart('globalTranslate.admin.acquirer')}</strong>`,
    },
    {
      value: 'all',
      text: `${counterpart('globalTranslate.admin.filterBy')} <strong>${counterpart('globalTranslate.admin.all')}</strong>`,
    },
  ];

  return list;
}

export default filterList;
