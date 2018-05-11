import React, { Component } from 'react';
import { Page, ReactSpecimen } from 'catalog';
import GarbageIcon from 'Components/icons/GarbageIcon';

import ConfirmationModal from './ConfirmationModal.js';


export default class ConfirmationModalDoc extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggledDeleteModal: false,
      isToggledClearModal: false,
    };

    this.attachBindings();
  }

  attachBindings() {
    this.toggleDeleteModal = this.toggleDeleteModal.bind(this);
    this.dangerActionDelete = this.dangerActionDelete.bind(this);
    this.toggleClearModal = this.toggleClearModal.bind(this);
    this.dangerActionClear = this.dangerActionClear.bind(this);
  }

  toggleDeleteModal() {
    this.setState({
      isToggledDeleteModal: !this.state.isToggledDeleteModal,
    });
  }

  dangerActionDelete() {
    this.toggleDeleteModal();
  }

  toggleClearModal() {
    this.setState({
      isToggledClearModal: !this.state.isToggledClearModal,
    });
  }

  dangerActionClear() {
    this.toggleClearModal();
  }

  render() {
    return (
      <Page>
        <h2>ConfirmationModal</h2>

        <p>Use this component for confirming or cancelling an action that cannot be undone</p>

        <ReactSpecimen span={3}>
          <ConfirmationModal
            isToggled={this.state.isToggledDeleteModal}
            toggleModal={this.toggleDeleteModal}
            title="Delete Message(s)"
            actionText="This action cannot be undone. Are you sure?"
            cancelButtonText="Cancel"
            dangerButtonText="Delete"
            dangerAction={this.dangerActionDelete}
          >
            <GarbageIcon />
          </ConfirmationModal>
        </ReactSpecimen>


        <ReactSpecimen span={3}>
          <ConfirmationModal
            isToggled={this.state.isToggledClearModal}
            toggleModal={this.toggleClearModal}
            title="Clear Data Access"
            actionText="Before you can save a user, you will have to restore access to at least one location."
            cancelButtonText="Cancel"
            dangerButtonText="Clear"
            dangerAction={this.dangerActionClear}
            buttonCategory="link-inline"
          >
            Clear
          </ConfirmationModal>
        </ReactSpecimen>

        <h3>Parameters</h3>

        <h4>Required Parameters</h4>
        <ul>
          <li><strong>children</strong>: the content of the button which will open the confirmation modal</li>
          <li><strong>isToggled</strong>: boolean referencing whether the modal is toggled open or closed</li>
          <li><strong>toggleModal</strong>: function that will toggle the modal open or closed</li>
          <li><strong>title</strong>: string title of modal</li>
          <li><strong>actionText</strong>: string body text of modal</li>
          <li><strong>dangerAction</strong>: function that completes the dangerous action that cannot be undone</li>
          <li><strong>cancelButtonText</strong>: string text that indicates cancelling dangerous action</li>
          <li><strong>dangerButtonText</strong>: string text that indicates completion of dangerous action</li>
        </ul>

        <h4>Optional Parameters</h4>
        <ul>
          <li><strong>buttonCategory</strong>: a category of button style to use, if different from the default category of primary</li>
        </ul>

      </Page>
    );
  }
}
