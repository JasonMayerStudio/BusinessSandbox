import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import sha1 from 'js-sha1';

import './GDColorCodedCell.scss';

const GDColorCodedCell = ({ extraClass, content }) => {
  const wrapperClass = classnames('gd-color-coded-cell', {
    [extraClass]: extraClass,
  });

  const hashedColor = sha1(content).substr(0, 6);

  const indicator = (
    <span
      className="gd-color-coded-cell__indicator"
      style={{ backgroundColor: `#${hashedColor}` }}
    />
  );

  return (
    <td className={wrapperClass}>
      {indicator}
      <span className="gd-color-coded-cell__content">{content}</span>
    </td>
  );
};

GDColorCodedCell.propTypes = {
  content: PropTypes.string.isRequired,
  extraClass: PropTypes.string,
};

GDColorCodedCell.defaultProps = {
  extraClass: '',
};

export default GDColorCodedCell;
