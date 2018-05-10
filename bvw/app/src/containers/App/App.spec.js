/* eslint-disable */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import { getUserPreferences } from '../../actions/preferenceActions';

/**
 * Import components to be tested
 */
import { App } from './App';
import Main from '../Main';
import Drawer from '../Drawer';

import Navigation from '..//Navigation';

/**
 * The actual component unit test
 */
describe('App', function () {
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
        location: {
          pathname: '/',
          search: '',
        },
        preferences: {},
        getPreferences: getMockPreferences,
      };
      wrapper = shallow(<App {...props} />);
    });

    it('should display an App containter', function () {
      expect(wrapper).to.have.length(1);
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
