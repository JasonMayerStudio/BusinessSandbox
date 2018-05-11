/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

/**
 * Import components to be tested
 */
import GDCurrencyCodeCell from './GDCurrencyCodeCell';

/**
 * The actual component unit test
 */
describe('GDCurrencyCodeCell', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        value: 9.99,
        units: 'USD',
      };
      wrapper = shallow(<GDCurrencyCodeCell {...props} />);
    });

    it('should display a GDCurrencyCodeCell', function () {
      expect(wrapper).to.have.lengthOf(1);
    });

    it('should display its value prop as number', function () {
      expect(wrapper.text()).to.contain(props.value);
    });
  });

  describe('props tests', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        value: 29.99,
        units: 'EUR',
        extraClass: 'trooper',
      };

      wrapper = mount(<GDCurrencyCodeCell {...props} />);
    });

    it('should have the extra class passed in', function () {
      expect(wrapper.hasClass(props.extraClass)).to.be.true;
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
