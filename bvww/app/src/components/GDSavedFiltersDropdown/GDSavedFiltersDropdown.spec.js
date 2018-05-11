/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import {
  getSavedFiltersv2,
} from 'Helpers/testHelpers/testReportAPIv2Mocks';

import {
  mapSavedFilters,
} from 'Utils/reports/reportFilterUtils';

/**
 * Import components to be tested
 */
import GDSavedFiltersDropdown from './GDSavedFiltersDropdown';

const savedFilters = getSavedFiltersv2();

/**
 * The actual component unit test
 */
describe('GDSavedFiltersDropdown', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        extraClass: '',
        savedFilters: [],
        translations: {},
      };
      wrapper = shallow(<GDSavedFiltersDropdown {...props} />);
    });

    it('should display a GDSavedFiltersDropdown', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });

  describe('props tests', function () {
    let props;
    let changeHandler;
    let savedHandler;
    let activeHandler;
    let wrapper;

    beforeEach(function () {
      changeHandler = sinon.spy();
      savedHandler = sinon.spy();
      activeHandler = sinon.spy();

      props = {
        extraClass: 'macadamia',
        noSavedFilters: false,
        onChange: changeHandler,
        removeSavedFilter: savedHandler,
        savedFilters: mapSavedFilters(savedFilters),
        searchTerm: '',
        setSavedFilterAsActive: activeHandler,
        translations: {
          active: 'Active',
          createAFilterContent: 'To select a filter, please create a filter.',
          createAFilterTitle: 'Start by creating a filter',
          title: 'Saved Filters',
          placeholder: 'Search by Filter Name...',
        },
      };

      wrapper = mount(<GDSavedFiltersDropdown {...props} />);
    });

    it('should show a message directing a filter to be created if there are no filters saved', function () {
      wrapper.setProps({ noSavedFilters: true });
      const noFilters = wrapper.find('.gd-filters-dropdown__content--no-filters');
      expect(noFilters).to.have.lengthOf(1);
    });

    it('should show a list of filters if there are saved filters', function () {
      const filters = wrapper.find('.gd-filters-dropdown__content--has-filters');
      expect(filters.find('.gd-filters-dropdown__item')).to.have.lengthOf(savedFilters.length);
    });

    it('should add an extra class to the wrapper', function () {
      const wrapperClass = wrapper.find('.macadamia');
      expect(wrapperClass).to.have.lengthOf(1);
    });

    it('should update the input field on change', function () {
      const search = wrapper.find('.search-field').at(1);
      search.simulate('change');
      expect(changeHandler.calledOnce).to.be.true;
    });

    it('should remove a filter', function () {
      const closeButton = wrapper.find('.remove').first();
      closeButton.simulate('click');
      expect(savedHandler.calledOnce).to.be.true;
    });

    it('should set a filter as active', function () {
      const filter = wrapper.find('.gd-filters-dropdown__filter-row').first();
      filter.simulate('click');
      expect(activeHandler.calledOnce).to.be.true;
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
