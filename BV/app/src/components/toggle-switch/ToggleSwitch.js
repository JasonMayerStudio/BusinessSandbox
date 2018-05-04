/* eslint-disable key-spacing */
import React from 'react';
import PropTypes from 'prop-types';
import Label from 'Components/forms/label/Label';

import './ToggleSwitch.scss';

const ToggleSwitch = ({ id, onChange, isChecked, disabled, offText, onText }) => {
  return (
    <div className={`switch-button flatsquare ${disabled ? 'disabled' : ''}`}>
      <Label htmlFor={id} labelClass="label-left">{offText}</Label>
      <input
        onChange={onChange}
        checked={isChecked}
        disabled={disabled}
        id={id}
        type="checkbox"
        value="1"
      />
      <Label htmlFor={id} data-off={offText} data-on={onText} />
      <Label htmlFor={id} labelClass="label-right">{onText}</Label>
    </div>
  );
};

ToggleSwitch.propTypes = {
  id             : PropTypes.string.isRequired,
  isChecked      : PropTypes.bool,
  disabled       : PropTypes.bool.isRequired,
  onChange       : PropTypes.func.isRequired,
  offText        : PropTypes.string,
  onText        : PropTypes.string,
};

ToggleSwitch.defaultProps = {
  id             : 'switch',
  disabled       : false,
  isChecked      : false,
  onChange       : ToggleSwitch.prototype.onToggle,
  offText        : 'Off',
  onText         : 'On',
};

export default ToggleSwitch;
