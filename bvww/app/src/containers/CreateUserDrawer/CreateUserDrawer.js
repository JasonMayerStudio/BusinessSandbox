/* eslint-disable no-param-reassign, array-callback-return */
import counterpart from 'counterpart';
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import isEqual from 'lodash/isEqual';

import { getRolesForDropdown } from 'Selectors/roleSelectors';

import Button from 'Components/Button';
import Checkbox from 'Components/forms/checkbox/Checkbox';
import CloseIcon from 'Components/icons/CloseIcon';
import CloseSmallIcon from 'Components/icons/close-small-icon/CloseSmallIcon';
import Label from 'Components/forms/label/Label';
import LinkInlineButton from 'Components/Button/LinkInlineButton';
import PrimaryButton from 'Components/Button/PrimaryButton';
import ProgressBar from 'Components/progress-bar/ProgressBar';
import RightPointerIcon from 'Components/icons/right-pointer-icon/RightPointerIcon';
import TabPane from 'Components/tabs/tab-pane/TabPane';
import Tabs from 'Components/tabs/Tabs';
import TextInput from 'Components/forms/text-input/TextInput';

import { initCommonTranslate } from 'Utils/languages';
import { checkForCreateRolePermissions } from 'Utils/permissions/checkForCreateRolePermissions';
import { checkForEditRolePermissions } from 'Utils/permissions/checkForEditRolePermissions';
import {
  canEditOptionalPermissions,
} from 'Utils/permissionsUtils';
import Listener from 'Utils/listener';

import EditUserPermissions from '../EditUserPermissions';
import DataAccessFilter from '../DataAccessFilter';

import { saveUser, getUserById } from '../../api/userApi';
import * as userActions from '../../actions/userActions';

import { combineUserProperties } from '../../api/apiHelpers';
import {
  CHAIN_INDEX,
  MERCHANT_INDEX,
  mapSelectors,
  buildFilteredDataAccess,
  getSelectorColumns,
  getNewDataAccessFilter,
} from '../../utils/dataAccessUtils';
import {
  mapDataAccessList,
  getAllSelectableMerchants,
  getLowestSelectedOrgs,
} from '../../selectors/dataAccessSelectors';

import './CreateUserDrawer.scss';

const DATA_ACCESS_PANE = 2;

export class UserForm extends React.Component {
  constructor(props) {
    super(props);

    const currentFilter = this.getFilter(props.dataAccess, 0);

    this.state = {
      formTitle: this.props.isEditDrawer ? counterpart('globalTranslate.drawer.editUserProfile') : counterpart('globalTranslate.drawer.addNewUser'),
      selectedTab: 0,
      user: getEmptyUser(),
      rolesWithPermissions: [],
      availablePermissions: [],
      permissions: [],
      errors: {},
      formHasError: false,
      addingDataAccess: false,
      saving: false,
      serverSuccess: {},
      serverError: {},
      currentFilter,
      pendingFilterChanges: false,
      savedFilters: [],
    };

    this.attachBindings();
  }

  componentWillMount() {
    if (this.props.isEditDrawer) {
      getUserById(this.props.userId)
        .then((response) => {
          this.setState({
            editedUser: response,
          }, () => {
            this.setState({
              selectedRole: this.props.isEditDrawer ? this.getMatchingRole() : null,
            });
          });
        });
    }
  }

  componentDidMount() {
    this.toggleDrawer();
  }

  componentWillUnmount() {
    this.toggleDrawer();
  }

  getMatchingRole() {
    let selectedRole;

    this.props.editRoleList.map((role) => {
      if (this.state.editedUser.role.key === role.key) {
        selectedRole = role;
        selectedRole.permissions = this.mapPermissions(selectedRole, this.state.editedUser);
      }

      return false;
    });

    return selectedRole;
  }

