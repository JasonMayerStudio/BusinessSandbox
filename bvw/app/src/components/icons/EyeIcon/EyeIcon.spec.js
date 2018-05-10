/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

/**
 * Import components to be tested
 */
import EyeIcon from './EyeIcon';

/**
 * The actual component unit test
 */
describe('EyeIcon', function () {
  describe('smoke test', function () {
    let wrapper;

    beforeEach(function () {
      wrapper = shallow(<EyeIcon />);
    });

    it('should display a EyeIcon', function () {
      expect(wrapper).to.have.length(1);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
