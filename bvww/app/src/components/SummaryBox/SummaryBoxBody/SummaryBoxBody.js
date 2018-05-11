import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './SummaryBoxBody.scss';

const SummaryBoxBody = ({
  children,
  extraClass,
}) => {
  const wrapperClass = classnames('summary-box__body', {
    [extraClass]: extraClass,
  });

  return (
    <div className={wrapperClass}>
      {children}
    </div>
  );
};

SummaryBoxBody.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  extraClass: PropTypes.string,
};

SummaryBoxBody.defaultProps = {
  children: null,
  extraClass: '',
};

export default SummaryBoxBody;
