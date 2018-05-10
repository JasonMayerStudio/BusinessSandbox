/* eslint-disable no-param-reassign, global-require, array-callback-return */

// Libs / Helpers
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as ReactabularTable from 'reactabular-table';
import * as sort from 'sortabular';
import * as resolve from 'table-resolver';
import orderBy from 'lodash/orderBy';
import { compose } from 'redux';
import Listener from 'Utils/listener';
import counterpart from 'counterpart';

// Components
import StatusBadge from 'Components/status-badge/StatusBadge.js';
import Pagination from 'Components/pagination/Pagination.js';

// Style
import './Table.scss';

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      columns: props.columns,
      rows: props.rows ? props.rows : [],
      totalRows: [],
      filteredRows: [],
      pageCount: 0,
      currentPage: 1,
      offset: 0,
      sortingColumns: null,
    };

    // classnames
    this.wrapperClass = 'pure-table';
    this.headerClass = 'pure-table__header';
    this.bodyClass = 'pure-table__body';

    this.pagination = false;

    // @TODO Error handling story
    if (this.props.error) {
      this.wrapperClass += ' has-error';
    }

    this.attachBindings();
    this.getSortingColumns = () => this.state.sortingColumns || {};
    this.setupSorter();
  }

  componentWillReceiveProps(newProps) {
    // accounts for delay in component receiving props from container component
    this.setState({
      rows: newProps.rows.slice(0, this.props.perPage),
      totalRows: newProps.rows,
      pageCount: Math.ceil(newProps.rows.length / this.props.perPage),
    });
    this.pagination = newProps.rows.length > this.props.perPage;

    this.sortConfig();
    this.headerConfig(this.props.translationKey);
    this.filterRows(newProps.filterText);
  }

  // Start sorting
  setupSorter() {
    const getSortingColumns = this.getSortingColumns;
    const sortingOrder = {
      FIRST: 'asc',
      asc: 'desc',
      desc: 'asc',
    };

    this.sortable = sort.sort({
      getSortingColumns,
      onSort: (selectedColumn) => {
        this.setState({
          sortingColumns: sort.byColumn({
            sortingColumns: this.state.sortingColumns,
            selectedColumn,
            sortingOrder,
          }),
        });
      },
      strategy: sort.strategies.byProperty,
    });
  }

  hasActivationPermissions(rowData) {
    return this.props.activateUserRolesAllowed.includes(rowData.roleKey);
  }

  sortConfig() {
    const { columns } = this.state;
    const sortable = this.sortable;
    const getSortingColumns = this.getSortingColumns;
    const sortingColumns = {};

    columns.forEach((column) => {
      if (column.property === 'status') {
        column.cell.formatters = [
          (status, data) => (
            <StatusBadge
              isDisabled={!this.hasActivationPermissions(data.rowData)}
              row={data.rowData}
              dataList={this.props.statusList}
              selectedItem={data.rowData.statusData}
              wrapperClass="status-badge"
            />
          ),
        ];
      }

      column.header.transforms = [this.sortable];
      column.header.formatters = [
        (sort.header({
          sortable,
          getSortingColumns,
          strategy: sort.strategies.byProperty,
        })),
      ];
    });

    this.setState({ columns, sortingColumns });
  }
  // End sorting

  headerConfig(translationKey) {
    const { columns } = this.state;
    const columnsToSearch = this.props.columnsToSearch;

    columnsToSearch.forEach((headerLabel) => {
      columns.forEach((column) => {
        if (column.property === headerLabel) {
          column.header.label = counterpart(`${translationKey}.${headerLabel}`);
        }
      });
    });
  }

  attachBindings() {
    this.handlePageClick = this.handlePageClick.bind(this);
    this.filterRows = this.filterRows.bind(this);
    this.hasActivationPermissions = this.hasActivationPermissions.bind(this);
  }

  // Start Pagination
  handlePageClick(data) {
    const selected = data.selected;
    const offset = Math.ceil(selected * this.props.perPage);

    this.setState({
      offset,
      currentPage: selected + 1,
      rows: this.state.totalRows.slice(offset, offset + this.props.perPage),
    });
  }

  get paginator() {
    if (this.pagination && this.props.className) {
      // Good ole vanilla JS approach as the pagination elements are buried in ReactPaginates's source code
      const paginator = document.querySelector(`.${this.props.className} .previous`);
      if (paginator !== null) {
        paginator.setAttribute('data-page-count', `Page ${this.state.currentPage} of ${this.state.pageCount}`);
      }
      return (
        <Pagination
          wrapperClass={this.props.className}
          handlePageClick={this.handlePageClick}
          pageCount={this.state.pageCount}
          currentPage={this.state.currentPage}
        />
      );
    }
    return true;
  }
  // End Pagination

  // Start Fuzzy search
  filterRows(searchString) {
    const lowercaseSearchString = searchString || '';
    this.setState((prevState) => {
      if (this.props.columnsToSearch.length) {
        if (prevState.totalRows.length > 2000) {
          this.props.fuzzySearch(lowercaseSearchString);
        }

        const newRows = {
          filteredRows: prevState.totalRows.filter((row) => {
            const objKeys = this.props.columnsToSearch;
            const objKeyLength = objKeys.length;

            for (let i = 0; i < objKeyLength; i += 1) {
              const key = objKeys[i];

              if (typeof row[key] !== 'object' &&
                  row[key].toLowerCase &&
                  row[key].toLowerCase().indexOf(lowercaseSearchString) > -1) {
                return row[key];
              }
            }
            return false;
          }),
        };
        return newRows;
      } else {
        const newRows = {
          filteredRows: prevState.totalRows.filter((row) => {
            const objKeys = Object.keys(row);
            const objKeyLength = objKeys.length;

            for (let i = 0; i < objKeyLength; i += 1) {
              const key = objKeys[i];
              if (key.toLowerCase().indexOf('id') === -1) {
                if (row[key] &&
                  typeof row[key] !== 'object' &&
                  row[key].toLowerCase &&
                  row[key].toLowerCase().indexOf(this.props.filterText.toLowerCase()) > -1) {
                  return row[key];
                }
              }
            }
            return false;
          }),
        };
        Listener.trigger('FILTERED_ROWS', newRows.filteredRows);
        return newRows;
      }
    });
  }
  // End Fuzzy Search

  render() {
    initContainerTranslate();
    const { sortingColumns, columns } = this.state;
    const resolvedColumns = resolve.columnChildren({ columns });
    const rows = this.state.filteredRows.length && this.props.filterText ? this.state.filteredRows : this.state.rows;

    const sortedRows = compose(
      sort.sorter({
        columns: resolvedColumns,
        sortingColumns,
        sort: orderBy,
        strategy: sort.strategies.byProperty,
      }),
      resolve.resolve({
        columns: resolvedColumns,
        method: resolve.nested,
      }) // eslint-disable-line comma-dangle
    )(rows);

    return (
      <section className={this.props.className}>
        {this.props.error && <div className="alert-danger">{this.props.error}</div>}
        <ReactabularTable.Provider
          columns={this.props.columns ? this.props.columns : resolvedColumns}
          components={this.props.components}
          className={this.wrapperClass}
        >
          <ReactabularTable.Header
            className={this.headerClass}
            headerRows={this.props.headerRows ? this.props.headerRows : resolve.headerRows({ columns })}
          />
          <ReactabularTable.Body
            className={this.bodyClass}
            rows={sortedRows || this.props.rows}
            rowKey={this.props.rowKey}
            onRow={this.props.onRow ? this.props.onRow : this.onRow}
          />
        </ReactabularTable.Provider>
        <section className="pure-table__data">
          <span className="table-pagination">{this.paginator}</span>
        </section>
      </section>
    );
  }
}

