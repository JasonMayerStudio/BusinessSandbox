/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

/**
 * Import components to be tested
 */
import GDColorCodedCell from './GDColorCodedCell';

/**
 * The actual component unit test
 */
describe('GDColorCodedCell', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        content: '0008788242869240',
      };
      wrapper = shallow(<GDColorCodedCell {...props} />);
    });

    it('should display a GDColorCodedCell', function () {
      expect(wrapper).to.have.lengthOf(1);
    });

    it('should display its content prop as text', function () {
      expect(wrapper.text()).to.contain(props.content);
    });
  });

  describe('props tests', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        content: '0008788242869240',
        extraClass: 'trooper',
      };

      wrapper = mount(<GDColorCodedCell {...props} />);
    });

    it('should have the extra class passed in', function () {
      expect(wrapper.hasClass(props.extraClass)).to.be.true;
    });

    it('should have a prepended div with a color based on the content', function () {
      const coloredIndicator = wrapper.find('.gd-color-coded-cell__indicator');

      const coloredNode = coloredIndicator.get(0);

      expect(coloredNode.style).to.have.property('backgroundColor', 'rgb(13, 146, 201)');
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
