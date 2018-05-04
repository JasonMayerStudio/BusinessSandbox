import React from 'react';
import PropTypes from 'prop-types';
import './TextareaInput.scss';

const TextareaInput = ({ name, onChange, placeholder, value }) => {
  return (
    <textarea
      name={name}
      id={name}
      className="field-input default-textarea"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

TextareaInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

TextareaInput.defaultProps = {
  placeholder: '',
  value: '',
};

export default TextareaInput;
