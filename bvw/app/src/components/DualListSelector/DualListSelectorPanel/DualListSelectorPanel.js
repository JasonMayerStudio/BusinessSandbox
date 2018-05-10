import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './DualListSelectorPanel.scss';

const DualListSelectorPanel = ({
  children,
  doubleWidth,
  extraClass,
}) => {
  const wrapperClass = classnames('dual-list-selector__panel', {
    [extraClass]: extraClass,
    'double-width': doubleWidth,
  });

  return (
    <div className={wrapperClass}>
      {children}
    </div>
  );
};

DualListSelectorPanel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  doubleWidth: PropTypes.bool,
  extraClass: PropTypes.string,
};

DualListSelectorPanel.defaultProps = {
  doubleWidth: false,
  extraClass: '',
};

export default DualListSelectorPanel;
