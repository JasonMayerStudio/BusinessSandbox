/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

/**
 * Import components to be tested
 */
import FileExport from './FileExport';

const exportList = [
  {
    value: 'visible-columns',
    text: 'Visible Columns',
  },
  {
    value: 'all-columns',
    text: 'All Columns',
  },
];

const fileList = [
  {
    value: 'csv',
    text: 'CSV',
  },
  {
    value: 'pdf',
    text: 'PDF',
  },
];

/**
 * The actual component unit test
 */
describe('FileExport', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;
    beforeEach(function () {
      props = {
        cancelAction: () => {},
        fileTypes: fileList,
        exportTypes: exportList,
        exportAction: () => {},
        selectedExportType: null,
      };
      wrapper = shallow(<FileExport {...props} />);
    });

    it('should display a FileExport', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });

  describe('props tests', function () {
    let props;
    let handler;
    let wrapper;

    beforeEach(function () {
      handler = sinon.spy();

      props = {
        cancelAction: () => {},
        fileTypes: fileList,
        exportTypes: exportList,
        exportAction: handler,
        selectedExportType: null,
      };

      wrapper = mount(<FileExport {...props} />);
    });

    it('should have 2 exportable dataset types', function () {
      const fileTypesTarget = wrapper.find('.export-types');
      const rowItems = fileTypesTarget.find('.file-export-row-item');
      expect(rowItems).to.have.lengthOf(2);
    });

    it.skip('should do something when a file type button is clicked', function () {
      const exportButtonTarget = wrapper.find('.final-export-button');

      exportButtonTarget.simulate('click');

      expect(handler.calledOnce).to.be.true;
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
