import React, { Component } from 'react';
import { Page, ReactSpecimen } from 'catalog';
import CreditCardInput from './CreditCardInput.js';

const cardOptions = [
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
];

const translations = {
  helperText: '(first 6 and/or last 4 digits)',
  first6Placeholder: 'First 6',
  label: 'Card Number',
  last4Placeholder: 'Last 4',
};

class CreditCardInputDoc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValues: {
        cardNumber: {
          v1: '',
          v2: '',
        },
      },
      cardNumberType: 'six-four-digits',
    };
  }

  onSelectChange(event) {
    cardOptions.map((option) => {
      if (option.value === event) {
        this.setState({
          selectedInput: option,
          currentValues: {
            cardNumber: {
              v1: '',
              v2: '',
            },
          },
        });
      }

      return false;
    });
  }

  /**
   * handler called by Range type filters (CURRENCY, DATE) to update the input value in state
   * @param    {number} id       the database ID of the matching filter
   * @param    {string} selector 'start' for the first value (v1),'end' for second value (v2)
   * @param    {string} value    the value to use
   * @modifies {state}           updates the matching value in currentValues array in component state
   *
   * @description each value object for a STRING looks like this:
   *                {"id":267, "v1":"last_year", "type":"EXACT"}
   *                where id = filter ID
   *                      v1 = the single value
   *                      type = match type
   */
  handleRangeChange = (id, selector, value) => {
    const key = (selector === 'end') ? 'v2' : 'v1';
    const currentRange = (this.state.currentValues[id]) || {};

    const newRange = Object.assign(currentRange, { [key]: value });

    const newValues = Object.assign({}, this.state.currentValues, {
      [id]: newRange,
    });

    this.setState({
      currentValues: newValues,
    });
  }

  render() {
    return (
      <Page>
        <h2>CreditCardInput</h2>

        <p>Use this component for toggling between varied types of credit card number information for inputting in a filtering tool</p>

        <ReactSpecimen span={3}>
          <CreditCardInput
            id="cardNumber"
            label="Card Number"
            cardOptions={cardOptions}
            selectedInput={this.state.selectedInput}
            onChange={this.handleRangeChange}
            v1={this.state.currentValues.cardNumber.v1}
            v2={this.state.currentValues.cardNumber.v2}
            translations={translations}
          />
        </ReactSpecimen>

        <h3>Parameters</h3>

        <h4>Required Parameters</h4>
        <ul>
          <li><strong>id</strong>: a unique identifier used to build HTML IDs for the custom control</li>
          <li><strong>cardOptions</strong>: a list of select options</li>
          <li><strong>selectedInput</strong>: the select object (text and value)</li>
          <li><strong>onSelectChange</strong>: a function that handles selected option and what type of input shows</li>
          <li><strong>onInputChange</strong>: a function that handles the first (only) input value on change, forced to numeric values only</li>
          <li><strong>v1</strong>: a string value representing the value of the first (only) input</li>
          <li><strong>onInputSecondaryChange</strong>: a function that handles the second input value on change, if there is one, forced to numeric values only</li>
          <li><strong>v2</strong>: a string value representing the value of the second input, if there is one</li>
        </ul>

        <h4>Optional Parameters</h4>
        <ul>
          <li>none</li>
        </ul>

      </Page>
    );
  }
}

export default CreditCardInputDoc;
