/* eslint-disable func-names, prefer-arrow-callback, dot-notation, no-unused-expressions */
import { expect } from 'chai';
import moxios from 'moxios';
import sinon from 'sinon';

// SUT
import {
  getPreferences,
  savePreferences,
} from './preferenceApi';

describe('preferenceApi', function () {
  const callbackDelay = 5;

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  describe('getPreferences', function () {
    it('should make an API call to get preferences for a user', function (done) {
      const userId = 2;
      const expectedURL = `preferences/${userId}/metadata`;
      const expectedUrlRegex = /profile\/preferences\/2$/;
      moxios.stubRequest(expectedURL, {});
      const onFulfilled = sinon.spy();

      getPreferences(userId)
        .then(onFulfilled);

      moxios.wait(function () {
        const request = moxios.requests.mostRecent();
        expect(request.url).to.match(expectedUrlRegex);
        done();
      }, callbackDelay);
    });
  });

  describe('savePreferences', function () {
    it('should make an API call to save preferences for a user', function (done) {
      const userId = 6;
      const expectedURL = `preferences/${userId}/user-filters`;
      const expectedUrlRegex = /profile\/preferences\/6$/;
      moxios.stubRequest(expectedURL, {});
      const onFulfilled = sinon.spy();

      const userPreferencesToSave = {
        angle: 'acute',
        dateFormat: 'MM/DD/2017',
        firstName: 'Bob',
        language: 'en-US',
        lastName: 'Roberts',
        middleName: 'Roy',
        timeFormat: 'HH:mm',
        xylophone: 'percussion',
      };
      const expectedToBeSaved = {
        dateFormat: 'MM/DD/2017',
        firstName: 'Bob',
        language: 'en-US',
        lastName: 'Roberts',
        timeFormat: 'HH:mm',
      };
      const expectedRequestBody = JSON.stringify(expectedToBeSaved);

      savePreferences(userPreferencesToSave, userId)
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
