/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions, comma-dangle */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

/**
 * Import components to be tested
 */
import DualListSelectorHeading from './DualListSelectorHeading';

/**
 * The actual component unit test
 */
describe('DualListSelectorHeading', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;


    beforeEach(function () {
      props = {
        extraClass: '',
        tagline: '3 Selected',
        title: 'Active Columns',
      };
      wrapper = shallow(
        <DualListSelectorHeading {...props} />
      );
    });

    it('should display a DualListSelectorHeading', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });

  describe('props tests', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        extraClass: 'emoji',
        tagline: '3 Selected',
        title: 'Active Columns',
      };

      wrapper = mount(
        <DualListSelectorHeading {...props}>
          <span>Extra info</span>
        </DualListSelectorHeading>
      );
    });

    it('should have any additional class passed in', function () {
      expect(wrapper.hasClass(props.extraClass)).to.be.true;
    });

    it('should contain the children passed in', function () {
      const dualListSelectorChildren = wrapper.children();

      expect(dualListSelectorChildren).to.have.lengthOf(3);
      expect(dualListSelectorChildren.first().text()).to.contain(props.title);
      expect(wrapper.childAt(1).text()).to.contain('Extra info');
      expect(dualListSelectorChildren.last().text()).to.contain(props.tagline);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions, comma-dangle */
