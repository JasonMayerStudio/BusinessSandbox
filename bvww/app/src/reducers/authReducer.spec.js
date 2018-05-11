/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import { expect } from 'chai';

import * as authActions from '../actions/authActions';
import authReducer from './authReducer';

describe('Auth reducer', function () {
  describe('Start Login action', function () {
    it('should set the state to checking', function () {
      const stateBefore = {
        auth: {
          isFetching: false,
          session: null,
          error: null,
        },
      };

      const action = authActions.requestLogin();

      const result = authReducer(stateBefore, action);

      expect(result.isFetching).to.be.true;
      expect(result.session).to.not.be.ok;
      expect(result.error).to.not.be.ok;
    });
  });

  describe('Set token only action', function () {
    it('should set a new token in the session object', function () {
      const stateBefore = {
        isFetching: false,
        session: null,
        error: null,
      };
      const webToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6ImhRbmptOHhiNUVUbmFjdjNTUmxEYXRyVEFxaDROTnlJMGk1aEI4TGtqc0EifQ.eyJleHAiOjE1MTAxNjA1MDIsIm5iZiI6MTUxMDE1NjkwMiwidmVyIjoiMS4wIiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5taWNyb3NvZnRvbmxpbmUuY29tL2NlY2I5Yzk0LTg1MzEtNDY0YS1iNzk2LTNkNWUxZTdhZWM5Ni92Mi4wLyIsInN1YiI6ImI4M2RhNjY3LTQ5MmQtNGU4YS1hMjFmLTM3MDg1NDE5ODJmNSIsImF1ZCI6ImRhODBiYjJhLTU0N2MtNGJkZC04M2RjLWExOWQ1MmQ1Y2ZlYyIsImFjciI6ImIyY18xYV9zaWdudXBfc2lnbmluX2FhZCIsIm5vbmNlIjoiMjlkM2VmMDRkZGVmNDI2Zjg2OWQyMjA3MjA2YWYzM2UiLCJpYXQiOjE1MTAxNTY5MDIsImF1dGhfdGltZSI6MTUxMDE1NjkwMiwibmFtZSI6Ik1lcmNoYW50IEFjY291bnQgQWRtaW4iLCJnaXZlbl9uYW1lIjoiTWVyY2hhbnQiLCJmYW1pbHlfbmFtZSI6IkFjY291bnQgQWRtaW4iLCJlbWFpbCI6Im1lcmNoYW50X2FjY291bnRfYWRtaW5AZ2xvYmFscGF5LmNvbSJ9.G05VaauhTyRfXe85cioD4kklGXEYbTgsWorzQMjhZFaidpJT06l9TuglYUZ6IYPscaIXJF-p8UDTqRr0pFIvCZZWNIIpWe14GT3RScmSVdJqHs8poSSHMzYsiIpO--ti4r7WjjBZJU4D-T7zlQXAgPieP5uNS50IbPrtdnf-2wvwX7eQuMMO8YcLPq_m8fZqeeRI0SOdcMdQylBYCl8-diAt1ix7j29I7CXN1mNwrNUWbh1It5Cv9ecgRlXgxS_hgLvuXu-eVT-rQP24w4HPU80q4CUefN99TEUOfvtleq9Q3i_92rv3Lj0QDHno2pfYrFLyUKhoVDhCYDuh3HA2qA';

      const action = authActions.setAuthToken(webToken);

      const result = authReducer(stateBefore, action);

      const newSession = {
        sessionToken: webToken,
      };
      expect(result.isFetching).to.be.false;
      expect(result.session).to.eql(newSession);
      expect(result.error).to.not.be.ok;
    });
  });

  describe('Login Success action', function () {
    it('should set the session for a user', function () {
      const stateBefore = {
        auth: {
          isFetching: true,
          session: null,
          error: null,
        },
      };
      const newAuth = {
        sessionToken: 5,
        user: {
          firstName: 'GP Tech',
          lastName: 'Admin',
          email: 'gp_tech support_admin',
          role: {
            description: 'string',
            id: 0,
            key: 'string',
            name: 'string',
            permissions: [
              {
                abbreviation: 'string',
                description: 'string',
                id: 0,
                key: 'string',
                name: 'string',
                optional: true,
              },
            ],
          },
          status: 'ACTIVE',
          userId: 0,
        },
      };

      const action = authActions.loginSuccess(newAuth);

      const result = authReducer(stateBefore, action);

      expect(result.isFetching).to.be.false;
      expect(result.session).to.eql(newAuth);
      expect(result.error).to.not.be.ok;
    });
  });

  describe('Login Failure action', function () {
    it('should clear loading state but not populate the session', function () {
      const stateBefore = {
        auth: {
          isFetching: true,
          session: null,
          error: null,
        },
      };
      const error = {
        code: 5,
        message: 'Invalid username or password',
      };

      const action = authActions.loginFailure(error);

      const result = authReducer(stateBefore, action);

      expect(result.isFetching).to.be.false;
      expect(result.error).to.eql(error);
    });
  });

  describe('Logout action', function () {
    it('should clear the session token', function () {
      const stateBefore = {
        auth: {
          email: 'merchant employee',
          sessionToken: 3,
        },
      };

      const action = authActions.logoutFromState();

      const result = authReducer(stateBefore, action);

      expect(result.isFetching).to.be.false;
      expect(result.session).to.not.be.ok;
      expect(result.error).to.not.be.ok;
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
