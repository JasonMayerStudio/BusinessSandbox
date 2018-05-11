/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

/**
 * Import components to be tested
 */
import GDNewFilterDropdown from './GDNewFilterDropdown';

/**
 * The actual component unit test
 */
describe('GDNewFilterDropdown', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        extraClass: '',
        onChange: () => {},
        saveFilterName: () => {},
        toggleDropdown: () => {},
        translations: {
          cancel: 'Cancel',
          save: 'Save',
          saveFilterLabel: 'Filter Name',
          saveFilterTitle: 'Save Filter',
        },
        value: '',
      };
      wrapper = shallow(<GDNewFilterDropdown {...props} />);
    });

    it('should display a GDNewFilterDropdown', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });

  describe('props tests', function () {
    let props;
    let changeHandler;
    let saveHandler;
    let toggleHandler;
    let wrapper;

    beforeEach(function () {
      changeHandler = sinon.spy();
      saveHandler = sinon.spy();
      toggleHandler = sinon.spy();

      props = {
        extraClass: 'persimmon',
        onChange: changeHandler,
        saveFilterName: saveHandler,
        toggleDropdown: toggleHandler,
        translations: {
          cancel: 'Cancel',
          save: 'Save',
          saveFilterLabel: 'Filter Name',
          saveFilterTitle: 'Save Filter',
        },
        value: '',
      };

      wrapper = mount(<GDNewFilterDropdown {...props} />);
    });

    it('should apply an extra class if one is provided', function () {
      const extraClass = wrapper.find('.persimmon');
      expect(extraClass).to.have.lengthOf(1);
    });

    it('should update on change', function () {
      const fieldInput = wrapper.find('.field-input');
      fieldInput.simulate('change');
      expect(changeHandler.calledOnce).to.be.true;
    });

    it('should close on click', function () {
      const closeTarget = wrapper.find('.button-link');
      closeTarget.simulate('click');
      expect(toggleHandler.calledOnce).to.be.true;
    });

    it('should save on click', function () {
      wrapper.setProps({ value: 'foo' });
      const saveTarget = wrapper.find('.button-primary');
      saveTarget.simulate('click');
      expect(saveHandler.calledOnce).to.be.true;
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
