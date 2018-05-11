import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classNames from 'classnames';
import counterpart from 'counterpart';
import queryString from 'query-string';

import updateDimensions from 'Utils/updateDimensions';

import BallSyncLoader from 'Components/loaders/BallSyncLoader';

import {
  getAuthRole,
  isAuthenticated,
} from 'Selectors/authSelectors';
import { selectCurrentPreferences } from 'Selectors/preferencesSelectors';

import Listener from 'Utils/listener';
import { initLanguage } from 'Utils/languages';
import { getParsedPermissionStructure } from 'Utils/permissionsUtils';
import whichTransitionEvent from 'Utils/transitionEndUtil';

import {
  getUserTerms,
  getUserDataAccessById,
  getUserById,
  getHierarchyBasedReport,
} from '../../api/userApi';
import { getRolesWithPermissions } from '../../api/rolesPermissionsApi';

import Navigation from '..//Navigation';
import NavigationLight from '../NavigationLight';
import Main from '../Main';
import Drawer from '../Drawer';
import SiteHeader from '../SiteHeader';
import TermsAndConditions from '../TermsAndConditions';

import {
  authTokenValidate,
  getAuthenticatedUser,
} from '../../api/authApi';

import * as authActions from '../../actions/authActions';
import { getUserPreferences } from '../../actions/preferenceActions';

export class LayoutAuthenticated extends Component {
  constructor(props) {
    super(props);

    const authRole = getAuthRole(this.props.auth);

    const termsAccepted = this.props.auth.session &&
      this.props.auth.session.user &&
      this.props.auth.session.user.termsAndConditions
      ? this.props.auth.session.user.termsAndConditions.hasAcceptedTerms
      : false;

    this.state = {
      isDrawerOpen: false,
      isSecondaryDrawerOpen: false,
      drawerIsExtended: false,
      authRole,
      termsAccepted,
      navigationToggled: false,
      transitionEnded: true,
    };

    this.attachBindings();
    this.attachListeners();
  }

  componentWillMount() {
    this.setupTranslationDefaults();
    if (!this.props.isAuthenticated) {
      const parsedQueryString = queryString.parse(this.props.location.search);
      const webToken = parsedQueryString.id_token;

      if (webToken) {
        authTokenValidate(webToken)
          .then((isValidToken) => {
            if (isValidToken === 'false') {
              const authTokenValidateError = new Error('Invalid login token.');
              throw authTokenValidateError;
            }
            this.props.authActions.setAuthToken(webToken); // seed the state so auth header available

            getAuthenticatedUser(webToken)
              .then((userResponse) => {
                if (userResponse.role) {
                  this.setupAuthenticatedUser(webToken, userResponse);
                } else {
                  const getAuthenticatedUserError = new Error('Error retrieving user.');
                  throw getAuthenticatedUserError;
                }
              })
              .catch((userResponse) => {
                if (userResponse.status === 401) {
                  this.props.history.replace('/inactive-user');
                } else {
                  this.props.authActions.loginSuccess({
                    sessionToken: webToken,
                    user: null,
                  });
                  this.props.history.replace('/choose-language');
                }
              });
          })
          .catch(() => {
            this.props.history.push('/login');
          });
      }
    }

    document.addEventListener('mousedown', this.handleClickOutside);
    this.updateDimensions();
  }

  componentDidMount() {
    // call again so that preferences persist on refresh.
    if (this.props.auth.session && this.props.auth.session.user && this.props.preferences.firstName.length < 1) {
      this.fetchPreferences();
    }
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.auth.isFetching === false && newProps.auth.session !== null) {
      this.setState({ authRole: getAuthRole(newProps.auth) });
    }

