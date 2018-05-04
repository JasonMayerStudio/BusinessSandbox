/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

/**
 * Import components to be tested
 */
import ColumnManager from './ColumnManager';
import columns from './data/columns';


function mapUserColumns() {
  const selectedColumns = [];
  columns.map((column) => {
    if (column.selected) {
      selectedColumns.push(column);
    }
    return false;
  });

  return selectedColumns;
}

/**
 * The actual component unit test
 */
describe('ColumnManager', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        availableColumns: columns,
        selectedColumns: mapUserColumns(),
        onChange: () => {},
        toggleModal: () => {},
        isOpen: false,
        filterText: '',
        filterRows: () => {},
        placeholder: '',
        saveManagement: () => {},
        cancelManagement: () => {},
        addToSelectedColumns: () => {},
        removeSelectedColumn: () => {},
      };
      wrapper = shallow(<ColumnManager {...props} />);
    });

    it('should display a ColumnManager', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });

  describe('props tests', function () {
    let props;
    let toggleModalHandler;
    let changeHandler;
    let filterHandler;
    let wrapper;
    let saveHandler;
    let cancelHandler;
    let addHandler;
    let removeHandler;

    beforeEach(function () {
      toggleModalHandler = sinon.spy();
      changeHandler = sinon.spy();
      filterHandler = sinon.spy();
      saveHandler = sinon.spy();
      cancelHandler = sinon.spy();
      addHandler = sinon.spy();
      removeHandler = sinon.spy();

      props = {
        availableColumns: columns,
        selectedColumns: mapUserColumns(),
        onChange: changeHandler,
        toggleModal: toggleModalHandler,
        isOpen: true,
        filterText: '',
        filterRows: filterHandler,
        filteredRows: [],
        placeholder: '',
        saveManagement: saveHandler,
        cancelManagement: cancelHandler,
        addToSelectedColumns: addHandler,
        removeSelectedColumn: removeHandler,
      };

      wrapper = mount(<ColumnManager {...props} />);
    });

    it('should have less selected columns than are available', function () {
      const availableColumns = wrapper.props().availableColumns;
      const selectedColumns = wrapper.props().selectedColumns;

      expect(selectedColumns.length).to.be.below(availableColumns.length);
    });

    it('should have a class of column manager when modal is opened', function () {
      const modalTarget = wrapper.find('.column-manager-prompt');
      const containerTarget = wrapper.find('.column-manager');
      modalTarget.simulate('click');
      expect(toggleModalHandler.calledOnce).to.be.true;
      expect(containerTarget).to.be.have.lengthOf(1);
    });

    it('should disable the save button if there are no selected columns', () => {
      const buttonTarget = wrapper.find('.button-small').at(1);
      wrapper.setProps({ selectedColumns: [] });
      const buttonProp = buttonTarget.prop('disabled');
      expect(buttonProp).to.be.true;
    });

    it('should expect change upon entering a value in the search field', function () {
      wrapper.setProps({ filterText: 'case' });
      const searchTarget = wrapper.find('.search-field .hidden-s');
      searchTarget.simulate('change');
      expect(changeHandler.calledOnce).to.be.true;
      expect(wrapper.props().filterText).to.not.be.empty;
    });

    it('should filter rows down with a query keyword', function () {
      const searchTarget = wrapper.find('.search-field .hidden-s');
      const filteredRows = {
        columnId: 5,
        displayOrder: 5,
        filterable: true,
        filter: {},
        jsonKey: 'chargebacks.case_received_datetime_date',
        label: 'Case Receipt Date',
        primaryFilter: false,
        reportId: 1,
        selected: false,
      };
      searchTarget.simulate('change');
      wrapper.setProps({
        filterText: 'receipt',
        filteredRows,
      });
      expect(filterHandler.calledOnce).to.be.true;
      expect(wrapper.props().filteredRows).to.not.be.empty;
    });

    it('should save on click', function () {
      const buttonTarget = wrapper.find('.button-small').at(1);
      buttonTarget.simulate('click');
      expect(saveHandler.calledOnce).to.be.true;
    });

    it('should cancel on click', function () {
      const buttonTarget = wrapper.find('.button-link');
      buttonTarget.simulate('click');
      expect(cancelHandler.calledOnce).to.be.true;
    });

    it('should add to selected columns on click', function () {
      const lineItemTarget = wrapper.find('.column-line-item').first();
      lineItemTarget.simulate('click');
      expect(removeHandler.calledOnce).to.be.false;
      expect(addHandler.calledOnce).to.be.true;
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
