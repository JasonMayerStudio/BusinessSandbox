/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import { MemoryRouter } from 'react-router-dom';

/**
 * Import components to be tested
 */
import MessagesIcon from 'Components/icons/MessageIcon';
import NavItem from './NavItem';

/**
 * The actual component unit test
 */
describe('NavItem', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        triggerSubNav: () => {},
        route: '',
        exact: false,
        icon: null,
        navLabel: null,
        hasNotification: false,
        returnNotificationCount: null,
        returnCollapsedNotification: null,
      };
      wrapper = shallow(<NavItem {...props} />);
    });

    it('should display a NavItem', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });

  describe('props tests', function () {
    let props;
    let handler;
    let wrapper;

    beforeEach(function () {
      handler = sinon.spy();

      props = {
        triggerSubNav: handler,
        route: '/messages',
        exact: false,
        icon: <MessagesIcon />,
        navLabel: 'Messages',
        hasNotification: true,
        returnNotificationCount: <span className="message-count">4</span>,
        returnCollapsedNotification: <span className="message-count message-count-collapsed" />,
      };

      wrapper = mount(
        <MemoryRouter>
          <NavItem {...props} />
        </MemoryRouter>);
    });

    it('should have an icon', function () {
      expect(props.icon).to.be.a('object');
    });

    it('should have a label', function () {
      expect(props.navLabel).to.equal('Messages');
    });

    it('should have a route consistent with its label', function () {
      const route = props.route.replace(/\//g, '');
      expect(route).to.equal(props.navLabel.toLowerCase());
    });

    it('should have a message count if the primary nav is not collapsed', function () {
      const messageCount = wrapper.find('.message-count').first();
      expect(messageCount.text()).to.equal('4');
    });

    it('should trigger the sub nav on click', function () {
      const navItem = wrapper.find('span').first();

      navItem.simulate('click');

      expect(handler.calledOnce).to.be.true;

      expect(props.hasNotification).to.be.true;

      expect(props.returnNotificationCount).to.be.a('object');
    });

    it('should return an empty span if the primary nav is collapsed', function () {
      const messageCount = wrapper.find('.message-count-collapsed');

      expect(messageCount.text()).to.equal('');
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
