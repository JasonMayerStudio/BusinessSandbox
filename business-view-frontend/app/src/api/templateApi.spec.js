/* eslint-disable func-names, prefer-arrow-callback, dot-notation, no-unused-expressions */
import { expect } from 'chai';
import moxios from 'moxios';
import sinon from 'sinon';

// SUT
import {
  getTemplates,
} from './templateApi';

describe('reportApi', function () {
  const callbackDelay = 5;

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  describe('getTemplates', function () {
    it('should make an API call to get a list of templates', function (done) {
      const expectedURL = 'templates';
      const expectedUrlRegex = /templates$/;
      moxios.stubRequest(expectedURL, {});
      const onFulfilled = sinon.spy();

      getTemplates()
        .then(onFulfilled);

      moxios.wait(function () {
        const request = moxios.requests.mostRecent();
        expect(request.url).to.match(expectedUrlRegex);
        done();
      }, callbackDelay);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, dot-notation */
