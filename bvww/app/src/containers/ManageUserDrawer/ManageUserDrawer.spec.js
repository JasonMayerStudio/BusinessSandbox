/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { getParsedPermissionStructure } from 'Utils/permissionsUtils';
import initialState from '../../reducers/initialState';
import configureStore from '../../store/configureStore';

/**
 * Import components to be tested
 */
import { ManageUserDrawer } from './ManageUserDrawer';

/**
 * The actual component unit test
 */
describe('ManageUserDrawer', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        authRole: {
          permissions: [
            {
              name: 'Can Log In',
              description: 'This is a description of Can Log In',
              key: 'CAN_LOG_IN',
              id: 76,
            },
          ],
        },
        getMerchants: () => {},
        getViewedUserMerchants: () => {},
        history: {},
        parsedPermissions: {
          users: {
            canView: true,
            canEditRole: true,
            rolesViewable: ['MERCHANT_USER'],
            canActivateAndDeactivate: true,
            rolesActivatable: ['MERCHANT_USER'],
          },
          merchants: {
            canView: true,
          },
        },
        preferences: {
          dateFormat: 'MM/DD/2017',
          firstName: 'Bob',
          language: 'en-US',
          lastName: 'Roberts',
          timeFormat: 'HH:mm',
        },
        saveUser: () => {},
        toggleDrawer: () => {},
        useExtendedDrawer: () => {},
        userId: '68',
      };

      wrapper = shallow(<ManageUserDrawer {...props} />);
    });

    it('should display a ManageUserDrawer container', function () {
      expect(wrapper).to.have.length(1);
    });
  });

  describe('props tests', function () {
    let props;
    let wrapper;

    let getMerchants;
    let getViewedUserMerchants;
    let saveUser;
    let toggleDrawer;
    let useExtendedDrawer;

    let editUserDrawerState;
    let store;
    let parsedPermissions;

    beforeEach(function () {
      parsedPermissions = getParsedPermissionStructure();
      const manageUserDrawerParsedPermissions = Object.assign({}, parsedPermissions, {
        users: {
          canView: true,
          rolesViewable: [
            'MERCHANT_USER',
            'MERCHANT_ACCOUNT_ADMINISTRATOR',
            'GLOBAL_PAYMENTS_EMPLOYEE',
          ],
          canEditRole: true,
          rolesEditableForRole: [
            'MERCHANT_USER',
            'MERCHANT_ACCOUNT_ADMINISTRATOR',
            'GLOBAL_PAYMENTS_EMPLOYEE',
          ],
        },
      });

      getMerchants = sinon.spy();
      getViewedUserMerchants = sinon.spy();
      saveUser = sinon.spy();
      toggleDrawer = sinon.spy();
      useExtendedDrawer = sinon.spy();

      editUserDrawerState = Object.assign({}, initialState, {
        auth: {
          isFetching: false,
          session: {
            sessionToken: 'ey',
            user: {
              firstName: 'Leroy',
              lastName: 'Jenkins',
              role: {
                name: 'Global Payments Employee',
                key: 'GLOBAL_PAYMENTS_EMPLOYEE',
              },
              maxMonths: 0,
              parsedPermissions: manageUserDrawerParsedPermissions,
              dataAccess: [],
            },
          },
        },
      });

      store = configureStore(editUserDrawerState);

      props = {
        authRole: {
          permissions: [
            {
              name: 'Can Log In',
              description: 'This is a description of Can Log In',
              key: 'CAN_LOG_IN',
              id: 76,
            },
          ],
        },
        getMerchants,
        getViewedUserMerchants,
        history: {},
        parsedPermissions: manageUserDrawerParsedPermissions,
        preferences: {
          dateFormat: 'MM/DD/2017',
          firstName: 'Bob',
          language: 'en-US',
          lastName: 'Roberts',
          timeFormat: 'HH:mm',
        },
        saveUser,
        toggleDrawer,
        useExtendedDrawer,
        userId: '68',
      };

      wrapper = mount(
        <Provider store={store}>
          <MemoryRouter>
            <ManageUserDrawer {...props} />
          </MemoryRouter>
        </Provider>,
      );
    });

    it('should toggle the drawer when mounted', function () {
      expect(toggleDrawer.called).to.be.true;
    });

    it('should first render with a loader', function () {
      const drawerContent = wrapper.find('.ball-sync-loader');

      expect(drawerContent).to.have.lengthOf(1);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
