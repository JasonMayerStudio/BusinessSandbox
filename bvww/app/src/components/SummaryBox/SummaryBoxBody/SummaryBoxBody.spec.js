/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions, comma-dangle */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

/**
 * Import components to be tested
 */
import SummaryBoxBody from './SummaryBoxBody';

/**
 * The actual component unit test
 */
describe('SummaryBoxBody', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
      };
      wrapper = shallow(
        <SummaryBoxBody {...props}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </SummaryBoxBody>
      );
    });

    it('should display a SummaryBoxBody', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });

  describe('props tests', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        extraClass: 'dilly-dilly',
      };

      wrapper = mount(
        <SummaryBoxBody {...props}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </SummaryBoxBody>
      );
    });

    it('should have any additional class passed in', function () {
      expect(wrapper.hasClass(props.extraClass)).to.be.true;
    });

    it('should contain three children', function () {
      const summaryBodyChildren = wrapper.children();

      expect(summaryBodyChildren).to.have.lengthOf(3);
      expect(wrapper.text()).to.contain('123');
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions, comma-dangle */
