/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

// system under test
import DataAccessFilter from './';

import OrgSelectorWidget from '../OrgSelectorWidget';

// mocks
import { getMockFilterArray } from 'Helpers/testHelpers/testMocks.js'; // eslint-disable-line import/first

describe('DataAccessFilter', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        filterChain: getMockFilterArray(),
        onDelete: () => {},
      };
      wrapper = shallow(<DataAccessFilter {...props} />);
    });

    it('should display a DataAccessFilter', function () {
      expect(wrapper).to.have.lengthOf(1);
    });

    it('should have a class that ends in vertical by default', function () {
      expect(wrapper.hasClass('data-access-filter-chain-vertical')).to.be.true;
    });
  });

  describe('props tests', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        filterChain: getMockFilterArray(),
        onDelete: () => {},
        direction: 'horizontal',
      };
      wrapper = shallow(<DataAccessFilter {...props} />);
    });

    it('should have a class that ends in horizontal when that direction is given', function () {
      expect(wrapper.hasClass('data-access-filter-chain-horizontal')).to.be.true;
    });

    it('should have 6 OrgSelectWidget components', function () {
      const widgets = wrapper.find(OrgSelectorWidget);

      expect(widgets).to.have.lengthOf(6);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
