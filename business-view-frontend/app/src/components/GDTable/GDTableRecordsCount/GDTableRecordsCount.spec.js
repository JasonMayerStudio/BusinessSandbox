/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

/**
 * Import components to be tested
 */
import GDTableRecordsCount from './GDTableRecordsCount';

/**
 * The actual component unit test
 */
describe('GDTableRecordsCount', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        currentPage: 2,
        totalRecords: 96,
        text: {},
      };
      wrapper = shallow(<GDTableRecordsCount {...props} />);
    });

    it('should display a GDTableRecordsCount', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });

  describe('props tests', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        currentPage: 2,
        recordsShown: 50,
        totalRecords: 96,
        text: {
          showingRecords: 'Showing records',
          preposition: 'of',
        },
      };

      wrapper = mount(<GDTableRecordsCount {...props} />);
    });

    it('should have a string starting the range and total records', function () {
      const string = 'Showing records 51–96 of 96';
      const results = wrapper.find('.gd-table__records-count');

      expect(results.text()).to.eql(string);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
