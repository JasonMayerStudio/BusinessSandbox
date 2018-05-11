import React, { Component } from 'react';
import PropTypes from 'prop-types';
import counterpart from 'counterpart';

import { initCommonTranslate } from 'Utils/languages';

import ProductSelection from '../ProductSelection/Register';

import './RegisterProductSelection.scss';

class RegisterProductSelection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // The idea here is to pass a flag into the router to when they click on
      // "Continue to BusinessView" that lets them know this login is a new user,
      // so that they will be shown the terms & conditions modal rather than be
      // immediately redirected to the dashboard page.
      productSelected: false,
    };

    initCommonTranslate();
  }

  render() {
    return (
      <section className="landing product-selection-landing">
        <h1>
          {counterpart('globalTranslate.registration.thankYouForRegistering')}
        </h1>
        <p className="product-selection-detail">
          {counterpart('globalTranslate.registration.selectAProduct')}
        </p>

        <ProductSelection
          history={this.props.history}
          location={this.props.location}
        />
      </section>
    );
  }
}

RegisterProductSelection.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default RegisterProductSelection;
