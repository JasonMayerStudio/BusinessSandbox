/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

/**
 * Import components to be tested
 */
import ToggleSwitch from './ToggleSwitch';

/**
 * The actual component unit test
 */
describe('ToggleSwitch', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        onChange: () => {},
        label: '',
        id: 'switch',
        defaultChecked: false,
      };
      wrapper = shallow(<ToggleSwitch {...props} />);
    });

    it('should display a ToggleSwitch', function () {
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
        id: 'switch',
        defaultChecked: false,
      };

      wrapper = mount(<ToggleSwitch {...props} />);
    });

    it('should have three label elements, left and right', function () {
      const labelTarget = wrapper.find('label');
      expect(labelTarget).to.have.lengthOf(3);
    });

    it('should have an input of type radio', function () {
      const inputTarget = wrapper.find('input');

      expect(inputTarget.props()).to.have.property('type', 'checkbox');
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

    it('should have a attriute to disable toggle switch', function () {
      props.disabled = true;
      wrapper = mount(<ToggleSwitch {...props} />);

      const inputTarget = wrapper.find('input');

      expect(inputTarget.props()).to.have.property('disabled', props.disabled);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
