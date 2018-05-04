/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

/**
 * Import components to be tested
 */
import MobileLogoIcon from './MobileLogoIcon';

/**
 * The actual component unit test
 */
describe('MobileLogoIcon', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      wrapper = shallow(<MobileLogoIcon {...props} />);
    });

    it('should display a MobileLogoIcon', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
