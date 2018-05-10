/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

/**
 * Import components to be tested
 */
import SearchBar from './SearchBar';

/**
 * The actual component unit test
 */
describe('SearchBar', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        dataList: [],
        filterText: '',
        handleFilter: () => {},
        selectedFilter: {},
        headline: '',
        selectedItem: {},
        buttonCategory: '',
      };
      wrapper = shallow(<SearchBar {...props} />);
    });

    it('should display a SearchBar', function () {
      expect(wrapper).to.have.length(1);
    });
  });

  describe('props tests', function () {
    let props;
    let handler;
    let wrapper;

    beforeEach(function () {
      handler = sinon.spy();

      props = {
        dataList: [
          {
            value: 'Some value',
            text: 'Filter by something',
          },
        ],
        secondaryDataList: null,
        filterText: 'a new value',
        handleFilter: handler,
        headline: 'A headline',
        selectedFilter: {
          value: 'Some selected value',
          text: 'A selected item',
        },
        buttonText: 'Click',
        buttonCategory: 'primary',
      };

      wrapper = mount(<SearchBar {...props} />);
    });

    it('should display a Search', function () {
      expect(wrapper.find('Search')).to.have.lengthOf(1);
    });

    it('should display a SelectInput', function () {
      const selectWrapper = wrapper.find('.select-menu');
      expect(selectWrapper).to.have.lengthOf(1);
    });

    it('should display a button', function () {
      const button = wrapper.find('button');
      expect(button).to.have.lengthOf(1);
    });

    it('should have a list of filterable items for a SelectInput', function () {
      const dataList = wrapper.prop('dataList');
      expect(dataList).to.have.lengthOf(props.dataList.length);
    });

    it('should have a handleFilter function to pass to SelectInput', function () {
      expect(wrapper.prop('handleFilter')).to.eql(handler);
    });

    it('should have a headline', function () {
      expect(wrapper.prop('headline')).to.be.a('string').that.is.not.empty;
    });

    it('should have a selectedFilter to pass to SelectInput', function () {
      expect(wrapper.prop('selectedFilter')).to.be.a('object').that.has.all.keys('value', 'text');
    });

    it('should have a button category of primary to pass to Button', function () {
      expect(wrapper.prop('buttonCategory')).to.equal('primary');
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
