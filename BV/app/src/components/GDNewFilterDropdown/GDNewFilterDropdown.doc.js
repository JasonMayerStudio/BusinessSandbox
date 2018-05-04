import React, { Component } from 'react';
import { Page, ReactSpecimen } from 'catalog';
import GDNewFilterDropdown from 'Components/GDNewFilterDropdown';
import LinkInlineButton from 'Components/Button/LinkInlineButton';

const translations = {
  cancel: 'Cancel',
  save: 'Save',
  saveFilterLabel: 'Filter Name',
  saveFilterTitle: 'Save Filter',
};

class GDNewFilterDropdownDoc extends Component {
  constructor() {
    super();

    this.state = {
      isToggled: false,
      filterName: '',
    };
  }

  onChange = (event) => {
    this.setState({ filterName: event.target.value });
  }

  toggleDropdown = () => {
    this.setState({ isToggled: !this.state.isToggled });
  }

  saveFilterName = () => {
    this.setState({
      filterName: '',
      isToggled: false,
    });
  }

  render() {
    return (
      <Page>
        <h2>GDNewFilterDropdown</h2>

        <p>Use this component for saving a filter name in a GD Report Runner.</p>

        <ReactSpecimen span={3}>
          <div style={{ textAlign: 'right', position: 'relative' }}>
            <LinkInlineButton
              action={this.toggleDropdown}
            >
              Save
            </LinkInlineButton>
            {this.state.isToggled && <GDNewFilterDropdown
              extraClass="some-class"
              toggleDropdown={this.toggleDropdown}
              onChange={this.onChange}
              saveFilterName={this.saveFilterName}
              translations={translations}
              value={this.state.filterName}
            />}
          </div>
        </ReactSpecimen>

        <h3>Parameters</h3>

        <h4>Required Parameters</h4>
        <ul>
          <li><strong>toggleDropdown</strong>: handler to toggle the dropdown open or closed.</li>
          <li><strong>onChange</strong>: handler that captures the value of the filter name</li>
          <li><strong>saveFilterName</strong>: handler that will save the value of the filter name, clear the input, and close the dropdown</li>
        </ul>

        <h4>Optional Parameters</h4>
        <ul>
          <li><strong>extraClass</strong>:
            an extra style class that will go on the component root element
          </li>
          <li><strong>translations</strong>: an object list of strings to translate static text</li>
          <li><strong>value</strong>: the value of the input</li>
        </ul>

      </Page>
    );
  }
}

export default GDNewFilterDropdownDoc;
