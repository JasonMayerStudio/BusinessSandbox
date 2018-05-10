/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import GDTable from 'Components/GDTable';

import LocationManagement from './';

describe('LocationManagement', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        reportId: 21,
        report: {
          id: 21,
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
      };
      wrapper = shallow(<LocationManagement {...props} />);
    });

    it('should display a Single Location Management container', function () {
      expect(wrapper).to.have.length(1);
    });
  });

  describe('props test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        reportId: 45,
        report: {
          id: 45,
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
      };
      wrapper = shallow(<LocationManagement {...props} />);
    });


    it('should show a plain table when nothing is selected in the global selector', function () {
      const simpleTable = wrapper.find(GDTable);
      expect(simpleTable).to.have.lengthOf(0);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
