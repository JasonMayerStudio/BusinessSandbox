/* eslint-disable no-param-reassign, class-methods-use-this, array-callback-return */
import counterpart from 'counterpart';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import uniq from 'lodash/uniq';
import moment from 'moment';

import { createSelectorBar } from 'Utils/selectorBarUtil';

import { getUsersForTable, normalizeUser } from 'Selectors/userSelectors';
import { getCurrentDataAccess } from 'Selectors/dataAccessSelectors';
import { getMerchantsForTable } from 'Selectors/merchantSelectors';
import { selectCurrentPreferences } from 'Selectors/preferencesSelectors';

import BallSyncLoader from 'Components/loaders/BallSyncLoader';
import Button from 'Components/Button';
import HollowButton from 'Components/Button/HollowButton';
import HollowInvertedButton from 'Components/Button/HollowInvertedButton';
import Pagination from 'Components/pagination/Pagination.js';
import TableDataAccess from 'Components/table-data-access/Table-DataAccess.js';
import PopupMenu from 'Components/popup-menu/PopupMenu.js';
import SearchBar from 'Components/search-bar/SearchBar.js';
import StatusBadge from 'Components/status-badge/StatusBadge.js';
import LeftPointerIcon from 'Components/icons/left-pointer-icon/LeftPointerIcon.js';
import ListIcon from 'Components/icons/list-icon/ListIcon.js';
import LockIcon from 'Components/icons/LockIcon';

import { initCommonTranslate } from 'Utils/languages';
// system under test
import {
  canEditRole,
  canEditDataAccess,
  canActivateAndDeactivateRole,
} from 'Utils/permissionsUtils';

import Listener from 'Utils/listener';

import * as userActions from '../../actions/userActions';
import * as merchantActions from '../../actions/merchantActions';

import ExtendedDrawer from '../ExtendedDrawer';

import statusList from '../ViewUsers/data/statusList';

// Services
import { getUserById, getUserMerchants, getUserDataAccessById } from '../../api/userApi';
import { combineUserProperties } from '../../api/apiHelpers';
import statusUnmap from '../ViewUsers/data/statusUnmap';

export class ManageUserDrawer extends Component {
  constructor(props) {
    super(props);

    initCommonTranslate();

    this.state = {
      currentPage: 1,
      filterText: '',
      merchants: [],
      perPage: 5,
      totalRows: [],
      sort: {
        key: undefined,
        order: 0,
      },
      viewedUserMerchants: [],
      totalUsers: this.props.parentFilteredRows.length > this.props.users.length ? this.props.parentFilteredRows : this.props.users,
      filteredRows: [],
      filteredRowsPaged: [],
      totalUserIds: [],
      totalMatchingIds: [],
      organizationIds: [],
      currentUserId: this.props.userId,
      columnsToSearch: ['hasAccess', 'merchant_id', 'fullAddress', 'dbaName'],
      checkboxTouched: false,
      loading: false,
    };

    this.pagination = false;
    this.attachBindings();
    this.attachListeners();
  }

  componentWillMount() {
    this.useExtendedDrawer();

    this.setState({ loading: true });
  }

