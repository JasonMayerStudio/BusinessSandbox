/* eslint-disable global-require, class-methods-use-this */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import classNames from 'classnames';
import counterpart from 'counterpart';
import { connect } from 'react-redux';

import BusinessViewIcon from 'Components/icons/business-view-icon/BusinessViewIcon.js';
import DashboardIcon from 'Components/icons/dashboard-icon/DashboardIcon.js';
import TransactionsIcon from 'Components/icons/transactions-icon/TransactionsIcon.js';
import ReportsIcon from 'Components/icons/reports-icon/ReportsIcon.js';
import StatementsIcon from 'Components/icons/statements-icon/StatementsIcon.js';
import MessageIcon from 'Components/icons/MessageIcon';
import AdminIcon from 'Components/icons/admin-icon/AdminIcon.js';

import Listener from 'Utils/listener';

import { fetchMessageCount } from '../../actions/messageActions';

import './Navigation.scss';

function initTranslations() {
  counterpart.registerTranslations('en-US', require('./translations/en-us.json'));
  counterpart.registerTranslations('en-GB', require('./translations/en-gb.json'));
  counterpart.registerTranslations('fr-CA', require('./translations/fr-ca.json'));
  counterpart.registerTranslations('zh-Hans', require('./translations/zh-Hans.json'));
  counterpart.registerTranslations('zh-Hant', require('./translations/zh-Hant.json'));
}

export class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    initTranslations();

    this.attachBindings();
    this.attachListeners();
  }

  componentDidMount() {
    this.updateMessageCount();
  }

  /**
   * @todo (Van Wilson) this may no longer be needed, once actual IDP is implemented
   */
  componentWillReceiveProps(newProps) {
    if (this.props.auth.isFetching !== newProps.auth.isFetching && this.props.auth.session !== null) {
      this.updateMessageCount();
    }
  }

  attachBindings() {
    this.updateMessageCount = this.updateMessageCount.bind(this);
  }

  attachListeners() {
    Listener.on('UPDATE_UNREAD_COUNT', this.updateMessageCount);
  }

  updateMessageCount() {
    this.props.getMessageCount();
  }

  render() {
    const navClasses = classNames('primary-nav', {
      'with-overlay': this.props.overlayClass,
    });

    return (
      <nav id="primary-nav" className={navClasses}>
        <header className="co-branding">
          <div className="co-branding-primary"><BusinessViewIcon /></div>
        </header>

        <ul className="vertical-nav">
          <li className="vertical-nav-item">
            <Link
              to="/"
              className={this.props.location.pathname === '/' ?
                         'vertical-nav-action vertical-nav-action-active' :
                         'vertical-nav-action'}
            >
              <span className="vertical-nav-icon"><DashboardIcon /></span>
              <span className="vertical-nav-label">{counterpart('globalTranslate.navigation.dashboard')}</span>
            </Link>
          </li>
          <li className="vertical-nav-item">
            <Link
              to="/reports"
              className={this.props.location.pathname === '/reports' ?
                         'vertical-nav-action vertical-nav-action-active' :
                         'vertical-nav-action'}
            >
              <span className="vertical-nav-icon"><ReportsIcon /></span>
              <span className="vertical-nav-label">{counterpart('globalTranslate.navigation.reports')}</span>
            </Link>
          </li>
          <li className="vertical-nav-item">
            <Link
              to="/old-reports"
              className={this.props.location.pathname === '/old-reports' ?
                         'vertical-nav-action vertical-nav-action-active' :
                         'vertical-nav-action'}
            >
              <span className="vertical-nav-icon"><ReportsIcon /></span>
              <span className="vertical-nav-label">{counterpart('globalTranslate.navigation.oldReports')}</span>
            </Link>
          </li>

          <li className="vertical-nav-item">
            <Link
              to="/transaction-finder"
              className={this.props.location.pathname === '/transaction-finder' ?
                         'vertical-nav-action vertical-nav-action-active' :
                         'vertical-nav-action'}
            >
              <span className="vertical-nav-icon"><TransactionsIcon /></span>
              <span className="vertical-nav-label">{counterpart('globalTranslate.navigation.transactions')}</span>
            </Link>
          </li>
          <li className="vertical-nav-item">
            <Link
              to="/statements"
              className={this.props.location.pathname === '/statements' ?
                         'vertical-nav-action vertical-nav-action-active' :
                         'vertical-nav-action'}
            >
              <span className="vertical-nav-icon"><StatementsIcon /></span>
              <span className="vertical-nav-label">{counterpart('globalTranslate.navigation.statements')}</span>
            </Link>
          </li>
          <li className="vertical-nav-item">
            <Link
              to="/chain-statements"
              className={this.props.location.pathname === '/chain-statements' ?
                         'vertical-nav-action vertical-nav-action-active' :
                         'vertical-nav-action'}
            >
              <span className="vertical-nav-icon"><StatementsIcon /></span>
              <span className="vertical-nav-label">{counterpart('globalTranslate.navigation.chainStatements')}</span>
            </Link>
          </li>
          <li className="vertical-nav-item">
            <Link
              to="/messages"
              className={this.props.location.pathname === '/messages' ?
                         'vertical-nav-action vertical-nav-action-active' :
                         'vertical-nav-action'}
            >
              <span className="vertical-nav-icon"><MessageIcon /></span>
              <span className="vertical-nav-label">
                {counterpart('globalTranslate.navigation.messageCenter')}
                {this.props.auth.session &&
                this.props.messages &&
                this.props.messages.count &&
                this.props.messages.count.unread > 0 &&
                  <span className="message-count">
                    {this.props.messages.count.unread}
                  </span>}
              </span>
            </Link>
          </li>
          <li className="vertical-nav-item">
            <Link
              to="/admin"
              className={this.props.location.pathname === '/admin' ?
                         'vertical-nav-action vertical-nav-action-active' :
                         'vertical-nav-action'}
            >
              <span className="vertical-nav-icon"><AdminIcon /></span>
              <span className="vertical-nav-label">{counterpart('globalTranslate.navigation.admin')}</span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

Navigation.propTypes = {
  overlayClass: PropTypes.string,
  getMessageCount: PropTypes.func.isRequired,
  messages: PropTypes.object,
  auth: PropTypes.object,
  location: PropTypes.object.isRequired,
};

Navigation.defaultProps = {
  overlayClass: '',
  language: 'en-US',
  messages: {},
  auth: {},
};

function mapStateToProps(state) {
  return {
    messages: state.messages,
    auth: state.auth,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMessageCount: () => dispatch(fetchMessageCount()),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navigation));

/* eslint-enable global-require, class-methods-use-this */
