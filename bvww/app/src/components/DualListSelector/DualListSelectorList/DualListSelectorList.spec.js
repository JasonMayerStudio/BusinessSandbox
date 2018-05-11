/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions, comma-dangle */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

/**
 * Import components to be tested
 */
import DualListSelectorList from './DualListSelectorList';

/**
 * The actual component unit test
 */
describe('DualListSelectorList', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;


    beforeEach(function () {
      props = {
        extraClass: '',
      };
      wrapper = shallow(
        <DualListSelectorList {...props}>
          <div className="column-widget">
            Transaction Date
          </div>
          <div className="column-widget">
            Transaction Amount
          </div>
          <div className="column-widget">
            Card Type
          </div>
          <div className="column-widget">
            Card Number
          </div>
        </DualListSelectorList>
      );
    });

    it('should display a DualListSelectorList', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });

  describe('props tests', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        extraClass: 'emoji',
      };

      wrapper = mount(
        <DualListSelectorList {...props}>
          <div className="column-widget">
            Transaction Date
          </div>
          <div className="column-widget">
            Transaction Amount
          </div>
          <div className="column-widget">
            Card Type
          </div>
          <div className="column-widget">
            Card Number
          </div>
        </DualListSelectorList>
      );
    });

    it('should have any additional class passed in', function () {
      expect(wrapper.hasClass(props.extraClass)).to.be.true;
    });

    it('should contain the children passed in', function () {
      const dualListSelectorChildren = wrapper.children();

      expect(dualListSelectorChildren).to.have.lengthOf(4);
      expect(dualListSelectorChildren.first().text()).to.contain('Transaction Date');
      expect(dualListSelectorChildren.last().text()).to.contain('Card Number');
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions, comma-dangle */
