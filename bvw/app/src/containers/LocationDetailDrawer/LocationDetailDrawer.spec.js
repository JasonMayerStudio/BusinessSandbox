/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import LocationDetailDrawer from './';


const mockReport = () => {
  return {
    name: 'Location Summary',
    lookerView: 'location_information',
    lookerModel: 'location_information_np',
    category: 'Locations',
    displayOrder: 0,
    description: 'English extendedDescription of the Locations report',
    id: 21,
    reportColumns: [{
      reportId: 21,
      columnId: 651,
      type: 'string',
      displayOrder: 1,
      jsonKey: 'location_information.merchant_number',
      label: 'Merchant Number',
      categoryName: 'Merchant Information',
      categoryKey: 'locMerInfo',
      categoryDisplayOrder: 2,
      detailsDisplayOrder: 2,
      selected: true,
      filterable: false,
      primaryFilter: false,
      primaryIdentifier: false,
    }, {
      reportId: 21,
      columnId: 652,
      type: 'string',
      displayOrder: 2,
      jsonKey: 'location_information.merchant_name',
      label: 'Merchant Name',
      categoryDisplayOrder: 0,
      detailsDisplayOrder: 2,
      selected: true,
      filterable: false,
      primaryFilter: false,
      primaryIdentifier: false,
    }],
  };
};

describe('LocationDetailDrawer', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        toggleDrawer: () => { },
        useExtendedDrawer: () => { },
        history: {},
        reportId: 21,
        getReportDetails: () => { },
        rowId: 1452556,
        report: mockReport(),
        currentReportDetail: {},
        preferences: { isFetching: true, data: { language: 'en-US' }, error: null },
      };

      wrapper = shallow(<LocationDetailDrawer {...props} />);
    });

    it('should display a Single Location detail drawer container', function () {
      expect(wrapper).to.have.length(1);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
