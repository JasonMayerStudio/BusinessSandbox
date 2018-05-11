import counterpart from 'counterpart';
import { initCommonTranslate } from 'Utils/languages';

export function navItems() {
  initCommonTranslate();

  const translatedNavItems = [
    {
      title: counterpart('globalTranslate.navigation.dashboard'),
      key: null,
      slug: 'dashboard',
      children: [],
    },
    {
      title: counterpart('globalTranslate.navigation.reports'),
      hideSubNavOnFlag: 'isQa2',
      key: 'reports',
      slug: 'reports',
      // @TODO These pathnames need to be dynamic. This should be ok for now, as reports may not have a subnav
      children: [
        {
          path: '/reports/6',
          title: counterpart('globalTranslate.navigation.authorizations'),
          id: 1,
        },
        {
          path: '/reports/7',
          title: counterpart('globalTranslate.navigation.batches'),
          id: 2,
        },
        {
          path: '/reports/8',
          title: counterpart('globalTranslate.navigation.settledTransactions'),
          id: 3,
        },
        {
          path: '/reports/9',
          title: counterpart('globalTranslate.navigation.chargebacks'),
          id: 4,
        },
        {
          path: '/reports/report-builder',
          title: counterpart('globalTranslate.navigation.customReports'),
          id: 5,
        },
        {
          path: '/reports/7',
          title: counterpart('globalTranslate.navigation.euTransaction'),
          id: 6,
        },
      ],
    },
    {
      title: counterpart('globalTranslate.navigation.transactions'),
      key: null,
      slug: 'transaction-finder',
      children: [],
    },
    {
      title: counterpart('globalTranslate.navigation.statements'),
      key: null,
      slug: 'statements',
      children: [],
    },
    {
      title: counterpart('globalTranslate.navigation.messageCenter'),
      hideSubNavOnFlag: 'isQa2',
      key: 'messages',
      slug: 'messages',
      children: [
        {
          path: '/messages/notifications',
          title: counterpart('globalTranslate.navigation.notifications'),
          id: 1,
        },
        {
          hideOnFlag: 'isQa2',
          path: '/messages/statements',
          title: counterpart('globalTranslate.navigation.statements'),
          id: 2,
        },
        {
          hideOnFlag: 'isQa2',
          path: '/messages/documents',
          title: counterpart('globalTranslate.navigation.documents'),
          id: 3,
        },
        {
          hideOnFlag: 'isQa2',
          path: '/messages/images',
          title: counterpart('globalTranslate.navigation.images'),
          id: 4,
        },
      ],
    },
    {
      title: counterpart('globalTranslate.navigation.locationsAndEquipment'),
      key: 'locations',
      slug: 'locations',
      children: [
        {
          path: '/locations/management',
          title: counterpart('globalTranslate.navigation.locationManagement'),
          id: 1,
        },
        {
          path: '/locations/equipment',
          title: counterpart('globalTranslate.navigation.equipment'),
          id: 2,
        },
      ],
    },
    {
      title: counterpart('globalTranslate.navigation.locations'),
      key: 'managelocations',
      slug: 'managelocations',
      children: [
        {
          path: '/managelocations',
          title: counterpart('globalTranslate.navigation.locationManagement'),
          id: 1,
        },
      ],
    },
    {
      title: counterpart('globalTranslate.navigation.admin'),
      hideSubNavOnFlag: 'isQa2',
      key: 'admin',
      slug: 'admin',
      children: [
        {
          path: '/admin/user-management',
          title: counterpart('globalTranslate.navigation.userManagement'),
          id: 1,
        },
        {
          hideOnFlag: 'isQa2',
          path: '/admin/manage-notifications',
          title: counterpart('globalTranslate.navigation.manageNotifications'),
          id: 2,
        },
        {
          hideOnFlag: 'isQa2',
          path: '/admin/banking-details',
          title: counterpart('globalTranslate.navigation.bankingDetails'),
          id: 3,
        },
        {
          hideOnFlag: 'isQa2',
          path: '/admin/add-statement-notice',
          title: counterpart('globalTranslate.navigation.addStatementNotice'),
          id: 4,
        },
      ],
    },
  ];

  return translatedNavItems;
}

export default navItems;
