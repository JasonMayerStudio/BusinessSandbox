import counterpart from 'counterpart';
import { initCommonTranslate } from 'Utils/languages';

export function filterChoiceList() {
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
  ];

  return list;
}

export default filterChoiceList;
