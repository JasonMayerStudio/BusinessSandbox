import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from 'Components/Button';
import SmallButton from 'Components/Button/SmallButton';

import './ConfirmationModal.scss';


const ConfirmationModal = (props) => {
  const wrapperClass = classnames('confirmation-modal-wrapper', {
    [props.extraClass]: props.extraClass,
    active: props.isToggled,
  });

  const permittedButtonCategories = [
    'primary',
    'hollow',
    'hollow inverted',
    'link',
    'link small',
    'link-inline',
    'small',
    'primary normal clear',
    'hollow normal clear',
    'primary toggled',
  ];
  const validatedCategory = (props.buttonCategory &&
                          permittedButtonCategories.findIndex((permittedCategory) => {
                            return props.buttonCategory === permittedCategory;
                          }))
    ? props.buttonCategory
    : 'primary toggled';

  const modalClasses = (props.direction === 'down')
    ? 'confirmation-modal modal-down'
    : 'confirmation-modal';

  return (
    <div className={wrapperClass}>
      {/* Dynamically categorized buttons are better built by the button component itself, since we don't know what type of button it may be */}
      <Button
        category={validatedCategory}
        action={props.toggleModal}
        type="button"
      >
        {props.children}
      </Button>
      {props.isToggled && <div className={modalClasses}>
        <span className="headline-wrapper">
          <h1 className="headline">{props.title}</h1>
        </span>
        <span className="content">{props.actionText}</span>
        <span className="button-wrapper">
          {/* Buttons with two categories can be built with the button component itself rather than a custom */}
          <Button
            category="link small"
            action={props.toggleModal}
            type="button"
          >
            {props.cancelButtonText}
          </Button>
          <SmallButton
            category="small"
            action={props.dangerAction}
            type="button"
          >
            {props.dangerButtonText}
          </SmallButton>
        </span>
      </div>}
    </div>
  );
};

ConfirmationModal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  isToggled: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  actionText: PropTypes.string.isRequired,
  dangerAction: PropTypes.func.isRequired,
  cancelButtonText: PropTypes.string.isRequired,
  dangerButtonText: PropTypes.string.isRequired,
  buttonCategory: PropTypes.string,
  direction: PropTypes.string,
  extraClass: PropTypes.string,
};

ConfirmationModal.defaultProps = {
  buttonCategory: 'primary toggled',
  direction: '',
  extraClass: '',
};

export default ConfirmationModal;
