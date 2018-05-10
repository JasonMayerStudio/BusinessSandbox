/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

/**
 * Import components to be tested
 */
import Tabs from './Tabs';

/**
 * The actual component unit test
 */
describe('Tabs', function () {
  let props;
  let wrapper;

  describe('smoke test', function () {
    it('should display a set of Tabs', function () {
      props = {
        selectedTab: 0,
        extraClass: '',
      };
      wrapper = shallow(<Tabs {...props}><div>Tab 1</div><div>Tab 2</div></Tabs>);

      expect(wrapper).to.have.length(1);
    });
  });

  describe('props tests', function () {
    it('should display the selected child of Tabs component', function () {
      props = {
        selectedTab: 1,
        extraClass: '',
      };
      wrapper = shallow(<Tabs {...props}><div>Tab 1</div><div>Tab 2</div></Tabs>);

      const child = wrapper.first();

      expect(child.text()).to.equal('Tab 2');
    });

    it('should display the first child if the selected one is less than 0', function () {
      props = {
        selectedTab: -1,
        extraClass: '',
      };
      wrapper = shallow(<Tabs {...props}><div>Tab 1</div><div>Tab 2</div></Tabs>);

      const child = wrapper.first();

      expect(child.text()).to.equal('Tab 1');
    });

    it('should display the last child if the selected one is less than 0', function () {
      props = {
        selectedTab: 3,
        extraClass: '',
      };
      wrapper = shallow(<Tabs {...props}><div>Tab 1</div><div>Tab 2</div></Tabs>);

      const child = wrapper.first();

      expect(child.text()).to.equal('Tab 2');
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
