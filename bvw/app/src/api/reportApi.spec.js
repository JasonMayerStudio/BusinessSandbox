/* eslint-disable func-names, prefer-arrow-callback, dot-notation, no-unused-expressions */
import { expect } from 'chai';
import moxios from 'moxios';
import sinon from 'sinon';

// SUT
import {
  apiGetReports,
  apiGetReportMetadata,
  apiGetReportUserFilters,
  apiSaveReportUserFilters,
  apiGetReportData,
  apiGetReportVisualizations,
  apiGetReportRowData,
  apiGetReportExport,
} from './reportApi';

describe('reportApi', function () {
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
  });

  describe('apiGetReportMetadata', function () {
    it('should make an API call to get metadata for a report', function (done) {
      const reportId = 2;
      const expectedURL = `reports/${reportId}/metadata`;
      const expectedUrlRegex = /reports\/2\/metadata$/;
      moxios.stubRequest(expectedURL, {});
      const onFulfilled = sinon.spy();

      apiGetReportMetadata(reportId)
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
      const expectedURL = `reports/${reportId}/user-filters`;
      const expectedUrlRegex = /reports\/5\/user-filters$/;
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
      const expectedURL = `reports/${reportId}/user-filters`;
      const expectedUrlRegex = /reports\/6\/user-filters$/;
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
      const expectedUrlRegex = /reports\/6$/;
      moxios.stubRequest(expectedURL, {});
      const onFulfilled = sinon.spy();

      const reportRequestObject = {
        filters: [],
        report: { id: reportId },
        meta: 'Some random fact',
      };
      const expectedReportRequestObject = {
        filters: [],
        report: { id: reportId },
      };
      const expectedRequestBody = JSON.stringify(expectedReportRequestObject);

      apiGetReportData(reportRequestObject)
        .then(onFulfilled);

      moxios.wait(function () {
        const request = moxios.requests.mostRecent();

        expect(request.url).to.match(expectedUrlRegex);
        expect(request.config.method).to.equal('post');
        expect(request.config.data).to.eql(expectedRequestBody);
        done();
      }, callbackDelay);
    });

    it('should supply an empty filter array if none is supplied', function (done) {
      const reportId = 6;
      const expectedURL = `reports/${reportId}`;
      const expectedUrlRegex = /reports\/6$/;
      moxios.stubRequest(expectedURL, {});
      const onFulfilled = sinon.spy();

      const reportRequestObject = {
        report: { id: reportId },
      };
      const expectedReportRequestObject = {
        report: { id: reportId },
        filters: [],
      };
      const expectedRequestBody = JSON.stringify(expectedReportRequestObject);

      apiGetReportData(reportRequestObject)
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

  describe('apiGetReportVisualizations', function () {
    it('should make an API call to get report data', function (done) {
      const reportId = 6;
      const expectedURL = `reports/${reportId}/visualizations`;
      const expectedUrlRegex = /reports\/6\/visualizations$/;
      moxios.stubRequest(expectedURL, {});
      const onFulfilled = sinon.spy();

      const reportRequestObject = {
        filters: [],
        report: { id: reportId },
      };
      const expectedReportRequestObject = reportRequestObject.filters;
      const expectedRequestBody = JSON.stringify(expectedReportRequestObject);

      apiGetReportVisualizations(reportRequestObject)
        .then(onFulfilled);

      moxios.wait(function () {
        const request = moxios.requests.mostRecent();

        expect(request.url).to.match(expectedUrlRegex);
        expect(request.config.method).to.equal('post');
        expect(request.config.data).to.eql(expectedRequestBody);
        done();
      }, callbackDelay);
    });

    it('should supply an empty filter array if none is supplied', function (done) {
      const reportId = 6;
      const expectedURL = `reports/${reportId}/visualizations`;
      const expectedUrlRegex = /reports\/6\/visualizations$/;
      moxios.stubRequest(expectedURL, {});
      const onFulfilled = sinon.spy();

      const reportRequestObject = {
        report: { id: reportId },
      };
      const expectedReportRequestObject = [];
      const expectedRequestBody = JSON.stringify(expectedReportRequestObject);

      apiGetReportVisualizations(reportRequestObject)
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

  describe('apiGetReportRowData', function () {
    it('should make an API call to get a particular row of a particular report', function (done) {
      const reportId = 5;
      const rowId = 333;
      const expectedURL = `reports/${reportId}/${rowId}`;
      const expectedUrlRegex = /reports\/5\/333$/;
      moxios.stubRequest(expectedURL, {});
      const onFulfilled = sinon.spy();

      apiGetReportRowData(reportId, rowId)
        .then(onFulfilled);

      moxios.wait(function () {
        const request = moxios.requests.mostRecent();
        expect(request.url).to.match(expectedUrlRegex);
        done();
      }, callbackDelay);
    });
  });

  describe('apiGetReportExport', function () {
    it('should make an API call to get a particular row of a particular report', function (done) {
      const reportId = 6;
      const expectedURL = `reports/${reportId}/export`;
      const expectedUrlRegex = /reports\/6\/export$/;
      moxios.stubRequest(expectedURL, {});
      const onFulfilled = sinon.spy();

      const reportRequestObject = {
        filters: [],
        report: { id: reportId },
        meta: 'Some random fact',
      };
      const expectedReportRequestObject = {
        filters: [],
        report: { id: reportId },
      };
      const expectedRequestBody = JSON.stringify(expectedReportRequestObject);

      apiGetReportExport(reportRequestObject)
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
});

/* eslint-enable func-names, prefer-arrow-callback, dot-notation */
