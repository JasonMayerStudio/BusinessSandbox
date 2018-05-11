import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from 'Components/Button';
import SmallButton from 'Components/Button/SmallButton';

import './ConfirmationModal.scss';

const ConfirmationModal = (props) => {
  const {
    extraClass,
    isToggled,
    children,
    toggleModal,
    title,
    actionText,
    dangerAction,
    cancelButtonText,
    dangerButtonText,
    buttonCategory,
    direction,
  } = props;

  const wrapperClass = classnames('confirmation-modal-wrapper', {
    [extraClass]: extraClass,
    active: isToggled,
  });

  const modalClasses = classnames('confirmation-modal', {
    'modal-down': direction === 'down',
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

  const validatedCategory = (buttonCategory &&
    permittedButtonCategories.findIndex((permittedCategory) => {
      return buttonCategory === permittedCategory;
    }))
    ? buttonCategory
    : 'primary toggled';

  return (
    <div className={wrapperClass}>
      {/* Dynamically categorized buttons are better built by the button component itself, since we don't know what type of button it may be */}
      <Button
        category={validatedCategory}
        action={toggleModal}
        type="button"
      >
        {children}
      </Button>
      {isToggled && <div className={modalClasses}>
        <span className="headline-wrapper">
          <span className="headline">{title}</span>
        </span>
        <span className="content">{actionText}</span>
        <div className="button-wrapper">
          {/* Buttons with two categories can be built with the button component itself rather than a custom */}
          <Button
            category="link small"
            action={toggleModal}
            type="button"
          >
            {cancelButtonText}
          </Button>
          <SmallButton
            category="small"
            action={dangerAction}
            type="button"
            extraClass="delete"
          >
            {dangerButtonText}
          </SmallButton>
        </div>
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
