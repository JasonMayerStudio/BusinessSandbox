import React from 'react';
import { Page, ReactSpecimen } from 'catalog';

import SelectionList from './SelectionList.js';

export default class SelectionListDoc extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          id: 2,
          name: 'John Adams',
          email: 'jadmams@whitehouse.gov',
          selected: false,
        },
        {
          id: 3,
          name: 'Thomas Jefferson',
          email: 'tjefferson@whitehouse.gov',
          selected: false,
        },
        {
          id: 4,
          name: 'James Madison',
          email: 'jmadison@whitehouse.gov',
          selected: false,
        },
        {
          id: 5,
          name: 'James Monroe',
          email: 'jmonroe@whitehouse.gov',
          selected: false,
        },
        {
          id: 1,
          name: 'George Washington',
          email: 'gwashington@whitehouse.gov',
          selected: true,
        },
      ],
    };

    this.attachBindings();
  }

  attachBindings() {
    this.updateSelection = this.updateSelection.bind(this);
  }

  updateSelection(value) {
    const users = this.state.users.map((user) => {
      return Object.assign({}, user, { selected: user.id === value });
    });

    this.setState({ users });
  }

  parseUserList = () => {
    return this.state.users.map((user) => {
      return Object.assign({}, user, { mainLine: user.name, subLine: user.email });
    });
  }

  render() {
    const dataList = this.parseUserList();
    return (
      <Page>
        <h2>SelectionList</h2>

        <p>Use this component to display a list of custom items that can be selected</p>

        <ReactSpecimen span={3}>
          <SelectionList
            dataList={dataList}
            onChange={this.updateSelection}
            handleSelect={this.updateSelection}
            extraClass="some-class"
          />
        </ReactSpecimen>

        <h3>Parameters</h3>

        <h4>Required Parameters</h4>
        <ul>
          <li><strong>dataList</strong>: an array of objects that have a selected property</li>
          <li><strong>handleSelect</strong>: a handler for toggling the selected state of an item</li>
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
