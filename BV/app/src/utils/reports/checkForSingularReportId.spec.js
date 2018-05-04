/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import { expect } from 'chai';

// mocks
import { getMockUser } from 'Helpers/testHelpers/testUserMocks';

// system under test
import { checkForSingularReportId } from './checkForSingularReportId';

describe('Reports checkForSingularReportId Utils', function () {
  describe('checkForSingularReportId', function () {
    it('should return true if report id is in given list of report ids', function () {
      const mockGlobablUser = getMockUser('GLOBAL_PAYMENTS_EMPLOYEE');
      const reportIdToCheck = 6;

      const hasSingularReportId = checkForSingularReportId(mockGlobablUser.hierarchyReports, reportIdToCheck);
      expect(hasSingularReportId).to.be.true;
    });

    it('should return false if report id is not in given list of report ids', function () {
      const mockGlobablUser = getMockUser('GLOBAL_PAYMENTS_EMPLOYEE');
      const reportIdToCheck = 7;

      const hasSingularReportId = checkForSingularReportId(mockGlobablUser.hierarchyReports, reportIdToCheck);

      expect(hasSingularReportId).to.be.false;
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
