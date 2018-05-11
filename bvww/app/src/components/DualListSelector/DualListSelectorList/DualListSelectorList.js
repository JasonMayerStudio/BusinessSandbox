import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './DualListSelectorList.scss';

const DualListSelectorList = ({
  children,
  extraClass,
}) => {
  const wrapperClass = classnames('dual-list-selector__list', {
    [extraClass]: extraClass,
  });

  return (
    <div className={wrapperClass}>
      {children}
    </div>
  );
};

DualListSelectorList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  extraClass: PropTypes.string,
};

DualListSelectorList.defaultProps = {
  extraClass: '',
};

export default DualListSelectorList;
