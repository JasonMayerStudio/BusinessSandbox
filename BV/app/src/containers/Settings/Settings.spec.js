/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions, no-unused-vars */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

/**
 * Import components to be tested
 */
import { Settings } from './Settings';

/**
 * The actual component unit test
 */
describe('Settings', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        getPreferences: () => {},
        getSubscriptions: () => {},
        preferences: {},
        savePreferences: () => {},
        saveSubscriptions: () => {},
        subscriptions: {},
        user: {
          firstName: 'Leeroy',
          lastName: 'Jenkins',
          role: {
            name: 'Merchant User',
          },
        },
      };

      wrapper = shallow(<Settings {...props} />);
    });

    it('should display a Settings container', function () {
      expect(wrapper).to.have.length(1);
    });
  });

  describe('props test', function () {
    let props;
    let wrapper;
    let getPreferencesHandler;
    let getSubscriptionsHandler;

    beforeEach(function () {
      getPreferencesHandler = sinon.stub().resolves({});
      getSubscriptionsHandler = sinon.stub().resolves({});

      props = {
        getPreferences: getPreferencesHandler,
        getSubscriptions: getSubscriptionsHandler,
        preferences: {},
        savePreferences: () => {},
        saveSubscriptions: () => {},
        subscriptions: {},
        user: {
          firstName: 'Leeroy',
          lastName: 'Jenkins',
          role: {
            name: 'Merchant User',
          },
        },
      };

      wrapper = mount(<Settings {...props} />);
    });

    it('should makes a call to get preferences', function () {
      expect(getPreferencesHandler.called).to.be.true;
    });

    it('should makes a call to get subscriptions', function () {
      expect(getPreferencesHandler.called).to.be.true;
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions, no-unused-vars */
