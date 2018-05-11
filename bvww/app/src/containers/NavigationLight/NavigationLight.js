/* eslint-disable global-require, class-methods-use-this */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import counterpart from 'counterpart';
import { connect } from 'react-redux';

import BusinessViewIcon from 'Components/icons/business-view-icon/BusinessViewIcon.js';
import DashboardIcon from 'Components/icons/DashboardIcon';
import TransactionsIcon from 'Components/icons/TransactionsIcon';
import ReportsIcon from 'Components/icons/ReportsIcon';
import StatementsIcon from 'Components/icons/StatementsIcon';
import MessageIcon from 'Components/icons/MessageIcon';
import AdminIcon from 'Components/icons/AdminIcon';
import LocationIcon from 'Components/icons/LocationIcon';

import Listener from 'Utils/listener';
import { checkForSingularReportId } from 'Utils/reports/checkForSingularReportId';

import {
  getAdminSectionAccess,
} from 'Utils/permissionsUtils';

import { fetchMessageCount } from '../../actions/messageActions';

import '../Navigation/Navigation.scss';

function initTranslations() {
  counterpart.registerTranslations('en-US', require('./../Navigation/translations/en-us.json'));
  counterpart.registerTranslations('en-GB', require('./../Navigation/translations/en-gb.json'));
  counterpart.registerTranslations('fr-CA', require('./../Navigation/translations/fr-ca.json'));
  counterpart.registerTranslations('zh-Hans', require('./../Navigation/translations/zh-Hans.json'));
  counterpart.registerTranslations('zh-Hant', require('./../Navigation/translations/zh-Hant.json'));
}

export class NavigationLight extends Component {
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
    const hasAdminPermissions = getAdminSectionAccess(this.props.parsedPermissions);

    let navClasses;
    if (this.props.overlayClass !== null) {
      navClasses = classNames('primary-nav', {
        'with-overlay': this.props.overlayClass,
      });
    }

    return (
      <nav id="primary-nav" className={navClasses}>
        <header className="co-branding">
          <div className="co-branding-primary"><BusinessViewIcon /></div>
        </header>

        <ul className="vertical-nav">
          <li className="vertical-nav-item">
            <div className="vertical-nav-action">
              <span className="vertical-nav-icon"><DashboardIcon /></span>
              <span className="vertical-nav-label">{counterpart('globalTranslate.navigation.dashboard')}</span>
            </div>
          </li>
          {this.props.parsedPermissions.reports.canView &&
          <li className="vertical-nav-item">
            <div className="vertical-nav-action">
              <span className="vertical-nav-icon"><ReportsIcon /></span>
              <span className="vertical-nav-label">{counterpart('globalTranslate.navigation.reports')}</span>
            </div>
          </li>}
          {this.props.parsedPermissions.transactions.canSearch &&
          <li className="vertical-nav-item">
            <div className="vertical-nav-action">
              <span className="vertical-nav-icon"><TransactionsIcon /></span>
              <span className="vertical-nav-label">{counterpart('globalTranslate.navigation.transactions')}</span>
            </div>
          </li>}
          {this.props.parsedPermissions.statements.canView &&
          <li className="vertical-nav-item">
            <div className="vertical-nav-action">
              <span className="vertical-nav-icon"><StatementsIcon /></span>
              <span className="vertical-nav-label">{counterpart('globalTranslate.navigation.statements')}</span>
            </div>
          </li>}
          {this.props.parsedPermissions.messages.canView &&
          <li className="vertical-nav-item">
            <div className="vertical-nav-action">
              <span className="vertical-nav-icon"><MessageIcon /></span>
              <span className="vertical-nav-label">
                {counterpart('globalTranslate.navigation.messageCenter')}
              </span>
            </div>
          </li>}
          {checkForSingularReportId(this.props.hierarchyReports, 6) &&
          <li className="vertical-nav-item">
            <div className="vertical-nav-action">
              <span className="vertical-nav-icon"><LocationIcon /></span>
              <span className="vertical-nav-label">
                {counterpart('globalTranslate.navigation.locationsAndEquipment')}
              </span>
            </div>
          </li>}
          {!checkForSingularReportId(this.props.hierarchyReports, 6) &&
          <li className="vertical-nav-item">
            <div className="vertical-nav-action">
              <span className="vertical-nav-icon"><LocationIcon /></span>
              <span className="vertical-nav-label">
                {counterpart('globalTranslate.navigation.locations')}
              </span>
            </div>
          </li>}
          {hasAdminPermissions && <li className="vertical-nav-item">
            <div className="vertical-nav-action">
              <span className="vertical-nav-icon"><AdminIcon /></span>
              <span className="vertical-nav-label">{counterpart('globalTranslate.navigation.admin')}</span>
            </div>
          </li>}
        </ul>
      </nav>
    );
  }
}

NavigationLight.propTypes = {
  auth: PropTypes.object,
  getMessageCount: PropTypes.func.isRequired,
  overlayClass: PropTypes.string,
  parsedPermissions: PropTypes.object.isRequired,
  hierarchyReports: PropTypes.object.isRequired,
};

NavigationLight.defaultProps = {
  auth: {},
  language: 'en-US',
  messages: {},
  overlayClass: '',
};

function mapStateToProps(state) {
  return {
    auth: state.auth,
    messages: state.messages,
    parsedPermissions: state.auth.session.user.parsedPermissions,
    hierarchyReports: state.auth.session.user.hierarchyReports,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMessageCount: () => dispatch(fetchMessageCount()),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavigationLight));

/* eslint-enable global-require, class-methods-use-this */