  getFilter(dataAccess, filterChainIndex) {
    const newFilter = getNewDataAccessFilter(dataAccess);

    const selectorColumns = getSelectorColumns();
    const newRow = mapSelectors(
      filterChainIndex,
      newFilter,
      selectorColumns,
      this.getFilterListSearchField,
      this.getHandleSelect,
      this);

    newFilter.currentRow = newRow;

    return newFilter;
  }

  getFilterListSearchField(filterChainIndex, dataSource, columnIndex) {
    return function updateSearchField(value) {
      const lowercaseSearchTerm = value && value.toLowerCase && value.toLowerCase();
      const filteredItems = dataSource.filter((item) => {
        const lowerMain = item.mainLine.toLowerCase();
        const lowerSub = item.subLine && item.subLine.toLowerCase();
        return (lowerMain.includes(lowercaseSearchTerm) ||
          (lowerSub && lowerSub.includes(lowercaseSearchTerm)));
      });
      const validatedItems = (filteredItems.length) ? filteredItems : [{
        id: 0,
        mainLine: 'No items found',
      }];

      const currentFilterChain = this.state.currentFilter;
      const newRow = [...currentFilterChain.currentRow];

      newRow[columnIndex].currentData = validatedItems;
      newRow[columnIndex].currentSearchTerm = value;

      const updatedFilter = Object.assign({}, currentFilterChain, { currentRow: newRow });

      this.setState({
        currentFilter: updatedFilter,
      });
    };
  }

  getHandleSelect(filterChainIndex, dataSource, columnIndex) {
    return function handleItemSelect(value) {
      const selectedItemIndex = dataSource.findIndex((item) => {
        return item.id === value;
      });

      const currentFilterChain = this.state.currentFilter;
      const newRow = [...currentFilterChain.currentRow];
      const selectedItem = dataSource[selectedItemIndex];
      selectedItem.selected = !selectedItem.selected;

      newRow[columnIndex].currentSelectedItem = selectedItem;
      newRow[columnIndex].currentData = dataSource;
      newRow[columnIndex].currentSearchTerm = '';
      newRow[columnIndex].forceClose = true;

      if (columnIndex < MERCHANT_INDEX) {
        const subLineField = (columnIndex === CHAIN_INDEX) ? 'name' : null;
        const currentOrgs = mapDataAccessList(selectedItem.organizations, 'label', subLineField);

        newRow[columnIndex + 1].currentData = currentOrgs;
        newRow[columnIndex + 1].currentOnChange = this.getFilterListSearchField(0, currentOrgs, columnIndex + 1).bind(this);
        newRow[columnIndex + 1].currentHandleSelect = this.getHandleSelect(0, currentOrgs, columnIndex + 1, false).bind(this);

        const filteredMerchants = mapDataAccessList(getAllSelectableMerchants(selectedItem.organizations, [selectedItem.id]), 'label', 'name');
        newRow[MERCHANT_INDEX].currentData = filteredMerchants;
      }

      const updatedFilter = Object.assign({}, this.state.currentFilter);
      if (columnIndex === MERCHANT_INDEX) {
        // backfill earlier selectors
        const ancestors = [...selectedItem.parentIds];
        while (ancestors.length) {
          const nextAncestor = ancestors.shift();
          let ancestorColumnIndex;
          switch (ancestors.length) {
            case 4: // corp
              ancestorColumnIndex = 0;
              break;
            case 3: // region
              ancestorColumnIndex = 1;
              break;
            case 2: // principal
              ancestorColumnIndex = 2;
              break;
            case 1: // associate
              ancestorColumnIndex = 3;
              break;
            case 0: // chain
            default:
              ancestorColumnIndex = 4;
              break;
          }
          const selectedAncestor = newRow[ancestorColumnIndex].currentData.find((item) => {
            return item.id === nextAncestor;
          });
          const nextLevelData = selectedAncestor.organizations;

          newRow[ancestorColumnIndex].currentSelectedItem = selectedAncestor;
          newRow[ancestorColumnIndex + 1].currentData = nextLevelData;

          const filterListToUpdate = newRow[ancestorColumnIndex].selectorDataType;
          const filterSelectedItemToUpdate = newRow[ancestorColumnIndex].selectedItemType;
          updatedFilter[filterListToUpdate] = dataSource;
          updatedFilter[filterSelectedItemToUpdate] = newRow[ancestorColumnIndex].currentSelectedItem;
        }
      }

      const filterListToUpdate = newRow[columnIndex].selectorDataType;
      const filterSelectedItemToUpdate = newRow[columnIndex].selectedItemType;
      updatedFilter[filterListToUpdate] = dataSource;
      updatedFilter[filterSelectedItemToUpdate] = selectedItem;

      this.setState({
        pendingFilterChanges: true,
        currentFilter: updatedFilter,
      });
    };
  }

