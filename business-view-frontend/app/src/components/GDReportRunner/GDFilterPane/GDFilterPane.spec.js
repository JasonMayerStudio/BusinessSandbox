/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

/**
 * Import components to be tested
 */
import GDFilterPane from './GDFilterPane';

/**
 * The actual component unit test
 */
describe('GDFilterPane', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        filterList: [
          {
            defaultValue: null,
            description: 'Description Of Merchant Number',
            displayOrder: 21,
            filterValueGroupId: 1,
            isReadOnly: false,
            isVisible: true,
            name: 'Merchant Number',
            reportFilterId: 285,
            filterType: 'STRING',
            filterValues: null,
            isPrimaryDateFilter: null,
          },
        ],
      };
      wrapper = shallow(<GDFilterPane {...props} />);
    });

    it('should display a GDFilterPane', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });

  describe('props tests', function () {
    let props;
    let wrapper;
    let cancelHandler;
    let applyHandler;

    beforeEach(function () {
      cancelHandler = sinon.spy();
      applyHandler = sinon.spy();

      props = {
        applyFilters: applyHandler,
        closeFilterPane: cancelHandler,
        extraClass: 'extraClass',
        filterList: [
          {
            defaultValue: null,
            description: 'Description Of Merchant Number',
            displayOrder: 21,
            filterValueGroupId: 1,
            isReadOnly: false,
            isVisible: true,
            name: 'Merchant Number',
            reportFilterId: 285,
            filterType: 'STRING',
            filterValues: null,
            isPrimaryDateFilter: null,
          },
        ],
        translations: {
          apply: 'Apply',
          cancel: 'Cancel',
          to: 'avec',
        },
      };

      wrapper = mount(<GDFilterPane {...props} />);
    });

    it('should have any additional class passed in', function () {
      expect(wrapper.hasClass(props.extraClass)).to.be.true;
    });

    it('should set its filters state to its filters prop', function () {
      const expectedFilter = Object.assign({}, props.filterList[0], { id: props.filterList[0].reportFilterId });
      const expectedList = [expectedFilter];

      expect(wrapper.state('sortedFilterList')).to.eql(expectedList);
    });

    it('should have a function prop that closes the pane', function () {
      const cancelButton = wrapper.find('.gd-filter-pane__close-button');

      cancelButton.simulate('click');

      expect(props.closeFilterPane.calledOnce).to.be.true;
    });

    it('should have a function prop that applies values in the pane', function () {
      const cancelButton = wrapper.find('.gd-filter-pane__apply-button');

      cancelButton.simulate('click');

      expect(props.applyFilters.calledOnce).to.be.true;
    });

    it('should have a function that clears the values in the pane', function () {
      wrapper.setState({ currentValues: { 285: '123456789' } });

      const clearButton = wrapper.find('.clear-filters');
      clearButton.simulate('click');

      const currentValues = wrapper.state('currentValues');
      const currentFilterKeys = Object.keys(currentValues);
      expect(currentFilterKeys).to.have.lengthOf(0);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
