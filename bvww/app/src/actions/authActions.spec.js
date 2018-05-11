/* eslint-disable func-names, prefer-arrow-callback */

import { expect } from 'chai';
import moxios from 'moxios';

import * as authActions from './authActions';
import * as types from './actionTypes';

describe('Auth actions', function () {
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('should create an action to only set the auth token', function () {
    // arrange
    const webToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6ImhRbmptOHhiNUVUbmFjdjNTUmxEYXRyVEFxaDROTnlJMGk1aEI4TGtqc0EifQ.eyJleHAiOjE1MTAxNjA1MDIsIm5iZiI6MTUxMDE1NjkwMiwidmVyIjoiMS4wIiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5taWNyb3NvZnRvbmxpbmUuY29tL2NlY2I5Yzk0LTg1MzEtNDY0YS1iNzk2LTNkNWUxZTdhZWM5Ni92Mi4wLyIsInN1YiI6ImI4M2RhNjY3LTQ5MmQtNGU4YS1hMjFmLTM3MDg1NDE5ODJmNSIsImF1ZCI6ImRhODBiYjJhLTU0N2MtNGJkZC04M2RjLWExOWQ1MmQ1Y2ZlYyIsImFjciI6ImIyY18xYV9zaWdudXBfc2lnbmluX2FhZCIsIm5vbmNlIjoiMjlkM2VmMDRkZGVmNDI2Zjg2OWQyMjA3MjA2YWYzM2UiLCJpYXQiOjE1MTAxNTY5MDIsImF1dGhfdGltZSI6MTUxMDE1NjkwMiwibmFtZSI6Ik1lcmNoYW50IEFjY291bnQgQWRtaW4iLCJnaXZlbl9uYW1lIjoiTWVyY2hhbnQiLCJmYW1pbHlfbmFtZSI6IkFjY291bnQgQWRtaW4iLCJlbWFpbCI6Im1lcmNoYW50X2FjY291bnRfYWRtaW5AZ2xvYmFscGF5LmNvbSJ9.G05VaauhTyRfXe85cioD4kklGXEYbTgsWorzQMjhZFaidpJT06l9TuglYUZ6IYPscaIXJF-p8UDTqRr0pFIvCZZWNIIpWe14GT3RScmSVdJqHs8poSSHMzYsiIpO--ti4r7WjjBZJU4D-T7zlQXAgPieP5uNS50IbPrtdnf-2wvwX7eQuMMO8YcLPq_m8fZqeeRI0SOdcMdQylBYCl8-diAt1ix7j29I7CXN1mNwrNUWbh1It5Cv9ecgRlXgxS_hgLvuXu-eVT-rQP24w4HPU80q4CUefN99TEUOfvtleq9Q3i_92rv3Lj0QDHno2pfYrFLyUKhoVDhCYDuh3HA2qA';
    const expectedAction = {
      type: types.SET_AUTH_TOKEN,
      webToken,
    };

    // act
    const action = authActions.setAuthToken(webToken);

    // asset
    expect(action).to.eql(expectedAction);
  });

  it('should create an action to request login', function () {
    const expectedAction = {
      type: types.REQUEST_AUTH_LOGIN,
    };

    const action = authActions.requestLogin();

    expect(action).to.eql(expectedAction);
  });

  it('should create an action upon auth login success', function () {
    const session = {
      sessionToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6ImhRbmptOHhiNUVUbmFjdjNTUmxEYXRyVEFxaDROTnlJMGk1aEI4TGtqc0EifQ.eyJleHAiOjE1MTQ1Nzg0MzYsIm5iZiI6MTUxNDU3NDgzNiwidmVyIjoiMS4wIiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5taWNyb3NvZnRvbmxpbmUuY29tL2NlY2I5Yzk0LTg1MzEtNDY0YS1iNzk2LTNkNWUxZTdhZWM5Ni92Mi4wLyIsInN1YiI6ImIyZjRkYWM2LTcwZmItNGI4My1hYWJkLWQ5ODliNzc0MjY4MSIsImF1ZCI6ImRhODBiYjJhLTU0N2MtNGJkZC04M2RjLWExOWQ1MmQ1Y2ZlYyIsImFjciI6ImIyY18xYV9zaWdudXBfc2lnbmluX2FhZCIsIm5vbmNlIjoiYzAxNmVkYjgzMTRjNDEwNThhYmZjNzJiNmM5NmUzYzMiLCJpYXQiOjE1MTQ1NzQ4MzYsImF1dGhfdGltZSI6MTUxNDU3NDgzNiwibmFtZSI6Ik1lcmNoYW50IFVzZXIiLCJnaXZlbl9uYW1lIjoiTWVyY2hhbnQiLCJmYW1pbHlfbmFtZSI6IlVzZXIiLCJlbWFpbCI6Im1lcmNoYW50X3VzZXJAZ2xvYmFscGF5LmNvbSJ9.RA9TRwkcdVpTJMIDKYY1ABaB3m5zpJQtm0bYFKw3huNL04NGFugs3XqN6We2pgzDCJQo__VsuD0eRFyMTlLoMhuNUC-y45jEG7e2Fo_-f5WUMfLs-NYd9RB5eiSkjz7ArHTJeCkKeHhkXtn6g9Q6V2iFbAqk9RinPcFpIhXG0DKOgrL23EItbjFE3LWCKMVFaczqdm9y-0_EK1Ko6egWabGHwTc-vTzXLrdUYOc7aG92YXr1j4lHTbJDDv3YZqMszWApC2ArkWZFLjhLXVO-8OgA5h9Y9Lv_Rl7ouSrpnc0uvbucc2Cq7z6mzeGBYxqxfRgkyOFl26Jd69IYHSZFMQ',
      user: {
        email: 'merchant_user@globalpay.com',
        firstName: 'merchant',
        languageAbbr: 'en-US',
        lastLoginDate: 1511913600000,
        lastName: 'user',
        maxMonths: 25,
        primaryMerchantId: 572,
        status: 'Active',
        userId: 2,
        role: {
          name: 'Merchant User',
          description: 'Merchant User',
          key: 'MERCHANT_USER',
          id: 1,
          permissions: [
            {
              name: 'Can Log In',
              description: 'This is a description of Can Log In',
              key: 'CAN_LOG_IN',
              id: 76,
            },
          ],
        },
        parsedPermissions: {
          login: {
            canLogIn: true,
          },
        },
        dataAccess: [
          {
            id: 3,
            label: '055',
            hasAccess: false,
            organizations: [
              {
                id: 12,
                label: '67',
                hasAccess: false,
                organizations: [
                  {
                    id: 28,
                    label: '016',
                    hasAccess: false,
                    organizations: [
                      {
                        id: 60,
                        label: '002',
                        hasAccess: false,
                        organizations: [
                          {
                            id: 125,
                            label: '090',
                            hasAccess: false,
                            organizations: [
                              {
                                id: 573,
                                label: '1670272980',
                                name: 'Haberdish',
                                hasAccess: true,
                                organizations: [],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
        termsAndConditions: {
          userId: 2,
          hasAcceptedTerms: true,
        },
        availableRoles: [
          {
            name: 'Merchant User',
            description: 'Merchant User',
            key: 'MERCHANT_USER',
            id: 1,
            permissions: [
              {
                name: 'Can Log In',
                description: 'This is a description of Can Log In',
                key: 'CAN_LOG_IN',
                id: 76,
              },
            ],
            languageAbbr: 'en-US',
          },
        ],
      },
    };

    const expectedAction = {
      type: types.AUTH_LOGIN_SUCCESS,
      session,
    };

    const action = authActions.loginSuccess(session);

    expect(action).to.eql(expectedAction);
  });

  it('should create an action upon auth login failure', function () {
    const error = 'Failure to authenticate login.';

    const expectedAction = {
      type: types.AUTH_LOGIN_FAILURE,
      error,
    };

    const action = authActions.loginFailure(error);

    expect(action).to.eql(expectedAction);
  });

  it('should create an action to logout from state', function () {
    const expectedAction = {
      type: types.AUTH_LOGOUT,
    };

    const action = authActions.logoutFromState();

    expect(action).to.eql(expectedAction);
  });
});

/* eslint-enable func-names, prefer-arrow-callback */
