/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */
import { expect } from 'chai';
import sinon from 'sinon';
import moxios from 'moxios';

import * as statementActions from './statementActions';
import * as types from './actionTypes';

describe('Statement actions', function () {
  const callbackDelay = 5;

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('should create an action to request statements', function () {
    const expectedAction = {
      type: types.REQUEST_STATEMENTS,
    };

    const action = statementActions.requestStatements();

    expect(action).to.eql(expectedAction);
  });

  it('should create an action to receive statements successfully', function () {
    const statements = [
      {
        id: 2,
        merchantNumber: 1234567890,
        statement: 'February 2017 Merchant Statement',
        month: 'February',
        year: 2017,
        downloadLink: 'february-2017.pdf',
      },
      {
        id: 3,
        merchantNumber: 1234567890,
        statement: 'March 2017 Merchant Statement',
        month: 'March',
        year: 2017,
        downloadLink: 'march-2017.pdf',
      },
    ];

    const expectedAction = {
      type: types.RECEIVE_STATEMENTS_SUCCESS,
      statements,
    };

    const action = statementActions.receiveStatementsSuccess(statements);

    expect(action).to.eql(expectedAction);
  });

  it('should create a series of actions to successfully receive statements', function (done) {
    const statements = [
      {
        id: 2,
        merchantNumber: 1234567890,
        statement: 'February 2017 Merchant Statement',
        month: 'February',
        year: 2017,
        downloadLink: 'february-2017.pdf',
      },
      {
        id: 3,
        merchantNumber: 1234567890,
        statement: 'March 2017 Merchant Statement',
        month: 'March',
        year: 2017,
        downloadLink: 'march-2017.pdf',
      },
    ];

    // const hasChainAccess = true;

    const dispatch = sinon.spy();

    moxios.withMock(() => {
      statementActions.fetchStatements()(dispatch);
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();

        request.respondWith({
          status: 200,
          response: {
            data: statements,
          },
        })
        .then(() => {
          expect(request.url).to.eql('\'http://localhost:3009/\'statements/merchant');
          expect(request.config.method).to.eql('get');
          expect(dispatch.called).to.be.true;
          done();
        });
      }, callbackDelay);
    });
  });
});
/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
