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
import { ViewUsers } from './ViewUsers';

/**
 * The actual component unit test
 */
describe('ViewUsers', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        auth: {},
        getAllUsers: sinon.spy(),
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
          users: {
            canView: true,
            canCreate: true,
            canActivateAndDeactivate: true,
            rolesActivatable: [
              'MERCHANT_USER',
            ],
          },
        },
        preferences: {
          language: 'en-US',
          dateFormat: 'MM/DD/YYYY',
        },
        saveUser: sinon.spy(),
        users: [],
      };

      wrapper = shallow(<ViewUsers {...props} />);
    });

    it('should display a ViewUsers container', function () {
      expect(wrapper).to.have.length(1);
    });
  });

  describe('props test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        auth: {},
        getAllUsers: sinon.spy(),
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
          users: {
            canView: true,
            canCreate: true,
            canActivateAndDeactivate: true,
            rolesActivatable: [
              'MERCHANT_USER',
            ],
          },
        },
        preferences: {
          language: 'en-US',
          dateFormat: 'MM/DD/YYYY',
        },
        saveUser: sinon.spy(),
        users: [],
      };

      wrapper = mount(<ViewUsers {...props} />);
    });

    it('should make an API request to get merchants', function () {
      expect(props.getAllUsers.calledOnce).to.be.true;
    });

    it('should pass a function down for the Add User button, if that permission is set', function () {
      const searchBar = wrapper.find(SearchBar);

      const actionProp = searchBar.prop('action');

      expect(actionProp).to.be.a('function');
    });

    it('should pass a flag down for the activating/deactivating a user, if that permission is set', function () {
      const simpleTable = wrapper.find(Table);

      const canActivateAndDeactivate = simpleTable.prop('activateUserRolesAllowed');

      expect(canActivateAndDeactivate).to.equal(props.parsedPermissions.users.rolesActivatable);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions, no-unused-vars */
