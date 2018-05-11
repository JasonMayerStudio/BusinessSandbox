import React, { Component } from 'react';
import { Page, ReactSpecimen } from 'catalog';
import StatusBadge from './StatusBadge.js';

const statusList = [
  {
    value: 'activated',
    text: 'Activated',
  },
  {
    value: 'deactivated',
    text: 'Deactivated',
  },
];

const pendingInvite = [
  {
    value: 'pending-invite',
    text: 'Pending Invite',
  },
];

export default class StatusBadgeDoc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
    };
  }

  render() {
    return (
      <Page>
        <h2>StatusBadge</h2>

        <p>Use this component to change a user&apos;s status</p>

        <ReactSpecimen span={3}>
          <StatusBadge
            dataList={statusList}
            selectedItem={this.state.selectedItem || statusList[0]}
            wrapperClass="status-badge"
          />
        </ReactSpecimen>

        <ReactSpecimen span={3}>
          <StatusBadge
            dataList={pendingInvite}
            selectedItem={pendingInvite[0]}
            wrapperClass="status-badge"
          />
        </ReactSpecimen>

        <h3>Parameters</h3>

        <h4>Required Parameters</h4>
        <ul>
          <li><strong>row</strong>: the object to update when an onChange event fires</li>
          <li><strong>dataList</strong>: an array of objects with a value property and a text property</li>
          <li><strong>wrapperClass</strong>: a class that determines what style of dropdown this menu is.</li>
        </ul>

        <h4>Optional Parameters</h4>
        <ul>
          <li><strong>selectedItem</strong>: the currently selected item (if any)</li>
          <li><strong>extraClass</strong>:
            an extra style class that will go on the component root element
          </li>
          <li><strong>otherProp</strong>: some other description</li>
        </ul>

      </Page>
    );
  }
}
