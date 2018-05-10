import React from 'react';
import PropTypes from 'prop-types';

import TextField from 'Components/forms/text-field/TextField';
import InformationBubble from 'Components/information-bubble/InformationBubble';

import '../forms.styles.js';

const TextInput = ({ name, label, onChange, type, placeholder, value, labelTooltip, error, onBlur, isRequired }) => {
  let wrapperClass = 'field';
  if (error) {
    wrapperClass += ' field-danger';
  }

  const allowedTypes = ['text', 'email', 'url', 'number', 'tel'];
  const foundType = allowedTypes.findIndex((kind) => kind === type);

  const inputType = (foundType) ? type : 'text';

  const labelContent = (
    <span>
      {label}
      {isRequired && <span className="field__required">*</span>}
      {error && <span className="message-error">
        <InformationBubble
          error
          position="top"
          tooltipContent={error}
        />
        </span>}
      {!error && labelTooltip}
    </span>
  );

  return (
    <TextField
      fieldClass={wrapperClass}
      htmlFor={name}
      labelContent={labelContent}
    >
      <input
        type={inputType}
        name={name}
        id={name}
        className="field-input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        aria-required={isRequired}
      />
    </TextField>
  );
};

TextInput.propTypes = {
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  onBlur: PropTypes.func,
  isRequired: PropTypes.bool,
  labelTooltip: PropTypes.string,
};

TextInput.defaultProps = {
  type: 'text',
  placeholder: '',
  value: '',
  error: '',
  onBlur: null,
  isRequired: false,
  labelTooltip: null,
};

export default TextInput;
