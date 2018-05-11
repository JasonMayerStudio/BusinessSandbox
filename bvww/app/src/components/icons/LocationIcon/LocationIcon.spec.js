/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

/**
 * Import components to be tested
 */
import LocationIcon from './LocationIcon';

/**
 * The actual component unit test
 */
describe('LocationIcon', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      wrapper = shallow(<LocationIcon {...props} />);
    });

    it('should display a LocationIcon', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
