/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions, comma-dangle */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

/**
 * Import components to be tested
 */
import GDTable from './GDTable';

/**
 * The actual component unit test
 */
describe('GDTable', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    const report = {
      dataColumns: [],
      data: [],
      name: 'Chargebacks',
    };

    beforeEach(function () {
      props = {
        data: [],
        report,
        totalRecords: 96,
        recordsCountText: {},
        currentPage: 1,
      };
      wrapper = shallow(
        <GDTable {...props} />
      );
    });

    it('should display a GDTable', function () {
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

    const report = {
      dataColumns: [],
      name: 'Chargebacks',
      summaryColumns: [],
    };

    beforeEach(function () {
      nextHandler = sinon.spy();
      prevHandler = sinon.spy();
      emptyInputField = sinon.spy();
      changeHandler = sinon.spy();

      props = {
        data: [],
        extraClass: 'emoji',
        report,
        totalRecords: 96,
        recordsCountText: {
          showingRecords: 'Showing records',
          preposition: 'of',
        },
        currentPage: 1,
        hasSummaryRow: true,
        changeHandler,
        emptyInputField,
        paginationError: '',
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

      wrapper = mount(
        <GDTable {...props} />
      );
    });

    it('should have any additional class passed in', function () {
      expect(wrapper.hasClass(props.extraClass)).to.be.true;
    });

    it('should have a GDTableSummaryRow', function () {
      const summaryRow = wrapper.find('GDTableSummaryRow');
      expect(summaryRow).to.have.lengthOf(1);
    });

    it('should have a GDTableHeader', function () {
      const tableHeader = wrapper.find('GDTableHeader');
      expect(tableHeader).to.have.lengthOf(1);
    });

    it('should have a GDTableContainer', function () {
      const tableContainer = wrapper.find('GDTableContainer');
      expect(tableContainer).to.have.lengthOf(1);
    });

    it('should have a GDTableFooter', function () {
      const tableFooter = wrapper.find('GDTableFooter');
      expect(tableFooter).to.have.lengthOf(1);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions, comma-dangle */
