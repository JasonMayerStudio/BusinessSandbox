import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './SummaryBox.scss';

const SummaryBox = ({
  children,
  extraClass,
}) => {
  const wrapperClass = classnames('summary-box', {
    [extraClass]: extraClass,
  });

  return (
    <div className={wrapperClass}>
      {children}
    </div>
  );
};

SummaryBox.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  extraClass: PropTypes.string,
};

SummaryBox.defaultProps = {
  extraClass: '',
};

export default SummaryBox;
