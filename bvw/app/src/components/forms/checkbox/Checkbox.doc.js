import React, { Component } from 'react';
import { Page, ReactSpecimen } from 'catalog';
import Label from 'Components/forms/label/Label';
import Checkbox from './Checkbox.js';

export default class CheckboxDoc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      useAfterBurner: false,
      permissions: [
        {
          name: 'View Users',
          id: 'view_users',
          isChecked: true,
          optionalTooltip: 'This allows you to view user information.',
          optionalTooltipTitle: 'View Users',
        },
        {
          name: 'Create Users',
          id: 'create_users',
          isChecked: false,
          optionalTooltip: 'This allows you to create new users.',
          optionalTooltipTitle: 'Create Users',
        },
        {
          name: 'Change Ownership',
          id: 'change_ownership',
          isChecked: false,
          optionalTooltip: 'This allows you to change the ownership for a merchant grouping.',
          optionalTooltipTitle: 'Change Ownership',
        },
      ],
    };
    this.attachBindings();
  }

  attachBindings() {
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
    this.togglePermissions = this.togglePermissions.bind(this);
  }

  toggleCheckbox() {
    this.setState({
      useAfterBurner: !this.state.useAfterBurner,
    });
  }

  togglePermissions(e) {
    const id = e.target.id;
    const newPermissions = this.state.permissions.map((permission) => {
      const newPermission = Object.assign({}, permission);
      if (newPermission.id === id) {
        newPermission.isChecked = !newPermission.isChecked;
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
        <Checkbox
          key={permission.id}
          label={permission.name}
          id={permission.id}
          onChange={this.togglePermissions}
          isChecked={permission.isChecked}
          optionalTooltip={permission.optionalTooltip}
          optionalTooltipTitle={permission.optionalTooltipTitle}
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
        <h2>Checkbox</h2>

        <p>Use this component for toggling a selection</p>

        <ReactSpecimen span={2}>
          <Checkbox
            label="Use afternburner"
            id="useAfterBurner"
            isChecked={this.state.useAfterBurner}
            onChange={this.toggleCheckbox}
          />
        </ReactSpecimen>

        <ReactSpecimen span={2}>
          <Checkbox
            label="A disabled checkbox"
            id="disabledCheckbox"
            isChecked={false}
            onChange={this.toggleCheckbox}
            disabled
          />
        </ReactSpecimen>

        <ReactSpecimen span={2}>
          <Checkbox
            label="A readonly checkbox"
            id="disabledCheckbox"
            isChecked
            onChange={this.toggleCheckbox}
            readonly
          />
        </ReactSpecimen>

        <ReactSpecimen span={4}>
          <div>
            <div className="checkbox-group">
              <Label htmlFor="user-permissions-list" labelClass="field-label checkbox-group-parent-label">Select Permissions</Label>
              <div id="user-permissions-list" className="checkbox-list">
                {permissionList}
              </div>
            </div>
            <p>Permissions selected: <strong>{selectedPermissions}</strong></p>
          </div>
        </ReactSpecimen>

        <h3>Parameters</h3>

        <h4>Required Parameters</h4>
        <ul>
          <li><strong>onChange</strong>: function that handles any actions triggered through toggling a checkbox</li>
          <li><strong>id</strong>: string used to uniquely identify the checkbox</li>
        </ul>

        <h4>Optional Parameters</h4>
        <ul>
          <li><strong>label</strong>: a caption for the checkbox</li>
          <li><strong>disabled</strong>: if a checkbox needs to be disabled for any reason</li>
        </ul>

      </Page>
    );
  }
}
