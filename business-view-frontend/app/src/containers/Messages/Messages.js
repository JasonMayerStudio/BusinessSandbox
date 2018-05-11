import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import counterpart from 'counterpart';
import unionWith from 'lodash/unionWith';
import isEqual from 'lodash/isEqual';
import uniqBy from 'lodash/uniqBy';
import orderBy from 'lodash/orderBy';

import Pagination from 'Components/pagination/Pagination.js';
import TableMessages from 'Components/table-messages/TableMessages.js';

import { normalizeMessages } from 'Selectors/messageSelectors';

import Listener from 'Utils/listener';
import { getSortedData } from 'Utils/tableUtils';

import {
  fetchMessages,
  fetchUpdateMessagesStatus,
  receiveMessagesUpdateSuccess,
} from '../../actions/messageActions';

/* eslint-disable global-require */
function initTranslations() {
  counterpart.registerTranslations('en-US', require('./translations/en-us.json'));
  counterpart.registerTranslations('en-GB', require('./translations/en-gb.json'));
  counterpart.registerTranslations('fr-CA', require('./translations/fr-ca.json'));
  counterpart.registerTranslations('zh-Hans', require('./translations/zh-Hans.json'));
  counterpart.registerTranslations('zh-Hant', require('./translations/zh-Hant.json'));
}
/* eslint-enable global-require */

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      totalMessages: [],
      sort: {
        key: undefined,
        order: 0,
      },
      currentPage: 1,
      perPage: 5,
      pageCount: 0,
      modalToggled: false,
    };

    this.attachBindings();
    this.attachListeners();
    initTranslations();
  }

  componentWillMount() {
    this.props.getMessages()
      .then(() => {
        this.setState({
          totalMessages: this.props.messages,
          pageCount: Math.ceil(this.props.messages.length / this.state.perPage),
          messages: this.props.messages.slice(0, this.state.perPage),
        });
      });
  }

  componentWillReceiveProps(newProps) {
    this.pagination = this.setupPaginator(newProps);
  }

  onChange(event) {
    const htmlId = event.target.id;
    const messageCount = [];
    const statuses = [];
    const messages = this.state.totalMessages.map((message) => {
      const newMessage = Object.assign({}, message);

      if (newMessage.id === Number(htmlId)) {
        newMessage.isChecked = !newMessage.isChecked;
      }

      if (newMessage.isChecked) {
        messageCount.push(newMessage);
        statuses.push(newMessage.status.toLowerCase());
      }

      return newMessage;
    });

    this.setState({
      messages: this.returnPagination([...messages]),
      totalMessages: [...messages],
      messageCount: messageCount.length,
    }, () => {
      this.auditNeededButtons(statuses);
    });
  }

  setupPaginator(props) {
    return props.messages ? props.messages.length > this.state.perPage : null;
  }

  attachBindings() {
    this.onChange = this.onChange.bind(this);
    this.markAsRead = this.markAsRead.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.markAsUnread = this.markAsUnread.bind(this);
    this.dangerAction = this.dangerAction.bind(this);
    this.deleteMessage = this.deleteMessage.bind(this);
    this.markAllAsRead = this.markAllAsRead.bind(this);
    this.triggerDrawer = this.triggerDrawer.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
    this.mapTableColumns = this.mapTableColumns.bind(this);
    this.returnPagination = this.returnPagination.bind(this);
    this.selectAllMessages = this.selectAllMessages.bind(this);
    this.auditNeededButtons = this.auditNeededButtons.bind(this);
    this.deselectAllMessages = this.deselectAllMessages.bind(this);
    this.markSingleMessageAsUnread = this.markSingleMessageAsUnread.bind(this);
  }

  attachListeners() {
    Listener.on('MARK_AS_UNREAD', this.markSingleMessageAsUnread);
    Listener.on('DELETE_MESSAGE', this.deleteMessage);
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

  get paginator() {
    if (this.pagination) {
      return (
        <Pagination
          handlePageClick={this.handlePageClick}
          pageCount={this.state.pageCount}
          currentPage={this.state.currentPage}
        />
      );
    }
    return false;
  }

  handlePageClick(data) {
    const selected = data.selected;
    const offset = Math.ceil(selected * this.state.perPage);

    this.setState({
      offset,
      currentPage: selected + 1,
      messages: this.state.totalMessages.slice(offset, offset + this.state.perPage),
    });
  }

  triggerDrawer(event, row) {
    if (event.target.classList.contains('checkbox') || event.target.classList.contains('checkbox-label')) {
      event.stopPropagation();
    } else {
      this.props.history.push(`/messages/${row.id}`);
      if (row.status.toLowerCase() === 'unread') {
        this.markAsRead(row);
      }
    }
  }

  mapTableColumns() {
    const status = 'status';
    const receivedDate = 'receivedDate';

    return (
      <tr>
        <th />
        <th>{counterpart('messageTable.type')}</th>
        <th>{counterpart('messageTable.message')}</th>
        <th />
        <th className="sort" onClick={() => this.handleSort(status)}>{counterpart('messageTable.readStatus')}</th>
        <th className="sort" onClick={() => this.handleSort(receivedDate)}>{counterpart('messageTable.received')}</th>
      </tr>
    );
  }

  auditNeededButtons(statuses) {
    const newStatuses = statuses.filter((status, position) => {
      return statuses.indexOf(status) === position;
    });

    if (newStatuses.length > 1) {
      this.setState({
        readToggled: true,
        unreadToggled: true,
      });
    } else if (newStatuses[0] === 'read') {
      this.setState({
        readToggled: true,
        unreadToggled: false,
      });
    } else if (newStatuses[0] === 'unread') {
      this.setState({
        readToggled: false,
        unreadToggled: true,
      });
    } else {
      this.setState({
        readToggled: false,
        unreadToggled: false,
        messageCount: 0,
      });
    }
  }

  markAllAsRead() {
    const newStatus = 'READ';
    const messages = this.state.totalMessages.map((message) => {
      const newMessage = Object.assign({}, message);
      newMessage.status = 'Read';
      return newMessage;
    });

    this.setState({
      totalMessages: messages,
      messages: this.returnPagination(messages),
    }, () => {
      this.props.updateMessages(messages);
      this.props.updateMessagesStatus(messages, newStatus)
        .then(() => {
          Listener.trigger('UPDATE_UNREAD_COUNT', null);
        });
    });
  }

  selectAllMessages() {
    const statuses = [];
    const newMessages = this.state.messages.map((message) => {
      const newMessage = Object.assign({}, message);
      newMessage.isChecked = true;

      if (newMessage.isChecked) {
        statuses.push(newMessage.status.toLowerCase());
      }
      return newMessage;
    });

    const newTotalMessages = orderBy(unionWith(newMessages, this.state.totalMessages, isEqual), 'id', 'asc');

    this.setState({
      messages: this.returnPagination(uniqBy(newTotalMessages, 'id')),
      totalMessages: uniqBy(newTotalMessages, 'id'),
      messageCount: newMessages.length,
    }, () => {
      this.auditNeededButtons(statuses);
    });
  }

  markAsRead(row) {
    const newStatus = 'READ';
    const messagesToUpdate = [];
    const statuses = [];

    const messages = this.state.totalMessages.map((message) => {
      let newMessage;
      if (row.id !== message.id) {
        newMessage = Object.assign({}, message);
        if (newMessage.isChecked && newMessage.status.toLowerCase() === 'unread') {
          if (row === null || row.target) {
            newMessage.status = 'Read';
            messagesToUpdate.push(newMessage);
          }
        }
      } else if (row !== null && row.status.toLowerCase() === 'unread') {
        newMessage = row;
        newMessage.status = 'Read';
        messagesToUpdate.push(newMessage);
      }

      if (newMessage.isChecked) {
        statuses.push(newMessage.status.toLowerCase());
      }

      return newMessage;
    });

    this.setState({
      totalMessages: messages,
      messages: this.returnPagination(messages),
    }, () => {
      this.props.updateMessages(messages);
      this.props.updateMessagesStatus(messagesToUpdate, newStatus)
        .then(() => {
          Listener.trigger('UPDATE_UNREAD_COUNT', null);
          this.auditNeededButtons(statuses);
        });
    });
  }

  returnPagination(messages) {
    return this.state.offset ?
           messages.slice(this.state.offset, this.state.offset + this.state.perPage) :
           messages.slice(0, this.state.perPage);
  }

  markSingleMessageAsUnread(row) {
    const newStatus = 'UNREAD';
    const messagesToUpdate = [];
    const statuses = [];
    const messages = this.state.totalMessages.map((message) => {
      const newMessage = row.id === message.id ? Object.assign({}, row) : Object.assign({}, message);
      if ((newMessage.isChecked && newMessage.status.toLowerCase() === 'read') || row.id === message.id) {
        newMessage.status = 'Unread';
        newMessage.isChecked = false;
        messagesToUpdate.push(newMessage);
      }

      if (newMessage.isChecked) {
        statuses.push(newMessage.status.toLowerCase());
      }

      return newMessage;
    });

    this.setState({
      totalMessages: messages,
      messages: this.returnPagination(messages),
    }, () => {
      this.props.updateMessages(messages);
      this.props.updateMessagesStatus(messagesToUpdate, newStatus)
        .then(() => {
          Listener.trigger('UPDATE_UNREAD_COUNT', null);
          this.auditNeededButtons(statuses);
        });
    });
  }

  markAsUnread(row) {
    const newStatus = 'UNREAD';
    const messagesToUpdate = [];
    const statuses = [];
    const messages = this.state.totalMessages.map((message) => {
      const newMessage = row.id === message.id ? Object.assign({}, row) : Object.assign({}, message);
      if ((newMessage.isChecked && newMessage.status.toLowerCase() === 'read') || row.id === message.id) {
        newMessage.status = 'Unread';
        newMessage.isChecked = true;
        messagesToUpdate.push(newMessage);
      }

      if (newMessage.isChecked) {
        statuses.push(newMessage.status.toLowerCase());
      }

      return newMessage;
    });

    this.setState({
      totalMessages: messages,
      messages: this.returnPagination(messages),
    }, () => {
      this.props.updateMessages(messages);
      this.props.updateMessagesStatus(messagesToUpdate, newStatus)
        .then(() => {
          Listener.trigger('UPDATE_UNREAD_COUNT', null);
          this.auditNeededButtons(statuses);
        });
    });
  }

  deselectAllMessages() {
    const newMessages = this.state.totalMessages.map((message) => {
      const newMessage = Object.assign({}, message);
      newMessage.isChecked = false;
      return newMessage;
    });

    this.setState({
      totalMessages: newMessages,
      messages: this.returnPagination(newMessages),
      readToggled: false,
      unreadToggled: false,
      messageCount: 0,
    });
  }

  deleteMessage(row) {
    const newStatus = 'DELETED';
    const messagesToUpdate = [];
    const messages = this.state.totalMessages.filter((message) => {
      let newMessage;
      if (message.isChecked) {
        messagesToUpdate.push(newMessage);
      } else if (row !== null && row.id === message.id) {
        newMessage = row || message;
        messagesToUpdate.push(newMessage);
      }

      return !message.isChecked && message.id !== row.id;
    });

    this.setState({
      totalMessages: messages,
      messages: this.returnPagination(messages),
    }, () => {
      this.props.updateMessages(messages);
      this.props.updateMessagesStatus(messagesToUpdate, newStatus)
        .then(() => {
          this.deselectAllMessages();
        });
    });
  }

  handleSort(key) {
    const sort = (this.state.sort.key === key)
      // key matches, update order
      ? { key, order: (this.state.sort.order + 1) % 2 }
      // key differs, start with 'asc' order
      : { key, order: 1 };

    const sortParam = (sort.order) ? 'DESC' : 'ASC'; // 1 = DESC, 0 = ASC

    const sortedData = getSortedData(this.state.totalMessages, sort.key, sortParam);

    this.setState({
      sort,
      totalMessages: sortedData,
      messages: this.returnPagination(sortedData),
    });
  }

  render() {
    const buttonTranslations = [
      counterpart('messageButtons.selectAll'),
      counterpart('messageButtons.markAllAsRead'),
      counterpart('messageButtons.markAsRead'),
      counterpart('messageButtons.markAsUnread'),
      counterpart('messageButtons.clear'),
    ];

    const selectedTextTranslations = [
      counterpart('selectedText.message'),
      counterpart('selectedText.messages'),
      counterpart('selectedText.selected'),
    ];

    // Good ole vanilla JS approach as the pagination elements are buried in ReactPaginates's source code
    const paginator = document.querySelector('.previous');
    if (paginator !== null) {
      paginator.setAttribute('data-page-count', `Page ${this.state.currentPage} of ${this.state.pageCount}`);
    }

    return (
      <article className="padded">
        <div className="message-center-header-wrapper">
          <h1 className="message-center-header">{counterpart('messageCenter.title')}</h1>
          <div className="show-xs">{this.state.totalMessages.length} Messages</div>
        </div>
        <TableMessages
          dataList={this.state.messages}
          totalMessages={this.state.totalMessages}
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
          triggerDrawer={this.triggerDrawer}
          paginator={this.paginator}
          mapTableColumns={this.mapTableColumns}
          buttonTranslations={buttonTranslations}
          selectedTextTranslations={selectedTextTranslations}
          modalToggled={this.state.modalToggled}
          toggleModal={this.toggleModal}
          dangerAction={this.dangerAction}
          sort={this.state.sort}
        />
      </article>
    );
  }
}

Messages.propTypes = {
  getMessages: PropTypes.func.isRequired,
  messages: PropTypes.array.isRequired,
  updateMessagesStatus: PropTypes.func.isRequired,
  updateMessages: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    messages: normalizeMessages(state.messages),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMessages: () => dispatch(fetchMessages()),
    updateMessagesStatus: (messagesToUpdate, newStatus) => dispatch(fetchUpdateMessagesStatus(messagesToUpdate, newStatus)),
    updateMessages: (updatedMessages) => dispatch(receiveMessagesUpdateSuccess(updatedMessages)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
