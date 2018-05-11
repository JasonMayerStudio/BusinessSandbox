/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

/**
 * Import components to be tested
 */
import SelectInput, { findItem } from './SelectInput';

/**
 * The actual component unit test
 */
describe('SelectInput', function () {
  let props;
  let wrapper;
  let handler;

  const data = [
    {
      value: 'foo',
      text: 'Foo',
    },
    {
      value: 'bar',
      text: 'Bar',
    },
    {
      value: 'baz',
      text: 'Baz',
    },
  ];

  describe('smoke test', function () {
    beforeEach(function () {
      props = {
        dataList: data,
        handleSelection: () => {},
        wrapperClass: '',
      };
      wrapper = shallow(<SelectInput {...props} />);
    });

    it('should display a SelectInput', function () {
      expect(wrapper).to.have.length(1);
    });
  });

  describe('props tests', function () {
    beforeEach(function () {
      handler = sinon.spy();

      props = {
        dataList: data,
        handleSelection: handler,
        wrapperClass: 'select-menu__form',
      };

      wrapper = mount(<SelectInput {...props} />);
    });

    it('should have a wrapper class property', function () {
      expect(wrapper.prop('wrapperClass')).to.equal('select-menu__form');
    });

    it('should open its menu on click', function () {
      const someTarget = wrapper.find('.dropdown-menu-trigger').first();

      someTarget.simulate('click');

      const menuNodes = wrapper.find('.select-menu-option');

      expect(menuNodes).to.have.length(data.length);
    });

    it('should called handler with a clicked menu item', function () {
      const someTarget = wrapper.find('.dropdown-menu-trigger').first();
      someTarget.simulate('click');

      const nodeToClick = wrapper.find('.select-menu-option').first();
      nodeToClick.simulate('click');

      expect(handler.calledOnce).to.be.true;

      const args = handler.getCall(0).args;
      expect(args[0]).to.equal(data[0].value);
    });
  });
});

/**
 * The parent helper function unit test
 */
describe('findItem', function () {
  const dataList = [
    {
      value: 'something',
      text: 'Filter by <strong>Something</strong>',
    },
    {
      value: 'something_else',
      text: 'Filter by <strong>Something Else</strong>',
    },
    {
      value: 'third_thing',
      text: 'Filter by a <strong>Third Thing</strong>',
    },
    {
      value: 'all',
      text: 'Filter by <strong>All</strong>',
    },
  ];

  it('should find an item in the input list source', function () {
    const foundItem = findItem(dataList, 'all');

    expect(foundItem).to.eql(dataList[3]);
  });

  it('should return undefined when a value is not in the input list source', function () {
    const foundItem = findItem(dataList, 'nothing');

    expect(foundItem).to.be.undefined;
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
