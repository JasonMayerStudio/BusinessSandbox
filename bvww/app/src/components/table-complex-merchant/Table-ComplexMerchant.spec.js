/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

/**
 * Import components to be tested
 */
import TableComplexMerchants from './Table-ComplexMerchant';

/**
 * The actual component unit test
 */
describe('TableComplexMerchant', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        content: [],
        columnsToSearch: [],
        globalSelectorGroup: [],
        handleSort: () => {},
        filterRows: () => {},
        complexOnRow: () => {},
        filterText: '',
        currentPage: 1,
        pageCount: 1,
      };
      wrapper = shallow(<TableComplexMerchants {...props} />);
    });

    it('should display a TableComplexMerchant', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });

  describe('props tests', function () {
    let props;
    let wrapper;
    let sortHandler;
    let filterHandler;
    let rowHandler;

    beforeEach(function () {
      sortHandler = sinon.spy();
      filterHandler = sinon.spy();
      rowHandler = sinon.spy();

      props = {
        content: [],
        columnsToSearch: ['associate', 'chain', 'merchantNumber', 'acquirer'],
        globalSelectorGroup: [
          {
            associate: '087',
            chain: 'AAH',
            corp: '052',
            ids: [],
            principal: '001',
            region: '03',
          },
          {
            associate: '190',
            chain: 'AAA',
            corp: '052',
            ids: [],
            principal: '001',
            region: '03',
          },
          {
            associate: '093',
            chain: 'AAA',
            corp: '052',
            ids: [],
            principal: '001',
            region: '03',
          },
        ],
        handleSort: sortHandler,
        filterRows: filterHandler,
        complexOnRow: rowHandler,
        filterText: '0000000000436461',
        currentPage: 2,
        pageCount: 10,
      };

      wrapper = mount(<TableComplexMerchants {...props} />);
    });

    it('should have columns to search', function () {
      const columnsToSearch = wrapper.props().columnsToSearch;

      expect(columnsToSearch).to.have.lengthOf(columnsToSearch.length);
    });

    it('should have a global selector group', function () {
      const globalSelectorGroup = wrapper.props().globalSelectorGroup;

      expect(globalSelectorGroup).to.have.lengthOf(3);
    });

    it('should have a value of filter text', function () {
      expect(wrapper.props().filterText).to.not.be.empty;
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
