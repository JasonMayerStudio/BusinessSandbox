import React, { Component } from 'react';
import { Page, ReactSpecimen } from 'catalog';

import { createSelectorBar } from 'Utils/selectorBarUtil';

import merchants from './data/merchants';
import globalSelector from './data/globalSelector';

import TableComplexMerchant from './Table-ComplexMerchant.js';

const columns = ['associate', 'chain', 'merchantNumber', 'acquirer'];

class TableComplexMerchantDoc extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalRows: merchants,
      merchants,
      sort: {
        key: undefined,
        order: 0,
      },
      globalSelectorGroup: globalSelector,
    };

    this.attachBindings();
  }

  attachBindings() {
    this.compareBy = this.compareBy.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.globalSelectorGroup = this.globalSelectorGroup.bind(this);
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
      return [...this.state.merchants].sort((a, b) => {
        return this.compareBy(a, b) * (order === 1 ? 1 : -1);
      });
    }

    return this.state.totalRows;
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
        merchants: this.sortedData,
      }, () => {
        this.globalSelectorGroup(this.state.merchants);
      });
    });
  }

  globalSelectorGroup(selectedMerchants) {
    const trueHierarchy = createSelectorBar(selectedMerchants);

    this.setState({
      globalSelectorGroup: trueHierarchy,
    });
  }

  render() {
    return (
      <Page>
        <h2>TableComplexMerchant</h2>

        <p>Use this component for displaying merchants when the global selector is applied.</p>

        <ReactSpecimen span={6}>
          <TableComplexMerchant
            columnsToSearch={columns}
            content={this.state.merchants}
            globalSelectorGroup={this.state.globalSelectorGroup}
            handleSort={this.handleSort}
            filterText={''}
            complexOnRow={() => {}}
          />
        </ReactSpecimen>

        <h3>Parameters</h3>

        <h4>Required Parameters</h4>
        <ul>
          <li><strong>content</strong>: total rows of relevant data</li>
          <li><strong>columnsToSearch</strong>: columns from content data to display on the table, as well as to search when used with a search component</li>
          <li><strong>globalSelectorGroup</strong>: parsed grouping of global selector hierarchy and its children up to chain level access</li>
          <li><strong>handleSort</strong>: function to sort data by ascending, descending, and default orders</li>
          <li><strong>filterText</strong>: string representative of an input value used to search table rows</li>
          <li><strong>complexOnRow</strong>: function to handle row click / interactivity</li>
        </ul>

        <h4>Optional Parameters</h4>
        <ul>
          <li><strong>loading</strong>: boolean that displays a loader if data is incoming
          </li>
          <li><strong>paginator</strong>: if total rows is greater than desired rows per page, a pagination component can be used</li>
          <li><strong>filterRows</strong>: a function used to search all object keys when used with a search component</li>
        </ul>

      </Page>
    );
  }
}

export default TableComplexMerchantDoc;
