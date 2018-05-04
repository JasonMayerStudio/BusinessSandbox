import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import queryString from 'query-string';

import { isAuthenticated } from 'Selectors/authSelectors';
import { getFeatureFlags } from 'Utils/featureFlagUtils';
import LayoutAuthenticated from '../LayoutAuthenticated/';
import LayoutUnauthenticated from '../LayoutUnauthenticated/';
import { setFeatureFlags } from '../../actions/featureFlagActions';

export class App extends Component {
  componentDidMount() {
    // @todo, audit this initial draft implementation of feature flags
    const hostname = window.location.hostname;
    const newFeatureFlags = getFeatureFlags(hostname);
    this.props.setFeatureFlags(newFeatureFlags);
  }

  render() {
    const parsedQueryString = queryString.parse(this.props.location.search);
    const hasWebToken = (parsedQueryString.id_token) ? true : null;

    const isLoggingOut = this.props.location.pathname.includes('logout');

    return (
      <div className="layout-wrapper">
        {(this.props.isAuthenticated || hasWebToken || isLoggingOut) && <LayoutAuthenticated />}
        {!this.props.isAuthenticated && !hasWebToken && !isLoggingOut && <LayoutUnauthenticated />}
      </div>
    );
  }
}

App.propTypes = {
  location: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  setFeatureFlags: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    isAuthenticated: isAuthenticated(state.auth),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setFeatureFlags: (newFlags) => dispatch(setFeatureFlags(newFlags)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
