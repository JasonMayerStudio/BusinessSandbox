/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import ColumnWidget from 'Components/ColumnWidget';
import PlusIcon from 'Components/icons/PlusIcon';

/**
 * Import component to be tested
 */
import FilterDefinition from './FilterDefinition';

describe('FilterDefinition', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        column: {
          filter: {
            default: '',
          },
          identifer: 'dasher',
          name: 'Transaction Date',
        },
      };
      wrapper = shallow(<FilterDefinition {...props}><div>Some child</div></FilterDefinition>);
    });

    it('should display a FilterDefinition', function () {
      expect(wrapper).to.have.lengthOf(1);
    });

    it('should have a default class on its wrapper', function () {
      expect(wrapper.hasClass('filter-definition')).to.be.true;
    });

    it('should NOT display its children by default', function () {
      expect(wrapper.text()).not.to.contain('Some child');
    });
  });

  describe('isOpen prop is true', function () {
    let props;
    let removeHandler;
    let toggleHandler;
    let wrapper;

    beforeEach(function () {
      removeHandler = sinon.spy();
      toggleHandler = sinon.spy();

      props = {
        column: {
          filter: {
            default: '',
          },
          identifier: 'dancer',
          name: 'Transaction Date',
        },
        extraClass: 'primary-filter',
        isOpen: true,
        removeHandler,
        toggleHandler,
      };

      wrapper = shallow(<FilterDefinition {...props}><div>Some child</div></FilterDefinition>);
    });

    it('should display its children when open', function () {
      expect(wrapper.text()).to.contain('Some child');
    });
  });

  describe('props tests', function () {
    let props;
    let removeHandler;
    let saveHandler;
    let toggleHandler;
    let wrapper;

    beforeEach(function () {
      removeHandler = sinon.spy();
      saveHandler = sinon.spy();
      toggleHandler = sinon.spy();

      props = {
        column: {
          filter: {
            default: '',
          },
          identifier: 'dancer',
          name: 'Transaction Date',
        },
        extraClass: 'primary-filter',
        isOpen: true,
        removeHandler,
        saveHandler,
        toggleHandler,
      };

      wrapper = mount(<FilterDefinition {...props}><span>Settings</span></FilterDefinition>);
    });

    it('should default its addHandler property to null', function () {
      const addHandler = wrapper.prop('addHandler');

      expect(addHandler).to.be.null;
    });

    it('should include a ColumnWidget', function () {
      const columnWidget = wrapper.find(ColumnWidget);

      expect(columnWidget).to.have.lengthOf(1);
    });

    it('should call its remove handler when its first action button is clicked', function () {
      const firstActionButton = wrapper.find('.column-widget__actions').childAt(0);

      firstActionButton.simulate('click');

      expect(removeHandler.calledOnce).to.be.true;
    });

    it('should call its toggle handler when its last action button is clicked', function () {
      const lastActionButton = wrapper.find('.column-widget__actions').childAt(1);

      lastActionButton.simulate('click');

      expect(toggleHandler.calledOnce).to.be.true;
    });

    it('should call its toggle handler when open and its cancel action button is clicked', function () {
      const cancelButton = wrapper.find('.filter-definition__cancel');

      cancelButton.simulate('click');

      expect(toggleHandler.calledOnce).to.be.true;
    });

    it('should call its toggle handler when open and its cancel action button is clicked', function () {
      const saveButton = wrapper.find('.filter-definition__save');

      saveButton.simulate('click');

      expect(saveHandler.calledOnce).to.be.true;
    });
  });

  describe('addHandler tests', function () {
    let props;
    let addHandler;
    let wrapper;

    beforeEach(function () {
      addHandler = sinon.spy();

      props = {
        column: {
          filter: {
            default: '',
          },
          identifier: 'dancer',
          name: 'Transaction Date',
        },
        extraClass: 'primary-filter',
        addHandler,
      };

      wrapper = mount(<FilterDefinition {...props}><span>Settings</span></FilterDefinition>);
    });

    it('should show a Plus icon when its addHandler property to set', function () {
      const plusIcon = wrapper.find(PlusIcon);

      expect(plusIcon).to.be.ok;
    });

    it('should call its Add handler when its only action button is clicked', function () {
      const actionButton = wrapper.find('.column-widget__actions').childAt(0);

      actionButton.simulate('click');

      expect(addHandler.calledOnce).to.be.true;
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
