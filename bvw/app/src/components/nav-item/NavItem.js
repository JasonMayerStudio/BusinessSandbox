import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './NavItem.scss';

const NavItem = (props) => {
  return (
    <span
      tabIndex={0}
      role="button"
      onClick={props.triggerSubNav}
      key={props.navItemKey}
    >
      <li className="vertical-nav-item">
        <NavLink
          to={props.route}
          exact={props.exact}
          className={props.navActionClasses}
          activeClassName={props.activeClassName}
        >
          {props.icon && <span className={props.iconClasses}>{props.icon}</span>}
          <span className={props.labelClasses}>
            {props.navLabel}
            {props.hasNotification && props.returnNotificationCount}
          </span>
          {props.hasNotification && props.returnCollapsedNotification}
        </NavLink>
      </li>
    </span>
  );
};

NavItem.propTypes = {
  triggerSubNav: PropTypes.func,
  route: PropTypes.string,
  exact: PropTypes.bool,
  navActionClasses: PropTypes.string,
  activeClassName: PropTypes.string,
  iconClasses: PropTypes.string,
  labelClasses: PropTypes.string,
  icon: PropTypes.element,
  navLabel: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  hasNotification: PropTypes.bool,
  returnNotificationCount: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  returnCollapsedNotification: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  navItemKey: PropTypes.string,
};

NavItem.defaultProps = {
  triggerSubNav: () => {},
  route: '#',
  exact: false,
  activeClassName: 'vertical-nav-action vertical-nav-action-active',
  navActionClasses: 'vertical-nav-action',
  iconClasses: 'vertical-nav-icon',
  labelClasses: 'vertical-nav-label',
  icon: null,
  navLabel: false,
  hasNotification: false,
  returnNotificationCount: null,
  returnCollapsedNotification: null,
  navItemKey: '',
};

export default NavItem;
