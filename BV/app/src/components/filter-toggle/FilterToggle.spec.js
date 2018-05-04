/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

/**
 * Import components to be tested
 */
import FilterToggle from './FilterToggle';

/**
 * The actual component unit test
 */
describe('FilterToggle', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        toggled: false,
        buttonText: '',
        action: () => {},
      };
      wrapper = shallow(<FilterToggle {...props} />);
    });

    it('should display a FilterToggle', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });

  describe('props tests', function () {
    let props;
    let handler;
    let wrapper;

    beforeEach(function () {
      handler = sinon.spy();

      props = {
        toggled: false,
        buttonText: 'Filter',
        action: handler,
      };

      wrapper = mount(<FilterToggle {...props} />);
    });

    it('should toggle on click', function () {
      const buttonTarget = wrapper.find('.button');

      buttonTarget.simulate('click');

      expect(handler.calledOnce).to.be.true;
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
