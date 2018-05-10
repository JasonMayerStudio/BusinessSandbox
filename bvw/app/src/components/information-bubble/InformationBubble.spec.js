/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

/**
 * Import components to be tested
 */
import InformationBubble from './InformationBubble';

/**
 * The actual component unit test
 */
describe('InformationBubble', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        info: false,
        error: false,
        position: '',
        tooltipTitle: '',
        tooltipContent: '',
        wrapperClass: '',
      };
      wrapper = shallow(<InformationBubble {...props} />);
    });

    it('should display a InformationBubble', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });

  describe('props tests', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        info: true,
        position: 'bottom',
        tooltipTitle: 'Create Merchant Employee',
        tooltipContent: 'This permission creates a merchant employee',
        wrapperClass: 'information-bubble__wrapper',
      };

      wrapper = mount(<InformationBubble {...props} />);
    });

    it('should return an icon prop as true, and error prop as false', function () {
      expect(wrapper.prop('info')).to.be.true;
      expect(wrapper.prop('error')).to.be.false;
    });

    it('should have a position for the tooltip', function () {
      expect(wrapper.prop('position')).to.equal('bottom');
    });

    it('should contain a title and content for the tooltip', function () {
      const tooltipTitle = wrapper.prop('tooltipTitle');
      expect(tooltipTitle).to.have.lengthOf(tooltipTitle.length);

      const tooltipContent = wrapper.prop('tooltipContent');
      expect(tooltipContent).to.have.lengthOf(tooltipContent.length);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
