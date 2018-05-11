/* eslint-disable func-names, prefer-arrow-callback, dot-notation, no-unused-expressions */
import { expect } from 'chai';
import moxios from 'moxios';
import sinon from 'sinon';

// SUT
import {
  getRegisteredMerchant,
} from './registrationApi';

describe('registrationApi', function () {
  const callbackDelay = 5;

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  describe('getRegisteredMerchant', function () {
    it('should make a call to register a merchant', function (done) {
      const merchantData = {
        ddaTaxId: '1234567890',
        language: 'en-GB',
        merchantNumber: '9876543210',
        sessionToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6ImhRbmptOHhiNUVUbmFjdjNTUmxEYXRyVEFxaDROTnlJMGk1aEI4TGtqc0EifQ.eyJleHAiOjE1MTAwOTI5MjIsIm5iZiI6MTUxMDA4OTMyMiwidmVyIjoiMS4wIiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5taWNyb3NvZnRvbmxpbmUuY29tL2NlY2I5Yzk0LTg1MzEtNDY0YS1iNzk2LTNkNWUxZTdhZWM5Ni92Mi4wLyIsInN1YiI6IjJlNDZkZDMxLTI4MWEtNDBhZS05YjQwLTMxYzI3MmM1OWMyZiIsImF1ZCI6ImRhODBiYjJhLTU0N2MtNGJkZC04M2RjLWExOWQ1MmQ1Y2ZlYyIsImFjciI6ImIyY18xYV9zaWdudXBfc2lnbmluX2FhZCIsIm5vbmNlIjoiMjYxZGYzMjQxZjM1NDcxYzliOGM1NThjMmQ3ZGExOTQiLCJpYXQiOjE1MTAwODkzMjIsImF1dGhfdGltZSI6MTUxMDA4OTMyMiwibmFtZSI6IkdQIFRlY2ggQWRtaW4iLCJnaXZlbl9uYW1lIjoiR1AgVGVjaCIsImZhbWlseV9uYW1lIjoiU3VwcG9ydCBBZG1pbiIsImVtYWlsIjoiZ3BfdGVjaF9zdXBwb3J0X2FkbWluQGdsb2JhbHBheS5jb20ifQ.SbQ5hNr2y6bfkQLQfZsFEWoI8GBLghQmk6oWSdgMkJfz1QaOhAIwUhrt0Nl99lP3XZF2IMB6qv8Qh9LnO9luKizGnlvTeFk6EKK4hAD7Gse1zdPiGwzUr4w8qAuUJTbI2u1KxL5T1ECCiYs7iQm4ongzbgvnSetm1lNrrbw4-U0B3WEbl0XDcKV9fQlGJzWOvVUUHllVjWBvtMqvNiCHgU5PT2ZzWemDlE4VtXTwQQCG11xCxb8GoYzRgYi4tft7zvpWcfBmVvdRJmFaoz6hlgT9TQsOqGAaJbz1OSRZ9D1TGZ-yQErK31qjUzKE0FppRsB6V8aNDG4aA6OuFBGLHQ',
      };
      const expectedURL = `registration/merchant/${merchantData.merchantNumber}//${merchantData.ddaTaxId}`;
      const expectedUrlRegex = /registration\/merchant\/9876543210\/1234567890$/;

      moxios.stubRequest(expectedURL, {});
      const onFulfilled = sinon.spy();

      getRegisteredMerchant(merchantData)
        .then(onFulfilled);

      moxios.wait(function () {
        const request = moxios.requests.mostRecent();

        expect(request.url).to.match(expectedUrlRegex);
        expect(request.config.method).to.equal('get');
        expect(request.config.headers.Authorization).to.eql(merchantData.sessionToken);
        expect(request.config.headers.userLang).to.eql(merchantData.language);
        done();
      }, callbackDelay);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, dot-notation */
