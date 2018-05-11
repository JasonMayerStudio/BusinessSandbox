/* eslint-disable func-names, prefer-arrow-callback, dot-notation, no-unused-expressions */
import { expect } from 'chai';
import sinon from 'sinon';

/**
 * Import SUT
 */
import {
  configureHttpHeaders,
  isLanguageSupported,
  combineUserProperties,
  buildQueryStringFromObject,
  filterRequestPayloadObject,
} from './apiHelpers';

describe('apiHelpers', function () {
  describe('configureHttpHeaders', function () {
    const USER_TOKEN = 3;
    const auth = {
      session: {
        sessionToken: USER_TOKEN,
      },
    };

    const orgIds = [14, 15];

    const state = JSON.stringify({
      auth,
      orgIds,
    });
    let axios;

    beforeEach(function () {
      axios = {
        defaults: {
          headers: {
            common: {
              foo: true,
            },
          },
        },
      };

      sinon.stub(sessionStorage, 'getItem').callsFake(function () {
        return state;
      });
    });

    afterEach(function () {
      sessionStorage.getItem.restore();
    });

    it('should set the Accept header', function () {
      configureHttpHeaders(axios);

      expect(axios.defaults.headers.common['Accept']).to.equal('text/csv,application/pdf,application/json');
    });

    it('should set the Authorization header', function () {
      configureHttpHeaders(axios);

      expect(axios.defaults.headers.common['Authorization']).to.equal(USER_TOKEN);
    });

    it('should set the organizationFilter header', function () {
      configureHttpHeaders(axios);

      expect(axios.defaults.headers.common['organizationFilter']).to.equal(orgIds.join(','));
    });
  });

  describe('isLanguageSupported', function () {
    it('should find US English', function () {
      const langCode = 'en-US';

      const isSupported = isLanguageSupported(langCode);

      expect(isSupported).to.be.true;
    });

    it('should allow Canadian English', function () {
      const langCode = 'en-GB';

      const isSupported = isLanguageSupported(langCode);

      expect(isSupported).to.be.true;
    });

    it('should allow Canadian French', function () {
      const langCode = 'fr-CA';

      const isSupported = isLanguageSupported(langCode);

      expect(isSupported).to.be.true;
    });

    it('should allow Hans Chinese', function () {
      const langCode = 'zh-Hans';

      const isSupported = isLanguageSupported(langCode);

      expect(isSupported).to.be.true;
    });

    it('should allow Hant Chinese', function () {
      const langCode = 'zh-Hant';

      const isSupported = isLanguageSupported(langCode);

      expect(isSupported).to.be.true;
    });

    it('should NOT allow a non supported language', function () {
      const langCode = 'es';

      const isSupported = isLanguageSupported(langCode);

      expect(isSupported).to.be.false;
    });
  });

  describe('combineUserProperties', function () {
    it('should add a roleId to the user object', function () {
      const user = {
        firstName: 'Peter',
        lastName: 'Piper',
        email: 'ppiper@example.com',
      };
      const role = {
        name: 'ISO Employee',
        description: 'THIS IS A ROLE IN ENGLISH!',
        key: null,
        id: 4,
        permissions: [
          {
            id: 7,
            key: null,
            name: 'View_External_Users',
            description: 'THIS IS A PERMISSION IN ENGLISH!',
            optional: true,
            abbreviation: null,
          },
        ],
        value: 4,
        text: 'ISO Employee',
      };

      const combinedUser = combineUserProperties(user, role);

      expect(combinedUser.role.id).to.equal(role.id);
    });

    it('should add an empty array of permissionIds to the role when no permissions are given', function () {
      const user = {
        firstName: 'Peter',
        lastName: 'Piper',
        email: 'ppiper@example.com',
      };
      const role = {};
      const permissions = null;

      const combinedUser = combineUserProperties(user, role, permissions);

      expect(combinedUser.role.permissionIds).to.eql([]);
    });

    it('should add an array of permissionIds to the role when checked permissions are given', function () {
      const user = {
        firstName: 'Peter',
        lastName: 'Piper',
        email: 'ppiper@example.com',
      };
      const role = {};
      const permissions = [
        {
          id: 7,
          key: null,
          name: 'View_External_Users',
          description: 'THIS IS A PERMISSION IN ENGLISH!',
          optional: true,
          abbreviation: null,
          htmlId: 'View_External_Users',
          isChecked: false,
        },
        {
          id: 15,
          key: null,
          name: 'Upload_ISO_Business_Name',
          description: 'THIS IS A PERMISSION IN ENGLISH!',
          optional: false,
          abbreviation: null,
          htmlId: 'Upload_ISO_Business_Name',
          isChecked: true,
          readonly: true,
        },
        {
          id: 16,
          key: null,
          name: 'Edit_Personal_Information',
          description: 'THIS IS A PERMISSION IN ENGLISH!',
          optional: true,
          abbreviation: null,
          htmlId: 'Edit_Personal_Information',
          isChecked: false,
        },
        {
          id: 19,
          key: null,
          name: 'View_Transactions',
          description: 'THIS IS A PERMISSION IN ENGLISH!',
          optional: false,
          abbreviation: null,
          htmlId: 'View_Transactions',
          isChecked: true,
          readonly: true,
        },
      ];

      const combinedUser = combineUserProperties(user, role, permissions);

      expect(combinedUser.role.permissionIds).to.eql([15, 19]);
    });

    it('should add an empty array of organizationIds when no organizations are given', function () {
      const user = {
        firstName: 'Peter',
        lastName: 'Piper',
        email: 'ppiper@example.com',
      };
      const role = {};
      const permissions = [];
      const organizations = null;

      const combinedUser = combineUserProperties(user, role, permissions, organizations);

      expect(combinedUser.organizationIds).to.eql([]);
    });

    it('should add an array of organizationIds when organizations are given', function () {
      const user = {
        firstName: 'Peter',
        lastName: 'Piper',
        email: 'ppiper@example.com',
      };
      const role = {};
      const permissions = [];
      const organizationIds = [14, 23, 70];

      const combinedUser = combineUserProperties(user, role, permissions, organizationIds);

      expect(combinedUser.organizationIds).to.eql(organizationIds);
    });
  });

  describe('buildQueryStringFromObject', function () {
    it('should create a query string with a single key', function () {
      const chainAccess = { hasChainAccess: true };
      const expectedString = 'hasChainAccess=true';

      const actualString = buildQueryStringFromObject(chainAccess);

      expect(actualString).to.equal(expectedString);
    });

    it('should create a query string with multiple keys', function () {
      const obj = {
        corp: '001',
        region: '088',
        principal: 'AAA',
      };
      const expectedString = 'corp=001&principal=AAA&region=088';

      const actualString = buildQueryStringFromObject(obj);

      expect(actualString).to.equal(expectedString);
    });

    it('should return nothing for an empty object', function () {
      const emptyObj = {};
      const expectedString = '';

      const actualString = buildQueryStringFromObject(emptyObj);

      expect(actualString).to.equal(expectedString);
    });
  });

  describe('filterRequestPayloadObject', function () {
    it('should filter the object down to the allowed keys', function () {
      const originalObject = {
        abacus: 17,
        filterJson: '{}',
        id: 12,
        name: 'Margaret Hamilton',
        pi: 3.14,
      };
      const allowedKeys = [
        'filterJson',
        'id',
        'name',
      ];

      const filteredObject = filterRequestPayloadObject(originalObject, allowedKeys);

      const expectedObject = {
        filterJson: '{}',
        id: 12,
        name: 'Margaret Hamilton',
      };
      expect(filteredObject).to.eql(expectedObject);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, dot-notation */
