import React from 'react';
import PropTypes from 'prop-types';

import SmallButton from 'Components/Button/SmallButton';

import './SaveInput.scss';

const SaveInput = ({ onChange, saveInput, placeholder, inputValue, name, buttonText }) => {
  return (
    <div className="save-input">
      <input
        className="field-input"
        onChange={onChange}
        placeholder={placeholder}
        type="text"
        value={inputValue}
        name={name}
      />
      <SmallButton
        action={() => saveInput(inputValue)}
        disabled={!inputValue}
      >
        {buttonText}
      </SmallButton>
    </div>
  );
};

SaveInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  saveInput: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  name: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
};

SaveInput.defaultProps = {
  name: '',
};

export default SaveInput;
