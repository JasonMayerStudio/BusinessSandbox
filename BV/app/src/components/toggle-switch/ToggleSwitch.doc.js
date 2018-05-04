import React, { Component } from 'react';
import { Page, ReactSpecimen } from 'catalog';
import ToggleSwitch from './ToggleSwitch.js';

export default class ToggleSwitchDoc extends Component {
  constructor(props) {
    super(props);

    this.state = {
      defaultToggle0: true,
      defaultToggle1: false,
      addons: [
        {
          id: 'addon3',
          isChecked: true,
        },
        {
          id: 'addon4',
          isChecked: false,
        },
      ],
    };

    this.toggleSwitch = this.toggleSwitch.bind(this);
    this.toggleSwitch2 = this.toggleSwitch2.bind(this);
    this.toggleSwitches = this.toggleSwitches.bind(this);
  }

  toggleSwitch() {
    this.setState({
      defaultToggle0: !this.state.defaultToggle0,
    });
  }

  toggleSwitch2() {
    this.setState({
      defaultToggle1: !this.state.defaultToggle1,
    });
  }

  toggleSwitches(e) {
    const id = e.target.id;
    const newAddons = this.state.addons.map((addon) => {
      const newAddon = Object.assign({}, addon);
      if (newAddon.id === id) {
        newAddon.isChecked = !newAddon.isChecked;
      }
      return newAddon;
    });
    this.setState({
      addons: [...newAddons],
    });
  }

  render() {
    const addonsList = this.state.addons.map((addon) => {
      return (
        <div key={`addon-${addon.id}`}>
          <ToggleSwitch
            key={addon.id}
            id={addon.id}
            onChange={this.toggleSwitches}
            isChecked={addon.isChecked}
            disabled={false}
          />
          <hr />
        </div>
      );
    });

    return (
      <Page>
        <h2>Toggle Switch</h2>

        <p>Use this component for toggling a selection</p>

        <h5>A set of toggle switches</h5>

        <ReactSpecimen span={4}>
          <div>
            {addonsList}
          </div>
        </ReactSpecimen>

        <h5>A disabled toggle switch</h5>

        <ReactSpecimen span={4}>
          <div>
            <ToggleSwitch
              isChecked={this.state.addon3}
              onChange={(e) => this.toggleSwitch(e)}
              id="addon-disabled"
              disabled
            />
          </div>
        </ReactSpecimen>

        <h3>Parameters</h3>

        <h4>Required Parameters</h4>
        <ul>
          <li><strong>defaultChecked</strong>: boolean: if a toggle switch needs to be checked initially</li>
          <li><strong>disabled</strong>: boolean: if a toggle switch needs to be disabled for any reason</li>
          <li><strong>id</strong>: string used to uniquely indentify the toggle switch</li>
          <li><strong>onChange</strong>: passing in a function to initiate when toggles</li>
        </ul>

        <h4>Optional Parameters</h4>
        <ul>
          <li>N/A</li>
        </ul>
      </Page>
    );
  }
}
