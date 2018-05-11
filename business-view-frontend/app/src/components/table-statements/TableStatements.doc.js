import React, { Component } from 'react';
import { Page, ReactSpecimen } from 'catalog';
import { getSortedData } from 'Utils/tableUtils';

import TableStatements from './TableStatements.js';

import statementsData from './data/statements';

export default class TableStatementsDoc extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalChainStatements: [],
      chainStatements: [],
      totalMerchantStatements: [],
      merchantStatements: [],
      chainSort: {
        key: undefined,
        order: 0,
      },
      merchantSort: {
        key: undefined,
        order: 0,
      },
    };

    this.attachBindings();
  }

  componentWillMount() {
    const chainStatements = [];
    const merchantStatements = [];

    statementsData.map((data) => {
      const statement = Object.assign({}, data);
      if (data.chainNumber !== undefined) {
        chainStatements.push(statement);
      } else if (data.merchantNumber !== undefined) {
        merchantStatements.push(statement);
      }

      this.setState({
        totalChainStatements: chainStatements,
        chainStatements,
        totalMerchantStatements: merchantStatements,
        merchantStatements,
      });

      return false;
    });
  }

  attachBindings() {
    this.handleSort = this.handleSort.bind(this);
    this.handleChainSort = this.handleChainSort.bind(this);
    this.downloadStatement = this.downloadStatement.bind(this);
    this.mapStatementsTables = this.mapStatementsTables.bind(this);
  }

  handleChainSort(key) {
    const sort = (this.state.chainSort.key === key)
      // key matches, update order
      ? { key, order: (this.state.chainSort.order + 1) % 2 }
      // key differs, start with 'asc' order
      : { key, order: 1 };

    const sortParam = (sort.order) ? 'DESC' : 'ASC'; // 1 = DESC, 0 = ASC

    const sortedData = getSortedData(this.state.chainStatements, sort.key, sortParam);

    this.setState({
      chainSort: sort,
      chainStatements: sortedData,
    });
  }

  handleSort(key) {
    const sort = (this.state.merchantSort.key === key)
      // key matches, update order
      ? { key, order: (this.state.merchantSort.order + 1) % 2 }
      // key differs, start with 'asc' order
      : { key, order: 1 };

    const sortParam = (sort.order) ? 'DESC' : 'ASC'; // 1 = DESC, 0 = ASC

    const sortedData = getSortedData(this.state.merchantStatements, sort.key, sortParam);

    this.setState({
      merchantSort: sort,
      merchantStatements: sortedData,
    });
  }

  downloadStatement(link) {
    window.open(link);
  }

  mapStatementsTables() {
    return (
      <section className="statements">
        {this.state.chainStatements.length > 0 && <div>
          <h1>Chain Statements</h1>
          <TableStatements
            totalStatements={this.state.totalChainStatements}
            statements={this.state.chainStatements}
            isChainTable
            handleChainSort={this.handleChainSort}
            downloadStatement={this.downloadStatement}
            sort={this.state.chainSort}
          />
        </div>}
        &nbsp;
        {this.state.merchantStatements.length > 0 && <div>
          <h1>Statements</h1>
          <TableStatements
            totalStatements={this.state.totalMerchantStatements}
            statements={this.state.merchantStatements}
            isChainTable={false}
            handleSort={this.handleSort}
            downloadStatement={this.downloadStatement}
            sort={this.state.merchantSort}
          />
        </div>}
      </section>
    );
  }

  render() {
    return (
      <Page>
        <h2>TableStatements</h2>

        <p>Use this component for a table of statement data for chains or merchants</p>

        <ReactSpecimen span={6}>
          <div>
            {this.mapStatementsTables()}
          </div>
        </ReactSpecimen>

        <h3>Parameters</h3>

        <h4>Required Parameters</h4>
        <ul>
          <li><strong>totalStatements</strong>: total number of statements, before pagination</li>
          <li><strong>statements</strong>: array of statement data for table</li>
          <li><strong>isChainTable</strong>: boolean to check whether table is for chain or merchant statements; used to map column headers</li>
        </ul>

        <h4>Optional Parameters</h4>
        <ul>
          <li><strong>handleSort</strong>:
            function to sort merchant statements table by ascending, descending or default
          </li>
          <li><strong>handleChainSort</strong>: function to sort chain statements table by ascending, descending or default</li>
        </ul>

      </Page>
    );
  }
}
