/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

/**
 * Import components to be tested
 */
import DashboardLight from './DashboardLight';

/**
 * The actual component unit test
 */
describe('DashboardLight', function () {
  describe('smoke tests', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        history: {},
      };

      wrapper = shallow(<DashboardLight {...props} />);
    });

    it('should display a DashboardLight', function () {
      expect(wrapper).to.have.length(1);
    });

    it('should contain an element with class of fake-dashboard', function () {
      const fakeDashboard = wrapper.find('.fake-dashboard');

      expect(fakeDashboard).to.have.length(1);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
