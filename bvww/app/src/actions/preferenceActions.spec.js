/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */
import { expect } from 'chai';
import sinon from 'sinon';
import moxios from 'moxios';

import * as preferenceActions from './preferenceActions';
import * as types from './actionTypes';

describe('Preference actions', function () {
  const callbackDelay = 5;

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('should create an action to request user preferences', function () {
    // arrange
    const expectedAction = {
      type: types.REQUEST_USER_PREFERENCES,
    };

    // act
    const action = preferenceActions.requestUserPreferences();

    // assess
    expect(action).to.eql(expectedAction);
  });

  it('should create an action to receive user preferences successfully', function () {
    // arrange
    const preferences = {
      language: 'en-US',
      dateFormat: 'DD/MM/YYYY',
      timeFormat: 'hh:mm a',
      firstName: 'Ricky',
      lastName: 'Bobby',
    };

    const expectedAction = {
      type: types.RECEIVE_USER_PREFERENCES_SUCCESS,
      preferences,
    };

    // act
    const action = preferenceActions.receiveUserPreferencesSuccess(preferences);

    // assess
    expect(action).to.eql(expectedAction);
  });

  it('should create an action for failure to receive user preferences successfully', function () {
    // arrange
    const error = 'Failed to fetch user preferences';

    const expectedAction = {
      type: types.RECEIVE_USER_PREFERENCES_FAILURE,
      error,
    };

    // act
    const action = preferenceActions.receiveUserPreferencesFailure(error);

    // assess
    expect(action).to.eql(expectedAction);
  });

  it('should dispatch a series of actions to fetch user preferences from the database', function (done) {
    const preferences = {
      language: 'fr-CA',
      dateFormat: 'DD/MM/YYYY',
      timeFormat: 'HH:mm',
      firstName: 'Jacques',
      lastName: 'Cousteau',
    };

    const userId = 1;

    const dispatch = sinon.spy();

    moxios.withMock(() => {
      preferenceActions.getUserPreferences(userId)(dispatch);
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
            data: preferences,
          },
        })
        .then(() => {
          expect(request.url).to.eql('\'http://localhost:3009/\'profile/preferences/1');
          expect(request.config.method).to.eql('get');
          expect(dispatch.called).to.be.true;

          done();
        });
      }, callbackDelay);
    });
  });

  it('should create an action to request to save updated user preferences', function () {
    // arrange
    const expectedAction = {
      type: types.REQUEST_SAVE_USER_PREFERENCES,
    };

    // act
    const action = preferenceActions.requestSaveUserPreferences();

    // assess
    expect(action).to.eql(expectedAction);
  });

  it('should create an action to successfully receive newly updated user preferences', function () {
    const oldPreferences = {
      language: 'zh-Hans',
      dateFormat: 'DD/MM/YYYY',
      timeFormat: 'HH:mm',
      firstName: 'Lucy',
      lastName: 'Liu',
    };

    const newPreferences = Object.assign({}, oldPreferences, {
      language: 'en-US',
    });

    const expectedAction = {
      type: types.RECEIVE_SAVE_USER_PREFERENCES_SUCCESS,
      preferences: newPreferences,
    };

    const action = preferenceActions.receiveSavedUserPreferencesSuccess(newPreferences);

    expect(action).to.eql(expectedAction);
    expect(oldPreferences).not.to.eql(newPreferences);
  });

  it('should create an action to handle failure to successfully receive newly updated user preferences', function () {
    const error = 'Failure to save user preferences.';

    const expectedAction = {
      type: types.RECEIVE_SAVE_USER_PREFERENCES_FAILURE,
      error,
    };

    const action = preferenceActions.receiveSavedUserPreferencesFailure(error);

    expect(action).to.eql(expectedAction);
  });

  it('should dispatch a series of actions to save new user preferences to the database', function (done) {
    const oldPreferences = {
      language: 'en-GB',
      dateFormat: 'DD/MM/YYYY',
      timeFormat: 'HH:mm',
      firstName: 'Christopher',
      lastName: 'Columbus',
    };

    const newPreferences = Object.assign({}, oldPreferences, {
      language: 'en-US',
    });

    const userId = 1492;

    const expectedResults = JSON.stringify(newPreferences);

    const dispatch = sinon.spy();

    moxios.withMock(() => {
      preferenceActions.saveUserPreferences(newPreferences, userId)(dispatch);
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
            data: newPreferences,
          },
        })
        .then(() => {
          expect(request.url).to.eql('\'http://localhost:3009/\'profile/preferences/1492');
          expect(request.config.method).to.eql('put');
          expect(request.config.data).to.eql(expectedResults);
          expect(oldPreferences).not.to.eql(newPreferences);

          done();
        });
      }, callbackDelay);
    });
  });
});
/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
