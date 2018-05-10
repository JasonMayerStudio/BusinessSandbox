/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import { expect } from 'chai';
import sinon from 'sinon';

import * as merchantActions from '../actions/merchantActions';
import merchantReducer from './merchantReducer';

describe('Merchant reducer', function () {
  let clock;

  beforeEach(function () {
    const now = new Date().getTime();
    clock = sinon.useFakeTimers(now);
  });

  afterEach(function () {
    clock.restore();
  });

  describe('receiving all merchants', function () {
    it('should set the merchants state for requesting merchants', function () {
      const stateBefore = {
        data: [],
        isFetching: false,
        lastUpdated: null,
        error: { message: 'This earlier call failed.' },
      };

      const action = merchantActions.requestMerchants();

      const result = merchantReducer(stateBefore, action);

      expect(result.isFetching).to.be.true;
      expect(result.data).to.eql(stateBefore.data);
      expect(result.lastUpdated).to.eql(stateBefore.lastUpdated);
      expect(result.error).to.eql(null);
    });

    it('should set the merchants on state when merchants are received', function () {
      const stateBefore = {
        data: [],
        isFetching: true,
        lastUpdated: null,
        error: {},
      };
      const merchants = [
        {
          id: 9,
        },
        {
          id: 11,
        },
      ];

      const action = merchantActions.receiveMerchantsSuccess(merchants);

      const result = merchantReducer(stateBefore, action);

      expect(result.isFetching).to.be.false;
      expect(result.data).to.eql(merchants);
      expect(result.lastUpdated).to.equal(Date.now());
      expect(result.error).to.eql(null);
    });

    it('should set the error object on state when getting merchants fails', function () {
      const stateBefore = {
        data: [{ id: 3 }],
        isFetching: true,
        lastUpdated: Date.now(),
        error: {},
      };
      const error = {
        message: 'Cannot retrieve merchants at this time',
      };

      const action = merchantActions.receiveMerchantsFailure(error);

      clock.tick(500); // simulate 0.5 second wait, to make sure lastUpdated remains the same

      const result = merchantReducer(stateBefore, action);

      expect(result.isFetching).to.be.false;
      expect(result.data).to.eql(stateBefore.data);
      expect(result.lastUpdated).to.equal(stateBefore.lastUpdated);
      expect(result.error).to.eql(error);
    });
  });

  describe('clearing the last registered merchant', function () {
    it('should clear the last-registered merchant in the merchants state ', function () {
      const stateBefore = {
        data: [{ id: 21 }, { id: 22 }],
        isFetching: false,
        lastMerchantRegistered: { id: 22 },
        lastUpdated: Date.now(),
        error: { message: 'This earlier call failed.' },
      };

      const action = merchantActions.clearLastRegisteredMerchant();

      const result = merchantReducer(stateBefore, action);

      expect(result.isFetching).to.be.false;
      expect(result.data).to.eql(stateBefore.data);
      expect(result.lastMerchantRegistered).to.equal(null);
      expect(result.lastUpdated).to.eql(stateBefore.lastUpdated);
      expect(result.error).to.eql(null);
    });
  });

  describe('registering a new merchant', function () {
    it('should set the merchants state when registering a merchant', function () {
      const stateBefore = {
        data: [{ id: 21 }, { id: 22 }],
        isFetching: false,
        lastMerchantRegistered: { id: 22 },
        lastUpdated: Date.now(),
        error: { message: 'This earlier call failed.' },
      };

      const action = merchantActions.postRegisterMerchant();

      const result = merchantReducer(stateBefore, action);

      expect(result.isFetching).to.be.true;
      expect(result.data).to.eql(stateBefore.data);
      expect(result.lastMerchantRegistered).to.equal(null);
      expect(result.lastUpdated).to.eql(stateBefore.lastUpdated);
      expect(result.error).to.eql(null);
    });

    it('should set add a new merchant on state when registered successfully', function () {
      const stateBefore = {
        data: [],
        isFetching: true,
        lastUpdated: null,
        error: {},
      };
      const registeredMerchant = {
        acquirer: null,
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

      const action = merchantActions.registerMerchantSuccess(registeredMerchant);

      const result = merchantReducer(stateBefore, action);

      expect(result.isFetching).to.be.false;
      expect(result.data).to.eql([registeredMerchant]);
      expect(result.lastMerchantRegistered).to.eql(registeredMerchant);
      expect(result.lastUpdated).to.equal(Date.now());
      expect(result.error).to.eql(null);
    });

    it('should set the error object on state when an error occurs', function () {
      const stateBefore = {
        data: [{ id: 1 }],
        isFetching: true,
        lastUpdated: Date.now(),
        error: {},
      };
      const error = {
        errorCode: 400,
        message: 'Merchant ID is already registered.',
      };

      const action = merchantActions.registerMerchantFailure(error);

      clock.tick(500); // simulate 0.5 second wait, to make sure lastUpdated remains the same

      const result = merchantReducer(stateBefore, action);

      expect(result.isFetching).to.be.false;
      expect(result.data).to.eql(stateBefore.data);
      expect(result.lastUpdated).to.equal(stateBefore.lastUpdated);
      expect(result.error).to.eql(error);
    });
  });
});
