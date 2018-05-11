/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

/**
 * Import components to be tested
 */
import LockIcon from 'Components/icons/LockIcon';
import PopupMenu from './PopupMenu';

/**
 * The actual component unit test
 */
describe('PopupMenu', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        position: '',
        lock: false,
        icon: null,
        popupContent: [],
        trailingText: '',
      };
      wrapper = shallow(<PopupMenu {...props} />);
    });

    it('should display a PopupMenu', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });

  describe('props tests', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        position: 'bottom',
        lock: true,
        icon: <LockIcon />,
        popupContent: [
          {
            id: 0,
            name: 'Create Merchant Users',
          },
          {
            id: 1,
            name: 'Manage Data Access',
          },
        ],
        trailingText: 'Permissions',
      };

      wrapper = mount(<PopupMenu {...props} />);
    });

    it('should be positioned at the bottom', function () {
      expect(wrapper.prop('position')).to.equal(wrapper.prop('position'));
    });

    it('should expect an icon', function () {
      expect(wrapper.prop('lock')).to.be.true;
      expect(wrapper.find(LockIcon));
    });

    it('should have trailing text describing the menu', function () {
      expect(wrapper.prop('trailingText')).to.equal(wrapper.prop('trailingText'));
    });

    it('should show a contextual menu on hover', function () {
      wrapper.setState({ isHovered: true });
      expect(wrapper.find('.popup-menu')).to.have.length(1);
    });

    it('should hide contextual menu when hovered off', function () {
      wrapper.setState({ isHovered: false });
      expect(wrapper.find('.popup-menu')).to.have.length(0);
    });

    it('should show a contextual menu on hover and map out content into list items', function () {
      const popupContent = wrapper.prop('popupContent');
      wrapper.setState({ isHovered: true });
      expect(wrapper.find('li')).to.have.length(popupContent.length);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
