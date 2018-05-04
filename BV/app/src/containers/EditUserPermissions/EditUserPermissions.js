import React from 'react';
import PropTypes from 'prop-types';
import counterpart from 'counterpart';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import SelectInput from 'Components/forms/select-input/SelectInput';
import TextField from 'Components/forms/text-field/TextField';

import { selectCurrentPreferences } from 'Selectors/preferencesSelectors';

import { initCommonTranslate } from 'Utils/languages';


const EditUserPermissions = ({ roleList, handleRoleSelection, selectedRole, availablePermissions, prefilledPermissions }) => {
  initCommonTranslate();
  return (
    <div className="drawer-main-top">
      <div className="field-group-vertical">
        <TextField
          htmlFor="select-role"
          labelContent={counterpart('globalTranslate.forms.selectRole')}
        >
          <SelectInput
            id="select-role"
            extraClass="field-input"
            dataList={roleList}
            handleSelection={handleRoleSelection}
            selectedItem={selectedRole}
            promptText={counterpart('globalTranslate.forms.chooseARole')}
            wrapperClass="select-menu__form"
          />
        </TextField>
        {availablePermissions}
        {prefilledPermissions}
      </div>
    </div>
  );
};

EditUserPermissions.propTypes = {
  roleList: PropTypes.array.isRequired,
  handleRoleSelection: PropTypes.func.isRequired,
  selectedRole: PropTypes.object,
  availablePermissions: PropTypes.element,
  prefilledPermissions: PropTypes.element,
};

EditUserPermissions.defaultProps = {
  selectedRole: null,
  availablePermissions: null,
  prefilledPermissions: null,
};

function mapStateToProps(state) {
  return {
    preferences: selectCurrentPreferences(state.preferences),
  };
}

export default withRouter(connect(mapStateToProps)(EditUserPermissions));
