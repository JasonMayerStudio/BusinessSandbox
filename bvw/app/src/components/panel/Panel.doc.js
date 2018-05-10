import React, { Component } from 'react';
import { Page, ReactSpecimen } from 'catalog';
import TextInput from 'Components/forms/text-input/TextInput.js';

import Panel from './Panel.js';


export default class PanelDoc extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currencyCode: {
        jsonKey: 'currencyCode',
        label: 'Currency Code',
        value: 'USD',
      },
    };

    this.attachBindings();
  }

  onChange(e) {
    const newCurrencyCode = Object.assign({}, this.state.currencyCode);
    newCurrencyCode.value = e.target.value;
    this.setState({ currencyCode: newCurrencyCode });
  }

  attachBindings() {
    this.onChange = this.onChange.bind(this);
  }

  render() {
    return (
      <Page>
        <h2>Panel</h2>

        <p>Use this component to wrap a set of elements in a visually distinct area.</p>

        <ReactSpecimen span={6}>
          <Panel
            extraClass="preferences"
          >
            <div className="radio-button-group">
              <header className="panel__header">
                <h2>Preferences</h2>
                <div className="button-group-horizontal">
                  <button type="reset" className="button button-hollow">
                    Reset
                  </button>
                  <button type="button" className="button button-primary">
                    Save Preferences
                  </button>
                </div>
              </header>
              <div className="panel__body">
                <div className="field-group-vertical">
                  <TextInput
                    name={this.state.currencyCode.jsonKey}
                    label={this.state.currencyCode.label}
                    type="text"
                    onChange={this.onChange}
                    placeholder=""
                    value={this.state.currencyCode.value}
                  />
                </div>
              </div>
            </div>
          </Panel>
        </ReactSpecimen>

        <h3>Parameters</h3>

        <h4>Required Parameters</h4>
        <ul>
          <li><strong>children</strong>: nested child elements that get wrapped in the panel</li>
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
