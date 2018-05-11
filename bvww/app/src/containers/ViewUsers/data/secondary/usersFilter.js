import counterpart from 'counterpart';
import { initCommonTranslate } from 'Utils/languages';

export function merchantUserList() {
  initCommonTranslate();

  const list = [
    {
      value: 'status',
      data: [
        {
          value: 'clear',
          text: counterpart('globalTranslate.admin.clearResults'),
        },
        {
          value: 'activated',
          text: counterpart('globalTranslate.admin.activated'),
        },
        {
          value: 'deactivated',
          text: counterpart('globalTranslate.admin.deactivated'),
        },
        {
          value: 'pending-invite',
          text: counterpart('globalTranslate.admin.pendingInvite'),
        },
      ],
    },
    {
      value: 'role',
      data: [
        {
          value: 'clear',
          text: counterpart('globalTranslate.admin.clearResults'),
        },
      ],
    },
    {
      value: 'acquirer',
      data: [
        {
          value: 'clear',
          text: counterpart('globalTranslate.admin.clearResults'),
        },
        {
          value: 'acquirer-1',
          text: counterpart('globalTranslate.admin.acquirerName'),
        },
        {
          value: 'acquirer-2',
          text: counterpart('globalTranslate.admin.acquirerName'),
        },
        {
          value: 'acquirer-3',
          text: counterpart('globalTranslate.admin.acquirerName'),
        },
      ],
    },
  ];

  return list;
}

export default merchantUserList;
