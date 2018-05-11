import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import counterpart from 'counterpart';

import BusinessViewIcon from 'Components/icons/business-view-icon/BusinessViewIcon.js';
import HollowClearButton from 'Components/Button/HollowClearButton';

import { selectCurrentPreferences } from 'Selectors/preferencesSelectors';

import { initCommonTranslate } from 'Utils/languages';
import Listener from 'Utils/listener';

import ProductPane from '../ProductPane';
import ProductAddons from '../ProductAddons';

import { apiGetProducts, saveProduct } from '../../../api/merchantApi';
import {
  getUserTerms,
  getUserDataAccessById,
} from '../../../api/userApi';
import { getRolesWithPermissions } from '../../../api/rolesPermissionsApi';
import {
  authTokenValidate,
  getAuthenticatedUser,
} from '../../../api/authApi';
import * as authActions from '../../../actions/authActions';
import { getUserPreferences } from '../../../actions/preferenceActions';

import './Register.scss';

class InitProductSelection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      productServicesList: [],
      productAddonsList: [],
      productUpgrade: 'LITE',
      addonCounter: 0,
      totalItemsSelected: ' + 0 Add-ons',
      saveProductList: {
        merchantProducts: [],
      },
      choosePro: false,
    };

    initCommonTranslate();

    this.attachBindings();
  }

  componentDidMount() {
    this.getAPI();

    if (this.props.auth.session && this.props.auth.session.user && this.props.preferences.firstName.length < 1) {
      this.fetchPreferences();
    }
  }

  getAPI() {
    let total = this.state.total;
    let addonCounter = this.state.addonCounter;
    apiGetProducts(this.props.location.state.userData.merchantId)
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
       this.setState({ addonCounter, total, productServicesList: productServices, productAddonsList: addOns });
     });
  }

  setupAuthenticatedUser(webToken, newUser) {
    const user = Object.assign({}, newUser);
    const userInfoArray = [];
    userInfoArray.push(getUserDataAccessById(user.userId));
    userInfoArray.push(getRolesWithPermissions());
    userInfoArray.push(getUserTerms(webToken));

    Promise.all(userInfoArray)
      .then((userInfoArrayResponses) => {
        user.dataAccess = userInfoArrayResponses[0];
        user.availableRoles = userInfoArrayResponses[1];
        user.termsAndConditions = userInfoArrayResponses[2];

        this.props.authActions.loginSuccess({
          sessionToken: webToken,
          user,
        });
      })
      .then(() => {
        this.fetchPreferences();
      });
  }

  attachBindings() {
    this.getAPI = this.getAPI.bind(this);
    this.handleProductSelection = this.handleProductSelection.bind(this);
    this.handleAddonSelections = this.handleAddonSelections.bind(this);
    this.resetSelection = this.resetSelection.bind(this);
    this.saveProductChanges = this.saveProductChanges.bind(this);
    this.subtotalText = this.subtotalText.bind(this);
    this.fetchAuthenticatedUser = this.fetchAuthenticatedUser.bind(this);
    this.fetchPreferences = this.fetchPreferences.bind(this);
    this.setupAuthenticatedUser = this.setupAuthenticatedUser.bind(this);
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
    } else {
      const productServicesList = this.state.productServicesList.map((plan) => {
        if (plan.productName === 'LITE') {
          plan.isActive = true; // eslint-disable-line no-param-reassign
        } else if (plan.productName === 'PRO') {
          plan.isActive = false; // eslint-disable-line no-param-reassign
        }
        return plan;
      });

      this.setState({ productServicesList });
    }

    const combinedProducts = this.state.productServicesList.concat(this.state.productAddonsList);

    const saveProductList = { merchantProducts: combinedProducts };

    this.setState({ saveProductList });
    saveProduct(this.props.location.state.userData.merchantId, saveProductList)
      .then(() => {
        this.fetchAuthenticatedUser();
      });
  }

  fetchAuthenticatedUser() {
    const webToken = this.props.auth.session.sessionToken;
    authTokenValidate(webToken)
      .then((isValidToken) => {
        if (isValidToken === 'false') {
          const authTokenValidateError = new Error('Invalid login token.');
          throw authTokenValidateError;
        }
        getAuthenticatedUser(webToken)
          .then((userResponse) => {
            if (userResponse.role) {
              this.setupAuthenticatedUser(webToken, userResponse);
            } else {
              const getAuthenticatedUserError = new Error('Error retrieving user.');
              throw getAuthenticatedUserError;
            }
          })
          .catch(() => {
            this.props.authActions.loginSuccess({
              sessionToken: webToken,
              user: null,
            });
            this.props.history.push('/choose-language');
          });
      })
      .catch(() => {
        this.props.history.push('/login');
      });
  }

  fetchPreferences() {
    this.props.getPreferences(this.props.auth.session.user.userId)
    .then(() => {
      const preferences = this.props.preferences;
      counterpart.setLocale(preferences.language);
      Listener.trigger('PREFERENCES_SET', preferences);
    });
  }

  handleProductSelection(index) {
    let total = this.state.total;

    // this allows for switching multiple pro tier products
    const productServicesList = this.state.productServicesList.map((service, i) => {
      if (service.isActive && index !== i) {
        total -= service.price;
        this.setState({ productUpgrade: '' });
        this.setState({ choosePro: false });
        service.isActive = false; // eslint-disable-line no-param-reassign
      } else if (!service.isActive && index === i) {
        total += service.price;
        this.setState({ productUpgrade: service.productName });
        this.setState({ choosePro: true });
      }

      return service;
    });

    this.setState({ total, productServicesList });
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

    this.getAPI();
  }

  handleAddonSelections(indexes) {
    let total = this.state.total;
    let addonCounter = this.state.addonCounter;

    const addOns = this.state.productAddonsList.map((addOn, i) => {
      if (addOn.isActive && indexes.indexOf(i) < 0) {
        total -= addOn.price;
        addOn.isActive = false; // eslint-disable-line no-param-reassign
        addonCounter -= 1;
      } else if (!addOn.isActive && indexes.indexOf(i) >= 0) {
        total += addOn.price;
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
        <div className="Product-container">
          <div className="Product-container__header">
            <div className="Product-container__header-logo">
              <BusinessViewIcon /><br />
              <span>Customer Platform</span>
            </div>
            <div className="Product-container__header-billing-info">
              {/* @todo Primary Billing MID# */}
              Primary Billing MID#<br />
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
                  language={this.props.location.state.userData.language.value}
                />
              ))}
            </div>
            <div className="Product-container__content-addons">
              <ProductAddons
                language={this.props.location.state.userData.language.value}
                title="Additional Products & Services"
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
          </div>
          <div className="Product-container__footer">
            <div className="Product-container__footer-total">
              <div className="Product-container__footer-total-info">
                <div className="Product-container__footer-total-title">Final Total</div>
                <span className="Product-container__footer-total-addons">
                  {this.state.productUpgrade}
                  {this.state.totalItemsSelected}
                </span>
              </div>
              <div className="Product-container__footer-total-finalprice">
                <div className="grand-total">
                  $<span className="grand-total-number">{this.state.total}</span>
                </div>
                <div className="currency-per-unit">USD /<br />Month</div>
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
                Reset
              </div>
              <HollowClearButton
                action={this.saveProductChanges}
                verticalAlign="top"
              >
                {counterpart('globalTranslate.registration.continueToBusinessView')}
              </HollowClearButton>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

InitProductSelection.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  authActions: PropTypes.object.isRequired,
  getPreferences: PropTypes.func.isRequired,
  preferences: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    auth: state.auth,
    preferences: selectCurrentPreferences(state.preferences),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    authActions: bindActionCreators(authActions, dispatch),
    getPreferences: (userId) => dispatch(getUserPreferences(userId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(InitProductSelection);
