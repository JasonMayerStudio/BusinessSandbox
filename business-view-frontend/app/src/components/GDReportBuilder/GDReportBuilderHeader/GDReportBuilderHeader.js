import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import ConfirmationModal from 'Components/confirmation-modal/ConfirmationModal.js';
import EditableInput from 'Components/forms/EditableInput';
import HollowButton from 'Components/Button/HollowButton';
import StatusFlag from 'Components/StatusFlag';
import EyeIcon from 'Components/icons/EyeIcon';
import GarbageIcon from 'Components/icons/GarbageIcon';
import OutsideClick from 'Components/OutsideClick';

import './GDReportBuilderHeader.scss';

class GDReportBuilderHeader extends Component {
  render() {
    const {
      deleteModalToggled,
      toggleDeleteModal,
      deleteReport,
      extraClass,
      hasError,
      savedState,
      showingPreview,
      status,
      title,
      togglePreview,
      translations,
      updateTitle,
      closeItems,
    } = this.props;

    const wrapperClass = classnames('gd-report-builder-header', 'main-content--header', {
      [extraClass]: extraClass,
    });

    const statusCode = (status === 'published')
      ? 'good'
      : (status === 'draft')
        ? 'warn'
        : 'bad';

    const statusTranslations = {
      good: translations.published,
      warn: translations.draft,
      bad: translations.error,
      status: translations.status,
    };

    const savedStateClass = classnames('saved-state', {
      'danger-text': hasError,
      disabled: showingPreview,
    });

    const showingPreviewClass = (showingPreview)
      ? 'disabled'
      : '';

    return (
      <div className={wrapperClass}>
        <div className={`flex-left ${showingPreviewClass}`}>
          <EditableInput
            label={translations.customReport}
            content={title}
            getCurrent={updateTitle}
          />
        </div>
        <div className="flex-right">
          <StatusFlag
            extraClass={showingPreviewClass}
            type={statusCode}
            translations={statusTranslations}
          />
          <span className={savedStateClass}>
            {savedState}
          </span>
          {
            (typeof deleteReport === 'function') &&
            <OutsideClick
              close={closeItems}
            >
              <ConfirmationModal
                extraClass={showingPreviewClass}
                isToggled={deleteModalToggled}
                toggleModal={toggleDeleteModal}
                title={translations.deleteReport}
                actionText={translations.confirmReportDelete}
                cancelButtonText={translations.cancel}
                dangerButtonText={translations.delete}
                dangerAction={deleteReport}
                direction="down"
              >
                <GarbageIcon />
              </ConfirmationModal>
            </OutsideClick>
          }
          {
            !showingPreview ?
              <HollowButton
                action={togglePreview}
                extraClass="toggle-preview-btn"
              >
                <EyeIcon /> {translations.preview}
              </HollowButton>
            :
              <HollowButton
                action={togglePreview}
                extraClass="toggle-preview-btn"
              >
                <EyeIcon slash /> {translations.hidePreview}
              </HollowButton>
          }
        </div>
      </div>
    );
  }
}

GDReportBuilderHeader.propTypes = {
  deleteModalToggled: PropTypes.bool,
  toggleDeleteModal: PropTypes.func,
  deleteReport: PropTypes.func,
  extraClass: PropTypes.string,
  hasError: PropTypes.bool,
  savedState: PropTypes.string,
  showingPreview: PropTypes.bool,
  status: PropTypes.oneOf(['published', 'draft', 'error']).isRequired,
  title: PropTypes.string.isRequired,
  togglePreview: PropTypes.func,
  translations: PropTypes.object.isRequired,
  updateTitle: PropTypes.func.isRequired,
  closeItems: PropTypes.func,
};

GDReportBuilderHeader.defaultProps = {
  deleteModalToggled: false,
  toggleDeleteModal: null,
  deleteReport: null,
  extraClass: '',
  hasError: false,
  savedState: '',
  showingPreview: false,
  togglePreview: null,
  closeItems: () => { },
};

export default GDReportBuilderHeader;

