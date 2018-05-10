import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from 'Components/Button';
import SmallButton from 'Components/Button/SmallButton';

import './OptionBoxPopup.scss';

class OptionBoxPopup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (!this.optionsBoxPopup.contains(event.target)) {
      if (event.target.classList.contains('close-icon')) {
        return false;
      } else if (event.target.classList.contains('remove')) {
        return false;
      } else if (event.target.classList.contains('plus-icon')) {
        return false;
      } else if (event.target.classList.contains('column-widget__action-button')) {
        return false;
      }

      this.setState({ isOpen: false });
      return true;
    }

    return false;
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  cancelChanges = () => {
    if (this.props.cancelAction) {
      this.props.applyAction();
    }
    this.toggle();
  }

  applyChanges = () => {
    this.props.applyAction();
    this.toggle();
  }

  render() {
    const isDisabled = false; // @todo, change to prop
    const wrapperClass = classnames('option-box-popup', {
      [this.props.extraClass]: this.props.extraClass,
      'inline-btn': this.props.emphasizedTriggerText,
    });

    const boxTriggerClasses = classnames('dropdown-menu-trigger', {
      'is-disabled': isDisabled,
    });
    const optionalFooter = (
      this.props.applyAction ||
      this.props.cancelAction);

    return (
      <div
        id="option-box-wrapper"
        className={wrapperClass}
        ref={(ref) => { this.optionsBoxPopup = ref; }}
      >
        <div
          id={`${this.props.id}_btn_${this.props.triggerText}`}
          role="button"
          tabIndex={0}
          className={boxTriggerClasses}
          disabled={isDisabled}
          onClick={this.toggle}
          aria-expanded={this.state.isOpen}
        >
          {this.props.emphasizedTriggerText
            ? <span id={this.props.id}><strong>{this.props.emphasizedTriggerText}</strong> {this.props.triggerText}</span>
            : <span id={this.props.id}>{this.props.triggerText}</span>
          }
        </div>
        {this.state.isOpen && <div className="option-box-content">
          {this.props.children}
          {optionalFooter && <div className="option-box-content-footer">
            <Button
              id={`${this.props.id}_columnManager_btn_cancel`}
              category="small link-inline"
              action={this.cancelChanges}
            >
              {this.props.translations.cancel}
            </Button>
            <SmallButton
              id={`${this.props.id}_columnManager_btn_apply`}
              action={this.applyChanges}
              disabled={this.props.applyDisabled}
            >
              {this.props.translations.apply}
            </SmallButton>
          </div>}
        </div>}
      </div>
    );
  }
}

OptionBoxPopup.propTypes = {
  applyAction: PropTypes.func,
  applyDisabled: PropTypes.bool,
  cancelAction: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  extraClass: PropTypes.string,
  id: PropTypes.string,
  translations: PropTypes.object,
  triggerText: PropTypes.string.isRequired,
  emphasizedTriggerText: PropTypes.string,
};

OptionBoxPopup.defaultProps = {
  applyAction: null,
  applyDisabled: false,
  cancelAction: null,
  extraClass: '',
  id: '',
  emphasizedTriggerText: '',
  translations: {
    cancel: 'Cancel',
    apply: 'Apply',
  },
  updateVisibleColumns: () => { },
};

export default OptionBoxPopup;
