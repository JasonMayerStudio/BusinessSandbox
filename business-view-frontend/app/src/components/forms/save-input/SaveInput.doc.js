import React, { Component } from 'react';
import { Page, ReactSpecimen } from 'catalog';
import SaveInput from './SaveInput.js';

export default class SaveInputDoc extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'filterName',
      inputValue: '',
      savedValue: '',
    };

    this.attachBindings();
  }

  onChange(event) {
    this.setState({
      inputValue: event.target.value,
    });
  }

  attachBindings() {
    this.onChange = this.onChange.bind(this);
    this.saveInput = this.saveInput.bind(this);
  }

  saveInput(value) {
    this.setState({
      savedValue: value,
    });
  }

  render() {
    return (
      <Page>
        <h2>SaveInput</h2>

        <p>Use this component for saving text from an input field</p>

        <ReactSpecimen span={3}>
          <SaveInput
            onChange={this.onChange}
            saveInput={this.saveInput}
            inputValue={this.state.inputValue}
            placeholder="Filter Name"
            name={this.state.name}
            buttonText="Save"
          />
        </ReactSpecimen>

        {this.state.savedValue && <p>Submitted filter name was: {this.state.savedValue}</p>}

        <h3>Parameters</h3>

        <h4>Required Parameters</h4>
        <ul>
          <li><strong>onChange</strong>: function to update state of input value</li>
          <li><strong>saveInput</strong>: function that fires off when save button is clicked; saves value of input</li>
          <li><strong>inputValue</strong>: value of input field</li>
          <li><strong>placeholder</strong>: placeholder text in input field</li>
        </ul>

        <h4>Optional Parameters</h4>
        <ul>
          <li><strong>name</strong>:
            name attribute to use on the text input
          </li>
          <li><strong>savedValue</strong>:
            last saved input value
          </li>
        </ul>

      </Page>
    );
  }
}
