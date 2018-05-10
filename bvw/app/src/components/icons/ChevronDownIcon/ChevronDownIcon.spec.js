/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

/**
 * Import components to be tested
 */
import ChevronDownIcon from './ChevronDownIcon';

/**
 * The actual component unit test
 */
describe('ChevronDownIcon', function () {
  describe('smoke test', function () {
    let wrapper;

    beforeEach(function () {
      wrapper = shallow(<ChevronDownIcon />);
    });

    it('should display a ChevronDownIcon', function () {
      expect(wrapper).to.have.length(1);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
