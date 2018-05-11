import React, { Component } from 'react';
import { Page, ReactSpecimen } from 'catalog';
import FilterToggle from './FilterToggle.js';

class FilterToggleDoc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggled: false,
    };
    this.attachBindings();
  }

  attachBindings() {
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isToggled: !this.state.isToggled,
    });
  }

  render() {
    return (
      <Page>
        <h2>FilterToggle</h2>

        <p>Use this component for a button that toggles on an action</p>

        <ReactSpecimen span={6}>
          {/* For elements whose layout is governed by the CSS box model,
            any value other than none for the transform results in the creation
            of both a stacking context & a containing block. The object acts as
            a containing block for fixed positioned descendants. So this fixed
            filter toggle is fixed relative to the position of this div.  */}
          <div style={{ transform: 'translateZ(0)' }}>
            <FilterToggle
              toggled={this.state.isToggled}
              buttonText={this.state.isToggled ? '' : 'Filter'}
              action={this.toggle}
              position={0}
            />
          </div>
        </ReactSpecimen>

        <h3>Parameters</h3>

        <h4>Required Parameters</h4>
        <ul>
          <li><strong>action</strong>: a function action that occurs upon toggle</li>
          <li><strong>buttonText</strong>: a string representing said button action</li>
          <li><strong>toggled</strong>: state of filter toggle, whether toggled or untoggled</li>
        </ul>

        <h4>Optional Parameters</h4>
        <ul>
          <li>none</li>
        </ul>

      </Page>
    );
  }
}

export default FilterToggleDoc;
