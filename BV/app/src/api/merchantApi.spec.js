/* eslint-disable func-names, prefer-arrow-callback, dot-notation, no-unused-expressions */
import { expect } from 'chai';
import moxios from 'moxios';
import sinon from 'sinon';

// SUT
import {
  apiGetMerchants,
  apiGetAllUsersForMerchant,
  apiGetProducts,
  getMerchantsFuzzySearch,
  apiRegisterMerchant,
  apiSaveMerchant,
  saveProduct,
  overrideProduct,
} from './merchantApi';

describe('merchantApi', function () {
  const callbackDelay = 5;

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  describe('apiGetMerchants', function () {
    it('should make an API call to get all merchants', function (done) {
      const expectedURL = 'merchants';
      const expectedUrlRegex = /merchants$/;
      moxios.stubRequest(expectedURL, {});
      const onFulfilled = sinon.spy();

      apiGetMerchants()
        .then(onFulfilled);

      moxios.wait(function () {
        const request = moxios.requests.mostRecent();
        expect(request.url).to.match(expectedUrlRegex);
        done();
      }, callbackDelay);
    });
  });

  describe('apiGetAllUsersForMerchant', function () {
    it('should make an API call to get all users for a merchant', function (done) {
      const merchant = {
        merchantId: 2,
        merchantNumber: '2222222000',
      };
      const expectedURL = `merchants/${merchant.merchantNumber}/users`;
      const expectedUrlRegex = /merchants\/2222222000\/users$/;
      moxios.stubRequest(expectedURL, []);
      const onFulfilled = sinon.spy();

      apiGetAllUsersForMerchant(merchant)
        .then(onFulfilled);

      moxios.wait(function () {
        const request = moxios.requests.mostRecent();
        expect(request.url).to.match(expectedUrlRegex);
        done();
      }, callbackDelay);
    });
  });

  describe('apiGetProducts', function () {
    it('should make an API call to get all products for a merchant', function (done) {
      const merchantId = 2;
      const expectedURL = `merchants/${merchantId}/products`;
      const expectedUrlRegex = /merchants\/2\/products$/;
      moxios.stubRequest(expectedURL, []);
      const onFulfilled = sinon.spy();

      apiGetProducts(merchantId)
        .then(onFulfilled);

      moxios.wait(function () {
        const request = moxios.requests.mostRecent();
        expect(request.url).to.match(expectedUrlRegex);
        done();
      }, callbackDelay);
    });
  });

  describe('getMerchantsFuzzySearch', function () {
    it('should make an API call to get all merchants with a search query', function (done) {
      const lowercaseSearchString = '1234567';
      const expectedURL = `merchants/search?searchString=${lowercaseSearchString}`;
      moxios.stubRequest(expectedURL, {});
      const onFulfilled = sinon.spy();

      getMerchantsFuzzySearch(lowercaseSearchString)
        .then(onFulfilled);

      moxios.wait(function () {
        const request = moxios.requests.mostRecent();
        expect(request.url).to.contain(expectedURL);
        done();
      }, callbackDelay);
    });
  });

  describe('apiRegisterMerchant', function () {
    it('should make a call to register a merchant', function (done) {
      const merchantNumber = '9876543210';
      const obj = {
        validationNumber: '1234567890',
      };
      const expectedURL = `merchants/${merchantNumber}`;
      const expectedUrlRegex = /merchants\/9876543210$/;
      const expectedRequestBody = JSON.stringify(obj);
      moxios.stubRequest(expectedURL, {});
      const onFulfilled = sinon.spy();

      apiRegisterMerchant(merchantNumber, obj.validationNumber)
        .then(onFulfilled);

      moxios.wait(function () {
        const request = moxios.requests.mostRecent();

        expect(request.url).to.match(expectedUrlRegex);
        expect(request.config.method).to.equal('post');
        done();
        expect(request.config.data).to.eql(expectedRequestBody);
      }, callbackDelay);
    });
  });

  describe('apiSaveMerchant', function () {
    it('should make an API call to update a merchant', function (done) {
      const merchantToUpdate = {
        address1: 'ROSSITER ROAD WIDECOMBE BASIN',
        email: 'new_email@aol.com',
        fax: '212-555-3434',
        merchantId: 987,
        merchantNumber: '1234567890',
        paperStatements: false,
        phoneNumber: '212-555-1212',
        state: 'GB',
      };
      const expectedURL = `merchants/${merchantToUpdate.merchantNumber}`;
      const expectedUrlRegex = /merchants\/1234567890$/;
      const expectedRequestBody = JSON.stringify({
        email: 'new_email@aol.com',
        fax: '212-555-3434',
        merchantId: 987,
        phoneNumber: '212-555-1212',
      });
      moxios.stubRequest(expectedURL, {});
      const onFulfilled = sinon.spy();

      apiSaveMerchant(merchantToUpdate)
        .then(onFulfilled);

      moxios.wait(function () {
        const request = moxios.requests.mostRecent();
        expect(request.url).to.match(expectedUrlRegex);
        expect(request.config.method).to.equal('put');
        expect(request.config.data).to.eql(expectedRequestBody);
        done();
      }, callbackDelay);
    });

    it('should throw an error if merchant object does not have an ID', function (done) {
      const merchantToUpdate = {
        address1: 'ROSSITER ROAD WIDECOMBE BASIN',
        email: 'new_email@aol.com',
        fax: '212-555-3434',
        paperStatements: false,
        phoneNumber: '212-555-1212',
        state: 'GB',
      };
      const expectedURL = `merchants/${merchantToUpdate.merchantId}`;
      moxios.stubRequest(expectedURL, {});
      const onFulfilled = sinon.spy();

      apiSaveMerchant(merchantToUpdate)
        .then(onFulfilled)
        .catch((err) => {
          expect(err).to.equal('No merchant ID number supplied.');
          done();
        });
    });
  });

  describe('saveProduct', function () {
    it('should make an API call to update the list of selected products', function (done) {
      const merchantId = 9876543210;
      const productObj = {
        merchantProducts: [
          {
            chargeCode: '01',
            chargeFrequency: 'month',
            currencyCode: 'USD',
            displayOrder: 1,
            isActive: false,
            isAddon: false,
            overrideChargeFrequency: '',
            overrideCurrencyCode: '',
            overridePrice: 0,
            price: 0,
            productDescription: 'Lite features',
            productId: 1,
            productName: 'Lite',
          },
          {
            chargeCode: '02',
            chargeFrequency: 'month',
            currencyCode: 'USD',
            displayOrder: 2,
            isActive: true,
            isAddon: false,
            overrideChargeFrequency: '',
            overrideCurrencyCode: '',
            overridePrice: 0,
            price: 65,
            productDescription: 'Pro features',
            productId: 2,
            productName: 'Pro',
          },
        ],
      };
      const expectedURL = `merchants/${merchantId}/products`;
      const expectedUrlRegex = /merchants\/9876543210\/products$/;
      const expectedRequestBody = JSON.stringify({
        merchantProducts: [
          {
            isActive: false,
            productId: 1,
          },
          {
            isActive: true,
            productId: 2,
          },
        ],
      });
      moxios.stubRequest(expectedURL, {});
      const onFulfilled = sinon.spy();

      saveProduct(merchantId, productObj)
        .then(onFulfilled);

      moxios.wait(function () {
        const request = moxios.requests.mostRecent();
        expect(request.url).to.match(expectedUrlRegex);
        expect(request.config.method).to.equal('put');
        expect(request.config.data).to.eql(expectedRequestBody);
        done();
      }, callbackDelay);
    });
  });

  describe('overrideProduct', function () {
    it('should make an API call to update the list of selected products', function (done) {
      const merchantId = 9876543210;
      const productObj = {
        adminProducts: [
          {
            chargeCode: '01',
            chargeFrequency: 'month',
            currencyCode: 'USD',
            currencyCodeId: 1,
            displayOrder: 1,
            isActive: false,
            isAddon: false,
            overrideChargeFrequency: '',
            overrideCurrencyCode: '',
            overridePrice: 0,
            price: 0,
            productDescription: 'Lite features',
            productId: 1,
            productName: 'Lite',
          },
          {
            chargeCode: '02',
            chargeFrequency: 'month',
            currencyCode: 'USD',
            currencyCodeId: 1,
            displayOrder: 2,
            isActive: true,
            isAddon: false,
            overrideChargeFrequency: '',
            overrideCurrencyCode: '',
            overridePrice: 0,
            price: 55,
            productDescription: 'Pro features',
            productId: 2,
            productName: 'Pro',
          },
        ],
      };
      const expectedURL = `merchants/${merchantId}/products/price`;
      const expectedUrlRegex = /merchants\/9876543210\/products\/price$/;
      const expectedRequestBody = JSON.stringify({
        adminProducts: [
          {
            chargeFrequency: 'month',
            currencyCodeId: 1,
            isActive: false,
            price: 0,
            productId: 1,
          },
          {
            chargeFrequency: 'month',
            currencyCodeId: 1,
            isActive: true,
            price: 55,
            productId: 2,
          },
        ],
      });
      moxios.stubRequest(expectedURL, {});
      const onFulfilled = sinon.spy();

      overrideProduct(merchantId, productObj)
        .then(onFulfilled);

      moxios.wait(function () {
        const request = moxios.requests.mostRecent();
        expect(request.url).to.match(expectedUrlRegex);
        expect(request.config.method).to.equal('put');
        expect(request.config.data).to.eql(expectedRequestBody);
        done();
      }, callbackDelay);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, dot-notation */
