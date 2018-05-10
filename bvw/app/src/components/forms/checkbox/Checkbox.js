// Libs / Helpers
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import InformationBubble from 'Components/information-bubble/InformationBubble';
import Label from 'Components/forms/label/Label';

// Style
import './Checkbox.scss';

const Checkbox = ({ onChange, id, isChecked, label, readonly, extraClass, optionalTooltip, optionalTooltipTitle, disabled }) => {
  const wrapperClass = classnames('checkbox-field', {
    [extraClass]: extraClass,
  });
  const labelClass = classnames('checkbox-label', {
    checked: isChecked,
    readonly,
  });
  const tooltip = optionalTooltip && <InformationBubble id={id} info tooltipContent={optionalTooltip} tooltipTitle={optionalTooltipTitle} />;

  return (
    <div className={wrapperClass}>
      <input
        type="checkbox"
        className="checkbox"
        onChange={onChange}
        id={id}
        checked={isChecked}
        disabled={disabled || readonly}
      />
      <Label
        htmlFor={id}
        labelClass={labelClass}
      >
        {label}
      </Label>
      { tooltip }
    </div>
  );
};

Checkbox.propTypes = {
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string,
  isChecked: PropTypes.bool,
  readonly: PropTypes.bool,
  label: PropTypes.string,
  extraClass: PropTypes.string,
  optionalTooltip: PropTypes.string,
  optionalTooltipTitle: PropTypes.string,
  disabled: PropTypes.bool,
};

Checkbox.defaultProps = {
  id: null,
  label: '',
  disabled: false,
  readonly: false,
  extraClass: '',
  isChecked: false,
  optionalTooltip: null,
  optionalTooltipTitle: null,
};

export default Checkbox;
