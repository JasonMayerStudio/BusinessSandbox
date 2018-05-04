/* eslint-disable func-names, prefer-arrow-callback, dot-notation, no-unused-expressions */
import { expect } from 'chai';
import moxios from 'moxios';
import sinon from 'sinon';

// SUT
import {
  getStatements,
} from './statementApi';

describe('statementApi', function () {
  const callbackDelay = 5;

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  describe('getStatements', function () {
    it('should make a call', function (done) {
      const expectedURL = 'statements/merchant';
      moxios.stubRequest(expectedURL, {});
      const onFulfilled = sinon.spy();
      getStatements()
        .then(onFulfilled);
      moxios.wait(function () {
        const request = moxios.requests.mostRecent();
        expect(request.url).to.contain(expectedURL);
        done();
      }, callbackDelay);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, dot-notation */
