/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */
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
import TableStatements from './TableStatements.js';

const report = getSingleReportv2();
const data = getSingleReportDatav2().slice(0, 25);

/**
 * The actual component unit test
 */
describe('TableStatements', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
      };
      wrapper = shallow(<TableStatements {...props} />);
    });

    it('should display a TableStatements', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });

  describe('props tests', function () {
    let props;
    beforeEach(function () {
      props = {
        columns: report.dataColumns,
        data,
        extraClass: 'emoji',
      };
      mount(<TableStatements {...props} />);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
