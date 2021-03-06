/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

/**
 * Import components to be tested
 */
import CheckCircleIcon from './CheckCircleIcon';

/**
 * The actual component unit test
 */
describe('CheckCircleIcon', function () {
  describe('smoke test', function () {
    let wrapper;

    beforeEach(function () {
      wrapper = shallow(<CheckCircleIcon />);
    });

    it('should display a CheckCircleIcon', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
