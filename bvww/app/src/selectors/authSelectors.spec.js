/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import { expect } from 'chai';

import { getMockJwt, getMockUser } from 'Helpers/testHelpers/testUserMocks';

import { getAuthRole, isAuthenticated } from './authSelectors';
import initialState from '../reducers/initialState';


describe('Auth selectors', function () {
  describe('getAuthRole', function () {
    it('should return null if empty auth object', function () {
      const auth = Object.assign({}, initialState.auth, { session: null });
      const expected = null;

      const actual = getAuthRole(auth);

      expect(actual).to.equal(expected);
    });

    it('should return the name if there is an authed user', function () {
      const auth = Object.assign({}, initialState.auth, { session: null });
      const mockJwt = getMockJwt();
      const mockUser = getMockUser();
      auth.session = {
        sessionToken: mockJwt,
        user: mockUser,
      };
      const expected = auth.session.user.role;

      const actual = getAuthRole(auth);

      expect(actual.name).to.equal(expected.name);
      expect(actual.key).to.equal(expected.key);
      expect(actual.description).to.equal(expected.description);
      expect(actual.id).to.equal(expected.id);
      expect(actual.permissions.length).to.equal(expected.permissions.length);
    });
  });

  describe('isAuthenticated', function () {
    it('should return false if empty auth object', function () {
      const auth = Object.assign({}, initialState.auth, { session: null });

      const actual = isAuthenticated(auth);

      expect(actual).to.not.be.ok;
    });

    it('should return true if there is an authed user', function () {
      const auth = Object.assign({}, initialState.auth, { session: null });
      const mockJwt = getMockJwt();
      const mockUser = getMockUser();
      auth.session = {
        sessionToken: mockJwt,
        user: mockUser,
      };

      const actual = isAuthenticated(auth);

      expect(actual).to.be.ok;
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
