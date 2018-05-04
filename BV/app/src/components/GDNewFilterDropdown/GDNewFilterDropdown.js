import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from 'Components/Button';
import PrimaryButton from 'Components/Button/PrimaryButton';
import TextInput from 'Components/forms/text-input/TextInput';

import './GDNewFilterDropdown.scss';

const GDNewFilterDropdown = ({
  extraClass,
  onChange,
  saveFilterName,
  toggleDropdown,
  translations,
  value,
}) => {
  const wrapperClass = classnames('gd-new-filter-dropdown', {
    [extraClass]: extraClass,
  });

  const disabled = value.trim().length < 3;

  return (
    <div className={wrapperClass}>
      <h1 className="gd-new-filter-dropdown__header">{translations.saveFilterTitle}</h1>
      <div className="gd-new-filter-dropdown__content">
        <TextInput
          name="filterName"
          label={translations.saveFilterLabel}
          types="text"
          value={value}
          onChange={onChange}
        />
      </div>
      <div className="gd-new-filter-dropdown__footer">
        <Button
          action={toggleDropdown}
        >
          {translations.cancel}
        </Button>
        <PrimaryButton
          action={saveFilterName}
          disabled={disabled}
        >
          {translations.save}
        </PrimaryButton>
      </div>
    </div>
  );
};

GDNewFilterDropdown.propTypes = {
  extraClass: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  saveFilterName: PropTypes.func.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
  translations: PropTypes.object,
  value: PropTypes.string,
};

GDNewFilterDropdown.defaultProps = {
  extraClass: '',
  translations: {
    saveFilterLabel: 'Filter Name',
    saveFilterTitle: 'Save Filter',
  },
  value: '',
};

export default GDNewFilterDropdown;
