/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions, comma-dangle */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

/**
 * Import components to be tested
 */
import GDHierarchySelectorActionBar from './GDHierarchySelectorActionBar';

/**
 * The actual component unit test
 */
describe('GDHierarchySelectorActionBar', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;


    beforeEach(function () {
      props = {
        extraClass: '',
      };
      wrapper = shallow(
        <GDHierarchySelectorActionBar {...props}>
          <div className="all-action">
            <button>Add All</button>
          </div>
          <div className="right">
            <button>Show All</button>
            <button>Hide All</button>
          </div>
        </GDHierarchySelectorActionBar>
      );
    });

    it('should display a GDHierarchySelectorActionBar', function () {
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
        <GDHierarchySelectorActionBar {...props}>
          <div className="all-action">
            <button>Add All</button>
          </div>
          <div className="right">
            <button>Show All</button>
            <button>Hide All</button>
          </div>
        </GDHierarchySelectorActionBar>
      );
    });

    it('should have any additional class passed in', function () {
      expect(wrapper.hasClass(props.extraClass)).to.be.true;
    });

    it('should contain the children passed in', function () {
      const hierarchySelectorChildren = wrapper.children();

      expect(hierarchySelectorChildren).to.have.lengthOf(2);
      expect(hierarchySelectorChildren.first().text()).to.contain('Add All');
      expect(hierarchySelectorChildren.last().text()).to.contain('Show All');
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions, comma-dangle */
