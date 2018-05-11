/* eslint-disable no-param-reassign, class-methods-use-this */
import counterpart from 'counterpart';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import uniq from 'lodash/uniq';

import {
  getMerchantsForTable,
  getMerchantById,
} from 'Selectors/merchantSelectors';

import HollowInvertedButton from 'Components/Button/HollowInvertedButton';

import dateFormatter from 'Utils/dateFormatter';
import { initCommonTranslate } from 'Utils/languages';

import ExtendedMerchantDrawer from '../ExtendedMerchantDrawer';

// Services
import { apiGetAllUsersForMerchant } from '../../api/merchantApi';
import statusUnmap from '../ViewUsers/data/statusUnmap';

export class ManageMerchantDrawer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1,
      filterText: '',
      merchants: [],
      userList: [],
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
      currentUserId: this.props.user.userId,
      columnsToSearch: ['hasAccess', 'merchant_id', 'fullAddress', 'dbaName'],
      checkboxTouched: false,
    };

    this.attachBindings();
  }

  componentWillMount() {
    this.useExtendedDrawer();
  }

  componentDidMount() {
    this.toggleDrawer();

    apiGetAllUsersForMerchant(this.props.merchant).then((response) => {
      this.setState({
        userList: response,
      });
    });
  }

  componentWillReceiveProps() {}

  componentWillUnmount() {
    this.useExtendedDrawer();
    this.toggleDrawer();
  }

  onChange(filterText) {
    this.setState({ filterText });
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

  attachBindings() {
    this.clearAccess = this.clearAccess.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.compareBy = this.compareBy.bind(this);
    this.editLocation = this.editLocation.bind(this);
    this.filterRows = this.filterRows.bind(this);
    this.getSelectedMerchants = this.getSelectedMerchants.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
    this.matchingIds = this.matchingIds.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.onChange = this.onChange.bind(this);
    this.orgIds = this.orgIds.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.removeMatch = this.removeMatch.bind(this);
    this.rowIds = this.rowIds.bind(this);
    this.revertStatusText = this.revertStatusText.bind(this);
    this.setupPaginator = this.setupPaginator.bind(this);
    this.toggleAccess = this.toggleAccess.bind(this);
    this.toggleDrawer = this.props.toggleDrawer.bind(this);
    this.useExtendedDrawer = this.props.useExtendedDrawer.bind(this);
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
    });
  }

  revertStatusText(status) { // eslint-disable-line class-methods-use-this
    return statusUnmap[status];
  }

  editLocation() {
    this.props.history.push(`/locations/management/edit-merchant/${this.props.merchant.merchantId}/update`);
  }

  closeDrawer(event) {
    event.preventDefault();
    this.props.history.goBack();
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
    const hasEditPermissions = this.props.parsedPermissions.merchants.canEdit;
    if (hasEditPermissions) {
      return (
        <HollowInvertedButton
          type="button"
          action={this.editLocation}
          verticalAlign="top"
        >
          {counterpart('globalTranslate.drawer.editLocation')}
        </HollowInvertedButton>
      );
    }
    return false;
  }

  get parseLoginDate() {
    const lastLoginDate = new Date(Number(this.props.user.lastLoginDate));
    return dateFormatter(lastLoginDate);
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
      ? { key, order: (this.state.sort.order + 1) % 3 }
      // key differs, start with 'asc' order
      : { key, order: 1 };

    this.setState({
      sort,
    }, () => {
      this.setState({
        totalRows: this.sortedData,
        merchants: this.sortedData.slice(0, this.state.perPage),
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
    });
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

    initCommonTranslate();

    return (
      <ExtendedMerchantDrawer
        closeDrawer={this.closeDrawer}
        backPromptText={counterpart('globalTranslate.drawer.returnToAdmin')}
        drawerTitle={this.props.merchant.businessName || ''}
        drawerSubtitle={`${this.props.merchant.attention}`}
        filterText={this.state.filterText}
        filterRows={this.filterRows}
        heroButton={this.heroButton}
        onChange={this.onChange}
        columnsToSearch={this.state.columnsToSearch}
        content={merchantContent}
        totalContent={totalMerchantContent}
        viewedUserContent={this.props.user.merchants}
        handleSort={this.handleSort}
        checkCount={this.state.matchingMerchants}
        toggleAccess={this.toggleAccess}
        clearAccess={this.clearAccess}
        checkboxTouched={this.state.checkboxTouched}
        loading={!this.props.user.merchants || this.state.loading}
        searchBarHeadline="Users"
        searchBarPlaceholder="Search Users"
        currentMerchant={this.props.merchant}
        userList={this.state.userList}
      />
    );
  }
}

ManageMerchantDrawer.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
    history: PropTypes.object,
    location: PropTypes.object,
    staticContext: PropTypes.object,
    goBack: PropTypes.func,
  }),
  merchant: PropTypes.shape({
    email: PropTypes.string,
    businessName: PropTypes.string,
    attention: PropTypes.string,
    merchantId: PropTypes.number,
    merchantNumber: PropTypes.string,
    id: PropTypes.number,
  }),
  merchants: PropTypes.array,
  parentFilteredRows: PropTypes.array,
  parsedPermissions: PropTypes.object.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  useExtendedDrawer: PropTypes.func.isRequired,
  user: PropTypes.shape({
    email: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.object,
    roleName: PropTypes.string,
    statusData: PropTypes.object,
    status: PropTypes.string,
    userId: PropTypes.number,
    acquirer: PropTypes.string,
    merchants: PropTypes.array,
    lastLoginDate: PropTypes.string,
  }).isRequired,
  users: PropTypes.array,
};

ManageMerchantDrawer.defaultProps = {
  history: {},
  user: {},
  users: [],
  merchant: {},
  merchants: [],
  parentFilteredRows: [],
};

function mapStateToProps(state, ownProps) {
  return {
    merchant: getMerchantById(getMerchantsForTable(state.merchants.data), ownProps.match.params.merchantId),
    merchants: getMerchantsForTable(state.merchants.data),
    parsedPermissions: state.auth.session.user.parsedPermissions,
  };
}

export default withRouter(connect(mapStateToProps)(ManageMerchantDrawer));
/* eslint-enable no-param-reassign, class-methods-use-this */
