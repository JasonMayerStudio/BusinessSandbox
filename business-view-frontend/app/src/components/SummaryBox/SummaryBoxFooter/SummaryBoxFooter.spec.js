/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions, comma-dangle */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

/**
 * Import components to be tested
 */
import SummaryBoxFooter from './SummaryBoxFooter';

/**
 * The actual component unit test
 */
describe('SummaryBoxFooter', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;


    beforeEach(function () {
      props = {
      };
      wrapper = shallow(
        <SummaryBoxFooter {...props}>
          <span>Stop</span>
        </SummaryBoxFooter>
      );
    });

    it('should display a SummaryBoxFooter', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });

  describe('props tests', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        extraClass: 'dilly',
      };

      wrapper = mount(
        <SummaryBoxFooter {...props}>
          <span>Go</span>
        </SummaryBoxFooter>
      );
    });

    it('should have any additional class passed in', function () {
      expect(wrapper.hasClass(props.extraClass)).to.be.true;
    });

    it('should contain one child', function () {
      const summaryFooterChildren = wrapper.children();

      expect(summaryFooterChildren).to.have.lengthOf(1);
      expect(summaryFooterChildren.text()).to.contain('Go');
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions, comma-dangle */
