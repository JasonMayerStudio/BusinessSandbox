import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './GDHierarchySelectorList.scss';

const GDHierarchySelectorList = ({
  children,
  extraClass,
}) => {
  const wrapperClass = classnames('gd-hierarchy-selector__list', {
    [extraClass]: extraClass,
  });

  return (
    <div className={wrapperClass}>
      {children}
    </div>
  );
};

GDHierarchySelectorList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  extraClass: PropTypes.string,
};

GDHierarchySelectorList.defaultProps = {
  extraClass: '',
};

export default GDHierarchySelectorList;
