import React, { Component } from 'react';
import { Page, ReactSpecimen } from 'catalog';

import { getSortedData } from 'Utils/tableUtils';

import TableMessages from './TableMessages.js';

const data = [
  {
    id: 1,
    subject: 'Message subject',
    body: '<b>Message body</b> can contain HTML',
    status: 'Unread',
    type: 'System message',
    receivedDate: '2017-09-22 13:24:40.622144',
    attachments: [
      {
        name: 'Monthly statement',
        link: 'http://test.download-attachment.com/monthlyStatement',
        size: '1024KB',
      },
      {
        name: 'Quarterly statement',
        link: 'http://test.download-attachment.com/quarterlyStatement',
        size: '2048KB',
      },
    ],
    isChecked: false,
  },
  {
    id: 2,
    subject: 'Message subject',
    body: '<b>Message body</b> can contain HTML',
    status: 'Read',
    type: 'System message',
    receivedDate: '2017-09-26 13:24:40.622144',
    isChecked: false,
  },
  {
    id: 3,
    subject: 'Message subject',
    body: '<b>Message body</b> can contain HTML',
    status: 'Read',
    type: 'System message',
    receivedDate: '2017-08-26 13:24:40.622144',
    isChecked: false,
  },
  {
    id: 4,
    subject: 'Message subject',
    body: '<b>Message body</b> can contain HTML',
    status: 'Unread',
    type: 'System message',
    receivedDate: '2017-07-26 13:24:40.622144',
    isChecked: false,
  },
];

