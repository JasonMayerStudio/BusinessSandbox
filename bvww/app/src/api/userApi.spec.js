/* eslint-disable func-names, prefer-arrow-callback, dot-notation, no-unused-expressions */
import { expect } from 'chai';
import moxios from 'moxios';
import sinon from 'sinon';

// SUT
import {
  getUsers,
  getUserById,
  getPrimaryMerchantByUserId,
  getUserDataAccessById,
  getUserMerchants,
  saveUser,
  getUserTerms,
  setUserTermsAccepted,
  getHierarchyBasedReport,
} from './userApi';

describe('userApi', function () {
  const callbackDelay = 5;

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  describe('getUsers', function () {
    it('should make an API call to get a list of users', function (done) {
      const expectedURL = 'users';
      const expectedUrlRegex = /users$/;
      moxios.stubRequest(expectedURL, {});
      const onFulfilled = sinon.spy();

      getUsers()
        .then(onFulfilled);

      moxios.wait(function () {
        const request = moxios.requests.mostRecent();
        expect(request.url).to.match(expectedUrlRegex);
        done();
      }, callbackDelay);
    });
  });

  describe('getUserById', function () {
    it('should make an API call to get a user by ID', function (done) {
      const userId = 12;
      const expectedURL = `users/${userId}`;
      const expectedUrlRegex = /users\/12$/;
      moxios.stubRequest(expectedURL, {});
      const onFulfilled = sinon.spy();

      getUserById(userId)
        .then(onFulfilled);

      moxios.wait(function () {
        const request = moxios.requests.mostRecent();
        expect(request.url).to.match(expectedUrlRegex);
        done();
      }, callbackDelay);
    });
  });

  describe('getPrimaryMerchantByUserId', function () {
    it('should make an API call to get the primary merchant for a user ID', function (done) {
      const userId = 221;
      const expectedURL = `users/${userId}/primary-merchant`;
      const expectedUrlRegex = /users\/221\/primary-merchant$/;
      moxios.stubRequest(expectedURL, {});
      const onFulfilled = sinon.spy();

      getPrimaryMerchantByUserId(userId)
        .then(onFulfilled);

      moxios.wait(function () {
        const request = moxios.requests.mostRecent();
        expect(request.url).to.match(expectedUrlRegex);
        done();
      }, callbackDelay);
    });
  });

  describe('getUserDataAccessById', function () {
    it('should make an API call to get data access for a user by ID', function (done) {
      const userId = 1043;
      const expectedURL = `users/${userId}/dataaccess`;
      const expectedUrlRegex = /users\/1043\/dataaccess$/;
      moxios.stubRequest(expectedURL, {});
      const onFulfilled = sinon.spy();

      getUserDataAccessById(userId)
        .then(onFulfilled);

      moxios.wait(function () {
        const request = moxios.requests.mostRecent();
        expect(request.url).to.match(expectedUrlRegex);
        done();
      }, callbackDelay);
    });
  });

  describe('getHierarchyBasedReport', function () {
    it('should make an API call to hierarchy based report for a user by ID', function (done) {
      const userId = 1044;
      const expectedURL = `users/${userId}/hierarchyReport`;
      const expectedUrlRegex = /users\/1044\/hierarchyReport$/;
      moxios.stubRequest(expectedURL, {});
      const onFulfilled = sinon.spy();

      getHierarchyBasedReport(userId)
        .then(onFulfilled);

      moxios.wait(function () {
        const request = moxios.requests.mostRecent();
        expect(request.url).to.match(expectedUrlRegex);
        done();
      }, callbackDelay);
    });
  });

  describe('getUserMerchants', function () {
    it('should make an API call to get the list of merchants for a user by ID', function (done) {
      const userId = 999;
      const expectedURL = `users/${userId}/merchants`;
      const expectedUrlRegex = /users\/999\/merchants$/;
      moxios.stubRequest(expectedURL, {});
      const onFulfilled = sinon.spy();

      getUserMerchants(userId)
        .then(onFulfilled);

      moxios.wait(function () {
        const request = moxios.requests.mostRecent();
        expect(request.url).to.match(expectedUrlRegex);
        done();
      }, callbackDelay);
    });
  });

  describe('saveUser', function () {
    it('should make an API call to save a new user', function (done) {
      const expectedURL = 'users';
      const expectedUrlRegex = /users$/;
      moxios.stubRequest(expectedURL, {});
      const onFulfilled = sinon.spy();

      const userToSave = {
        firstName: 'Billy',
        lastName: 'Bob',
        email: 'bbob@example.com',
        role: {
          key: 'MERCHANT_USER',
          id: 1,
          name: 'Merchant_User',
          description: 'Merchant User',
          permissions: [
            {
              id: 76,
              key: 'CAN_LOG_IN',
              name: 'Can Log In',
              description: 'CAN LOG IN',
              optional: false,
              languageAbbr: 'en-US',
            },
          ],
          permissionIds: [
            76,
          ],
        },
        errorMessageKeys: {
          firstName: 'firstNameBlank',
          lastName: 'lastNameBlank',
          email: 'emailInvalid',
        },
        organizationIds: [
          3578,
        ],
      };
      const expectedToBeSaved = {
        firstName: 'Billy',
        lastName: 'Bob',
        email: 'bbob@example.com',
        role: {
          id: 1,
          permissionIds: [
            76,
          ],
        },
        organizationIds: [
          3578,
        ],
      };
      const expectedRequestBody = JSON.stringify(expectedToBeSaved);

      saveUser(userToSave)
        .then(onFulfilled);

      moxios.wait(function () {
        const request = moxios.requests.mostRecent();

        expect(request.url).to.match(expectedUrlRegex);
        expect(request.config.method).to.equal('post');
        expect(request.config.data).to.eql(expectedRequestBody);
        done();
      }, callbackDelay);
    });

    it('should make an API call to update an existing user', function (done) {
      const userId = 12;
      const expectedURL = `users/${userId}`;
      const expectedUrlRegex = /users\/12$/;
      moxios.stubRequest(expectedURL, {});
      const onFulfilled = sinon.spy();

      const userToSave = {
        firstName: 'Billy',
        lastName: 'Bob',
        email: 'bbob@example.com',
        preferences: {
          dateFormat: 'DD/MM/YYYY',
          firstName: 'Billy',
          lastName: 'Bob',
          language: 'en-US',
          middleName: 'Cecil',
          timeFormat: 'HH:mm',
        },
        role: {
          key: 'MERCHANT_USER',
          id: 1,
          name: 'Merchant_User',
          description: 'Merchant User',
          permissions: [
            {
              id: 76,
              key: 'CAN_LOG_IN',
              name: 'Can Log In',
              description: 'CAN LOG IN',
              optional: false,
              languageAbbr: 'en-US',
            },
          ],
          permissionIds: [
            76,
          ],
        },
        errorMessageKeys: {
          firstName: 'firstNameBlank',
          lastName: 'lastNameBlank',
          email: 'emailInvalid',
        },
        organizationIds: [
          3578,
        ],
        status: 'Active',
        userId,
      };
      const expectedToBeSaved = {
        firstName: 'Billy',
        lastName: 'Bob',
        email: 'bbob@example.com',
        preferences: {
          dateFormat: 'DD/MM/YYYY',
          firstName: 'Billy',
          lastName: 'Bob',
          language: 'en-US',
          timeFormat: 'HH:mm',
        },
        role: {
          id: 1,
          permissionIds: [
            76,
          ],
        },
        organizationIds: [
          3578,
        ],
        status: 'Active',
      };
      const expectedRequestBody = JSON.stringify(expectedToBeSaved);

      saveUser(userToSave)
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

  describe('getUserTerms', function () {
    it('should make an API call to get a user by ID', function (done) {
      const webToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6ImhRbmptOHhiNUVUbmFjdjNTUmxEYXRyVEFxaDROTnlJMGk1aEI4TGtqc0EifQ.eyJleHAiOjE1MTAwOTI5MjIsIm5iZiI6MTUxMDA4OTMyMiwidmVyIjoiMS4wIiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5taWNyb3NvZnRvbmxpbmUuY29tL2NlY2I5Yzk0LTg1MzEtNDY0YS1iNzk2LTNkNWUxZTdhZWM5Ni92Mi4wLyIsInN1YiI6IjJlNDZkZDMxLTI4MWEtNDBhZS05YjQwLTMxYzI3MmM1OWMyZiIsImF1ZCI6ImRhODBiYjJhLTU0N2MtNGJkZC04M2RjLWExOWQ1MmQ1Y2ZlYyIsImFjciI6ImIyY18xYV9zaWdudXBfc2lnbmluX2FhZCIsIm5vbmNlIjoiMjYxZGYzMjQxZjM1NDcxYzliOGM1NThjMmQ3ZGExOTQiLCJpYXQiOjE1MTAwODkzMjIsImF1dGhfdGltZSI6MTUxMDA4OTMyMiwibmFtZSI6IkdQIFRlY2ggQWRtaW4iLCJnaXZlbl9uYW1lIjoiR1AgVGVjaCIsImZhbWlseV9uYW1lIjoiU3VwcG9ydCBBZG1pbiIsImVtYWlsIjoiZ3BfdGVjaF9zdXBwb3J0X2FkbWluQGdsb2JhbHBheS5jb20ifQ.SbQ5hNr2y6bfkQLQfZsFEWoI8GBLghQmk6oWSdgMkJfz1QaOhAIwUhrt0Nl99lP3XZF2IMB6qv8Qh9LnO9luKizGnlvTeFk6EKK4hAD7Gse1zdPiGwzUr4w8qAuUJTbI2u1KxL5T1ECCiYs7iQm4ongzbgvnSetm1lNrrbw4-U0B3WEbl0XDcKV9fQlGJzWOvVUUHllVjWBvtMqvNiCHgU5PT2ZzWemDlE4VtXTwQQCG11xCxb8GoYzRgYi4tft7zvpWcfBmVvdRJmFaoz6hlgT9TQsOqGAaJbz1OSRZ9D1TGZ-yQErK31qjUzKE0FppRsB6V8aNDG4aA6OuFBGLHQ';
      const expectedURL = 'users/terms';
      const expectedUrlRegex = /users\/terms$/;
      moxios.stubRequest(expectedURL, {});
      const onFulfilled = sinon.spy();

      getUserTerms(webToken)
        .then(onFulfilled);

      moxios.wait(function () {
        const request = moxios.requests.mostRecent();
        expect(request.url).to.match(expectedUrlRegex);
        expect(request.config.headers.Authorization).to.equal(webToken);
        done();
      }, callbackDelay);
    });
  });

  describe('setUserTermsAccepted', function () {
    it('should make an API call to get a user by ID', function (done) {
      const termsId = 66;
      const expectedURL = `users/terms/${termsId}`;
      const expectedUrlRegex = /users\/terms\/66$/;
      moxios.stubRequest(expectedURL, {});
      const onFulfilled = sinon.spy();

      setUserTermsAccepted(termsId)
        .then(onFulfilled);

      moxios.wait(function () {
        const request = moxios.requests.mostRecent();
        expect(request.url).to.match(expectedUrlRegex);
        expect(request.config.method).to.equal('post');
        done();
      }, callbackDelay);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, dot-notation */
