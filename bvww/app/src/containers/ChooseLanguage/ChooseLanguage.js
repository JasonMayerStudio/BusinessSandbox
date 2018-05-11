import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import PrimaryButton from 'Components/Button/PrimaryButton';
import BusinessViewIcon from 'Components/icons/business-view-icon/BusinessViewIcon';
import RightPointerIcon from 'Components/icons/right-pointer-icon/RightPointerIcon';
import SelectInput from 'Components/forms/select-input/SelectInput';
import TextField from 'Components/forms/text-field/TextField';

import languageList from 'Utils/constants/languages';

import './ChooseLanguage.scss';

export class ChooseLanguage extends Component {
  constructor(props) {
    super(props);

    const ENGLISH = 0;

    this.state = {
      selectedItem: props.location.state ? props.location.state.language : languageList[ENGLISH],
    };

    this.attachBindings();
  }

  setBackgroundStyle() {
    const html = document.querySelector('html');
    html.style.backgroundColor = 'white';
  }

  attachBindings() {
    this.handleSelection = this.handleSelection.bind(this);
    this.setBackgroundStyle = this.setBackgroundStyle.bind(this);
    this.goToRegisterMerchant = this.goToRegisterMerchant.bind(this);
  }

  handleSelection(value, event) {
    event.stopPropagation();

    const newSelection = languageList.find((item) => {
      return item.value === value;
    });

    if (newSelection) {
      this.setState({ selectedItem: newSelection });
    }
  }

  goToRegisterMerchant() {
    this.props.history.push({
      pathname: '/register-merchant',
      state: { language: this.state.selectedItem },
    });
  }

  render() {
    this.setBackgroundStyle();
    return (
      <section className="landing language-landing">
        <div className="language-landing-welcome">
          <p className="language-landing-welcome-text">Welcome!</p>
          <p className="language-landing-welcome-text">Bienvenue!</p>
          <p className="language-landing-welcome-text">歡迎!</p>
          <p className="language-landing-welcome-text">欢迎!</p>
        </div>
        <div className="landing-panel language-panel">
          <div className="landing-content language-panel-welcome">
            <BusinessViewIcon /><br />
            <p className="language-description field-group-vertical">
              <strong>Welcome!</strong><br />
              Please choose the language you would like to use BusinessView in.
            </p>
            <div className="language-choice field-group-vertical">
              <TextField
                htmlFor="select-language"
                labelContent="Language"
              >
                <SelectInput
                  id="select-language"
                  dataList={languageList}
                  handleSelection={this.handleSelection}
                  selectedItem={this.state.selectedItem}
                  wrapperClass="select-menu__form field-input"
                />
              </TextField>
            </div>
          </div>
          <PrimaryButton
            action={this.goToRegisterMerchant}
            icon={RightPointerIcon}
            iconDirection="right"
            verticalAlign="top"
          >
            Continue to Registration
          </PrimaryButton>
        </div>
      </section>
    );
  }
}

ChooseLanguage.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

ChooseLanguage.isPrivate = false;

export default withRouter(ChooseLanguage);
