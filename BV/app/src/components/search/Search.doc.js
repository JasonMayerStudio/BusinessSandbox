import React, { Component } from 'react';
import { Page, ReactSpecimen } from 'catalog';
import Search from './Search.js';

export default class SearchDoc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: '',
    };
    this.attachBindings();
  }

  onChange(newText) {
    this.setState({ results: newText });
  }

  attachBindings() {
    this.onChange = this.onChange.bind(this);
  }

  render() {
    return (
      <Page>
        <h2>Search</h2>

        <p>Use this component for searching data tables.</p>

        <ReactSpecimen span={3}>
          <Search
            filterText={this.state.results}
            onChange={this.onChange}
            placeholder="Search Users"
          />
        </ReactSpecimen>

        {this.state.results && <div>Your last search query was: <strong>{this.state.results}</strong></div>}

        <h3>Parameters</h3>

        <h4>Required Parameters</h4>
        <ul>
          <li><strong>filterText</strong>: the current value in the search input</li>
          <li><strong>onChange</strong>: a callback that searched a corresponding table for the value of the input</li>
        </ul>

        <h4>Optional Parameters</h4>
        <ul>
          <li><strong>error</strong>:
            an error explaining when something went wrong
          </li>
          <li><strong>placeholder</strong>:
            text to indicate to the user what to search for
          </li>
        </ul>

      </Page>
    );
  }
}
