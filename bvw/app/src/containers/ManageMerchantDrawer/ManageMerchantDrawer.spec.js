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

import ExtendedMerchantDrawer from '../ExtendedMerchantDrawer';

/**
 * Import components to be tested
 */
import { ManageMerchantDrawer } from './ManageMerchantDrawer';

/**
 * The actual component unit test
 */
describe('ManageMerchantDrawer', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        parsedPermissions: {
          merchants: {
            canView: true,
            canEdit: true,
          },
        },
        toggleDrawer: () => {},
        useExtendedDrawer: () => {},
        user: {},
        users: [],
      };
      wrapper = shallow(<ManageMerchantDrawer {...props} />);
    });

    it('should display a ManageMerchantDrawer container', function () {
      expect(wrapper).to.have.length(1);
    });
  });

  describe('props tests', function () {
    let props;
    let wrapper;
    let toggleDrawer;
    let useExtendedDrawer;
    let editMerchantDrawerState;
    let store;
    let parsedPermissions;

    beforeEach(function () {
      parsedPermissions = getParsedPermissionStructure();
      const manageMerchantDrawerParsedPermissions = Object.assign({}, parsedPermissions, {
        users: {
          canView: true,
          rolesViewable: ['MERCHANT_USER'],
        },
        merchants: {
          canView: true,
          canEdit: true,
        },
      });

      toggleDrawer = sinon.spy();
      useExtendedDrawer = sinon.spy();

      editMerchantDrawerState = Object.assign({}, initialState, {
        auth: {
          isFetching: false,
          session: {
            sessionToken: 'ey',
            user: {
              firstName: 'Leroy',
              lastName: 'Jenkins',
              role: {
                name: 'Merchant User',
                key: 'merchant_user',
              },
              maxMonths: 3,
              parsedPermissions: manageMerchantDrawerParsedPermissions,
              dataAccess: [],
            },
          },
        },
      });

      store = configureStore(editMerchantDrawerState);

      props = {
        parsedPermissions: manageMerchantDrawerParsedPermissions,
        toggleDrawer,
        useExtendedDrawer,
        user: {
          id: 42,
          merchants: [],
        },
        users: [],
      };

      wrapper = mount(
        <Provider store={store}>
          <MemoryRouter>
            <ManageMerchantDrawer {...props} />
          </MemoryRouter>
        </Provider>,
      );
    });

    it('should toggle the drawer when mounted', function () {
      expect(toggleDrawer.called).to.be.true;
    });

    it('should include a ExtendedMerchantDrawer', function () {
      const extendedMerchantDrawer = wrapper.find(ExtendedMerchantDrawer);

      expect(extendedMerchantDrawer).to.have.lengthOf(1);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
