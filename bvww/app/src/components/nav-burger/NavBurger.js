import React from 'react';
import PropTypes from 'prop-types';

import './NavBurger.scss';

const NavBurger = (props) => {
  return (
    <nav
      className="nav-burger"
    >
      <div className="menu-toggle">
        {/* A fake / hidden checkbox is used as a click receiver, so we can use the :checked selector on it. */}
        <input
          type="checkbox"
          onClick={props.toggleNavigation}
          checked={props.navigationToggled}
        />
        <span />
        <span />
        <span />
      </div>
    </nav>
  );
};

NavBurger.propTypes = {
  toggleNavigation: PropTypes.func.isRequired,
  navigationToggled: PropTypes.bool.isRequired,
};

export default NavBurger;
