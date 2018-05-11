import React, { Component } from 'react';
import { Page, ReactSpecimen } from 'catalog';
import Label from 'Components/forms/label/Label';
import RadioButton from './RadioButton.js';

export default class RadioButtonDoc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      useAfterBurner: false,
      permissions: [
        {
          name: 'View Users',
          id: 'view_users',
          isChecked: true,
        },
        {
          name: 'Create Users',
          id: 'create_users',
          isChecked: false,
        },
        {
          name: 'Change Ownership',
          id: 'change_ownership',
          isChecked: false,
        },
      ],
    };
    this.attachBindings();
  }

  attachBindings() {
    this.toggleRadioButton = this.toggleRadioButton.bind(this);
    this.togglePermissions = this.togglePermissions.bind(this);
  }

  toggleRadioButton() {
    this.setState({
      useAfterBurner: !this.state.useAfterBurner,
    });
  }

  togglePermissions(e) {
    const id = e.target.id;
    const newPermissions = this.state.permissions.map((permission) => {
      const newPermission = Object.assign({}, permission);
      newPermission.isChecked = false;
      if (newPermission.id === id) {
        newPermission.isChecked = true;
      }
      return newPermission;
    });
    this.setState({
      permissions: [...newPermissions],
    });
  }

  render() {
    const permissionList = this.state.permissions.map((permission) => {
      return (
        <RadioButton
          key={permission.id}
          label={permission.name}
          id={permission.id}
          onChange={this.togglePermissions}
          isChecked={permission.isChecked}
        />
      );
    });

    const selectedPermissions = this.state.permissions
      .filter((permission) => {
        return permission.isChecked;
      })
      .map((permission) => {
        return permission.name;
      })
      .join(', ');

    return (
      <Page>
        <h2>Radio Button</h2>

        <p>Use this component for toggling a selection</p>

        <ReactSpecimen span={2}>
          <RadioButton
            label="Use afternburner"
            id="useAfterBurner"
            isChecked={this.state.useAfterBurner}
            onChange={this.toggleRadioButton}
          />
        </ReactSpecimen>

        <ReactSpecimen span={2}>
          <RadioButton
            label="A disabled radio-button"
            id="disabledRadioButton"
            isChecked={false}
            onChange={this.toggleRadioButton}
            disabled
          />
        </ReactSpecimen>

        <ReactSpecimen span={2}>
          <RadioButton
            label="A readonly radio-button"
            id="disabledRadioButton"
            isChecked
            onChange={this.toggleRadioButton}
            readonly
          />
        </ReactSpecimen>

        <ReactSpecimen span={4}>
          <div>
            <div className="radio-button-group">
              <Label htmlFor="user-permissions-list" labelClass="field-label radio-button-group-parent-label">Select Permissions</Label>
              <div id="user-permissions-list" className="radio-button-list">
                {permissionList}
              </div>
            </div>
            <p>Permissions selected: <strong>{selectedPermissions}</strong></p>
          </div>
        </ReactSpecimen>

        <h3>Parameters</h3>

        <h4>Required Parameters</h4>
        <ul>
          <li><strong>onChange</strong>: function that handles any actions triggered through toggling a radio button</li>
          <li><strong>id</strong>: string used to uniquely identify the radio button</li>
        </ul>

        <h4>Optional Parameters</h4>
        <ul>
          <li><strong>label</strong>: a caption for the radio button</li>
          <li><strong>disabled</strong>: if a radio button needs to be disabled for any reason</li>
        </ul>

      </Page>
    );
  }
}
