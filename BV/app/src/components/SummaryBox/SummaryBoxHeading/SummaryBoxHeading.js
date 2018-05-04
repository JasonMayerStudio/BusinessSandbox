import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './SummaryBoxHeading.scss';

const SummaryBoxHeading = ({
  children,
  extraClass,
  icon,
  title,
}) => {
  const wrapperClass = classnames('summary-box__heading', {
    [extraClass]: extraClass,
  });

  return (
    <div className={wrapperClass}>
      {
        icon &&
        <span className="summary-box__icon">
          {icon()}
        </span>
      }
      <h2>{title}</h2>
      {children}
    </div>
  );
};

SummaryBoxHeading.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  extraClass: PropTypes.string,
  icon: PropTypes.func,
  title: PropTypes.string.isRequired,
};

SummaryBoxHeading.defaultProps = {
  children: null,
  extraClass: '',
  icon: null,
};

export default SummaryBoxHeading;
