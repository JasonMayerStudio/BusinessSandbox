/* eslint-disable global-require */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import counterpart from 'counterpart';
import UserAvatar from 'react-user-avatar';

import globalLogoImg from 'Assets/img/global-payments-logo.png';

import Button from 'Components/Button';
import LinkInlineButton from 'Components/Button/LinkInlineButton';
import NavBurger from 'Components/nav-burger/NavBurger';

import Listener from 'Utils/listener';

import HelpWidget from 'Components/help-widget/HelpWidget.js';

import GlobalSelectorFlag from '../GlobalSelectorFlag';
import * as authActions from '../../actions/authActions';
import { retrieveFirstLetter } from '../../utils/userUtils';

import './SiteHeader.scss';

export class SiteHeader extends Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      menuClicked: false,
      openMobileNav: false,
      isDrawerOpen: false,
      isSecondaryDrawerOpen: false,
      drawerIsExtended: false,
    };

    this.attachBindings();
    this.attachListeners();
    this.firstClick = true;

    registerTranslations();
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.closeMenu);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.closeMenu);
  }

  openMenu() {
    if (this.firstClick) {
      this.setState({ menuClicked: true }, () => {
        this.firstClick = false;
      });
    } else {
      this.setState({ menuClicked: false }, () => {
        this.firstClick = true;
      });
    }
  }

  toggleMobileNav() {
    this.setState({ openMobileNav: !this.state.openMobileNav });
  }

  closeMobileNav() {
    this.setState({ openMobileNav: false });
  }

  closeMenu(event) {
    if (
      (this.header && !this.header.contains(event.target)) ||
      (event.target.classList[0] &&
        (event.target.classList[0].indexOf('global-selector') > -1 ||
          event.target.classList[0].indexOf('mobile-hidden') > -1))
    ) {
      this.setState(
        {
          menuClicked: false,
        },
        () => {
          this.firstClick = true;
        },
      );
    }
  }

  attachBindings() {
    this.logout = this.logout.bind(this);
    this.openMenu = this.openMenu.bind(this);
    this.toggleMobileNav = this.toggleMobileNav.bind(this);
    this.closeMobileNav = this.closeMobileNav.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.gotoSettings = this.gotoSettings.bind(this);
    this.editGlobalSelector = this.editGlobalSelector.bind(this);
    this.updatePreferences = this.updatePreferences.bind(this);
  }

  attachListeners() {
    Listener.on('NAME_UPDATED', this.updatePreferences);
  }

  updatePreferences() {
    this.props.reseedUserPrefs(this.props.auth.session.user.userId);
  }

  editGlobalSelector() {
    this.props.history.push('/global-selector');
  }

  logout() {
    this.setState({ menuClicked: false });
    this.props.history.push('/logout');
  }

  gotoSettings() {
    this.props.history.push('/settings');
    this.setState({ menuClicked: false });
  }

  get userLink() {
    if (this.props.auth.session && this.props.auth.session.sessionToken) {
      const firstName = retrieveFirstLetter(
        this.props.auth.session.user.firstName,
      );
      const lastName = retrieveFirstLetter(
        this.props.auth.session.user.lastName,
      );
      const userName = `${firstName} ${lastName}`;
      return (
        <div
          role="button"
          tabIndex={0}
          onClick={this.openMenu}
          className="user-menu"
        >
          <UserAvatar size="48" name={userName} />
        </div>
      );
    } else {
      return <Link to="/login">Login</Link>;
    }
  }

  get mobileUserNavBlock() {
    return (
      <div className="mobile-navigation-userinfo">
        <div className="user-container">
          <span className="user-role">
            {this.props.auth.session.user.role.name.replace(/_/g, ' ')}
          </span>
          <span className="user-name">
            {this.props.auth.session.user.firstName.replace(/_/g, '')}{' '}
            {this.props.auth.session.user.lastName.replace(/_/g, '')}
          </span>
        </div>
        <div className="user-links">
          <span className="view-profile">
            <LinkInlineButton action={this.gotoSettings}>
              {counterpart('siteHeader.viewProfile')}
            </LinkInlineButton>
          </span>
          <span className="logout">
            <LinkInlineButton action={this.logout}>
              {counterpart('siteHeader.logout')}
            </LinkInlineButton>
          </span>
        </div>
      </div>
    );
  }

  get mobileGlobalSelectorBlock() {
    return (
      <div className="mobile-navigation-globalselector show-s">
        <GlobalSelectorFlag />
      </div>
    );
  }

  render() {
    let mobileLocation = this.props.location.pathname
      .slice(1)
      .replace('-', ' ');
    const extendedLocationIndex = mobileLocation.indexOf('/');

    if (extendedLocationIndex >= 0) {
      mobileLocation = mobileLocation.substring(0, extendedLocationIndex);
    }

    return (
      <div className="site-header-container">
        <header
          className="global-actions"
          onBlur={this.closeMenu}
          role="button"
          tabIndex={0}
        >
          <div className="branding">
            <div className="is-mobile mobile-navigation">
              <NavBurger
                toggleNavigation={this.props.toggleNavigation}
                navigationToggled={this.props.navigationToggled}
              />
            </div>
            <span
              role="button"
              className="logo-wrapper"
              tabIndex={0}
              onClick={() => this.props.history.push('/')}
            >
              <img
                src={globalLogoImg}
                alt="Global Payments"
                className="global-payments-logo"
              />
            </span>
          </div>
          <div className="is-mobile mobile-navigation">
            <div className="hidden-s">
              <GlobalSelectorFlag />
            </div>
          </div>

          <div className="is-mobile mobile-help-widget">
            <HelpWidget
              isDrawerExtended={this.state.drawerIsExtended}
              isDrawerOpen={this.state.isDrawerOpen}
              isSecondaryDrawerOpen={this.state.isSecondaryDrawerOpen}
              location={this.props.location}
              inNavigation
            />
          </div>

          <div
            ref={(ref) => (this.header = ref)}
            className="mobile-hidden desktop-navigation"
          >
            <GlobalSelectorFlag />
            {this.state.menuClicked && (
              <div className="user-submenu">
                {this.props.parsedPermissions.personalInformation.canEdit && (
                  <span className="view-profile">
                    <Button action={this.gotoSettings}>
                      {counterpart('siteHeader.viewProfile')}
                    </Button>
                  </span>
                )}
                <span className="logout">
                  <Button action={this.logout}>
                    {counterpart('siteHeader.logout')}
                  </Button>
                </span>
              </div>
            )}
            {this.userLink}
          </div>
        </header>
        {this.mobileGlobalSelectorBlock}
      </div>
    );
  }
}

SiteHeader.propTypes = {
  auth: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  navigationToggled: PropTypes.bool.isRequired,
  parsedPermissions: PropTypes.object.isRequired,
  reseedUserPrefs: PropTypes.func.isRequired,
  toggleNavigation: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    auth: state.auth,
    parsedPermissions: state.auth.session.user.parsedPermissions,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    reseedUserPrefs: (userId) =>
      dispatch(authActions.reseedAuthPreferences(userId)),
  };
}

function registerTranslations() {
  counterpart.registerTranslations(
    'en-US',
    require('./translations/en-us.json'),
  );
  counterpart.registerTranslations(
    'en-GB',
    require('./translations/en-gb.json'),
  );
  counterpart.registerTranslations(
    'fr-CA',
    require('./translations/fr-ca.json'),
  );
  counterpart.registerTranslations(
    'zh-Hans',
    require('./translations/zh-Hans.json'),
  );
  counterpart.registerTranslations(
    'zh-Hant',
    require('./translations/zh-Hant.json'),
  );
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SiteHeader),
);
/* eslint-enable global-require */
