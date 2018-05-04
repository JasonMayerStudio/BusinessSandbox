/* eslint-disable func-names, prefer-arrow-callback, dot-notation, no-unused-expressions */
import { expect } from 'chai';
import moxios from 'moxios';
import sinon from 'sinon';

// SUT
import {
  getMessages,
  getMessageCount,
  updateMessagesStatus,
} from './messageApi';

describe('messageApi', function () {
  const callbackDelay = 5;

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  describe('getMessages', function () {
    it('should make an API call to get messages', function (done) {
      const expectedURL = 'messages';
      moxios.stubRequest(expectedURL, {});
      const onFulfilled = sinon.spy();

      getMessages()
        .then(onFulfilled);

      moxios.wait(function () {
        const request = moxios.requests.mostRecent();
        expect(request.url).to.contain(expectedURL);
        done();
      }, callbackDelay);
    });
  });

  describe('getMessageCount', function () {
    it('should make an API call to get message count', function (done) {
      const expectedURL = 'messages/counts';
      moxios.stubRequest(expectedURL, {});
      const onFulfilled = sinon.spy();

      getMessageCount()
        .then(onFulfilled);

      moxios.wait(function () {
        const request = moxios.requests.mostRecent();
        expect(request.url).to.contain(expectedURL);
        done();
      }, callbackDelay);
    });
  });

  describe('updateMessagesStatus', function () {
    it('should make an API call to update message status', function (done) {
      const expectedURL = 'messages/status';
      moxios.stubRequest(expectedURL, {});
      const onFulfilled = sinon.spy();

      const messagesToUpdate = [{ id: 3 }];
      const newStatus = 'READ';
      const expectedRequestBody = JSON.stringify({
        messageIds: [messagesToUpdate[0].id],
        status: newStatus,
      });
      updateMessagesStatus(messagesToUpdate, newStatus)
        .then(onFulfilled);

      moxios.wait(function () {
        const request = moxios.requests.mostRecent();
        expect(request.url).to.contain(expectedURL);
        expect(request.config.method).to.equal('put');
        expect(request.config.data).to.eql(expectedRequestBody);
        done();
      }, callbackDelay);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, dot-notation */
