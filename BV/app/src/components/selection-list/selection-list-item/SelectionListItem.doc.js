import React, { Component } from 'react';
import { Page, ReactSpecimen } from 'catalog';
import SelectionListItem from './SelectionListItem.js';

export default class SelectionListItemDoc extends Component {
  constructor() {
    super();

    this.state = {
      selected: true,
    };
  }

  handleSelect = () => {
    this.setState({ selected: !this.state.selected });
  }

  render() {
    return (
      <Page>
        <h2>SelectionListItem</h2>

        <p>Use this component to add a selectable item to a selection list.</p>

        <ReactSpecimen span={3}>
          <SelectionListItem
            itemId="1"
            mainLine="Jane Doe"
            subLine="jdoe@example.com"
            selected={this.state.selected}
            extraClass="some-class"
            handleSelect={this.handleSelect}
          />
        </ReactSpecimen>

        <h3>Parameters</h3>

        <h4>Required Parameters</h4>
        <ul>
          <li><strong>mainLine</strong>: the main item for the left side of the list item</li>
          <li><strong>selected</strong>: whether the item is selected or not</li>
          <li><strong>handleSelect</strong>: a handle for when the item is selected</li>
        </ul>

        <h4>Optional Parameters</h4>
        <ul>
          <li><strong>subLine</strong>: the secondary item for the left side of the list item</li>
          <li><strong>extraClass</strong>: an extra style class that will go on the component root element
          </li>
        </ul>

      </Page>
    );
  }
}
