import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import counterpart from 'counterpart';
import { connect } from 'react-redux';

import Accordion from 'Components/accordion/accordion.js';
import BusinessViewIcon from 'Components/icons/business-view-icon/BusinessViewIcon.js';
import Button from 'Components/Button';
import CloseIcon from 'Components/icons/CloseIcon';
import PrimaryButton from 'Components/Button/PrimaryButton';

import { selectCurrentPreferences } from 'Selectors/preferencesSelectors';

import { initCommonTranslate } from 'Utils/languages';

import ProductPane from '../ProductPane';
import ProductAddons from '../ProductAddons';

import { apiGetProducts, saveProduct, overrideProduct } from '../../../api/merchantApi';
import { getUserById, getPrimaryMerchantByUserId } from '../../../api/userApi';

import '../ProductSelection.scss';

class ChangePlan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      addonTotal: 0,
      productTotal: 0,
      productServicesList: [],
      productAddonsList: [],
      productUpgrade: 'LITE',
      addonCounter: 0,
      saveProductList: {
        merchantProducts: [],
      },
      overrideProducts: {
        adminProducts: [
          {
            changeFrequency: '',
            currencyCodeId: 0,
            isActive: true,
            price: 0,
            productId: 0,
          },
        ],
      },
      choosePro: false,
      chooseLite: false,
      overridePrice: 0,
      isOverride: false,
      currentUser: {},
      currentMerchant: {},
    };

    registerTranslations();

    this.attachBindings();
  }

  componentDidMount() {
    this.toggleDrawer();

    this.getAPI();
  }

  componentWillUnmount() {
    this.toggleDrawer();
  }

  getAPI() {
    let addonTotal = this.state.addonTotal;
    let productTotal = this.state.productTotal;
    let total = this.state.total;
    let addonCounter = this.state.addonCounter;
    const userId = this.props.match.params.userId;

    function handleProducts(products) {
      const productAddonsList = [];
      const productServicesList = [];
      let productUpgrade;

      products.forEach((prod) => {
        if (prod.isAddon) {
          productAddonsList.push(prod);

          if (prod.isActive) {
            if (prod.overridePrice === prod.price) {
              addonTotal += parseInt(prod.price, 10);
            } else if (prod.overridePrice !== prod.price) {
              addonTotal += parseInt(prod.overridePrice, 10);
            }
            addonCounter += 1;
          }
        } else {
          productServicesList.push(prod);

          if (prod.isActive) {
            productUpgrade = prod.productName;

            if (prod.overridePrice !== null) {
              if (prod.overridePrice === prod.price) {
                productTotal += parseInt(prod.price, 10);
              } else if (prod.overridePrice !== prod.price) {
                productTotal += parseInt(prod.overridePrice, 10);
              }
            } else {
              productTotal += prod.price;
            }
          }
        }
      });

      total = productTotal + addonTotal;

      return {
        total,
        productAddonsList,
        productServicesList,
        productUpgrade,
        addonCounter,
      };
    }

    Promise.all([
      getUserById(userId),
      new Promise((accept, reject) => {
        getPrimaryMerchantByUserId(userId)
        .then((res) => {
          const currentMerchant = Object.assign({}, res);
          return apiGetProducts(currentMerchant.merchantId)
            .then((products) => {
              accept({ currentMerchant, products });
            });
        })
        .catch(reject);
      }),
    ])
   .then((results) => {
     const currentUser = Object.assign({}, results[0]);
     const { currentMerchant, products } = results[1];
     const complete = handleProducts(products);
     this.subtotalText(complete.addonCounter);
     this.setState(Object.assign({}, complete, { currentUser, currentMerchant }));
   });
  }

  attachBindings() {
    this.getAPI = this.getAPI.bind(this);
    this.handleProductSelection = this.handleProductSelection.bind(this);
    this.handleAddonSelections = this.handleAddonSelections.bind(this);
    this.saveProductChanges = this.saveProductChanges.bind(this);
    this.subtotalText = this.subtotalText.bind(this);
    this.toggleDrawer = this.props.toggleDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.calcTotal = this.calcTotal.bind(this);
    this.updateOverridePrice = this.updateOverridePrice.bind(this);
    this.updateOverrideAddons = this.updateOverrideAddons.bind(this);
  }

  saveProductChanges() {
    const combinedProducts = this.state.productServicesList.concat(this.state.productAddonsList);

    if (this.state.isOverride) {
      const adminProducts = combinedProducts.map((prod, index) => {
        if (combinedProducts[index].overridePrice !== null) {
          prod.price = combinedProducts[index].overridePrice; // eslint-disable-line no-param-reassign
        } else if (combinedProducts[index].overridePrice === null) {
          prod.overridePrice = combinedProducts[index].price; // eslint-disable-line no-param-reassign
        }

        prod.currencyCodeId = combinedProducts[index].chargeCode; // eslint-disable-line no-param-reassign
        return prod;
      });
      const overrideProducts = { adminProducts };
      this.setState({ overrideProducts });
      overrideProduct(this.state.currentMerchant.merchantId, overrideProducts);
    } else {
      const saveProductList = { merchantProducts: combinedProducts };

      this.setState({ saveProductList });
      saveProduct(this.state.currentMerchant.merchantId, saveProductList);
    }

    this.props.history.goBack();
  }

  calcTotal() {
    let finalTotal = this.state.total;
    let productTotal;
    let addonTotal;

    if (this.state.isOverride) {
      productTotal = this.state.productServicesList.reduce((total, service) => {
        if (service.isActive && service.overridePrice !== null) {
          return total + parseInt(service.overridePrice, 10);
        } else if (service.isActive && service.overridePrice === null) {
          return total + parseInt(service.price, 10);
        }

        return parseInt(total, 10);
      }, 0);

      addonTotal = this.state.productAddonsList.reduce((total, service) => {
        if (service.isActive && service.overridePrice !== null) {
          return total + parseInt(service.overridePrice, 10);
        } else if (service.isActive && service.overridePrice === null) {
          return total + parseInt(service.price, 10);
        }

        return parseInt(total, 10);
      }, 0);
    } else {
      productTotal = this.state.productServicesList.reduce((total, service) => {
        if (service.isActive) {
          return total + parseInt(service.price, 10);
        }

        return parseInt(total, 10);
      }, 0);

      addonTotal = this.state.productAddonsList.reduce((total, service) => {
        if (service.isActive) {
          return total + parseInt(service.price, 10);
        }

        return parseInt(total, 10);
      }, 0);
    }

    finalTotal = parseInt(productTotal + addonTotal, 10);
    this.setState({ productTotal, addonTotal, total: parseInt(finalTotal, 10) });
  }

  handleProductSelection(index) {
    // this allows for switching multiple pro tier products
    const productServicesList = this.state.productServicesList.map((service, i) => {
      if (service.isActive && index !== i) {
        if (service.productName === 'LITE') {
          this.setState({ chooseLite: true });
        } else {
          this.setState({ choosePro: true });
        }

        service.isActive = false; // eslint-disable-line no-param-reassign
        this.calcTotal();
      } else if (!service.isActive && index === i) {
        this.setState({ productUpgrade: service.productName });
        if (service.productName === 'LITE') {
          this.setState({ chooseLite: true });
        } else {
          this.setState({ choosePro: true });
        }

        service.isActive = true; // eslint-disable-line no-param-reassign
        this.calcTotal();
      }

      return service;
    });

    this.setState({ productServicesList });
  }

  updateOverridePrice(price, id) {
    this.setState({
      isOverride: true,
      overridePrice: price,
    });
    this.handleProductSelection();

    const productServicesList = this.state.productServicesList.map((service) => {
      if (service.productId === id) {
        service.overridePrice = parseInt(price, 10); // eslint-disable-line no-param-reassign
        service.isActive = true; // eslint-disable-line no-param-reassign
      }

      return service;
    });

    this.setState({ productServicesList }, () => {
      this.calcTotal();
    });
  }

  updateOverrideAddons(overrideAddons) {
    this.setState({ isOverride: true });
    const updatedAddons = this.state.productAddonsList.map((addon, index) => {
      addon.overridePrice = overrideAddons[index].overridePrice; // eslint-disable-line no-param-reassign
      return addon;
    });
    this.setState({ productAddonsList: updatedAddons });
    this.calcTotal();
  }

  subtotalText(count) {
    if (count <= 0) {
      this.setState({ totalItemsSelected: ' + 0 Add-ons' });
    } else if (count === 1) {
      this.setState({ totalItemsSelected: ' + 1 Add-on' });
    } else {
      this.setState({ totalItemsSelected: ` + ${count} Add-ons` });
    }
  }

  handleAddonSelections(indexes) {
    let addonTotal = this.state.addonTotal;
    let addonCounter = this.state.addonCounter;

    const addOns = this.state.productAddonsList.map((addOn, i) => {
      if (addOn.isActive && indexes.indexOf(i) < 0) {
        addonTotal -= addOn.price;
        addOn.isActive = false; // eslint-disable-line no-param-reassign
        addonCounter -= 1;
      } else if (!addOn.isActive && indexes.indexOf(i) >= 0) {
        addonTotal += addOn.price;
        addOn.isActive = true; // eslint-disable-line no-param-reassign
        addonCounter += 1;
      }

      return addOn;
    });

    this.setState({ addonTotal, addOns, addonCounter });
    this.subtotalText(addonCounter);
    this.calcTotal();
  }

  closeDrawer(event) {
    event.preventDefault();
    this.props.history.goBack();
  }

  render() {
    initCommonTranslate();

    return (
      <div className="ProductSelection drawer-content">
        <div className="drawer-heading">
          <h1 className="drawer-headline">
            {counterpart('globalTranslate.drawer.changePlan')}
          </h1>
          <Button
            type="button"
            action={this.closeDrawer}
            iconDirection="right"
            icon={CloseIcon}
            verticalAlign="super"
          >
            {counterpart('globalTranslate.drawer.close')}
          </Button>
        </div>


        <div className="Product-container">
          <div className="Product-container__header">
            <div className="Product-container__header-logo">
              <BusinessViewIcon /><br />
              <span>{counterpart('productSelection.customerPlatform')}</span>
            </div>
            <div className="Product-container__header-billing-info">
              {counterpart('productSelection.primaryBillingMid')}#<br />
              {this.state.currentMerchant.merchantNumber}
            </div>
          </div>
          <div className="Product-container__content">
            <div className="Product-container__content-product-panes">
              {this.state.productServicesList.map((service, index) => (
                <Accordion
                  key={service.productId}
                  id={service.productId}
                  title={counterpart(`productSelection.${service.productName.toLowerCase()}`)}
                  monthText={counterpart('productSelection.month')}
                  includesText={counterpart('productSelection.includes')}
                  current={service.isActive}
                  currentPlanText={counterpart('productSelection.currentPlan')}
                  productPrice={service.overridePrice && service.price !== service.overridePrice ? service.overridePrice : service.price}
                  override={this.state.isOverride}
                  updateOverridePrice={this.updateOverridePrice}
                >
                  <ProductPane
                    key={service.productId}
                    productName={service.productName}
                    productPrice={service.price}
                    isPro={service.productName !== 'LITE'}
                    choosePro={this.state.choosePro}
                    chooseLite={this.state.chooseLite}
                    choosePlan={this.state.choosePlan}
                    currentPlan={service.isActive}
                    productServices={service.features}
                    onClick={() => {
                      this.handleProductSelection(index);
                    }}
                    drawerContent
                  />
                </Accordion>
              ))}
            </div>
            {
              (this.state.productAddonsList.length > 0)
              ? (
                <div className="Product-container__content-addons">
                  <Accordion
                    title={counterpart('productSelection.addOns')}
                    subtitle={counterpart('productSelection.additionalProducts')}
                    isAddons
                  >
                    <ProductAddons
                      language={this.props.preferences.language}
                      overrideable
                      updateIfOverrided={this.updateOverrideAddons}
                      addOns={this.state.productAddonsList}
                      onSelectionChange={this.handleAddonSelections}
                      selected={this.state.productAddonsList.map((item, index) => {
                        return {
                          index,
                          isActive: item.isActive,
                        };
                      }).filter((item) => item.isActive).map((item) => item.index)}
                    /> {/* returns an array of indexes that points to items with attribute isActive = true */}
                  </Accordion>
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
            <div className="Product-container__footer-actions">
              <PrimaryButton
                action={this.saveProductChanges}
                type="submit"
              >
                {counterpart('globalTranslate.drawer.saveProductChanges')}
              </PrimaryButton>
              <Button
                type="button"
                action={this.closeDrawer}
              >
                {counterpart('globalTranslate.drawer.cancel')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ChangePlan.propTypes = {
  toggleDrawer: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
    history: PropTypes.object,
    location: PropTypes.object,
    match: PropTypes.object,
    goBack: PropTypes.func,
  }),
  match: PropTypes.object,
  preferences: PropTypes.object.isRequired,
};

ChangePlan.defaultProps = {
  toggleDrawer: () => {},
  history: {},
  match: {},
};

function mapStateToProps(state) {
  return {
    preferences: selectCurrentPreferences(state.preferences),
  };
}

function registerTranslations() {
  counterpart.registerTranslations('en-US', require('../translations/en-us.json'));
  counterpart.registerTranslations('en-GB', require('../translations/en-gb.json'));
  counterpart.registerTranslations('fr-CA', require('../translations/fr-ca.json'));
  counterpart.registerTranslations('zh-Hans', require('../translations/zh-Hans.json'));
  counterpart.registerTranslations('zh-Hant', require('../translations/zh-Hant.json'));
}

export default withRouter(connect(mapStateToProps)(ChangePlan));
