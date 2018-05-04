import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  withRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';

import { isAuthenticated } from 'Selectors/authSelectors';

import ChooseLanguage from '../ChooseLanguage';
import InactiveUser from '../InactiveUser';
import Login from '../Login';
import LoginForm from '../LoginForm';
import RegisterMerchant from '../RegisterMerchant';
import RegisterProductSelection from '../RegisterProductSelection';

import './Unauthenticated.scss';

class LayoutUnauthenticated extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="page-wrapper">
        <Switch>
          <Route
            path="/login"
            render={(props) => (
              <Login {...props} />
            )}
          />
          <Route
            path="/login-form"
            render={(props) => (
              <LoginForm {...props} />
            )}
          />
          <Route
            path="/choose-language"
            render={(props) => (
              <ChooseLanguage {...props} />
            )}
          />
          <Route
            path="/register-merchant"
            render={(props) => (
              <RegisterMerchant {...props} />
            )}
          />
          <Route
            path="/product-selection"
            render={(props) => (
              <RegisterProductSelection {...props} />
            )}
          />
          <Route
            path="/inactive-user"
            render={(props) => (
              <InactiveUser {...props} />
            )}
          />
          <Redirect to="/login" />
        </Switch>
      </div>
    );
  }
}

LayoutUnauthenticated.isPrivate = false;

LayoutUnauthenticated.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    isAuthenticated: isAuthenticated(state.auth),
  };
}

export default withRouter(connect(mapStateToProps)(LayoutUnauthenticated));
