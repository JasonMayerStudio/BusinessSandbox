/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

/**
 * Import components to be tested
 */
import { Dashboard } from './Dashboard';

/**
 * The actual component unit test
 */
describe('Dashboard', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        auth: {
          session: {
            user: {
              role: {
                permissions: [],
              },
              primaryMerchantId: 42,
              maxMonths: 3,
            },
          },
        },
        history: {},
        parsedPermissions: {
          merchants: {
            canViewProductSelection: true,
          },
        },
        preferences: {
          data: {
            language: 'en-US',
          },
        },
      };
      wrapper = shallow(<Dashboard {...props} />);
    });

    it('should display a Dashboard', function () {
      expect(wrapper).to.have.length(1);
    });

    it('should have a container for the Dashboard visualization', function () {
      const visualizationContainer = wrapper.find('.dashboard-iframe-container');

      expect(visualizationContainer).to.have.length(1);
    });
  });

  describe('integration tests', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        auth: {
          session: {
            user: {
              role: {
                permissions: [],
              },
              primaryMerchantId: 42,
              maxMonths: 3,
            },
          },
        },
        parsedPermissions: {
          merchants: {
            canViewProductSelection: true,
          },
        },
        preferences: {
          data: {
            language: 'en-US',
          },
        },
      };
      wrapper = shallow(<Dashboard {...props} />);
    });

    it('should display a display an upgrade message when you try to view visualizations earlier than your product allows', function () {
      const inst = wrapper.instance();

      inst.handleSelection({ value: 'last_year' });

      const upgradeToPro = wrapper.state('upgradeToPro');
      const upgradeWrapper = wrapper.find('.upgrade-to-pro-wrapper');
      const visualizationContainer = wrapper.find('.dashboard-iframe-container');

      expect(upgradeToPro).to.be.true;
      expect(upgradeWrapper).to.have.length(1);
      expect(visualizationContainer).to.have.length(0);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
