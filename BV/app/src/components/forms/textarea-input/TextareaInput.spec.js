/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
/**
 * Import components to be tested
 */
import TextareaInput from './TextareaInput';

describe('TextareaInput', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        name: 'Bio',
        onChange: () => {},
        placeholder: 'He was born on the island of Nevis.',
        value: '',
      };
      wrapper = shallow(<TextareaInput {...props} />);
    });

    it('should render a TextareaInput', function () {
      expect(wrapper).to.have.length(1);
    });
  });

  describe('basic properties', function () {
    let props;
    let wrapper;
    let onStateChange;

    beforeEach(function () {
      onStateChange = sinon.spy();

      props = {
        name: 'Bio',
        onChange: onStateChange,
        placeholder: 'Enter your biographical information here.',
        value: '',
      };

      wrapper = mount(<TextareaInput {...props} />);
    });

    it('should display an textarea element', function () {
      expect(wrapper.find('textarea')).to.have.length(1);
    });

    it('should call a function to change its state', function () {
      const textInput = wrapper.find('.field-input');

      textInput.simulate('change');

      expect(onStateChange.calledOnce).to.be.true;
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
