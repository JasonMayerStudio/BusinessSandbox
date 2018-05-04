/* eslint-disable func-names, prefer-arrow-callback */

import { expect } from 'chai';
import { mount } from 'enzyme';

import { getSavedGlobalFilter } from 'Helpers/testHelpers/testMocks.js';

import {
  getGlobalSelectorString,
  getGlobalSelectorElements,
} from './globalSelectorFlagSelectors';

describe('Global Selector Flag selectors', function () {
  describe('getGlobalSelectorString', function () {
    it('should return an All if the array of branches is empty', function () {
      // arrange
      const globalFilter = [];
      const expectedString = 'All Merchants';

      // act
      const globalSelector = getGlobalSelectorString(globalFilter);

      // asset
      expect(globalSelector).to.equal(expectedString);
    });

    it('should return a full string if only one branch with one merchant is selected', function () {
      // arrange
      const savedGlobalFilter = getSavedGlobalFilter();
      const filterArray = [savedGlobalFilter];
      const expectedString = `Corp ${savedGlobalFilter.selectedCorp.label} > Region ${savedGlobalFilter.selectedRegion.label} > Principal ${savedGlobalFilter.selectedPrincipal.label} > Associate ${savedGlobalFilter.selectedAssociate.label} > Chain ${savedGlobalFilter.selectedChain.label} > Merchant ${savedGlobalFilter.selectedMerchants[0].label}`;

      // act
      const globalSelector = getGlobalSelectorString(filterArray);

      // asset
      expect(globalSelector).to.equal(expectedString);
    });

    it('should return Multiple Merchants if multiple merchants in the same chain are selected', function () {
      // arrange
      const countOfLastLevelToInclude = 2;
      const savedGlobalFilter = getSavedGlobalFilter(6, countOfLastLevelToInclude);
      const filterArray = [savedGlobalFilter];
      const expectedString = `Corp ${savedGlobalFilter.selectedCorp.label} > Region ${savedGlobalFilter.selectedRegion.label} > Principal ${savedGlobalFilter.selectedPrincipal.label} > Associate ${savedGlobalFilter.selectedAssociate.label} > Chain ${savedGlobalFilter.selectedChain.label} > Multiple Merchants`;

      // act
      const globalSelector = getGlobalSelectorString(filterArray);

      // asset
      expect(globalSelector).to.equal(expectedString);
    });

    it('should return Chain + All if only one branch with one chain is selected', function () {
      // arrange
      const savedGlobalFilter = getSavedGlobalFilter(5);
      const filterArray = [savedGlobalFilter];
      const expectedString = `Corp ${savedGlobalFilter.selectedCorp.label} > Region ${savedGlobalFilter.selectedRegion.label} > Principal ${savedGlobalFilter.selectedPrincipal.label} > Associate ${savedGlobalFilter.selectedAssociate.label} > Chain ${savedGlobalFilter.selectedChain.label} > All`;

      // act
      const globalSelector = getGlobalSelectorString(filterArray);

      // asset
      expect(globalSelector).to.equal(expectedString);
    });

    it('should return Associate + All if only one branch with one associate is selected', function () {
      // arrange
      const savedGlobalFilter = getSavedGlobalFilter(4);
      const filterArray = [savedGlobalFilter];
      const expectedString = `Corp ${savedGlobalFilter.selectedCorp.label} > Region ${savedGlobalFilter.selectedRegion.label} > Principal ${savedGlobalFilter.selectedPrincipal.label} > Associate ${savedGlobalFilter.selectedAssociate.label} > All`;

      // act
      const globalSelector = getGlobalSelectorString(filterArray);

      // asset
      expect(globalSelector).to.equal(expectedString);
    });

    it('should return Principal + All if only one branch with one principal is selected', function () {
      // arrange
      const savedGlobalFilter = getSavedGlobalFilter(3);
      const filterArray = [savedGlobalFilter];
      const expectedString = `Corp ${savedGlobalFilter.selectedCorp.label} > Region ${savedGlobalFilter.selectedRegion.label} > Principal ${savedGlobalFilter.selectedPrincipal.label} > All`;

      // act
      const globalSelector = getGlobalSelectorString(filterArray);

      // asset
      expect(globalSelector).to.equal(expectedString);
    });

    it('should return Region + All if only one branch with one region is selected', function () {
      // arrange
      const savedGlobalFilter = getSavedGlobalFilter(2);
      const filterArray = [savedGlobalFilter];
      const expectedString = `Corp ${savedGlobalFilter.selectedCorp.label} > Region ${savedGlobalFilter.selectedRegion.label} > All`;

      // act
      const globalSelector = getGlobalSelectorString(filterArray);

      // asset
      expect(globalSelector).to.equal(expectedString);
    });

    it('should return Corp + All if only one branch with one region is selected', function () {
      // arrange
      const savedGlobalFilter = getSavedGlobalFilter(1);
      const filterArray = [savedGlobalFilter];
      const expectedString = `Corp ${savedGlobalFilter.selectedCorp.label} > All`;

      // act
      const globalSelector = getGlobalSelectorString(filterArray);

      // asset
      expect(globalSelector).to.equal(expectedString);
    });
  });

  describe('getGlobalSelectorElements', function () {
    it('should return an All for English if the array of branches is empty', function () {
      // arrange
      const globalFilter = [];
      const expectedString = 'All Merchants';
      const language = 'en-US';

      // act
      const globalSelector = getGlobalSelectorElements(globalFilter, language);

      // asset
      const wrapper = mount(globalSelector);
      expect(wrapper.text()).to.equal(expectedString);
    });

    it('should return a full string if only one branch with one merchant is selected', function () {
      // arrange
      const savedGlobalFilter = getSavedGlobalFilter();
      const filterArray = [savedGlobalFilter];
      const expectedString = `Corp ${savedGlobalFilter.selectedCorp.label} > Region ${savedGlobalFilter.selectedRegion.label} > Principal ${savedGlobalFilter.selectedPrincipal.label} > Associate ${savedGlobalFilter.selectedAssociate.label} > Chain ${savedGlobalFilter.selectedChain.label} > Merchant ${savedGlobalFilter.selectedMerchants[0].label}`;
      const language = 'en-US';

      // act
      const globalSelector = getGlobalSelectorElements(filterArray, language);

      // asset
      const wrapper = mount(globalSelector);
      expect(wrapper.text()).to.equal(expectedString);
    });

    it('should return Multiple Merchants if multiple merchants in the same chain are selected', function () {
      // arrange
      const countOfLastLevelToInclude = 2;
      const savedGlobalFilter = getSavedGlobalFilter(6, countOfLastLevelToInclude);
      const filterArray = [savedGlobalFilter];
      const expectedString = `Corp ${savedGlobalFilter.selectedCorp.label} > Region ${savedGlobalFilter.selectedRegion.label} > Principal ${savedGlobalFilter.selectedPrincipal.label} > Associate ${savedGlobalFilter.selectedAssociate.label} > Chain ${savedGlobalFilter.selectedChain.label} > Multiple Merchants`;
      const language = 'en-US';

      // act
      const globalSelector = getGlobalSelectorElements(filterArray, language);

      // asset
      const wrapper = mount(globalSelector);
      expect(wrapper.text()).to.equal(expectedString);
    });

    it('should return Multiple Corps if multiple corps are selected', function () {
      // arrange
      const countOfLastLevelToInclude = 2;
      const savedGlobalFilter1 = getSavedGlobalFilter(1, countOfLastLevelToInclude);
      const itemToPickForSecondFilter = 1;
      const savedGlobalFilter2 = getSavedGlobalFilter(1, countOfLastLevelToInclude, itemToPickForSecondFilter);
      const filterArray = [
        savedGlobalFilter1,
        savedGlobalFilter2,
      ];
      const expectedString = 'Multiple Corps';
      const language = 'en-US';

      // act
      const globalSelector = getGlobalSelectorElements(filterArray, language);

      // asset
      const wrapper = mount(globalSelector);
      const stringPart = wrapper.childAt(0);
      const badgePart = wrapper.childAt(1);

      expect(stringPart.text()).to.equal(expectedString);
      expect(badgePart.children()).to.have.lengthOf(2); // 2 Badges
      expect(badgePart.text()).to.equal(savedGlobalFilter1.selectedCorp.label + savedGlobalFilter2.selectedCorp.label);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback */
