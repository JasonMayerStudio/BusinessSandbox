// Libs / Helpers
import counterpart from 'counterpart';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components
import SearchBar from 'Components/search-bar/SearchBar.js';
import Pagination from 'Components/pagination/Pagination.js';
import TableComplexMerchants from 'Components/table-complex-merchant/Table-ComplexMerchant.js';
import Table from 'Components/table/Table.js';
import Plus from 'Components/icons/PlusIcon';

import { createSelectorBar } from 'Utils/selectorBarUtil';
import { initCommonTranslate } from 'Utils/languages';

// Services
import { getMerchantsForTable } from 'Selectors/merchantSelectors';
import Listener from 'Utils/listener';
import { getMerchantsFuzzySearch } from '../../api/merchantApi';
import * as merchantActions from '../../actions/merchantActions';

// Data
import columns from './data/columns.js';

import './ViewMerchants.scss';

export class ViewMerchants extends Component {
  constructor(props) {
    super(props);

    initCommonTranslate();

    this.state = {
      columns,
      totalRows: [],
      globalSelectorGroup: [],
      perPage: 5,
      errors: '',
      filterText: '',
      currentPage: 1,
      filteredRows: [],
      filteredRowsPaged: [],
      filteredPageCount: 0,
      sort: {
        key: undefined,
        order: 0,
      },
    };

    this.attachBindings();
    this.attachListeners();
  }

  componentDidMount() {
    this.props.actions.getAllMerchants();
  }

  componentWillReceiveProps(newProps) {
    const pagination = this.state.offset ? newProps.merchants.slice(this.state.offset, this.state.offset + this.state.perPage) : newProps.merchants.slice(0, this.state.perPage);

    this.setState({
      totalRows: newProps.merchants,
      pageCount: newProps.merchants ? Math.ceil(newProps.merchants.length / this.state.perPage) : null,
      merchants: pagination,
    }, () => {
      if (this.props.globalSelector.orgIds.length > 0) {
        this.globalSelectorGroup(this.state.merchants);
      }
    });

    this.pagination = this.setupPaginator(newProps);
  }

  onChange(filterText) {
    this.setState({ filterText });

    if (filterText.length < 1) {
      this.setState({
        filteredRowsPaged: [],
      }, () => {
        this.globalSelectorGroup(this.state.merchants);
      });
    }
  }

  /* reactabular drawer trigger */
  onRow(row) {
    return {
      className: 'row',
      onClick: (event) => {
        event.target.classList.contains('is-badge')
        ? event.stopPropagation()
        : Listener.trigger('TOGGLE_MERCHANT_VIEW', row);
      },
    };
  }

  /* setup pagination if amount of merchants is greater than per page value */
  setupPaginator(newProps) {
    if (this.state.filteredRows.length) {
      return this.state.filteredRows.length > this.state.perPage;
    }

    return newProps.merchants ? newProps.merchants.length > this.state.perPage : null;
  }

  attachBindings() {
    this.onChange = this.onChange.bind(this);
    this.compareBy = this.compareBy.bind(this);
    this.filterRows = this.filterRows.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.registerMerchant = this.registerMerchant.bind(this);
    this.complexOnRow = this.complexOnRow.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
    this.globalSelectorGroup = this.globalSelectorGroup.bind(this);
    this.toggleMerchantDrawer = this.toggleMerchantDrawer.bind(this);
  }

  attachListeners() {
    Listener.on('TOGGLE_MERCHANT_VIEW', this.toggleMerchantDrawer);
  }

  /* complex drawer trigger */
  complexOnRow(row) {
    return {
      onClick: Listener.trigger('TOGGLE_MERCHANT_VIEW', row),
    };
  }

  toggleMerchantDrawer(row) {
    this.props.history.push(`/locations/management/edit-merchant/${row.merchantId}`);
  }

  registerMerchant() {
    this.props.history.push('/admin/create-merchant');
  }

  /* Handle pagination for complex merchant table */
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

