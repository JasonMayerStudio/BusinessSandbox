import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Alert.scss';

const Alert = ({ alertType, children }) => {
  const wrapperClass = classnames('alert', {
    [`alert-${alertType}`]: alertType,
  });

  return (
    <span
      className={wrapperClass}
    >
      {children}
    </span>
  );
};

Alert.propTypes = {
  alertType: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
};

export default Alert;
