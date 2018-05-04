// Libs / Helpers
import counterpart from 'counterpart';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import uniqBy from 'lodash/uniqBy';

// Components
import SearchBar from 'Components/search-bar/SearchBar.js';
import Table from 'Components/table/Table.js';
import Plus from 'Components/icons/PlusIcon';

import {
  checkForMerchantUser,
  getUsersForTable,
} from 'Selectors/userSelectors';

// Utils
import { initCommonTranslate } from 'Utils/languages';
import Listener from 'Utils/listener';

// Data
import columns from './data/columns.js';
import columnsLite from './data/columnsLite.js';

// Status Badge Data
import statusList from './data/statusList';
import statusUnmap from './data/statusUnmap';

// User List Data
import filterDefault from './data/primary/filterDefault';
import filterChoiceList from './data/primary/filterChoiceList';

import usersFilter from './data/secondary/usersFilter';

// Services
import * as userActions from '../../actions/userActions';
import { combineUserProperties } from '../../api/apiHelpers';

import './ViewUsers.scss';

export class ViewUsers extends Component {

  constructor(props) {
    super(props);

    this.state = {
      columns: this.props.isMerchantUser ? columnsLite : columns,
      filteredUsers: [],
      filterText: '',
      perPage: 25,
      errors: '',

      selectedIsDisabled: false,
      secondaryIsDisabled: true,
    };

    this.attachBindings();
    this.attachListeners();
  }

  componentDidMount() {
    this.props.getAllUsers();
  }

  componentWillReceiveProps(newProps) {
    const FILTER_BY_ALL = 3;
    const filterList = filterDefault();
    const usersList = usersFilter();
    const statusInputs = statusList();

    this.setState({
      filterList,
      selectedFilter: filterList[FILTER_BY_ALL],
      selectedSecondaryFilter: filterDefault[FILTER_BY_ALL],
      filterListAlt: filterDefault(),
      usersFilter: usersList,
      statusList: statusInputs,
    }, () => {
      this.setupUserFilter(newProps.users);
    });
  }

  onChange(filterText) {
    this.setState({ filterText });
  }

  onRow(row) {
    return {
      className: 'row',
      onClick: (event) => { event.target.classList.contains('is-badge') ? event.stopPropagation() : Listener.trigger('TOGGLE_USER_VIEW', row); },
    };
  }

  setupUserFilter(users) {
    const newUsersFilter = Object.assign([], this.state.usersFilter);

    users.map((user) => {
      newUsersFilter[1].data.push({
        value: user.roleKey.toLowerCase().replace(/_/g, '-'),
        text: user.roleName,
      });
      return false;
    });
    newUsersFilter[1].data = uniqBy(newUsersFilter[1].data, 'value');
    this.setState({ usersFilter: newUsersFilter });
  }

  attachBindings() {
    this.selectFilter = this.selectFilter.bind(this);
    this.selectSecondaryFilter = this.selectSecondaryFilter.bind(this);
    this.onChange = this.onChange.bind(this);
    this.addUser = this.addUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.toggleUserDrawer = this.toggleUserDrawer.bind(this);
    this.removeAuthUser = this.removeAuthUser.bind(this);
    this.onRow = this.onRow.bind(this);
    this.filterByWhat = this.filterByWhat.bind(this);
    this.setupUserFilter = this.setupUserFilter.bind(this);
  }

  attachListeners() {
    Listener.on('NEW_USER_STATUS', this.updateUser);
    Listener.on('TOGGLE_USER_VIEW', this.toggleUserDrawer);
  }

  addUser() {
    this.props.history.push('/admin/create-user');
  }

  toggleUserDrawer(row) {
    this.props.history.push(`/admin/edit-user/${row.userId}`);
  }

  revertStatusText(status) {
    return statusUnmap[status];
  }

  updateUser(selection) {
    const currentUserData = Object.assign({}, selection[1]);
    currentUserData.status = this.revertStatusText(selection[0].value);
    currentUserData.statusKey = this.revertStatusText(selection[0].value);

    const userToSave = combineUserProperties(
      currentUserData,
      currentUserData.role,
      [],
      currentUserData.organizations);

    this.props.saveUser(userToSave);
  }

  filterByWhat(selection) {
    const list = filterChoiceList();
    switch (selection) {
      case 'role':
        return list[1];
      case 'acquirer':
        return list[2];
      default:
        return list[0];
    }
  }

  // @TODO Abstract this out, so the basic function can take arguments of value, filterable list, and state
  selectFilter(value, event) { // first filtered
    event.stopPropagation();
    const newSelection = this.state.filterList.find((item) => {
      return item.value === value;
    });

    if (newSelection) {
      const newList = this.fetchSecondaryFilterList(newSelection);
      this.emptyResults = false;
      this.setState({
        filteredUsers: [],
        filterListAlt: newList,
        selectedFilter: newSelection,
        secondaryIsDisabled: newSelection.value === 'all' || false,
        selectedSecondaryFilter: this.filterByWhat(newSelection.value),
      });
    }
  }

