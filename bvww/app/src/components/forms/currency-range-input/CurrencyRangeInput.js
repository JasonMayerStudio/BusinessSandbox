import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'Components/forms/text-field/TextField';
import Autocomplete from 'Components/autocomplete/Autocomplete';
import OptionBoxPopup from 'Components/OptionBoxPopup/OptionBoxPopup.js';

import './CurrencyRangeInput.scss';
import '../_ranges.scss';

class CurrencyRangeInput extends Component {
  constructor(props) {
    super(props);

    const idLow = `${this.props.title.replace(/ /, '-')}-low`;
    const idHigh = `${this.props.title.replace(/ /, '-')}-high`;

    this.state = {
      focused: false,
      start: this.props.filterLow,
      end: this.props.filterHigh,
      lowKey: idLow,
      highKey: idHigh,
      selectedCurrency: 'USD',
      currentSearchTerm: '',
      currencyList: this.props.currencyList,
      currencies: [],
    };
  }

  componentWillMount() {
    this.setState({
      currencies: this.parseCurrencies(),
    });
  }

  componentWillReceiveProps(newProps) {
    if (newProps.filterLow !== this.state.start ||
        newProps.filterHigh !== this.state.end) {
      this.setState({
        focused: false,
        start: newProps.filterLow,
        end: newProps.filterHigh,
      });
    }
  }

  onBlur = () => {
    this.setState({ focused: false });
  }

  onFocus = () => {
    this.setState({ focused: true });
  }

  setField = (e) => {
    const float = new RegExp(/^-?\d*(\.\d+)?\.?$/);
    const stateKey = (e.target.name === this.state.highKey) ? 'end' : 'start';
    const value = e.target.value;

    if ((float.test(value) && !Number.isNaN(value) && this.count(value, '.') <= 1)
        || value === '') {
      this.setState({ [stateKey]: value });
      this.props.onChange(this.props.id, stateKey, value);
    }
  }

  count = (string, letter) => {
    let count = 0;
    for (let i = 0; i < string.length; i += 1) {
      if (string[i] === letter) {
        count += 1;
      }
    }
    return count;
  }

  updateSearchField = (value) => {
    const lowercaseSearchTerm = value && value.toLowerCase && value.toLowerCase();
    const filteredCurrencies = this.state.currencies.filter((currency) => {
      const lowerName = currency.name.toLowerCase();
      const lowerAbbreviation = currency.abbreviation.toLowerCase().replace(/[{()}]/g, '');
      return (lowerName.includes(lowercaseSearchTerm) ||
        lowerAbbreviation.includes(lowercaseSearchTerm));
    });

    this.setState({
      currentSearchTerm: value,
      currentCurrencies: filteredCurrencies,
    });
  }

  handleAutocompleteSelect = (value) => {
    const currencies = this.state.currentCurrencies && this.state.currentCurrencies.length ?
      this.state.currentCurrencies :
      this.state.currencies;

    const selectedCurrency = currencies.find((currency) => {
      return currency.id === value;
    });

    selectedCurrency.selected = !selectedCurrency.selected;

    this.setState({
      currencies: this.state.currencies,
      selectedCurrency: selectedCurrency.abbreviation,
      currentSearchTerm: '',
      currentCurrencies: selectedCurrency,
    }, () => {
      this.props.onChange();
      this.props.handleSelectedCurrency(this.state.selectedCurrency);
      this.onBlur();
    });
  }

  get labelContent() {
    return (
      <span>
        {this.props.title}
        {this.props.error && <span className="message-error">{this.props.error}</span>}
      </span>
    );
  }

  parseCurrencies = () => {
    return this.state.currencyList.map((item) => {
      return Object.assign({}, item, { mainLine: item.name, subLine: item.abbreviation });
    });
  }

  render() {
    return (
      <TextField
        error={this.props.error}
        htmlFor={this.state.lowKey}
        labelContent={this.labelContent}
        fieldClass={this.state.focused ? 'field range-container focused' : 'field range-container'}
      >
        <div className="range-pair currency-range">
          <input
            className={`field-input range-field low ${this.state.focused ? 'focused' : ''}`}
            name={this.state.lowKey}
            id={this.state.lowKey}
            onBlur={this.onBlur}
            onFocus={this.onFocus}
            onChange={this.setField}
            type="text"
            value={this.state.start}
          />
          <span className="range-separator">{this.props.separatorText}</span>
          <input
            className={`field-input range-field high ${this.state.focused ? 'focused' : ''}`}
            name={this.state.highKey}
            id={this.state.highKey}
            onBlur={this.onBlur}
            onFocus={this.onFocus}
            onChange={this.setField}
            type="text"
            value={this.state.end}
          />
          <OptionBoxPopup
            extraClass="attached-btn"
            triggerText={this.state.selectedCurrency}
          >
            <Autocomplete
              searchTerm={this.state.currentSearchTerm}
              extraClass="currency-selector"
              placeholder={this.state.selectedCurrency}
              onChange={this.updateSearchField}
              handleSelect={this.handleAutocompleteSelect}
              dataList={this.parseCurrencies()}
              title="Currency"
            />
          </OptionBoxPopup>
        </div>
      </TextField>
    );
  }
}

CurrencyRangeInput.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  error: PropTypes.string,
  filterLow: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  filterHigh: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string,
  separatorText: PropTypes.string,
  currencyList: PropTypes.array.isRequired,
  handleSelectedCurrency: PropTypes.func,
};

CurrencyRangeInput.defaultProps = {
  filterLow: '',
  filterHigh: '',
  error: '',
  title: '',
  separatorText: 'to',
  currencyList: [],
  handleSelectedCurrency: () => {},
};

export default CurrencyRangeInput;
