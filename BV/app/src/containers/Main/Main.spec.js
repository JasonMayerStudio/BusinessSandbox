/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import {
  MemoryRouter,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import moxios from 'moxios';

import { getParsedPermissionStructure } from 'Utils/permissionsUtils';
import initialState from '../../reducers/initialState';
import configureStore from '../../store/configureStore';

/**
 * Import components to be tested
 */
import Main from './';

/**
 * The actual component unit test
 */
describe('Main', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    const noParsedPermissions = getParsedPermissionStructure();

    beforeEach(function () {
      props = {
        authRole: {
          permissions: [],
        },
        overlayClass: 'foo',
        parsedPermissions: noParsedPermissions,
        termsAccepted: false,
      };
      wrapper = shallow(<Main {...props} />);
    });

    it('should display a Main container', function () {
      expect(wrapper).to.have.length(1);
    });
  });

  describe('integration tests', function () {
    let props;
    let wrapper;
    let parsedPermissions;
    let mainInitialState;
    let store;

    beforeEach(function () {
      parsedPermissions = getParsedPermissionStructure();
      mainInitialState = Object.assign({}, initialState, {
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
              parsedPermissions,
              dataAccess: [],
            },
          },
        },
        reports: {
          data: [],
          isFetching: false,
          lastUpdated: null,
          error: null,
        },
      });
      store = configureStore(mainInitialState);

      props = {
        authRole: {
          permissions: [],
        },
        overlayClass: 'foo',
        termsAccepted: false,
      };

      moxios.install();
    });

    afterEach(function () {
      moxios.uninstall();
    });

    it.skip('should display a TransactionFinder route, if canSearch transactions', function () {
      moxios.stubRequest(/reports$/, {
        status: 200,
        response: [{ id: 5, lookerView: 'transaction_finder' }],
      });
      moxios.stubRequest(/metadata$/, {
        status: 200,
        response: { id: 5, lookerView: 'transaction_finder', reportColumns: [{ id: 20 }] },
      });

      const transactionParsedPermissions = Object.assign({}, parsedPermissions, { transactions: { canSearch: true } });
      props.parsedPermissions = transactionParsedPermissions;
      wrapper = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/transaction-finder']}>
            <Main {...props} />
          </MemoryRouter>
        </Provider>,
      );

      expect(wrapper.text()).to.contain('Transaction');
    });

    it('should display a Reports route, if canView reports', function () {
      moxios.stubRequest(/reports$/, {
        status: 200,
        response: [{
          id: 1,
          lookerView: 'disputes',
          displayOrder: 1,
          name: 'Foo',
          description: 'bar',
        }],
      });

      const reportParsedPermissions = Object.assign({}, parsedPermissions, { reports: { canView: true } });
      props.parsedPermissions = reportParsedPermissions;
      wrapper = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/reports']}>
            <Main {...props} />
          </MemoryRouter>
        </Provider>,
      );

      const routeComponent = wrapper.find(Route);

      expect(routeComponent.text()).to.contain('Reports');
    });

    it('should display a Messages route, if canView messages', function () {
      moxios.stubRequest(/.*/, {
        status: 200,
        response: [],
      });

      const messageParsedPermissions = Object.assign({}, parsedPermissions, { messages: { canView: true } });
      props.parsedPermissions = messageParsedPermissions;
      wrapper = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/messages']}>
            <Main {...props} />
          </MemoryRouter>
        </Provider>,
      );

      const routeComponent = wrapper.find(Route);
      expect(routeComponent.text()).to.contain('Messages');
    });

    it('should display a Statements route, if canView statements', function () {
      moxios.stubRequest(/.*/, {
        status: 200,
        response: [],
      });

      const statementParsedPermissions = Object.assign({}, parsedPermissions, { statements: { canView: true } });
      props.parsedPermissions = statementParsedPermissions;
      wrapper = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/statements']}>
            <Main {...props} />
          </MemoryRouter>
        </Provider>,
      );

      const routeComponent = wrapper.find(Route);
      expect(routeComponent.text()).to.contain('Statements');
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
