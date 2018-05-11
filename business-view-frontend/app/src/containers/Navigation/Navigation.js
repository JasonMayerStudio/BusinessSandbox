import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import counterpart from 'counterpart';
import { connect } from 'react-redux';

import LeftPointerIcon from 'Components/icons/left-pointer-icon/LeftPointerIcon';

import Listener from 'Utils/listener';
import { initCommonTranslate } from 'Utils/languages';
import { checkForSingularReportId } from 'Utils/reports/checkForSingularReportId';

import PrimaryNavigation from '../PrimaryNavigation';
import SecondaryNavigation from '../SecondaryNavigation';

import { fetchMessageCount } from '../../actions/messageActions';

import { navItems } from './data/constants';
import './Navigation.scss';

export class Navigation extends Component {
  constructor(props) {
    super(props);

    initCommonTranslate();

    this.state = {
      subNavTriggered: false,
      subNavActive: null,
      subNavChildren: [],
      navKeys: [],
      defaultTitleText: counterpart('globalTranslate.navigation.defaultTitleText'),
      menuTitleText: counterpart('globalTranslate.navigation.defaultTitleText'),
      navIsClosed: false,
      triggerSubNavAnimation: false,
    };

    this.attachBindings();
    this.attachListeners();
  }

  componentDidMount() {
    this.mapNavKeys();
    this.mapSecondaryNavKeys();
    this.updateMessageCount();
    this.triggerSubNav();
  }

  componentWillReceiveProps() {
    this.triggerSubNav();

    this.setState((prevState) => {
      if (prevState.subNavTriggered && prevState.navIsClosed) {
        this.setState({ triggerSubNavAnimation: true });
      }
    });
  }

  componentDidUpdate(prevProps) {
    const { width, location } = this.props;
    const { subNavTriggered, navKeys, secondaryNavKeys } = this.state;
    const slugMatches = this.checkIfSlugMatches(location, prevProps);
    const slugDoesntMatch = this.checkifSlugDoesNotMatch(location, prevProps);
    const articleDoesNotMatch = this.checkIfArticleDoesNotMatch(location, prevProps, secondaryNavKeys);
    const routeIsNavigable = this.checkIfRouteIsNavigable(navKeys, location);
    const widthAndRoutePresent = width <= 1024 && routeIsNavigable;

    if (widthAndRoutePresent &&
      ((slugMatches && articleDoesNotMatch && subNavTriggered) ||
      (slugDoesntMatch && !subNavTriggered))) {
      Listener.trigger('ROUTE_CHANGE');
    }
  }

