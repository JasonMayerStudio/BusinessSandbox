/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import { expect } from 'chai';
import sinon from 'sinon';

import {
  getMockReportMetadata,
  getMockReportData,
 } from 'Helpers/testHelpers/testMocks.js';

import * as currentReportActions from '../actions/currentReportActions';
import currentReportReducer from './currentReportReducer';

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
  describe('receiving data for current report', function () {
    it('should set the report state for requesting report data', function () {
      const stateBefore = {
        reportId: 3,
        data: {
          rows: [
            { id: 22 },
          ],
        },
        visualizations: [
          'https://130.211.6.62/login/embed/%2Fembed%2Flooks%2F14?nonce=%22inse8mmq61ednm296mk700j6cv%22&time=1505413053&session_length=900&external_user_id=%221.52deefa7-8abc-44d8-8855-1210e6c7c04b%22&permissions=%5B%22access_data%22%2C%22see_looks%22%5D&models=%5B%22disputes%22%5D&access_filters=%7B%7D&signature=ux0Y7faxG333luvUUWurAzB2uCU%3D&group_ids=%5B%5D&external_group_id=%5B%5D&user_attributes=%7B%22email%22%3A+%22gp_tech_support_admin%40globalpay.com%22%7D&force_logout_login=true',
          'https://130.211.6.62/login/embed/%2Fembed%2Flooks%2F15?nonce=%22bkugdgk6j45ntfgcuq7otocv1d%22&time=1505413053&session_length=900&external_user_id=%221.18b71772-77be-4512-b542-6363497df361%22&permissions=%5B%22access_data%22%2C%22see_looks%22%5D&models=%5B%22disputes%22%5D&access_filters=%7B%7D&signature=QeFRmTZGC3KSzM%2BDTV3dpt3jSZw%3D&group_ids=%5B%5D&external_group_id=%5B%5D&user_attributes=%7B%22email%22%3A+%22gp_tech_support_admin%40globalpay.com%22%7D&force_logout_login=true',
        ],
        isFetching: false,
        lastUpdated: null,
        error: { message: 'This earlier call failed.' },
      };
      const reportMetadata = getMockReportMetadata();

      const action = currentReportActions.requestReportData(reportMetadata.id);

      const result = currentReportReducer(stateBefore, action);

      expect(result.reportId).to.eq(reportMetadata.id);
      expect(result.isFetching).to.be.true;
      expect(result.data).to.eql({});
      expect(result.visualizations).to.eql(stateBefore.visualizations);
      expect(result.lastUpdated).to.eql(stateBefore.lastUpdated);
      expect(result.error).to.eql(null);
    });

    it('should set data to current report in the state when received', function () {
      const stateBefore = {
        reportId: 44,
        data: {},
        isFetching: false,
        lastUpdated: null,
        error: { message: 'This earlier call failed.' },
      };
      const reportData = getMockReportData();

      const action = currentReportActions.receiveReportDataSuccess(reportData);

      const result = currentReportReducer(stateBefore, action);

      expect(result.reportId).to.eq(stateBefore.reportId);
      expect(result.isFetching).to.be.false;
      expect(result.lastUpdated).to.equal(Date.now());
      expect(result.error).to.eql(null);
      expect(result.data).to.eql(reportData);
    });

    it('should set the report state for requesting report visualizations', function () {
      const reportMetadata = getMockReportMetadata();
      const stateBefore = {
        reportId: reportMetadata.id,
        data: {
          rows: [
            { id: 22 },
          ],
        },
        visualizations: [
          'https://130.211.6.62/login/embed/%2Fembed%2Flooks%2F14?nonce=%22inse8mmq61ednm296mk700j6cv%22&time=1505413053&session_length=900&external_user_id=%221.52deefa7-8abc-44d8-8855-1210e6c7c04b%22&permissions=%5B%22access_data%22%2C%22see_looks%22%5D&models=%5B%22disputes%22%5D&access_filters=%7B%7D&signature=ux0Y7faxG333luvUUWurAzB2uCU%3D&group_ids=%5B%5D&external_group_id=%5B%5D&user_attributes=%7B%22email%22%3A+%22gp_tech_support_admin%40globalpay.com%22%7D&force_logout_login=true',
          'https://130.211.6.62/login/embed/%2Fembed%2Flooks%2F15?nonce=%22bkugdgk6j45ntfgcuq7otocv1d%22&time=1505413053&session_length=900&external_user_id=%221.18b71772-77be-4512-b542-6363497df361%22&permissions=%5B%22access_data%22%2C%22see_looks%22%5D&models=%5B%22disputes%22%5D&access_filters=%7B%7D&signature=QeFRmTZGC3KSzM%2BDTV3dpt3jSZw%3D&group_ids=%5B%5D&external_group_id=%5B%5D&user_attributes=%7B%22email%22%3A+%22gp_tech_support_admin%40globalpay.com%22%7D&force_logout_login=true',
        ],
        isFetching: false,
        lastUpdated: 123456789,
        error: { message: 'This earlier call failed.' },
      };

      const action = currentReportActions.requestReportVisualizations(reportMetadata.id);

      const result = currentReportReducer(stateBefore, action);

      expect(result.reportId).to.eq(reportMetadata.id);
      expect(result.isFetching).to.be.false;
      expect(result.data).to.eql(stateBefore.data);
      expect(result.visualizations).to.eql([]);
      expect(result.lastUpdated).to.eql(stateBefore.lastUpdated);
      expect(result.error).to.eql(stateBefore.error);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback */
