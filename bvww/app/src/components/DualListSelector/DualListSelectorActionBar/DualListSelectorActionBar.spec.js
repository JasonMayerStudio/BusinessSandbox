/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions, comma-dangle */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

/**
 * Import components to be tested
 */
import DualListSelectorActionBar from './DualListSelectorActionBar';

/**
 * The actual component unit test
 */
describe('DualListSelectorActionBar', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;


    beforeEach(function () {
      props = {
        extraClass: '',
      };
      wrapper = shallow(
        <DualListSelectorActionBar {...props}>
          <div className="all-action">
            <button>Add All</button>
          </div>
          <div className="right">
            <button>Show All</button>
            <button>Hide All</button>
          </div>
        </DualListSelectorActionBar>
      );
    });

    it('should display a DualListSelectorActionBar', function () {
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
        <DualListSelectorActionBar {...props}>
          <div className="all-action">
            <button>Add All</button>
          </div>
          <div className="right">
            <button>Show All</button>
            <button>Hide All</button>
          </div>
        </DualListSelectorActionBar>
      );
    });

    it('should have any additional class passed in', function () {
      expect(wrapper.hasClass(props.extraClass)).to.be.true;
    });

    it('should contain the children passed in', function () {
      const dualListSelectorChildren = wrapper.children();

      expect(dualListSelectorChildren).to.have.lengthOf(2);
      expect(dualListSelectorChildren.first().text()).to.contain('Add All');
      expect(dualListSelectorChildren.last().text()).to.contain('Show All');
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions, comma-dangle */
