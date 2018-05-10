/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import { expect } from 'chai';
import sinon from 'sinon';

import * as rolesPermissionsActions from '../actions/rolesPermissionsActions';
import rolesPermissionsReducer from './rolesPermissionsReducer';

describe('Roles and  Permissions reducer', function () {
  let clock;

  beforeEach(function () {
    const now = new Date().getTime();
    clock = sinon.useFakeTimers(now);
  });

  afterEach(function () {
    clock.restore();
  });

  it('should set the rolesPermissions state for requesting rolesPermissions', function () {
    const stateBefore = {
      data: [],
      isFetching: false,
      lastUpdated: null,
      error: {},
    };

    const action = rolesPermissionsActions.requestRolesPermissions();

    const result = rolesPermissionsReducer(stateBefore, action);

    expect(result.isFetching).to.be.true;
    expect(result.data).to.eql(stateBefore.data);
    expect(result.lastUpdated).to.eql(stateBefore.lastUpdated);
    expect(result.error).to.eql(null);
  });

  it('should set the rolesPermissions on state when rolesPermissions are received', function () {
    const stateBefore = {
      data: [],
      isFetching: true,
      lastUpdated: null,
      error: null,
    };
    const rolesPermissions = [
      {
        id: 1,
      },
      {
        id: 2,
      },
    ];

    const action = rolesPermissionsActions.receiveRolesPermissionsSuccess(rolesPermissions);

    const result = rolesPermissionsReducer(stateBefore, action);

    expect(result.isFetching).to.be.false;
    expect(result.data).to.eql(rolesPermissions);
    expect(result.lastUpdated).to.equal(Date.now());
    expect(result.error).to.eql(null);
  });

  it('should set the error object on state when an error occurs', function () {
    const stateBefore = {
      data: [{ id: 3 }],
      isFetching: true,
      lastUpdated: Date.now(),
      error: null,
    };
    const error = {
      message: 'Cannot retrieve rolesPermissions at this time',
    };

    const action = rolesPermissionsActions.receiveRolesPermissionsFailure(error);

    clock.tick(500); // simulate 0.5 second wait, to make sure lastUpdated remains the same

    const result = rolesPermissionsReducer(stateBefore, action);

    expect(result.isFetching).to.be.false;
    expect(result.data).to.eql(stateBefore.data);
    expect(result.lastUpdated).to.equal(stateBefore.lastUpdated);
    expect(result.error).to.eql(error);
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
