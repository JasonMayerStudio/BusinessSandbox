/* eslint-disable global-require, class-methods-use-this */
import counterpart from 'counterpart';
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getMerchantsForTable, getMerchantById } from 'Selectors/merchantSelectors';

import TextInput from 'Components/forms/text-input/TextInput.js';
import Button from 'Components/Button';
import CheckIcon from 'Components/icons/check-icon/CheckIcon.js';
import CloseIcon from 'Components/icons/CloseIcon';
import PrimaryButton from 'Components/Button/PrimaryButton';

import { initCommonTranslate } from 'Utils/languages';

import RegisterMerchantForm from '../RegisterMerchantForm';

import * as merchantActions from '../../actions/merchantActions';

import { getObscuredString, updateFromObfuscatedString } from '../../utils/formUtils';

import './CreateMerchantDrawer.scss';

export class CreateMerchantDrawer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newMerchant: getEmptyMerchant(),
      obfuscatedDdaTaxId: '',
      lastMerchantRegistered: null,
      errors: {},
      saving: this.props.makingRequest,
      valid: false,
      updateLocation: {
        email: this.props.merchant.email,
        fax: this.props.merchant.fax,
        merchantId: this.props.merchant.merchantId,
        phone: this.props.merchant.phoneNumber,
      },
    };

    this.attachBindings();
  }

  componentDidMount() {
    this.toggleDrawer();
  }

  componentWillReceiveProps(nextProps) {
    const newState = {
      lastMerchantRegistered: nextProps.lastMerchantRegistered,
      errors: { merchantNumber: nextProps.error && nextProps.error.message },
    };
    if (nextProps.lastMerchantRegistered && nextProps.lastMerchantRegistered.id) {
      newState.newMerchant = getEmptyMerchant();
    }

    this.setState(newState);
  }

  componentWillUnmount() {
    this.toggleDrawer();
  }

  attachBindings() {
    this.toggleDrawer = this.props.toggleDrawer.bind(this);
    this.updateFormState = this.updateFormState.bind(this);
    this.registerMerchant = this.registerMerchant.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.handleEditLocationForm = this.handleEditLocationForm.bind(this);
    this.updateEditLocation = this.updateEditLocation.bind(this);
  }

  updateFormState(event) {
    const newMerchant = this.state.newMerchant;
    const field = event.target.name;
    let newValue;
    let newObfuscatedValue = this.state.obfuscatedDdaTaxId;

    if (field === 'ddaTaxId') {
      newValue = updateFromObfuscatedString(newMerchant.ddaTaxId, event.target.value);
      newObfuscatedValue = getObscuredString(newValue);
    } else {
      newValue = event.target.value;
    }
    newMerchant[field] = newValue;

    const valid = this.isFormValid();
    this.setState({
      newMerchant,
      obfuscatedDdaTaxId: newObfuscatedValue,
      lastMerchantRegistered: null,
      valid,
      errors: {},
    });
  }

  isFormValid() {
    let formIsValid = true;

    if (this.state.newMerchant.merchantNumber.length < 10) {
      formIsValid = false;
    }

    if (this.state.newMerchant.ddaTaxId.length < 10) {
      formIsValid = false;
    }

    return formIsValid;
  }

  registerMerchant(event) {
    event.preventDefault();

    this.setState({
      errors: {},
    });

    const newMerchant = this.state.newMerchant;
    this.props.actions.registerMerchant(newMerchant.merchantNumber, newMerchant.ddaTaxId);
  }

  closeDrawer(event) {
    event.preventDefault();
    this.props.actions.clearLastRegisteredMerchant();
    this.props.history.goBack();
  }

  handleEditLocationForm(e) {
    const update = { ...this.state.updateLocation };
    if (e.target.name === 'email') {
      update.email = e.target.value;
    } else if (e.target.name === 'phone') {
      update.phone = e.target.value;
    } else if (e.target.name === 'fax') { update.fax = e.target.value; }
    this.setState({ updateLocation: update });
  }

  updateEditLocation() {
    const merchant = Object.assign({}, this.props.merchant);
    merchant.email = this.state.updateLocation.email;
    merchant.phoneNumber = this.state.updateLocation.phone;
    merchant.fax = this.state.updateLocation.fax;
    this.props.actions.updateMerchant(merchant);
    this.props.actions.clearLastRegisteredMerchant();
    this.props.history.goBack();
  }

  get editLocation() {
    const edit = this.state.updateLocation;
    return (
      <div className="drawer-main-top">
        <div className="field-group-vertical">
          <TextInput
            name="phone"
            label={counterpart('edit-location.phone')}
            type="text"
            value={edit.phone}
            onChange={this.handleEditLocationForm}
          />
          <TextInput
            name="fax"
            label={counterpart('edit-location.fax')}
            type="text"
            value={edit.fax}
            onChange={this.handleEditLocationForm}
          />
          <TextInput
            name="email"
            label={counterpart('edit-location.email')}
            type="text"
            value={edit.email}
            onChange={this.handleEditLocationForm}
          />
        </div>
      </div>
    );
  }

  get registerNewMerchants() {
    return (
      <div className="drawer-main-top">
        <div className="register-directions">
          <h3 className="register-directions-header">{counterpart('create-merchant.title')}</h3>
          <p className="register-directions-text">{counterpart('create-merchant.body1')}</p>
          <p className="register-directions-text">{counterpart('create-merchant.body2')} <a href="tel:999-555-1212" className="register-phone">1+ XXX-XXX-XXXX</a> {counterpart('create-merchant.body3')}</p>
        </div>
        <div className="field-group-vertical">
          <RegisterMerchantForm
            merchantIdFieldName="merchantNumber"
            merchantIdFieldLabel={counterpart('globalTranslate.drawer.merchantID')}
            onChange={this.updateFormState}
            merchantIdFieldValue={this.state.newMerchant.merchantNumber}
            merchantIdFieldErorr={this.state.errors.merchantNumber}
            verifyFieldName="ddaTaxId"
            verifyFieldLabel={counterpart('globalTranslate.drawer.verifyBankAccountOrTaxID')}
            verifyFieldValue={this.state.obfuscatedDdaTaxId}
            verifyFieldError={this.state.errors.ddaTaxId}
          />
        </div>
      </div>
    );
  }

  render() {
    const divStyle = {
      border: '1px solid #222129',
      display: 'flex',
      justifyContent: 'flex-start',
      marginBottom: '2em',
      padding: '1em',
    };
    const checkStyle = {
      borderRadius: '50%',
      border: '2px solid #5aa832',
      color: '#5aa832',
      fontWeight: 'bold',
      marginRight: '1em',
      padding: '24px 16px 16px 24px',
    };

    initCommonTranslate();
    initContainerTranslate();

    return (
      <form onSubmit={this.submitForm} className="drawer-content">
        <div className="drawer-heading">
          <h1 className="drawer-headline">
            {this.props.isEditLocation
              ? counterpart('edit-location.title')
              : counterpart('globalTranslate.drawer.addNewMerchantID')
            }
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
        <div className="drawer-body">
          <div className="drawer-main">
            {this.props.isEditLocation
              ? this.editLocation
              : this.registerNewMerchants
            }
            <div className="drawer-main-bottom">
              {this.state.lastMerchantRegistered && this.state.lastMerchantRegistered.merchantId &&
              <div style={divStyle}>
                <div style={checkStyle}><CheckIcon /></div>
                <div>
                  <h4>{counterpart('globalTranslate.drawer.youreRegistering')}:</h4>
                  <h3>{this.state.lastMerchantRegistered.businessName}</h3>
                </div>
              </div>}

              <div className="button-group-vertical">
                {this.props.isEditLocation
                  ?
                    <PrimaryButton
                      action={this.updateEditLocation}
                      disabled={this.state.saving}
                    >
                      { this.state.saving
                        ? counterpart('globalTranslate.drawer.saving')
                        : counterpart('globalTranslate.drawer.saveAndClose')
                      }
                    </PrimaryButton>
                  :
                    <PrimaryButton
                      action={this.registerMerchant}
                      disabled={!this.state.valid || this.state.saving}
                    >
                      { this.state.saving
                        ? counterpart('globalTranslate.drawer.registering')
                        : counterpart('globalTranslate.drawer.registerMID')
                      }
                    </PrimaryButton>
                }
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
      </form>
    );
  }
}

CreateMerchantDrawer.propTypes = {
  actions: PropTypes.object.isRequired,
  error: PropTypes.object,
  history: PropTypes.object.isRequired,
  lastMerchantRegistered: PropTypes.object,
  makingRequest: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  isEditLocation: PropTypes.bool,
  merchant: PropTypes.shape({
    email: PropTypes.string,
    businessName: PropTypes.string,
    attention: PropTypes.string,
    merchantId: PropTypes.number,
    merchantNumber: PropTypes.string,
    phoneNumber: PropTypes.string,
    fax: PropTypes.string,
    id: PropTypes.number,
  }),
};

CreateMerchantDrawer.defaultProps = {
  error: {},
  isEditLocation: false,
  lastMerchantRegistered: {},
  merchant: {},
};

function initContainerTranslate() {
  counterpart.registerTranslations('en-US', require('./translations/en-us.json'));
  counterpart.registerTranslations('en-GB', require('./translations/en-gb.json'));
  counterpart.registerTranslations('fr-CA', require('./translations/fr-ca.json'));
  counterpart.registerTranslations('zh-Hans', require('./translations/zh-Hans.json'));
  counterpart.registerTranslations('zh-Hant', require('./translations/zh-Hant.json'));
}

function getEmptyMerchant() {
  return {
    merchantNumber: '',
    ddaTaxId: '',
  };
}

function mapStateToProps(state, ownProps) {
  return {
    error: state.merchants.error,
    lastMerchantRegistered: state.merchants.lastMerchantRegistered,
    merchant: getMerchantById(getMerchantsForTable(state.merchants.data), ownProps.match.params.merchantId),
    makingRequest: state.merchants.isFetching,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(merchantActions, dispatch),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateMerchantDrawer));
