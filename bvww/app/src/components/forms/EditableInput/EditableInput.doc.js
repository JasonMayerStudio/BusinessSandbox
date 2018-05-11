import React, { Component } from 'react';
import { Page, ReactSpecimen } from 'catalog';

import EditableInput from './';

export default class EditableInputDoc extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Untitled Report',
    };
  }

  getCurrentContent = (content) => {
    this.setState({
      title: content,
    });
  }

  render() {
    const { title } = this.state;
    return (
      <Page>
        <h2>Editable Input</h2>

        <p>Use this component to wrap a set of elements in a visually distinct area.</p>

        <ReactSpecimen span={6}>
          <EditableInput
            extraClass="report-builder"
            label="Custom Report"
            content="Untitled Report 1"
            getCurrent={this.getCurrentContent}
          />
        </ReactSpecimen>

        <h3>Parameters {title}</h3>

        <h4>Required Parameters</h4>
        <ul>
          <li><strong>label</strong>: Label shows right above the Input</li>
          <li><strong>content</strong>: Default Title/Value for Input field</li>
        </ul>

        <h4>Optional Parameters</h4>
        <ul>
          <li><strong>extraClass</strong>:
            an extra style class that will go on the component root element
          </li>
        </ul>

      </Page>
    );
  }
}