  fetchSecondaryFilterList(selection) {
    const filteredValue = selection.value;

    const filterLists = {
      status: this.state.usersFilter[0].data,
      role: this.state.usersFilter[1].data,
      acquirer: this.state.usersFilter[2].data,
      all: filterDefault,
    };
    return filterLists[filteredValue];
  }

  selectSecondaryFilter(value, event) { // 2nd filtered
    event.stopPropagation();
    const newSelection = this.state.filterListAlt.find((item) => {
      return item.value === value;
    });

    if (newSelection.value === 'clear') {
      const FILTER_BY_ALL = 3;
      const filterList = filterDefault();

      this.emptyResults = false;

      this.setState({
        secondaryIsDisabled: true,
        filteredUsers: [],
        selectedFilter: filterList[FILTER_BY_ALL],
      });
    } else {
      this.setState({
        selectedSecondaryFilter: newSelection,
      }, () => {
        this.mapUsers(newSelection);
      });
    }
  }

  mapUsers(filterParam) {
    const filtered = [];
    const users = this.removeAuthUser(this.props.users);

    users.forEach((user) => {
      Object.keys(user).forEach((key) => {
        if (user[key] && user[key].toLowerCase && filterParam.text.toLowerCase() === user[key].toLowerCase()) {
          filtered.push(user);
        }
      });
    });

    if (filtered.length === 0) {
      this.emptyResults = true;
    }

    this.setState({ filteredUsers: filtered });
    Listener.trigger('FILTERED_ROWS', filtered);
  }

  removeAuthUser(users) {
    const newUsers = users.filter((user) => {
      return user.userId !== this.props.auth.session.user.userId;
    });

    return newUsers;
  }

  render() {
    const users = this.state.filteredUsers.length || this.emptyResults ? this.state.filteredUsers : this.removeAuthUser(this.props.users);

    initCommonTranslate();

    return (
      <article>
        <SearchBar
          headline={counterpart('globalTranslate.admin.users')}
          onChange={this.onChange}
          placeholder={`${counterpart('globalTranslate.forms.search')} ${counterpart('globalTranslate.admin.users')}`}

          dataList={this.state.filterList}
          handleFilter={this.selectFilter}
          selectedFilter={this.state.selectedFilter}
          selectedIsDisabled={this.state.selectedIsDisabled}

          secondaryDataList={this.state.filterListAlt}
          handleSecondaryFilter={this.selectSecondaryFilter}
          secondaryIsDisabled={this.state.secondaryIsDisabled}
          selectedSecondaryFilter={this.state.selectedSecondaryFilter}

          filterText={this.state.filterText}
          iconDirection="left"
          icon={Plus}
          buttonCategory="primary"
          action={this.props.parsedPermissions.users.canCreate ? this.addUser : null}
          buttonText={this.props.parsedPermissions.users.canCreate ? counterpart('globalTranslate.drawer.addNewUser') : null}
        />
        {/* ^^ buttonText is the prop that drives visibility of the button. Hidden if user does not have permissions to add any users. conditional runs on button action as well, because this is a required prop. */}
        <span>&nbsp;</span>
        <Table
          activateUserRolesAllowed={this.props.parsedPermissions.users.rolesActivatable}
          columnsToSearch={['name', 'email', 'status', 'roleName', 'acquirer']}
          translationKey="userColumns"
          filterText={this.state.filterText}
          perPage={this.state.perPage}
          rows={users}
          columns={this.state.columns}
          error={this.state.errors}
          onRow={this.onRow}
          rowKey="userId"
          statusList={this.state.statusList}
          className="user-columns"
        />
      </article>
    );
  }
}

ViewUsers.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
    history: PropTypes.object,
    location: PropTypes.object,
    match: PropTypes.object,
    staticContext: PropTypes.object,
  }),
  getAllUsers: PropTypes.func.isRequired,
  isMerchantUser: PropTypes.bool.isRequired,
  saveUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  parsedPermissions: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
};

ViewUsers.defaultProps = {
  history: {},
};

function mapStateToProps(state) {
  return {
    auth: state.auth,
    isMerchantUser: checkForMerchantUser(state.auth.session.user.role),
    parsedPermissions: state.auth.session.user.parsedPermissions,
    users: getUsersForTable(state.users.data),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAllUsers: () => dispatch(userActions.getAllUsers()),
    saveUser: (user) => dispatch(userActions.updateUser(user)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ViewUsers));
