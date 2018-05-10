import React, { Component } from 'react';
import { Page, ReactSpecimen } from 'catalog';

import englishCurrencyList from 'Utils/currency-lists/en-US_currencies';
import frenchCurrencyList from 'Utils/currency-lists/fr-CA_currencies';
import simplifiedChineseCurrencyList from 'Utils/currency-lists/zh-Hans_currencies';
import traditionalChineseCurrencyList from 'Utils/currency-lists/zh-Hant_currencies';

import CurrencyRangeInput from './CurrencyRangeInput.js';

export default class CurrencyRangeInputDoc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: [
        {
          id: 8,
          start: '',
          end: '',
        },
        {
          id: 13,
          start: 10,
          end: 100,
        },
      ],
      selectedCurrency: '(USD)',
    };
  }

  onCurrencyChange = (id, selector, value) => {
    const key = (selector === 'end') ? 'end' : 'start';
    const currencies = this.state.currencies.map((currency) => {
      if (currency.id === id) {
        return Object.assign({}, currency, { [key]: value || '' });
      } else {
        return currency;
      }
    });

    this.setState({ currencies });
  }

  setCurrencyList = (language) => {
    switch (language) {
      case 'en-GB':
        return englishCurrencyList;
      case 'fr-CA':
        return frenchCurrencyList;
      case 'zh-Hans':
        return simplifiedChineseCurrencyList;
      case 'zh-Hant':
        return traditionalChineseCurrencyList;
      default:
        return englishCurrencyList;
    }
  }

  selectCurrency = (currency) => {
    this.setState({
      selectedCurrency: currency,
    });
  }

  render() {
    return (
      <Page>
        <h2>Currency Range</h2>

        <p>Use to capture a range of currency.</p>

        <ReactSpecimen span={2}>
          <CurrencyRangeInput
            id={this.state.currencies[0].id}
            filterLow={this.state.currencies[0].start}
            filterHigh={this.state.currencies[0].end}
            onChange={this.onCurrencyChange}
            title="Case Amount"
          />
        </ReactSpecimen>

        <ReactSpecimen span={4}>
          <CurrencyRangeInput
            id={this.state.currencies[1].id}
            filterLow={this.state.currencies[1].start}
            filterHigh={this.state.currencies[1].end}
            onChange={this.onCurrencyChange}
            title="Case Amount"
            currencyList={this.setCurrencyList('en-GB')}
            handleSelectedCurrency={this.selectCurrency}
          />
        </ReactSpecimen>

        <ReactSpecimen span={6}>
          <CurrencyRangeInput
            id={this.state.currencies[1].id}
            filterLow={this.state.currencies[1].start}
            filterHigh={this.state.currencies[1].end}
            onChange={this.onCurrencyChange}
            title="Case Amount"
            currencyList={this.setCurrencyList('en-GB')}
            handleSelectedCurrency={this.selectCurrency}
          />
        </ReactSpecimen>

        <p>Current Selected Currency Code: {this.state.selectedCurrency}</p>

        <h3>Parameters</h3>

        <h4>Required Parameters</h4>
        <ul>
          <li><strong>id</strong>: a unique identifier used to build HTML IDs for the custom control</li>
          <li><strong>onChange</strong>: a callback that searched a corresponding table for the value of the input</li>
          <li><strong>filterLow</strong>: Currency range lower amount</li>
          <li><strong>filterHigh</strong>: Currency range higher amount</li>
        </ul>

        <h4>Optional Parameters</h4>
        <ul>
          <li><strong>error</strong>: an error explaining when something went wrong</li>
          <li><strong>title</strong>: title of the currency range-fields</li>
        </ul>

      </Page>
    );
  }
}
