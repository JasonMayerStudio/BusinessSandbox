/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions, quotes, quote-props */

import { expect } from 'chai';

 // mocks
import { getSingleReportv2 } from 'Helpers/testHelpers/testReportAPIv2Mocks.js';

// system under test
import {
  divideReportActionTypes,
} from './reportActionUtils';

describe('Report Action Utils', function () {
  describe('getSelectedReportColumns', function () {
    it('should return an object with 2 empty arrays if property does not exist', function () {
      const reportDefinition = getSingleReportv2();
      delete reportDefinition.actions;

      const { reportActions, reportRowActions } = divideReportActionTypes(reportDefinition.actions);

      expect(reportActions).to.eql([]);
      expect(reportRowActions).to.eql([]);
    });

    it('should return an object with 1 array of overall actions, and an empty array', function () {
      const reportDefinition = getSingleReportv2();
      reportDefinition.actions.shift();  // remove the first, ROW, action from the actions array

      const { reportActions, reportRowActions } = divideReportActionTypes(reportDefinition.actions);

      expect(reportActions).to.have.length(1);
      expect(reportRowActions).to.eql([]);
    });

    it('should return an object with 1 array of row actions, and an empty array', function () {
      const reportDefinition = getSingleReportv2();
      reportDefinition.actions.pop();  // remove the last, REPORT, action from the actions array

      const { reportActions, reportRowActions } = divideReportActionTypes(reportDefinition.actions);

      expect(reportActions).to.eql([]);
      expect(reportRowActions).to.have.length(1);
    });

    it('should return an object with 1 array of row actions, AND 1 array of report actions', function () {
      const reportDefinition = getSingleReportv2();

      const { reportActions, reportRowActions } = divideReportActionTypes(reportDefinition.actions);

      expect(reportActions).to.have.length(1);
      expect(reportRowActions).to.have.length(1);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions, quotes, quote-props */
