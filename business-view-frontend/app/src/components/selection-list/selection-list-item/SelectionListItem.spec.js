/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

/**
 * Import components to be tested
 */
import SelectionListItem from './SelectionListItem';
import CheckIcon from '../../icons/check-icon/CheckIcon';

/**
 * The actual component unit test
 */
describe('SelectionListItem', function () {
  let props;
  let handler;
  let wrapper;

  describe('smoke test', function () {
    beforeEach(function () {
      props = {
        itemId: 29,
        mainLine: 'Jane Doe',
        handleSelect: () => {},
      };
      wrapper = shallow(<SelectionListItem {...props} />);
    });

    it('should display a SelectionListItem', function () {
      expect(wrapper).to.have.lengthOf(1);
    });

    it('should render the selectable item', function () {
      const leftHandSide = wrapper.children().first();

      expect(leftHandSide.hasClass('selection-list-item-left')).to.be.true;
      expect(leftHandSide.text()).to.equal(props.mainLine);
    });
  });

  describe('props tests', function () {
    beforeEach(function () {
      handler = sinon.spy();

      props = {
        itemId: 39,
        mainLine: 'Jane Doe',
        subLine: 'jdoe@example.com',
        selected: true,
        extraClass: 'pitiful',
        handleSelect: handler,
      };
      wrapper = mount(<SelectionListItem {...props} />);
    });

    it('should add any extra CSS class to its root element', function () {
      expect(wrapper.hasClass(props.extraClass)).to.be.true;
    });

    it('should add the main and sub text to its first(left) section', function () {
      const leftHandSide = wrapper.children().first();
      const leftHandText = props.mainLine + props.subLine;

      expect(leftHandSide.text()).to.equal(leftHandText);
    });

    it('should render a checkmark when the item is in a selected state', function () {
      const rightHandSide = wrapper.children().last();
      const checkIcon = rightHandSide.find(CheckIcon);

      expect(checkIcon).to.have.lengthOf(1);
    });

    it('should call a function to handle selection', function () {
      wrapper.simulate('click');

      expect(handler.calledOnce).to.be.true;
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
