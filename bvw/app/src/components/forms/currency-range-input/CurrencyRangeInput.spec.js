/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

/**
 * Import components to be tested
 */
import CurrencyRangeInput from './CurrencyRangeInput';

/**
 * The actual component unit test
 */
describe('CurrencyRangeInput', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        id: 14,
        filterText: '',
        placeholder: '',
        onChange: () => {},
        error: '',
      };
      wrapper = shallow(<CurrencyRangeInput {...props} />);
    });

    it('should display a CurrencyRangeInput', function () {
      expect(wrapper).to.have.length(1);
    });
  });

  describe('basic properties', function () {
    let props;
    let onStateChange;
    let wrapper;

    beforeEach(function () {
      onStateChange = sinon.spy();

      props = {
        id: 14,
        filterText: 'my new value',
        placeholder: 'CurrencyRangeInput Users',
        onChange: onStateChange,
        error: 'Something went wrong with your search.',
        title: 'Currency Range',
      };

      wrapper = mount(<CurrencyRangeInput {...props} />);
    });

    it('should display 2 input elements', function () {
      expect(wrapper.find('input')).to.have.lengthOf(2);
    });

    it('should display an error message', function () {
      const errorElement = wrapper.find('.message-error');

      expect(errorElement).to.have.lengthOf(1);
      expect(errorElement.text()).to.equal('Something went wrong with your search.');
    });

    it('should call a function to change its state when low input is changed', function () {
      const textInput = wrapper.find('.low');
      textInput.simulate('change', { target: { value: wrapper.prop('filterTextLow') } });

      /**
       * Must wrap expect in timeout, to test the setState callback
       *  See: https://github.com/airbnb/enzyme/issues/509
       *  "Due to the asynchronous nature of setState, we have to wrap the expect in a timeout..."
       */
      setTimeout(() => {
        expect(onStateChange.calledOnce).to.be.true;
      }, 1);
    });

    it('should call a function to change its state when high input is changed', function () {
      const textInput = wrapper.find('.high');
      textInput.simulate('change', { target: { value: wrapper.prop('filterTextHigh') } });

      /**
       * Must wrap expect in timeout, to test the setState callback
       *  See: https://github.com/airbnb/enzyme/issues/509
       *  "Due to the asynchronous nature of setState, we have to wrap the expect in a timeout..."
       */
      setTimeout(() => {
        expect(onStateChange.calledOnce).to.be.true;
      }, 1);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
