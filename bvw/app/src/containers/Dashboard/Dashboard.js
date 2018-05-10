/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import counterpart from 'counterpart';
import { connect } from 'react-redux';

import Autocomplete from 'Components/autocomplete/Autocomplete.js';
import OptionBoxPopup from 'Components/OptionBoxPopup';
import SelectionBar from 'Components/selection-bar/SelectionBar.js';

import { getDashboardVisualizations } from '../../api/dashboardApi';

import englishCurrencyList from './data/en-US_currencies';
import frenchCurrencyList from './data/fr-CA_currencies';
import simplifiedChineseCurrencyList from './data/zh-Hans_currencies';
import traditionalChineseCurrencyList from './data/zh-Hant_currencies';

import './Dashboard.scss';

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    registerTranslations();

    this.state = {
      selectedTab: englishCurrencyList[0],
      currentSearchTerm: '',
      currencies: [],
      currencyList: this.setCurrencyList(this.props.auth.session.user.languageAbbr),
      dateList: this.setTabList(),
      autocompleteToggled: false,
      selectedCurrency: '(USD)',
      selectedCurrencySymbol: '$',
      upgradeToPro: false,
      visualization: '',
    };
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);

    const dashboardVisualization = [
      {
        jsonKey: 'date_filter',
        minDate: 'yesterday',
      },
    ];

    getDashboardVisualizations(dashboardVisualization)
      .then((url) => {
        this.setState({
          visualization: url,
          currencies: this.parseCurrencies(),
          selectedTab: this.state.dateList[0],
        });
      });
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
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

  setTabList = () => {
    const dateList = [
      {
        text: counterpart('dashboard.yesterday'),
        value: 'yesterday',
      },
      {
        text: counterpart('dashboard.lastWeek'),
        value: 'last_seven_days',
      },
      {
        text: counterpart('dashboard.lastMonth'),
        value: 'last_thirty_days',
      },
      {
        text: counterpart('dashboard.lastYear'),
        value: 'last_year',
      },
    ];

    return dateList;
  }

  redirectToProductSelction = () => {
    // @TODO would be good to implement some sort of signifier here when the page
    // redirects to admin. scrolling to the product selection on load doesn't play well
    // with React. during render, if a ref callback is provided, it will get called with
    // null first, then the rendered DOM element. scrolling into view without this reference
    // is impossible because of how React works. also tested a native DOM element - same
    // issue. DOM element is null on page load.
    this.props.history.push('/admin');
  }

  parseCurrencies = () => {
    return this.state.currencyList.map((item) => {
      return Object.assign({}, item, { mainLine: item.name, subLine: item.abbreviation });
    });
  }

  handleClickOutside = () => {
    const currency = 'currency';
    const selection = 'selection';
    const search = 'search';

    if (event.target.classList.value.indexOf(currency) > -1 ||
        event.target.classList.value.indexOf(selection) > -1 ||
        event.target.classList.value.indexOf(search) > -1) {
      event.stopPropagation();
    } else {
      this.setState({ autocompleteToggled: false });
    }
  }

  handleSelection = (item) => {
    const maxMonths = this.props.auth.session.user.maxMonths;
    const primaryMerchantId = this.props.auth.session.user.primaryMerchantId;
    const dashboardVisualization = [
      {
        jsonKey: 'date_filter',
        minDate: item.value,
      },
    ];

    if (item.value === 'last_year' && maxMonths > 11) {
      // presence of maxMonths >= 12 indicates a merchant-type user that can see at least 12 months
      getDashboardVisualizations(dashboardVisualization)
        .then((url) => {
          this.setState({
            selectedTab: item,
            visualization: url,
            upgradeToPro: false,
          });
        });
    } else if (item.value === 'last_year' && maxMonths && primaryMerchantId) {
      // presence of maxMonths < 12 and a primaryMerchantId indicates a merchant-type user who cannot see a year
      this.setState({
        selectedTab: item,
        upgradeToPro: true,
      });
    } else {
      // otherwise, either less than a year requested, or a GP internal user who can see all times
      getDashboardVisualizations(dashboardVisualization)
        .then((url) => {
          this.setState({
            selectedTab: item,
            visualization: url,
            upgradeToPro: false,
          });
        });
    }
  }

  toggleAutocomplete = () => {
    this.setState({
      autocompleteToggled: !this.state.autocompleteToggled,
    });
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

    const dashboardVisualization = [
      {
        jsonKey: 'currency_type',
        searchField: {
          exact: true,
          value: selectedCurrency.abbreviation.replace(/[{()}]/g, ''),
        },
      },
    ];

    getDashboardVisualizations(dashboardVisualization)
     .then((url) => {
       this.setState({
         currencies: this.state.currencies,
         selectedCurrency: selectedCurrency.abbreviation,
         autocompleteToggled: false,
         currentSearchTerm: '',
         visualization: url,
         currentCurrencies: [],
       });
     });
  }

  render() {
    const currencies = this.state.currentCurrencies && this.state.currentCurrencies.length ?
                      this.state.currentCurrencies :
                      this.state.currencies;

    const hasProductSelectionPermissions = this.props.parsedPermissions.merchants.canViewProductSelection;

    return (

      <section className="dashboard-container">
        <div className="main-content--header">
          <h1>{counterpart('dashboard.title')}</h1>

          <SelectionBar
            listItems={this.state.dateList || []}
            handleSelection={this.handleSelection}
            selectedTab={this.state.selectedTab}
          />

          <OptionBoxPopup
            triggerText={this.state.selectedCurrency}
            emphasizedTriggerText={counterpart('globalTranslate.common.currency')}
          >
            <Autocomplete
              searchTerm={this.state.currentSearchTerm}
              extraClass="currency-selector"
              placeholder={this.state.selectedCurrency}
              onChange={this.updateSearchField}
              handleSelect={this.handleAutocompleteSelect}
              dataList={currencies}
              title="Currency"
            />
          </OptionBoxPopup>
        </div>
        <section className="padded-tall">
          {!this.state.upgradeToPro && <div className="iframe-container dashboard-iframe-container">
            <iframe title="dashboard-visualization" src={this.state.visualization} />
          </div>}
          {this.state.upgradeToPro && <div className="upgrade-to-pro-wrapper">
            <div className="upgrade-to-pro">
              <p>
                {counterpart('dashboard.upgradeToPro1')}
              </p>
              <p>{counterpart('dashboard.upgradeToPro2')}<span
                className={hasProductSelectionPermissions ? 'clickable' : null}
                tabIndex={0}
                role="button"
                onClick={hasProductSelectionPermissions ? this.redirectToProductSelction : null}
              >
                {counterpart('dashboard.upgradeToPro3')}
              </span>{counterpart('dashboard.upgradeToPro4')}</p>
            </div>
          </div>}
        </section>
      </section>
    );
  }
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  parsedPermissions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    auth: state.auth,
    parsedPermissions: state.auth.session.user.parsedPermissions,
  };
}

function registerTranslations() {
  counterpart.registerTranslations('en-US', require('./translations/en-us.json'));
  counterpart.registerTranslations('en-GB', require('./translations/en-gb.json'));
  counterpart.registerTranslations('fr-CA', require('./translations/fr-ca.json'));
  counterpart.registerTranslations('zh-Hans', require('./translations/zh-Hans.json'));
  counterpart.registerTranslations('zh-Hant', require('./translations/zh-Hant.json'));
}

export default connect(mapStateToProps)(Dashboard);
/* eslint-enable global-require */
