/* eslint-disable func-names, prefer-arrow-callback, dot-notation, no-unused-expressions */
import { expect } from 'chai';
import moxios from 'moxios';
import sinon from 'sinon';

// SUT
import {
  apiGetReports,
  apiGetOneReport,
  apiGetReportUserFilters,
  apiSaveReportUserFilters,
  apiGetReportData,
  apiGetReportVisualizations,
  apiSaveReportDefinition,
} from './reportApi.v2';

describe('reportApiV2', function () {
  const callbackDelay = 5;

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  describe('apiGetReports', function () {
    it('should make an API call to get a list of reports', function (done) {
      const expectedURL = 'reports';
      const expectedUrlRegex = /reports$/;
      moxios.stubRequest(expectedURL, {});
      const onFulfilled = sinon.spy();

      apiGetReports()
        .then(onFulfilled);

      moxios.wait(function () {
        const request = moxios.requests.mostRecent();
        expect(request.url).to.match(expectedUrlRegex);
        done();
      }, callbackDelay);
    });

    it('should make an API call to get a list of reports for the specified user', function (done) {
      const expectedURL = 'reports?email=merchant_user%40globalpay.com';
      const expectedUrlRegex = /reports\?email=merchant_user@globalpay.com/;
      moxios.stubRequest(expectedURL, {});
      const onFulfilled = sinon.spy();

      apiGetReports({ email: 'merchant_user@globalpay.com' })
        .then(onFulfilled);

      moxios.wait(function () {
        const request = moxios.requests.mostRecent();
        expect(request.url).to.match(expectedUrlRegex);
        done();
      }, callbackDelay);
    });
  });

  describe('apiGetOneReport', function () {
    it('should make an API call to get the structural data for a report', function (done) {
      const reportId = 2;
      const expectedURL = `reports/${reportId}`;
      const expectedUrlRegex = /reports\/2$/;
      moxios.stubRequest(expectedURL, {});
      const onFulfilled = sinon.spy();

      apiGetOneReport(reportId)
        .then(onFulfilled);

      moxios.wait(function () {
        const request = moxios.requests.mostRecent();
        expect(request.url).to.match(expectedUrlRegex);
        done();
      }, callbackDelay);
    });
  });

  describe('apiGetReportUserFilters', function () {
    it('should make an API call to get the user filters for a report', function (done) {
      const reportId = 5;
      const expectedURL = `reports/${reportId}/custom-filters`;
      const expectedUrlRegex = /reports\/5\/custom-filters$/;
      moxios.stubRequest(expectedURL, {});
      const onFulfilled = sinon.spy();

      apiGetReportUserFilters(reportId)
        .then(onFulfilled);

      moxios.wait(function () {
        const request = moxios.requests.mostRecent();
        expect(request.url).to.match(expectedUrlRegex);
        done();
      }, callbackDelay);
    });
  });

  describe('apiSaveReportUserFilters', function () {
    it('should make an API call to save a user filter for a report', function (done) {
      const reportId = 6;
      const expectedURL = `reports/${reportId}/custom-filters`;
      const expectedUrlRegex = /reports\/6\/custom-filters$/;
      moxios.stubRequest(expectedURL, {});
      const onFulfilled = sinon.spy();

      const filterToSave = {
        bestTvShow: 'Moonlighting',
        filterJson: '{}',
        id: 33,
        meta: 'Some random fact',
        name: 'Over $1000',
      };
      const expectedToBeSaved = {
        filterJson: '{}',
        id: 33,
        name: 'Over $1000',
      };
      const expectedRequestBody = JSON.stringify(expectedToBeSaved);

      apiSaveReportUserFilters(reportId, filterToSave)
        .then(onFulfilled);

      moxios.wait(function () {
        const request = moxios.requests.mostRecent();

        expect(request.url).to.match(expectedUrlRegex);
        expect(request.config.method).to.equal('post');
        expect(request.config.data).to.eql(expectedRequestBody);
        done();
      }, callbackDelay);
    });
  });

  describe('apiGetReportData', function () {
    it('should make an API call to get report data', function (done) {
      const reportId = 6;
      const expectedURL = `reports/${reportId}`;
      const expectedUrlRegex = /reports\/6\/data/;
      moxios.stubRequest(expectedURL, {});
      const onFulfilled = sinon.spy();

      const reportRequestObject = {
        filters: [],
        report: { id: reportId },
        meta: 'Some random fact',
      };

      apiGetReportData(reportId, reportRequestObject)
        .then(onFulfilled);

      moxios.wait(function () {
        const request = moxios.requests.mostRecent();

        expect(request.url).to.match(expectedUrlRegex);
        expect(request.config.method).to.equal('get');
        done();
      }, callbackDelay);
    });

    it('should convert the filter array to a query string', function (done) {
      const reportId = 6;
      const expectedURL = `reports/${reportId}`;
      const expectedUrlRegex = /reports\/6\/data/;
      moxios.stubRequest(expectedURL, {});
      const onFulfilled = sinon.spy();

      const reportRequestObject = {
        filters: [],
        page: 2,
        limit: 75,
      };

      apiGetReportData(reportId, reportRequestObject)
        .then(onFulfilled);

      moxios.wait(function () {
        const request = moxios.requests.mostRecent();

        expect(request.url).to.match(expectedUrlRegex);
        expect(request.config.method).to.equal('get');
        done();
      }, callbackDelay);
    });
  });

  describe('apiGetReportVisualizations', function () {
    it('should make an API call to get report data', function (done) {
      const reportId = 6;
      const expectedURL = `reports/${reportId}/visualizations`;
      const expectedUrlRegex = /reports\/6\/visualizations/;
      moxios.stubRequest(expectedURL, {});
      const onFulfilled = sinon.spy();

      const reportRequestObject = {
        filters: [],
        page: 2,
        limit: 75,
      };

      apiGetReportVisualizations(reportId, reportRequestObject)
        .then(onFulfilled);

      moxios.wait(function () {
        const request = moxios.requests.mostRecent();

        expect(request.url).to.match(expectedUrlRegex);
        expect(request.config.method).to.equal('get');
        done();
      }, callbackDelay);
    });

    it('should convert the filter array to a query string', function (done) {
      const reportId = 6;
      const expectedURL = `reports/${reportId}/visualizations`;
      const expectedUrlRegex = /reports\/6\/visualizations/;
      moxios.stubRequest(expectedURL, {});
      const onFulfilled = sinon.spy();

      const reportRequestObject = {
        filters: [],
        page: 2,
        limit: 75,
      };

      apiGetReportVisualizations(reportId, reportRequestObject)
        .then(onFulfilled);

      moxios.wait(function () {
        const request = moxios.requests.mostRecent();

        expect(request.url).to.match(expectedUrlRegex);
        expect(request.config.method).to.equal('get');
        done();
      }, callbackDelay);
    });
  });

  describe('apiSaveReportDefinition', function () {
    it('should make an API call to save a new report', function (done) {
      const expectedURL = 'reports';
      const expectedUrlRegex = /reports$/;
      moxios.stubRequest(expectedURL, {});
      const onFulfilled = sinon.spy();

      const reportToSave = {
        description: 'Transactions that occured through an online portal',
        isDraft: true,
        isSystemReport: false,
        name: 'Online Transactions',
        templateId: 9,
      };

      const expectedToBeSaved = {
        description: 'Transactions that occured through an online portal',
        isDraft: true,
        isSystemReport: false,
        name: 'Online Transactions',
        templateId: 9,
      };
      const expectedRequestBody = JSON.stringify(expectedToBeSaved);

      apiSaveReportDefinition(reportToSave)
        .then(onFulfilled);

      moxios.wait(function () {
        const request = moxios.requests.mostRecent();

        expect(request.url).to.match(expectedUrlRegex);
        expect(request.config.method).to.equal('post');
        expect(request.config.data).to.eql(expectedRequestBody);
        done();
      }, callbackDelay);
    });

    it('should make an API call to update an existing report', function (done) {
      const reportId = 12;
      const expectedURL = `reports/${reportId}`;
      const expectedUrlRegex = /reports\/12$/;
      moxios.stubRequest(expectedURL, {});
      const onFulfilled = sinon.spy();


      const reportToSave = {
        description: 'Transactions that occured through an online portal',
        isDraft: true,
        isSystemReport: false,
        name: 'Online Transactions (changed name)',
        templateId: 9,
        reportId: 12,
      };

      const expectedToBeSaved = {
        description: 'Transactions that occured through an online portal',
        isDraft: true,
        isSystemReport: false,
        name: 'Online Transactions (changed name)',
        templateId: 9,
        reportId: 12,
      };
      const expectedRequestBody = JSON.stringify(expectedToBeSaved);

      apiSaveReportDefinition(reportToSave)
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
