/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import { expect } from 'chai';
import sinon from 'sinon';
import moxios from 'moxios';
import * as userActions from './userActions';
import * as types from './actionTypes';

describe('User actions', function () {
  const dispatch = sinon.spy();
  const callbackDelay = 5;

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('should create an action to get all users', function () {
    // arrange
    const expectedAction = {
      type: types.REQUEST_USERS,
    };

    // act
    const action = userActions.requestUsers();

    // asset
    expect(action).to.eql(expectedAction);
  });

  it('should create an action to get all users successfully', function () {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate - 1);

    const users = [
      {
        acquirer: 'Kanye West',
        email: 'north.west@gmail.com',
        firstName: 'North',
        lastName: 'West',
        lastLoginDate: yesterday,
        role: 'GP Regional PM',
        roleKey: 'GP_REGIONAL_PM',
        status: 'INACTIVE',
        statusKey: 'Inactive',
        userId: 1,
      },
      {
        acquirer: 'Beyonce',
        email: 'blue.ivy@aol.com',
        firstName: 'Blue Ivy',
        lastName: 'Carter',
        lastLoginDate: yesterday,
        role: 'GP Worldwide PM',
        roleKey: 'GP_WORLDWIDE_PM',
        status: 'ACTIVE',
        statusKey: 'Active',
        userId: 2,
      },
      {
        acquirer: 'Gwenyth Paltrow',
        email: 'apple@apple.com',
        firstName: 'Apple',
        lastName: 'Martin',
        lastLoginDate: yesterday,
        role: 'GP Employee',
        roleKey: 'GP_EMPLOYEE',
        status: 'PENDING',
        statusKey: 'Pending',
        userId: 3,
      },
    ];

    const expectedAction = {
      type: types.RECEIVE_USERS_SUCCESS,
      users,
      receivedAt: Date.now(),
    };

    const action = userActions.receiveUsersSuccess(users);

    expect(action.type).to.eql(expectedAction.type);
    expect(action.users).to.eql(expectedAction.users);
  });

  it('should create an action to handle failing to get all users successfully', function () {
    const error = 'Failed to fetch all users';

    const expectedAction = {
      type: types.RECEIVE_USERS_FAILURE,
      error,
    };

    const action = userActions.receiveUsersFailure(error);

    expect(action).to.eql(expectedAction);
  });

  it('should create a series of actions to handle getting all users', function (done) {
    moxios.withMock(() => {
      userActions.getAllUsers()(dispatch);
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
        })
        .then(() => {
          expect(request.url).to.eql('\'http://localhost:3009/\'users');
          expect(request.config.method).to.eql('get');
          expect(dispatch.called).to.be.true;
          done();
        });
      }, callbackDelay);
    });
  });

  it('should create an action to request a user by ID', function () {
    const expectedAction = {
      type: types.REQUEST_USER_BY_ID,
    };

    const action = userActions.requestUserById();

    expect(action).to.eql(expectedAction);
  });

  it('should create an action to successfully get a user by ID', function () {
    const user = {
      email: 'gettinjiggywithit@gmail.com',
      firstName: 'Will',
      lastName: 'Smith',
      role: {
        name: 'Merchant Account Admin',
        description: 'Merchant Account Admin',
        key: 'MERCHANT_ACCOUNT_ADMIN',
        id: 1,
        permissions: [
          {
            id: 76,
            key: 'CAN_LOG_IN',
            name: 'Can Log In',
            description: 'This is a description of Can Log In',
            optional: false,
            languageAbbr: 'en-US',
          },
        ],
      },
      status: 'Active',
      statusKey: 'Active',
      userId: 1,
      lastLoginDate: Date.now(),
      preferences: {
        language: 'en-US',
        dateFormat: 'MM/DD/YYYY',
        timeFormat: 'HH:mm',
        firstName: 'Will',
        lastName: 'Smith',
      },
      productAccessibleMonths: 25,
      primaryMerchantId: 572,
    };

    const expectedAction = {
      type: types.RECEIVE_USER_BY_ID_SUCCESS,
      user,
      receivedAt: Date.now(),
    };

    const action = userActions.receiveUserByIdSuccess(user);

    expect(action.type).to.eql(expectedAction.type);
    expect(action.user).to.eql(expectedAction.user);
  });

  it('should create an action to handle not successfully fetching a user by ID', function () {
    const error = 'Error trying to fetch user by ID';

    const expectedAction = {
      type: types.RECEIVE_USER_BY_ID_FAILURE,
      error,
    };

    const action = userActions.receiveUserByIdFailure(error);

    expect(action).to.eql(expectedAction);
  });

  it('should create a series of actions to fetch a user by ID', function (done) {
    moxios.withMock(() => {
      userActions.fetchUserById(1)(dispatch);
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
        })
        .then(() => {
          expect(request.url).to.eql('\'http://localhost:3009/\'users/1');
          expect(request.config.method).to.eql('get');
          expect(dispatch.called).to.be.true;
          done();
        });
      }, callbackDelay);
    });
  });

  it('should create an action to request updating a user', function () {
    const expectedAction = {
      type: types.REQUEST_SAVE_USER,
    };

    const action = userActions.requestSaveUser();

    expect(action).to.eql(expectedAction);
  });

  it('should create an action to successfully update a user', function (done) {
    const user = {
      email: 'gettinjiggywithit@gmail.com',
      firstName: 'Will',
      lastName: 'Smith',
      role: {
        name: 'Merchant Account Admin',
        description: 'Merchant Account Admin',
        key: 'MERCHANT_ACCOUNT_ADMIN',
        id: 1,
        permissions: [
          {
            id: 76,
            key: 'CAN_LOG_IN',
            name: 'Can Log In',
            description: 'This is a description of Can Log In',
            optional: false,
            languageAbbr: 'en-US',
          },
        ],
      },
      status: 'Active',
      statusKey: 'Active',
      userId: 1,
      lastLoginDate: Date.now(),
      preferences: {
        language: 'en-US',
        dateFormat: 'MM/DD/YYYY',
        timeFormat: 'HH:mm',
        firstName: 'Will',
        lastName: 'Smith',
      },
      productAccessibleMonths: 25,
      primaryMerchantId: 572,
    };

    const updatedUser = Object.assign({}, user, {
      email: 'whipmyhairbackandforth@gmail.com',
      firstName: 'Jaden',
      role: user.role,
      preferences: {
        firstName: 'Jaden',
      },
    });

    moxios.withMock(() => {
      userActions.updateUser(updatedUser)(dispatch);
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
        })
        .then(() => {
          expect(request.url).to.eql('\'http://localhost:3009/\'users/1');
          expect(request.config.method).to.eql('put');
          expect(dispatch.called).to.be.true;
          done();
        });
      }, callbackDelay);
    });
  });

  it('should create an action to request user data access', function () {
    const expectedAction = {
      type: types.REQUEST_USER_DATA_ACCESS,
    };

    const action = userActions.requestUserDataAccess();

    expect(action).to.eql(expectedAction);
  });

  it('should create an action to receive user data access successfully', function () {
    const userId = 1;

    const dataAccess = [
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
                    label: '001',
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
                            name: 'ALL VALLEY WSHR-ROCKY',
                            hasAccess: true,
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
    ];

    const expectedAction = {
      type: types.RECEIVE_USER_DATA_ACCESS_SUCCESS,
      userId,
      dataAccess,
    };

    const action = userActions.receiveUserDataAccessSuccess(dataAccess, userId);

    expect(action.type).to.equal(expectedAction.type);
    expect(action.userId).to.equal(expectedAction.userId);
    expect(action.dataAccess).to.equal(expectedAction.dataAccess);
  });

  it('should create an action to handle failure to receive user data access successfully', function () {
    const error = 'Failed to receive user data access';

    const expectedAction = {
      type: types.RECEIVE_USER_DATA_ACCESS_FAILURE,
      error,
    };

    const action = userActions.receiveUserDataAccessFailure(error);

    expect(action).to.eql(expectedAction);
  });

  it('should create an action to request the merchants a user has access to', function () {
    const expectedAction = {
      type: types.REQUEST_USER_MERCHANTS,
    };

    const action = userActions.requestUserMerchants();

    expect(action).to.eql(expectedAction);
  });

  it('should create a series of actions to fetch user data access successfully', function (done) {
    const userId = 3;
    moxios.withMock(() => {
      userActions.fetchUserDataAccessById(userId)(dispatch);
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
        })
        .then(() => {
          expect(request.url).to.eql('\'http://localhost:3009/\'users/3/dataaccess');
          expect(request.config.method).to.eql('get');
          expect(dispatch.called).to.be.true;
          done();
        });
      }, callbackDelay);
    });
  });

  it('should create an action to successfully get the merchants a user has access to', function () {
    const merchants = [
      {
        acquirer: 'James Bond',
        address1: '238 EAST 14TH STREET',
        address2: '',
        associate: '500',
        associateId: 162,
        attention: 'JAMES BOND',
        businessName: 'Baohaus',
        chain: '000',
        chainId: 99,
        city: 'NEW YORK CITY',
        corp: '027',
        corpId: 14,
        country: 'US',
        email: '',
        fax: '0000000000',
        id: 1,
        merchantId: 225,
        merchantNumber: '0000271200081815',
        paperStatements: false,
        phoneNumber: '5152664488',
        phoneNumber2: '5152664488',
        postalCode: '10003',
        principal: '600',
        principalId: 36,
        region: '02',
        regionId: 21,
        state: 'NY',
      },
      {
        acquirer: 'Darth Vader',
        address1: '523 SE GRAND AVE',
        address2: '',
        associate: '500',
        associateId: 162,
        attention: 'LUKE SKYWALKER',
        businessName: 'MY FATHER\'S PLACE',
        chain: '000',
        chainId: 99,
        city: 'PORTLAND',
        corp: '027',
        corpId: 14,
        country: 'US',
        email: '',
        fax: '0000000000',
        id: 2,
        merchantId: 225,
        merchantNumber: '0000271200081815',
        paperStatements: false,
        phoneNumber: '5152664488',
        phoneNumber2: '5152664488',
        postalCode: '97214',
        principal: '600',
        principalId: 36,
        region: '02',
        regionId: 21,
        state: 'OR',
      },
      {
        acquirer: 'Nani Pelekai',
        address1: '1660 HARBOR AVE SW',
        address2: '',
        associate: '500',
        associateId: 162,
        attention: 'LILO PELEKAI',
        businessName: 'MARINATION MAI KAI',
        chain: '000',
        chainId: 99,
        city: 'SEATTLE',
        corp: '027',
        corpId: 14,
        country: 'US',
        email: '',
        fax: '0000000000',
        id: 3,
        merchantId: 225,
        merchantNumber: '0000271200081815',
        paperStatements: false,
        phoneNumber: '5152664488',
        phoneNumber2: '5152664488',
        postalCode: '98126',
        principal: '600',
        principalId: 36,
        region: '02',
        regionId: 21,
        state: 'WA',
      },
    ];

    const userId = 23;

    const expectedAction = {
      type: types.RECEIVE_USER_MERCHANTS_SUCCESS,
      userId,
      merchants,
      receivedAt: Date.now(),
    };

    const action = userActions.receiveUserMerchantsSuccess(merchants, userId);

    expect(action.type).to.eql(expectedAction.type);
    expect(action.userId).to.eql(expectedAction.userId);
    expect(action.merchants).to.eql(expectedAction.merchants);
  });

  it('should create a series of actions to fetch all the merchants a user has access to', function (done) {
    const userId = 3;
    moxios.withMock(() => {
      userActions.fetchUserMerchantsById(userId)(dispatch);
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
        })
        .then(() => {
          expect(request.url).to.eql('\'http://localhost:3009/\'users/3/merchants');
          expect(request.config.method).to.eql('get');
          expect(dispatch.called).to.be.true;
          done();
        });
      }, callbackDelay);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
