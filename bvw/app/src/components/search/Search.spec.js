/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

/**
 * Import components to be tested
 */
import Search from './Search';

/**
 * The actual component unit test
 */
describe('Search', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        filterText: '',
        placeholder: '',
        onChange: () => {},
        error: '',
      };
      wrapper = shallow(<Search {...props} />);
    });

    it('should display a Search', function () {
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
        filterText: 'my new value',
        placeholder: 'Search Users',
        onChange: onStateChange,
        error: 'Something went wrong with your search.',
      };

      wrapper = mount(<Search {...props} />);
    });

    it('should display an input element', function () {
      expect(wrapper.find('input')).to.have.lengthOf(2);
    });

    it('should display an error message', function () {
      const errorElement = wrapper.find('.message-error');

      expect(errorElement).to.have.lengthOf(1);
      expect(errorElement.text()).to.equal('Something went wrong with your search.');
    });

    it('should call a function to change its state', function () {
      const textInput = wrapper.find('.search-field.hidden-s');

      textInput.simulate('change', { target: { value: wrapper.prop('filterText') } });

      expect(onStateChange.calledOnce).to.be.true;
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
