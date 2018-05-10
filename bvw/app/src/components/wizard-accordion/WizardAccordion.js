import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from 'Components/Button';
import HollowButton from 'Components/Button/HollowButton';
import PrimaryButton from 'Components/Button/PrimaryButton';

import './WizardAccordion.scss';

const WizardAccordion = ({
  id,
  headerText,
  isOpen,
  toggleAccordion,
  children,
  directionalText,
  leftLinkButtonText,
  linkButtonText,
  secondaryButtonText,
  primaryButtonAction,
  primaryButtonText,
}) => {
  const headerClass = classnames('wizard-accordion__header', {
    'wizard-accordion__header--toggled': isOpen,
  });

  const toggleClass = classnames('wizard-accordion__toggler', {
    'wizard-accordion__toggler--expanded': isOpen,
    'wizard-accordion__toggler--collapsed': !isOpen,
  });

  const bodyClass = classnames('wizard-accordion__body', {
    'wizard-accordion__body--expanded': isOpen,
  });

  return (
    <article className="wizard-accordion__wrapper">
      <header
        role="button"
        tabIndex={0}
        className={headerClass}
        onClick={toggleAccordion}
        id={id}
      >
        <span className={toggleClass} />
        <h1 className="wizard-accordion__headline">{headerText}</h1>
      </header>
      <div className={bodyClass}>
        <div>
          <div className="wizard-accordion__content">
            {children}
          </div>

          <footer className="wizard-accordion__footer">
            <div className="wizard-accordion__footer-left">
              {
                leftLinkButtonText.length > 0 &&
                <span>Left Link Button</span>
              }
            </div>
            <div className="wizard-accordion__footer-right">
              {
                directionalText.length > 0 &&
                <span>{directionalText}</span>
              }
              {linkButtonText &&
                <Button
                  action={toggleAccordion}
                >
                  {linkButtonText}
                </Button>}
              {secondaryButtonText && <HollowButton>{secondaryButtonText}</HollowButton>}
              {
                primaryButtonText &&
                <PrimaryButton
                  action={() => primaryButtonAction(id)}
                >
                  {primaryButtonText}
                </PrimaryButton>
              }
            </div>
          </footer>
        </div>
      </div>
    </article>
  );
};

WizardAccordion.propTypes = {
  directionalText: PropTypes.string,
  headerText: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleAccordion: PropTypes.func.isRequired,
  leftLinkButtonText: PropTypes.string,
  linkButtonText: PropTypes.string,
  secondaryButtonText: PropTypes.string,
  primaryButtonAction: PropTypes.func,
  primaryButtonText: PropTypes.string,
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
};

WizardAccordion.defaultProps = {
  directionalText: '',
  leftLinkButtonText: '',
  linkButtonText: '',
  secondaryButtonText: '',
  primaryButtonAction: () => { },
  primaryButtonText: '',
};

export default WizardAccordion;
