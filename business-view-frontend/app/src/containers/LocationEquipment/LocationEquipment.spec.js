/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

/**
 * Import components to be tested
 */
import { LocationEquipment } from './LocationEquipment';

describe('LocationEquipment', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        reportId: 6,
        report: {
          name: 'Equipment',
        },
        isFetching: false,
        reportActions: {},
        history: {},
      };
      wrapper = shallow(<LocationEquipment {...props} />);
    });

    it('should display a LocationEquipment container', function () {
      expect(wrapper).to.have.length(1);
    });
  });

  describe('props tests', function () {
    let props;
    let wrapper;
    let mockGetEquipmentReport;

    beforeEach(function () {
      mockGetEquipmentReport = sinon.spy();

      props = {
        reportId: 6,
        report: {
          name: 'Equipment',
          id: 6,
        },
        isFetching: false,
        reportActions: {
          getEquipmentReport: mockGetEquipmentReport,
        },
        history: {},
      };

      wrapper = mount(<LocationEquipment {...props} />);
    });

    it('should dispatch an action to get equipment report data', function () {
      expect(mockGetEquipmentReport.called).to.be.true;
    });

    it('should have a container for a report table', function () {
      const container = wrapper.find('.report-table');
      expect(container).to.have.length(1);
    });
  });
});
/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
