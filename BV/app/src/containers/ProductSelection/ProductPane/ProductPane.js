import React from 'react';
import PropTypes from 'prop-types';
import counterpart from 'counterpart';
import { initCommonTranslate } from 'Utils/languages';

import CheckIcon from 'Components/icons/check-icon/CheckIcon';
import XIcon from 'Components/icons/close-small-icon/CloseSmallIcon';
import CheckCircle from 'Components/icons/check-circle-icon/CheckCircleIcon';
import Button from 'Components/Button';

import './ProductPane.scss';

const ProductPane = (props) => {
  registerTranslations();

  initCommonTranslate();

  const parseProductServices = props.productServices
  .map((service) => {
    return (
      <div key={service.featureId} className="row-service">
        <div className="row-service-option">
          {service.isAvailable ? <CheckIcon /> : <XIcon />}
        </div>
        <div className="row-service-content">
          <span>{service.shortDescription.replace(/_/gi, ' ')}</span>
          <span className="row-service-duration">{service.details}</span>
        </div>
      </div>
    );
  });

  return (
    <div className="ProductPane">
      <div className={`ProductPane-header ${props.drawerContent ? 'hidden' : ''}`}>
        <div className="product-type-container">
          <span className={`product-type ${props.currentPlan ? 'active ' : ''}`}>
            {counterpart(`productPane.${props.productName.toLowerCase()}`)}
          </span>
          {props.currentPlan ?
            <div className="product-type-current">
              {counterpart('productPane.currentPlan')}
            </div> : ''
          }
        </div>
        <div className="product-price">
          <span>${props.productPrice}</span>
          <span>USD / {counterpart('globalTranslate.statements.fullMonth')}</span>
        </div>
      </div>
      <div className="ProductPane-services">
        {parseProductServices}
      </div>

      { props.drawerContent ?
        <Button
          category={props.currentPlan ? 'primary normal clear' : 'hollow normal clear'}
          icon={CheckCircle}
          iconDirection={props.currentPlan ? 'left' : ''}
          action={props.onClick}
          verticalAlign="top"
        >
          {props.currentPlan ?
            counterpart('globalTranslate.drawer.selected') :
            counterpart('productPane.choose')} {props.productName}
        </Button>
        :
        <div>
          { (props.currentPlan || !props.isPro) ? '' :
          <Button
            category={props.choosePro ? 'primary normal clear' : 'hollow normal clear'}
            icon={CheckCircle}
            iconDirection={props.choosePro ? 'left' : ''}
            action={props.choosePro ? '' : props.onClick}
            verticalAlign="top"
          >
            {props.choosePro ?
              'BusinessView' :
              counterpart('productPane.choose')} {props.productName}
          </Button>
          }
        </div>
      }
    </div>
  );
};

ProductPane.propTypes = {
  currentPlan: PropTypes.bool,
  isPro: PropTypes.bool.isRequired,
  productName: PropTypes.string.isRequired,
  productPrice: PropTypes.number.isRequired,
  productServices: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  choosePro: PropTypes.bool,
  drawerContent: PropTypes.bool,
};

ProductPane.defaultProps = {
  isPro: false,
  currentPlan: false,
  productName: '',
  productPrice: 0,
  productServices: {},
  choosePro: false,
  drawerContent: false,
};

function registerTranslations() {
  counterpart.registerTranslations('en-US', require('./translations/en-us.json'));
  counterpart.registerTranslations('en-GB', require('./translations/en-gb.json'));
  counterpart.registerTranslations('fr-CA', require('./translations/fr-ca.json'));
  counterpart.registerTranslations('zh-Hans', require('./translations/zh-Hans.json'));
  counterpart.registerTranslations('zh-Hant', require('./translations/zh-Hant.json'));
}

export default ProductPane;
