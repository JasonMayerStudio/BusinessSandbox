import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Foo.scss';

const Foo = ({ extraClass, clickHandler }) => {
  const wrapperClass = classnames('foo', {
    [extraClass]: extraClass,
  });

  return (
    <div className={wrapperClass}>
      <button className="something" onClick={clickHandler}>Content goes here</button>
      Content goes here
    </div>
  );
};

Foo.propTypes = {
  extraClass: PropTypes.string,
  clickHandler: PropTypes.func,
};

Foo.defaultProps = {
  extraClass: '',
  clickHandler: () => {},
};

export default Foo;
