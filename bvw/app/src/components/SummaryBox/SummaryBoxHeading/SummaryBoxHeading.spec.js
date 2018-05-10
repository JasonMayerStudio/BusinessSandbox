/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions, comma-dangle */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import ReportsIcon from 'Components/icons/ReportsIcon';

/**
 * Import components to be tested
 */
import SummaryBoxHeading from './SummaryBoxHeading';

/**
 * The actual component unit test
 */
describe('SummaryBoxHeading', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;


    beforeEach(function () {
      props = {
        title: 'Active Columns',
      };
      wrapper = shallow(
        <SummaryBoxHeading {...props} />
      );
    });

    it('should display a SummaryBoxHeading', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });

  describe('props tests', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        extraClass: 'emoji',
        icon: ReportsIcon,
        title: 'Active Columns',
      };

      wrapper = mount(
        <SummaryBoxHeading {...props}>
          <span>Extra info</span>
        </SummaryBoxHeading>
      );
    });

    it('should have any additional class passed in', function () {
      expect(wrapper.hasClass(props.extraClass)).to.be.true;
    });

    it('should contain three children', function () {
      const summaryboxChildren = wrapper.children();

      expect(summaryboxChildren).to.have.lengthOf(3);
    });

    it('should render the title in an h2 element', function () {
      const headerElement = wrapper.find('h2');

      expect(headerElement.text()).to.contain(props.title);
    });

    it('should render the icon prop', function () {
      const iconElement = wrapper.find('svg');

      expect(iconElement).to.have.lengthOf(1);
    });

    it('should render its optional children', function () {
      const summaryboxChildren = wrapper.children();

      expect(summaryboxChildren.last().text()).to.contain('Extra info');
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions, comma-dangle */
