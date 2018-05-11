/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

/**
 * Import components to be tested
 */
import { Reports } from './EditableInput';

/**
 * The actual component unit test
 */
describe.skip('Reports', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;
    let history;
    let getReportsAction;

    beforeEach(function () {
      history = {};
      getReportsAction = sinon.spy();

      props = {
        reports: {
          data: [
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
          ],
        },
        history,
        getAllReports: getReportsAction,
        parsedPermissions: {
          reports: {
            canView: true,
          },
        },
      };

      wrapper = shallow(<Reports {...props} />);
    });

    it('should display a Reports container', function () {
      expect(wrapper).to.have.lengthOf(1);
    });

    it('should pluck the viewable reports data from its props into its state', function () {
      expect(wrapper.state('reports')).to.have.lengthOf(1);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