  /* Get pagination for complex merchant table; reactabular table lives in Table.js */
  get paginator() {
    if (this.pagination && this.props.globalSelector.orgIds.length > 0) {
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

  /* Search complex merchant table */
  filterRows(searchString, columnsToSearch) {
    const lowercaseSearchString = searchString || '';
    const objKeyLength = columnsToSearch.length;

    this.setState((prevState) => {
      const newRows = {
        filteredRows: prevState.totalRows.filter((row) => {
          for (let i = 0; i < objKeyLength; i += 1) {
            const key = columnsToSearch[i];
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
    }, () => {
      /* Nested setState is no bueno, but it's the only way to directly capture the newly set filteredRows value in this function in a live search */
      this.setState({
        filteredPageCount: Math.ceil(this.state.filteredRows.length / this.state.perPage),
        filteredRowsPaged: this.state.filteredRows.slice(0, this.state.perPage),
      }, () => {
        this.globalSelectorGroup(this.state.filteredRowsPaged);
      });
    });
  }

  /* Parse through merchants to create global selector hierarchy */
  globalSelectorGroup(merchants) {
    const trueHierarchy = createSelectorBar(merchants);

    this.setState({
      globalSelectorGroup: trueHierarchy,
    });
  }

  /* Helper function for sorting */
  compareBy(a, b) {
    const { key, order } = this.state.sort;

    if (key && order) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    }

    return false;
  }

  /* sort all data */
  get sortedData() {
    const { key, order } = this.state.sort;

    if (key && order) {
      return [...this.state.totalRows].sort((a, b) => {
        return this.compareBy(a, b) * (order === 1 ? 1 : -1);
      });
    }

    return this.props.merchants;
  }

  /* set sorting state */
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
      }, () => {
        this.globalSelectorGroup(this.state.merchants);
      });
    });
  }

  render() {
    const searchableColumns = ['merchantNumber', 'businessName', 'fullAddress', 'acquirer'];
    const searchableColumnsComplex = ['associate', 'chain', 'merchantNumber', 'acquirer'];
    const hasRegisterPermissions = this.props.parsedPermissions.merchants.canRegister;

    return (
      <article id="merchant-table-wrapper">
        <SearchBar
          filterText={this.state.filterText}
          headline={counterpart('globalTranslate.admin.locations')}
          onChange={this.onChange}
          placeholder={`${counterpart('globalTranslate.forms.search')} ${counterpart('globalTranslate.admin.locations')}`}
          iconDirection="left"
          icon={Plus}
          buttonCategory="primary"
          action={hasRegisterPermissions ? this.registerMerchant : null}
          buttonText={hasRegisterPermissions ? counterpart('globalTranslate.drawer.registerNewMID') : null}
        />
        <span>&nbsp;</span>
        {this.props.globalSelector.orgIds.length > 0 ? (
          <TableComplexMerchants
            handleSort={this.handleSort}
            content={this.state.totalRows}
            columnsToSearch={searchableColumnsComplex}
            globalSelectorGroup={this.state.globalSelectorGroup}
            paginator={this.paginator}
            filterText={this.state.filterText}
            filterRows={this.filterRows}
            complexOnRow={this.complexOnRow}
            className="merchant-columns"
            currentPage={this.state.currentPage}
            pageCount={this.state.pageCount}
          />
        ) : (
          <Table
            filterText={this.state.filterText}
            translationKey="merchantColumns"
            columnsToSearch={searchableColumns}
            perPage={this.state.perPage}
            rows={this.state.totalRows}
            columns={this.state.columns}
            error={this.state.errors}
            rowKey="merchantId"
            onRow={this.onRow}
            fuzzySearch={getMerchantsFuzzySearch}
            className="merchant-columns"
          />
        )}
      </article>
    );
  }
}

ViewMerchants.propTypes = {
  actions: PropTypes.object.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
    history: PropTypes.object,
    location: PropTypes.object,
    match: PropTypes.object,
    staticContext: PropTypes.object,
  }),
  merchants: PropTypes.array.isRequired,
  globalSelector: PropTypes.object.isRequired,
  parsedPermissions: PropTypes.object.isRequired,
};

ViewMerchants.defaultProps = {
  history: {},
};

function mapStateToProps(state) {
  return {
    merchants: getMerchantsForTable(state.merchants.data),
    globalSelector: state.globalFilter,
    parsedPermissions: state.auth.session.user.parsedPermissions,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(merchantActions, dispatch),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ViewMerchants));
