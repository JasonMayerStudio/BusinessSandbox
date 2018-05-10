import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Badge.scss';

const Badge = ({ badgeType, square, reversed, children, info }) => {
  const wrapperClass = classnames('badge', {
    [`badge-${badgeType}`]: badgeType,
    'badge-square': square,
    'badge-reversed': reversed,
    'badge-info': info,
  });

  return (
    <span
      className={wrapperClass}
    >
      {children}
    </span>
  );
};

Badge.propTypes = {
  badgeType: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  square: PropTypes.bool,
  reversed: PropTypes.bool,
  info: PropTypes.bool,
};

Badge.defaultProps = {
  square: false,
  reversed: false,
  info: false,
};

export default Badge;
