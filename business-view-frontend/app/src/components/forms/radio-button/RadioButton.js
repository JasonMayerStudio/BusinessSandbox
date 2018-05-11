import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Label from 'Components/forms/label/Label';

import './RadioButton.scss';

const RadioButton = ({ onChange, id, isChecked, label, readonly, extraClass, optionalTooltip, disabled }) => {
  const wrapperClass = classnames('radio-button-field', {
    [extraClass]: extraClass,
  });
  const labelClass = classnames('radio-button-label', {
    checked: isChecked,
    readonly,
  });

  return (
    <div className={wrapperClass}>
      <input
        type="radio"
        className="radio-button"
        onChange={onChange}
        id={id}
        checked={isChecked}
        disabled={disabled || readonly}
      />
      <Label
        labelClass={labelClass}
        htmlFor={id}
      >
        {label}
      </Label>
      { optionalTooltip }
    </div>
  );
};

RadioButton.propTypes = {
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  isChecked: PropTypes.bool,
  readonly: PropTypes.bool,
  label: PropTypes.string,
  extraClass: PropTypes.string,
  optionalTooltip: PropTypes.element,
  disabled: PropTypes.bool,
};

RadioButton.defaultProps = {
  label: '',
  disabled: false,
  readonly: false,
  extraClass: '',
  isChecked: false,
  optionalTooltip: null,
};

export default RadioButton;
