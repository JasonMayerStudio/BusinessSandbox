/* eslint-disable func-names, prefer-arrow-callback, dot-notation, no-unused-expressions */
import { expect } from 'chai';
import moxios from 'moxios';
import sinon from 'sinon';

// SUT
import {
  getRolesWithPermissions,
} from './rolesPermissionsApi';

describe('rolesPermissionsApi', function () {
  const callbackDelay = 5;

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  describe('getRolesWithPermissions', function () {
    it('should make an API call to get all roles with permissions for a language', function (done) {
      const language = 'fr-CA';
      const expectedURL = `roles/language/${language}`;
      const expectedUrlRegex = /roles\/language\/fr-CA$/;
      moxios.stubRequest(expectedURL, {});
      const onFulfilled = sinon.spy();

      getRolesWithPermissions(language)
        .then(onFulfilled);

      moxios.wait(function () {
        const request = moxios.requests.mostRecent();
        expect(request.url).to.match(expectedUrlRegex);
        done();
      }, callbackDelay);
    });

    it('should make an API call for en-US if no language is given', function (done) {
      const language = 'en-US';
      const expectedURL = `roles/language/${language}`;
      const expectedUrlRegex = /roles\/language\/en-US$/;
      moxios.stubRequest(expectedURL, {});
      const onFulfilled = sinon.spy();

      getRolesWithPermissions() // note: we are not passing in a language
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
