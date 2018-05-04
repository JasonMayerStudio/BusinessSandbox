/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import PlusIcon from 'Components/icons/PlusIcon';

/**
 * Import component to be tested
 */
import WidgetButton from './WidgetButton';

describe('WidgetButton', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        action: () => {},
      };
      wrapper = shallow(<WidgetButton {...props}><span>Add</span></WidgetButton>);
    });

    it('should display a WidgetButton', function () {
      expect(wrapper).to.have.lengthOf(1);
    });

    it('should have a default class on its wrapper', function () {
      expect(wrapper.hasClass('widget-button')).to.be.true;
    });

    it('should display its children by default', function () {
      expect(wrapper.text()).to.contain('Add');
    });
  });

  describe('props tests', function () {
    let props;
    let actionHandler;
    let wrapper;

    beforeEach(function () {
      actionHandler = sinon.spy();

      props = {
        action: actionHandler,
        iconType: 'plus',
        name: 'Transaction Date',
        extraClass: 'add-filter-button',
      };

      wrapper = mount(<WidgetButton {...props}><span>Settings</span></WidgetButton>);
    });

    it('should include the specified icon', function () {
      const plusIcon = wrapper.find(PlusIcon);

      expect(plusIcon).to.be.ok;
    });

    it('should call its action handler when it is clicked', function () {
      wrapper.simulate('click');

      expect(actionHandler.calledOnce).to.be.true;
    });

    it('should include any extra class passed in', function () {
      expect(wrapper.hasClass(props.extraClass)).to.be.true;
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
