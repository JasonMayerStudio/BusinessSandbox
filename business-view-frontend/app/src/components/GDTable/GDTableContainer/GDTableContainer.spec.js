/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions, comma-dangle */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import {
  getSingleReportv2,
  getSingleReportDatav2,
} from 'Helpers/testHelpers/testReportAPIv2Mocks';

/**
 * Import components to be tested
 */
import GDTableContainer from './GDTableContainer';

/**
 * The actual component unit test
 */
const report = getSingleReportv2();
const data = getSingleReportDatav2().slice(0, 25);

describe('GDTableContainer', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        columns: [],
        data: [],
      };
      wrapper = shallow(
        <GDTableContainer {...props} />
      );
    });

    it('should display a GDTableContainer', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });

  describe('props tests', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        columns: report.dataColumns,
        data,
        extraClass: 'emoji',
      };

      wrapper = mount(
        <GDTableContainer {...props} />
      );
    });

    it.skip('should have any additional class passed in', function () {
      expect(wrapper.hasClass(props.extraClass)).to.be.true;
    });

    it.skip('should contain the merchant number in the first row', function () {
      const firstRow = wrapper.find('tbody .gd-table__container-row');
      const merchantNumber = firstRow.find('.gd-color-coded-cell__content');

      expect(merchantNumber.text()).to.contain(props.data[0]['2']);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions, comma-dangle */
