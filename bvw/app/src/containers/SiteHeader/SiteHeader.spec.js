/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { MemoryRouter } from 'react-router-dom';

import GlobalSelectorFlag from '../GlobalSelectorFlag';
import rootReducer from '../../reducers';

/**
 * Import components to be tested
 */
import { SiteHeader } from './SiteHeader';

/**
 * The actual component unit test
 */
describe('SiteHeader', function () {
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
        navigationToggled: false,
        parsedPermissions: {
          personalInformation: {
            canEdit: true,
          },
        },
        reseedUserPrefs: () => {},
        toggleNavigation: () => {},
      };
      wrapper = shallow(<SiteHeader {...props} />);
    });

    it('should display a SiteHeader container', function () {
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
                name: 'Account User',
              },
            },
          },
        },
        history: {},
        location: {
          pathname: '/',
        },
        navigationToggled: false,
        parsedPermissions: {
          personalInformation: {
            canEdit: true,
          },
        },
        ref: (ref) => {
          this.componentInstance = ref;
        },
        reseedUserPrefs: () => {},
        toggleNavigation: () => {},
      };
      wrapper = mount(
        <Provider store={store}>
          <MemoryRouter>
            <SiteHeader {...props} />
          </MemoryRouter>
        </Provider>,
      );
    });

    it('should diplay a GlobalSelectorFlag in the header', function () {
      const globalSelectorFlag = wrapper.find(GlobalSelectorFlag);

      expect(globalSelectorFlag).to.have.length.above(0);
    });

    it("should diplay the user's and avatar in the header", function () {
      const siteHeader = wrapper.find(SiteHeader);
      const avatar = siteHeader.find('.UserAvatar--inner');

      expect(avatar.text()).to.have.length.above(0);
    });

    // it('should diplay the user name and role name in the header', function () {
    //   const siteHeader = wrapper.find(SiteHeader);
    //   const menuName = siteHeader.find('.user-name');
    //   const menuRole = siteHeader.find('.user-role');

    //   expect(menuName.text()).to.contain(props.auth.session.user.firstName);
    //   expect(menuName.text()).to.contain(props.auth.session.user.lastName);
    //   expect(menuRole.text()).to.contain(props.auth.session.user.role.name);
    // });

    it('should open the user menu when its button is clicked', function () {
      const siteHeader = wrapper.find(SiteHeader);
      const menuTrigger = siteHeader.find('.user-menu');

      menuTrigger.simulate('click');

      expect(this.componentInstance.state.menuClicked).to.be.true;
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
