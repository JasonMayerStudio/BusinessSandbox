/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions, no-unused-vars */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import SearchBar from 'Components/search-bar/SearchBar.js';
import Table from 'Components/table/Table.js';

/**
 * Import components to be tested
 */
import { ViewMerchants } from './ViewMerchants';

/**
 * The actual component unit test
 */
describe('ViewMerchants', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        actions: {
          getAllMerchants: sinon.spy(),
        },
        history: {
          push: () => {},
          history: {},
          location: {},
          match: {},
        },
        globalSelector: {
          orgIds: [],
        },
        merchants: [],
        parsedPermissions: {
          merchants: {
            canView: true,
            canRegister: true,
          },
        },
      };
      wrapper = shallow(<ViewMerchants {...props} />);
    });

    it('should display a ViewMerchants container', function () {
      expect(wrapper).to.have.length(1);
    });
  });

  describe('props test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        actions: {
          getAllMerchants: sinon.spy(),
        },
        history: {
          push: () => {},
          history: {},
          location: {},
          match: {},
        },
        globalSelector: {
          orgIds: [],
        },
        merchants: [],
        parsedPermissions: {
          merchants: {
            canView: true,
            canRegister: true,
          },
        },
      };
      wrapper = mount(<ViewMerchants {...props} />);
    });

    it('should make an API request to get merchants', function () {
      expect(props.actions.getAllMerchants.calledOnce).to.be.true;
    });

    it('should pass a function down for the Register Merchant button, if that permission is set', function () {
      const searchBar = wrapper.find(SearchBar);

      const actionProp = searchBar.prop('action');

      expect(actionProp).to.be.a('function');
    });

    it('should show a plain table when nothing is selected in the global selector', function () {
      const simpleTable = wrapper.find(Table);

      expect(simpleTable).to.have.lengthOf(1);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions, no-unused-vars */
