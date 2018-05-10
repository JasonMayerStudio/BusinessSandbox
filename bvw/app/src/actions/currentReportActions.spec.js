/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import { expect } from 'chai';
import sinon from 'sinon';
import moxios from 'moxios';

import * as currentReportActions from './currentReportActions';
import * as types from './actionTypes';

describe('Current Report actions', function () {
  const callbackDelay = 5;
  const dispatch = sinon.spy();

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('should create an action to get data for a report', function () {
    // arrange
    const reportId = 42;
    const expectedAction = {
      type: types.REQUEST_REPORT_DATA,
      reportId,
    };

    // act
    const action = currentReportActions.requestReportData(reportId);

    // asset
    expect(action).to.eql(expectedAction);
  });

  it('should create an action to handle getting data for a report successfully', function () {
    // arrange
    const results = {
      rows: [
        {
          'chargebacks.tran_transaction_datetime_date': '2017-08-19',
          'chargebacks.cbk_rpt_card_type': 'VISA',
          'chargebacks.rpt_case_type_code': '1',
        },
        {
          'chargebacks.tran_transaction_datetime_date': '2017-08-19',
          'chargebacks.cbk_rpt_card_type': 'MASTER',
          'chargebacks.rpt_case_type_code': '1',
        },
      ],
    };

    const expectedAction = {
      type: types.RECEIVE_REPORT_DATA_SUCCESS,
      reportData: results,
    };
    // act
    const action = currentReportActions.receiveReportDataSuccess(results);

    // asset
    expect(action.type).to.equal(expectedAction.type);
    expect(action.reportData).to.equal(expectedAction.reportData);
  });

  it('should create a series of actions to get report data successfully', function (done) {
    const results = {
      rows: [
        {
          'chargebacks.tran_transaction_datetime_date': '2017-08-19',
          'chargebacks.cbk_rpt_card_type': 'VISA',
          'chargebacks.rpt_case_type_code': '1',
        },
        {
          'chargebacks.tran_transaction_datetime_date': '2017-08-19',
          'chargebacks.cbk_rpt_card_type': 'MASTER',
          'chargebacks.rpt_case_type_code': '1',
        },
      ],
    };

    const reportRequestObject = {
      report: {
        id: 1,
        category: 'Disputes',
        description: 'extendedDescription of the chargebacks report',
        displayOrder: 4,
        lookerModel: 'disputes_np',
        lookerView: 'chargebacks',
        name: 'Chargebacks',
      },
      filters: [
        {
          jsonKey: 'chargebacks.case_received_date_full',
          minDate: 'yesterday',
          maxDate: 'yesterday',
          lastUpdated: Date.now(),
        },
      ],
    };

    const reportRequestObjectStringified = JSON.stringify(reportRequestObject);

    moxios.withMock(() => {
      currentReportActions.getReportData(reportRequestObject)(dispatch);
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
            data: results,
          },
        })
        .then(() => {
          expect(request.url).to.eql('\'http://localhost:3009/\'reports/1');
          expect(request.config.method).to.eql('post');
          expect(request.config.data).to.eql(reportRequestObjectStringified);
          expect(dispatch.called).to.be.true;
          done();
        });
      }, callbackDelay);
    });
  });

  it('should create an action to get visualizations for a report', function () {
    // arrange
    const reportId = 23;
    const expectedAction = {
      type: types.REQUEST_REPORT_VISUALIZATIONS,
      reportId,
    };

    // act
    const action = currentReportActions.requestReportVisualizations(reportId);

    // asset
    expect(action).to.eql(expectedAction);
  });

  it('should create an action to handle getting visualizations for a report successfully', function () {
    // arrange
    const results = [
      'https://130.211.6.62/login/embed/%2Fembed%2Flooks%2F14?nonce=%22inse8mmq61ednm296mk700j6cv%22&time=1505413053&session_length=900&external_user_id=%221.52deefa7-8abc-44d8-8855-1210e6c7c04b%22&permissions=%5B%22access_data%22%2C%22see_looks%22%5D&models=%5B%22disputes%22%5D&access_filters=%7B%7D&signature=ux0Y7faxG333luvUUWurAzB2uCU%3D&group_ids=%5B%5D&external_group_id=%5B%5D&user_attributes=%7B%22email%22%3A+%22gp_tech_support_admin%40globalpay.com%22%7D&force_logout_login=true',
      'https://130.211.6.62/login/embed/%2Fembed%2Flooks%2F15?nonce=%22bkugdgk6j45ntfgcuq7otocv1d%22&time=1505413053&session_length=900&external_user_id=%221.18b71772-77be-4512-b542-6363497df361%22&permissions=%5B%22access_data%22%2C%22see_looks%22%5D&models=%5B%22disputes%22%5D&access_filters=%7B%7D&signature=QeFRmTZGC3KSzM%2BDTV3dpt3jSZw%3D&group_ids=%5B%5D&external_group_id=%5B%5D&user_attributes=%7B%22email%22%3A+%22gp_tech_support_admin%40globalpay.com%22%7D&force_logout_login=true',
    ];
    const expectedAction = {
      type: types.RECEIVE_REPORT_VISUALIZATIONS_SUCCESS,
      reportVisualizations: results,
    };

    // act
    const action = currentReportActions.receiveReportVisualizationsSuccess(results);

    // asset
    expect(action).to.eql(expectedAction);
  });

  it('should create a series of actions to handle getting visualizations for a report successfully', function (done) {
    const results = [
      'https://130.211.6.62/login/embed/%2Fembed%2Flooks%2F14?nonce=%22inse8mmq61ednm296mk700j6cv%22&time=1505413053&session_length=900&external_user_id=%221.52deefa7-8abc-44d8-8855-1210e6c7c04b%22&permissions=%5B%22access_data%22%2C%22see_looks%22%5D&models=%5B%22disputes%22%5D&access_filters=%7B%7D&signature=ux0Y7faxG333luvUUWurAzB2uCU%3D&group_ids=%5B%5D&external_group_id=%5B%5D&user_attributes=%7B%22email%22%3A+%22gp_tech_support_admin%40globalpay.com%22%7D&force_logout_login=true',
      'https://130.211.6.62/login/embed/%2Fembed%2Flooks%2F15?nonce=%22bkugdgk6j45ntfgcuq7otocv1d%22&time=1505413053&session_length=900&external_user_id=%221.18b71772-77be-4512-b542-6363497df361%22&permissions=%5B%22access_data%22%2C%22see_looks%22%5D&models=%5B%22disputes%22%5D&access_filters=%7B%7D&signature=QeFRmTZGC3KSzM%2BDTV3dpt3jSZw%3D&group_ids=%5B%5D&external_group_id=%5B%5D&user_attributes=%7B%22email%22%3A+%22gp_tech_support_admin%40globalpay.com%22%7D&force_logout_login=true',
    ];

    const reportRequestObject = {
      report: {
        id: 1,
        category: 'Disputes',
        description: 'extendedDescription of the chargebacks report',
        displayOrder: 4,
        lookerModel: 'disputes_np',
        lookerView: 'chargebacks',
        name: 'Chargebacks',
      },
      filters: [
        {
          jsonKey: 'chargebacks.case_received_date_full',
          minDate: 'yesterday',
          maxDate: 'yesterday',
          lastUpdated: Date.now(),
        },
      ],
    };

    const reportRequestObjectStringified = JSON.stringify(reportRequestObject.filters);

    moxios.withMock(() => {
      currentReportActions.getReportVisualizations(reportRequestObject)(dispatch);
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: results,
        })
        .then(() => {
          expect(request.url).to.eql('\'http://localhost:3009/\'reports/1/visualizations');
          expect(request.config.method).to.eql('post');
          expect(request.config.data).to.eql(reportRequestObjectStringified);
          expect(dispatch.called).to.be.true;
          done();
        });
      }, callbackDelay);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
