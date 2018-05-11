import React, { Component } from 'react';
import PropTypes from 'prop-types';
import counterpart from 'counterpart';
import { connect } from 'react-redux';

import registrationImg from 'Assets/img/registration.png';

import BusinessViewIcon from 'Components/icons/business-view-icon/BusinessViewIcon.js';
import PrimaryButton from 'Components/Button/PrimaryButton';
import LeftPointerIcon from 'Components/icons/left-pointer-icon/LeftPointerIcon.js';
import RightPointerIcon from 'Components/icons/right-pointer-icon/RightPointerIcon.js';

import { initCommonTranslate } from 'Utils/languages';

import { getRegisteredMerchant } from '../../api/registrationApi';
import RegisterMerchantForm from '../RegisterMerchantForm';

import { getObscuredString, updateFromObfuscatedString } from '../../utils/formUtils';

import './RegisterMerchant.scss';

class RegisterMerchant extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newMerchant: getEmptyMerchant(),
      errors: {},
      obfuscatedDdaTaxId: '',
    };

    initCommonTranslate();

    this.attachBindings();
  }

  attachBindings() {
    this.isFormValid = this.isFormValid.bind(this);
    this.updateFormState = this.updateFormState.bind(this);
    this.goToProductSelection = this.goToProductSelection.bind(this);
    this.goBackToLanguageChoice = this.goBackToLanguageChoice.bind(this);
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
      valid,
      errors: {},
    });
  }

  goBackToLanguageChoice() {
    this.props.history.push({
      pathname: '/choose-language',
      state: { language: this.props.location.state.language },
    });
  }

  goToProductSelection() {
    const merchantData = {
      sessionToken: this.props.auth.session.sessionToken,
      merchantNumber: this.state.newMerchant.merchantNumber,
      ddaTaxId: this.state.newMerchant.ddaTaxId,
      language: this.props.location.state.language.value,
    };

    getRegisteredMerchant(merchantData)
      .then((response) => {
        const userData = {
          language: this.props.location.state.language,
          merchantId: response.merchantId,
        };

        this.props.history.push({
          pathname: '/product-selection',
          state: { userData },
        });
      })
      .catch((error) => {
        const defaultErrorMessage = {
          merchantNumber: '',
          ddaTaxId: '',
        };

        if (this.state.newMerchant.merchantNumber === '') {
          defaultErrorMessage.merchantNumber = counterpart('globalTranslate.registration.defaultErrorMessage');
        }

        if (this.state.obfuscatedDdaTaxId === '') {
          defaultErrorMessage.ddaTaxId = counterpart('globalTranslate.registration.defaultErrorMessage');
        }

        const thrownErrors = error || defaultErrorMessage;

        this.setState({
          errors: thrownErrors,
        });
      });
  }

  get registerMerchantForm() {
    return (
      <RegisterMerchantForm
        merchantIdFieldName="merchantNumber"
        merchantIdFieldLabel={counterpart('globalTranslate.registration.merchantId')}
        onChange={this.updateFormState}
        merchantIdFieldValue={this.state.newMerchant.merchantNumber}
        merchantIdFieldError={this.state.errors.merchantNumber}
        optionalMerchantIdTooltip="This is a description of the merchant ID field"
        optionalMerchantIdTooltipTitle={counterpart('globalTranslate.registration.merchantId')}
        verifyFieldName="ddaTaxId"
        verifyFieldLabel={counterpart('globalTranslate.registration.bankAccountNo')}
        verifyFieldValue={this.state.obfuscatedDdaTaxId}
        verifyFieldError={this.state.errors.ddaTaxId}
        optionalVerifyTooltip="This is a description of the bank account no. or tax ID field"
        optionalVerifyTooltipTitle={counterpart('globalTranslate.registration.bankAccountNo')}
      />
    );
  }

  render() {
    const moveForwardDisabled = (this.state.newMerchant.merchantNumber.length < 1 ||
                                this.state.obfuscatedDdaTaxId.length < 1) &&
                                Object.keys(this.state.errors).length === 0;

    return (
      <section className="landing registration-landing">
        <div className="registration-content">
          <img
            className="registration-illustration"
            src={registrationImg}
            alt="Registration"
          />
          <div className="registration-description">
            <ul className="registration-description-list">
              <li className="registration-description-list-item">
                <h1>Lorem ipsum dolor?</h1>
              </li>
              <li className="registration-description-list-item">
                <span className="inner">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
              </li>
              <li className="registration-description-list-item">
                <span className="inner">
                  Vestibulum ut varius lacus, eget lacinia quam.
                </span>
              </li>
              <li className="registration-description-list-item">
                <span className="inner">
                  Integer lacus justo, cursus quis semper ac, fermentum ac ante.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="landing-panel registration-panel">
          <div className="landing-content registration-panel-content">
            <BusinessViewIcon /><br />
            <p className="registration-prompt-text">
              <strong>{counterpart('globalTranslate.registration.welcome')}!</strong><br />
              {counterpart('globalTranslate.registration.register')}
            </p>
            {this.registerMerchantForm}
          </div>
          <div className="registration-buttons">
            <PrimaryButton
              action={this.goToProductSelection}
              icon={RightPointerIcon}
              iconDirection="right"
              verticalAlign="top"
              disabled={moveForwardDisabled}
            >
              {counterpart('globalTranslate.registration.goToProductSelection')}
            </PrimaryButton>
            <span
              tabIndex={0}
              role="button"
              className="link-inline"
              onClick={this.goBackToLanguageChoice}
            >
              <LeftPointerIcon /><span>{counterpart('globalTranslate.registration.returnToLanguageSelection')}</span>
            </span>
          </div>
        </div>
      </section>
    );
  }
}

function getEmptyMerchant() {
  return {
    merchantNumber: '',
    ddaTaxId: '',
  };
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

RegisterMerchant.propTypes = {
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(RegisterMerchant);
