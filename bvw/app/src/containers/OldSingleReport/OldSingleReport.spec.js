/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import OldSingleReport from './';

describe('OldSingleReport', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        reportId: 3,
        report: {
          id: 3,
          reportColumns: [
            { id: 42 },
          ],
        },
        reportActions: {
          getReportMetadata: () => {},
        },
        reportFilterActions: {
          getReportUserFilters: () => {},
        },
        primaryFilter: {
          id: 42,
          columnId: 333,
        },
        currentFilters: {},
        idColumnKey: 'seq_key',
        preferences: { language: 'en-US' },
        history: {},
        auth: {},
        parsedPermissions: {
          reports: {
            canView: true,
          },
        },
      };
      wrapper = shallow(<OldSingleReport {...props} />);
    });

    it('should display a OldSingleReport container', function () {
      expect(wrapper).to.have.length(1);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
