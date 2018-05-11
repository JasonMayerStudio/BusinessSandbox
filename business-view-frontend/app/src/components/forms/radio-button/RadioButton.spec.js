/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

/**
 * Import components to be tested
 */
import RadioButton from './RadioButton';

/**
 * The actual component unit test
 */
describe('RadioButton', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        onChange: () => {},
        label: '',
        id: 'completed',
        isChecked: false,
      };
      wrapper = shallow(<RadioButton {...props} />);
    });

    it('should display a RadioButton', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });

  describe('props tests', function () {
    let props;
    let wrapper;
    const handler = sinon.spy();

    beforeEach(function () {
      props = {
        onChange: handler,
        label: '',
        id: 'completed',
        isChecked: false,
      };

      wrapper = mount(<RadioButton {...props} />);
    });

    it('should have a label element', function () {
      const labelTarget = wrapper.find('label');
      expect(labelTarget).to.have.lengthOf(1);
    });

    it('should have an input of type radio', function () {
      const inputTarget = wrapper.find('input');

      expect(inputTarget.props()).to.have.property('type', 'radio');
    });

    it('should have an input with the given ID', function () {
      const inputTarget = wrapper.find('input');

      expect(inputTarget.props()).to.have.property('id', props.id);
    });

    it('should call a handler when changed', function () {
      const inputTarget = wrapper.find('input');

      inputTarget.simulate('change');

      expect(handler.calledOnce).to.be.true;
    });
  });

  describe('toggle tests', function () {
    let props;
    let wrapper;
    const handler = sinon.spy();

    beforeEach(function () {
      props = {
        onChange: handler,
        label: '',
        id: 'completed',
      };
    });

    it('should have an input that is unchecked', function () {
      props.isChecked = false;
      wrapper = mount(<RadioButton {...props} />);

      const inputTarget = wrapper.find('input');

      expect(inputTarget.props()).to.have.property('checked', props.isChecked);
    });

    it('should have an input that is checked', function () {
      props.isChecked = true;
      wrapper = mount(<RadioButton {...props} />);

      const inputTarget = wrapper.find('input');

      expect(inputTarget.props()).to.have.property('checked', props.isChecked);
    });

    it('should have an input that not disabled', function () {
      props.isChecked = true;
      props.readonly = false;
      wrapper = mount(<RadioButton {...props} />);

      const inputTarget = wrapper.find('input');

      expect(inputTarget.props()).to.have.property('disabled', props.readonly);
    });

    it('should have an input that disabled', function () {
      props.isChecked = false;
      props.readonly = true;
      wrapper = mount(<RadioButton {...props} />);

      const inputTarget = wrapper.find('input');

      expect(inputTarget.props()).to.have.property('disabled', props.readonly);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
