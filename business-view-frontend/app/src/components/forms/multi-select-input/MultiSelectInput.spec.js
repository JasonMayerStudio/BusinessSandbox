/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Checkbox from 'Components/forms/checkbox/Checkbox';

/**
 * Import components to be tested
 */
import MultiSelectInput from './MultiSelectInput';

/**
 * The actual component unit test
 */
describe('MultiSelectInput', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;
    const name = 'Reason Code';

    beforeEach(function () {
      props = {
        name,
        extraClass: '',
        values: [],
        handleChange: () => {},
      };

      wrapper = shallow(<MultiSelectInput {...props} />);
    });

    it('should display a MultiSelectInput', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });

  describe('props tests', function () {
    const values = getMockValues();

    const stateValues = values.map((value) => {
      return Object.assign({}, value, { isChecked: false });
    });

    let props;
    let handler;
    let wrapper;
    const name = 'Reason Code';

    beforeEach(function () {
      handler = sinon.spy();

      props = {
        name,
        extraClass: '',
        values: stateValues,
        handleChange: handler,
      };

      wrapper = mount(<MultiSelectInput {...props} />);
    });

    it('should have a label which contains the name prop', function () {
      const label = wrapper.find('label').first();

      expect(label.text()).to.contain(name);
    });

    it('should have a prop to hold an array of possible values', function () {
      const valuesProps = wrapper.prop('values');

      expect(valuesProps).to.have.lengthOf(values.length);
    });

    it('should contain as many checkboxes as items in the values prop array', function () {
      const checkboxes = wrapper.find(Checkbox);

      expect(checkboxes).to.have.lengthOf(values.length);
    });

    it('should call a click handler with the ID of the checkbox that was clicked', function () {
      const checkboxes = wrapper.find(Checkbox);
      const firstCheckbox = checkboxes.first().find('input[type="checkbox"]');

      firstCheckbox.simulate('change', { target: { checked: true } });

      expect(handler.calledOnce).to.be.true;
    });
  });
});

function getMockValues() {
  return [
    {
      id: 770,
      value: '01',
      valueLabel: '01 / Mulitple Values',
      desc: 'Visa = non-receipt; MC = flux capacitor failed',
    },
    {
      id: 771,
      value: '02',
      valueLabel: '02 / Mulitple Values',
      desc: 'Visa = fire swamp; AMEX = dread pirate roberts',
    },
    {
      id: 772,
      value: '04',
      valueLabel: '04 / Non-payment of luxury',
      desc: 'Go to jail. Do not pass go. Do not collect $200.',
    },
  ];
}

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
