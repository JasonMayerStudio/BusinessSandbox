/* eslint-disable func-names, prefer-arrow-callback */

import { expect } from 'chai';
import {
  getSortedReports,
  getViewableReports,
} from './reportSelectors';

describe('Report selectors', function () {
  describe('getSortedReports', function () {
    it('should return an empty array when given an empty array', function () {
      const reportsResponse = [];
      const expectedSort = [];

      const sortedReports = getSortedReports(reportsResponse);

      expect(sortedReports).to.eql(expectedSort);
    });

    it('should return all reports with a display order set', function () {
      const reportsResponse = [
        {
          name: 'Settled Transactions ',
          lookerView: 'settled_transactions',
          lookerModel: 'settled_transactions',
          category: 'Disputes',
          displayOrder: 3,
          description: ' extendedDescription of the settled transactions report',
          id: 2,
        },
        {
          name: 'Chargebacks ',
          lookerView: 'chargebacks',
          lookerModel: 'disputes',
          category: 'Disputes',
          displayOrder: 4,
          description: ' extendedDescription of the chargebacks report',
          id: 1,
        },
        {
          name: 'Batches ',
          lookerView: 'batches',
          lookerModel: 'batches',
          category: 'Batches',
          displayOrder: 2,
          description: ' extendedDescription of the batches report',
          id: 3,
        },
        {
          name: 'Authorizations ',
          lookerView: 'authorizations',
          lookerModel: 'authorizations',
          category: 'Authorizations',
          displayOrder: 1,
          description: ' extendedDescription of the authorizations report',
          id: 4,
        },
      ];

      const expectedSort = [
        {
          name: 'Authorizations ',
          lookerView: 'authorizations',
          lookerModel: 'authorizations',
          category: 'Authorizations',
          displayOrder: 1,
          description: ' extendedDescription of the authorizations report',
          id: 4,
        },
        {
          name: 'Batches ',
          lookerView: 'batches',
          lookerModel: 'batches',
          category: 'Batches',
          displayOrder: 2,
          description: ' extendedDescription of the batches report',
          id: 3,
        },
        {
          name: 'Settled Transactions ',
          lookerView: 'settled_transactions',
          lookerModel: 'settled_transactions',
          category: 'Disputes',
          displayOrder: 3,
          description: ' extendedDescription of the settled transactions report',
          id: 2,
        },
        {
          name: 'Chargebacks ',
          lookerView: 'chargebacks',
          lookerModel: 'disputes',
          category: 'Disputes',
          displayOrder: 4,
          description: ' extendedDescription of the chargebacks report',
          id: 1,
        },
      ];

      const sortedReports = getSortedReports(reportsResponse);

      expect(sortedReports).to.eql(expectedSort);
    });

    it('should exclude any report with a display order of 0', function () {
      const reportsResponse = [
        {
          name: 'Settled Transactions ',
          lookerView: 'settled_transactions',
          lookerModel: 'settled_transactions',
          category: 'Disputes',
          displayOrder: 3,
          description: ' extendedDescription of the settled transactions report',
          id: 2,
        },
        {
          name: 'Chargebacks ',
          lookerView: 'chargebacks',
          lookerModel: 'disputes',
          category: 'Disputes',
          displayOrder: 4,
          description: ' extendedDescription of the chargebacks report',
          id: 1,
        },
        {
          name: 'Batches ',
          lookerView: 'batches',
          lookerModel: 'batches',
          category: 'Batches',
          displayOrder: 2,
          description: ' extendedDescription of the batches report',
          id: 3,
        },
        {
          name: 'Authorizations ',
          lookerView: 'authorizations',
          lookerModel: 'authorizations',
          category: 'Authorizations',
          displayOrder: 1,
          description: ' extendedDescription of the authorizations report',
          id: 4,
        },
        {
          name: 'Transaction Finder',
          lookerView: 'transaction_finder',
          lookerModel: 'transaction_finder',
          category: 'Transaction Finder',
          displayOrder: 0,
          description: 'English extendedDescription of the transaction finder',
          id: 5,
        },
      ];

      const expectedSort = [
        {
          name: 'Authorizations ',
          lookerView: 'authorizations',
          lookerModel: 'authorizations',
          category: 'Authorizations',
          displayOrder: 1,
          description: ' extendedDescription of the authorizations report',
          id: 4,
        },
        {
          name: 'Batches ',
          lookerView: 'batches',
          lookerModel: 'batches',
          category: 'Batches',
          displayOrder: 2,
          description: ' extendedDescription of the batches report',
          id: 3,
        },
        {
          name: 'Settled Transactions ',
          lookerView: 'settled_transactions',
          lookerModel: 'settled_transactions',
          category: 'Disputes',
          displayOrder: 3,
          description: ' extendedDescription of the settled transactions report',
          id: 2,
        },
        {
          name: 'Chargebacks ',
          lookerView: 'chargebacks',
          lookerModel: 'disputes',
          category: 'Disputes',
          displayOrder: 4,
          description: ' extendedDescription of the chargebacks report',
          id: 1,
        },
      ];

      const sortedReports = getSortedReports(reportsResponse);

      expect(sortedReports).to.eql(expectedSort);
    });
  });

  describe('getViewableReports', function () {
    it('should filter out reports that are not listable', function () {
      const reportsResponseData = [
        {
          reportName: 'Authorizations ',
          reportDescription: 'English description of Authorizations ',
          reportId: 6,
          key: 'auth_paginated',
          reportBaseName: 'Authorizations ',
          reportBaseDescription: 'English description of Authorizations ',
          totalColumns: 110,
          totalVisibleColumns: 35,
          totalSummaryColumns: 5,
          totalFilterCount: 88,
          defaultDateColumn: 'Auth Date',
          isListable: true,
          systemReport: true,
        },
        {
          reportName: 'Chargeback',
          reportDescription: 'English Description Of chargeback',
          reportId: 9,
          key: 'chargebacks_paginated',
          reportBaseName: 'Chargebacks ',
          reportBaseDescription: 'English description of Chargebacks ',
          totalColumns: 102,
          totalVisibleColumns: 72,
          totalSummaryColumns: 12,
          totalFilterCount: 102,
          defaultDateColumn: 'Case Chargeback Datetime',
          isListable: false,
          systemReport: true,
        },
        {
          reportName: 'Settlement Batch ',
          reportDescription: 'English description of Settlement Batches ',
          reportId: 7,
          key: 'batches_paginated',
          reportBaseName: 'Batches ',
          reportBaseDescription: 'English description of Batches ',
          totalColumns: 42,
          totalVisibleColumns: 20,
          totalSummaryColumns: 8,
          totalFilterCount: 42,
          defaultDateColumn: 'File Date Full',
          isListable: true,
          systemReport: true,
        },
        {
          reportName: 'Settlement Transaction',
          reportDescription: 'English Description Of Settled Transactions',
          reportId: 8,
          key: 'settled_transactions_paginated',
          reportBaseName: 'Settled Transactions ',
          reportBaseDescription: 'English description of Settled Transactions ',
          totalColumns: 198,
          totalVisibleColumns: 72,
          totalSummaryColumns: 12,
          totalFilterCount: 165,
          defaultDateColumn: 'Tran Date Full',
          isListable: true,
          systemReport: true,
        },
      ];

      const expectedReports = [
        {
          reportName: 'Authorizations ',
          reportDescription: 'English description of Authorizations ',
          reportId: 6,
          key: 'auth_paginated',
          reportBaseName: 'Authorizations ',
          reportBaseDescription: 'English description of Authorizations ',
          totalColumns: 110,
          totalVisibleColumns: 35,
          totalSummaryColumns: 5,
          totalFilterCount: 88,
          defaultDateColumn: 'Auth Date',
          isListable: true,
          systemReport: true,
        },
        {
          reportName: 'Settlement Batch ',
          reportDescription: 'English description of Settlement Batches ',
          reportId: 7,
          key: 'batches_paginated',
          reportBaseName: 'Batches ',
          reportBaseDescription: 'English description of Batches ',
          totalColumns: 42,
          totalVisibleColumns: 20,
          totalSummaryColumns: 8,
          totalFilterCount: 42,
          defaultDateColumn: 'File Date Full',
          isListable: true,
          systemReport: true,
        },
        {
          reportName: 'Settlement Transaction',
          reportDescription: 'English Description Of Settled Transactions',
          reportId: 8,
          key: 'settled_transactions_paginated',
          reportBaseName: 'Settled Transactions ',
          reportBaseDescription: 'English description of Settled Transactions ',
          totalColumns: 198,
          totalVisibleColumns: 72,
          totalSummaryColumns: 12,
          totalFilterCount: 165,
          defaultDateColumn: 'Tran Date Full',
          isListable: true,
          systemReport: true,
        },
      ];

      const viewableReports = getViewableReports(reportsResponseData);

      expect(viewableReports).to.eql(expectedReports);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback */
