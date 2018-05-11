import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { isAuthenticated } from 'Selectors/authSelectors';

const PRIVATE_ROOT = '/';
const PUBLIC_ROOT = '/login';

export class AuthRoute extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { component, ...remainingProps } = this.props;

    const { isPrivate } = component;

    if (this.props.isAuthenticated) {
      // If route is private, user proceeds, else route is public, redirect use to private root.
      return isPrivate
        ? <Route {...remainingProps} component={component} />
        : <Redirect to={PRIVATE_ROOT} />;
    } else {
      // If route is private, user is redirected to app's public root, else user proceeds.
      return isPrivate
        ? <Redirect to={PUBLIC_ROOT} />
        : <Route {...remainingProps} component={component} />;
    }
  }
}

AuthRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
  ]).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    isAuthenticated: isAuthenticated(state.auth),
  };
}

export default connect(mapStateToProps)(AuthRoute);
