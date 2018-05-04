import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import NavItem from 'Components/nav-item/NavItem';

const SecondaryNavigation = (props) => {
  const navItems = props.subNavChildren.map((child) => {
    const permissions = props.auth.session.user.parsedPermissions;
    if (
      (child.path.indexOf('custom-report-builder') > -1 &&
        !permissions.reports.canView) ||
      child.hideOnFlag
    ) {
      return false;
    }

    const labelClasses = classnames('vertical-nav-label', {
      animated: props.triggerSubNavAnimation,
    });

    return (
      <NavItem
        key={child.id}
        navItemKey={child.title}
        route={child.path}
        activeClassName="vertical-nav-action-secondary-active"
        navActionClasses="vertical-nav-action vertical-nav-action-secondary"
        navLabel={child.title}
        labelClasses={labelClasses}
      />
    );
  });

  return (
    <ul className={props.secondaryNavClasses}>
      {navItems}
    </ul>
  );
};

SecondaryNavigation.propTypes = {
  secondaryNavClasses: PropTypes.string,
  subNavChildren: PropTypes.array.isRequired,
  triggerSubNavAnimation: PropTypes.bool,
};

SecondaryNavigation.defaultProps = {
  featureFlags: {},
  secondaryNavClasses: 'secondary-nav',
  triggerSubNavAnimation: false,
};

export default SecondaryNavigation;
