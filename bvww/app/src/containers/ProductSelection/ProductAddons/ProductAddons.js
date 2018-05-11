import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cloneDeep from 'lodash/cloneDeep';
import counterpart from 'counterpart';

import Toggle from 'Components/toggle-switch/ToggleSwitch.js';
import InformationBubble from 'Components/information-bubble/InformationBubble.js';

import './ProductAddons.scss';

class ProductAddons extends Component {
  constructor(props) {
    super(props);

    registerTranslations();

    this.state = {
      addons: [
        {
          defaultPrice: 0,
          overridePrice: 0,
          displayedPrice: '0',
          editInput: false,
        },
        {
          defaultPrice: 0,
          overridePrice: 0,
          displayedPrice: '0',
          editInput: false,
        },
      ],
      isOverride: false,
    };

    this.priceInput = {};

    this.keyDown = this.keyDown.bind(this);
    this.editPrice = this.editPrice.bind(this);
    this.exitEditPrice = this.exitEditPrice.bind(this);
    this.updatePrices = this.updatePrices.bind(this);
    this.escapeInput = this.escapeInput.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }

  componentWillMount() {
    const parsedAddOns = this.props.addOns.map((addOn) => {
      const displayProperties = {
        defaultPrice: addOn.price,
        overridePrice: addOn.overridePrice,
        displayedPrice: (addOn.overridePrice)
          ? parseInt(addOn.overridePrice, 10).toString()
          : parseInt(addOn.price, 10).toString(),
        editInput: false,
      };

      return Object.assign({}, addOn, displayProperties);
    });

    this.setState({ addons: parsedAddOns });
  }

  onFocus(index) {
    this.editPrice(index);
  }

  onBlur(index) {
    this.editPrice(index);
    this.exitEditPrice(index);
  }

  updatePrices(index, price) {
    const addons = cloneDeep(this.state.addons);
    addons[index].displayedPrice = (parseInt(price, 10))
      ? parseInt(price, 10).toString()
      : '';

    if (price !== addons[index].overridePrice) {
      addons[index].overridePrice = (parseInt(price, 10))
      ? parseInt(price, 10).toString()
      : 0;
    }

    this.setState({ addons });
    this.setState({ isOverride: true });
    this.props.updateIfOverrided(addons);
  }

  escapeInput(index) {
    const addons = cloneDeep(this.state.addons);
    this.priceInput[index].value = this.state.addons[index].defaultPrice;
    addons[index].overridePrice = this.state.addons[index].defaultPrice;

    this.setState({ addons }, () => {
      addons[index].editInput = false;
      this.priceInput[index].readOnly = !addons[index].editInput;
      this.priceInput[index].blur();
    });
  }

  exitEditPrice(index) {
    const addons = cloneDeep(this.state.addons);
    addons[index].editInput = false;
    this.setState({ addons }, () => {
      this.priceInput[index].blur();
    });
  }

  editPrice(index) {
    const addons = cloneDeep(this.state.addons);

    if (!addons[index].editInput) {
      addons[index].editInput = true;
      this.priceInput[index].readOnly = !addons[index].editInput;

      if (this.priceInput[index].value !== this.state.addons[index].defaultPrice) {
        addons[index].overridePrice = this.priceInput[index].value;
        this.setState({ isOverride: true });
      } else {
        this.setState({ isOverride: false });
      }

      if (this.priceInput[index].value === null || this.priceInput[index].value === '') {
        addons[index].overridePrice = this.state.addons[index].defaultPrice;
      }

      this.setState({ addons });
    }
  }

  keyDown(event, index) {
    if (event.keyCode === 13) { // Return
      this.onBlur(index);
    } else if (event.keyCode === 27) { // Escape
      this.escapeInput(index);
    }
  }

  render() {
    const overrideable = this.props.overrideable;
    const parseAddons = this.state.addons
    .map((addOn, index) => {
      const name = addOn.productName;
      const price = addOn.price;
      const option = this.props.selected.indexOf(index) >= 0;

      const handleOverride = (event) => {
        this.updatePrices(index, event.target.value);
      };
      return (
        <div key={addOn.productId} className="ProductAddons-service">
          {overrideable ?
            <div className="productAddons__overrideprice">
              <div className={`ProductAddons-service__name + ${addOn.isActive ? 'on' : ''}`}>
                {counterpart(`productSelection.${name}`)}
                <InformationBubble
                  info
                  position="top"
                  tooltipTitle={name}
                  tooltipContent={addOn.productDescription}
                />
              </div>
              <div className="ProductAddons__overrideprice-num">
                <input
                  id={`${addOn.productId}-op`}
                  className="price-input"
                  type="text"
                  ref={(input) => { this.priceInput[index] = input; }}
                  readOnly={!this.state.addons[index].editInput}
                  onChange={handleOverride}
                  value={addOn.displayedPrice}
                  onKeyDown={(event) => this.keyDown(event, index)}
                  onBlur={() => this.onBlur(index)}
                  onFocus={() => this.onFocus(index)}
                />
                <span className="ProductAddons__overrideprice-details">
                  USD / {counterpart('productSelection.month')}
                </span>
              </div>
            </div>
            :
            <div className={`ProductAddons-service__name + ${addOn.isActive ? 'on' : ''}`}>
              {counterpart(`productSelection.${name}`)}
              <InformationBubble
                info
                position="top"
                tooltipTitle={name}
                tooltipContent={addOn.productDescription}
              />
            </div>
          }

          <div className="ProductAddons-service__toggle">
            {!overrideable
              ? <div className={`ProductAddons-service__price + ${addOn.isActive ? 'on' : ''}`}>
              ${price}/{this.props.language === 'zh-Hans' || this.props.language === 'zh-Hant' ?
                counterpart('productSelection.month') :
                counterpart('productSelection.monthAbbr')}</div>
              : ''
            }
            <div>
              <Toggle
                offText={counterpart('productSelection.off')}
                onText={counterpart('productSelection.on')}
                key={`${name}-${price}`}
                id={name}
                isChecked={option}
                onChange={() => {
                  if (option) {
                    this.props.onSelectionChange(this.props.selected.filter((i) => i !== index));
                  } else {
                    this.props.onSelectionChange([...this.props.selected, index]);
                  }
                }}
              />
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="ProductAddons">
        {this.props.showIntro ?
          <div className="ProductAddons-header">
            <div className="ProductAddons-header__title">{this.props.title}</div>
            <div className="ProductAddons-header__description">{this.props.description}</div>
          </div>
          : ''
        }
        <div className="ProductAddons-services">
          {parseAddons}
        </div>
      </div>
    );
  }
}

function registerTranslations() {
  counterpart.registerTranslations('en-US', require('../translations/en-us.json'));
  counterpart.registerTranslations('en-GB', require('../translations/en-gb.json'));
  counterpart.registerTranslations('fr-CA', require('../translations/fr-ca.json'));
  counterpart.registerTranslations('zh-Hans', require('../translations/zh-Hans.json'));
  counterpart.registerTranslations('zh-Hant', require('../translations/zh-Hant.json'));
}

ProductAddons.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  showIntro: PropTypes.bool,
  addOns: PropTypes.array.isRequired,
  selected: PropTypes.array.isRequired,
  onSelectionChange: PropTypes.func.isRequired,
  overrideable: PropTypes.bool,
  updateIfOverrided: PropTypes.func,
  language: PropTypes.string.isRequired,
};

ProductAddons.defaultProps = {
  title: 'Additional Product & Services',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  showIntro: false,
  addons: [],
  overrideable: false,
  updateIfOverrided: () => {},
};

export default ProductAddons;
