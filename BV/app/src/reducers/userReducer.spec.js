/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import { expect } from 'chai';
import sinon from 'sinon';

import * as userActions from '../actions/userActions';
import userReducer from './userReducer';

describe('User reducer', function () {
  let clock;

  beforeEach(function () {
    const now = new Date().getTime();
    clock = sinon.useFakeTimers(now);
  });

  afterEach(function () {
    clock.restore();
  });

  it('should set the users state for requesting users', function () {
    const stateBefore = {
      data: [],
      isFetching: false,
      lastUpdated: null,
      error: {},
    };

    const action = userActions.requestUsers();

    const result = userReducer(stateBefore, action);

    expect(result.isFetching).to.be.true;
    expect(result.data).to.eql(stateBefore.data);
    expect(result.lastUpdated).to.eql(stateBefore.lastUpdated);
    expect(result.error).to.eql(null);
  });

  it('should set the users on state when users are received', function () {
    const stateBefore = {
      data: [],
      isFetching: true,
      lastUpdated: null,
      error: {},
    };
    const users = [
      {
        id: 1,
      },
      {
        id: 2,
      },
    ];

    const action = userActions.receiveUsersSuccess(users);

    const result = userReducer(stateBefore, action);

    expect(result.isFetching).to.be.false;
    expect(result.data).to.eql(users);
    expect(result.lastUpdated).to.equal(Date.now());
    expect(result.error).to.eql(null);
  });

  it('should set the error object on state when an error occurs', function () {
    const stateBefore = {
      data: [{ id: 3 }],
      isFetching: true,
      lastUpdated: Date.now(),
      error: {},
    };
    const error = {
      message: 'Cannot retrieve users at this time',
    };

    const action = userActions.receiveUsersFailure(error);

    clock.tick(500); // simulate 0.5 second wait, to make sure lastUpdated remains the same

    const result = userReducer(stateBefore, action);

    expect(result.isFetching).to.be.false;
    expect(result.data).to.eql(stateBefore.data);
    expect(result.lastUpdated).to.equal(stateBefore.lastUpdated);
    expect(result.error).to.eql(error);
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
