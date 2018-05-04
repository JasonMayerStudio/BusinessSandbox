/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

/**
 * Import components to be tested
 */
import SaveInput from './SaveInput';

/**
 * The actual component unit test
 */
describe('SaveInput', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        onChange: () => {},
        saveInput: () => {},
        inputValue: '',
        placeholder: '',
      };
      wrapper = shallow(<SaveInput {...props} />);
    });

    it('should display a SaveInput', function () {
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
        onChange: handler,
        saveInput: () => {},
        inputValue: '',
        placeholder: 'Filter Name',
      };

      wrapper = mount(<SaveInput {...props} />);
    });

    it('should change on input', function () {
      const inputTarget = wrapper.find('.field-input');

      inputTarget.simulate('change', { target: { value: 'foo' } });

      expect(handler.calledOnce).to.be.true;

      wrapper.setProps({ inputValue: 'foo' });

      expect(inputTarget.props().value).to.equal('foo');
    });

    it('should have a placeholder value', function () {
      const inputTarget = wrapper.find('.field-input');

      expect(inputTarget.props().placeholder).to.equal(wrapper.props().placeholder);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
