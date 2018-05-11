/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

/**
 * Import components to be tested
 */
import { OldReportFiltersDrawer } from './OldReportFiltersDrawer';

/**
 * The actual component unit test
 */
describe('OldReportFiltersDrawer', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;
    let drawerHandler;

    beforeEach(function () {
      drawerHandler = sinon.spy();

      props = {
        report: { name: 'Chargebacks' },
        toggleDrawer: drawerHandler,
        preferences: { language: 'en-US' },
      };

      wrapper = shallow(<OldReportFiltersDrawer {...props} />);
    });

    it('should display a OldReportFiltersDrawer container', function () {
      expect(wrapper).to.have.length(1);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
