/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

/**
 * Import components to be tested
 */
import TableMessages from './TableMessages';

const data = [
  {
    id: 1,
    subject: 'Message subject',
    body: '<b>Message body</b> can contain HTML',
    status: 'Unread',
    type: 'System message',
    receivedDate: '2017-09-26 13:24:40.622144',
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
    receivedDate: '2017-09-26 13:24:40.622144',
    isChecked: false,
  },
  {
    id: 4,
    subject: 'Message subject',
    body: '<b>Message body</b> can contain HTML',
    status: 'Unread',
    type: 'System message',
    receivedDate: '2017-09-26 13:24:40.622144',
    isChecked: false,
  },
];

function compare(a, b) {
  if (a.status < b.status) {
    return -1;
  }

  if (a.status > b.status) {
    return 1;
  }

  return 0;
}

function mapTableColumns(wrapper) {
  const status = 'status';
  const receivedDate = 'receivedDate';

  return (
    <tr>
      <th />
      <th>Type</th>
      <th>Message</th>
      <th />
      <th className="sort" onClick={() => wrapper.props().handleSort(status)}>Read Status</th>
      <th className="sort" onClick={() => wrapper.props().handleSort(receivedDate)}>Received</th>
    </tr>
  );
}

/**
 * The actual component unit test
 */
describe('TableMessages', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        totalMessages: data,
        dataList: data,
        onChange: () => {},
        handleSort: () => {},
        selectAllMessages: () => {},
        deselectAllMessages: () => {},
        markAllAsRead: () => {},
        markAsRead: () => {},
        markAsUnread: () => {},
        deleteMessage: () => {},
        readToggled: false,
        unreadToggled: false,
        messageCount: 0,
        preferences: {},
        mapTableColumns: () => {},
        modalToggled: false,
        toggleModal: () => {},
        dangerAction: () => {},
        cancelButtonText: '',
        dangerButtonText: '',
      };
      wrapper = shallow(<TableMessages {...props} />);
    });

    it('should display a TableMessages', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });

  describe('props tests', function () {
    let props;
    let onChangeHandler;
    let sortHandler;
    let selectAllMessagesHandler;
    let deselectAllMessagesHandler;
    let markAllAsReadHandler;
    let markAsReadHandler;
    let markAsUnreadHandler;
    let dangerActionHandler;
    let wrapper;
    let sort;

    beforeEach(function () {
      sort = {
        key: 'receivedDate', // last column
        order: 1,            // 1 = DESC
      };

      onChangeHandler = sinon.spy();
      sortHandler = sinon.spy();
      selectAllMessagesHandler = sinon.spy();
      deselectAllMessagesHandler = sinon.spy();
      markAllAsReadHandler = sinon.spy();
      markAsReadHandler = sinon.spy();
      markAsUnreadHandler = sinon.spy();
      dangerActionHandler = sinon.spy();

      props = {
        totalMessages: data,
        dataList: data,
        onChange: onChangeHandler,
        handleSort: sortHandler,
        selectAllMessages: selectAllMessagesHandler,
        deselectAllMessages: deselectAllMessagesHandler,
        markAllAsRead: markAllAsReadHandler,
        markAsRead: markAsReadHandler,
        markAsUnread: markAsUnreadHandler,
        readToggled: false,
        unreadToggled: false,
        messageCount: 2,
        preferences: {
          language: 'en-US',
          dateFormat: 'MM/DD/YYYY',
        },
        mapTableColumns: () => mapTableColumns(wrapper),
        modalToggled: false,
        toggleModal: () => {},
        dangerAction: dangerActionHandler,
        cancelButtonText: 'Cancel',
        dangerButtonText: 'Delete',
        sort,
      };

      wrapper = mount(<TableMessages {...props} />);
    });

    it('should do have the same amount of messages as data', function () {
      expect(wrapper.props().dataList).to.be.lengthOf(wrapper.props().dataList.length);
    });

    it('should show two buttons if only read items are selected', function () {
      wrapper.setProps({ readToggled: true });
      const footerTarget = wrapper.find('.pure-table__footer');
      expect(footerTarget.find('.button')).to.have.lengthOf(2);
    });

    it('should show two buttons if only unread items are selected', function () {
      wrapper.setProps({ unreadToggled: true });
      const footerTarget = wrapper.find('.pure-table__footer');
      expect(footerTarget.find('.button')).to.have.lengthOf(2);
    });

    it('should sort when clicked on header item from table', function () {
      wrapper.props().dataList.sort(compare);
      expect(wrapper.props().dataList[0].status).to.equal('Read');
    });

    it('should select all messages', function () {
      const selectAllTarget = wrapper.find('.select-all');
      const newData = wrapper.props().dataList.map((message) => {
        const newMessage = Object.assign({}, message);
        newMessage.isChecked = true;

        expect(newMessage.isChecked).to.be.true;
        return newMessage;
      });

      selectAllTarget.simulate('click');

      expect(selectAllMessagesHandler.calledOnce).to.be.true;

      wrapper.setProps({ dataList: newData });
    });

    it('should deselect all messages', function () {
      wrapper.setProps({ unreadToggled: true, readToggled: true });
      const clearTarget = wrapper.find('.clear-button');
      const newData = wrapper.props().dataList.map((message) => {
        const newMessage = Object.assign({}, message);
        newMessage.isChecked = false;
        expect(newMessage.isChecked).to.be.false;
        return newMessage;
      });

      clearTarget.simulate('click');

      expect(deselectAllMessagesHandler.calledOnce).to.be.true;

      wrapper.setProps({ dataList: newData });
    });

    it('should add the correct sorting classes to the specified sort column', function () {
      const firstColumnHeader = wrapper.find('thead tr th').last();

      expect(firstColumnHeader.hasClass('sort')).to.be.true;
      expect(firstColumnHeader.hasClass('sort-desc')).to.be.true;
    });

    it('should delete a message', function () {
      wrapper.setProps({ unreadToggled: true, modalToggled: true });
      const dataList = wrapper.props().dataList.map((message) => {
        const newMessage = Object.assign({}, message);

        if (newMessage.id === 1) {
          newMessage.isChecked = true;
        }
        return newMessage;
      });

      const newData = dataList.filter((message) => {
        return !message.isChecked;
      });

      wrapper.setProps({ dataList: newData });

      expect(wrapper.props().dataList).to.have.lengthOf(3);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
