/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

/**
 * Import components to be tested
 */
import OutsideClickHandler from './OutsideClickHandler';

/**
 * The actual component unit test
 */
describe('OutsideClickHandler', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        extraClass: '',
      };
      wrapper = shallow(<OutsideClickHandler {...props}><div>Content</div></OutsideClickHandler>);
    });

    it('should display a OutsideClickHandler', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });

  describe('props tests', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        children: 'gumby',
        onClickOutside: () => { },
      };

      wrapper = mount(<OutsideClickHandler {...props}><div>Content</div></OutsideClickHandler>);
    });

    it('should contain the children passed in', function () {
      const outsideClickHandlerChildren = wrapper.children();

      expect(outsideClickHandlerChildren).to.have.lengthOf(1);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
