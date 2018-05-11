import React from 'react';
import PropTypes from 'prop-types';
import counterpart from 'counterpart';

import NavItem from 'Components/nav-item/NavItem.js';

import HomeIcon from 'Components/icons/Home';
import TransactionsIcon from 'Components/icons/TransactionsIcon';
import ReportsIcon from 'Components/icons/ReportsIcon';
import StatementsIcon from 'Components/icons/StatementsIcon';
import MessageIcon from 'Components/icons/MessageIcon';
import AdminIcon from 'Components/icons/AdminIcon';
import LocationIcon from 'Components/icons/LocationIcon';

import {
  getAdminSectionAccess,
} from 'Utils/permissionsUtils';

import { hasHeartlandHierarchyAccess } from 'Utils/dataAccessUtils';

const PrimaryNavigation = (props) => {
  const hasAdminPermissions = getAdminSectionAccess(props.user.parsedPermissions);
  const hasUnreadMessages = props.messages && props.messages.count && props.messages.count.unread > 0;
  const unreadMessages = props.transitionEnded && hasUnreadMessages && <span className="message-count">{props.transitionEnded && props.messages.count.unread}</span>;
  const unreadMessagesCollapsed = props.subNavTriggered && hasUnreadMessages && <span className="message-count message-count-collapsed" />;
  const isHeartlanduser = hasHeartlandHierarchyAccess(props.user.dataAccess);

  return (
    <ul className={props.verticalNavClasses}>
      <NavItem
        triggerSubNav={() => props.triggerSubNav(event)}
        route="/"
        exact
        navActionClasses={props.navActionClasses}
        activeClassName="vertical-nav-action vertical-nav-action-active"
        iconClasses={props.iconClasses}
        icon={<HomeIcon />}
        labelClasses={props.labelClasses}
        navLabel={props.transitionEnded && counterpart('globalTranslate.navigation.home')}
      />
      {props.user.parsedPermissions.reports.canView &&
        <NavItem
          triggerSubNav={() => props.triggerSubNav(event)}
          route="/reports"
          navActionClasses={props.navActionClasses}
          activeClassName="vertical-nav-action vertical-nav-action-active"
          iconClasses={props.iconClasses}
          icon={<ReportsIcon />}
          labelClasses={props.labelClasses}
          navLabel={props.transitionEnded && counterpart('globalTranslate.navigation.reports')}
        />}
      {
        props.user.parsedPermissions.reports.canView &&
        !props.featureFlags.isQa2 &&
        <NavItem
          triggerSubNav={() => props.triggerSubNav(event)}
          route="/old-reports"
          navActionClasses={props.navActionClasses}
          activeClassName="vertical-nav-action vertical-nav-action-active"
          iconClasses={props.iconClasses}
          icon={<ReportsIcon />}
          labelClasses={props.labelClasses}
          navLabel={props.transitionEnded && counterpart('globalTranslate.navigation.oldReports')}
        />
      }
      {props.user.parsedPermissions.transactions.canSearch &&
      <NavItem
        triggerSubNav={() => props.triggerSubNav(event)}
        route="/transaction-finder"
        navActionClasses={props.navActionClasses}
        activeClassName="vertical-nav-action vertical-nav-action-active"
        iconClasses={props.iconClasses}
        icon={<TransactionsIcon />}
        labelClasses={props.labelClasses}
        navLabel={props.transitionEnded && counterpart('globalTranslate.navigation.transactions')}
      />}
      {props.user.parsedPermissions.statements.canView &&
      <NavItem
        triggerSubNav={() => props.triggerSubNav(event)}
        route="/chain-statements"
        navActionClasses={props.navActionClasses}
        activeClassName="vertical-nav-action vertical-nav-action-active"
        iconClasses={props.iconClasses}
        icon={<StatementsIcon />}
        labelClasses={props.labelClasses}
        navLabel={props.transitionEnded && counterpart('globalTranslate.navigation.chainStatements')}
      />}
      {props.user.parsedPermissions.statements.canView &&
        <NavItem
          triggerSubNav={() => props.triggerSubNav(event)}
          route="/statements"
          navActionClasses={props.navActionClasses}
          activeClassName="vertical-nav-action vertical-nav-action-active"
          iconClasses={props.iconClasses}
          icon={<StatementsIcon />}
          labelClasses={props.labelClasses}
          navLabel={props.transitionEnded && counterpart('globalTranslate.navigation.statements')}
        />}
      {props.user.parsedPermissions.messages.canView &&
        <NavItem
          triggerSubNav={() => props.triggerSubNav(event)}
          route="/messages"
          navActionClasses={props.navActionClasses}
          activeClassName="vertical-nav-action vertical-nav-action-active"
          iconClasses={props.iconClasses}
          icon={<MessageIcon />}
          labelClasses={props.labelClasses}
          navLabel={props.transitionEnded && counterpart('globalTranslate.navigation.messageCenter')}
          hasNotification
          returnNotificationCount={unreadMessages}
          returnCollapsedNotification={unreadMessagesCollapsed}
        />}
      {!isHeartlanduser && props.user.dataAccess.length > 0 &&
        <NavItem
          triggerSubNav={() => props.triggerSubNav(event)}
          route="/locations/management"
          navActionClasses={props.navActionClasses}
          activeClassName="vertical-nav-action vertical-nav-action-active"
          iconClasses={props.iconClasses}
          icon={<LocationIcon />}
          labelClasses={props.labelClasses}
          navLabel={props.transitionEnded && counterpart('globalTranslate.navigation.locationsAndEquipment')}
        />}
      {isHeartlanduser && <NavItem
        triggerSubNav={() => props.triggerSubNav(event)}
        route="/managelocations"
        navActionClasses={props.navActionClasses}
        activeClassName="vertical-nav-action vertical-nav-action-active"
        iconClasses={props.iconClasses}
        icon={<LocationIcon />}
        labelClasses={props.labelClasses}
        navLabel={props.transitionEnded && counterpart('globalTranslate.navigation.locations')}
      />}

      {hasAdminPermissions &&
        <NavItem
          triggerSubNav={() => props.triggerSubNav(event)}
          route="/admin"
          navActionClasses={props.navActionClasses}
          activeClassName="vertical-nav-action vertical-nav-action-active"
          iconClasses={props.iconClasses}
          icon={<AdminIcon />}
          labelClasses={props.labelClasses}
          navLabel={props.transitionEnded && counterpart('globalTranslate.navigation.admin')}
        />}
    </ul>
  );
};

PrimaryNavigation.propTypes = {
  featureFlags: PropTypes.object,
  iconClasses: PropTypes.string,
  labelClasses: PropTypes.string,
  messages: PropTypes.object.isRequired,
  navActionClasses: PropTypes.string,
  user: PropTypes.object.isRequired,
  subNavTriggered: PropTypes.bool.isRequired,
  triggerSubNav: PropTypes.func,
  transitionEnded: PropTypes.bool.isRequired,
  verticalNavClasses: PropTypes.string,
};

PrimaryNavigation.defaultProps = {
  featureFlags: {},
  iconClasses: 'vertical-nav-icon',
  labelClasses: 'vertical-nav-label',
  navActionClasses: 'vertical-nav-action',
  triggerSubNav: () => { },
  verticalNavClasses: 'vertical-nav',
};

export default PrimaryNavigation;
