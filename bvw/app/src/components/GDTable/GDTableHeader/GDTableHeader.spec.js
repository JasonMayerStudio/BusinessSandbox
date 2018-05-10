/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions, comma-dangle */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

/**
 * Import components to be tested
 */
import GDTableHeader from './GDTableHeader';

/**
 * The actual component unit test
 */
describe('GDTableHeader', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;


    beforeEach(function () {
      props = {
        title: 'Chargebacks',
        totalRecords: 96,
        recordsCountText: {},
        currentPage: 1,
        recordsShown: 25,
      };
      wrapper = shallow(
        <GDTableHeader {...props} />
      );
    });

    it('should display a GDTableHeader', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });

  describe('props tests', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        extraClass: 'emoji',
        title: 'Chargebacks',
        totalRecords: 96,
        recordsCountText: {
          showingRecords: 'Showing records',
          preposition: 'of',
        },
        currentPage: 1,
        recordsShown: 25,
      };

      wrapper = mount(
        <GDTableHeader {...props} />
      );
    });

    it('should have any additional class passed in', function () {
      expect(wrapper.hasClass(props.extraClass)).to.be.true;
    });

    it('should render the title in an h2 element', function () {
      const headerElement = wrapper.find('h2');

      expect(headerElement.text()).to.contain(props.title);
    });

    it('should render a GDTableRecordsCount', function () {
      const recordsCount = wrapper.find('GDTableRecordsCount');

      expect(recordsCount).to.have.lengthOf(1);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions, comma-dangle */
