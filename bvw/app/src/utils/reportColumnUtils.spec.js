/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions, quotes, quote-props */

import { expect } from 'chai';

 // mocks
import { getMockReportMetadata } from 'Helpers/testHelpers/testMocks.js';

// system under test
import {
  getSelectedReportColumns,
  getIdColumnKey,
  sortReportColumns,
  getColumnsByType,
} from './reportColumnUtils';

describe('Report Column Utils', function () {
  describe('getSelectedReportColumns', function () {
    it('should columns that are selected in a report columns array', function () {
      const reportMetadata = getMockReportMetadata();

      const selectedColumns = getSelectedReportColumns(reportMetadata.reportColumns);

      expect(selectedColumns).to.have.lengthOf(10);
    });
  });

  describe('getIdColumnKey', function () {
    it('should find the primary identifier column in a report columns array', function () {
      const reportMetadata = getMockReportMetadata();

      const idColumnKey = getIdColumnKey(reportMetadata);

      expect(idColumnKey).to.equal('chargebacks.seq_key');
    });
  });

  describe('sortReportColumns', function () {
    it('should reorder the report columns by their displayOrder property', function () {
      const reportMetadata = getMockReportMetadata();

      const sortedColumns = sortReportColumns(reportMetadata.reportColumns);

      expect(sortedColumns[0].displayOrder).to.equal(1);
    });
  });

  describe('getColumnsByType', function () {
    it('should return an object with arrays for the different column types', function () {
      const reportMetadata = getMockReportMetadata();

      const columnsByType = getColumnsByType(reportMetadata.reportColumns);

      expect(Object.keys(columnsByType).length).to.equal(2);
      expect(columnsByType.availableColumns).to.be.an('array');
      expect(columnsByType.selectedColumns).to.be.an('array');
    });

    it('should return the correct number of columns for each type', function () {
      const reportMetadata = getMockReportMetadata();

      const columnsByType = getColumnsByType(reportMetadata.reportColumns);

      expect(columnsByType.availableColumns.length).to.equal(45);
      expect(columnsByType.selectedColumns.length).to.equal(10);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions, quotes, quote-props */
