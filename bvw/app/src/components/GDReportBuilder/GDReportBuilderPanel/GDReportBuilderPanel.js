import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './GDReportBuilderPanel.scss';

const GDReportBuilderPanel = ({
  children,
  doubleWidth,
  extraClass,
}) => {
  const wrapperClass = classnames('gd-report-builder__panel', {
    [extraClass]: extraClass,
    'double-width': doubleWidth,
  });

  return (
    <div className={wrapperClass}>
      {children}
    </div>
  );
};

GDReportBuilderPanel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  doubleWidth: PropTypes.bool,
  extraClass: PropTypes.string,
};

GDReportBuilderPanel.defaultProps = {
  doubleWidth: false,
  extraClass: '',
};

export default GDReportBuilderPanel;
