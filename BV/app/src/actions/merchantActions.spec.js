/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import { expect } from 'chai';
import sinon from 'sinon';
import moxios from 'moxios';

import * as merchantActions from './merchantActions';
import * as types from './actionTypes';

describe('Merchant actions', function () {
  const callbackDelay = 5;
  const dispatch = sinon.spy();

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('should create an action to get all merchants', function () {
    // arrange
    const expectedAction = {
      type: types.REQUEST_MERCHANTS,
    };

    // act
    const action = merchantActions.requestMerchants();

    // asset
    expect(action).to.eql(expectedAction);
  });

  it('should create an action to handle getting merchants successfully', function () {
    // arrange
    const results = [
      {
        businessName: 'THE COSMO STUDIO',
        id: 198,
      },
      {
        businessName: 'SOLSTICE DAY SPA INC',
        id: 199,
      },
      {
        businessName: 'CARNICERIA Y TIENDA LA UNICA 1',
        id: 200,
      },
    ];
    const expectedAction = {
      type: types.RECEIVE_MERCHANTS_SUCCESS,
      merchants: results,
    };
    // act
    const action = merchantActions.receiveMerchantsSuccess(results);

    // asset
    expect(action.type).to.eql(expectedAction.type);
    expect(action.results).to.eql(expectedAction.results);
  });

  it('should handle failing to get merchants', function () {
    // arrange
    const error = 'Server error';
    const expectedAction = {
      type: types.RECEIVE_MERCHANTS_FAILURE,
      error,
    };

    // act
    const action = merchantActions.receiveMerchantsFailure(error);

    // asset
    expect(action).to.eql(expectedAction);
  });

  it('should create a series of actions to get all merchants', function (done) {
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

    moxios.withMock(() => {
      merchantActions.getAllMerchants()(dispatch);
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: merchants,
        })
        .then(() => {
          expect(request.url).to.eql('\'http://localhost:3009/\'merchants');
          expect(request.config.method).to.eql('get');
          done();
        });
      }, callbackDelay);
    });
  });

  it('should create an action to request all users for a particular merchant', function () {
    const expectedAction = {
      type: types.REQUEST_ALL_USERS_BY_MERCHANT_ID,
    };

    const action = merchantActions.requestAllUsersForMerchant();

    expect(action).to.eql(expectedAction);
  });

  it('should create an action to get all users for a particular merchant successfully', function () {
    const users = [
      {
        acquirer: 'Minerva McGonagall',
        email: 'hpotter@gryffindor.edu',
        firstName: 'Harry',
        lastName: 'Potter',
        lastLoginDate: 1511913600000,
        role: 'Merchant Account Admin',
        roleKey: 'MERCHANT_ACCOUNT_ADMIN',
        status: 'ACTIVE',
        statusKey: 'Active',
        userId: 1,
      },
      {
        acquirer: 'Severus Snape',
        email: 'dmalfoy@slytherin.edu',
        firstName: 'Draco',
        lastName: 'Malfoy',
        lastLoginDate: 1511913600000,
        role: 'Merchant User',
        roleKey: 'MERCHANT_USER',
        status: 'INACTIVE',
        statusKey: 'Inactive',
        userId: 2,
      },
      {
        acquirer: 'Filius Flitwick',
        email: 'llovegood@ravenclaw.edu',
        firstName: 'Luna',
        lastName: 'Lovegood',
        lastLoginDate: 1511913600000,
        role: 'GP Masterfile Analyst',
        roleKey: 'GP_MASTERFILE_ANALYST',
        status: 'PENDING',
        statusKey: 'Pending',
        userId: 3,
      },
    ];

    const expectedAction = {
      type: types.RECEIVE_ALL_USERS_BY_MERCHANT_ID_SUCCESS,
      users,
    };

    const action = merchantActions.receiveAllUsersForMerchantSuccess(users);

    expect(action.type).to.eql(expectedAction.type);
    expect(action.users).to.eql(expectedAction.users);
  });

  it('should create an action to handle failing to get all users for a particular merchant successfully', function () {
    const error = 'Failed to fetch users for selected merchant.';

    const expectedAction = {
      type: types.RECEIVE_ALL_USERS_BY_MERCHANT_ID_FAILURE,
      error,
    };

    const action = merchantActions.receiveAllUsersForMerchantFailure(error);

    expect(action).to.eql(expectedAction);
  });

  it('should create a series of actions to handle getting all users for a particular merchant', function (done) {
    const users = [
      {
        acquirer: 'Minerva McGonagall',
        email: 'hpotter@gryffindor.edu',
        firstName: 'Harry',
        lastName: 'Potter',
        lastLoginDate: 1511913600000,
        role: 'Merchant Account Admin',
        roleKey: 'MERCHANT_ACCOUNT_ADMIN',
        status: 'ACTIVE',
        statusKey: 'Active',
        userId: 1,
      },
      {
        acquirer: 'Severus Snape',
        email: 'dmalfoy@slytherin.edu',
        firstName: 'Draco',
        lastName: 'Malfoy',
        lastLoginDate: 1511913600000,
        role: 'Merchant User',
        roleKey: 'MERCHANT_USER',
        status: 'INACTIVE',
        statusKey: 'Inactive',
        userId: 2,
      },
      {
        acquirer: 'Filius Flitwick',
        email: 'llovegood@ravenclaw.edu',
        firstName: 'Luna',
        lastName: 'Lovegood',
        lastLoginDate: 1511913600000,
        role: 'GP Masterfile Analyst',
        roleKey: 'GP_MASTERFILE_ANALYST',
        status: 'PENDING',
        statusKey: 'Pending',
        userId: 3,
      },
    ];

    const merchant = {
      merchantNumber: 989829,
    };

    moxios.withMock(() => {
      merchantActions.getAllUsersForMerchant(merchant)(dispatch);
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: users,
        })
        .then(() => {
          expect(request.url).to.eql('\'http://localhost:3009/\'merchants/989829/users');
          expect(request.config.method).to.eql('get');
          expect(dispatch.called).to.be.true;
          done();
        });
      }, callbackDelay);
    });
  });

  it('should create an action to register a merchant', function () {
    // arrange
    const expectedAction = {
      type: types.POST_REGISTER_MERCHANT,
    };

    // act
    const action = merchantActions.postRegisterMerchant();

    // asset
    expect(action).to.eql(expectedAction);
  });

  it('should create an action to handle registering a merchant successfully', function () {
    // arrange
    const registeredMerchant = {
      acquirer: 'Tony Stark',
      address1: '2400 EAST GRAND AVENUE',
      address2: '',
      associate: '500',
      associateId: 162,
      attention: 'CHRISTOPHER BELCHER',
      businessName: 'BELCHER INC',
      chain: '000',
      chainId: 99,
      city: 'DES MOINES',
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
      postalCode: '503170000',
      principal: '600',
      principalId: 36,
      region: '02',
      regionId: 21,
      state: 'IA',
    };
    const expectedAction = {
      type: types.REGISTER_MERCHANT_SUCCESS,
      registeredMerchant,
    };

    // act
    const action = merchantActions.registerMerchantSuccess(registeredMerchant);

    // asset
    expect(action.type).to.eql(expectedAction.type);
    expect(action.registeredMerchant).to.eql(expectedAction.registeredMerchant);
  });

  it('should create an action to handle failure to register a merchant', function () {
    // arrange
    const error = {
      errorCode: 400,
      message: 'Merchant ID is already registered.',
    };
    const expectedAction = {
      type: types.REGISTER_MERCHANT_FAILURE,
      error,
    };

    // act
    const action = merchantActions.registerMerchantFailure(error);

    // asset
    expect(action).to.eql(expectedAction);
  });

  it('should create an action to clear the last-registered merchant', function () {
    // arrange
    const expectedAction = {
      type: types.CLEAR_LAST_REGISTERED_MERCHANT,
    };

    // act
    const action = merchantActions.clearLastRegisteredMerchant();

    // asset
    expect(action).to.eql(expectedAction);
  });

  it('should dispatch a series of actions to register a merchant', function (done) {
    const registeredMerchant = {
      acquirer: 'Tony Stark',
      address1: '2400 EAST GRAND AVENUE',
      address2: '',
      associate: '500',
      associateId: 162,
      attention: 'CHRISTOPHER BELCHER',
      businessName: 'BELCHER INC',
      chain: '000',
      chainId: 99,
      city: 'DES MOINES',
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
      postalCode: '503170000',
      principal: '600',
      principalId: 36,
      region: '02',
      regionId: 21,
      state: 'IA',
    };

    const validationNumber = '1234567890';

    const stringifiedResponse = JSON.stringify({ value: validationNumber });

    moxios.withMock(() => {
      merchantActions.registerMerchant(registeredMerchant.merchantNumber, validationNumber)(dispatch);
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: registeredMerchant,
        })
        .then(() => {
          expect(request.url).to.eql('\'http://localhost:3009/\'merchants/0000271200081815');
          expect(request.config.method).to.eql('post');
          expect(request.config.data).to.eql(stringifiedResponse);
          expect(dispatch.called).to.be.true;
          done();
        });
      }, callbackDelay);
    });
  });

  it('should create an action to request editing a merchant\'s location data', function () {
    const expectedAction = {
      type: types.REQUEST_UPDATE_LOCATION,
    };

    const action = merchantActions.requestEditLocation();

    expect(action).to.eql(expectedAction);
  });

  it('should create an action to successfully update a merchant\'s location data', function () {
    const merchant = {
      email: 'foo@bar.com',
      fax: '000000000',
      merchantId: 123,
      phoneNumber: 7048675309,
    };

    const expectedAction = {
      type: types.RECEIVE_UPDATE_LOCATION_SUCCESS,
      merchant,
    };

    const action = merchantActions.receiveEditLocationSuccess(merchant);

    expect(action.type).to.eql(expectedAction.type);
    expect(action.merchant).to.eql(expectedAction.merchant);
  });

  it('should create an action to handle failing to successfully update a merchant\'s location data', function () {
    const error = 'Failed to update merchant location data';

    const expectedAction = {
      type: types.RECEIVE_UPDATE_LOCATION_FAILURE,
      error,
    };

    const action = merchantActions.receiveEditLocationFailure(error);

    expect(action).to.eql(expectedAction);
  });

  it('should create a series of actions to update a merchant\'s location data', function (done) {
    const merchant = {
      email: 'merchant_user@globalpay.com',
      fax: '1234567',
      merchantId: 123,
      merchantNumber: '1234567890',
      phoneNumber: 7048675309,
    };

    const payloadWithoutMerchantNumber = {
      email: 'merchant_user@globalpay.com',
      fax: '1234567',
      merchantId: 123,
      phoneNumber: 7048675309,
    };
    const stringifiedMerchant = JSON.stringify(payloadWithoutMerchantNumber);

    moxios.withMock(() => {
      merchantActions.updateMerchant(merchant)(dispatch);
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: merchant,
        })
        .then(() => {
          expect(request.url).to.eql('\'http://localhost:3009/\'merchants/1234567890');
          expect(request.config.method).to.eql('put');
          expect(request.config.data).to.eql(stringifiedMerchant);
          expect(dispatch.called).to.be.true;
          done();
        });
      }, callbackDelay);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
