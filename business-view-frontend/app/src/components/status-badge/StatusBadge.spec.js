/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

/**
 * Import components to be tested
 */
import StatusBadge from './StatusBadge';

const data = [
  {
    value: 'activated',
    text: 'Activated',
  },
  {
    value: 'deactivated',
    text: 'Deactivated',
  },
];

/**
 * The actual component unit test
 */
describe('StatusBadge', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        row: {
          column: {},
          columnIndex: 13,
          property: 'status',
          rowData: { status: 'Active' },
          rowIndex: 42,
          rowKey: 'admin',
        },
        dataList: data,
        selectedItem: {},
        handleSelection: () => {},
        wrapperClass: '',
      };
      wrapper = shallow(<StatusBadge {...props} />);
    });

    it('should display a StatusBadge', function () {
      expect(wrapper).to.have.length(1);
    });
  });

  describe('props tests', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        row: {
          column: {},
          columnIndex: 13,
          property: 'status',
          rowData: { status: 'Active' },
          rowIndex: 42,
          rowKey: 'admin',
        },
        dataList: data,
        selectedItem: data[0],
        wrapperClass: 'status-badge',
      };

      wrapper = mount(<StatusBadge {...props} />);
    });

    it('should have a wrapper class property', function () {
      expect(wrapper.prop('wrapperClass')).to.equal('status-badge');
    });

    it('should open its menu on click', function () {
      const someTarget = wrapper.find('.dropdown-menu-trigger').first();

      someTarget.simulate('click');

      const menuNodes = wrapper.find('.select-menu-option');

      expect(menuNodes).to.have.lengthOf(data.length);
    });

    it('should have a relevant class name to what is selected', function () {
      const activatedNode = wrapper.find('span.is-activated');
      expect(activatedNode).to.have.lengthOf(1);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
