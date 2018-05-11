/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

/**
 * Import components to be tested
 */
import Badge from './Badge';

/**
 * The actual component unit test
 */
describe('Badge', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        badgeType: '',
      };
      wrapper = shallow(<Badge {...props}>Visa</Badge>);
    });

    it('should display a Badge', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });

  describe('props tests', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        badgeType: 'reports',
      };

      wrapper = mount(<Badge {...props}>Visa</Badge>);
    });

    it('should have a class name based on its badge type', function () {
      const badgeTarget = wrapper.find('.badge');

      expect(badgeTarget.find('.badge-reports')).to.have.lengthOf(1);
    });

    it('should render its children', function () {
      expect(wrapper.text()).to.equal('Visa');
    });
  });

  describe('reversed style', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        badgeType: 'status',
        reversed: true,
      };

      wrapper = mount(<Badge {...props}>Visa</Badge>);
    });

    it('should have a class name for a reversed badge style', function () {
      expect(wrapper.hasClass('badge-reversed')).to.be.true;
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
