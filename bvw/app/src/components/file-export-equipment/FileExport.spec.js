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

const exportFormatList = [
  {
    value: 'pdf',
    text: 'PDF',
    //text: counterpart('globalTranslate.common.visibleColumns'),
  },
  {
    value: 'csv',
    text: 'CSV',
    //text: counterpart('globalTranslate.common.visibleColumns'),
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
        exportTypes: exportList,
        exportFormat: exportFormatList,
        exportAction: () => {},
        selectedExportType: null,
        selectedFileType: null,
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
        exportTypes: exportList,
        exportFormat: exportFormatList,
        exportAction: () => {},
        selectedExportType: null,
        selectExport: handler,
        selectFileType: () => {},
      };

      wrapper = mount(<FileExport {...props} />);
    });

    it('should have 4 exportable dataset types', function () {
      const fileTypesTarget = wrapper.find('.export-types');
      const rowItems = fileTypesTarget.find('.file-export-row-item');
      expect(rowItems).to.have.lengthOf(4);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