  compareName(a, b) {
    if (a.name < b.name) { return -1; }
    if (a.name > b.name) { return 1; }
    return 0;
  }

  mapPermissions(selectedRole, user) {
    const hasEditOptionalPermissions = this.checkForEditingOptionalPermissions();

    const permissions = selectedRole.permissions.map((permission) => {
      permission.isChecked = false;
      return permission;
    });

    const userPermissions = user.role.permissions.map((permission) => {
      return permission;
    });

    permissions.forEach((permission) => {
      userPermissions.forEach((userPermission) => {
        if (permission.name === userPermission.name) {
          permission.isChecked = true;

          const isChecked = Object.prototype.hasOwnProperty.call(userPermission, 'isChecked');
          if (isChecked && !userPermission.isChecked) {
            permission.isChecked = false;
          }

          if (!userPermission.optional) {
            permission.readonly = true;
            permission.isChecked = true;
          }
        }
      });

      if (!hasEditOptionalPermissions && permission.optional) {
        permission.readonly = true;
        permission.isChecked = false;
      }

      permission.htmlId = permission.name;

      return permission;
    });

    return permissions.sort(this.compareName);
  }

  attachBindings() {
    this.getFilter = this.getFilter.bind(this);
    this.toggleDrawer = this.props.toggleDrawer.bind(this);
    this.updateFormState = this.updateFormState.bind(this);
    this.togglePermission = this.togglePermission.bind(this);
    this.togglePrefilledPermissions = this.togglePrefilledPermissions.bind(this);
    this.clearAllAccess = this.clearAllAccess.bind(this);
    this.handleRoleSelection = this.handleRoleSelection.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.previousPane = this.previousPane.bind(this);
    this.nextPane = this.nextPane.bind(this);
    this.isFieldValid = this.isFieldValid.bind(this);
    this.startAddingDataAccess = this.startAddingDataAccess.bind(this);
    this.confirmCurrentDataAccess = this.confirmCurrentDataAccess.bind(this);
    this.cancelAddingDataAccess = this.cancelAddingDataAccess.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.savePermissions = this.savePermissions.bind(this);
    this.getMatchingRole = this.getMatchingRole.bind(this);
    this.mapPermissions = this.mapPermissions.bind(this);
    this.mapSavedFilters = this.mapSavedFilters.bind(this);
    this.mapCurrentRow = this.mapCurrentRow.bind(this);
    this.deleteSavedFilter = this.deleteSavedFilter.bind(this);
    this.checkForEditingOptionalPermissions = this.checkForEditingOptionalPermissions.bind(this);
    this.mapOptionalPermissions = this.mapOptionalPermissions.bind(this);
  }

  updateFormState(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;
    this.setState({ user });
  }

  checkForEditingOptionalPermissions() {
    const roleKey = this.state.selectedRole ? this.state.selectedRole.key : this.state.editedUser.role.key;

    return canEditOptionalPermissions(this.props.parsedPermissions, roleKey);
  }

  togglePermission(event) {
    const htmlId = event.target.id;
    const newPermissions = this.state.permissions.map((permission) => {
      const newPermission = Object.assign({}, permission);
      if (newPermission.htmlId === htmlId) {
        newPermission.isChecked = !newPermission.isChecked;
      }
      return newPermission;
    });
    this.setState({
      permissions: [...newPermissions],
    });
  }

  togglePrefilledPermissions(event) {
    const htmlId = event.target.id;
    const newPermissions = this.state.selectedRole.permissions.map((permission) => {
      const newPermission = Object.assign({}, permission);
      if (newPermission.htmlId === htmlId) {
        newPermission.isChecked = !newPermission.isChecked;
        newPermission.newSelection = true;
      }
      return newPermission;
    });

    this.setState({
      selectedRole: { ...this.state.selectedRole, permissions: [...newPermissions] },
    });
  }

  clearAllAccess() {
    const newFilter = this.getFilter(this.props.dataAccess, 0);

    this.setState({
      pendingChanges: true,
      currentFilter: newFilter,
      savedFilters: [],
    });
  }

  submitForm(event) {
    event.preventDefault();

    if (!this.userFormIsValid()) {
      return;
    }

    this.setState({
      errors: {},
      serverSuccess: null,
      serverError: null,
      saving: true,
    });

    const dataAccessList = this.state.savedFilters.reduce((rollupOrgAccess, filterToAdd) => {
      if (filterToAdd.selectedCorp) {
        const currentStartData = buildFilteredDataAccess(filterToAdd);

        const currentAccessList = getLowestSelectedOrgs(currentStartData);

        return rollupOrgAccess.concat(currentAccessList);
      } else {
        return rollupOrgAccess;
      }
    }, []);

    const userToSave = combineUserProperties(
      this.state.user,
      this.state.selectedRole,
      this.state.permissions,
      dataAccessList);

    saveUser(userToSave)
      .then((response) => {
        this.setState({
          user: getEmptyUser(),
          saving: false,
          serverSuccess: Object.assign({ hasSuccessResponse: true }, response),
        });

        this.props.history.goBack();
      })
      .catch((error) => {
        this.setState({
          saving: false,
          serverError: Object.assign({ hasErrorResponse: true }, error),
        });
      });
  }

  savePermissions() {
    this.setState({ saving: true });

    const permissions = this.state.selectedRole.permissions.filter((permission) => {
      return permission.isChecked;
    });

    const role = Object.assign({}, this.state.selectedRole);
    role.roleName = role.name;

    const userToSave = combineUserProperties(
      this.state.editedUser,
      role,
      permissions);

    this.props.saveUser(userToSave)
      .then(() => {
        Listener.trigger('USER_ROLE_PERMS_UPDATED', userToSave);
        this.props.history.goBack();
      });
  }

  get formError() {
    if (this.state.formHasError) {
      return (
        <div className="alert-danger">{counterpart('globalTranslate.forms.pleaseFixTheErrors')}</div>
      );
    } else {
      return null;
    }
  }

  get serverError() {
    if (this.state.serverError && this.state.serverError.message) {
      return (
        <div className="alert-danger">
          {this.state.serverError.message || 'Server error'}
        </div>
      );
    } else {
      return null;
    }
  }

  get serverSuccess() {
    if (this.state.serverSuccess && this.state.serverSuccess.hasSuccessResponse) {
      return (
        <div className="alert-success">
          Successfully saved <strong>{this.state.serverSuccess.firstName} {this.state.serverSuccess.lastName}</strong> with an user ID of <strong>{this.state.serverSuccess.userId}</strong>.
        </div>
      );
    } else {
      return null;
    }
  }

  get availablePermissions() {
    if (this.state.selectedRole) {
      const checkboxes = this.state.permissions.map((permission) => {
        return (
          <Checkbox
            key={permission.htmlId}
            id={permission.htmlId}
            label={permission.name}
            onChange={this.togglePermission}
            value={permission.key}
            isChecked={permission.isChecked}
            readonly={permission.readonly}
            optionalTooltip={permission.description}
            optionalTooltipTitle={permission.name}
          />
        );
      });
      return (
        <div className="field" >
          <div className="checkbox-group">
            <Label htmlFor="user-permissions-list" labelClass="field-label checkbox-group-parent-label">{counterpart('globalTranslate.drawer.selectPermissions')}</Label>
            <div id="user-permissions-list" className="checkbox-list">
              {checkboxes}
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

  get prefilledPermissions() {
    if (this.props.isEditDrawer && this.state.selectedRole && this.state.selectedRole.name.replace(/_/g, ' ') === this.state.editedUser.role.name) {
      const checkboxes = this.state.selectedRole.permissions.map((permission) => {
        return (
          <Checkbox
            key={permission.htmlId}
            id={permission.htmlId}
            label={permission.name}
            onChange={this.togglePrefilledPermissions}
            value={permission.key}
            isChecked={permission.isChecked}
            readonly={permission.readonly}
            optionalTooltip={permission.description}
            optionalTooltipTitle={permission.name}
          />
        );
      });
      return (
        <div className="field">
          <div className="checkbox-group">
            <Label htmlFor="user-permissions-list" labelClass="field-label checkbox-group-parent-label">{counterpart('globalTranslate.drawer.selectPermissions')}</Label>
            <div id="user-permissions-list" className="checkbox-list">
              {checkboxes}
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

  mapCurrentRow(currentRow) {
    const globalSelectorHierarchy = [];
    currentRow.map((row) => {
      if (row.currentSelectedItem !== null) {
        globalSelectorHierarchy.push(`${row.singularName} ${row.currentSelectedItem.label}`);
      } else {
        globalSelectorHierarchy.push(`${row.singularName}: All`);
      }
    });

    const globalHierarchyString = globalSelectorHierarchy.join(' > ');

    return globalHierarchyString;
  }

  mapSavedFilters() {
    return this.state.savedFilters.map((filter, index) => {
      const savedFilter = this.mapCurrentRow(filter.currentRow);

      return (
        <div
          className="global-selector-group-small-wrapper"
          key={index} // eslint-disable-line
          title={savedFilter}
        >
          <span className="global-selector-group-small">
            {savedFilter}
          </span>
          <span
            className="delete-data-access"
            tabIndex={0}
            role="button"
            onClick={() => this.deleteSavedFilter(filter)}
          >
            <CloseSmallIcon />
          </span>
        </div>
      );
    });
  }

  deleteSavedFilter(selectedFilter) {
    const currentlySavedFilters = [...this.state.savedFilters];

    const newFilters = currentlySavedFilters.filter((filter) => {
      if (!isEqual(filter, selectedFilter)) {
        return filter;
      }

      return false;
    });

    this.setState({
      savedFilters: newFilters,
    });
  }

  isFieldValid(event) {
    const field = event.target.name;
    const value = event.target.value;
    const newErrorObject = Object.assign({}, this.state.errors);

    let isValid = false;
    if (field === 'email') {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;  // eslint-disable-line no-useless-escape
      isValid = re.test(value);
    } else if (value && value.trim().length) {
      isValid = true;
    }

    if (isValid) {
      newErrorObject[field] = null;
    } else {
      const translationKey = this.state.user.errorMessageKeys[field];
      newErrorObject[field] = counterpart(`globalTranslate.errors.${translationKey}`);
    }

    this.setState({
      errors: newErrorObject,
    });
  }

  userFormIsValid() {
    let formIsValid = true;
    const errors = {};

    if (this.state.user.firstName.length < 1) {
      errors.firstName = 'First name must not be blank.';
      formIsValid = false;
    }

    if (this.state.user.lastName.length < 1) {
      errors.lastName = 'Last name must not be blank.';
      formIsValid = false;
    }

    if (this.state.user.email.length < 3) {
      errors.email = 'Email must be valid.';
      formIsValid = false;
    }

    this.setState({
      errors,
      formHasError: !formIsValid,
    });

    return formIsValid;
  }

  previousPane() {
    this.setState({ selectedTab: this.state.selectedTab - 1 });
  }

  nextPane(event) {
    event.preventDefault();

    const nextPane = this.state.selectedTab + 1;

    const addingDataAccess = (nextPane === DATA_ACCESS_PANE &&
      !this.state.savedFilters.length);

    this.setState({
      selectedTab: nextPane,
      addingDataAccess,
    });
  }

  startAddingDataAccess() {
    this.setState({
      addingDataAccess: true,
    });
  }

  confirmCurrentDataAccess() {
    const newFilter = Object.assign({}, this.state.currentFilter);
    newFilter.startData = buildFilteredDataAccess(newFilter);

    const savedFilters = [...this.state.savedFilters, newFilter];

    const currentFilter = this.getFilter(this.props.dataAccess, 0);

    this.setState({
      currentFilter,
      savedFilters,
      addingDataAccess: false,
    });
  }

  cancelAddingDataAccess() {
    const currentFilter = this.getFilter(this.props.dataAccess, 0);

    this.setState({
      currentFilter,
      addingDataAccess: false,
    });
  }

  closeDrawer(event) {
    event.preventDefault();

    this.props.history.goBack();
  }

  handleRoleSelection(value, event) {
    event.preventDefault();
    event.stopPropagation();
    const roleList = this.props.isEditDrawer ? this.props.editRoleList : this.props.createRoleList;
    const newSelection = roleList.find((item) => item.value === value);

    if (newSelection) {
      const newPermissions = newSelection.permissions.map((permission) => {
        const mappedPermission = Object.assign({}, permission);
        mappedPermission.htmlId = mappedPermission.name;
        if (mappedPermission.optional) {
          mappedPermission.isChecked = false;
          mappedPermission.readonly = false;
        } else {
          mappedPermission.isChecked = true;
          mappedPermission.readonly = true;
        }

        return mappedPermission;
      });

      this.setState({
        selectedRole: newSelection,
        permissions: newPermissions,
      }, () => {
        const hasEditOptionalPermissions = this.checkForEditingOptionalPermissions();
        this.mapOptionalPermissions(hasEditOptionalPermissions);
      });
    }
  }

  mapOptionalPermissions(permission) {
    const permissions = this.state.permissions.map((oldPermission) => {
      const newPermission = Object.assign({}, oldPermission);
      if (!permission && newPermission.optional) {
        newPermission.readonly = true;
      }
      return newPermission;
    });

    this.setState({
      permissions,
    });
  }

  get buttonText() {
    if (this.props.isEditDrawer) {
      return 'Save Permissions';
    }

    return 'Save';
  }

  get editPermissions() {
    return (
      <div className="drawer-main">
        <EditUserPermissions
          roleList={this.props.isEditDrawer ? this.props.editRoleList : this.props.createRoleList}
          handleRoleSelection={this.handleRoleSelection}
          selectedRole={this.state.selectedRole || null}
          availablePermissions={this.prefilledPermissions === null ? this.availablePermissions : null}
          prefilledPermissions={this.prefilledPermissions}
        />
        <div className="drawer-main-bottom">
          {!this.props.isEditDrawer && <ProgressBar
            completed={this.state.selectedTab + 1}
            total={3}
            goBackHandler={this.previousPane}
            goBackText={`${counterpart('globalTranslate.drawer.previousStep')}: ${counterpart('globalTranslate.drawer.userProfile')}`}
          />}
          <div className="button-group-vertical">
            {!this.props.isEditDrawer && <PrimaryButton
              action={this.nextPane}
              icon={RightPointerIcon}
              iconDirection="right"
              verticalAlign="top"
            >
              {counterpart('globalTranslate.drawer.selectDataAccess')}
            </PrimaryButton>}
            {this.props.isEditDrawer && <PrimaryButton
              action={this.savePermissions}
            >
              {this.state.saving
                ? counterpart('globalTranslate.drawer.saving')
                : counterpart('globalTranslate.drawer.saveUserPermissions')
              }
            </PrimaryButton>}
            <Button
              action={this.closeDrawer}
            >
              {counterpart('globalTranslate.drawer.cancel')}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  render() {
    initCommonTranslate();

    return (
      <form onSubmit={this.submitForm} className="drawer-content">
        <div className="drawer-heading">
          <h1 className="drawer-headline">{this.state.formTitle}</h1>
          <Button
            type="button"
            action={this.closeDrawer}
            iconDirection="right"
            icon={CloseIcon}
            verticalAlign="super"
          >
            {counterpart('globalTranslate.drawer.close')}
          </Button>
        </div>
        {this.props.isEditDrawer && (this.editPermissions)}
        {!this.props.isEditDrawer && <Tabs selectedTab={this.state.selectedTab} extraClass="drawer-body">
          <TabPane>
            <div className="drawer-main">
              <div className="drawer-main-top">
                <div className="field-group-vertical">
                  <TextInput
                    name="firstName"
                    label={counterpart('globalTranslate.forms.firstName')}
                    type="firstName"
                    onChange={this.updateFormState}
                    placeholder="Jane"
                    value={this.state.user.firstName}
                    error={this.state.errors.firstName}
                    onBlur={this.isFieldValid}
                    isRequired
                  />
                  <TextInput
                    name="lastName"
                    label={counterpart('globalTranslate.forms.lastName')}
                    type="lastName"
                    onChange={this.updateFormState}
                    placeholder="Doe"
                    value={this.state.user.lastName}
                    error={this.state.errors.lastName}
                    onBlur={this.isFieldValid}
                    isRequired
                  />
                  <TextInput
                    name="email"
                    label={counterpart('globalTranslate.forms.email')}
                    type="email"
                    onChange={this.updateFormState}
                    placeholder="jdoe@example.com"
                    value={this.state.user.email}
                    error={this.state.errors.email}
                    onBlur={this.isFieldValid}
                    isRequired
                  />
                </div>
              </div>
              <div className="drawer-main-bottom">
                <ProgressBar
                  completed={this.state.selectedTab + 1}
                  total={3}
                  goBackHandler={this.previousPane}
                  goBackText={`${counterpart('globalTranslate.drawer.previousStep')}: ${counterpart('globalTranslate.drawer.userProfile')}`}
                />
                <div className="button-group-vertical">
                  <PrimaryButton
                    action={this.nextPane}
                    icon={RightPointerIcon}
                    iconDirection="right"
                    verticalAlign="top"
                    disabled={this.state.user.email.length === 0 || this.state.user.firstName.length === 0 || this.state.user.lastName.length === 0}
                  >
                    {counterpart('globalTranslate.drawer.selectPermissions')}
                  </PrimaryButton>
                  <Button
                    type="button"
                    action={this.closeDrawer}
                  >
                    {counterpart('globalTranslate.drawer.cancel')}
                  </Button>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane>
            {this.editPermissions}
          </TabPane>
          <TabPane>
            <div className="drawer-main">
              <div className="drawer-main-top">
                <div className="left-right-content-stacked">
                  <h2 className="drawer-sub-head">{counterpart('globalTranslate.drawer.selectDataAccess')}</h2>
                  <div className="button-group-horizontal">
                    <LinkInlineButton
                      action={this.clearAllAccess}
                      disabled={!(this.state.savedFilters.length || this.state.currentFilter.selectedCorp)}
                    >
                      {counterpart('globalTranslate.drawer.clearAll')}
                    </LinkInlineButton>
                  </div>
                </div>
                <div>
                  {
                    this.state.addingDataAccess &&
                    <DataAccessFilter
                      filterChain={this.state.currentFilter.currentRow}
                      direction="vertical"
                      showFirstOnly={!this.state.currentFilter.selectedCorp}
                    />
                  }
                  {
                    this.state.savedFilters.length > 0 && !this.state.addingDataAccess &&
                    <div className="button-group-vertical">
                      {this.mapSavedFilters()}
                    </div>
                  }
                  {
                    !this.state.addingDataAccess &&
                    <div className="button-group-vertical">
                      <PrimaryButton
                        action={this.startAddingDataAccess}
                      >
                        {counterpart('globalTranslate.drawer.addDataAccess')}
                      </PrimaryButton>
                    </div>
                  }
                </div>
                {this.serverSuccess}
                {this.serverError}
              </div>
              <div className="drawer-main-bottom">
                <ProgressBar
                  completed={this.state.selectedTab + 1}
                  total={3}
                  goBackHandler={this.previousPane}
                  goBackText={`${counterpart('globalTranslate.drawer.previousStep')}: ${counterpart('globalTranslate.drawer.permissions')}`}
                />
                {
                  this.state.addingDataAccess &&
                  <div className="button-group-vertical">
                    <PrimaryButton
                      disabled={!this.state.pendingFilterChanges}
                      type="submit"
                      action={this.confirmCurrentDataAccess}
                    >
                      {counterpart('globalTranslate.drawer.saveAndReturnToDataAccess')}
                    </PrimaryButton>
                    <Button
                      type="button"
                      action={this.cancelAddingDataAccess}
                    >
                      {counterpart('globalTranslate.drawer.cancelAndReturnToDataAccess')}
                    </Button>
                  </div>
                }
                {
                  !this.state.addingDataAccess &&
                  <div className="button-group-vertical">
                    <PrimaryButton
                      disabled={this.state.saving}
                      type="submit"
                      action={this.submitForm}
                    >
                      {this.state.saving ? counterpart('globalTranslate.drawer.saving') : counterpart('globalTranslate.drawer.saveAndReturnToAdmin')}
                    </PrimaryButton>
                    <Button
                      type="button"
                      action={this.closeDrawer}
                    >
                      {counterpart('globalTranslate.drawer.cancel')}
                    </Button>
                  </div>
                }
              </div>
            </div>
          </TabPane>
        </Tabs>}
      </form>
    );
  }
}

UserForm.propTypes = {
  createRoleList: PropTypes.array.isRequired,
  dataAccess: PropTypes.array.isRequired,
  editRoleList: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
  isEditDrawer: PropTypes.bool,
  parsedPermissions: PropTypes.object.isRequired,
  saveUser: PropTypes.func.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  userId: PropTypes.string,
};

UserForm.defaultProps = {
  match: {
    params: {
      id: '',
    },
  },
  isEditDrawer: false,
  userId: '',
};

function getEmptyUser() {
  return {
    firstName: '',
    lastName: '',
    email: '',
    role: null,
    errorMessageKeys: {
      firstName: 'firstNameBlank',
      lastName: 'lastNameBlank',
      email: 'emailInvalid',
    },
  };
}

function mapStateToProps(state, ownProps) {
  return {
    createRoleList: getRolesForDropdown(checkForCreateRolePermissions(state.auth.session.user.role.permissions, state.auth.session.user.availableRoles)),
    dataAccess: state.auth.session.user.dataAccess,
    editRoleList: getRolesForDropdown(checkForEditRolePermissions(state.auth.session.user.role.permissions, state.auth.session.user.availableRoles)),
    parsedPermissions: state.auth.session.user.parsedPermissions,
    userId: ownProps.match.params.userId,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    saveUser: (user) => dispatch(userActions.updateUser(user)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserForm));
/* eslint-enable no-param-reassign, array-callback-return */
