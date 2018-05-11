import React, { Component } from 'react';
import { Page, ReactSpecimen } from 'catalog';
import SearchBar from './SearchBar.js';

export default class SearchBarDoc extends Component {
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
        <h2>SearchBar</h2>

        <p>Use this component to include a internal heading, search field, optional dropdown filter, and optional overall action button, for instance, above a table.</p>

        <ReactSpecimen span={6}>
          <SearchBar
            headline="Roman Emperors"
            filterText={this.state.results}
            onChange={this.onChange}
            placeholder="Search Emperors"
            action={() => { alert('You can no longer add an emperor. The empire split up.'); }} // eslint-disable-line no-alert
            buttonText="Add Emperor"
            buttonCategory="primary"
          />
        </ReactSpecimen>

        {this.state.results && <div>Your last search query was: <strong>{this.state.results}</strong></div>}

        <h3>Parameters</h3>

        <h4>Required Parameters</h4>
        <ul>
          <li><strong>headline</strong>: the text for the main title</li>
          <li><strong>filterText</strong>: the text currently in the search field</li>
          <li><strong>onChange</strong>: function to call when user changes text in search field</li>
        </ul>

        <h4>Optional Parameters</h4>
        <ul>
          <li><strong>placeholder</strong>:
            optional prompt to display when the search field is empty
          </li>
          <li><strong>action</strong>:
            if there is an action button on the right, the text to display in the button
          </li>
          <li><strong>buttonText</strong>:
            if there is an action button on the right, the text to display in the button
          </li>
          <li><strong>buttonCategory</strong>:
            if there is an action button on the right, the visual style of the button
          </li>
          <li><strong>otherProp</strong>: some other description</li>
        </ul>

      </Page>
    );
  }
}
