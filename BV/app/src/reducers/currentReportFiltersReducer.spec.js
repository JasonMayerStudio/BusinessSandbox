/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions, quotes, quote-props */

import { expect } from 'chai';

import * as reportFiltersActions from '../actions/reportFiltersActions';
import currentReportFiltersReducer from './currentReportFiltersReducer';

describe('Current Report Filters reducer', function () {
  describe('setCurrentReportFilter reducer', function () {
    it('should set the current filters for the specified report (no reports in store yet)', function () {
      const stateBefore = [];
      const reportId = 6;
      const filters = [
        {
          "jsonKey": "posted_date",
          "minDate": "yesterday",
        },
        {
          "jsonKey": "transaction_date",
          "maxDate": "2017-09-27T11:10:47.700Z",
          "minDate": "2017-09-27T11:10:47.700Z",
        },
      ];

      const action = reportFiltersActions.setCurrentReportFilter(reportId, filters);

      const result = currentReportFiltersReducer(stateBefore, action);

      expect(result).to.have.lengthOf(stateBefore.length + 1);
      expect(result[0].reportId).to.equal(reportId);
      expect(result[0].filters).to.eql(filters);
    });

    it('should set the current filters for the specified report (others reports in store)', function () {
      const stateBefore = [
        {
          reportId: 4,
          filters: [
            {
              "jsonKey": "transaction_date",
              "minDate": "yesterday",
            },
          ],
          lastUpdated: new Date('December 17, 2016 03:24:00'),
        },
        {
          reportId: 6,
          filters: [
            {
              "jsonKey": "posted_date",
              "minDate": "yesterday",
            },
          ],
          lastUpdated: new Date('March 17, 2017 08:14:00'),
        },
      ];
      const reportId = 5;
      const filters = [
        {
          "jsonKey": "posted_date",
          "minDate": "yesterday",
        },
        {
          "jsonKey": "transaction_date",
          "maxDate": "2017-09-27T11:10:47.700Z",
          "minDate": "2017-09-27T11:10:47.700Z",
        },
      ];

      const action = reportFiltersActions.setCurrentReportFilter(reportId, filters);

      const result = currentReportFiltersReducer(stateBefore, action);

      expect(result).to.have.lengthOf(stateBefore.length + 1);

      const foundReportFilter = result.find((report) => {
        return report.reportId === reportId;
      });
      expect(foundReportFilter.filters).to.eql(filters);
    });

    it('should replace the current filters for the specified report (when old is already in store)', function () {
      const stateBefore = [
        {
          reportId: 4,
          filters: [
            {
              "jsonKey": "transaction_date",
              "minDate": "yesterday",
            },
          ],
          lastUpdated: new Date('December 17, 2016 03:24:00'),
        },
        {
          reportId: 6,
          filters: [
            {
              "jsonKey": "posted_date",
              "minDate": "yesterday",
            },
          ],
          lastUpdated: new Date('March 17, 2017 08:14:00'),
        },
      ];
      const reportId = 4;
      const filters = [
        {
          "jsonKey": "posted_date",
          "minDate": "yesterday",
        },
        {
          "jsonKey": "transaction_date",
          "maxDate": "2017-09-27T11:10:47.700Z",
          "minDate": "2017-09-27T11:10:47.700Z",
        },
      ];

      const action = reportFiltersActions.setCurrentReportFilter(reportId, filters);

      const result = currentReportFiltersReducer(stateBefore, action);

      expect(result).to.have.lengthOf(stateBefore.length);

      const foundReportFilter = result.find((report) => {
        return report.reportId === reportId;
      });
      expect(foundReportFilter.filters).to.eql(filters);
    });
  });

  describe('clearCurrentReportFilter reducer', function () {
    it('should set the current filters for the specified report (no reports in store yet)', function () {
      const stateBefore = [
        {
          reportId: 4,
          filters: [
            {
              jsonKey: 'authorizations.auth_date_full',
              minDate: 'yesterday',
              maxDate: 'yesterday',
            },
          ],
          lastUpdated: 1513288351246,
        },
      ];
      const reportId = 4;

      const action = reportFiltersActions.clearCurrentReportFilter(reportId);

      const result = currentReportFiltersReducer(stateBefore, action);

      expect(result).to.have.lengthOf(stateBefore.length - 1);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions, quotes, quote-props */
