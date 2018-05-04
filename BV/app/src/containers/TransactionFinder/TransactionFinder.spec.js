/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Button from 'Components/Button';

/**
 * Import components to be tested
 */
import { TransactionFinder } from './TransactionFinder';

/**
 * The actual component unit test
 */
describe.skip('TransactionFinder', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        reportId: 13,
        report: { name: 'Transactions' },
        isFetching: false,
        reportActions: {},
        reportFilterActions: {},
        currentFilters: {},
        preferences: {
          language: 'en-US',
        },
      };

      wrapper = shallow(<TransactionFinder {...props} />);
    });

    it('should display a TransactionFinder container', function () {
      expect(wrapper).to.have.length(1);
    });

    it('should have a top-level header with the name', function () {
      const h1 = wrapper.find('h1');

      const h1Text = h1.text();

      expect(h1Text).to.contain('Transaction Finder');
    });
  });

  describe('props tests', function () {
    let props;
    let wrapper;
    let mockGetTransactionFinderReport;

    beforeEach(function () {
      mockGetTransactionFinderReport = sinon.spy();

      props = {
        reportId: 13,
        report: { name: 'Transactions', id: 13 },
        isFetching: false,
        reportActions: {
          getTransactionFinderReport: mockGetTransactionFinderReport,
        },
        reportFilterActions: {},
        currentFilters: {},
        preferences: {
          language: 'en-US',
        },
      };

      wrapper = mount(<TransactionFinder {...props} />);
    });

    it('should have a button to submit the search form', function () {
      const buttons = wrapper.find(Button);

      const submitButton = buttons.find('[type="submit"]');

      expect(submitButton.text()).to.contain('Search');
    });

    it('should have a button to reset the search form', function () {
      const buttons = wrapper.find(Button);

      const submitButton = buttons.find('[type="reset"]');

      expect(submitButton.text()).to.contain('Reset');
    });

    it('should dispatch an action to get transaction finder report if no reports in store', function () {
      expect(mockGetTransactionFinderReport.called).to.be.true;
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
