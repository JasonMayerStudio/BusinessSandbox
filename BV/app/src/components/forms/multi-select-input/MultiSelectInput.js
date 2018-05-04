import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Checkbox from 'Components/forms/checkbox/Checkbox';
import TextField from 'Components/forms/text-field/TextField';

import './MultiSelectInput.scss';

const MultiSelectInput = ({ name, groupId, extraClass, values, handleChange }) => {
  const wrapperClass = classnames('multi-select-input', {
    [extraClass]: extraClass,
  });

  const checkboxes = values.map((value) => {
    const htmlId = `${value.valueLabel.replace(/ /, '-')}-${value.id}`;

    return (
      <Checkbox
        key={htmlId}
        id={htmlId}
        label={value.valueLabel}
        onChange={() => { handleChange(value.id, groupId); }}
        isChecked={value.isChecked}
        optionalTooltip={value.desc}
      />
    );
  });

  return (
    <div className={wrapperClass}>
      <TextField
        htmlFor={groupId.toString()}
        labelContent={name}
        labelClass="field-label checkbox-group-parent-label"
      >
        <div className="checkbox-list">
          {checkboxes}
        </div>
      </TextField>
    </div>
  );
};

MultiSelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  groupId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  extraClass: PropTypes.string,
  values: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
};

MultiSelectInput.defaultProps = {
  groupId: 0,
  extraClass: '',
};

export default MultiSelectInput;
