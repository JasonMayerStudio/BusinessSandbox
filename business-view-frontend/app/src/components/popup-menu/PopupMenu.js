import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import LockIcon from 'Components/icons/LockIcon';

import './PopupMenu.scss';

class PopupMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
    };

    this.attachBindings();
  }

  attachBindings() {
    this.showTooltip = this.showTooltip.bind(this);
    this.hideTooltip = this.hideTooltip.bind(this);
  }

  showTooltip() {
    this.setState({ isHovered: true });
  }

  hideTooltip() {
    this.setState({ isHovered: false });
  }

  get lockIcon() {
    return (
      <LockIcon
        onMouseOver={this.showTooltip}
      />
    );
  }

  get popupContent() {
    if (Array.isArray(this.props.popupContent)) {
      return this.props.popupContent.map((content) => {
        return <li key={content.id}>{content.name.replace(/_/g, ' ')}</li>;
      });
    }

    return null;
  }

  render() {
    const popupClasses = classnames('popup-menu', {
      lock: this.props.lock,
      bottom: this.props.position === 'bottom',
      top: this.props.position === 'top',
      left: this.props.position === 'left',
      right: this.props.position === 'right',
    });

    return (
      <div className="popup-menu__wrapper" onMouseOver={this.showTooltip}>
        {this.props.lock && this.lockIcon}
        {this.state.isHovered &&
        <div
          className={popupClasses}
          onMouseOver={this.showTooltip}
          onMouseLeave={this.hideTooltip}
        >
          <div className="popup-menu__header">
            {this.props.popupTitle && <h1 className="headline">{this.props.icon && this.props.icon} {this.props.popupTitle}</h1>}
            {this.props.dataAccessProhibited && <span
              role="button"
              tabIndex={0}
              className="link"
              onClick={this.props.goToLink}
            >
              {this.props.editText}
            </span>}
          </div>
          <ul className="content">
            {this.popupContent}
          </ul>
        </div>}
        <span
          className="trailing-text"
          onMouseOver={this.showTooltip}
        >{this.props.trailingText}</span>
      </div>
    );
  }
}

PopupMenu.propTypes = {
  lock: PropTypes.bool,
  icon: PropTypes.element,
  position: PropTypes.string.isRequired,
  popupTitle: PropTypes.string,
  popupContent: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.oneOf([null]),
  ]).isRequired,
  trailingText: PropTypes.string.isRequired,
  goToLink: PropTypes.func,
  dataAccessProhibited: PropTypes.bool,
  editText: PropTypes.string.isRequired,
};

PopupMenu.defaultProps = {
  lock: false,
  goToLink: () => {},
  icon: null,
  popupTitle: '',
  history: {},
  dataAccessProhibited: false,
};

export default PopupMenu;
