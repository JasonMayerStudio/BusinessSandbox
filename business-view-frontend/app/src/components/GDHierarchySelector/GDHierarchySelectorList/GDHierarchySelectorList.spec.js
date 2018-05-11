/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions, comma-dangle */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

/**
 * Import components to be tested
 */
import GDHierarchySelectorList from './GDHierarchySelectorList';

/**
 * The actual component unit test
 */
describe('GDHierarchySelectorList', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;


    beforeEach(function () {
      props = {
        extraClass: '',
      };
      wrapper = shallow(
        <GDHierarchySelectorList {...props}>
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
        </GDHierarchySelectorList>
      );
    });

    it('should display a GDHierarchySelectorList', function () {
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
        <GDHierarchySelectorList {...props}>
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
        </GDHierarchySelectorList>
      );
    });

    it('should have any additional class passed in', function () {
      expect(wrapper.hasClass(props.extraClass)).to.be.true;
    });

    it('should contain the children passed in', function () {
      const hierarchySelectorChildren = wrapper.children();

      expect(hierarchySelectorChildren).to.have.lengthOf(4);
      expect(hierarchySelectorChildren.first().text()).to.contain('Transaction Date');
      expect(hierarchySelectorChildren.last().text()).to.contain('Card Number');
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions, comma-dangle */