Table.propTypes = {
  // list of users for whom user has permission to activate
  activateUserRolesAllowed: PropTypes.array,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  components: PropTypes.shape({
    header: PropTypes.shape({
      cell: PropTypes.func,
    }),
    body: PropTypes.shape({
      row: PropTypes.func,
    }),
  }),
  error: PropTypes.string,
  filterText: PropTypes.string,
  columnsToSearch: PropTypes.arrayOf(PropTypes.string),
  headerRows: PropTypes.arrayOf(PropTypes.array), // eslint-disable-line
  onRow: PropTypes.func,
  perPage: PropTypes.number,
  rowKey: PropTypes.string,
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  statusList: PropTypes.arrayOf(PropTypes.object),
  fuzzySearch: PropTypes.func,
  translationKey: PropTypes.string,
  className: PropTypes.string,
};

Table.defaultProps = {
  activateUserRolesAllowed: [],
  components: {},
  error: '',
  filterText: '',
  columnsToSearch: [],
  nestedObject: null,
  onRow: null,
  perPage: 25,
  rowKey: 'id',
  statusList: [],
  fuzzySearch: () => {},
  translationKey: '',
  className: '',
};

function initContainerTranslate() {
  counterpart.registerTranslations('en-US', require('./translations/en-us.json'));
  counterpart.registerTranslations('en-GB', require('./translations/en-gb.json'));
  counterpart.registerTranslations('fr-CA', require('./translations/fr-ca.json'));
  counterpart.registerTranslations('zh-Hans', require('./translations/zh-Hans.json'));
  counterpart.registerTranslations('zh-Hant', require('./translations/zh-Hant.json'));
}

export default Table;
/* eslint-enable no-param-reassign, global-require, array-callback-return */
