/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import { MemoryRouter } from 'react-router-dom';

import { getSingleReportv2 } from 'Helpers/testHelpers/testReportAPIv2Mocks';

import GDTable from 'Components/GDTable';

/**
 * Import components to be tested
 */
import GDReportRunner from './GDReportRunner';

/**
 * The actual component unit test
 */
describe('GDReportRunner', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        data: [],
        extraClass: '',
        getNewData: () => {},
        report: {
          actions: [],
          dataColumns: [],
        },
        reportsLink: '',
        summaryData: [],
        translations: {
          columns: 'Columns',
        },
        visualizations: [],
        totalRecords: 0,
      };
      wrapper = shallow(<GDReportRunner {...props} />);
    });

    it('should display a GDReportRunner', function () {
      expect(wrapper).to.have.lengthOf(1);
    });

    it('should have a standard style class', function () {
      expect(wrapper.hasClass('gd-report-runner')).to.be.true;
    });

    it('should contain a report runner top header', function () {
      const reportRunnerTopHeader = wrapper.find('.gd-report-runner__top-header');

      expect(reportRunnerTopHeader).to.have.lengthOf(1);
    });

    it('should contain a report runner actions section', function () {
      const reportRunnerActions = wrapper.find('.gd-report-runner__actions');

      expect(reportRunnerActions).to.have.lengthOf(2);
    });

    it('should not start out with a report runner dataviz section', function () {
      const reportRunnerDatavizSection = wrapper.find('.gd-report-runner__dataviz');

      expect(reportRunnerDatavizSection).to.have.lengthOf(0);
    });

    it('should contain a GDTable', function () {
      const gdTable = wrapper.find(GDTable);

      expect(gdTable).to.have.lengthOf(1);
    });
  });

  describe('props tests', function () {
    let props;
    let wrapper;
    let report;

    beforeEach(function () {
      report = getSingleReportv2();

      props = {
        data: [],
        extraClass: '',
        getNewData: () => {},
        report,
        reportsLink: '/reports',
        summaryData: [],
        translations: {
          columns: 'Columns',
        },
        visualizations: [],
        totalRecords: 0,
      };

      wrapper = mount(<MemoryRouter>
        <GDReportRunner {...props} />
      </MemoryRouter>);
    });

    it('should contain one report group name', function () {
      const reportGroupName = wrapper.find('.gd-report-runner__group-name');  // @todo, change __foo-name

      expect(reportGroupName.text()).to.contain(props.report.reportBaseName);  // @todo, change fooGroupName
    });

    it('should pass the report definition down to the GDTable', function () {
      const gdTable = wrapper.find(GDTable);

      expect(gdTable.prop('report')).to.eql(props.report);
    });

    it('should pass the report data down to the GDTable', function () {
      const gdTable = wrapper.find(GDTable);

      expect(gdTable.prop('data')).to.eql(props.data);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
