/* eslint-disable react/prop-types */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Button from 'Components/Button';
import PrimaryButton from 'Components/Button/PrimaryButton';
import TextInput from 'Components/forms/text-input/TextInput';

import { isAuthenticated } from 'Selectors/authSelectors';

import { checkLogin } from '../../actions/authActions';

class LoginForm extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    if (props.isAuthenticated) {
      this.props.history.push('/');
    }

    this.state = {
      credentials: {
        email: '',
        password: '',
      },
      validForm: false,
    };

    this.attachBindings();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth &&
        nextProps.auth.session &&
        nextProps.auth.session.sessionToken) {
      nextProps.history.goBack();
    }
  }

  attachBindings() {
    this.updateFormState = this.updateFormState.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  updateFormState(event) {
    const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;

    const validForm = this.checkForm();
    this.setState({
      credentials,
      validForm,
    });
  }

  checkForm() {
    return (
      this.state.credentials.email.length > 7 &&
      this.state.credentials.password.length > 7
    );
  }

  resetForm() {
    this.setState({
      credentials: {
        email: '',
        password: '',
      },
      validForm: false,
    });
  }

  submitForm(event) {
    event.preventDefault();

    this.props.dispatch(checkLogin(this.state.credentials));
  }

  render() {
    return (
      <section className="padded">
        <h1>LoginForm</h1>
        {this.props.authError && <div className="error">{this.props.authError.message}</div>}
        <form onSubmit={this.submitForm}>
          <div className="field-group-vertical">
            <TextInput
              name="email"
              label="Email"
              type="email"
              onChange={this.updateFormState}
              placeholder="jdoe@example.com"
              value={this.state.credentials.email}
            />
            <TextInput
              name="password"
              label="Password"
              type="password"
              onChange={this.updateFormState}
              placeholder=""
              value={this.state.credentials.password}
            />
          </div>
          <div className="button-group-vertical">
            <PrimaryButton
              action={this.submitForm}
              disabled={!this.state.validForm}
            >
              Login
            </PrimaryButton>
            <Button
              action={this.resetForm}
            >
              Reset
            </Button>
          </div>
        </form>
      </section>
    );
  }
}

LoginForm.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  authError: PropTypes.object,
};

LoginForm.defaultProps = {
  authError: null,
};

function mapStateToProps(state) {
  return {
    isAuthenticated: isAuthenticated(state.auth),
    authError: state.authError,
  };
}

export default withRouter(connect(mapStateToProps)(LoginForm));

/* eslint-ensable react/prop-types */
