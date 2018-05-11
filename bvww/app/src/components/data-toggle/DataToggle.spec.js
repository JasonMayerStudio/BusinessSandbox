/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

/**
 * Import components to be tested
 */
import DataToggle from './DataToggle';

const dataSet = [
  {
    header: 'Types of Beer',
    value: 'types-of-beer',
    key: 'types',
    data: [
      {
        value: 'india-pale-ale',
        key: 'IPA',
        text: 'NoDa Hop Drop & Roll',
      },
      {
        value: 'gose',
        key: 'Gose',
        text: 'Westbrook Gose',
      },
      {
        value: 'saison',
        key: 'Saison',
        text: 'Wooden Robot Get Pithy',
      },
      {
        value: 'stout',
        key: 'Stout',
        text: 'Lazy Magnolia Jefferson Stout',
      },
    ],
  },
];

/**
 * The actual component unit test
 */
describe('DataToggle', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        dataSet,
        toggleSection: () => {},
        isOpen: true,
      };
      wrapper = shallow(<DataToggle {...props} />);
    });

    it('should display a DataToggle', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });

  describe('props tests', function () {
    let props;
    let handler;
    let wrapper;

    beforeEach(function () {
      handler = sinon.spy();

      props = {
        dataSet,
        toggleSection: handler,
        isOpen: true,
        dateFormat: 'DD/MM/YYYY',
      };

      wrapper = mount(<DataToggle {...props} />);
    });

    it('should have a data set', function () {
      expect(wrapper.props().dataSet).to.have.lengthOf(dataSet.length);
    });

    it('should toggle closed on click', function () {
      const headerTarget = wrapper.find('.data-toggle-header-wrapper');

      headerTarget.simulate('click');

      expect(handler.calledOnce).to.be.true;
    });

    it('should be false if the the section has been toggled', function () {
      wrapper.setProps({ isOpen: false });
      expect(wrapper.props().isOpen).to.be.false;
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
