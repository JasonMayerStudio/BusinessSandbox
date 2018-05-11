import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ToggleArrow from 'Components/icons/toggle-arrow/ToggleArrow';
import './accordion.scss';

class Accordion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: this.props.isOpen,
      defaultPrice: this.props.productPrice,
      overridePrice: this.props.productPrice,
      editInput: false,
    };

    this.handleToggle = this.handleToggle.bind(this);
    this.editPrice = this.editPrice.bind(this);
    this.handleOverride = this.handleOverride.bind(this);
    this.keyDown = this.keyDown.bind(this);
    this.exitEditPrice = this.exitEditPrice.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onBlur() {
    this.exitEditPrice();
  }

  handleToggle(event) {
    if (event.target.classList.contains('price-input')) {
      event.stopPropagation();
      this.editPrice();
      this.handleOverride(event);
    } else {
      this.setState({ open: !this.state.open });
    }
  }

  keyDown(e) {
    if (e.keyCode === 13) { // Return
      this.onBlur();
    } else if (e.keyCode === 27) { // Escape
      if (this.priceInput.value === null || this.priceInput.value === '') {
        this.priceInput.placeholder = this.state.defaultPrice;
        this.setState({ overridePrice: this.state.defaultPrice });
      }
      this.priceInput.placeholder = this.state.defaultPrice;
      this.setState({ overridePrice: this.state.defaultPrice }, () => {
        this.exitEditPrice();
      });
    }
  }

  editPrice() {
    if (!this.state.editInput) {
      this.setState({ editInput: true });
      this.priceInput.focus();

      if (this.priceInput.value === null || this.priceInput.value === '') {
        this.priceInput.placeholder = this.state.defaultPrice;
        this.setState({ overridePrice: this.state.defaultPrice });
      }

      this.setState({ overridePrice: this.priceInput.value });
    }
  }

  exitEditPrice() {
    this.setState({ editInput: false });
    this.props.updateOverridePrice(this.state.overridePrice, this.props.id);
    this.priceInput.blur();
  }

  handleOverride(event) {
    this.setState({ overridePrice: event.target.value || 0 });
  }

  render() {
    const { open } = this.state;
    return (
      <div className={open ? 'Accordion open' : 'Accordion'}>
        <div
          role="button"
          tabIndex="-1"
          className="Accordion__header"
          onClick={(event) => this.handleToggle(event)}
        >
          <div className="Accordion__title-wrapper">
            <div className={`Accordion__title ${this.props.isAddons ? 'outlined' : ''}`}>
              {this.props.title}
            </div>
            {this.props.current
              ? <div className="current">{this.props.currentPlanText}</div>
              : ''
            }
          </div>
          <ToggleArrow />
          {open && !this.props.isAddons
            ?
              <div className="Accordion__header-price">
                <div className="Accordion__header-price-num">
                  <input
                    className="price-input"
                    type="number"
                    ref={(input) => { this.priceInput = input; }}
                    placeholder={this.state.overridePrice !== this.props.productPrice ? this.state.overridePrice : this.state.defaultPrice}
                    readOnly={!this.state.editInput}
                    onChange={this.handleOverride}
                    value={this.state.overridePrice || 0}
                    onKeyDown={this.keyDown}
                    onBlur={this.onBlur}
                  />
                </div>
                <span className="Accordion__header-price-details">USD / {this.props.monthText}</span>
              </div>
            : ''
          }
        </div>
        <div className="Accordion__content-subheader">
          {this.props.subtitle ? this.props.subtitle : `${this.props.title} ${this.props.includesText}:` }
        </div>
        <div className={`Accordion__content ${this.props.isAddons ? 'full-width' : ''}`}>
          { open && this.props.children }
        </div>
      </div>
    );
  }
}

Accordion.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node.isRequired,
  isAddons: PropTypes.bool,
  isOpen: PropTypes.bool,
  current: PropTypes.bool,
  productPrice: PropTypes.number,
  updateOverridePrice: PropTypes.func,
  monthText: PropTypes.string,
  includesText: PropTypes.string,
  currentPlanText: PropTypes.string,
};

Accordion.defaultProps = {
  id: 0,
  title: '',
  subtitle: '',
  isOpen: false,
  isAddons: false,
  current: false,
  productPrice: 0,
  updateOverridePrice: () => {},
  monthText: '',
  includesText: '',
  currentPlanText: '',
};

export default Accordion;
