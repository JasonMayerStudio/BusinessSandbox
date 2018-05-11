/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import { expect } from 'chai';
import sinon from 'sinon';
import moxios from 'moxios';

import * as rolesPermissionsActions from './rolesPermissionsActions';
import * as types from './actionTypes';

describe('Roles and Permissions actions', function () {
  const dispatch = sinon.spy();
  const callbackDelay = 5;

  describe('request roles and permissions', function () {
    it('should create an action to get roles and permissions', function () {
      // arrange
      const expectedAction = {
        type: types.REQUEST_ROLES_PERMISSIONS,
      };

      // act
      const action = rolesPermissionsActions.requestRolesPermissions();

      // asset
      expect(action).to.eql(expectedAction);
    });
  });

  describe('get roles and permissions success', function () {
    beforeEach(function () {
      moxios.install();
    });

    afterEach(function () {
      moxios.uninstall();
    });

    it('should create an action to handle roles and permissions success', function () {
      // arrange
      const results = [
        {
          name: 'Merchant Employee',
          description: 'THIS IS A ROLE IN ENGLISH!',
          id: 1,
          permissions: [
            {
              id: 1,
              name: 'Create_Merchant_Employee',
              description: 'THIS IS A PERMISSION IN ENGLISH!',
              optional: false,
            },
          ],
        },
      ];
      const expectedAction = {
        type: types.RECEIVE_ROLES_PERMISSIONS_SUCCESS,
        rolesPermissions: results,
        receivedAt: Date.now(),
      };
      // act
      const action = rolesPermissionsActions.receiveRolesPermissionsSuccess(results);

      // asset
      expect(action.type).to.eql(expectedAction.type);
      expect(action.rolesPermissions).to.eql(expectedAction.rolesPermissions);
    });
  });

  describe('get roles and permissions failure', function () {
    it('should handle failing to get roles and permissions', function () {
      // arrange
      const error = 'Server error';
      const expectedAction = {
        type: types.RECEIVE_ROLES_PERMISSIONS_FAILURE,
        error,
      };

      // act
      const action = rolesPermissionsActions.receiveRolesPermissionsFailure(error);

      // asset
      expect(action).to.eql(expectedAction);
    });
  });

  describe('get roles and permissions hitting api', function (done) {
    it('should create a series of actions to successfully get all roles and permissions', function () {
      moxios.withMock(() => {
        rolesPermissionsActions.getAllRolesPermissions()(dispatch);
        moxios.wait(() => {
          const request = moxios.requests.mostRecent();
          request.respondWith({
            status: 200,
          })
          .then(() => {
            expect(request.url).to.eql('\'http://localhost:3009/\'roles/language/en-US');
            expect(request.config.method).to.eql('get');
            expect(dispatch.called).to.be.true;
            done();
          });
        }, callbackDelay);
      });
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
