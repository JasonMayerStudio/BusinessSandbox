/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import moment from 'moment';

/**
 * Import components to be tested
 */
import DateRangeInput from './DateRangeInput';

/**
 * The actual component unit test
 */
describe('DateRangeInput', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        id: 14,
        startDate: moment(),
        endDate: moment(),
        placeholder: '',
        onDateChange: () => {},
        error: '',
      };
      wrapper = shallow(<DateRangeInput {...props} />);
    });

    it('should display a DateRangeInput', function () {
      expect(wrapper).to.have.length(1);
    });
  });

  describe('basic properties', function () {
    const id = 42;
    let props;
    let handler;
    let wrapper;

    beforeEach(function () {
      handler = sinon.spy();

      props = {
        id,
        startDate: moment(),
        endDate: moment(),
        onDateChange: handler,
        error: 'Dates are not in Range.',
        title: 'Date Received',
      };

      wrapper = mount(<DateRangeInput {...props} />);
    });

    it('should display 2 input elements', function () {
      expect(wrapper.find('input')).to.have.lengthOf(2);
    });

    it('should display an error message', function () {
      const errorElement = wrapper.find('.message-error');

      expect(errorElement).to.have.lengthOf(1);
      expect(errorElement.text()).to.equal('Dates are not in Range.');
    });

    it('should call a function to change DatePicker start date', function () {
      const textInput = wrapper.find('.date-start');
      textInput.simulate('change', { target: { value: '10/11/2011' } });

      expect(handler.calledOnce).to.be.true;
      expect(handler.getCall(0).args[0]).to.equal(id);
      expect(handler.getCall(0).args[1]).to.equal('start');

      const argDate = handler.getCall(0).args[2].startOf('day').format();
      const inputDate = moment('2011-10-11').startOf('day').format();
      expect(argDate).to.equal(inputDate);
    });

    it('should call a function to change DatePicker end date', function () {
      // expect(wrapperDate.props().endDate).to.equal(this.props.endDate);
      const textInput = wrapper.find('.date-end');
      textInput.simulate('change', { target: { value: '11/22/2015' } });

      expect(handler.calledOnce).to.be.true;
      expect(handler.getCall(0).args[0]).to.equal(id);
      expect(handler.getCall(0).args[1]).to.equal('end');

      const argDate = handler.getCall(0).args[2].startOf('day').format();
      const inputDate = moment('2015-11-22').startOf('day').format();
      expect(argDate).to.equal(inputDate);
    });
  });

  describe('optional properties', function () {
    const id = 42;
    let props;
    let handler;
    let wrapper;

    beforeEach(function () {
      handler = sinon.spy();

      props = {
        id,
        startDate: moment(),
        endDate: moment(),
        onDateChange: handler,
        error: 'Dates are not in Range.',
        title: 'Date Received',
      };
    });

    it('should default to a date format of MM/DD/YYYY', function () {
      wrapper = mount(<DateRangeInput {...props} />);

      expect(wrapper.prop('dateFormat')).to.equal('MM/DD/YYYY');
    });

    it('should accept the default date format of MM/DD/YYYY as a prop', function () {
      props.dateFormat = 'MM/DD/YYYY';
      wrapper = mount(<DateRangeInput {...props} />);

      expect(wrapper.state('dateFormat')).to.equal('MM/DD/YYYY');
    });

    it('should accept the date format of DD/MM/YYYY as a prop', function () {
      props.dateFormat = 'DD/MM/YYYY';
      wrapper = mount(<DateRangeInput {...props} />);

      expect(wrapper.state('dateFormat')).to.equal('DD/MM/YYYY');
    });

    it('should coerce an invalid date format to the default format of MM/DD/YYYY', function () {
      props.dateFormat = 'D/mm/YYY';
      wrapper = mount(<DateRangeInput {...props} />);

      expect(wrapper.state('dateFormat')).to.equal('MM/DD/YYYY');
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
