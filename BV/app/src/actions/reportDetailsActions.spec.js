/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */
import { expect } from 'chai';
import sinon from 'sinon';
import moxios from 'moxios';

import * as reportDetailsActions from './reportDetailsActions';
import * as types from './actionTypes';

describe('Report detail actions', function () {
  const callbackDelay = 5;
  const dispatch = sinon.spy();

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('should create an action to request report row details', function () {
    const expectedAction = {
      type: types.REQUEST_REPORT_ROW_DETAILS,
    };

    const action = reportDetailsActions.requestReportRowDetails();

    expect(action).to.eql(expectedAction);
  });

  it('should create an action to receive report row details successfully', function () {
    const details = [
      {
        'authorizations.card_type': '40',
        'authorizations.merchant_dba_name': 'TRAVELODGE GB0000',
        'authorizations.hierarchy': '052 03 001 190 AAB',
        'authorizations.pos_entry_code': '01',
        'authorizations.iso_numeric_currency_code': '826',
        'authorizations.card_number_rk': '471565XXXXXX2191',
        'authorizations.currency_code': 'GBP',
        'authorizations.auth_code': '066252',
        'authorizations.timezone_offset': 'EASTERN',
        'authorizations.etlbatchid': '20171117181130',
        'authorizations.pmt_service_ind': null,
        'authorizations.issuer_response_code_desc': 'Refer to card issuer',
        'authorizations.cvc_code': null,
        'authorizations.principal': '001',
        'authorizations.associate': '190',
        'authorizations.outlet': '00000',
        'authorizations.tran_id': null,
        'authorizations.auth_time_full': '2018-01-01 00:00:00',
        'authorizations.chain': 'AAB',
        'authorizations.auth_datetime_full': '2018-01-01 00:00:00',
        'authorizations.avs_response_code': 'Y',
        'authorizations.tran_code': '05',
        'authorizations.auth_date_full': '2018-01-01 00:00:00',
        'authorizations.card_scheme': 'VI',
        'authorizations.auth_source_code': '1',
        'authorizations.auth_desc': null,
        'authorizations.issuer_response_code': '01',
        'authorizations.auth_vendor': 'B24',
        'authorizations.seq_key': '1922596193637148',
        'authorizations.auth_ma_auth_count': '1',
        'authorizations.merchant_number': '66643201',
        'authorizations.charge_type': '2419',
        'authorizations.corp': '052',
        'authorizations.region': '03',
      },
    ];

    const rowId = 1922596193637148;

    const expectedAction = {
      type: types.RECEIVE_REPORT_ROW_DETAILS_SUCCESS,
      details,
      rowId,
      receivedAt: Date.now(),
    };

    const action = reportDetailsActions.receiveReportRowDetailsSuccess(details, rowId);

    expect(action.type).to.eql(expectedAction.type);
    expect(action.details).to.eql(expectedAction.details);
    expect(action.rowId).to.eql(expectedAction.rowId);
  });

  it('should create an action to handle failing to get report row details successfully', function () {
    const error = 'Failed to fetch report row details';

    const expectedAction = {
      type: types.RECEIVE_REPORT_ROW_DETAILS_FAILURE,
      error,
      receivedAt: Date.now(),
    };

    const action = reportDetailsActions.receiveReportRowDetailsFailure(error);

    expect(action.type).to.eql(expectedAction.type);
    expect(action.error).to.eql(expectedAction.error);
  });

  it('should create a series of actions to handle fetching report row details', function (done) {
    const reportId = 1;
    const rowId = 1922596193637148;

    moxios.withMock(() => {
      reportDetailsActions.fetchReportRowDetails(reportId, rowId)(dispatch);
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
        })
        .then(() => {
          expect(request.url).to.eql('\'http://localhost:3009/\'/reports/1/1922596193637148');
          expect(request.config.method).to.eql('get');
          expect(dispatch.called).to.be.true;
          done();
        });
      }, callbackDelay);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
