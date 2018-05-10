import React, { Component } from 'react';
import { Page, ReactSpecimen } from 'catalog';

import PrimaryButton from 'Components/Button/PrimaryButton';
import TextInput from 'Components/forms/text-input/TextInput.js';
import ProgressBar from 'Components/progress-bar/ProgressBar.js';

import Tabs from './Tabs.js';
import TabPane from './tab-pane/TabPane.js';

class TabsDoc extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: 0,
      user: {},
    };

    this.attachBindings();
  }

  attachBindings() {
    this.moveTabBack = this.moveTabBack.bind(this);
    this.moveTabForward = this.moveTabForward.bind(this);
    this.updateFormState = this.updateFormState.bind(this);
  }

  moveTabBack() {
    event.stopPropagation();
    if (this.state.currentTab > 0) {
      this.setState({
        currentTab: this.state.currentTab - 1,
      });
    }
  }

  moveTabForward() {
    event.stopPropagation();
    if (this.state.currentTab < 2) {
      this.setState({
        currentTab: this.state.currentTab + 1,
      });
    }
  }

  updateFormState(event) {
    const field = event.target.name;
    const updatedUser = Object.assign({}, this.state.user);
    updatedUser[field] = event.target.value;
    this.setState({ user: updatedUser });
  }

  render() {
    return (
      <Page>
        <h2>Tabs</h2>

        <p>Use this component to show child content in multiple, switchable panes.</p>

        <ReactSpecimen span={6}>
          <form>
            <ProgressBar
              completed={this.state.currentTab + 1}
              total={3}
            />

            <Tabs
              selectedTab={this.state.currentTab}
              extraClass="some-class"
            >
              <TabPane>
                <h2>Personal Information</h2>
                <div className="field-group-vertical">
                  <TextInput
                    name="firstName"
                    label="First Name"
                    type="text"
                    onChange={this.updateFormState}
                    placeholder=""
                    value={this.state.user.firstName}
                    error={''}
                  />
                  <TextInput
                    name="lastName"
                    label="Last Name"
                    type="text"
                    onChange={this.updateFormState}
                    placeholder=""
                    value={this.state.user.lastName}
                    error={''}
                  />
                </div>
              </TabPane>
              <TabPane>
                <h2>Contact Information</h2>
                <div className="field-group-vertical">
                  <TextInput
                    name="phone"
                    label="Phone"
                    type="phone"
                    onChange={this.updateFormState}
                    placeholder="704-555-1212"
                    value={this.state.user.phone}
                    error={''}
                  />
                  <TextInput
                    name="email"
                    label="Email"
                    type="email"
                    onChange={this.updateFormState}
                    placeholder="jdoe@example.com"
                    value={this.state.user.email}
                    error={''}
                  />
                </div>
              </TabPane>
              <TabPane>
                <h2>Trivial Information</h2>
                <div className="field-group-vertical">
                  <TextInput
                    name="movie"
                    label="Favorite Movie"
                    type="text"
                    onChange={this.updateFormState}
                    placeholder="Star Wars"
                    value={this.state.user.movie}
                    error={''}
                  />
                  <TextInput
                    name="song"
                    label="Favorite Song"
                    type="text"
                    onChange={this.updateFormState}
                    placeholder="Fish Heads"
                    value={this.state.user.song}
                    error={''}
                  />
                </div>
              </TabPane>
            </Tabs>

            <div>
              <PrimaryButton action={this.moveTabBack}>Previous Tab</PrimaryButton>
              <span>&nbsp;</span>
              <PrimaryButton action={this.moveTabForward}>Next Tab</PrimaryButton>
            </div>
          </form>
        </ReactSpecimen>

        <h3>Parameters</h3>

        <h4>Required Parameters</h4>
        <ul>
          <li><strong>someProp</strong>: some description</li>
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

export default TabsDoc;
