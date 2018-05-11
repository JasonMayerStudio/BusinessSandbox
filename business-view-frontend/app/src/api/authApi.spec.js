/* eslint-disable func-names, prefer-arrow-callback, dot-notation, no-unused-expressions */
import { expect } from 'chai';
import moxios from 'moxios';
import sinon from 'sinon';

import { getMockUser } from 'Helpers/testHelpers/testUserMocks';

// SUT
import {
  authTokenValidate,
  getAuthenticatedUser,
  logoutFromCache,
} from './authApi';

describe('authApi', function () {
  const callbackDelay = 5;
  const webToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6ImhRbmptOHhiNUVUbmFjdjNTUmxEYXRyVEFxaDROTnlJMGk1aEI4TGtqc0EifQ.eyJleHAiOjE1MTAwOTI5MjIsIm5iZiI6MTUxMDA4OTMyMiwidmVyIjoiMS4wIiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5taWNyb3NvZnRvbmxpbmUuY29tL2NlY2I5Yzk0LTg1MzEtNDY0YS1iNzk2LTNkNWUxZTdhZWM5Ni92Mi4wLyIsInN1YiI6IjJlNDZkZDMxLTI4MWEtNDBhZS05YjQwLTMxYzI3MmM1OWMyZiIsImF1ZCI6ImRhODBiYjJhLTU0N2MtNGJkZC04M2RjLWExOWQ1MmQ1Y2ZlYyIsImFjciI6ImIyY18xYV9zaWdudXBfc2lnbmluX2FhZCIsIm5vbmNlIjoiMjYxZGYzMjQxZjM1NDcxYzliOGM1NThjMmQ3ZGExOTQiLCJpYXQiOjE1MTAwODkzMjIsImF1dGhfdGltZSI6MTUxMDA4OTMyMiwibmFtZSI6IkdQIFRlY2ggQWRtaW4iLCJnaXZlbl9uYW1lIjoiR1AgVGVjaCIsImZhbWlseV9uYW1lIjoiU3VwcG9ydCBBZG1pbiIsImVtYWlsIjoiZ3BfdGVjaF9zdXBwb3J0X2FkbWluQGdsb2JhbHBheS5jb20ifQ.SbQ5hNr2y6bfkQLQfZsFEWoI8GBLghQmk6oWSdgMkJfz1QaOhAIwUhrt0Nl99lP3XZF2IMB6qv8Qh9LnO9luKizGnlvTeFk6EKK4hAD7Gse1zdPiGwzUr4w8qAuUJTbI2u1KxL5T1ECCiYs7iQm4ongzbgvnSetm1lNrrbw4-U0B3WEbl0XDcKV9fQlGJzWOvVUUHllVjWBvtMqvNiCHgU5PT2ZzWemDlE4VtXTwQQCG11xCxb8GoYzRgYi4tft7zvpWcfBmVvdRJmFaoz6hlgT9TQsOqGAaJbz1OSRZ9D1TGZ-yQErK31qjUzKE0FppRsB6V8aNDG4aA6OuFBGLHQ';

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  describe('authTokenValidate', function () {
    it('should validate a web token', function (done) {
      const expectedURL = 'auth/token/validate';
      moxios.stubRequest(expectedURL, {});
      const onFulfilled = sinon.spy();

      authTokenValidate(webToken)
        .then(onFulfilled);

      moxios.wait(function () {
        const request = moxios.requests.mostRecent();
        expect(request.url).to.contain(expectedURL);
        expect(request.config.headers.Authorization).to.equal(webToken);
        done();
      }, callbackDelay);
    });
  });

  describe('getAuthenticatedUser', function () {
    it('should requested the authenticated user', function (done) {
      const expectedURL = 'auth';
      moxios.stubRequest(expectedURL, {});
      const onFulfilled = sinon.spy();

      getAuthenticatedUser(webToken)
        .then(onFulfilled);

      moxios.wait(function () {
        const request = moxios.requests.mostRecent();
        expect(request.url).to.contain(expectedURL);
        expect(request.config.headers.Authorization).to.equal(webToken);
        done();
      }, callbackDelay);
    });

    it('should parse the permissions of the authenticated user respone', function (done) {
      // arrange
      const expectedURL = 'auth';
      moxios.stubRequest(expectedURL, {});
      const mockMerchantUser = getMockUser('MERCHANT_USER');

      moxios.wait(function () {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: mockMerchantUser,
        }, callbackDelay);
      }, callbackDelay);

      // act
      getAuthenticatedUser(webToken)
        .then(function (response) {
          // assert
          expect(response.parsedPermissions.users.canCreate).to.be.true;
          expect(response.parsedPermissions.users.rolesViewable).to.eql([
            'MERCHANT_USER',
            'MERCHANT_ACCOUNT_ADMINISTRATOR',
          ]);

          expect(response.parsedPermissions.users.canCreate).to.be.true;
          expect(response.parsedPermissions.users.rolesCreatable).to.eql([
            'MERCHANT_USER',
          ]);

          expect(response.parsedPermissions.users.canEditRole).to.be.true;
          expect(response.parsedPermissions.users.rolesEditableForRole).to.eql([
            'MERCHANT_USER',
            'MERCHANT_ACCOUNT_ADMINISTRATOR',
          ]);

          expect(response.parsedPermissions.users.canEditOptionalPermissions).to.be.false;

          expect(response.parsedPermissions.users.canEditDataAccess).to.be.true;
          expect(response.parsedPermissions.users.rolesEditableForDataAccess).to.eql([
            'MERCHANT_USER',
          ]);

          expect(response.parsedPermissions.users.canActivateAndDeactivate).to.be.true;
          expect(response.parsedPermissions.users.rolesActivatable).to.eql([
            'MERCHANT_USER',
          ]);

          expect(response.parsedPermissions.merchants.canView).to.be.true;
          expect(response.parsedPermissions.merchants.canRegister).to.be.true;

          expect(response.parsedPermissions.merchants.canEdit).to.be.false;
          expect(response.parsedPermissions.merchants.canOwnMerchants).to.be.false;

          expect(response.parsedPermissions.merchants.canTransferOwnership).to.be.true;
          expect(response.parsedPermissions.merchants.canViewProductSelection).to.be.true;

          expect(response.parsedPermissions.merchants.canUpdateProductPricing).to.be.false;

          expect(response.parsedPermissions.messages.canView).to.be.true;

          expect(response.parsedPermissions.messages.canDraft).to.be.false;
          expect(response.parsedPermissions.messages.canApproveAndSend).to.be.false;

          expect(response.parsedPermissions.transactions.canSearch).to.be.true;
          expect(response.parsedPermissions.creditCardNumber.canViewFullNumber).to.be.true;

          expect(response.parsedPermissions.creditCardNumber.canGivePermissionToViewFullNumber).to.be.false;

          expect(response.parsedPermissions.statements.canView).to.be.true;
          expect(response.parsedPermissions.reports.canView).to.be.true;
          expect(response.parsedPermissions.reports.canExport).to.be.true;
          expect(response.parsedPermissions.reports.canExportWithFullCardNumber).to.be.true;

          expect(response.parsedPermissions.reports.canViewCustomReports).to.be.false;
          expect(response.parsedPermissions.reports.canCreateCustomReports).to.be.false;
          expect(response.parsedPermissions.reports.canSaveSharedReportAsCopy).to.be.false;
          expect(response.parsedPermissions.reports.canModifySavedCopyOfSharedReport).to.be.false;
          expect(response.parsedPermissions.reports.canEditCustomReports).to.be.false;
          expect(response.parsedPermissions.reports.canDeleteCustomReports).to.be.false;
          expect(response.parsedPermissions.reports.canShareCustomReports).to.be.false;
          expect(response.parsedPermissions.reports.canViewScheduledReports).to.be.false;
          expect(response.parsedPermissions.reports.canSchedule).to.be.false;
          expect(response.parsedPermissions.reports.canEditSchedule).to.be.false;
          expect(response.parsedPermissions.reports.canDeleteScheduledReports).to.be.false;
          expect(response.parsedPermissions.reports.canPauseScheduledReports).to.be.false;
          expect(response.parsedPermissions.reports.canScheduleForOthers).to.be.false;

          expect(response.parsedPermissions.personalInformation.canEdit).to.be.true;
          expect(response.parsedPermissions.login.canLogIn).to.be.true;

          done();
        });
    });
  });

  describe('logoutFromCache', function () {
    it('should call the API logout housekeeping function', function (done) {
      const expectedURL = 'auth/logout';
      moxios.stubRequest(expectedURL, {});
      const onFulfilled = sinon.spy();

      logoutFromCache(webToken)
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
