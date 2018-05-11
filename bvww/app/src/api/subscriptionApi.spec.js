/* eslint-disable func-names, prefer-arrow-callback, dot-notation, no-unused-expressions */
import { expect } from 'chai';
import moxios from 'moxios';
import sinon from 'sinon';

// SUT
import {
  getSubscriptions,
  saveSubscriptions,
} from './subscriptionApi';

describe('subscriptionApi', function () {
  const callbackDelay = 5;

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  describe('getSubscriptions', function () {
    it('should make an API call to get subscriptions by user ID', function (done) {
      const userId = 12;
      const expectedURL = `profile/subscriptions/${userId}`;
      const expectedUrlRegex = /profile\/subscriptions\/12$/;
      moxios.stubRequest(expectedURL, {});
      const onFulfilled = sinon.spy();

      getSubscriptions(userId)
        .then(onFulfilled);

      moxios.wait(function () {
        const request = moxios.requests.mostRecent();
        expect(request.url).to.match(expectedUrlRegex);
        done();
      }, callbackDelay);
    });
  });

  describe('saveSubscriptions', function () {
    it('should make an API call to update the list of selected products', function (done) {
      const userId = 13;
      const subs = {
        userId,
        updateSubscription: [
          {
            subscriptionId: 1,
            subscribed: true,
            displayName: 'Latest news and marketing information from Global Payments',
            category: 'Global Payments',
            details: 'Longer version with more extendedDescription of: Latest news and marketing information from Global Payments',
            subscriptionKey: 'latestNews',
            categoryKey: 'global_payments',
          },
          {
            subscriptionId: 2,
            subscribed: true,
            displayName: 'New Statements',
            category: 'Businessview Activity Alerts',
            details: 'Longer version with more extendedDescription of: New Statements',
            subscriptionKey: 'newStatements',
            categoryKey: 'businessview_activity_alerts',
          },
          {
            subscriptionId: 3,
            subscribed: false,
            displayName: 'New Reports',
            category: 'Businessview Activity Alerts',
            details: 'Longer version with more extendedDescription of: New Reports',
            subscriptionKey: 'newReports',
            categoryKey: 'businessview_activity_alerts',
          },
        ],
      };
      const expectedURL = `profile/subscriptions/${userId}`;
      const expectedUrlRegex = /profile\/subscriptions\/13$/;
      const expectedRequestBody = JSON.stringify({
        userId,
        updateSubscription: [
          {
            subscriptionId: 1,
            subscribed: true,
          },
          {
            subscriptionId: 2,
            subscribed: true,
          },
          {
            subscriptionId: 3,
            subscribed: false,
          },
        ],
      });
      moxios.stubRequest(expectedURL, {});
      const onFulfilled = sinon.spy();

      saveSubscriptions(subs)
        .then(onFulfilled);

      moxios.wait(function () {
        const request = moxios.requests.mostRecent();
        expect(request.url).to.match(expectedUrlRegex);
        expect(request.config.method).to.equal('put');
        expect(request.config.data).to.eql(expectedRequestBody);
        done();
      }, callbackDelay);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, dot-notation */
