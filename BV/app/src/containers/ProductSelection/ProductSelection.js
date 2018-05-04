import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import counterpart from 'counterpart';

import BusinessViewIcon from 'Components/icons/business-view-icon/BusinessViewIcon.js';
import HollowClearButton from 'Components/Button/HollowClearButton';

import { selectCurrentPreferences } from 'Selectors/preferencesSelectors';

import ProductPane from './ProductPane';
import ProductAddons from './ProductAddons';

import { apiGetProducts, saveProduct } from '../../api/merchantApi';

import './ProductSelection.scss';

export class ProductSelection extends Component {
  constructor(props) {
    super(props);

    registerTranslations();

    this.state = {
      total: 0,
      productServicesList: [],
      productAddonsList: [],
      productUpgrade: 'LITE',
      addonCounter: 0,
      saveProductList: {
        merchantProducts: [],
      },
      choosePro: false,
    };

    this.attachBindings();
  }

  componentDidMount() {
    this.getProductOptions();
  }

  getProductOptions() {
    let total = this.state.total;
    let addonCounter = this.state.addonCounter;

    apiGetProducts(this.props.auth.session.user.primaryMerchantId)
     .then((response) => {
       const addOns = [];
       const productServices = [];
       response.forEach((prod) => {
         if (prod.isAddon) {
           addOns.push(prod);
           if (prod.isActive) {
             total += prod.price;
             addonCounter += 1;
           }
         } else {
           productServices.push(prod);
           if (prod.productName === 'PRO' && prod.isActive) {
             total += prod.price;
           }
         }
       });

       this.subtotalText(addonCounter);
       this.setState({
         addonCounter,
         total,
         productServicesList: productServices,
         productAddonsList: addOns,
         totalItemsSelected: ` + 0 ${counterpart('productSelection.addOns')}`,
       });
     });
  }

  attachBindings() {
    this.getProductOptions = this.getProductOptions.bind(this);
    this.handleProductSelection = this.handleProductSelection.bind(this);
    this.handleAddonSelections = this.handleAddonSelections.bind(this);
    this.resetSelection = this.resetSelection.bind(this);
    this.saveProductChanges = this.saveProductChanges.bind(this);
    this.subtotalText = this.subtotalText.bind(this);
  }

  saveProductChanges() {
    if (this.state.choosePro) {
      const productServicesList = this.state.productServicesList.map((plan) => {
        if (plan.productName === 'LITE') {
          plan.isActive = false; // eslint-disable-line no-param-reassign
        } else if (plan.productName === 'PRO') {
          plan.isActive = true; // eslint-disable-line no-param-reassign
        }
        return plan;
      });

      this.setState({ productServicesList });
    }

    const combinedProducts = this.state.productServicesList.concat(this.state.productAddonsList);

    const saveProductList = { merchantProducts: combinedProducts };

    this.setState({ saveProductList });
    saveProduct(this.props.auth.session.user.primaryMerchantId, saveProductList);
  }

  handleProductSelection(index) {
    let total = this.state.total;

    // this allows for switching multiple pro tier products
    const productServicesList = this.state.productServicesList.map((service, i) => {
      if (service.isActive && index !== i) {
        total -= parseInt(service.price, 10);
        this.setState({ productUpgrade: '' });
        this.setState({ choosePro: false });
        service.isActive = false; // eslint-disable-line no-param-reassign
      } else if (!service.isActive && index === i) {
        total += parseInt(service.price, 10);
        this.setState({ productUpgrade: service.productName });
        this.setState({ choosePro: true });
        // service.isActive = true; // eslint-disable-line no-param-reassign
      }

      return service;
    });

    this.setState({ total, productServicesList });
  }

  subtotalText(count) {
    if (count <= 0) {
      this.setState({
        totalItemsSelected: ` + 0 ${counterpart('productSelection.addOns')}`,
      });
    } else if (count === 1) {
      this.setState({
        totalItemsSelected: ` + 1 ${counterpart('productSelection.addOn')}`,
      });
    } else {
      this.setState({
        totalItemsSelected: ` + ${count} ${counterpart('productSelection.addOns')}`,
      });
    }
  }

  resetSelection() {
    this.setState(
      {
        total: 0,
        productServicesList: [],
        productAddonsList: [],
        productUpgrade: '',
        addonCounter: 0,
        totalItemsSelected: '',
        choosePro: false,
      });

    this.getProductOptions();
  }

