/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

/**
 * Import components to be tested
 */
import OptionBoxPopup from './OptionBoxPopup';

/**
 * The actual component unit test
 */
describe('OptionBoxPopup', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        extraClass: '',
      };
      wrapper = shallow(<OptionBoxPopup {...props}><div>Content</div></OptionBoxPopup>);
    });

    it('should display a OptionBoxPopup', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });

  describe('props tests', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        extraClass: 'gumby',
      };

      wrapper = mount(<OptionBoxPopup {...props}><div>Content</div></OptionBoxPopup>);
    });

    it('should have any additional class passed in', function () {
      expect(wrapper.hasClass(props.extraClass)).to.be.true;
    });

    it('should initially hide the children passed in', function () {
      expect(wrapper.text()).not.to.contain('Content');
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
