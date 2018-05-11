import React, { Component } from 'react';
import { Page, ReactSpecimen } from 'catalog';
import NavBurger from './NavBurger.js';

class NavBurgerDoc extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navigationToggled: false,
    };

    this.toggleNavigation = this.toggleNavigation.bind(this);
  }

  toggleNavigation() {
    this.setState({ navigationToggled: !this.state.navigationToggled });
  }

  render() {
    return (
      <Page>
        <h2>NavBurger</h2>

        <p>Use this component for toggling a hidden tablet / mobile navigation menu</p>

        <ReactSpecimen span={3}>
          <NavBurger
            toggleNavigation={this.toggleNavigation}
            navigationToggled={this.state.navigationToggled}
          />
        </ReactSpecimen>

        <h3>Parameters</h3>

        <h4>Required Parameters</h4>
        <ul>
          <li><strong>toggleNavigation</strong>: function to toggle navigation container from hidden to visible</li>
          <li><strong>navigationToggled</strong>: boolean indicating whether navigation is hidden or visible</li>
        </ul>

        <h4>Optional Parameters</h4>
        <ul>
          <li>none</li>
        </ul>

      </Page>
    );
  }
}

export default NavBurgerDoc;
