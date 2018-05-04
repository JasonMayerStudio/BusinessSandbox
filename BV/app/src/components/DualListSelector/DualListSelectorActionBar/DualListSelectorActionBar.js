import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './DualListSelectorActionBar.scss';

const DualListSelectorActionBar = ({
  children,
  extraClass,
}) => {
  const wrapperClass = classnames('dual-list-selector__action-bar', {
    [extraClass]: extraClass,
  });

  return (
    <div className={wrapperClass}>
      {children}
    </div>
  );
};

DualListSelectorActionBar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  extraClass: PropTypes.string,
};

DualListSelectorActionBar.defaultProps = {
  extraClass: '',
};

export default DualListSelectorActionBar;
