/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

/**
 * Import components to be tested
 */
import InformationIcon from './InformationIcon';

/**
 * The actual component unit test
 */
describe('InformationIcon', function () {
  describe('smoke test', function () {
    let wrapper;
    let props;

    beforeEach(function () {
      props = {
        info: false,
      };

      wrapper = shallow(<InformationIcon {...props} />);
    });

    it('should display a InformationIcon', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });

  describe('props test', function () {
    let wrapper;
    let props;

    beforeEach(function () {
      props = {
        info: true,
      };

      wrapper = mount(<InformationIcon {...props} />);
    });

    it('should have an icon property that\'s value is true', function () {
      expect(wrapper.prop('info')).to.be.true;
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
