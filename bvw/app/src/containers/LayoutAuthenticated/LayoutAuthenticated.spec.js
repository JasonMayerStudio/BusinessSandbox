/* eslint-disable */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import { getUserPreferences } from '../../actions/preferenceActions';

/**
 * Import components to be tested
 */
import { LayoutAuthenticated } from './LayoutAuthenticated';
import TermsAndConditions from '../TermsAndConditions';
import Main from '../Main';
import Drawer from '../Drawer';
import SiteHeader from '../SiteHeader';

import Navigation from '../Navigation';

/**
 * The actual component unit test
 */
describe('LayoutAuthenticated container', function () {
  let props;
  let wrapper;

  describe('smoke test', function () {
    beforeEach(function () {
      const auth = getMockAuth();
      const getMockPreferences = sinon.stub();
      getMockPreferences.resolves({
        data: {
          language: 'en_gb',
        },
      });

      props = {
        auth,
        authActions: {},
        isAuthenticated: true,
        history: {},
        location: {
          pathname: '/',
          search: '',
        },
        parsedPermissions: {
          reports: {
            canView: true,
          },
        },
        preferences: {},
        getPreferences: getMockPreferences,
      };
      wrapper = shallow(<LayoutAuthenticated authenticated {...props} />);
    });

    it('should display a LayoutAuthenticated authenticated container', function () {
      expect(wrapper).to.have.length(1);
    });

    it('should have the correct class', function () {
      expect(wrapper.hasClass('page-wrapper'), 'does have class "page-wrapper"').to.be.true;
    });

    it('should not have a TermsAndConditions component as first child when terms and conditions have been accepted', function () {
      const firstChildElement = wrapper.find(TermsAndConditions);

      expect(firstChildElement).to.have.lengthOf(0);
    });

    it('should have a SiteHeader container as first child', function () {
      const firstChildElement = wrapper.childAt(0);

      expect(firstChildElement.type()).to.eq(SiteHeader);
    });

    it('should have a Navigation container as second child', function () {
      const secondChildElement = wrapper.childAt(1);

      expect(secondChildElement.type()).to.eq(Navigation);
    });

    it('should have a Main container as third child', function () {
      const thirdChildElement = wrapper.childAt(2);

      expect(thirdChildElement.type()).to.eq(Main);
    });

    it('should have a Drawer container as fourth child', function () {
      const fourthChildElement = wrapper.childAt(3);

      expect(fourthChildElement.type()).to.eq(Drawer);
    });

    it('should set its authRole state from its auth object prop', function () {
      const authRoleState = wrapper.state('authRole');

      expect(authRoleState).to.eql(props.auth.session.user.role);
    });
  });
});

function getMockAuth() {
  return {
    "isFetching": false,
    "session": {
      "sessionToken": 1,
      "user": {
        "email": "gp_tech_support_admin@globalpay.com",
        "firstName": "gp_tech",
        "lastName": "support_admin",
        "role": {
          "name": "Global_Payments_Tech_Support_Admin",
          "description": "Global Payments Tech Support Admin (en)",
          "key": "GLOBAL_PAYMENTS_TECH_SUPPORT_ADMIN",
          "id": 6,
          "permissions": [
            {
              "id": 1,
              "key": "CREATE_MERCHANT_USER",
              "name": "Create Merchant User",
              "description": "CREATE MERCHANT USER",
              "optional": false,
              "languageAbbr": "en"
            },
          ],
          "languageAbbr": "en"
        },
        "termsAndConditions": {
          "userId": 1,
          "hasAcceptedTerms": true,
        },
        "status": "ACTIVE",
        "userId": 1,
        "lastLoginDate": "1502841600000",
        "dataAccess": [
          {
            "id": 5,
            "label": "055",
            "organizations": []
          }
        ],
        "availableRoles": [
          {
            "name": "Merchant_User",
            "description": "Merchant User (en)",
            "key": "MERCHANT_USER",
            "id": 1,
            "permissions": [
              {
                "id": 1,
                "key": "CREATE_MERCHANT_USER",
                "name": "Create Merchant User",
                "description": "CREATE MERCHANT USER",
                "optional": true,
                "languageAbbr": "en"
              },
            ]
          }
        ]
      }
    }
  };
}
/* eslint-enable */
