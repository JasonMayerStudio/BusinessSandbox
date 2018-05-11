import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import TextInput from 'Components/forms/text-input/TextInput.js';
import LockIcon from 'Components/icons/LockIcon';
import InformationBubble from './InformationBubble.js';

function updateFormState(event) {
  const field = event.target.name;
  const updatedUser = Object.assign({}, this.state.user);
  updatedUser[field] = event.target.value;
  this.setState({ user: updatedUser });
}

export default () => (
  <Page>
    <h2>InformationBubble</h2>

    <p>Use this component for sharing additional information about another element.</p>

    <ReactSpecimen span={3}>
      <div>
        Create Merchant Employee
        <InformationBubble
          info
          icon={<LockIcon />}
          tooltipTitle="Create Merchant Employee"
          tooltipContent="Nisi sed ac consectetur elementum sollicitudin Nisi sed ac consectetur elementum sollicitudin."
          id="info"
        />
      </div>
    </ReactSpecimen>

    <ReactSpecimen span={3}>
      <div className="field-group-vertical">
        <TextInput
          name="email"
          label="Email"
          type="email"
          onChange={updateFormState}
          placeholder="jdoe@example.com"
          value={''}
          error="The email field cannot be blank."
        />
      </div>
    </ReactSpecimen>

    <h3>Parameters</h3>

    <h4>Required Parameters</h4>
    <ul>
      <li><strong>info</strong>: for information messages - only use if information message</li>
      <li><strong>error</strong>: for error messages - only use if error message</li>
      <li><strong>position</strong>: where to position the tooltip</li>
      <li><strong>tooltipContent</strong>: text content of tooltip</li>
    </ul>

    <h4>Optional Parameters</h4>
    <ul>
      <li><strong>tooltipTitle</strong>:
        use if tooltip has a headline
      </li>
      <li><strong>icon</strong>:
        a React element to show in front of the title inside the tooltip
      </li>
    </ul>

  </Page>
);
