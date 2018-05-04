/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */
import { expect } from 'chai';
import sinon from 'sinon';
import moxios from 'moxios';

import * as messageActions from './messageActions';
import * as types from './actionTypes';

describe('Message actions', function () {
  const callbackDelay = 5;

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('should create an action to request all messages', function () {
    // arrange
    const expectedAction = {
      type: types.REQUEST_MESSAGES,
    };

    // act
    const action = messageActions.requestMessages();

    // assess
    expect(action).to.eql(expectedAction);
  });

  it('should create an action to get all messages successfully', function () {
    // arrange
    const results = [
      {
        id: 1,
        subject: 'Global Payments Christmas Party',
        body: 'You\'ve been invited to the GP Christmas Party! Tapas & drinks provided.',
        status: 'Unread',
        type: 'Invitations',
        receivedDate: '2017-11-29 19:57:32.887133',
        attachments: [
          {
            name: 'GP-Xmas-Party-Invite.jpg',
            link: 'http://www.globalpaymentsinc.com/images/GP-Xmas-Party-Invite.jpg',
          },
        ],
      },
      {
        id: 2,
        subject: 'Is your refrigerator running?',
        body: 'Better go and catch it!',
        status: 'Read',
        type: 'Jokes',
        receivedDate: '2017-12-28 14:50:32.887133',
      },
      {
        id: 3,
        subject: 'Comment allez vous?',
        body: 'Parlez-vous un peu français?',
        status: 'Unread',
        type: 'Spam',
        receivedDate: '2017-11-29 19:57:32.887133',
      },
    ];

    const expectedAction = {
      type: types.RECEIVE_MESSAGES_SUCCESS,
      messages: results,
    };

    // act
    const action = messageActions.receiveMessagesSuccess(results);

    // assess
    expect(action).to.eql(expectedAction);
  });

  it('should handle failing to get messages', function () {
    // arrange
    const error = 'Failed to fetch messages.';
    const expectedAction = {
      type: types.RECEIVE_MESSAGES_FAILURE,
      error,
    };

    // act
    const action = messageActions.receiveMessagesFailure(error);

    // assess
    expect(action).to.eql(expectedAction);
  });

  it('should dispatch a series of actions to fetch all messages from the database', function (done) {
    const messages = [
      {
        id: 1,
        subject: 'Foo',
        body: 'Bar',
        type: 'System Message',
        status: 'Unread',
        receivedDate: Date.now(),
      },
      {
        id: 2,
        subject: 'Baz',
        body: 'Quux',
        type: 'System Message',
        status: 'Read',
        receivedDate: Date.now(),
      },
    ];

    const dispatch = sinon.spy();

    moxios.withMock(() => {
      messageActions.fetchMessages()(dispatch);
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
            data: messages,
          },
        })
        .then(() => {
          expect(request.url).to.eql('\'http://localhost:3009/\'messages');
          expect(request.config.method).to.eql('get');
          expect(dispatch.called).to.be.true;
          done();
        });
      }, callbackDelay);
    });
  });

  it('should create an action to update message status successfully', function () {
    // arrange
    const expectedAction = {
      type: types.REQUEST_MESSAGES_UPDATE_STATUS,
    };

    // action
    const action = messageActions.requestUpdateMessagesStatus();

    // assess
    expect(action).to.eql(expectedAction);
  });

  it('should create an action to update messages status successfully', function () {
    // arrange
    const messages = [
      {
        id: 1,
        subject: 'Global Payments Christmas Party',
        body: 'You\'ve been invited to the GP Christmas Party! Tapas & drinks provided.',
        status: 'Unread',
        type: 'Invitations',
        receivedDate: '2017-11-29 19:57:32.887133',
        attachments: [
          {
            name: 'GP-Xmas-Party-Invite.jpg',
            link: 'http://www.globalpaymentsinc.com/images/GP-Xmas-Party-Invite.jpg',
          },
        ],
      },
      {
        id: 3,
        subject: 'Comment allez vous?',
        body: 'Parlez-vous un peu français?',
        status: 'Unread',
        type: 'Spam',
        receivedDate: '2017-11-29 19:57:32.887133',
      },
    ];

    const expectedAction = {
      type: types.RECEIVE_MESSAGES_UPDATE_STATUS_SUCCESS,
      messages,
    };

    // act
    const action = messageActions.receiveMessagesUpdateSuccess(messages);

    // assess
    expect(action).to.eql(expectedAction);
  });

  it('should create an action to handle failing to update messages', function () {
    // arrange
    const error = 'Failed to update messages.';
    const expectedAction = {
      type: types.RECEIVE_MESSAGES_UPDATE_STATUS_FAILURE,
      error,
    };

    // act
    const action = messageActions.receiveMessagesUpdateStatusFailure(error);

    // assess
    expect(action).to.eql(expectedAction);
  });

  it('should create an action to update all messages', function () {
    // arrange
    const updatedMessages = [
      {
        id: 1,
        subject: 'Global Payments Christmas Party',
        body: 'You\'ve been invited to the GP Christmas Party! Tapas & drinks provided.',
        status: 'Unread',
        type: 'Invitations',
        receivedDate: '2017-11-29 19:57:32.887133',
        attachments: [
          {
            name: 'GP-Xmas-Party-Invite.jpg',
            link: 'http://www.globalpaymentsinc.com/images/GP-Xmas-Party-Invite.jpg',
          },
        ],
      },
      {
        id: 2,
        subject: 'Is your refrigerator running?',
        body: 'Better go and catch it!',
        status: 'Read',
        type: 'Jokes',
        receivedDate: '2017-12-28 14:50:32.887133',
      },
      {
        id: 3,
        subject: 'Comment allez vous?',
        body: 'Parlez-vous un peu français?',
        status: 'Unread',
        type: 'Spam',
        receivedDate: '2017-11-29 19:57:32.887133',
      },
    ];

    const expectedAction = {
      type: types.RECEIVE_MESSAGES_UPDATE_STATUS_SUCCESS,
      messages: updatedMessages,
    };

    // act
    const action = messageActions.receiveMessagesUpdateSuccess(updatedMessages);

    // assess
    expect(action).to.eql(expectedAction);
  });

  it('should dispatch a series of actions to update message statuses', function (done) {
    const messages = [
      {
        id: 1,
        subject: 'Foo',
        body: 'Bar',
        type: 'System Message',
        status: 'Unread',
        receivedDate: Date.now(),
      },
      {
        id: 2,
        subject: 'Baz',
        body: 'Quux',
        type: 'System Message',
        status: 'Read',
        receivedDate: Date.now(),
      },
    ];

    const newStatus = 'UNREAD';

    const expectedResults = '{"messageIds":[1,2],"status":"UNREAD"}';

    const dispatch = sinon.spy();

    moxios.withMock(() => {
      messageActions.fetchUpdateMessagesStatus(messages, newStatus)(dispatch);
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
            data: messages,
          },
        })
        .then(() => {
          expect(request.url).to.eql('\'http://localhost:3009/\'messages/status');
          expect(request.config.method).to.eql('put');
          expect(request.config.data).to.eql(expectedResults);
          expect(dispatch.called).to.be.true;
          done();
        });
      }, callbackDelay);
    });
  });

  it('should create an action to request message count', function () {
    // arrange
    const expectedAction = {
      type: types.REQUEST_MESSAGE_COUNT,
    };

    // act
    const action = messageActions.requestMessageCount();

    // assess
    expect(action).to.eql(expectedAction);
  });

  it('should create an action to successfully fetch message count', function () {
    // arrange
    const count = {
      read: 25,
      unread: 5,
    };

    const expectedAction = {
      type: types.RECEIVE_MESSAGE_COUNT_SUCCESS,
      count,
    };

    // act
    const action = messageActions.receiveMessageCountSuccess(count);

    // assess
    expect(action).to.eql(expectedAction);
  });

  it('should create an action to handle failing to fetch messages', function () {
    // arrange
    const error = 'Failed to fetch message count.';

    const expectedAction = {
      type: types.RECEIVE_MESSAGE_COUNT_FAILURE,
      error,
    };

    // act
    const action = messageActions.receiveMessageCountFailure(error);

    // assess
    expect(action).to.eql(expectedAction);
  });

  it('should dispatch a series of actions to fetch message count', function (done) {
    const count = {
      read: 25,
      unread: 5,
    };

    const dispatch = sinon.spy();

    moxios.withMock(() => {
      messageActions.fetchMessageCount()(dispatch);
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
            data: count,
          },
        })
        .then(() => {
          expect(request.url).to.eql('\'http://localhost:3009/\'messages/counts');
          expect(request.config.method).to.eql('get');
          expect(dispatch.called).to.be.true;
          done();
        });
      }, callbackDelay);
    });
  });
});
/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
