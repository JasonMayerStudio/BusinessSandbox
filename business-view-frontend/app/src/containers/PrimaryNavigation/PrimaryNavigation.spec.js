/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

import NavItem from 'Components/nav-item/NavItem.js';

/**
 * Import components to be tested
 */
import PrimaryNavigation from '../PrimaryNavigation';

/**
 * The actual component unit test
 */
describe('PrimaryNavigation', function () {
  describe('smoke tests', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        user: {
          parsedPermissions: {
            merchants: {
              canView: false,
            },
            reports: {
              canView: false,
            },
            transactions: {
              canSearch: false,
            },
            statements: {
              canView: false,
            },
            messages: {
              canView: false,
            },
            users: {
              canView: false,
            },
          },
          hierarchyReports: [],
          dataAccess: [],
        },
        language: 'en-GB',
        messages: {},
        subNavTriggered: () => {},
        transitionEnded: true,
      };
    });

    it('should display a PrimaryNavigation', function () {
      wrapper = shallow(<PrimaryNavigation {...props} />);
      expect(wrapper).to.have.length(1);
    });

    it('should display at least the Dashboard NavItem, even when there are no permissions for other NavItems', function () {
      wrapper = mount(
        <MemoryRouter>
          <PrimaryNavigation {...props} />
        </MemoryRouter>,
      );

      const navItems = wrapper.find(NavItem);
      expect(navItems).to.have.length.above(0);
      expect(navItems.childAt(0).text()).to.contain('Home');
    });
  });

  describe('props tests', function () {
    it('should display at least one NavItem, with no permissions', function () {
      const props = {
        user: {
          parsedPermissions: {
            merchants: {
              canView: true,
            },
            reports: {
              canView: true,
            },
            transactions: {
              canSearch: true,
            },
            statements: {
              canView: true,
            },
            messages: {
              canView: true,
            },
            users: {
              canView: true,
            },
          },
          hierarchyReports: [{
            id: 6,
          }],
          dataAccess: [
            {
              id: 3,
              label: '055',
              hasAccess: false,
              organizations: [
                {
                  id: 12,
                  label: '65',
                  hasAccess: false,
                  organizations: [
                    {
                      id: 28,
                      label: '001',
                      hasAccess: false,
                      organizations: [
                        {
                          id: 60,
                          label: '001',
                          hasAccess: false,
                          organizations: [
                            {
                              id: 125,
                              label: '000',
                              hasAccess: false,
                              organizations: [
                                {
                                  id: 573,
                                  label: '1670272980',
                                  name: 'ALL VALLEY WSHR-ROCKY',
                                  hasAccess: true,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        language: 'en-GB',
        messages: {},
        subNavTriggered: () => {},
        transitionEnded: true,
      };

      const wrapper = mount(
        <MemoryRouter>
          <PrimaryNavigation {...props} />
        </MemoryRouter>,
      );

      const navItems = wrapper.find(NavItem);

      expect(navItems).to.have.length(9);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
