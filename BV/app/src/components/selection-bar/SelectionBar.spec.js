/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

/**
 * Import components to be tested
 */
import SelectionBar from './SelectionBar';

const mysteryGang = [
  {
    value: 'scooby-doo',
    text: 'Scooby Doo',
  },
  {
    value: 'shaggy',
    text: 'Shaggy',
  },
  {
    value: 'velma',
    text: 'Velma',
  },
  {
    value: 'daphne',
    text: 'Daphne',
  },
];

/**
 * The actual component unit test
 */
describe('SelectionBar', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        listItems: [],
        handleSelection: () => {},
        selectedTab: {},
      };
      wrapper = shallow(<SelectionBar {...props} />);
    });

    it('should display a SelectionBar', function () {
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
        listItems: mysteryGang,
        selectedTab: mysteryGang[2],
        handleSelection: handler,
      };

      wrapper = mount(<SelectionBar {...props} />);
    });

    it('should change the selected tab on click', function () {
      const someTarget = wrapper.find('.tab-anchor').first();

      someTarget.simulate('click');

      expect(handler.calledOnce).to.be.true;

      const args = handler.getCall(0).args;
      expect(args[0].value).to.equal(mysteryGang[0].value);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
