/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import { expect } from 'chai';

// mocks
import { getSingleReportv2 } from 'Helpers/testHelpers/testReportAPIv2Mocks';

// system under test
import { parseDataColumnsSortKey } from './parseDataColumnsSortKey';

describe('Reports parseDataColumnsSortKey Utils', function () {
  describe('parseDataColumnsSortKey', function () {
    it('should return true if parseDataColumnsSortKey finds merchant number column with sort', function () {
      const report = getSingleReportv2();
      const expectedSort = {
        key: 'merchant_number',
        order: 1,
      };

      const sort = parseDataColumnsSortKey(report.dataColumns);
      expect(sort).to.eql(expectedSort);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
