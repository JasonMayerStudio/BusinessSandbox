import React from 'react';
import PropTypes from 'prop-types';

import './Label.scss';

const Label = ({ labelClass, children, htmlFor, helperText }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={labelClass}
    >
      <span className="main-label">{children}</span>
      {
        helperText.length > 0 &&
        <span className="label-helper-text">{helperText}</span>
      }
    </label>
  );
};

Label.propTypes = {
  htmlFor: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element,
  ]),
  helperText: PropTypes.string,
  labelClass: PropTypes.string,
};

Label.defaultProps = {
  labelClass: 'field-label',
  children: '',
  helperText: '',
};

export default Label;
