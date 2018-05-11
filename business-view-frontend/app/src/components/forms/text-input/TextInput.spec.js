/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
/**
 * Import components to be tested
 */
import TextInput from './TextInput';
import InformationBubble from '../../information-bubble/InformationBubble';

describe('TextInput', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        name: 'email',
        label: 'Email',
        type: 'email',
        onChange: () => {},
        placeholder: 'jdoe@example.com',
        value: '',
        error: '',
      };
      wrapper = shallow(<TextInput {...props} />);
    });

    it('should render a TextInput', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });

  describe('basic properties', function () {
    let props;
    let wrapper;
    let onStateChange;
    let blurHandler;

    beforeEach(function () {
      onStateChange = sinon.spy();
      blurHandler = sinon.spy();

      props = {
        name: 'email',
        label: 'Email',
        type: 'email',
        onChange: onStateChange,
        placeholder: 'jdoe@example.com',
        value: '',
        error: 'Must be a valid email address',
        onBlur: blurHandler,
        isRequired: true,
      };

      wrapper = mount(<TextInput {...props} />);
    });

    it('should display a label', function () {
      expect(wrapper.find('label')).to.have.length(1);
    });

    it('should display an input element', function () {
      expect(wrapper.find('input')).to.have.length(1);
    });

    it('should display a required marker', function () {
      const label = wrapper.find('label');

      const requiredMarker = label.find('.field__required').text();

      expect(requiredMarker).to.eq('*');
    });

    it('should display an error message', function () {
      const errorElement = wrapper.find('.message-error');
      expect(errorElement).to.have.lengthOf(1);

      const infoBubble = errorElement.find(InformationBubble);
      expect(infoBubble).to.have.lengthOf(1);
    });

    it('should call a function to change its state', function () {
      const textInput = wrapper.find('.field-input');

      textInput.simulate('change');

      expect(onStateChange.calledOnce).to.be.true;
    });

    it('should call a function to handle blur events', function () {
      const textInput = wrapper.find('.field-input');

      textInput.simulate('blur');

      expect(blurHandler.calledOnce).to.be.true;
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
