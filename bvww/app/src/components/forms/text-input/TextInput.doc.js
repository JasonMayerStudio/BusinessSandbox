import React, { Component } from 'react';
import { Page, ReactSpecimen } from 'catalog';

import TextInput from './TextInput.js';

const errorMessage = 'Email cannot be blank.';

export default class TextInputDoc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      lastValue: null,
    };

    this.attachBindings();
  }

  attachBindings() {
    this.updateFormState = this.updateFormState.bind(this);
    this.fieldBlurred = this.fieldBlurred.bind(this);
  }

  updateFormState(event) {
    const field = event.target.name;
    const updatedUser = Object.assign({}, this.state.user);
    updatedUser[field] = event.target.value;
    this.setState({ user: updatedUser });
  }

  fieldBlurred(event) {
    const field = event.target.name;
    const currentValue = event.target.value;
    this.setState({
      lastValue: {
        field,
        text: currentValue,
      },
    });
  }

  render() {
    return (
      <Page>
        <h2>Text Input</h2>

        <p>Use this component for any variation of a text input.</p>

        <ReactSpecimen span={3}>
          <div className="field-group-vertical">
            <TextInput
              name="email"
              label="Email"
              type="email"
              onChange={this.updateFormState}
              placeholder="jdoe@example.com"
              value={this.state.user.email}
              error={''}
              onBlur={this.fieldBlurred}
            />
          </div>
        </ReactSpecimen>

        <ReactSpecimen span={3}>
          <div className="field-group-vertical">
            <TextInput
              name="email-error"
              label="Email"
              type="email"
              onChange={this.updateFormState}
              placeholder="jdoe@example.com"
              value={''}
              error={errorMessage}
            />
          </div>
        </ReactSpecimen>

        {this.state.lastValue && this.state.lastValue.field && <p>Last value of field <strong>{this.state.lastValue.field}</strong> was <strong>{this.state.lastValue.text}</strong>.</p>}

        <h3>Parameters</h3>

        <h4>Required Parameters</h4>
        <ul>
          <li><strong>name</strong>: the HTML name attribute of the input field</li>
          <li><strong>label</strong>: the text displayed in the label for the input</li>
          <li><strong>onChange</strong>: a callback that updated the value of the input</li>
        </ul>

        <h4>Optional Parameters</h4>
        <ul>
          <li><strong>type</strong>: the input type (defaults to <em>text</em>)</li>
          <li><strong>placeholder</strong>: the placeholder attribute</li>
          <li><strong>value</strong>: the value of the input</li>
          <li><strong>error</strong>: any error message to display for the input</li>
        </ul>

      </Page>
    );
  }
}
