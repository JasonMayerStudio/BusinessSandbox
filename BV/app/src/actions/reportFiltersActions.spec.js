/* eslint-disable func-names, prefer-arrow-callback, no-useless-escape, no-unused-expressions */

import { expect } from 'chai';
import sinon from 'sinon';
import moxios from 'moxios';

import * as reportFiltersActions from './reportFiltersActions';
import * as types from './actionTypes';

describe('Report Filters actions', function () {
  const callbackDelay = 5;
  const dispatch = sinon.spy();

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  describe('setCurrentReportFilter action', function () {
    it('should create an action to set the current filter for a report', function () {
      // arrange
      const reportId = 6;
      const filters = [
        {
          jsonKey: 'posted_date',
          minDate: 'yesterday',
        },
        {
          jsonKey: 'transaction_date',
          maxDate: '2017-09-27T11:10:47.700Z',
          minDate: '2017-09-27T11:10:47.700Z',
        },
      ];
      const expectedAction = {
        type: types.SET_CURRENT_REPORT_FILTER,
        reportId,
        filters,
      };

      // act
      const action = reportFiltersActions.setCurrentReportFilter(reportId, filters);

      // asset
      expect(action.type).to.equal(expectedAction.type);
      expect(action.reportId).to.equal(expectedAction.reportId);
      expect(action.filters).to.equal(expectedAction.filters);
    });
  });

  describe('clearCurrentReportFilter action', function () {
    it('should create an action to clear the current filter for a report', function () {
      // arrange
      const reportId = 6;
      const expectedAction = {
        type: types.CLEAR_CURRENT_REPORT_FILTER,
        reportId,
      };

      // act
      const action = reportFiltersActions.clearCurrentReportFilter(reportId);

      // asset
      expect(action.type).to.equal(expectedAction.type);
      expect(action.reportId).to.equal(expectedAction.reportId);
    });
  });

  describe('Retrieve Saved Filters actions', function () {
    it('should create an action to get user filters for a report', function () {
      // arrange
      const reportId = 6;
      const expectedAction = {
        type: types.REQUEST_REPORT_USER_FILTERS,
        reportId,
      };

      // act
      const action = reportFiltersActions.requestReportUserFilters(reportId);

      // asset
      expect(action.type).to.equal(expectedAction.type);
      expect(action.reportId).to.equal(expectedAction.reportId);
    });

    it('should create an action to handle getting user filters for a report successfully', function () {
      // arrange
      const reportId = 7;
      const results = [
        {
          filterJson: '[{"cardNumber": {"firstSixDigits": "string","fullCardNumber": "string","lastFourDigits": "string"},"jsonKey": "string","maxCurrency": 0,"maxDate": "2017-09-27T11:10:47.700Z","minCurrency": 0,"minDate": "2017-09-27T11:10:47.700Z","multiSelectValues": ["01","02"],"searchField": "string"}]',
          id: 1,
          name: 'My Secret Filter',
        },
      ];
      const expectedAction = {
        type: types.RECEIVE_REPORT_USER_FILTERS_SUCCESS,
        reportId,
        reportUserFilters: results,
      };
      // act
      const action = reportFiltersActions.receiveReportUserFiltersSuccess(reportId, results);

      // asset
      expect(action.type).to.equal(expectedAction.type);
      expect(action.reportId).to.equal(expectedAction.reportId);
      expect(action.reportUserFilters).to.equal(expectedAction.reportUserFilters);
    });

    it('should create a series of actions to handle getting user filters for a report', function (done) {
      const reportId = 1;
      const reportUserFilters = [
        {
          filterJson: '[{"jsonKey":"batches.file_date_full","minDate":1495947600,"maxDate":1514955600}]',
          id: 3,
          name: 'My Batches Filter',
        },
      ];

      moxios.withMock(() => {
        reportFiltersActions.getReportUserFilters(reportId, reportUserFilters)(dispatch);
        moxios.wait(() => {
          const request = moxios.requests.mostRecent();
          request.respondWith({
            status: 200,
          })
          .then(() => {
            expect(request.url).to.eql('\'http://localhost:3009/\'reports/1/user-filters');
            expect(request.config.method).to.eql('get');
            expect(dispatch.called).to.be.true;
            done();
          });
        }, callbackDelay);
      });
    });
  });

  describe('Save Report Filters actions', function () {
    it('should create an action to handle saving a report filter successfully', function () {
      // arrange
      const reportId = 1;
      const savedFilter = {
        id: 1,
        name: 'foo',
        filterJson: '[{\"jsonKey\":\"chargebacks.case_received_datetime_date\",\"minDate\":1501560000,\"maxDate\":1504152000},{\"jsonKey\":\"chargebacks.case_case_resolved_datetime_date\",\"minDate\":1503633600,\"maxDate\":1503806400}]',
      };
      const expectedAction = {
        type: types.RECEIVE_SAVE_REPORT_FILTER_SUCCESS,
        reportId,
        savedFilter,
      };

      // act
      const action = reportFiltersActions.saveReportFilterSuccess(reportId, savedFilter);

      // asset
      expect(action.type).to.equal(expectedAction.type);
      expect(action.reportId).to.equal(expectedAction.reportId);
      expect(action.savedFilter).to.equal(expectedAction.savedFilter);
    });

    it('should create an action to handle a failure to save a report filter', function () {
      // arrange
      const reportId = 3;
      const error = {
        errorCode: 404,
        message: 'Cannot get saved report filters',
      };
      const expectedAction = {
        type: types.RECEIVE_SAVE_REPORT_FILTER_FAILURE,
        reportId,
        error,
      };

      // act
      const action = reportFiltersActions.saveReportFilterFailure(reportId, error);

      // asset
      expect(action.type).to.equal(expectedAction.type);
      expect(action.reportId).to.equal(expectedAction.reportId);
      expect(action.error).to.equal(expectedAction.error);
    });

    it('should create a series of actions to save a report filter', function (done) {
      const reportId = 1;
      const filterName = 'My Report Filter';
      const filtersToSend = [
        {
          jsonKey: 'batches.file_date_full',
          maxDate: 1514937600,
          minDate: 1495929600,
        },
        {
          jsonKey: 'batches.batch_amount',
          maxCurrency: 2000,
          minCurrency: 100,
        },
      ];

      moxios.withMock(() => {
        reportFiltersActions.saveNamedFilter(reportId, filterName, filtersToSend)(dispatch);
        moxios.wait(() => {
          const request = moxios.requests.mostRecent();
          request.respondWith({
            status: 200,
          })
          .then(() => {
            expect(request.url).to.eql('\'http://localhost:3009/\'reports/1/user-filters');
            expect(request.config.method).to.eql('post');
            expect(dispatch.called).to.be.true;
            done();
          });
        }, callbackDelay);
      });
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-useless-escape, no-unused-expressions */
