/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions, no-unused-vars */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import moxios from 'moxios';

/**
 * Import components to be tested
 */
import { ProductSelection } from './ProductSelection';

/**
 * The actual component unit test
 */
describe('ProductSelection', function () {
  const callbackDelay = 5;

  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        auth: {
          isFetching: false,
          session: {
            sessionToken: 'ey',
            user: {
              firstName: 'Leroy',
              lastName: 'Jenkins',
              role: {
                name: 'Merchant User',
                key: 'merchant_user',
              },
              maxMonths: 3,
              dataAccess: [],
              primaryMerchantId: 42,
            },
          },
        },
        preferences: {
          language: 'en-US',
          dateFormat: 'MM/DD/YYYY',
        },
      };

      wrapper = shallow(<ProductSelection {...props} />);
    });

    it('should display a ProductSelection container', function () {
      expect(wrapper).to.have.length(1);
    });
  });

  describe('props test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        auth: {
          isFetching: false,
          session: {
            sessionToken: 'ey',
            user: {
              firstName: 'Leroy',
              lastName: 'Jenkins',
              role: {
                name: 'Merchant User',
                key: 'merchant_user',
              },
              maxMonths: 3,
              dataAccess: [],
              primaryMerchantId: 42,
            },
          },
        },
        preferences: {
          language: 'en-US',
          dateFormat: 'MM/DD/YYYY',
        },
      };

      moxios.install();
    });

    afterEach(function () {
      moxios.uninstall();
    });

    it('should make an API request to get products', function (done) {
      wrapper = mount(<ProductSelection {...props} />);

      moxios.wait(function () {
        const request = moxios.requests.mostRecent();
        const responseBody = getProductResponse();

        request.respondWith({
          status: 200,
          response: responseBody,
        }).then(() => {
          const addonCounter = wrapper.state('addonCounter');

          expect(addonCounter).to.equal(1);

          done();
        });
      }, callbackDelay);

      wrapper.update();
    });
  });
});

function getProductResponse() {
  return [
    {
      productId: 1,
      productName: 'LITE',
      price: 0.0,
      isActive: true,
      isAddon: false,
      features: [
        {
          featureId: 1,
          shortDescription: 'Data Reporting',
        },
      ],
    },
    {
      productId: 2,
      productName: 'PRO',
      price: 65.0,
      isActive: false,
      isAddon: false,
      features: [
        {
          featureId: 11,
          shortDescription: 'Dashboard BI Analytics',
        },
      ],
    },
    {
      productId: 3,
      productName: 'Add-on 1',
      productDescription: 'Additional Product Add-on 1',
      price: 20.0,
      isActive: true,
      isAddon: true,
      features: [
        {
          featureId: 21,
          shortDescription: 'Add on stuff 1',
        },
      ],
    },
    {
      productId: 4,
      productName: 'Add-on 2',
      productDescription: 'Additional Product Add-on 2',
      price: 30.0,
      isActive: false,
      isAddon: true,
      features: [
        {
          featureId: 31,
          shortDescription: 'Add on stuff 2',
        },
      ],
    },
  ];
}

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions, no-unused-vars */
