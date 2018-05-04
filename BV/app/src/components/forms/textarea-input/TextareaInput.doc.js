import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import TextField from 'Components/forms/text-field/TextField';
import TextareaInput from './TextareaInput.js';

function updateFormState(event) {
  const field = event.target.name;
  const updatedUser = Object.assign({}, this.state.user);
  updatedUser[field] = event.target.value;
  this.setState({ user: updatedUser });
}

const errorMessage = 'The comment cannot be empty.';
const labelContent = <span>Comments {errorMessage && <div className="message-error">{errorMessage}</div>}</span>;

export default () => (
  <Page>
    <h2>TextareaInput</h2>

    <p>Use this component for a textarea input.</p>

    <ReactSpecimen span={3}>
      <TextField
        htmlFor="comments"
        labelContent="Comments"
      >
        <TextareaInput
          name="comments"
          onChange={updateFormState}
          placeholder="The quick brown fox jumps over the lazy dog."
          value={''}
        />
      </TextField>
    </ReactSpecimen>

    <ReactSpecimen span={3}>
      <TextField
        htmlFor="comments-error"
        labelContent={labelContent}
        error={errorMessage}
      >
        <TextareaInput
          name="comments-error"
          label="Comments"
          onChange={updateFormState}
        />
      </TextField>
    </ReactSpecimen>

    <h3>Parameters</h3>

    <h4>Required Parameters</h4>
    <ul>
      <li><strong>name</strong>: the HTML name attribute of the input field</li>
      <li><strong>label</strong>: the text displayed in the label for the input</li>
      <li><strong>onChange</strong>: a callback that updated the value of the input</li>
    </ul>

    <h4>Optional Parameters</h4>
    <ul>
      <li><strong>placeholder</strong>: the placeholder attribute</li>
      <li><strong>value</strong>: the value of the input</li>
      <li><strong>error</strong>: any error message to display for the input</li>
    </ul>

  </Page>
);
