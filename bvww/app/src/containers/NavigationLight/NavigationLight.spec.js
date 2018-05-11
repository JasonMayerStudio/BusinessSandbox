/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { MemoryRouter } from 'react-router-dom';

import AdminIcon from 'Components/icons/AdminIcon';

import rootReducer from '../../reducers';

/**
 * Import components to be tested
 */
import { NavigationLight } from './NavigationLight';

/**
 * The actual component unit test
 */
describe('NavigationLight', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        auth: {},
        history: {},
        location: {
          pathname: '/',
        },
        language: 'fr-CA',
        getMessageCount: () => {},
        overlayClass: '',
        parsedPermissions: {
          users: {
            canView: true,
          },
          reports: {
            canView: true,
          },
          messages: {
            canView: true,
          },
          statements: {
            canView: true,
          },
          transactions: {
            canSearch: true,
          },
        },
        hierarchyReports: [{
          id: 6,
        }],
      };

      wrapper = shallow(<NavigationLight {...props} />);
    });

    it('should display a NavigationLight container', function () {
      expect(wrapper).to.have.length(1);
    });
  });

  describe('props tests', function () {
    const store = createStore(rootReducer);
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        auth: {
          session: {
            sessionToken: 'ey',
            user: {
              firstName: 'Leroy',
              lastName: 'Jenkins',
              role: {
                name: 'GP Tech Support Admin',
              },
            },
          },
        },
        history: {},
        location: {
          pathname: '/',
        },
        language: 'fr-CA',
        getMessageCount: () => {},
        overlayClass: '',
        parsedPermissions: {
          users: {
            canView: true,
          },
          reports: {
            canView: true,
          },
          messages: {
            canView: true,
          },
          statements: {
            canView: true,
          },
          transactions: {
            canSearch: true,
          },
        },
        hierarchyReports: [{
          id: 6,
        }],
      };
      wrapper = mount(
        <Provider store={store}>
          <MemoryRouter>
            <NavigationLight {...props} />
          </MemoryRouter>
        </Provider>,
      );
    });

    it('should diplay a list of nav items', function () {
      const navMenu = wrapper.find('#primary-nav');

      const navItems = navMenu.find('.vertical-nav-item');

      expect(navItems).to.have.length.above(1);
    });

    it('should an Admin nav item when the user has an admin permission', function () {
      const adminIcon = wrapper.find(AdminIcon);

      expect(adminIcon).to.have.length(1);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
