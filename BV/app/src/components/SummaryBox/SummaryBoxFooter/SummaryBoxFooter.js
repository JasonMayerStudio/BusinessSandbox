import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './SummaryBoxFooter.scss';

const SummaryBoxFooter = ({
  children,
  extraClass,
}) => {
  const wrapperClass = classnames('summary-box__footer', {
    [extraClass]: extraClass,
  });

  return (
    <div className={wrapperClass}>
      {children}
    </div>
  );
};

SummaryBoxFooter.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  extraClass: PropTypes.string,
};

SummaryBoxFooter.defaultProps = {
  children: null,
  extraClass: '',
};

export default SummaryBoxFooter;
