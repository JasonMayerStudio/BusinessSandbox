import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { UserManager } from 'oidc-client';

import BusinessViewIcon from 'Components/icons/business-view-icon/BusinessViewIcon.js';
import LeftPointerIcon from 'Components/icons/left-pointer-icon/LeftPointerIcon.js';
import PrimaryButton from 'Components/Button/PrimaryButton';

import './Login.scss';

export class Login extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.goAuthenticate = this.goAuthenticate.bind(this);
    this.setBackgroundStyle = this.setBackgroundStyle.bind(this);
  }

  setBackgroundStyle() {
    const html = document.querySelector('html');
    html.style.backgroundColor = 'white';
  }

  goAuthenticate() {
    const port = (window.location.port) ? `:${window.location.port}` : '';
    const redirectUri = `https://${window.location.hostname}${port}`;

    const settings = {
      authority: 'https://login.microsoftonline.com/tfp/gpcustomerqa.onmicrosoft.com/B2C_1A_signup_signin_aad/v2.0/',
      client_id: 'da80bb2a-547c-4bdd-83dc-a19d52d5cfec',
      redirect_uri: redirectUri,
      response_type: 'id_token', // Can be 'code' or 'id_token' (id_token=JWT)
      scope: 'openid',
      extraQueryParams: {
        response_mode: 'query', // custom Microsoft B2C setting, b/c Global switched their AD to return a fragment by default
      },
    };

    const userManager = new UserManager(settings);
    userManager.signinRedirect();
  }

  render() {
    this.setBackgroundStyle();
    return (
      <section className="landing login-landing">
        <div className="landing-panel login-panel">
          <BusinessViewIcon /><br />
          <p className="login-description">
            <strong>Sign in</strong><br />
            with your BusinessView account<br />
          </p>
          <PrimaryButton
            action={this.goAuthenticate}
          >
            Sign In
          </PrimaryButton><br />

          <a className="link-inline" href="http://globalpaymentsinc.com">
            <LeftPointerIcon /><span>return to global payments homepage</span>
          </a>
        </div>
      </section>
    );
  }
}

Login.isPrivate = false;

Login.propTypes = {
  history: PropTypes.object,
};

Login.defaultProps = {
  history: {},
};

export default withRouter(Login);
