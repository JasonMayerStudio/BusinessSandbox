/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

/**
 * Import components to be tested
 */
import { GAListener } from './GAListener';

/**
 * The actual component unit test
 */
describe('GAListener', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        children: [],
        history: {},
        location: {},
      };

      // GAListener requires children in order to work
      wrapper = shallow(<GAListener {...props}><div>Test</div></GAListener>);
    });

    it('should display a GAListener container', function () {
      expect(wrapper).to.have.length(1);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
