/* eslint-disable */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import { getDataAccess } from 'Helpers/testHelpers/testMocks.js';

/**
 * Import components to be tested
 */
import { GlobalSelector } from './GlobalSelector';
import HollowButton from 'Components/Button/HollowButton';
import OrgSelectorWidget from '../OrgSelectorWidget/';

/**
 * The actual component unit test
 */
describe('GlobalSelector', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        dataAccess: [],
        globalSelector: [],
        history: {},
        preferences: {
          data: {
            language: '',
          },
        },
      };
      wrapper = shallow(<GlobalSelector {...props} />);
    });

    it('should display a GlobalSelector container', function () {
      expect(wrapper).to.have.length(1);
    });

    it('should create an array to hold all the possible filters', function () {
      const filterArray = wrapper.state('savedFilters');

      expect(Array.isArray(filterArray)).to.be.true;
      expect(filterArray).to.have.lengthOf(1);
    });
  });

  describe('props tests', function () {
    let props;
    let wrapper;

    const dataAccess = getDataAccess();

    beforeEach(function () {
      props = {
        dataAccess,
        globalSelector: {},
        actions: {},
        history: {
          goBack: () => {},
        },
        preferences: {
          data: {
            language: 'en-US',
          },
        },
      };
      wrapper = mount(<GlobalSelector {...props} />);
    });

    it('should create an object to hold a new filter', function () {
      const savedFilters = wrapper.state('savedFilters');

      expect(savedFilters).to.have.lengthOf(1);

      const firstFilter = savedFilters[0];

      expect(firstFilter).to.have.all.keys([
        'startData',
        'corps',
        'selectedCorp',
        'regions',
        'selectedRegion',
        'principals',
        'selectedPrincipal',
        'associates',
        'selectedAssociate',
        'chains',
        'selectedChain',
        'availableMerchants',
        'selectedMerchants',
        'dirty',
        'currentRow',
        'indexId',
        'isActive',
      ]);
      expect(firstFilter.startData).to.have.lengthOf(5);
      expect(firstFilter.corps).to.have.lengthOf(5)
      expect(firstFilter.selectedCorp).to.not.be.ok;
      expect(firstFilter.availableMerchants).to.have.lengthOf(200);
    });

    it('should start a filter object with the top-level dataAccess orgs', function () {
      const keyToMap = 'label';
      const augmentedList = dataAccess.map((item) => {
        return Object.assign({}, item, { mainLine: item[keyToMap] });
      });
      const firstFilter = wrapper.state('savedFilters')[0];

      expect(firstFilter.startData).to.eql(augmentedList);
    });

    it('should have one filter row when no existing global selectors given', function () {
      const filterRowWidgets = wrapper.find(OrgSelectorWidget);

      expect(filterRowWidgets).to.have.lengthOf(12); // 6 for desktop, and 6 for mobile div
    });
  });

  describe('integration tests', function() {
    let props;
    let wrapper;

    const closeHandler = sinon.spy();

    const dataAccess = getDataAccess();

    beforeEach(function () {
      props = {
        dataAccess,
        globalSelector: [],
        history: {
          goBack: sinon.spy()
        },
        preferences: {
          language: 'en-US',
        },
      };
      wrapper = mount(<GlobalSelector {...props} />);
    });

    it('should start with a disabled Add More button at the bottom of the list', function () {
      const addMoreButton = wrapper
        .find('.button-group-vertical')
        .find(HollowButton)
        .findWhere((n) => {
          return (n.text().includes('Add More') &&
            n.type() === 'button')
        });

      expect(addMoreButton).to.have.length(1);
    });

    it('should have a cancel button in its footer', function () {
      const cancelButton = wrapper
        .find('.bottom-content')
        .findWhere((n) => {
          return (n.text().includes('Cancel') &&
            n.type() === 'button')
        });

      expect(cancelButton).to.have.length(1);
    });

    it('should return to the previous route when the cancel button is clicked', function () {
      const cancelButton = wrapper
        .find('.bottom-content')
        .findWhere((n) => {
          return (n.text().includes('Cancel') &&
            n.type() === 'button')
        });

      cancelButton.simulate('click');

      expect(props.history.goBack.calledOnce).to.be.true;
    });

    it('should have an update button in its footer', function () {
      const updateButton = wrapper
        .find('.bottom-content')
        .findWhere((n) => {
          return (n.text().includes('Update') &&
            n.type() === 'button')
        });

      expect(updateButton).to.have.length(1);
    });
  });
});

/* eslint-enable */