  componentDidMount() {
    this.toggleDrawer();

    getUserById(this.props.userId)
      .then((response) => {
        const user = Object.assign({}, response);
        this.updateUser(user);
      });
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      pageCount: newProps.merchants ? Math.ceil(newProps.merchants.length / this.state.perPage) : null,
    });

    this.pagination = this.setupPaginator(newProps);
  }

  componentWillUnmount() {
    this.useExtendedDrawer();
    this.toggleDrawer();
  }

  onChange(filterText) {
    if (filterText === '') {
      this.globalSelectorGroup(this.state.merchants);
    }

    this.setState({ filterText });
  }

  onLeftToggle() {
    const previous = this.previousPage(this.state.totalUserIds, this.state.user.userId);
    if (this.state.user.userId > 0 && previous) {
      this.props.getViewedUserMerchants(previous);
      this.props.history.push(`/admin/edit-user/${previous}`);
    }
  }

  onRightToggle() {
    if (this.state.user.userId < this.state.totalUserIds.slice(-1)[0]) {
      const next = this.nextPage(this.state.totalUserIds, this.state.user.userId);
      this.props.getViewedUserMerchants(next);
      this.props.history.push(`/admin/edit-user/${next}`);
    }
  }

  getDataAccessRows() {
    this.setState({
      dataAccessRows: getCurrentDataAccess(this.state.user.dataAccess),
    }, () => {
      this.setState({
        currentlyVisibleDataAccessRows: this.state.dataAccessRows,
      });
    });
  }

  getSelectedMerchants(merchants, userMerchants, access) {
    let result;
    const merchantsToCheck = merchants.map((merchant) => { return merchant.merchantId; });
    if (merchantsToCheck && userMerchants) {
      result = userMerchants.filter((user) => {
        user.hasAccess = access;
        return merchantsToCheck.indexOf(user.merchantId) > -1;
      });
    }

    return result;
  }

  setupPaginator(newProps) {
    if (this.state.filteredRows.length) {
      return this.state.filteredRows.length > this.state.perPage;
    }

    return newProps.merchants ? newProps.merchants.length > this.state.perPage : null;
  }

  updateMerchants(merchants, result) {
    if (result !== null) {
      for (let i = 0; i < result.length; i += 1) {
        for (let j = 0; j < merchants.length; j += 1) {
          if (result[i].merchantId === merchants[j].merchantId) {
            merchants[j] = result[i];
          }
        }
      }
    }

    const pagination = this.state.offset ? merchants.slice(this.state.offset, this.state.offset + this.state.perPage) : merchants.slice(0, this.state.perPage);

    this.setState({
      totalRows: merchants,
      merchants: pagination,
    }, () => {
      this.globalSelectorGroup(this.state.merchants);
    });
  }

  attachBindings() {
    this.getDataAccessRows = this.getDataAccessRows.bind(this);
    this.searchComplexDataAccessRows = this.searchComplexDataAccessRows.bind(this);
    this.addDataAccessRow = this.addDataAccessRow.bind(this);
    this.editDataAccessRow = this.editDataAccessRow.bind(this);
    this.deleteDataAccessRow = this.deleteDataAccessRow.bind(this);
    this.saveComplexDataAccess = this.saveComplexDataAccess.bind(this);
    this.orgIds = this.orgIds.bind(this);
    this.rowIds = this.rowIds.bind(this);
    this.onChange = this.onChange.bind(this);
    this.editUser = this.editUser.bind(this);
    this.changePlan = this.changePlan.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.compareBy = this.compareBy.bind(this);
    this.filterRows = this.filterRows.bind(this);
    this.saveAccess = this.saveAccess.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.removeMatch = this.removeMatch.bind(this);
    this.matchingIds = this.matchingIds.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.clearAccess = this.clearAccess.bind(this);
    this.toggleAccess = this.toggleAccess.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.onLeftToggle = this.onLeftToggle.bind(this);
    this.onRightToggle = this.onRightToggle.bind(this);
    this.setupPaginator = this.setupPaginator.bind(this);
    this.selectAllAccess = this.selectAllAccess.bind(this);
    this.updateMerchants = this.updateMerchants.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
    this.toggleDrawer = this.props.toggleDrawer.bind(this);
    this.revertStatusText = this.revertStatusText.bind(this);
    this.globalSelectorGroup = this.globalSelectorGroup.bind(this);
    this.useExtendedDrawer = this.props.useExtendedDrawer.bind(this);
    this.getSelectedMerchants = this.getSelectedMerchants.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.updateUserStatus = this.updateUserStatus.bind(this);
  }

  attachListeners() {
    Listener.on('USER_ROLE_PERMS_UPDATED', this.updateUser);
    Listener.on('NEW_USER_STATUS', this.updateUserStatus);
  }

  updateUserStatus(selection) {
    const user = Object.assign({}, this.state.user);

    user.statusData = selection[0];

    this.setState({ user });
  }

  updateUser(user) {
    const dataAccessType = (user && (user.role.key === 'MERCHANT_USER' || user.role.key === 'ACQUIRER_USER'))
      ? 'simple'
      : 'complex';

    // @TODO Promise.all here
    if (dataAccessType === 'complex') {
      getUserDataAccessById(user.userId)
        .then((dataAccess) => {
          user.dataAccess = dataAccess;
          this.setState({
            user: normalizeUser(user),
            loading: false,
          }, () => {
            this.getDataAccessRows();
          });
        });
    } else {
      getUserMerchants(user.userId)
        .then((merchants) => {
          user.merchants = merchants;

          this.setState({
            user: normalizeUser(user),
            matchingMerchants: this.getSelectedMerchants(this.props.merchants, user.merchants, true) || null,
            loading: false,
          }, () => {
            this.updateMerchants(this.props.merchants, this.state.matchingMerchants);
            this.matchingIds();
          });
        });
      this.props.getMerchants();
      this.rowIds();
    }

    this.setState({
      dataAccessType,
    });
  }

  removeMatch(array, idToCheck) {
    const newArray = array.filter((item) => {
      return item.merchantId !== idToCheck;
    });

    return newArray;
  }

  orgIds() {
    const accessedRows = this.state.totalRows.filter((row) => {
      if (row.hasAccess) {
        return row;
      }
      return false;
    }).map((row) => {
      return row.merchantId;
    });

    return accessedRows;
  }

  toggleAccess(event) {
    const htmlId = event.target.id;
    const matchingMerchants = this.state.matchingMerchants;

    const newMerchants = this.state.totalRows.map((merchant) => {
      const newMerchant = Object.assign({}, merchant);
      if (`merchant-${newMerchant.merchantId}` === htmlId) {
        newMerchant.hasAccess = !newMerchant.hasAccess;

        if (!newMerchant.hasAccess) {
          const newMatches = this.removeMatch(matchingMerchants, newMerchant.merchantId);
          this.setState({ matchingMerchants: newMatches });
        }

        if (newMerchant.hasAccess) {
          matchingMerchants.push(newMerchant);
          this.setState({ matchingMerchants });
        }
      }

      return newMerchant;
    });

    this.setState({
      merchants: this.state.offset ? newMerchants.slice(this.state.offset, this.state.offset + this.state.perPage) : newMerchants.slice(0, this.state.perPage),
      totalRows: [...newMerchants],
      checkboxTouched: true,
    }, () => {
      this.setState({
        organizationIds: this.orgIds ? uniq(this.orgIds()) : [],
      });
      this.globalSelectorGroup(this.state.merchants);
    });
  }

  clearAccess() {
    const newMerchants = this.state.totalRows.map((merchant) => {
      const newMerchant = Object.assign({}, merchant);
      newMerchant.hasAccess = false;
      return newMerchant;
    });

    this.setState({
      merchants: this.state.offset ? newMerchants.slice(this.state.offset, this.state.offset + this.state.perPage) : newMerchants.slice(0, this.state.perPage),
      totalRows: [...newMerchants],
      matchingMerchants: [],
      checkboxTouched: true,
    }, () => {
      this.globalSelectorGroup(this.state.merchants);
    });
  }

  selectAllAccess() {
    const newMerchants = this.state.totalRows.map((merchant) => {
      const newMerchant = Object.assign({}, merchant);
      newMerchant.hasAccess = true;
      return newMerchant;
    });

    this.setState({
      merchants: newMerchants.slice(0, this.state.perPage),
      totalRows: [...newMerchants],
      matchingMerchants: [...newMerchants],
      checkboxTouched: true,
    }, () => {
      this.setState({
        organizationIds: this.orgIds ? uniq(this.orgIds()) : [],
      });
      this.globalSelectorGroup(this.state.merchants);
    });
  }

  saveAccess() {
    this.setState({ loading: true });
    const currentUserData = Object.assign({}, this.state.user);
    currentUserData.status = this.revertStatusText(currentUserData.status.toLowerCase());
    currentUserData.organizationIds = this.state.organizationIds;

    const userToSave = combineUserProperties(
      currentUserData,
      currentUserData.role,
      currentUserData.permissions,
      currentUserData.organizationIds);

    this.props.saveUser(userToSave).then(() => {
      getUserMerchants(this.state.user.userId);
      this.setState({
        loading: false,
      });
    });
  }

  saveComplexDataAccess(newDataAccess) {
    this.setState({ loading: true });

    const currentUserData = Object.assign({}, this.state.user);
    currentUserData.status = this.revertStatusText(currentUserData.status.toLowerCase());
    currentUserData.organizationIds = newDataAccess;

    const userToSave = combineUserProperties(
      currentUserData,
      currentUserData.role,
      currentUserData.permissions,
      currentUserData.organizationIds);

    this.props.saveUser(userToSave).then(() => {
      this.setState({
        loading: false,
      });
    });
  }

  revertStatusText(status) { // eslint-disable-line class-methods-use-this
    return statusUnmap[status];
  }

  editUser() {
    this.props.history.push(`/admin/edit-user/${this.state.user.userId}/permissions`);
  }

  changePlan() {
    this.props.history.push(`/admin/edit-user/${this.state.user.userId}/change-plan`);
  }

  closeDrawer(event) {
    event.preventDefault();
    this.props.history.push('/admin');
  }

  rowIds() {
    const ids = [];
    this.state.totalUsers.map((user) => {
      return ids.push(user.userId);
    });

    this.setState({ totalUserIds: this.state.totalUserIds.concat(ids) });
  }

  matchingIds() {
    const ids = [];
    this.state.matchingMerchants.map((merchant) => {
      return ids.push(merchant.merchantId);
    });

    const idsFiltered = ids.filter((item, index, self) => {
      return self.indexOf(item) === index;
    });

    this.setState({ totalMatchingIds: idsFiltered });
  }

  nextPage(array, number) {
    for (let i = 0; i < array.length; i += 1) {
      if (array[i] > number) {
        return array[i];
      }
    }
    return false;
  }

  previousPage(array, number) {
    for (let i = array.length; i >= -1; i -= 1) {
      if (array[i] < number) {
        return array[i];
      }
    }
    return false;
  }

  get heroButton() {
    const hasEditPermissions = canEditRole(this.props.parsedPermissions, this.state.user.roleKey);
    if (hasEditPermissions) {
      return (
        <HollowInvertedButton
          type="button"
          iconDirection="left"
          icon={ListIcon}
          action={this.editUser}
        >
          {counterpart('globalTranslate.drawer.editUser')}
        </HollowInvertedButton>
      );
    }
    return null;
  }

  get changePlanButton() {
    const hasEditPermissions = this.props.parsedPermissions.merchants.canViewProductSelection;
    if (hasEditPermissions && (this.state.user.roleKey === 'MERCHANT_ACCOUNT_ADMINISTRATOR' || this.state.user.roleKey === 'MERCHANT_USER')) {
      return (
        <HollowButton
          type="button"
          action={this.changePlan}
          verticalAlign="top"
        >
          {counterpart('globalTranslate.drawer.changePlan')}
        </HollowButton>
      );
    }
    return false;
  }

  get parseLoginDate() {
    return moment(Number(this.state.user.lastLoginDate)).format(`${this.props.preferences.dateFormat} ${this.props.preferences.timeFormat}`);
  }

  get statusPermissions() {
    return canActivateAndDeactivateRole(this.props.parsedPermissions, this.state.user.roleKey);
  }

  get statusBar() {
    let permissionsToShow;

    if (this.state.user.permissions) {
      permissionsToShow = this.state.user.permissions.filter((permission) => {
        return permission.isChecked;
      });
    }

    const translatedStatusList = statusList();

    return (
      <div className="drawer-status">
        <div className="status-left">
          <span className="status-item">{counterpart('globalTranslate.drawer.status')}:</span>
          <StatusBadge
            isDisabled={!this.statusPermissions}
            row={this.state.user}
            dataList={translatedStatusList}
            selectedItem={this.state.user.statusData}
            wrapperClass="status-badge"
          />
        </div>
        <div className="status-right">
          <span className="status-item">{counterpart('globalTranslate.drawer.lastLogin')}: {this.parseLoginDate}</span>
          <PopupMenu
            lock
            icon={<LockIcon />}
            dataAccessProhibited={this.dataAccessPermissions}
            goToLink={this.editUser}
            position="bottom"
            editText={counterpart('globalTranslate.common.edit')}
            popupTitle={counterpart('globalTranslate.drawer.permissions')}
            popupContent={permissionsToShow.length ? permissionsToShow : this.state.user.permissions}
            trailingText={counterpart('globalTranslate.drawer.permissions')}
          />
        </div>
      </div>
    );
  }

  compareBy(a, b) {
    const { key, order } = this.state.sort;

    if (key && order) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    }

    return false;
  }

  get sortedData() {
    const { key, order } = this.state.sort;

    if (key && order) {
      return [...this.state.totalRows].sort((a, b) => {
        return this.compareBy(a, b) * (order === 1 ? 1 : -1);
      });
    }

    return this.props.merchants;
  }

  handleSort(key) {
    const sort = (this.state.sort.key === key)
      // key matches, update order
      ? { key, order: (this.state.sort.order + 1) % 2 }
      // key differs, start with 'asc' order
      : { key, order: 1 };

    this.setState({
      sort,
    }, () => {
      this.setState({
        totalRows: this.sortedData,
        merchants: this.sortedData.slice(0, this.state.perPage),
      }, () => {
        this.globalSelectorGroup(this.state.merchants);
      });
    });
  }

  handlePageClick(data) {
    const selected = data.selected;
    const offset = Math.ceil(selected * this.state.perPage);

    this.setState({
      offset,
      currentPage: selected + 1,
      merchants: this.state.totalRows.slice(offset, offset + this.state.perPage),
      filteredRowsPaged: this.state.filteredRows.slice(offset, offset + this.state.perPage),
    }, () => {
      if (this.state.filteredRowsPaged.length > 0) {
        this.globalSelectorGroup(this.state.filteredRowsPaged);
      } else {
        this.globalSelectorGroup(this.state.merchants);
      }
    });
  }

  filterRows(searchString) {
    const lowercaseSearchString = searchString || '';
    const objKeys = this.state.columnsToSearch;
    const objKeyLength = objKeys.length;

    this.setState((prevState) => {
      const newRows = {
        filteredRows: prevState.totalRows.filter((row) => {
          for (let i = 0; i < objKeyLength; i += 1) {
            const key = objKeys[i];
            if (row[key] &&
              row[key].toLowerCase &&
              row[key].toLowerCase().indexOf(lowercaseSearchString) > -1) {
              return row[key];
            }
          }
          return false;
        }),
      };
      return newRows;
    });

    this.setState({
      filteredPageCount: Math.ceil(this.state.filteredRows.length / this.state.perPage),
      filteredRowsPaged: this.state.filteredRows.slice(0, this.state.perPage),
    }, () => {
      this.globalSelectorGroup(this.state.filteredRowsPaged);
    });
  }

  searchComplexDataAccessRows(filterText) {
    const filteredDataAccessRows = this.state.dataAccessRows.filter((row) => {
      const stringsToCheck = Object.values(row).map((field) => { return field.label; });

      const matchingElement = stringsToCheck.find((label) => {
        return label.toString().toLowerCase().indexOf(filterText) > -1;
      });

      return matchingElement;
    });

    this.setState({
      filterText,
      currentlyVisibleDataAccessRows: filteredDataAccessRows,
    });
  }

  addDataAccessRow() {
    this.props.history.push(`/admin/edit-user/${this.state.user.userId}/data-access/new`);
  }

  editDataAccessRow(row) {
    console.log('Editing a data access row is coming shortly.'); // eslint-disable-line
    const objectToRemove = Object.keys(row)
      .reduce((foundObject, key) => {
        if (row[key].endOfChain) {
          return { fieldName: key, endOfChainId: row[key].id };
        } else {
          return foundObject;
        }
      }, {});

    const rowIndexToEdit = this.state.dataAccessRows.findIndex((item) => {
      const keyToCheck = objectToRemove.fieldName;
      const valueToCheck = objectToRemove.endOfChainId;
      if (item[keyToCheck].id === valueToCheck) {
        return true;
      } else {
        return false;
      }
    });

    this.props.history.push(`/admin/edit-user/${this.state.user.userId}/data-access/${rowIndexToEdit}`);
  }

  deleteDataAccessRow(row) {
    const objectToRemove = Object.keys(row)
      .reduce((foundObject, key) => {
        if (row[key].endOfChain) {
          return { fieldName: key, endOfChainId: row[key].id };
        } else {
          return foundObject;
        }
      }, {});

    const remainingOrganizationRows = this.state.dataAccessRows.filter((item) => {
      const keyToCheck = objectToRemove.fieldName;
      const valueToCheck = objectToRemove.endOfChainId;
      if (item[keyToCheck].id === valueToCheck) {
        return false;
      } else {
        return true;
      }
    });

    this.setState({
      currentlyVisibleDataAccessRows: remainingOrganizationRows,
    });

    const newOrganizationIds = remainingOrganizationRows.map((org) => {
      const orgIdToSave = Object.values(org).reduce((foundId, field) => {
        if (field.endOfChain) {
          return field.id;
        } else {
          return foundId;
        }
      }, 0);

      return orgIdToSave;
    });

    this.saveComplexDataAccess(newOrganizationIds);
  }

  get dataAccessPermissions() {
    return canEditDataAccess(this.props.parsedPermissions, this.state.user.roleKey);
  }

  globalSelectorGroup(merchants) {
    const trueHierarchy = createSelectorBar(merchants);

    this.setState({
      globalSelectorRows: trueHierarchy,
    });
  }

  get paginator() {
    if (this.pagination) {
      const pageCount = this.state.filterText !== '' ? this.state.filteredPageCount : this.state.pageCount;
      return (
        <Pagination
          handlePageClick={this.handlePageClick}
          pageCount={pageCount}
          currentPage={this.state.currentPage}
        />
      );
    }
    return false;
  }

  render() {
    const merchantContent = this.state.filteredRows.length &&
      this.state.filterText !== '' ?
      this.state.filteredRowsPaged :
      this.state.merchants;

    const totalMerchantContent = this.state.filteredRows.length &&
      this.state.filterText !== '' ?
      this.state.filteredRows :
      this.state.totalRows;

    if (this.state.loading) {
      return <BallSyncLoader />;
    } else {
      return (
        <section className="drawer-content">
          <div className="drawer-heading">
            <Button
              type="button"
              iconDirection="left"
              icon={LeftPointerIcon}
              action={this.closeDrawer}
            >
              {counterpart('globalTranslate.drawer.returnToAdmin')}
            </Button>
            {this.changePlanButton}
          </div>
          <div className="drawer-hero">
            <div className="drawerTitles">
              <h1 className="drawer-title">{this.state.user.name || ''}</h1>
              <h4 className="drawer-subtitle">{counterpart(`globalTranslate.roles.${this.state.user.roleName.replace(/_/g, ' ')}`)} / {this.state.user.email}</h4>
            </div>
            {this.heroButton}
          </div>
          <div>{this.statusBar}</div>
          {this.state.dataAccessType === 'simple' &&
            <ExtendedDrawer
              filterText={this.state.filterText}
              filterRows={this.filterRows}
              onChange={this.onChange}
              columnsToSearch={this.state.columnsToSearch}
              content={getMerchantsForTable(merchantContent)}
              totalContent={totalMerchantContent}
              globalSelectorRows={this.state.globalSelectorRows}
              viewedUserContent={this.state.user.merchants}
              onLeftToggle={this.onLeftToggle}
              onRightToggle={this.onRightToggle}
              handleSort={this.handleSort}
              checkCount={this.state.matchingMerchants}
              toggleAccess={this.toggleAccess}
              clearAccess={this.clearAccess}
              selectAllAccess={this.selectAllAccess}
              saveAccess={this.saveAccess}
              dataAccessProhibited={!this.dataAccessPermissions}
              checkboxTouched={this.state.checkboxTouched}
              loading={!this.state.user.merchants || this.state.loading}
              paginator={this.paginator}
              pageCount={this.state.pageCount}
              currentPage={this.state.currentPage}
            />
          }
          {this.state.dataAccessType === 'complex' && this.state.user.dataAccess &&
            <div className="drawer-data table-data-access">
              <SearchBar
                headline={counterpart('globalTranslate.admin.locations')}
                filterText={this.state.filterText}
                onChange={this.searchComplexDataAccessRows}
                placeholder={`${counterpart('globalTranslate.forms.search')} ${counterpart('globalTranslate.admin.locations')}`}
                action={this.dataAccessPermissions ? this.addDataAccessRow : null}
                buttonText={this.dataAccessPermissions ? counterpart('globalTranslate.drawer.addDataAccess') : null}
                buttonCategory="primary"
              />
              <TableDataAccess
                dataAccessChains={this.state.currentlyVisibleDataAccessRows || []}
                editButtonHandler={this.editDataAccessRow}
                deleteButtonHandler={this.deleteDataAccessRow}
                loading={this.state.userUpdating}
                dataAccessProhibited={!this.dataAccessPermissions}
              />
            </div>
          }
        </section>
      );
    }
  }
}

ManageUserDrawer.propTypes = {
  getMerchants: PropTypes.func.isRequired,
  getViewedUserMerchants: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
    history: PropTypes.object,
    location: PropTypes.object,
    staticContext: PropTypes.object,
    goBack: PropTypes.func,
  }).isRequired,
  merchants: PropTypes.array,
  parentFilteredRows: PropTypes.array,
  parsedPermissions: PropTypes.object.isRequired,
  preferences: PropTypes.object.isRequired,
  saveUser: PropTypes.func.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  useExtendedDrawer: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
  users: PropTypes.array,
};

ManageUserDrawer.defaultProps = {
  merchants: [],
  parentFilteredRows: [],
  users: [],
  userUpdating: false,
};

function mapStateToProps(state, ownProps) {
  return {
    userId: ownProps.match.params.userId,
    users: getUsersForTable(state.users.data),
    merchants: getMerchantsForTable(state.merchants.data),
    userUpdating: (state.users.isFetching),
    parsedPermissions: state.auth.session.user.parsedPermissions,
    preferences: selectCurrentPreferences(state.preferences),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMerchants: () => dispatch(merchantActions.getAllMerchants()),
    getViewedUserMerchants: (user) => dispatch(userActions.fetchUserMerchantsById(user)),
    saveUser: (user) => dispatch(userActions.updateUser(user)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ManageUserDrawer));
/* eslint-enable no-param-reassign, class-methods-use-this */
