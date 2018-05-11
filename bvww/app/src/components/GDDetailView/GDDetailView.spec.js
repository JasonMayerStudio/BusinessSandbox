/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import {
  getSingleReportv2,
  getDetailViewDatav2,
} from 'Helpers/testHelpers/testReportAPIv2Mocks';

import {
  getDetailViewStructure,
} from './data/detailViewStructure';

/**
 * Import components to be tested
 */
import GDDetailView from './GDDetailView';

const report = getSingleReportv2();
const data = getDetailViewDatav2();

/**
 * The actual component unit test
 */
describe('GDDetailView', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        data: {},
        extraClass: '',
        hierarchyTitle: '',
        hierarchyContent: '',
        subtitleContent: '',
        subtitleTitle: '',
        translations: {
          returnToText: 'Return',
        },
        type: '',
      };
      wrapper = shallow(<GDDetailView {...props} />);
    });

    it('should display a GDDetailView', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });

  describe('props tests', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        data,
        extraClass: 'foo',
        hierarchyTitle: 'Hierarchy',
        hierarchyContent: 'Lorem ipsum dolor',
        structure: getDetailViewStructure(),
        subtitleContent: 'Lorem ipsum dolor',
        subtitleTitle: `${report} Details`,
        translations: {
          corp: 'Corp',
          region: 'Region',
          principal: 'Principal',
          associate: 'Associate',
          chain: 'Chain',
          title: report.name,
          returnToText: 'Return to Users',
          hierarchy: 'Hierarchy',
          subtitle: `${report.name} Details`,
        },
        type: 'report',
      };

      wrapper = mount(<GDDetailView {...props} />);
    });

    it('should have as many detail items as there are bits of data', function () {
      const detailItems = wrapper.find('.gd-detail-view__item');
      expect(detailItems).to.have.lengthOf(detailItems.length);
    });

    it('should have two information bubbles', function () {
      const informationBubbles = wrapper.find('.information-bubble__wrapper');
      expect(informationBubbles).to.have.lengthOf(2);
    });

    it('should have a section of items as it is a report type detail view', function () {
      const section = wrapper.find('.gd-detail-view__section');
      expect(section).to.have.lengthOf(1);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
