/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

/**
 * Import components to be tested
 */
import CreditCardInput from './CreditCardInput';

const cardOptions = [
  {
    value: 'six-digits',
    text: 'First 6 Digits',
    maxLength: 6,
  },
  {
    value: 'four-digits',
    text: 'Last 4 Digits',
    maxLength: 4,
  },
  {
    value: 'six-four-digits',
    text: 'First 6 / Last 4',
  },
];

/**
 * The actual component unit test
 */

describe('CreditCardInput', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        id: 'filter-14',
        cardOptions,
        selectedInput: cardOptions[2],
        onSelectChange: () => { },
        onChange: () => { },
        v1: '',
        v2: '',
      };
      wrapper = shallow(<CreditCardInput {...props} />);
    });

    it('should display a CreditCardInput', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });

  describe('props tests', function () {
    let props;
    let handler;
    let wrapper;
    let inputHandler;

    beforeEach(function () {
      handler = sinon.spy();
      inputHandler = sinon.spy();

      props = {
        id: 'filter-14',
        cardOptions,
        selectedInput: cardOptions[2],
        onSelectChange: handler,
        onChange: inputHandler,
        v1: '543210',
        v2: '6789',
      };

      wrapper = mount(<CreditCardInput {...props} />);
    });

    it('should have a complete translation object prop', function () {
      const translationsProp = wrapper.prop('translations');

      expect(translationsProp).to.have.property('label');
      expect(translationsProp).to.have.property('first6Placeholder');
      expect(translationsProp).to.have.property('last4Placeholder');
      expect(translationsProp).to.have.property('helperText');
    });

    // @deprecated, 2018-03-14, we may not need option to turn on full credit card number
    it.skip('should open its menu on click', function () {
      const someTarget = wrapper.find('.dropdown-menu-trigger').first();

      someTarget.simulate('click');

      const menuNodes = wrapper.find('.select-menu-option');

      expect(menuNodes).to.have.length(wrapper.props().cardOptions.length);
    });

    // @deprecated, 2018-03-14, we may not need option to turn on full credit card number
    it.skip('should call a handler with a clicked menu item', function () {
      const someTarget = wrapper.find('.dropdown-menu-trigger').first();
      someTarget.simulate('click');

      const nodeToClick = wrapper.find('.select-menu-option').first();
      nodeToClick.simulate('click');

      const args = handler.getCall(0).args;
      expect(args[0]).to.equal(wrapper.props().cardOptions[0].value);
    });

    it('should display a label', function () {
      expect(wrapper.find('label')).to.have.length(1);
    });

    it('should display an input element', function () {
      expect(wrapper.find('input')).to.have.length(2);
    });

    it('should populate the first input with the first given value', function () {
      const firstInput = wrapper.find('input').first();

      expect(firstInput.prop('value')).to.equal(props.v1);
    });

    it('should populate the second input with the second given value', function () {
      const firstInput = wrapper.find('input').last();

      expect(firstInput.prop('value')).to.equal(props.v2);
    });

    it('should call a function when the first input is changed', function () {
      const textInput = wrapper.find('.field-input').first();
      textInput.simulate('change');

      expect(inputHandler.calledOnce).to.be.true;
      expect(inputHandler.getCall(0).args[1]).to.equal('start');
    });

    it('should call a function when the second input is changed', function () {
      const textInput = wrapper.find('.field-input').last();
      textInput.simulate('change');

      expect(inputHandler.calledOnce).to.be.true;
      expect(inputHandler.getCall(0).args[1]).to.equal('end');
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
