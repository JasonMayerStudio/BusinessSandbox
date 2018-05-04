/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

/**
 * Import components to be tested
 */
import Foo from './Foo';

/**
 * The actual component unit test
 */
describe('Foo', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        extraClass: '',
      };
      wrapper = shallow(<Foo {...props} />);
    });

    it('should display a Foo', function () {
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
        extraClass: '',
        clickHandler: handler,
      };

      wrapper = mount(<Foo {...props} />);
    });

    it('should do something', function () {
      const someTarget = wrapper.find('.something');

      someTarget.simulate('click');

      expect(handler.calledOnce).to.be.true;
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
