// Libs / Helpers
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import counterpart from 'counterpart';

// Components
import SearchBar from 'Components/search-bar/SearchBar.js';
import Table from 'Components/table/Table.js';

import { formatUsersForTable } from 'Utils/formatUserList.js';
import Listener from 'Utils/listener';
import { initCommonTranslate } from 'Utils/languages';

// Data
import columns from './data/columns.js';

// Status Badge Data
import statusList from './data/statusList';
import statusUnmap from './data/statusUnmap';

// User List Data
import filterDefault from './data/primary/filterDefault';
import usersFilter from './data/secondary/usersFilter';

import './ViewUserList.scss';

class ViewUserList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      columns,
      filteredUsers: [],
      filterText: '',
      perPage: 25,
      errors: '',

      selectedIsDisabled: false,
      secondaryIsDisabled: true,
    };

    initCommonTranslate();

    this.attachBindings();
  }

  componentWillReceiveProps() {
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
    });
  }

  onChange(filterText) {
    this.setState({ filterText });
  }

  onRow() { // eslint-disable-line class-methods-use-this
    return {
      className: 'row',
      onClick: (event) => { event.target.classList.contains('is-badge') ? event.stopPropagation() : event.preventDefault(); },
    };
  }

  attachBindings() {
    this.selectFilter = this.selectFilter.bind(this);
    this.selectSecondaryFilter = this.selectSecondaryFilter.bind(this);
    this.onChange = this.onChange.bind(this);
    this.removeUnpermissionedUsers = this.removeUnpermissionedUsers.bind(this);
  }

  revertStatusText(status) { // eslint-disable-line class-methods-use-this
    return statusUnmap[status];
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
        selectedSecondaryFilter: filterDefault[3],
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

    if (newSelection) {
      this.setState({
        selectedSecondaryFilter: newSelection,
      }, () => {
        this.mapUsers(newSelection);
      });
    }
  }

  mapUsers(filterParam) {
    const filtered = [];

    this.props.users.forEach((user) => {
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

  removeUnpermissionedUsers(users) {
    const newUsers = users.filter((user) => {
      if (this.props.parsedPermissions.users.canView &&
          this.props.parsedPermissions.users.rolesViewable.includes(user.roleKey)
      ) {
        return user;
      }
      return false;
    });

    return newUsers;
  }

  render() {
    const setupUsers = this.state.filteredUsers.length || this.emptyResults ? this.state.filteredUsers : this.props.users;
    const users = this.removeUnpermissionedUsers(setupUsers);

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
        />
        <span>&nbsp;</span>
        <Table
          activateUserRolesAllowed={this.props.parsedPermissions.users.rolesActivatable}
          columnsToSearch={['name', 'email', 'status', 'roleName']}
          translationKey="userColumns"
          filterText={this.state.filterText}
          perPage={this.state.perPage}
          rows={formatUsersForTable(users)}
          columns={this.state.columns}
          error={this.state.errors}
          onRow={this.onRow}
          rowKey="userId"
          statusList={this.state.statusList}
        />
      </article>
    );
  }
}

ViewUserList.propTypes = {
  parsedPermissions: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    parsedPermissions: state.auth.session.user.parsedPermissions,
  };
}

export default connect(mapStateToProps)(ViewUserList);
