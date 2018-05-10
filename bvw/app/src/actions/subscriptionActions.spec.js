/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */
import { expect } from 'chai';
import sinon from 'sinon';
import moxios from 'moxios';

import * as subscriptionActions from './subscriptionActions';
import * as types from './actionTypes';
import { filterRequestPayloadArray } from '../api/apiHelpers';

describe('Subscription actions', function () {
  const callbackDelay = 5;

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.install();
  });

  it('should create an action to request user email subscriptions', function () {
    const expectedAction = {
      type: types.REQUEST_USER_SUBSCRIPTIONS,
    };

    const action = subscriptionActions.requestUserEmailSubscriptions();

    expect(action).to.eql(expectedAction);
  });

  it('should create an action to successfully receive user email subscriptions', function () {
    const subscriptions = [
      {
        subscriptionId: 1,
        subscribed: true,
        displayName: 'Latest news and marketing information from Global Payments',
        category: 'Global Payments',
        details: 'Longer version with more extendedDescription of: Latest news and marketing information from Global Payments',
        subscriptionKey: 'latestNews',
        categoryKey: null,
      },
      {
        subscriptionId: 2,
        subscribed: true,
        displayName: 'New Statements',
        category: 'Businessview Activity Alerts',
        details: 'Longer version with more extendedDescription of: New Statements',
        subscriptionKey: 'newStatements',
        categoryKey: null,
      },
      {
        subscriptionId: 3,
        subscribed: true,
        displayName: 'New Reports',
        category: 'Businessview Activity Alerts',
        details: 'Longer version with more extendedDescription of: New Reports',
        subscriptionKey: 'newReports',
        categoryKey: null,
      },
    ];

    const expectedAction = {
      type: types.RECEIVE_USER_SUBSCRIPTIONS_SUCCESS,
      subscriptions,
    };

    const action = subscriptionActions.receiveUserEmailSubscriptionsSuccess(subscriptions);

    expect(action).to.eql(expectedAction);
  });

  it('should create an action to handle failure to receive user email subscriptions', function () {
    const error = 'Failed to receive user email subscriptions.';

    const expectedAction = {
      type: types.RECEIVE_USER_SUBSCRIPTIONS_FAILURE,
      error,
    };

    const action = subscriptionActions.receiveUserEmailSubscriptionsFailure(error);

    expect(action).to.eql(expectedAction);
  });

  it('should create a series of actions that successfully receive user email subscriptions from the database', function (done) {
    const subscriptions = [
      {
        subscriptionId: 1,
        subscribed: true,
        displayName: 'Latest news and marketing information from Global Payments',
        category: 'Global Payments',
        details: 'Longer version with more extendedDescription of: Latest news and marketing information from Global Payments',
        subscriptionKey: 'latestNews',
        categoryKey: null,
      },
      {
        subscriptionId: 2,
        subscribed: true,
        displayName: 'New Statements',
        category: 'Businessview Activity Alerts',
        details: 'Longer version with more extendedDescription of: New Statements',
        subscriptionKey: 'newStatements',
        categoryKey: null,
      },
      {
        subscriptionId: 3,
        subscribed: true,
        displayName: 'New Reports',
        category: 'Businessview Activity Alerts',
        details: 'Longer version with more extendedDescription of: New Reports',
        subscriptionKey: 'newReports',
        categoryKey: null,
      },
    ];

    const userId = 1;

    const dispatch = sinon.spy();

    moxios.withMock(() => {
      subscriptionActions.getUserEmailSubscriptions(userId)(dispatch);
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
            data: subscriptions,
          },
        })
        .then(() => {
          expect(request.url).to.eql('\'http://localhost:3009/\'profile/subscriptions/1');
          expect(request.config.method).to.eql('get');
          done();
        });
      }, callbackDelay);
    });
  });

  it('should create an action to request to save new user email subscriptions', function () {
    const expectedAction = {
      type: types.REQUEST_SAVE_USER_SUBSCRIPTIONS,
    };

    const action = subscriptionActions.requestSaveUserEmailSubscriptions();

    expect(action).to.eql(expectedAction);
  });

  it('should create an action to successfully save new user email subscriptions', function () {
    const newSubscriptions = [
      {
        subscriptionId: 1,
        subscribed: false,
        displayName: 'Latest news and marketing information from Global Payments',
        category: 'Global Payments',
        details: 'Longer version with more extendedDescription of: Latest news and marketing information from Global Payments',
        subscriptionKey: 'latestNews',
        categoryKey: null,
      },
      {
        subscriptionId: 2,
        subscribed: true,
        displayName: 'New Statements',
        category: 'Businessview Activity Alerts',
        details: 'Longer version with more extendedDescription of: New Statements',
        subscriptionKey: 'newStatements',
        categoryKey: null,
      },
      {
        subscriptionId: 3,
        subscribed: true,
        displayName: 'New Reports',
        category: 'Businessview Activity Alerts',
        details: 'Longer version with more extendedDescription of: New Reports',
        subscriptionKey: 'newReports',
        categoryKey: null,
      },
    ];

    const expectedAction = {
      type: types.RECEIVE_SAVE_USER_SUBSCRIPTIONS_SUCCESS,
      subscriptions: newSubscriptions,
    };

    const action = subscriptionActions.receiveSavedUserEmailSubscriptionsSuccess(newSubscriptions);

    expect(action).to.eql(expectedAction);
  });

  it('should create an action to handle failure of saving user email subscriptions', function () {
    const error = 'Failure to update user email subscriptions';

    const expectedAction = {
      type: types.RECEIVE_SAVE_USER_SUBSCRIPTIONS_FAILURE,
      error,
    };

    const action = subscriptionActions.receiveSavedUserEmailSubscriptionsFailure(error);

    expect(action).to.eql(expectedAction);
  });

  it('should create a series of actions to successfully update user email subscriptions in the database', function (done) {
    const userId = 1;

    const subscriptions = {
      updateSubscription:
      [
        {
          subscriptionId: 1,
          subscribed: false,
          displayName: 'Latest news and marketing information from Global Payments',
          category: 'Global Payments',
          details: 'Longer version with more extendedDescription of: Latest news and marketing information from Global Payments',
          subscriptionKey: 'latestNews',
          categoryKey: null,
        },
        {
          subscriptionId: 2,
          subscribed: true,
          displayName: 'New Statements',
          category: 'Businessview Activity Alerts',
          details: 'Longer version with more extendedDescription of: New Statements',
          subscriptionKey: 'newStatements',
          categoryKey: null,
        },
        {
          subscriptionId: 3,
          subscribed: true,
          displayName: 'New Reports',
          category: 'Businessview Activity Alerts',
          details: 'Longer version with more extendedDescription of: New Reports',
          subscriptionKey: 'newReports',
          categoryKey: null,
        },
      ],
      userId,
    };

    const allowedKeys = [
      'subscribed',
      'subscriptionId',
    ];

    const filteredSubscriptions = filterRequestPayloadArray(subscriptions.updateSubscription, allowedKeys);

    const expectedResults = JSON.stringify({ updateSubscription: filteredSubscriptions, userId });

    const dispatch = sinon.spy();

    moxios.withMock(() => {
      subscriptionActions.saveUserSubscriptions(subscriptions, userId)(dispatch);
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
            data: subscriptions,
          },
        })
        .then(() => {
          expect(request.url).to.eql('\'http://localhost:3009/\'profile/subscriptions/1');
          expect(request.config.method).to.eql('put');
          expect(request.config.data).to.eql(expectedResults);
          done();
        });
      }, callbackDelay);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