class TableMessagesDoc extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: data,
      totalMessages: data,
      sort: {
        key: undefined,
        order: 0,
      },
      modalToggled: false,
    };
    this.attachBindings();
  }

  onChange(event) {
    const htmlId = event.target.id;
    const messageCount = [];
    const messages = this.state.messages.map((message) => {
      const newMessage = Object.assign({}, message);

      const read = newMessage.status.toLowerCase() === 'read';
      const unread = newMessage.status.toLowerCase() === 'unread';

      if (newMessage.id === Number(htmlId)) {
        newMessage.isChecked = !newMessage.isChecked;

        // @TODO Make sure when two messages of the same type are selected, buttons don't disappear
        if (read) {
          this.setState({
            readToggled: !this.state.readToggled,
          });
        } else if (unread) {
          this.setState({
            unreadToggled: !this.state.unreadToggled,
          });
        }
      }

      if (newMessage.isChecked) {
        messageCount.push(newMessage);
      }

      return newMessage;
    });

    this.setState({
      messages: [...messages],
      messageCount: messageCount.length,
    });
  }

  attachBindings() {
    this.toggleModal = this.toggleModal.bind(this);
    this.dangerAction = this.dangerAction.bind(this);
    this.onChange = this.onChange.bind(this);
    this.markAsRead = this.markAsRead.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.markAsUnread = this.markAsUnread.bind(this);
    this.deleteMessage = this.deleteMessage.bind(this);
    this.markAllAsRead = this.markAllAsRead.bind(this);
    this.selectAllMessages = this.selectAllMessages.bind(this);
    this.deselectAllMessages = this.deselectAllMessages.bind(this);
  }

  toggleModal() {
    this.setState({
      modalToggled: !this.state.modalToggled,
    });
  }

  dangerAction(row) {
    this.toggleModal();

    if (row !== null) {
      this.deleteMessage(row);
    } else {
      this.deleteMessage();
    }
  }

  deleteMessage(row) {
    const messageIds = [];
    const messages = this.state.messages.filter((message) => {
      let newMessage;
      if (message.isChecked) {
        messageIds.push(message.id);
      } else if (row !== null && row.id === message.id) {
        newMessage = row || message;
        messageIds.push(newMessage.id);
      }

      return !message.isChecked && message.id !== row.id;
    });

    this.setState({
      totalMessages: messages,
      messages,
    });
  }

  markAllAsRead() {
    const messages = this.state.messages.map((message) => {
      const newMessage = Object.assign({}, message);
      newMessage.status = 'Read';
      return newMessage;
    });

    this.setState({
      messages,
    });
  }

  selectAllMessages() {
    const newMessages = this.state.messages.map((message) => {
      const newMessage = Object.assign({}, message);
      newMessage.isChecked = true;
      return newMessage;
    });

    this.setState({
      messages: newMessages,
      readToggled: true,
      unreadToggled: true,
      messageCount: newMessages.length,
    });
  }

  markAsRead() {
    const messages = this.state.messages.map((message) => {
      const newMessage = Object.assign({}, message);
      if (newMessage.isChecked && newMessage.status.toLowerCase() === 'unread') {
        newMessage.status = 'Read';
      }
      return newMessage;
    });

    this.setState({
      messages,
    }, () => {
      this.deselectAllMessages();
    });
  }

  markAsUnread() {
    const messages = this.state.messages.map((message) => {
      const newMessage = Object.assign({}, message);
      if (newMessage.isChecked && newMessage.status.toLowerCase() === 'read') {
        newMessage.status = 'Unread';
      }
      return newMessage;
    });

    this.setState({
      messages,
    }, () => {
      this.deselectAllMessages();
    });
  }

  deselectAllMessages() {
    const newMessages = this.state.messages.map((message) => {
      const newMessage = Object.assign({}, message);
      newMessage.isChecked = false;
      return newMessage;
    });

    this.setState({
      messages: newMessages,
      readToggled: false,
      unreadToggled: false,
      messageCount: 0,
    });
  }

  handleSort(key) {
    const sort = (this.state.sort.key === key)
      // key matches, update order
      ? { key, order: (this.state.sort.order + 1) % 2 }
      // key differs, start with 'asc' order
      : { key, order: 0 };

    const sortParam = (sort.order) ? 'DESC' : 'ASC'; // 1 = DESC, 0 = ASC

    const sortedData = getSortedData(this.state.messages, sort.key, sortParam);

    this.setState({
      sort,
      messages: sortedData,
    });
  }

  render() {
    const buttonTranslations = [
      'Select All',
      'Mark All As Read',
      'Mark As Read',
      'Mark As Unread',
      'Clear',
    ];

    const selectedTextTranslations = [
      'Message',
      'Messages',
      'Selected',
    ];

    return (
      <Page>
        <h2>TableMessages</h2>

        <p>Use this component for storing message data in a sortable table</p>

        <ReactSpecimen span={6}>
          <TableMessages
            totalMessages={this.state.totalMessages}
            dataList={this.state.messages}
            onChange={this.onChange}
            handleSort={this.handleSort}
            selectAllMessages={this.selectAllMessages}
            deselectAllMessages={this.deselectAllMessages}
            readToggled={this.state.readToggled}
            unreadToggled={this.state.unreadToggled}
            messageCount={this.state.messageCount}
            markAllAsRead={this.markAllAsRead}
            markAsRead={this.markAsRead}
            markAsUnread={this.markAsUnread}
            deleteMessage={this.deleteMessage}
            mapTableColumns={this.mapTableColumns}
            buttonTranslations={buttonTranslations}
            selectedTextTranslations={selectedTextTranslations}
            modalToggled={this.state.modalToggled}
            toggleModal={this.toggleModal}
            dangerAction={this.dangerAction}
            sort={this.state.sort}
          />
        </ReactSpecimen>

        <h3>Parameters</h3>

        <h4>Required Parameters</h4>
        <ul>
          <li><strong>totalMessages</strong>: total number of messages, before pagination</li>
          <li><strong>dataList</strong>: array of data to be displayed on a page in table</li>
          <li><strong>onChange</strong>: function to toggle or untoggle checkboxes</li>
          <li><strong>handleSort</strong>: function to toggle sortable columns</li>
          <li><strong>selectAllMessages</strong>: function that selects all messages for actions</li>
          <li><strong>deselectAllMessages</strong>: function that deselects all messages</li>
          <li><strong>readToggled</strong>: boolean to show &apos;Mark as Read&apos; button</li>
          <li><strong>unreadToggled</strong>: boolean to show &apos;Mark as Unread&apos; button</li>
          <li><strong>markAllAsRead</strong>: function to change all messages to read</li>
          <li><strong>markAsUnread</strong>: function to change messages to unread</li>
          <li><strong>markAsread</strong>: function to change messages to read</li>
          <li><strong>deleteMessage</strong>: function to delete message from list</li>
          <li><strong>mapTableColumns</strong>: function to map table row with columns and translations, if applicable</li>
          <li><strong>modalToggled</strong>: boolean to indicate whether the confirmation modal is visible</li>
          <li><strong>toggleModal</strong>: function to show the confirmation model</li>
          <li><strong>dangerAction</strong>: function to call if user confirms confirmation modal</li>
        </ul>

        <h4>Optional Parameters</h4>
        <ul>
          <li><strong>dateFormat</strong>: ISO standard string to format date, defaults to <em>MM/DD/YYYY</em></li>
          <li><strong>messageCount</strong>: number of messages selected</li>
          <li><strong>buttonTranslations</strong>: array of strings that are translations for button text</li>
          <li><strong>selectedTextTranslations</strong>: array of strings that are translations for selected messages text</li>
          <li><strong>triggerDrawer</strong>: function to fire when row clicked</li>
        </ul>

      </Page>
    );
  }
}

export default TableMessagesDoc;
