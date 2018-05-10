/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import { Route } from 'react-router-dom';

/**
 * Import components to be tested
 */
import Drawer from './';

/**
 * The actual component unit test
 */
describe('Drawer', function () {
  let props;
  let wrapper;

  let isOpen;

  describe('smoke test unopened drawer', function () {
    beforeEach(function () {
      isOpen = false;

      props = {
        isDrawerOpen: isOpen,
      };
      wrapper = shallow(<Drawer {...props} />);
    });

    it('should display a Drawer', function () {
      expect(wrapper).to.have.length(1);
    });

    it('should give the unopened drawer the correct classes', function () {
      expect(wrapper.hasClass('drawer'), 'does have class "drawer"').to.be.true;
      expect(wrapper.hasClass('open'), 'does not have class "open"').not.to.be.true;
    });
  });

  describe('smoke test opened drawer', function () {
    beforeEach(function () {
      isOpen = true;

      props = {
        isDrawerOpen: isOpen,
      };
      wrapper = shallow(<Drawer {...props} />);
    });

    it('should display a Drawer', function () {
      expect(wrapper).to.have.length(1);
    });

    it('should give the opened drawer the correct classes', function () {
      expect(wrapper.hasClass('drawer'), 'does have class "drawer"').to.be.true;
      expect(wrapper.hasClass('open'), 'also has class "open"').to.be.true;
    });
  });

  describe('drawer contents', function () {
    beforeEach(function () {
      isOpen = true;

      props = {
        isDrawerOpen: isOpen,
      };
      wrapper = shallow(<Drawer {...props} />);
    });

    it('should contain multiple Routes', function () {
      const children = wrapper.children(Route);

      expect(children).to.have.length.above(1);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
