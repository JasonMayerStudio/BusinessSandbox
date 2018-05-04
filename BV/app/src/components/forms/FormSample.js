import React from 'react';
import PropTypes from 'prop-types';

import TextInput from 'Components/forms/text-input/TextInput.js';
import PrimaryButton from 'Components/Button/PrimaryButton';

import './FormSample.scss';

const FormSample = ({ user, updateFormState, onSave, saving, errors }) => {
  return (
    <form onSubmit={onSave}>
      <div className="field-group-vertical">
        <TextInput
          name="firstName"
          label="First Name"
          type="firstName"
          onChange={updateFormState}
          placeholder="Jane"
          value={user.firstName}
          error={errors.firstName}
        />
        <TextInput
          name="lastName"
          label="Last Name"
          type="lastName"
          onChange={updateFormState}
          placeholder="Doe"
          value={user.lastName}
          error={errors.lastName}
        />
        <TextInput
          name="email"
          label="Email"
          type="email"
          onChange={updateFormState}
          placeholder="jdoe@example.com"
          value={user.email}
          error={errors.email}
        />
        <PrimaryButton disabled={saving} type="submit">{saving ? 'Saving...' : 'Save'}</PrimaryButton>
      </div>
    </form>
  );
};

FormSample.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
  }),
  updateFormState: PropTypes.func,
  onSave: PropTypes.func,
  saving: PropTypes.bool,
  errors: PropTypes.shape({}),
};

FormSample.defaultProps = {
  user: {
    firstName: '',
    lastName: '',
    email: '',
  },
  updateFormState: () => {},
  onSave: () => {},
  saving: false,
  errors: {},
};

export default FormSample;
