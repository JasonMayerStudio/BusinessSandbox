import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './GDHierarchySelectorActionBar.scss';

const GDHierarchySelectorActionBar = ({
  children,
  extraClass,
}) => {
  const wrapperClass = classnames('gd-hierarchy-selector__action-bar', {
    [extraClass]: extraClass,
  });

  return (
    <div className={wrapperClass}>
      {children}
    </div>
  );
};

GDHierarchySelectorActionBar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  extraClass: PropTypes.string,
};

GDHierarchySelectorActionBar.defaultProps = {
  extraClass: '',
};

export default GDHierarchySelectorActionBar;
