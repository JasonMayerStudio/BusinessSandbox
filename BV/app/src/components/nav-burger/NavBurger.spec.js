/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

/**
 * Import components to be tested
 */
import NavBurger from './NavBurger';

/**
 * The actual component unit test
 */
describe('NavBurger', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        toggleNavigation: () => {},
        navigationToggled: false,
      };
      wrapper = shallow(<NavBurger {...props} />);
    });

    it('should display a NavBurger', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });

  describe('props tests', function () {
    let props;
    let wrapper;
    let handler;

    beforeEach(function () {
      handler = sinon.spy();

      props = {
        toggleNavigation: handler,
        navigationToggled: false,
      };

      wrapper = mount(<NavBurger {...props} />);
    });

    it('should render the input :checked when navigation is toggled', function () {
      const inputTarget = wrapper.find('input');
      expect(handler.calledOnce).to.be.false;

      inputTarget.simulate('click');
      expect(wrapper.props().navigationToggled).to.be.false;
      wrapper.setProps({ navigationToggled: true });

      expect(handler.calledOnce).to.be.true;
      expect(wrapper.props().navigationToggled).to.be.true;
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
