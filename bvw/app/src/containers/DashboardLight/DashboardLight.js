import React from 'react';
import PropTypes from 'prop-types';

import Autocomplete from 'Components/autocomplete/Autocomplete.js';
import SelectionBar from 'Components/selection-bar/SelectionBar.js';

import './DashboardLight.scss';

const dateList = [
  {
    text: 'Yesterday',
    value: 'yesterday',
  },
  {
    text: 'Last Week',
    value: 'last_seven_days',
  },
  {
    text: 'Last Month',
    value: 'last_thirty_days',
  },
  {
    text: 'Last Year',
    value: 'last_year',
  },
];

const currencies = [
  {
    name: 'United States Dollar',
    abbreviation: '(USD)',
    id: 50,
  },
];

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: dateList[0],
      currentSearchTerm: '',
      currencies: this.parseCurrencies(),
      selectedCurrency: '(USD)',
      autocompleteToggled: false,
    };

    this.attachBindings();
  }

  attachBindings() {
    this.handleSelection = this.handleSelection.bind(this);
    this.parseCurrencies = this.parseCurrencies.bind(this);
    this.updateSearchField = this.updateSearchField.bind(this);
    this.toggleAutocomplete = this.toggleAutocomplete.bind(this);
    this.handleAutocompleteSelect = this.handleAutocompleteSelect.bind(this);
    this.redirectToProductSelction = this.redirectToProductSelction.bind(this);
  }

  redirectToProductSelction() {
    // @TODO would be good to implement some sort of signifier here when the page
    // redirects to admin. scrolling to the product selection on load doesn't play well
    // with React. during render, if a ref callback is provided, it will get called with
    // null first, then the rendered DOM element. scrolling into view without this reference
    // is impossible because of how React works. also tested a native DOM element - same
    // issue. DOM element is null on page load.
    this.props.history.push('/admin');
  }

  parseCurrencies() {
    return currencies.map((item) => {
      return Object.assign({}, item, { mainLine: item.name, subLine: item.abbreviation });
    });
  }

  handleSelection() {
    return false;
  }

  toggleAutocomplete() {
    return false;
  }

  updateSearchField() {
    return false;
  }

  handleAutocompleteSelect() {
    return false;
  }

  render() {
    return (
      <section className="padded">
        <h1>Dashboard</h1>
        <div className="dashboard-header">
          <SelectionBar
            listItems={dateList}
            handleSelection={this.handleSelection}
            selectedTab={this.state.selectedTab}
          />
          <span className="dashboard-extended-border" />
          <span
            tabIndex={0}
            role="button"
            onClick={this.toggleAutocomplete}
            className="currency-toggler"
          >
            Currency
            <span className="selected-currency">
              {this.state.selectedCurrency}
            </span>
          </span>
          {this.state.autocompleteToggled && <Autocomplete
            searchTerm={this.state.currentSearchTerm}
            extraClass="currency-selector"
            placeholder="Search Currencies"
            onChange={this.updateSearchField}
            handleSelect={this.handleAutocompleteSelect}
            dataList={currencies}
          />}
        </div>
        <div className="fake-dashboard" />
      </section>
    );
  }
}

Dashboard.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Dashboard;
