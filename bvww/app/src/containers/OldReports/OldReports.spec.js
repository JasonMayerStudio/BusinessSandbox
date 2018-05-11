/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

/**
 * Import components to be tested
 */
import { OldReports } from './OldReports';

/**
 * The actual component unit test
 */
describe('OldReports', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;
    let history;
    let getOldReportsAction;

    beforeEach(function () {
      history = {};
      getOldReportsAction = sinon.spy();

      props = {
        reports: {
          data: [
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
          ],
        },
        history,
        getAllOldReports: getOldReportsAction,
        parsedPermissions: {
          reports: {
            canView: true,
          },
        },
      };

      wrapper = shallow(<OldReports {...props} />);
    });

    it('should display a OldReports container', function () {
      expect(wrapper).to.have.lengthOf(1);
    });

    it('should pluck the reports data from its props into its state', function () {
      expect(wrapper.state('reports')).to.have.lengthOf(props.reports.data.length);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
