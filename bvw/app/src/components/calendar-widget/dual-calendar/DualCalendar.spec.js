/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

/**
 * Import components to be tested
 */
import DualCalendar from './DualCalendar';

/**
 * The actual component unit test
 */
describe('DualCalendar', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        selectedDays: [],
        onDayClick: () => {},
        modifiers: {},
      };
      wrapper = shallow(<DualCalendar {...props} />);
    });

    it('should display a DualCalendar', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });

  describe('props tests', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        format: 'MM/DD/YYYY',
      };

      wrapper = mount(<DualCalendar {...props} />);
    });

    it('should have a correct format props', function () {
      expect(wrapper.props().format).to.eql('MM/DD/YYYY');
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
