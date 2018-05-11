/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

/**
 * Import components to be tested
 */
import GDTableFooter from './GDTableFooter';

/**
 * The actual component unit test
 */
describe('GDTableFooter', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        extraClass: '',
        totalRecords: 96,
        recordsCountText: {},
        currentPage: 1,
        recordsShown: 25,
        translations: {
          show25perPage: 'Show 25 per page',
          show50perPage: 'Show 50 per page',
          show75perPage: 'Show 75 per page',
          show100perPage: 'Show 100 per page',
        },
      };
      wrapper = shallow(<GDTableFooter {...props} />);
    });

    it('should display a GDTableFooter', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });

  describe('props tests', function () {
    let props;
    let wrapper;
    let nextHandler;
    let prevHandler;
    let emptyInputField;
    let changeHandler;

    beforeEach(function () {
      nextHandler = sinon.spy();
      prevHandler = sinon.spy();
      emptyInputField = sinon.spy();
      changeHandler = sinon.spy();

      props = {
        extraClass: 'mailchimp',
        totalRecords: 96,
        recordsCountText: {
          showingRecords: 'Showing records',
          preposition: 'of',
        },
        currentPage: 1,
        recordsShown: 25,
        changeHandler,
        emptyInputField,
        error: '',
        nextHandler,
        prevHandler,
        totalPages: 5,
        translations: {
          prev: 'Prev',
          page: 'Page',
          preposition: 'of',
          next: 'Next',
        },
      };

      wrapper = mount(<GDTableFooter {...props} />);
    });

    it('should have any additional class passed in', function () {
      expect(wrapper.hasClass(props.extraClass)).to.be.true;
    });

    it('should render a GDTableRecordsCount', function () {
      const recordsCount = wrapper.find('GDTableRecordsCount');

      expect(recordsCount).to.have.lengthOf(1);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
