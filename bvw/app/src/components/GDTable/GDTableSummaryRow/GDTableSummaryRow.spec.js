/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */
import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

/**
  * Import components to be tested
  */
import GDTableSummaryRow from './GDTableSummaryRow';

const summaryColumns = [
  {
    defaultIsVisible: true,
    description: 'Average Batch Amount',
    isRequired: true,
    isSortable: false,
    isSummaryColumn: true,
    name: 'Average Batch Amount',
    reportColumnId: 39,
    sortDirection: null,
    sortOrderPriority: 0,
    templateId: 39,
    displayType: 'CURRENCY',
    columnKey: 'avg_batch_amount',
    categoryDescription: 'Batches ETL Batch ID',
    categoryKey: 'batchInformation',
    categoryName: 'ETL Batch ID',
    displayOrder: 6,
  },
  {
    defaultIsVisible: true,
    description: 'Total China Union Pay Purchase Amount of All Batches',
    isRequired: true,
    isSortable: false,
    isSummaryColumn: true,
    name: 'Total CUP Purchase Amount',
    reportColumnId: 66,
    sortDirection: null,
    sortOrderPriority: 0,
    templateId: 66,
    displayType: 'CURRENCY',
    columnKey: 'total_cup_purchase_amount',
    categoryDescription: 'Batches Visa Refund Count',
    categoryKey: 'cardBreakdown',
    categoryName: 'Visa Refund Count',
    displayOrder: 33,
  },
  {
    defaultIsVisible: true,
    description: 'Total MasterCard Purchase Amount of All Batches',
    isRequired: true,
    isSortable: false,
    isSummaryColumn: true,
    name: 'Total MasterCard Purchase Amount',
    reportColumnId: 102,
    sortDirection: null,
    sortOrderPriority: 0,
    templateId: 102,
    displayType: 'CURRENCY',
    columnKey: 'total_mc_purchase_amount',
    categoryDescription: 'Batches Visa Refund Count',
    categoryKey: 'cardBreakdown',
    categoryName: 'Visa Refund Count',
    displayOrder: 69,
  },
];

const summaryData = [
  {
    total_cup_purchase_amount: {
      value: 12031.31,
      units: 'USD',
    },
    avg_batch_amount: {
      value: 1107.31,
      units: 'USD',
    },
    total_mc_purchase_amount: {
      value: 1897.89,
      units: 'USD',
    },
  },
];

/**
  * The actual component unit test
  */
describe('GDTableSummaryRow', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        extraClass: '',
        title: '',
        summaryColumns: [],
        summaryData: [],
      };

      wrapper = shallow(<GDTableSummaryRow {...props} />);
    });

    it('should display a GDTableSummaryRow', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });

  describe('props tests', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        extraClass: 'cheapest-eats',
        title: 'Best Charlotte Eats Under $10',
        summaryColumns,
        summaryData,
      };

      wrapper = mount(<GDTableSummaryRow {...props} />);
    });

    it('should have any additional class passed in', function () {
      expect(wrapper.hasClass(props.extraClass)).to.be.true;
    });

    it('should render the title in an h1 element', function () {
      const header = wrapper.find('h1');
      expect(header.text()).to.contain(props.title);
    });

    it('should use the currency code found in the summary data', function () {
      const header = wrapper.find('h1');
      expect(header.text()).to.contain(props.summaryData[0].total_mc_purchase_amount.units);
    });

    it('should have as many list items as objects in summary data props', function () {
      const listItems = wrapper.find('.gd-table__summary-row-list-item');
      expect(listItems).to.have.lengthOf(Object.keys(props.summaryData[0]).length);
    });

    it('should display the amount within a list item', function () {
      const listItem = wrapper.find('.gd-table__summary-row-list-item-amount').first();
      expect(listItem.text()).to.eql(props.summaryData[0].avg_batch_amount.value.toString());
    });

    it('should display the label within a list item', function () {
      const listItem = wrapper.find('.gd-table__summary-row-list-item-label').first();
      expect(listItem.text()).to.eql(props.summaryColumns[0].name);
    });

    it('should apply a primary class for the first item in the list', function () {
      const listItem = wrapper.find('.gd-table__summary-row-list-item-amount').first();
      expect(listItem.hasClass('primary')).to.be.true;
    });
  });

  describe('override props tests', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        currencyCode: 'CAD',
        extraClass: 'cheapest-eats',
        title: 'Best Charlotte Eats Under $10',
        summaryColumns,
        summaryData,
      };

      wrapper = mount(<GDTableSummaryRow {...props} />);
    });

    it('should render the override currency code, if one is given', function () {
      const header = wrapper.find('h1');
      expect(header.text()).to.contain(props.currencyCode);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
