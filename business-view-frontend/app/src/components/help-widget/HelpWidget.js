// Libs / Packages
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import counterpart from 'counterpart';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// Utilities
import { initCommonTranslate } from 'Utils/languages';

import './HelpWidget.scss';

class HelpWidget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggled: false,
    };

    this.attachBindings();

    initCommonTranslate();
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  attachBindings() {
    this.toggleWidget = this.toggleWidget.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleClickOutside(event) {
    const helpCenter = 'help';
    if (this.helpWidget && !event.target.classList.contains(helpCenter)) {
      this.setState({
        isToggled: false,
      });
    }
  }

  toggleWidget() {
    this.setState({
      isToggled: !this.state.isToggled,
    });
  }

  render() {
    const wrapperClass = classnames('help-widget-wrapper', {
      offset: (this.props.isDrawerOpen && !this.props.isDrawerExtended && !this.props.isSecondaryDrawerOpen) ||
              (this.props.isDrawerOpen && this.props.isSecondaryDrawerOpen),
      desktopview: this.props.isDesktopView,
      navigationview: this.props.inNavigation,
    });

    const buttonClass = classnames('help-widget-button', {
      active: this.state.isToggled,
    });

    const checkForDigits = new RegExp(/^\d+(?:\.\d{1,2})?$/);
    const grabFirstPathname = this.props.location.pathname.split('/')[1];
    const grabSecondPathname = this.props.location.pathname.replace('-', ' ').split('/')[2];


    const pathname = this.props.isDrawerOpen && !checkForDigits.test(grabSecondPathname) ?
                     grabSecondPathname :
                     grabFirstPathname;

    const topics = [
      '1. How do I lorem ipsum dolor lorem ipsum dolor lorem ipsum?',
      '2. How do I lorem ipsum dolor lorem ipsum dolor?',
      '3. How do I lorem ipsum dolor?',
    ];

    return (
      <div
        ref={(ref) => (this.helpWidget = ref)}
        className={wrapperClass}
        id="help-widget"
      >
        <ReactCSSTransitionGroup
          transitionName="help-widget"
          transitionEnterTimeout={250}
          transitionLeaveTimeout={250}
          transitionAppear
          transitionAppearTimeout={250}
        >
          {this.state.isToggled && <div className="help-widget-topics">
            <div className="help-widget-topics-header">
              <h1 className="header">{counterpart('globalTranslate.helpWidget.buttonText')}</h1>
              <span className="page-path">{pathname && pathname.length ?
                                          counterpart(`globalTranslate.helpWidget.${pathname}`) :
                                          counterpart('globalTranslate.helpWidget.dashboard')}</span>
            </div>
            <div className="help-widget-topics-body">
              <span className="help-topics">{counterpart('globalTranslate.helpWidget.relevantTopics')}</span>
              {topics.map((topic) => {
                return <span key={topic} className="help-topic">{topic}</span>;
              })}
              <hr className="divider" />
              <span className="go-to-help">{counterpart('globalTranslate.helpWidget.goToHelpCenter')} &gt;</span>
            </div>
          </div>}
        </ReactCSSTransitionGroup>
        <button
          className={buttonClass}
          onClick={this.toggleWidget}
        >
          <span className="help-widget-cta">{counterpart('globalTranslate.helpWidget.buttonText')}</span>
        </button>
      </div>
    );
  }
}

HelpWidget.propTypes = {
  isDrawerOpen: PropTypes.bool.isRequired,
  isSecondaryDrawerOpen: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
  isDrawerExtended: PropTypes.bool,
  inNavigation: PropTypes.bool,
  isDesktopView: PropTypes.bool,
};

HelpWidget.defaultProps = {
  isDrawerExtended: false,
  inNavigation: false,
  isDesktopView: false,
};

export default HelpWidget;
