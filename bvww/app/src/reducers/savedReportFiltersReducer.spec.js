/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions, quotes, quote-props, no-useless-escape */

import { expect } from 'chai';
import sinon from 'sinon';

import * as reportFiltersActions from '../actions/reportFiltersActions';
import savedReportFiltersReducer from './savedReportFiltersReducer';

describe('Report reducer', function () {
  let clock;

  beforeEach(function () {
    const now = new Date().getTime();
    clock = sinon.useFakeTimers(now);
  });

  afterEach(function () {
    clock.restore();
  });

  describe('receiving user filters for a report', function () {
    it('should set the saved filter state for requesting report user filters', function () {
      const stateBefore = {};
      const newReportId = 1;

      const action = reportFiltersActions.requestReportUserFilters(newReportId);

      const result = savedReportFiltersReducer(stateBefore, action);

      expect(Object.keys(result)).to.have.lengthOf(1);
      expect(result[newReportId].isFetching).to.be.true;
      expect(result[newReportId].error).to.not.be.ok;
      expect(result[newReportId].data).to.have.lengthOf(0);
    });

    it('should set the saved filter state for requesting report user filters, when it already exists', function () {
      const stateBefore = {
        1: {
          reportId: 1,
          data: [
            {
              id: 1,
              name: 'foo',
              filterJson: '[{\"jsonKey\":\"chargebacks.case_received_datetime_date\",\"minDate\":1501560000,\"maxDate\":1504152000},{\"jsonKey\":\"chargebacks.case_case_resolved_datetime_date\",\"minDate\":1503633600,\"maxDate\":1503806400}]',
            },
          ],
          isFetching: false,
          lastUpdated: 1503633600,
          error: null,
        },
      };
      const newReportId = 1;

      const action = reportFiltersActions.requestReportUserFilters(newReportId);

      const result = savedReportFiltersReducer(stateBefore, action);

      expect(Object.keys(result)).to.have.lengthOf(1);
      expect(result[newReportId].isFetching).to.be.true;
      expect(result[newReportId].error).to.not.be.ok;
      expect(result[newReportId].data).to.have.lengthOf(0);
    });

    it('should set the saved filter state for requesting report user filters, when others already exist', function () {
      const stateBefore = {
        1: {
          reportId: 1,
          data: [
            {
              id: 1,
              name: 'foo',
              filterJson: '[{\"jsonKey\":\"chargebacks.case_received_datetime_date\",\"minDate\":1501560000,\"maxDate\":1504152000},{\"jsonKey\":\"chargebacks.case_case_resolved_datetime_date\",\"minDate\":1503633600,\"maxDate\":1503806400}]',
            },
          ],
          isFetching: false,
          lastUpdated: 1503633600,
          error: null,
        },
        3: {
          reportId: 3,
          data: [
            {
              id: 10,
              name: 'foo2',
              filterJson: '[{\"jsonKey\":\"chargebacks.case_received_datetime_date\",\"minDate\":1501560000,\"maxDate\":1504152000},{\"jsonKey\":\"chargebacks.case_case_resolved_datetime_date\",\"minDate\":1503633600,\"maxDate\":1503806400}]',
            },
          ],
          isFetching: false,
          lastUpdated: 1503633600,
          error: null,
        },
      };
      const numKeysBefore = Object.keys(stateBefore).length;
      const newReportId = 2;

      const action = reportFiltersActions.requestReportUserFilters(newReportId);

      const result = savedReportFiltersReducer(stateBefore, action);

      expect(Object.keys(result)).to.have.lengthOf(numKeysBefore + 1);
      expect(result[newReportId].isFetching).to.be.true;
      expect(result[newReportId].error).to.not.be.ok;
      expect(result[newReportId].data).to.have.lengthOf(0);
    });

    it('should insert the user filters into a new report entry', function () {
      const newReportId = 1;
      const stateBefore = {
        [newReportId]: {
          reportId: newReportId,
          data: [],
          isFetching: true,
          lastUpdated: 1503633600,
          error: null,
        },
      };

      const reportUserFiltersResponse = [
        {
          filterJson: '[{"cardNumber": {"firstSixDigits": "string","fullCardNumber": "string","lastFourDigits": "string"},"jsonKey": "string","maxCurrency": 0,"maxDate": "2017-09-27T11:10:47.700Z","minCurrency": 0,"minDate": "2017-09-27T11:10:47.700Z","multiSelectValues": ["01","02"],"searchField": "string"}]',
          id: 1,
          name: 'Water Filter',
        },
      ];

      const action = reportFiltersActions.receiveReportUserFiltersSuccess(newReportId, reportUserFiltersResponse);

      const result = savedReportFiltersReducer(stateBefore, action);

      expect(Object.keys(result)).to.have.lengthOf(1);
      expect(result[newReportId].isFetching).to.be.false;
      expect(result[newReportId].error).to.not.be.ok;
      expect(result[newReportId].data).to.eql(reportUserFiltersResponse);
    });

    it('should insert the user filters into the correct report entry, when others already exist', function () {
      const newReportId = 1;
      const stateBefore = {
        [newReportId]: {
          reportId: newReportId,
          data: [],
          isFetching: true,
          lastUpdated: 1503633600,
          error: null,
        },
        2: {
          reportId: 3,
          data: [
            {
              filterJson: '[{"cardNumber": {"firstSixDigits": "string","fullCardNumber": "string","lastFourDigits": "string"},"jsonKey": "string","maxCurrency": 0,"maxDate": "2017-09-27T11:10:47.700Z","minCurrency": 0,"minDate": "2017-09-27T11:10:47.700Z","multiSelectValues": ["01","02"],"searchField": "string"}]',
              id: 11,
              name: 'Oil Filter',
            },
          ],
          isFetching: false,
          lastUpdated: 1503633600,
          error: null,
        },
      };

      const reportUserFiltersResponse = [
        {
          filterJson: '[{"cardNumber": {"firstSixDigits": "string","fullCardNumber": "string","lastFourDigits": "string"},"jsonKey": "string","maxCurrency": 0,"maxDate": "2017-09-27T11:10:47.700Z","minCurrency": 0,"minDate": "2017-09-27T11:10:47.700Z","multiSelectValues": ["01","02"],"searchField": "string"}]',
          id: 12,
          name: 'Water Filter',
        },
      ];

      const action = reportFiltersActions.receiveReportUserFiltersSuccess(newReportId, reportUserFiltersResponse);

      const result = savedReportFiltersReducer(stateBefore, action);

      expect(Object.keys(result)).to.have.lengthOf(2);
      expect(result[newReportId].isFetching).to.be.false;
      expect(result[newReportId].error).to.not.be.ok;
      expect(result[newReportId].data).to.eql(reportUserFiltersResponse);
    });
  });

  describe('savedReportFilters reducer', function () {
    it('should set the saved filters for the specified report (no saved filters in store yet)', function () {
      const stateBefore = {};
      const reportId = 1;
      const savedFilter = {
        id: 1,
        name: 'foo',
        filterJson: '[{\"jsonKey\":\"chargebacks.case_received_datetime_date\",\"minDate\":1501560000,\"maxDate\":1504152000},{\"jsonKey\":\"chargebacks.case_case_resolved_datetime_date\",\"minDate\":1503633600,\"maxDate\":1503806400}]',
      };

      const action = reportFiltersActions.saveReportFilterSuccess(reportId, savedFilter);

      const result = savedReportFiltersReducer(stateBefore, action);

      expect(Object.keys(result)).to.have.lengthOf(1);
      expect(result[reportId].isFetching).to.be.false;
      expect(result[reportId].error).to.not.be.ok;
      expect(result[reportId].data[0]).to.eql(savedFilter);
      expect(result[reportId].lastUpdated).to.equal(Date.now());
    });

    it('should set the saved filters for the specified report (saved filters for that report in store)', function () {
      const stateBefore = {
        1: {
          reportId: 1,
          data: [
            {
              id: 1,
              name: 'foo',
              filterJson: '[{\"jsonKey\":\"chargebacks.case_received_datetime_date\",\"minDate\":1501560000,\"maxDate\":1504152000},{\"jsonKey\":\"chargebacks.case_case_resolved_datetime_date\",\"minDate\":1503633600,\"maxDate\":1503806400}]',
            },
          ],
          isFetching: false,
          lastUpdated: 1503633600,
          error: null,
        },
      };
      const reportId = 1;

      const savedFilter = {
        id: 2,
        name: 'bar',
        filterJson: '[{\"jsonKey\":\"chargebacks.case_received_datetime_date\",\"minDate\":1501560000,\"maxDate\":1504152000},{\"jsonKey\":\"chargebacks.case_case_resolved_datetime_date\",\"minDate\":1503633600,\"maxDate\":1503806400}]',
      };

      const action = reportFiltersActions.saveReportFilterSuccess(reportId, savedFilter);

      const result = savedReportFiltersReducer(stateBefore, action);

      expect(Object.keys(result)).to.have.lengthOf(1);      // same report, so same length of array of reports
      expect(result[reportId].isFetching).to.be.false;
      expect(result[reportId].error).to.not.be.ok;
      expect(result[reportId].data).to.have.lengthOf(2);    // additional named filter in report 1
      expect(result[reportId].data[1]).to.eql(savedFilter); // new filter at slot 2
      expect(result[reportId].lastUpdated).to.equal(Date.now());   // timestamp is updated
    });

    it('should set the saved filters for a new report (other report already in store)', function () {
      const stateBefore = {
        1: {
          reportId: 1,
          data: [
            {
              id: 1,
              name: 'foo',
              filterJson: '[{\"jsonKey\":\"chargebacks.case_received_datetime_date\",\"minDate\":1501560000,\"maxDate\":1504152000},{\"jsonKey\":\"chargebacks.case_case_resolved_datetime_date\",\"minDate\":1503633600,\"maxDate\":1503806400}]',
            },
          ],
          isFetching: false,
          lastUpdated: 1503633600,
          error: null,
        },
      };
      const reportId = 2;
      const savedFilter = {
        id: 66,
        name: 'foo',
        filterJson: '[{\"jsonKey\":\"chargebacks.case_received_datetime_date\",\"minDate\":1501560000,\"maxDate\":1504152000},{\"jsonKey\":\"chargebacks.case_case_resolved_datetime_date\",\"minDate\":1503633600,\"maxDate\":1503806400}]',
      };

      const action = reportFiltersActions.saveReportFilterSuccess(reportId, savedFilter);

      const result = savedReportFiltersReducer(stateBefore, action);

      expect(Object.keys(result)).to.have.lengthOf(2);                    // should now be 2 reports, by key
      expect(result[reportId].isFetching).to.be.false;
      expect(result[reportId].error).to.not.be.ok;
      expect(result[1].data).to.have.lengthOf(1);                         // one original named filter in report 1
      expect(result[reportId].data).to.have.lengthOf(1);                  // new named filter in report 2
      expect(result[reportId].data[0]).to.eql(savedFilter);               // new filter  in report 2
      expect(result[1].lastUpdated).to.equal(stateBefore[1].lastUpdated); // timestamp for report 2 is new
      expect(result[reportId].lastUpdated).to.equal(Date.now());          // timestamp for report 2 is new
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions, quotes, quote-props, no-useless-escape */
