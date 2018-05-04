import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TextField from 'Components/forms/text-field/TextField';
import SelectInput from 'Components/forms/select-input/SelectInput.js';

import './CreditCardInput.scss';

class CreditCardInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      v1: !Number.isNaN(props.v1) ? props.v1 : '',
      v2: !Number.isNaN(props.v2) ? props.v2 : '',
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      v1: !Number.isNaN(nextProps.v1) ? nextProps.v1 : '',
      v2: !Number.isNaN(nextProps.v2) ? nextProps.v2 : '',
    });
  }

  setField = (e) => {
    const normalizedValue = e.target.value === '' ? '' :
      parseInt(e.target.value, 10).toString();
    const internalStateKey = e.target.name === 'last4' ? 'v2' : 'v1';
    const stateKey = e.target.name === 'last4' ? 'end' : 'start';

    if (!Number.isNaN(normalizedValue)) {
      this.setState({ [internalStateKey]: normalizedValue });
      this.props.onChange(this.props.id, stateKey, normalizedValue);
    } else {
      this.setState({ [internalStateKey]: '' });
      this.props.onChange(this.props.id, stateKey, '');
    }
  };

  render() {
    return (
      <TextField
        fieldClass="field credit-card-input"
        htmlFor={this.props.id.toString()}
        labelContent={this.props.translations.label}
        helperText={this.props.translations.helperText}
      >
        <div className="credit-card-input-content">
          {this.props.onSelectChange !== null && (
            <div className="credit-card-input-wrapper">
              <SelectInput
                dataList={this.props.cardOptions}
                handleSelection={(event) => this.props.onSelectChange(event)}
                selectedItem={this.props.selectedInput}
                wrapperClass="select-menu__input"
              />
            </div>
          )}
          {this.props.selectedInput.value === 'six-four-digits' ? (
            <span className="multiple-inputs">
              <input
                id={this.props.id}
                type="text"
                className="field-input"
                onChange={this.setField}
                maxLength="6"
                name="first6"
                placeholder={this.props.translations.first6Placeholder}
                pattern="[0-9.]+"
                value={this.state.v1}
              />
              <input
                type="text"
                className="field-input"
                onChange={this.setField}
                maxLength="4"
                name="last4"
                placeholder={this.props.translations.last4Placeholder}
                pattern="[0-9.]+"
                value={this.state.v2}
              />
            </span>
          ) :
            (
              <input
                id={this.props.id}
                type="text"
                className="field-input"
                onChange={this.setField}
                maxLength={this.props.selectedInput.maxLength}
                name="fullCardNumber"
                pattern="[0-9.]+"
                value={this.state.v1}
              />
            )}
        </div>
      </TextField>
    );
  }
}

CreditCardInput.propTypes = {
  cardOptions: PropTypes.array,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onSelectChange: PropTypes.func,
  selectedInput: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  translations: PropTypes.shape({
    first6Placeholder: PropTypes.string,
    label: PropTypes.string,
    last4Placeholder: PropTypes.string,
    helperText: PropTypes.string,
  }),
  v1: PropTypes.string,
  v2: PropTypes.string,
};

CreditCardInput.defaultProps = {
  cardOptions: [
    {
      value: 'six-digits',
      text: 'First 6 Digits',
      maxLength: 6,
    },
    {
      value: 'four-digits',
      text: 'Last 4 Digits',
      maxLength: 4,
    },
    {
      value: 'six-four-digits',
      text: 'First 6 / Last 4',
    },
  ],
  selectedInput: {
    value: 'six-four-digits',
    text: 'First 6 / Last 4',
  },
  onSelectChange: null,
  translations: {
    first6Placeholder: 'First 6',
    label: 'Card Number',
    last4Placeholder: 'Last 4',
    helperText: '(first 6 and/or last 4 digits)',
  },
  v1: '',
  v2: '',
};

export default CreditCardInput;
