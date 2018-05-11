/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

/**
 * Import components to be tested
 */
import GDFilterElement from './GDFilterElement';

/**
 * The actual component unit test
 */
describe('GDFilterElement', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        filter: {
          defaultValue: null,
          description: 'Batches Debit Card Batch Amount',
          displayOrder: 1,
          filterValueGroupId: 0,
          isReadOnly: false,
          isVisible: false,
          name: 'Debit Card Batch Amount',
          reportFilterId: 58,
          filterType: 'CURRENCY',
          filterValues: null,
          isPrimaryDateFilter: null,
        },
        onChange: () => {},
        onRangeChange: () => {},
      };
      wrapper = shallow(<GDFilterElement {...props} />);
    });

    it('should display a GDFilterElement', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });

  describe('props tests', function () {
    let props;
    let wrapper;
    let onChangeHandler;
    let onRangeChangeHandler;

    beforeEach(function () {
      onChangeHandler = sinon.spy();
      onRangeChangeHandler = sinon.spy();

      props = {
        extraClass: 'extraClass',
        filter: {
          defaultValue: null,
          description: 'Batches Debit Card Batch Amount',
          displayOrder: 1,
          filterValueGroupId: 0,
          isReadOnly: false,
          isVisible: false,
          name: 'Debit Card Batch Amount',
          reportFilterId: 58,
          filterType: 'CURRENCY',
          filterValues: null,
          isPrimaryDateFilter: null,
        },
        onChange: onChangeHandler,
        onRangeChange: onRangeChangeHandler,
        translations: {
          to: 'avec',
        },
      };

      wrapper = mount(<GDFilterElement {...props} />);
    });

    it('should have any additional class passed in', function () {
      expect(wrapper.hasClass(props.extraClass)).to.be.true;
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
