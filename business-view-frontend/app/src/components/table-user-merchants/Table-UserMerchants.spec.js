/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

/**
 * Import components to be tested
 */
import { TableUserMerchants } from './Table-UserMerchants';

/**
 * The actual component unit test
 */
describe('TableUserMerchants', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        checkCount: [],
        content: [],
        columnsToSearch: [],
        filterRows: () => {},
        filterText: '',
        handleSort: () => {},
        toggleAccess: () => {},
        clearAccess: () => {},
        selectAllAccess: () => {},
        saveAccess: () => {},
        dataAccessProhibited: false,
        checkboxTouched: false,
        loading: false,
        globalSelectorRows: [],
        paginator: false,
        currentPage: 1,
        pageCount: 1,
      };

      wrapper = shallow(<TableUserMerchants {...props} />);
    });

    it('should display a TableUserMerchants', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });

  describe('props tests', function () {
    let props;
    let wrapper;


    beforeEach(function () {
      props = {
        filterText: 'mode',
        dataAccessProhibited: false,
        globalSelectorRows: [],
        currentPage: 1,
        pageCount: 1,
      };

      wrapper = mount(<TableUserMerchants {...props} />);
    });

    it('should prohibit access if no checks are selected', function () {
      const button = wrapper.find('Button').first();

      expect(button.props().disabled).to.be.true;
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
