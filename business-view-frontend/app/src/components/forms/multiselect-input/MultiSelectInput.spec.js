/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

/**
 * Import components to be tested
 */
import MultiSelectInput, { findItem } from './MultiSelectInput';

/**
 * The actual component unit test
 */
describe('MultiSelectInput', function () {
  let props;
  let wrapper;
  let handler;
  const label = 'Response Code';
  const promptText = 'select';
  const data = [
    {
      id: 2941,
      value: '00',
      text: 'Approved',
      desc: 'Approved',
      filterValueGroupId: 81,
    }, {
      id: 2942,
      value: '01',
      text: 'Decline',
      desc: 'Decline',
      filterValueGroupId: 81,
    }, {
      id: 2945,
      value: '05',
      text: 'Do not honor',
      desc: 'Do not honor',
      filterValueGroupId: 81,
    }, {
      id: 2946,
      value: '94',
      text: 'Duplicate',
      desc: 'Duplicate',
      filterValueGroupId: 81,
    }, {
      id: 2944,
      value: '101',
      text: 'Expired Card',
      desc: 'Expired Card',
      filterValueGroupId: 81,
    }, {
      id: 2943,
      value: '03',
      text: 'Partial Approval',
      desc: 'Partial Approval',
      filterValueGroupId: 81,
    },
  ];

  describe('smoke test', function () {
    beforeEach(function () {
      props = {
        label,
        dataList: data,
        handleSelection: () => {},
        wrapperClass: '',
        extraClass: '',
        promptText,

      };
      wrapper = shallow(<MultiSelectInput {...props} />);
    });

    it('should have a Response Code which contains the label prop', function () {
      const ResponseLabel = wrapper.find('label').first();
      expect(ResponseLabel.text()).to.contain('Response Code');
    });


    it('should display a MultiSelectInput', function () {
      expect(wrapper).to.have.length(1);
    });
  });

  describe('props tests', function () {
    beforeEach(function () {
      handler = sinon.spy();

      props = {
        label,
        dataList: data,
        handleSelection: handler,
        wrapperClass: 'select-menu__form',
        extraClass: '',
        promptText,
      };

      wrapper = mount(<MultiSelectInput {...props} />);
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
      id: 2941,
      value: '00',
      text: 'Approved',
      desc: 'Approved',
      filterValueGroupId: 81,
    }, {
      id: 2942,
      value: '01',
      text: 'Decline',
      desc: 'Decline',
      filterValueGroupId: 81,
    }, {
      id: 2945,
      value: '05',
      text: 'Do not honor',
      desc: 'Do not honor',
      filterValueGroupId: 81,
    }, {
      id: 2946,
      value: '94',
      text: 'Duplicate',
      desc: 'Duplicate',
      filterValueGroupId: 81,
    }, {
      id: 2944,
      value: '101',
      text: 'Expired Card',
      desc: 'Expired Card',
      filterValueGroupId: 81,
    }, {
      id: 2943,
      value: '03',
      text: 'Partial Approval',
      desc: 'Partial Approval',
      filterValueGroupId: 81,
    },
  ];

  it('should find an item in the input list source', function () {
    const foundItem = findItem(dataList, '03');

    expect(foundItem).to.eql(dataList[5]);
  });

  it('should return undefined when a value is not in the input list source', function () {
    const foundItem = findItem(dataList, '200');

    expect(foundItem).to.be.undefined;
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
