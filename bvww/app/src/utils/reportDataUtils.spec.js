/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions, quotes, quote-props */

import { expect } from 'chai';

// system under test
import {
  parseTotalRecords,
  getSummaryRowTitle,
} from './reportDataUtils';

describe('Report Data Utils', function () {
  describe('parseTotalRecords', function () {
    it('should return 0 when passed an empty string', function () {
      const contentRangeHeader = '';

      const totalRecords = parseTotalRecords(contentRangeHeader);

      expect(totalRecords).to.eq(0);
    });

    it('should return 0 when bad content-range header is passed', function () {
      const contentRangeHeader = 'table 1-25/monkey';

      const totalRecords = parseTotalRecords(contentRangeHeader);

      expect(totalRecords).to.eq(0);
    });

    it('should return the appropriate integer from the end of a content-range header', function () {
      const contentRangeHeader = 'table 1-25/1000';

      const totalRecords = parseTotalRecords(contentRangeHeader);

      expect(totalRecords).to.eq(1000);
    });
  });

  describe('parseTotalRecords', function () {
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

    it('should return currency code explicitedly passed in', function () {
      const title = 'Summary';
      const currencyCode = 'CAD';

      const displayedTitle = getSummaryRowTitle(currencyCode, title, summaryData);

      expect(displayedTitle).to.contain(currencyCode);
      expect(displayedTitle).not.to.contain(summaryData[0].total_mc_purchase_amount.units);
    });

    it('should return currency code from the data row, if none is explicitedly passed in', function () {
      const title = 'Summary';
      const currencyCode = '';

      const displayedTitle = getSummaryRowTitle(currencyCode, title, summaryData);

      expect(displayedTitle).not.to.contain('CAD');
      expect(displayedTitle).to.contain(summaryData[0].total_mc_purchase_amount.units);
    });

    it('should return no currency code if there is no one currency code present in the data row', function () {
      const title = 'Summary';
      const currencyCode = '';
      const unitlessSummaryData = [
        {
          total_cup_purchase_amount: {
            value: 12031.31,
            units: '',
          },
          avg_batch_amount: {
            value: 1107.31,
            units: '',
          },
          total_mc_purchase_amount: {
            value: 1897.89,
            units: '',
          },
        },
      ];

      const displayedTitle = getSummaryRowTitle(currencyCode, title, unitlessSummaryData);

      expect(displayedTitle).not.to.match(/\([\w]+\)/);
    });

    it('should return no currency code if there is more than one currency code present in the data row', function () {
      const title = 'Summary';
      const currencyCode = '';
      const inconsistentSummaryData = [
        {
          total_cup_purchase_amount: {
            value: 12031.31,
            units: '',
          },
          avg_batch_amount: {
            value: 1107.31,
            units: 'USD',
          },
          total_mc_purchase_amount: {
            value: 1897.89,
            units: 'HKD',
          },
        },
      ];

      const displayedTitle = getSummaryRowTitle(currencyCode, title, inconsistentSummaryData);

      expect(displayedTitle).not.to.contain('CAD');
      expect(displayedTitle).not.to.contain(summaryData[0].avg_batch_amount.units);
      expect(displayedTitle).not.to.contain(summaryData[0].total_mc_purchase_amount.units);
      expect(displayedTitle).not.to.contain('(');
      expect(displayedTitle).not.to.contain(')');
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions, quotes, quote-props */
