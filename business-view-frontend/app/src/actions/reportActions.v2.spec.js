/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import { expect } from 'chai';
import sinon from 'sinon';
import moxios from 'moxios';

import * as reportActions from './reportActions.v2';
import * as types from './actionTypes';

describe('Report actions', function () {
  const callbackDelay = 5;
  const dispatch = sinon.spy();

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('should create an action to get all reports', function () {
    // arrange
    const expectedAction = {
      type: types.REQUEST_REPORTS_V2,
    };

    // act
    const action = reportActions.requestReports();

    // asset
    expect(action).to.eql(expectedAction);
  });

  it('should create an action to handle getting reports successfully', function () {
    // arrange
    const results = [
      {
        reportName: 'Authorizations ',
        reportDescription: 'English description of Authorizations ',
        reportId: 6,
        key: 'auth_paginated',
        reportBaseName: 'Authorizations',
        reportBaseDescription: 'English description of Authorizations ',
        totalColumns: 110,
        totalVisibleColumns: 35,
        totalSummaryColumns: 5,
        totalFilterCount: 88,
        defaultDateColumn: 'Auth Date',
        isListable: true,
        systemReport: true,
      },
    ];
    const expectedAction = {
      type: types.RECEIVE_REPORTS_SUCCESS_V2,
      reports: results,
      receivedAt: Date.now(),
    };
    // act
    const action = reportActions.receiveReportsSuccess(results);

    // asset
    expect(action.type).to.eql(expectedAction.type);
    expect(action.reports).to.eql(expectedAction.reports);
  });

  it('should create a series of actions to get all reports', function (done) {
    moxios.withMock(() => {
      reportActions.getAllReports()(dispatch);
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
        })
        .then(() => {
          expect(request.url).to.eql('http://localhost:3009/reports');
          expect(request.config.method).to.eql('get');
          expect(dispatch.called).to.be.true;
          done();
        });
      }, callbackDelay);
    });
  });

  it('should create an action to get one report', function () {
    // arrange
    const reportId = 42;
    const expectedAction = {
      type: types.REQUEST_ONE_REPORT_V2,
      reportId,
    };

    // act
    const action = reportActions.requestOneReport(reportId);

    // asset
    expect(action).to.eql(expectedAction);
  });

  it('should create an action to handle getting one report successfully', function () {
    // arrange
    const results = {
      actions: [],
      canManageColumns: true,
      canSearch: false,
      createdByUserEmail: null,
      createdByUserFirstName: null,
      createdByUserLastName: null,
      createdDate: null,
      dataColumns: [
        {
          defaultIsVisible: true,
          description: 'English Description Of Merchant Dba Name',
          isRequired: false,
          isSortable: true,
          isSummaryColumn: false,
          name: 'Merchant Dba Name',
          reportColumnId: 1389,
          sortDirection: null,
          sortOrderPriority: 0,
          templateId: 361,
          displayType: 'STRING',
          columnKey: 'merchant_dba_name',
          categoryDescription: 'English description of Merchant Information',
          categoryKey: 'merchantInformation',
          categoryName: 'Merchant Information',
          displayOrder: 2,
          userDisplayOrder: 0,
          userIsVisible: false,
        },
      ],
      description: 'English description of Settlement Batches ',
      filters: [
        {
          defaultValue: null,
          description: 'English Description Of File Date',
          displayOrder: 1,
          filterValueGroupId: 0,
          isReadOnly: false,
          isVisible: true,
          name: 'File Date Full',
          reportFilterId: 124,
          filterType: 'DATE',
          filterValues: null,
          isPrimaryDateFilter: true,
          isRequired: true,
        },
      ],
      id: 7,
      isExportable: true,
      name: 'Settlement Batch ',
      primaryColumnKey: 'seq_key',
      primaryDateFilterId: 124,
      reportBaseDescription: 'English description of Batches ',
      reportBaseName: 'Batches ',
      summaryColumns: [
        {
          defaultIsVisible: true,
          description: 'English Description Of Sum Batch Amount',
          isRequired: false,
          isSortable: false,
          isSummaryColumn: true,
          name: 'Sum Batch Amount',
          reportColumnId: 1379,
          sortDirection: null,
          sortOrderPriority: 0,
          templateId: 461,
          displayType: 'CURRENCY',
          columnKey: 'sum_batch_amount',
          categoryDescription: 'English description of Authorization Information',
          categoryKey: 'authorizationInformation',
          categoryName: 'Authorization Information',
          displayOrder: 1,
          userDisplayOrder: 0,
          userIsVisible: false,
        },
      ],
      templateId: 8,
      isListable: true,
    };
    const headers = {
      'content-type': 'application/json;charset=utf-8',
      'cache-control': 'private',
    };
    const expectedAction = {
      type: types.RECEIVE_ONE_REPORT_SUCCESS_V2,
      reportDefinition: results,
      headers,
      receivedAt: Date.now(),
    };
    // act
    const action = reportActions.receiveOneReportSuccess(results);

    // asset
    expect(action.type).to.eql(expectedAction.type);
    expect(action.reportMetadata).to.eql(expectedAction.reportMetadata);
  });

  it('should create a series of actions to successfully get one report', function (done) {
    const reportId = 1;

    moxios.withMock(() => {
      reportActions.getOneReport(reportId)(dispatch);
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
        })
        .then(() => {
          expect(request.url).to.eql('http://localhost:3009/reports/1');
          expect(request.config.method).to.eql('get');
          expect(dispatch.called).to.be.true;
          done();
        });
      }, callbackDelay);
    });
  });

  it('should create an action to successfully save a new report', function (done) {
    const newReport = {
      description: 'Transactions that occured through an online portal',
      isDraft: true,
      isSystemReport: false,
      name: 'Online Transactions',
      templateId: 9,
    };

    moxios.withMock(() => {
      reportActions.saveReport(newReport)(dispatch);
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
        })
        .then(() => {
          expect(request.url).to.eql('http://localhost:3009/reports');
          expect(request.config.method).to.eql('post');
          expect(dispatch.called).to.be.true;
          done();
        });
      }, callbackDelay);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
