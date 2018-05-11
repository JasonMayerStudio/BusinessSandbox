/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import { expect } from 'chai';
import sinon from 'sinon';
import moxios from 'moxios';

import * as reportActions from './reportActions';
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
      type: types.REQUEST_REPORTS,
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
        category: 'Transactions',
        description: 'Designates which transactions have been submitted for funding',
        id: 1,
        lookerCategory: 'transactions',
        lookerType: 'foo',
        name: 'Settled Transactions Report',
      },
      {
        category: 'Transactions',
        description: 'Contains information on authorized transactions from a specific period of time',
        id: 2,
        lookerCategory: 'transactions',
        lookerType: 'bar',
        name: 'Authorization Report',
      },
      {
        category: 'Disputes',
        description: 'Contains information on chargebacks from a specific period of time',
        id: 3,
        lookerCategory: 'disputes',
        lookerType: 'baz',
        name: 'Chargebacks Report',
      },
    ];
    const expectedAction = {
      type: types.RECEIVE_REPORTS_SUCCESS,
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
          expect(request.url).to.eql('\'http://localhost:3009/\'reports');
          expect(request.config.method).to.eql('get');
          expect(dispatch.called).to.be.true;
          done();
        });
      }, callbackDelay);
    });
  });

  it('should create an action to get metadata for a report', function () {
    // arrange
    const reportId = 42;
    const expectedAction = {
      type: types.REQUEST_REPORT_METADATA,
      reportId,
    };

    // act
    const action = reportActions.requestReportMetadata(reportId);

    // asset
    expect(action).to.eql(expectedAction);
  });

  it('should create an action to handle getting metadata for a report successfully', function () {
    // arrange
    const results = {
      category: 'Transactions',
      description: 'Designates which transactions have been submitted for funding',
      id: 1,
      lookerCategory: 'transactions',
      lookerType: 'foo',
      name: 'Settled Transactions Report',
      reportColumns: [
        {
          columnId: 101,
          displayOrder: 1,
          isDefault: true,
          isFilter: true,
          jsonKey: 'dbaName',
          label: 'Business Name',
          reportId: 1,
          type: 'string',
          userId: 1,
        },
      ],
    };
    const expectedAction = {
      type: types.RECEIVE_REPORT_METADATA_SUCCESS,
      reportMetadata: results,
      receivedAt: Date.now(),
    };
    // act
    const action = reportActions.receiveReportMetadataSuccess(results);

    // asset
    expect(action.type).to.eql(expectedAction.type);
    expect(action.reportMetadata).to.eql(expectedAction.reportMetadata);
  });

  it('should create a series of actions to successfully get metada for a report', function (done) {
    const reportId = 1;

    moxios.withMock(() => {
      reportActions.getReportMetadata(reportId)(dispatch);
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
        })
        .then(() => {
          expect(request.url).to.eql('\'http://localhost:3009/\'reports/1/metadata');
          expect(request.config.method).to.eql('get');
          expect(dispatch.called).to.be.true;
          done();
        });
      }, callbackDelay);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
