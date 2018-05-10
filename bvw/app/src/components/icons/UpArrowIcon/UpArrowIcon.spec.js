/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

/**
 * Import components to be tested
 */
import UpArrowIcon from './UpArrowIcon';

/**
 * The actual component unit test
 */
describe('UpArrowIcon', function () {
  describe('smoke test', function () {
    let wrapper;

    beforeEach(function () {
      wrapper = shallow(<UpArrowIcon />);
    });

    it('should display a UpArrowIcon', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
