/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions, comma-dangle */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

/**
 * Import components to be tested
 */
import Panel from './Panel';

/**
 * The actual component unit test
 */
describe('Panel', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        extraClass: '',
      };
      wrapper = shallow(<Panel {...props}>Foo</Panel>);
    });

    it('should display a Panel', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });

  describe('props tests', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        extraClass: 'flux-capacitor',
      };

      wrapper = mount(
        <Panel {...props}>
          <div>Tweedle-dee</div>
          <div>Tweedle-dum</div>
          <div>Sorry</div>
        </Panel>
      );
    });

    it('should have any additional class passed in', function () {
      expect(wrapper.hasClass(props.extraClass)).to.be.true;
    });

    it('should contain the children passed in', function () {
      const panelChildren = wrapper.children();

      expect(panelChildren).to.have.lengthOf(3);
      expect(panelChildren.first().text()).to.contain('Tweedle-dee');
      expect(panelChildren.last().text()).to.contain('Sorry');
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions, comma-dangle */
