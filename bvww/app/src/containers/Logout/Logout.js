// Libs / Helpers
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import counterpart from 'counterpart';

import BallSyncLoader from 'Components/loaders/BallSyncLoader';

import { isAuthenticated } from 'Selectors/authSelectors';

import { initCommonTranslate } from 'Utils/languages';

import * as authActions from '../../actions/authActions';

export class Logout extends Component {
  constructor(props) {
    super(props);

    initCommonTranslate();

    if (!this.props.isAuthenticated) {
      this.props.history.push('/login');
    }
  }

  componentDidMount() {
    this.props.logout();
  }

  componentWillReceiveProps(newProps) {
    if (!newProps.isAuthenticated) {
      this.props.history.push('/login');
    }
  }

  render() {
    return (
      <section className="container">
        <p>{counterpart('globalTranslate.authentication.logoutMessage')}</p>
        <BallSyncLoader />
      </section>
    );
  }
}

Logout.propTypes = {
  history: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    isAuthenticated: isAuthenticated(state.auth),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(authActions.logout()),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Logout));
