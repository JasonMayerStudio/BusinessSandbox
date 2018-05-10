/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import CloseIcon from 'Components/icons/CloseIcon';
import PlusIcon from 'Components/icons/PlusIcon';
import InformationBubble from 'Components/information-bubble/InformationBubble.js';

/**
 * Import components to be tested
 */
import ColumnWidget from './ColumnWidget';

/**
 * The actual component unit test
 */
describe('ColumnWidget', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    const extraActions = [
      {
        callback: () => {},
        icon: PlusIcon,
      },
    ];

    beforeEach(function () {
      props = {
        actions: extraActions,
        desc: 'This shows the total batch amount in the selected currency',
        identifier: 17,
        isSelected: false,
        isHidden: false,
        name: 'Batch Amount',
        toggleVisibility: () => {},
      };
      wrapper = shallow(<ColumnWidget {...props} />);
    });

    it('should display a ColumnWidget', function () {
      expect(wrapper).to.have.lengthOf(1);
    });

    it('should NOT add any extra class to the widget if none is given', function () {
      const wrapperHtml = wrapper.html();

      expect(wrapperHtml.includes('class="column-widget')).to.be.true;
    });
  });

  describe('props tests for not selected', function () {
    let props;
    let wrapper;

    let addColumnHandler;

    beforeEach(function () {
      addColumnHandler = sinon.spy();

      const extraActions = [
        {
          callback: addColumnHandler,
          icon: PlusIcon,
        },
      ];

      props = {
        actions: extraActions,
        desc: 'This shows the total batch amount in the selected currency',
        extraClass: 'gandalf',
        identifier: 'frodo',
        isSelected: false,
        isHidden: false,
        name: 'Batch Amount',
        toggleVisibility: () => {},
      };

      wrapper = mount(<ColumnWidget {...props} />);
    });

    it('should add the given extra class to the widget', function () {
      expect(wrapper.hasClass(props.extraClass)).to.be.true;
    });

    it('should display its name with the appropriate class', function () {
      const columnName = wrapper.find('.column-widget__name');

      expect(columnName.text()).to.equal(props.name);
    });

    it('should display an InformationBubble when given a description', function () {
      expect(wrapper.find(InformationBubble)).to.have.lengthOf(1);
    });

    it('should NOT display a Show/Hide button when it is not selected', function () {
      const showHideButton = wrapper.findWhere((element) => {
        return element.hasClass('visibility') || element.hasClass('visibility--hidden');
      });

      expect(showHideButton).to.have.lengthOf(0);
    });

    it('should display a button for the action that was passed in', function () {
      const actionButton = wrapper.find('.column-widget__action-button');

      expect(actionButton).to.have.lengthOf(1);
    });

    it('should call its button handler', function () {
      const addButton = wrapper.find('.column-widget__action-button');

      addButton.simulate('click');

      expect(addColumnHandler.calledOnce).to.be.true;
      expect(addColumnHandler.args[0][0]).to.equal(props.identifier);
    });
  });

  describe('props tests for selected', function () {
    let props;
    let wrapper;

    let removeColumnHandler;
    let toggleVisibilityHandler;

    beforeEach(function () {
      removeColumnHandler = sinon.spy();
      toggleVisibilityHandler = sinon.spy();

      const extraActions = [
        {
          callback: removeColumnHandler,
          icon: CloseIcon,
        },
      ];

      props = {
        actions: extraActions,
        desc: 'This shows the total batch amount in the selected currency',
        extraClass: '',
        identifier: 'samwise',
        isSelected: true,
        isHidden: false,
        name: 'Batch Amount',
        toggleVisibility: toggleVisibilityHandler,
      };

      wrapper = mount(<ColumnWidget {...props} />);
    });

    it('should display its name with the appropriate class', function () {
      const columnName = wrapper.find('.column-widget__name');

      expect(columnName.text()).to.equal(props.name);
    });

    it('should display an InformationBubble when given a description', function () {
      expect(wrapper.find(InformationBubble)).to.have.lengthOf(1);
    });

    it('should display a button for the action that was passed in', function () {
      const actionButton = wrapper.find('.column-widget__action-button');

      expect(actionButton).to.have.lengthOf(1);
    });

    it('should call its button handler', function () {
      const addButton = wrapper.find('.column-widget__action-button');

      addButton.simulate('click');

      expect(removeColumnHandler.calledOnce).to.be.true;
      expect(removeColumnHandler.args[0][0]).to.equal(props.identifier);
    });

    it('should call its toggleVisibility handler', function () {
      const addButton = wrapper.find('.visibility');

      addButton.simulate('click');

      expect(toggleVisibilityHandler.calledOnce).to.be.true;
      expect(toggleVisibilityHandler.args[0][0]).to.equal(props.identifier);
    });
  });

  describe('props tests for read-only', function () {
    let props;
    let wrapper;

    let toggleVisibilityHandler;

    beforeEach(function () {
      toggleVisibilityHandler = sinon.spy();

      props = {
        desc: 'This shows the total batch amount in the selected currency',
        identifier: 'samwise',
        isSelected: true,
        isHidden: false,
        name: 'Batch Amount',
        readOnly: true,
        toggleVisibility: toggleVisibilityHandler,
      };

      wrapper = mount(<ColumnWidget {...props} />);
    });

    it('should add the read-only extra class to the widget', function () {
      expect(wrapper.hasClass('read-only')).to.be.true;
    });
  });

  describe('props tests for children', function () {
    let props;
    let wrapper;

    let toggleVisibilityHandler;

    beforeEach(function () {
      toggleVisibilityHandler = sinon.spy();

      props = {
        desc: 'This shows the total batch amount in the selected currency',
        identifier: 'samwise',
        isSelected: true,
        isHidden: false,
        name: 'Batch Amount',
        readOnly: true,
        toggleVisibility: toggleVisibilityHandler,
      };

      wrapper = mount(<ColumnWidget {...props}><span>Last 7 Days</span></ColumnWidget>);
    });

    it('should add its children after its name', function () {
      const childSpot = wrapper.find('.column-widget__identity').childAt(0).childAt(1);

      expect(childSpot.text()).to.contain('Last 7 Days');
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
