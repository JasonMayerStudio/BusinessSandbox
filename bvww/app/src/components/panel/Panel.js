import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Panel.scss';

const Panel = ({ extraClass, children }) => {
  const wrapperClass = classnames('panel', {
    [extraClass]: extraClass,
  });

  return (
    <div className={wrapperClass}>
      {children}
    </div>
  );
};

Panel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  extraClass: PropTypes.string,
};

Panel.defaultProps = {
  extraClass: '',
};

export default Panel;