  handleAddonSelections(indexes) {
    let total = this.state.total;
    let addonCounter = this.state.addonCounter;

    const addOns = this.state.productAddonsList.map((addOn, i) => {
      if (addOn.isActive && indexes.indexOf(i) < 0) {
        total -= parseInt(addOn.price, 10);
        addOn.isActive = false; // eslint-disable-line no-param-reassign
        addonCounter -= 1;
      } else if (!addOn.isActive && indexes.indexOf(i) >= 0) {
        total += parseInt(addOn.price, 10);
        addOn.isActive = true; // eslint-disable-line no-param-reassign
        addonCounter += 1;
      }

      return addOn;
    });

    this.setState({ total, addOns, addonCounter });
    this.subtotalText(addonCounter);
  }

  render() {
    return (
      <div className="ProductSelection">
        <span className="cta-subheader-text">{counterpart('productSelection.lookingForMoreFeatures')}</span>
        <h1>{counterpart('productSelection.title')}</h1>
        <div className="Product-container">
          <div className="Product-container__header">
            <div className="Product-container__header-logo">
              <BusinessViewIcon /><br />
              <span>{counterpart('productSelection.customerPlatform')}</span>
            </div>
            <div className="Product-container__header-billing-info">
              {/* @todo Primary Billing MID# */}
              {counterpart('productSelection.primaryBillingMid')}#<br />
              0174597823
            </div>
          </div>
          <div className="Product-container__content">
            <div className="Product-container__content-product-panes">
              {this.state.productServicesList.map((service, index) => (
                <ProductPane
                  key={service.productId}
                  productName={service.productName}
                  productPrice={service.price}
                  isPro={service.productName !== 'LITE'}
                  choosePro={this.state.choosePro}
                  currentPlan={service.isActive}
                  productServices={service.features}
                  onClick={() => {
                    this.handleProductSelection(index);
                  }}
                />
              ))}
            </div>
            {
              (this.state.productAddonsList.length > 0)
              ? (
                <div className="Product-container__content-addons">
                  <ProductAddons
                    language={this.props.preferences.language}
                    title={counterpart('productSelection.additionalProducts')}
                    showIntro
                    addOns={this.state.productAddonsList}
                    onSelectionChange={this.handleAddonSelections}
                    selected={this.state.productAddonsList.map((item, index) => {
                      return {
                        index,
                        isActive: item.isActive,
                      };
                    }).filter((item) => item.isActive).map((item) => item.index)}
                  /> {/* returns an array of indexes that points to items with attribute isActive = true */}
                </div>
                )
              : null
            }
          </div>
          <div className="Product-container__footer">
            <div className="Product-container__footer-total">
              <div className="Product-container__footer-total-info">
                <div className="Product-container__footer-total-title">
                  {counterpart('productSelection.finalTotal')}
                </div>
                <span className="Product-container__footer-total-addons">
                  {this.state.productUpgrade}
                  {this.state.totalItemsSelected}
                </span>
              </div>
              <div className="Product-container__footer-total-finalprice">
                <div className="grand-total">
                  $<span className="grand-total-number">{this.state.total}</span>
                </div>
                <div className="currency-per-unit">USD /<br />{counterpart('productSelection.month')}</div>
              </div>
            </div>
            <div className="Product-container__footer-big-arrow" />
            <div className="Product-container__footer-actions">
              <div
                role="button"
                tabIndex="0"
                className="reset-selection"
                onClick={this.resetSelection}
              >
                {counterpart('productSelection.reset')}
              </div>
              <HollowClearButton
                action={this.saveProductChanges}
                verticalAlign="top"
              >
                {counterpart('productSelection.saveProductChanges')}
              </HollowClearButton>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProductSelection.propTypes = {
  auth: PropTypes.object.isRequired,
  preferences: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    auth: state.auth,
    preferences: selectCurrentPreferences(state.preferences),
  };
}

function registerTranslations() {
  counterpart.registerTranslations('en-US', require('./translations/en-us.json'));
  counterpart.registerTranslations('en-GB', require('./translations/en-gb.json'));
  counterpart.registerTranslations('fr-CA', require('./translations/fr-ca.json'));
  counterpart.registerTranslations('zh-Hans', require('./translations/zh-Hans.json'));
  counterpart.registerTranslations('zh-Hant', require('./translations/zh-Hant.json'));
}

export default connect(mapStateToProps)(ProductSelection);
