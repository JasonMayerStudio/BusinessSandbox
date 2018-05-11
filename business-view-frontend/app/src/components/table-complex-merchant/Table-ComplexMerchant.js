/* eslint-disable no-param-reassign, global-require */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import counterpart from 'counterpart';

import { swapElements } from 'Utils/swapArrayElemsUtil';

class TableComplexMerchant extends Component {
  componentWillReceiveProps(newProps) {
    if (newProps.filterText &&
       newProps.filterText.length > 0 &&
       newProps.filterText !== this.props.filterText) {
      this.props.filterRows(newProps.filterText, this.props.columnsToSearch);
    }
  }

  get columns() {
    const ASSOCIATE_COLUMN = 0;
    const CHAIN_COLUMN = 1;
    const MERCHANT_COLUMN = 2;
    const ACQUIRER_COLUMN = 3;

    const templateObj = this.props.content[0];
    const keys = Object.keys(templateObj);
    const uniqKeys = keys.filter((elem) => {
      return this.props.columnsToSearch.indexOf(elem) !== -1;
    }).sort();

    swapElements(uniqKeys, ASSOCIATE_COLUMN, ACQUIRER_COLUMN);
    swapElements(uniqKeys, CHAIN_COLUMN, ACQUIRER_COLUMN);
    swapElements(uniqKeys, ASSOCIATE_COLUMN, CHAIN_COLUMN);
    swapElements(uniqKeys, CHAIN_COLUMN, MERCHANT_COLUMN);
    swapElements(uniqKeys, ACQUIRER_COLUMN, ASSOCIATE_COLUMN);

    return uniqKeys;
  }

  get mapColumnsAndRows() {
    if (this.props.content.length) {
      return (
      [<thead
        className={`pure-table__header ${this.props.className}`}
        key="header"
      >
        <tr>
          {this.columns.map((row) => {
            /* remove underscores and add spaces to row names */
            row = row.replace(/_/g, ' ').replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
            switch (row) {
              case 'associate':
                return (
                  <th
                    key={row}
                    className="sort"
                    onClick={() => this.props.handleSort(row)}
                  >
                    {counterpart('complexColumns.associate')}
                  </th>
                );
              case 'chain':
                return (
                  <th
                    key={row}
                    className="sort"
                    onClick={() => this.props.handleSort(row)}
                  >
                    {counterpart('complexColumns.chain')}
                  </th>
                );
              case 'merchant number':
                return (
                  <th
                    key={row}
                    className="sort"
                    onClick={() => this.props.handleSort(row)}
                  >
                    {counterpart('complexColumns.merchantNumber')}
                  </th>
                );
              case 'acquirer':
                return (
                  <th
                    key={row}
                    className="sort"
                    onClick={() => this.props.handleSort(row)}
                  >
                    {counterpart('complexColumns.acquirer')}
                  </th>
                );
              default:
                return false;
            }
          })}
        </tr>
      </thead>,
        <tbody
          key="body"
          className={this.props.loading ? 'pure-table__body loading' : 'pure-table__body'}
        >
          {this.props.globalSelectorGroup.map((item) => {
            return ([
              <tr>
                <td className="global-selector-group" colSpan="4">Corp {item.corp} &gt; Region {item.region} &gt; Principal {item.principal} &gt; Associate {item.associate} &gt; Chain {item.chain}</td>
              </tr>,
              item.ids.map((row) => {
                return (
                  <tr
                    onClick={() => this.props.complexOnRow(row)}
                    className="row"
                  >
                    <td>{row.associate}</td>
                    <td>{row.chain}</td>
                    <td>{row.merchantNumber}</td>
                    <td>{row.acquirer}</td>
                  </tr>
                );
              }),
            ]);
          })}
        </tbody>]
      );
    }
    return null;
  }

  render() {
    // Good ole vanilla JS approach as the pagination elements are buried in ReactPaginates's source code
    const paginator = document.querySelector('.previous');
    if (paginator !== null) {
      paginator.setAttribute('data-page-count', `Page ${this.props.currentPage} of ${this.props.pageCount}`);
    }

    initContainerTranslate();
    return (
      <section>
        <table className="pure-table table-complex-merchant">
          {this.mapColumnsAndRows}
        </table>
        <div className="pure-table__data">
          <span className="complex-pagination">{this.props.paginator}</span>
        </div>
      </section>
    );
  }
}

TableComplexMerchant.propTypes = {
  content: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  columnsToSearch: PropTypes.array.isRequired,
  globalSelectorGroup: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  paginator: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.element,
  ]),
  handleSort: PropTypes.func.isRequired,
  filterRows: PropTypes.func,
  filterText: PropTypes.string.isRequired,
  complexOnRow: PropTypes.func.isRequired,
  className: PropTypes.string,
  currentPage: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
};

TableComplexMerchant.defaultProps = {
  loading: false,
  globalSelectorGroup: null,
  paginator: null,
  filterRows: () => {},
  className: '',
};

function initContainerTranslate() {
  counterpart.registerTranslations('en-US', require('./translations/en-us.json'));
  counterpart.registerTranslations('en-GB', require('./translations/en-gb.json'));
  counterpart.registerTranslations('fr-CA', require('./translations/fr-ca.json'));
  counterpart.registerTranslations('zh-Hans', require('./translations/zh-Hans.json'));
  counterpart.registerTranslations('zh-Hant', require('./translations/zh-Hant.json'));
}

export default TableComplexMerchant;
/* eslint-enable no-param-reassign, global-require */
