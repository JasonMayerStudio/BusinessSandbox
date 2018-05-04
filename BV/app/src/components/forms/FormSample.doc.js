import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import FormSample from './FormSample.js';

export default class UserForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        firstName: '',
        lastName: '',
        email: '',
      },
      errors: {},
      saving: false,
    };

    this.attachBindings();
  }

  attachBindings() {
    this.updateFormState = this.updateFormState.bind(this);
    this.saveUser = this.saveUser.bind(this);
  }

  updateFormState(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;
    this.setState({ user });
  }

  saveUser(event) {
    event.preventDefault();

    this.setState({ saving: true });
    setTimeout(() => {
      alert(`Saving user: ${this.state.user.firstName} ${this.state.user.lastName}`); // eslint-disable-line no-alert
      this.setState({
        user: {
          firstName: '',
          lastName: '',
          email: '',
        },
        saving: false,
      });
    });
  }

  render() {
    return (
      <Page>
        <h2>Sample Form</h2>

        <p>This is just an example of how to build a custom form. You should not use this component directly.</p>

        <ReactSpecimen span={6}>
          <FormSample
            user={this.state.user}
            updateFormState={this.updateFormState}
            onSave={this.saveUser}
            saving={this.state.saving}
            errors={this.state.errors}
          />
        </ReactSpecimen>

        <h3>Parameters</h3>

        <h4>Required Parameters</h4>
        <ul>
          <li><strong>user</strong>: an example of an object passed to hydrate the form</li>
          <li><strong>updateFormState</strong>: standard update state function for a controlled form component</li>
          <li><strong>onSave</strong>: function to save the form data</li>
        </ul>

        <h4>Optional Parameters</h4>
        <ul>
          <li><strong>saving</strong>:flag for disabling the form Save button
          </li>
          <li><strong>errors</strong>: error object keyed to the form field names</li>
        </ul>

      </Page>
    );
  }
}
