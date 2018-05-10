/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import { expect } from 'chai';
import sinon from 'sinon';

import * as reportActions from '../actions/reportActions';
import reportReducer from './reportReducer';

describe('Report reducer', function () {
  let clock;

  beforeEach(function () {
    const now = new Date().getTime();
    clock = sinon.useFakeTimers(now);
  });

  afterEach(function () {
    clock.restore();
  });

   /**
     * making an ajax request always does 2 things to the Redux object concerned:
     *   1. sets isFetching to true
     *   2. clears out any error,
     *      optimistically assuming that this next ajax call will succeed
     *
     * intentionally starting with
     *   isFetching: false
     *   and an error string in the error prop,
     * so that I can test that the request action changing those
     */
  describe('receiving all reports', function () {
    it('should set the reports state for requesting reports', function () {
      const stateBefore = {
        data: [],
        isFetching: false,
        lastUpdated: null,
        error: { message: 'This earlier call failed.' },
      };

      const action = reportActions.requestReports();

      const result = reportReducer(stateBefore, action);

      expect(result.isFetching).to.be.true;
      expect(result.data).to.eql(stateBefore.data);
      expect(result.lastUpdated).to.eql(stateBefore.lastUpdated);
      expect(result.error).to.eql(null);
    });

    it('should set the reports on state when reports are received', function () {
      const stateBefore = {
        data: [],
        isFetching: false,
        lastUpdated: null,
        error: { message: 'This earlier call failed.' },
      };
      const reports = [
        {
          id: 9,
        },
        {
          id: 11,
        },
      ];

      const action = reportActions.receiveReportsSuccess(reports);

      const result = reportReducer(stateBefore, action);

      expect(result.isFetching).to.be.false;
      expect(result.data).to.eql(reports);
      expect(result.lastUpdated).to.equal(Date.now());
      expect(result.error).to.eql(null);
    });
  });

  describe('receiving metadata for a report', function () {
    it('should set the reports state for requesting report metadata', function () {
      const stateBefore = {
        data: [
          {
            category: 'Transactions',
            description: 'Designates which transactions have been submitted for funding',
            id: 1,
            lookerCategory: 'transactions',
            lookerType: 'foo',
            name: 'Settled Transactions Report',
          },
        ],
        isFetching: false,
        lastUpdated: null,
        error: { message: 'This earlier call failed.' },
      };

      const action = reportActions.requestReportMetadata(stateBefore.data[0].id);

      const result = reportReducer(stateBefore, action);

      expect(result.isFetching).to.be.true;
      expect(result.data).to.eql(stateBefore.data);
      expect(result.lastUpdated).to.eql(stateBefore.lastUpdated);
      expect(result.error).to.eql(null);
    });

    it('should add metadata to a report in the state when reports are received', function () {
      const stateBefore = {
        data: [],
        isFetching: false,
        lastUpdated: null,
        error: { message: 'This earlier call failed.' },
      };
      const reportMetadata = {
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

      const action = reportActions.receiveReportMetadataSuccess(reportMetadata);

      const result = reportReducer(stateBefore, action);

      expect(result.isFetching).to.be.false;
      expect(result.lastUpdated).to.equal(Date.now());
      expect(result.error).to.eql(null);

      const currentReport = result.data.find((report) => {
        return reportMetadata.id === report.id;
      });
      expect(currentReport.reportColumns).to.have.lengthOf(reportMetadata.reportColumns.length);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback */
