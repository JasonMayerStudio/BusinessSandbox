/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import {
  getActiveFiltersList,
} from 'Helpers/testHelpers/testReportAPIv2Mocks';

/**
 * Import components to be tested
 */
import GDActiveFiltersDropdown from './GDActiveFiltersDropdown';

/**
 * The actual component unit test
 */
describe('GDActiveFiltersDropdown', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        activeFilters: [],
        deactivateFilter: () => {},
        dropdownToggled: false,
        extraClass: '',
        toggleDropdown: () => {},
        translations: {
          active: 'Active',
          filters: 'Filters',
          inactive: 'Inactive',
          noActiveFilters: 'You do not have any active filters.',
          noActiveFiltersContent: 'Apply a filter to see which are active.',
        },
      };
      wrapper = shallow(<GDActiveFiltersDropdown {...props} />);
    });

    it('should display a GDActiveFiltersDropdown', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });

  describe('props tests', function () {
    let props;
    let deactivateFilterHandler;
    let toggleDropdownHandler;
    let wrapper;

    beforeEach(function () {
      deactivateFilterHandler = sinon.spy();
      toggleDropdownHandler = sinon.spy();

      props = {
        activeFilters: getActiveFiltersList(),
        deactivateFilter: deactivateFilterHandler,
        extraClass: '',
        dropdownToggled: {
          active: false,
          inactive: false,
        },
        toggleDropdown: toggleDropdownHandler,
        translations: {
          active: 'Active',
          filters: 'Filters',
          inactive: 'Inactive',
          noActiveFilters: 'You do not have any active filters.',
          noActiveFiltersContent: 'Apply a filter to see which are active.',
        },
      };

      wrapper = mount(<GDActiveFiltersDropdown {...props} />);
    });

    it('should have show content on click when toggled', function () {
      const informationBubble = wrapper.find('.information-bubble__wrapper');
      informationBubble.simulate('click');
      expect(toggleDropdownHandler.calledOnce).to.be.true;
    });

    it('should have a message if there are no active filters', function () {
      wrapper.setProps({ activeFilters: [] });
      const dropdownToggled = wrapper.props().dropdownToggled;
      dropdownToggled.inactive = true;
      wrapper.setProps({ dropdownToggled });
      const noFilters = wrapper.find('.gd-active-filters-dropdown__content--no-filters');
      expect(noFilters).to.have.lengthOf(1);
    });

    it('should have as many filters as are active', function () {
      const dropdownToggled = wrapper.props().dropdownToggled;
      dropdownToggled.active = true;
      wrapper.setProps({ dropdownToggled });
      const items = wrapper.find('.gd-active-filters-dropdown__item');
      expect(items).to.have.lengthOf(wrapper.props().activeFilters.length);
    });

    it('should delete a filter on click', function () {
      const dropdownToggled = wrapper.props().dropdownToggled;
      dropdownToggled.active = true;
      wrapper.setProps({ dropdownToggled });
      const remove = wrapper.find('.remove').first();
      remove.simulate('click');
      expect(deactivateFilterHandler.calledOnce).to.be.true;
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