    if (this.props.preferences.language !== newProps.preferences.language) {
      counterpart.setLocale(newProps.preferences.language);
    }
  }

  componentDidUpdate() {
    if (this.state.width > 1024 && this.state.navigationToggled) {
      this.toggleNavigation();
      this.transitionEventDone();
    }
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
    window.removeEventListener('resize', this.updateDimensions);
  }

  setBodyOverflow() {
    if (this.state.navigationToggled || this.state.isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  setupTranslationDefaults = () => {
    counterpart.setFallbackLocale(['en-US', 'en-GB', 'zh-Hans', 'zh-Hant', 'fr-CA']);
    counterpart.setMissingEntryGenerator(() => {
      return '';
    });
  }

  setupAuthenticatedUser(webToken, newUser) {
    let token;
    let user;

    if (webToken === undefined && newUser === undefined && this.props.auth.session !== null) {
      token = this.props.auth.session.sessionToken;
      user = this.props.auth.session.user;
    } else {
      token = webToken;
      user = Object.assign({}, newUser);
    }

    const userInfoArray = [];
    userInfoArray.push(getUserDataAccessById(user.userId));
    userInfoArray.push(getUserTerms(token));

    if (this.props.preferences.language !== user.languageAbbr) {
      userInfoArray.push(getRolesWithPermissions(this.props.preferences.language));
    } else {
      userInfoArray.push(getRolesWithPermissions());
    }

    userInfoArray.push(getHierarchyBasedReport(user.userId));

    Promise.all(userInfoArray)
      .then((userInfoArrayResponses) => {
        user.dataAccess = userInfoArrayResponses[0];
        user.termsAndConditions = userInfoArrayResponses[1];
        user.availableRoles = userInfoArrayResponses[2];
        user.hierarchyReports = userInfoArrayResponses[3];

        this.setState({ termsAccepted: userInfoArrayResponses[1].hasAcceptedTerms });

        this.props.authActions.loginSuccess({
          sessionToken: token,
          user,
        });

        this.props.history.replace('/');
      })
      .then(() => {
        this.fetchPreferences();
      });
  }

  attachBindings() {
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.handleTableRows = this.handleTableRows.bind(this);
    this.setBodyOverflow = this.setBodyOverflow.bind(this);
    this.useExtendedDrawer = this.useExtendedDrawer.bind(this);
    this.toggleSecondaryDrawer = this.toggleSecondaryDrawer.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.acceptTerms = this.acceptTerms.bind(this);
    this.fetchPreferences = this.fetchPreferences.bind(this);
    this.setupAuthenticatedUser = this.setupAuthenticatedUser.bind(this);
    this.toggleNavigation = this.toggleNavigation.bind(this);
    this.transitionEndAnimation = this.transitionEndAnimation.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
    this.transitionEventDone = this.transitionEventDone.bind(this);
    this.reseedAuthUser = this.reseedAuthUser.bind(this);
  }

  attachListeners() {
    Listener.on('FILTERED_ROWS', this.handleTableRows);
    Listener.on('DRAWER_OPEN', this.setBodyOverflow);
    Listener.on('TERMS_ACCEPTED', this.acceptTerms);
    Listener.on('UPDATED_PREFERENCES', this.fetchPreferences);
    Listener.on('UPDATED_LANGUAGE', this.reseedAuthUser);
    Listener.on('ROUTE_CHANGE', this.toggleNavigation);
  }

  reseedAuthUser() {
    const userInfoArray = [];
    const user = Object.assign({}, this.props.auth.session.user);

    userInfoArray.push(getUserById(user.userId));
    if (this.props.preferences.language !== user.languageAbbr) {
      userInfoArray.push(getRolesWithPermissions(this.props.preferences.language));
    }

    Promise.all(userInfoArray)
      .then((userInfoArrayResponses) => {
        const availableRoles = userInfoArrayResponses[1];
        const userProperties = userInfoArrayResponses[0];

        // auth > session > user > availableRoles
        user.availableRoles = availableRoles;
        // auth > session > user > languageAbbr
        user.languageAbbr = userProperties.preferences.language;
        // auth > session > user > role.description
        user.role = userProperties.role;

        this.props.authActions.loginSuccess({
          sessionToken: this.props.auth.session.sessionToken,
          user,
        });
      });
  }

  updateDimensions() {
    const dimensions = updateDimensions();
    this.setState({ width: dimensions.width, height: dimensions.height }, () => {
      if (this.state.width < 1024 && !this.state.transitionEnded) {
        this.transitionEventDone();
      }
    });
  }

  transitionEventDone() {
    this.setState({ transitionEnded: true });
  }

  acceptTerms() {
    this.setState({ termsAccepted: true });
  }

  fetchPreferences() {
    this.props.getPreferences(this.props.auth.session.user.userId)
      .then(() => {
        const preferences = this.props.preferences;
        counterpart.setLocale(preferences.language);
        Listener.trigger('PREFERENCES_SET', preferences);
      });
  }

  handleClickOutside(event) {
    if (event.target.classList.contains('overlay') && this.state.navigationToggled) {
      this.setState({ navigationToggled: false });
    } else if (event.target.classList.contains('overlay') && !this.state.navigationToggled) {
      this.props.history.goBack();
      Listener.trigger('FILTERS_DRAWER_CLOSED');
    }
  }

  handleTableRows(rows) {
    this.filteredRows = rows;
  }

  toggleDrawer() {
    this.setState({
      isDrawerOpen: !this.state.isDrawerOpen,
    }, () => {
      Listener.trigger('DRAWER_OPEN');
    });
  }

  toggleSecondaryDrawer() {
    this.setState({ isSecondaryDrawerOpen: !this.state.isSecondaryDrawerOpen });
  }

  toggleNavigation() {
    this.transitionEndAnimation();
    this.setState({
      navigationToggled: !this.state.navigationToggled,
    }, () => {
      this.setBodyOverflow();
    });
  }

  useExtendedDrawer() {
    this.setState({ drawerIsExtended: !this.state.drawerIsExtended });
  }

  transitionEndAnimation() {
    this.setState({ transitionEnded: false }, () => {
      const transitionEvent = whichTransitionEvent();
      document.addEventListener(transitionEvent, (animationEvent) => {
        if (animationEvent.srcElement.className === 'vertical-nav-label' ||
          animationEvent.srcElement.className.indexOf('navigation') > -1) {
          this.transitionEventDone();
        }
      });
    });
  }

  render() {
    const overlayClass = classNames({
      'with-overlay': this.state.isDrawerOpen || !this.state.termsAccepted || this.state.navigationToggled,
    });

    if (this.props.isAuthenticated) {
      const termsAccepted = this.state.termsAccepted;

      return (
        <div className="page-wrapper">
          {(!termsAccepted) && !this.props.location.pathname.includes('logout') && <TermsAndConditions {...this.props} />}
          {(this.state.isDrawerOpen ||
            this.state.navigationToggled ||
            (!termsAccepted && !this.props.location.pathname.includes('logout'))
          ) &&
            <div className="overlay" />}
          <SiteHeader
            toggleNavigation={this.toggleNavigation}
            transitionEndAnimation={this.transitionEndAnimation}
            navigationToggled={this.state.navigationToggled}
          />
          {termsAccepted && <Navigation
            overlayClass={overlayClass}
            transitionEndAnimation={this.transitionEndAnimation}
            transitionEnded={this.state.transitionEnded}
            language={initLanguage(this.props.preferences.language)}
            navigationToggled={this.state.navigationToggled}
            width={this.state.width}
          />}
          {!termsAccepted && <NavigationLight
            overlayClass={overlayClass}
            language={initLanguage(this.props.preferences.language)}
          />}
          {/* @TODO change this authRole to auth for all routed components in Main.js */}
          <Main
            termsAccepted={termsAccepted}
            authRole={this.state.authRole}
            overlayClass={overlayClass}
            parsedPermissions={this.props.parsedPermissions}
          />
          <Drawer
            level="primary"
            useExtendedDrawer={this.useExtendedDrawer}
            drawerIsExtended={this.state.drawerIsExtended}
            isDrawerOpen={this.state.isDrawerOpen}
            isSecondaryDrawerOpen={this.state.isSecondaryDrawerOpen}
            toggleDrawer={this.toggleDrawer}
            parentFilteredRows={this.filteredRows}
            authRole={this.state.authRole}
            auth={this.props.auth}
          />
          <Drawer
            level="secondary"
            isSecondaryDrawerOpen={this.state.isSecondaryDrawerOpen}
            toggleSecondaryDrawer={this.toggleSecondaryDrawer}
          />
        </div>
      );
    } else {
      return (
        <BallSyncLoader />
      );
    }
  }
}

LayoutAuthenticated.propTypes = {
  auth: PropTypes.object.isRequired,
  authActions: PropTypes.object.isRequired,
  getPreferences: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  parsedPermissions: PropTypes.object.isRequired,
  preferences: PropTypes.object.isRequired,
  language: PropTypes.string,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

LayoutAuthenticated.defaultProps = {
  language: 'en-US',
};

function mapStateToProps(state) {
  return {
    auth: state.auth || {},
    isAuthenticated: isAuthenticated(state.auth),
    parsedPermissions: (state.auth.session && state.auth.session.user && state.auth.session.user.parsedPermissions) ||
      getParsedPermissionStructure(),
    preferences: selectCurrentPreferences(state.preferences),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    authActions: bindActionCreators(authActions, dispatch),
    getPreferences: (userId) => dispatch(getUserPreferences(userId)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LayoutAuthenticated));
