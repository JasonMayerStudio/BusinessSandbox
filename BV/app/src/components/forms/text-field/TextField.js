import React from 'react';
import PropTypes from 'prop-types';

import Label from 'Components/forms/label/Label';

const TextField = ({ error, fieldErrorClass, fieldClass, htmlFor, labelClass, labelContent, children, helperText }) => {
  return (
    <div className="field-group-vertical">
      <div className={error ? fieldErrorClass : fieldClass}>
        <Label
          labelClass={labelClass}
          htmlFor={htmlFor}
          helperText={helperText}
        >
          {labelContent}
        </Label>
        {children}
      </div>
    </div>
  );
};

TextField.propTypes = {
  htmlFor: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  fieldClass: PropTypes.string,
  fieldErrorClass: PropTypes.string,
  labelClass: PropTypes.string,
  labelContent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element,
  ]).isRequired,
  children: PropTypes.element.isRequired,
  error: PropTypes.string,
  helperText: PropTypes.string,
};

TextField.defaultProps = {
  fieldClass: 'field',
  labelClass: 'field-label',
  fieldErrorClass: 'field field-danger',
  error: '',
  helperText: '',
};

export default TextField;