  checkIfRouteIsNavigable(navKeys, location) {
    return location.pathname === '/' || navKeys.indexOf(location.pathname.split('/')[1].replace(/\//g, '')) > -1;
  }

  checkIfSlugMatches(location, prevProps) {
    return location.pathname.split('/')[1] === prevProps.location.pathname.split('/')[1];
  }

  checkifSlugDoesNotMatch(location, prevProps) {
    return location.pathname !== prevProps.location.pathname;
  }

  checkIfArticleDoesNotMatch(location, prevProps, secondaryNavKeys) {
    return location.pathname.split('/')[2] !== prevProps.location.pathname.split('/')[2]
           && secondaryNavKeys.indexOf(location.pathname) > -1;
  }

  mapNavKeys() {
    const translatedNavItems = navItems();

    const navKeys = translatedNavItems.map((item) => item.slug);

    this.setState({ navKeys });
  }

  mapSecondaryNavKeys = () => {
    const translatedNavItems = navItems();

    const paths = translatedNavItems.filter((item) => item.children.length > 0).map((item) => item.children.map((child) => child.path));
    const secondaryNavKeys = [].concat(...paths);

    this.setState({ secondaryNavKeys });
  }

  attachBindings() {
    this.mapNavKeys = this.mapNavKeys.bind(this);
    this.goBackToMain = this.goBackToMain.bind(this);
    this.triggerSubNav = this.triggerSubNav.bind(this);
    this.updateMessageCount = this.updateMessageCount.bind(this);
    this.checkIfSlugMatches = this.checkIfSlugMatches.bind(this);
    this.checkifSlugDoesNotMatch = this.checkifSlugDoesNotMatch.bind(this);
    this.checkIfRouteIsNavigable = this.checkIfRouteIsNavigable.bind(this);
    this.checkIfArticleDoesNotMatch = this.checkIfArticleDoesNotMatch.bind(this);
  }

  attachListeners() {
    Listener.on('UPDATE_UNREAD_COUNT', this.updateMessageCount);
  }

  updateMessageCount() {
    this.props.getMessageCount();
  }

  goBackToMain() {
    if (this.state.subNavTriggered) {
      this.setState({
        subNavActive: null,
        subNavTriggered: false,
        subNavChildren: [],
      }, () => {
        this.props.history.push('/');
      });
    }
  }

  triggerSubNav(event) {
    const { subNavActive } = this.state;
    const featureFlags = this.props.featureFlags;

    const newState = {
      subNavTriggered: false,
      subNavActive: null,
      menuTitleText: counterpart('globalTranslate.navigation.defaultTitleText'),
      subNavChildren: [],
    };

    const translatedNavItems = navItems();

    for (let i = 0; i < translatedNavItems.length; i += 1) {
      const navItem = translatedNavItems[i];
      if (this.props.history.location.pathname.split('/')[1] === navItem.key) {
        newState.subNavTriggered = (
          navItem.children.length > 0 &&
          !featureFlags[navItem.hideSubNavOnFlag]
        );
        newState.subNavActive = (featureFlags[navItem.hideSubNavOnFlag])
          ? null
          : navItem.key;
        newState.menuTitleText = navItem.title;
        newState.hideSubNavOnFlag = navItem.hideSubNavOnFlag;

        for (let j = 0; j < navItem.children.length; j += 1) {
          if (navItem.children[j].path === '/reports/7' && !checkForSingularReportId(this.props.auth.session.user.hierarchyReports, 7)) {
            navItem.children.splice(j, 1);
          }
        }
        newState.subNavChildren = navItem.children;

        break;
      }
    }

    this.setState(newState, () => {
      const noSubNav = (
        (subNavActive === null &&
        newState.subNavActive === null) ||
        this.props.featureFlags[newState.hideSubNavOnFlag]
      );

      if (event && !noSubNav) {
        this.props.transitionEndAnimation();
        this.setState({ navIsClosed: false });
      }

      if (noSubNav) {
        this.setState({ navIsClosed: true });
      }
    });
  }

  render() {
    const navClasses = classNames('primary-nav', {
      'with-overlay': this.props.overlayClass !== null && this.props.overlayClass,
      collapsed: this.state.subNavTriggered,
      'navigation-toggled': this.props.navigationToggled,
    });

    const headerClasses = classNames('primary-nav__header', {
      collapsed: this.state.subNavTriggered,
    });

    const wrapperClasses = classNames('nav-wrapper', {
      collapsed: this.state.subNavTriggered,
    });

    const verticalNavClasses = classNames('vertical-nav', {
      collapsed: this.state.subNavTriggered,
    });

    const secondaryNavClasses = classNames('secondary-nav vertical-nav', {
      collapsed: this.state.subNavTriggered,
    });

    const navActionClasses = classNames('vertical-nav-action', {
      collapsed: this.state.subNavTriggered,
    });

    const iconClasses = classNames('vertical-nav-icon', {
      collapsed: this.state.subNavTriggered,
    });

    const labelClasses = classNames('vertical-nav-label', {
      collapsed: this.state.subNavTriggered,
    });

    return (
      <nav id="primary-nav" className={navClasses}>
        {this.state.subNavTriggered ?
          <header
            role="button"
            tabIndex={0}
            className={headerClasses}
            onClick={this.state.subNavTriggered && this.goBackToMain}
          >
            <span className="previous-block expanded">
              <LeftPointerIcon />
            </span>
            <span className="primary-nav__header-title">
              {this.state.menuTitleText}
            </span>
          </header>
          :
          <header
            role="button"
            tabIndex={0}
            className={headerClasses}
            onClick={this.state.subNavTriggered && this.goBackToMain}
          >
            <span className="previous-block collapsed" />
            <span className="primary-nav__header-title">
              {this.state.defaultTitleText}
            </span>
          </header>
        }
        <main className={wrapperClasses}>
          <PrimaryNavigation
            featureFlags={this.props.featureFlags}
            navActionClasses={navActionClasses}
            verticalNavClasses={verticalNavClasses}
            iconClasses={iconClasses}
            labelClasses={labelClasses}
            user={this.props.auth.session.user}
            messages={this.props.messages}
            triggerSubNav={this.triggerSubNav}
            transitionEnded={this.props.transitionEnded}
            subNavTriggered={this.state.subNavTriggered}
          />
          <SecondaryNavigation
            featureFlags={this.props.featureFlags}
            secondaryNavClasses={secondaryNavClasses}
            subNavChildren={this.state.subNavChildren}
            auth={this.props.auth}
            triggerSubNavAnimation={this.state.triggerSubNavAnimation}
          />
        </main>
      </nav>
    );
  }
}

Navigation.propTypes = {
  auth: PropTypes.object.isRequired,
  featureFlags: PropTypes.object,
  getMessageCount: PropTypes.func.isRequired,
  messages: PropTypes.object,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  navigationToggled: PropTypes.bool,
  overlayClass: PropTypes.string,
  transitionEndAnimation: PropTypes.func,
  transitionEnded: PropTypes.bool,
  width: PropTypes.number,
};

Navigation.defaultProps = {
  featureFlags: {},
  messages: {},
  navigationToggled: false,
  overlayClass: '',
  transitionEnded: true,
  transitionEndAnimation: () => {},
  width: null,
};

function mapStateToProps(state) {
  return {
    auth: (state.auth && state.auth.session)
      ? state.auth
      : {
        session: {
          user: {
            parsedPermissions: {},
          },
        },
      },
    featureFlags: state.featureFlags,
    messages: state.messages,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMessageCount: () => dispatch(fetchMessageCount()),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navigation));
