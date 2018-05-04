/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import { expect } from 'chai';

import { getMockUser } from 'Helpers/testHelpers/testUserMocks';

import {
  getUsersForTable,
  getReportLimits,
  checkForAcquirerUser,
  checkForMerchantUser,
} from './userSelectors';

describe('User selectors', function () {
  describe('getUsers', function () {
    it('should return an empty array when given an empty array', function () {
      const userResponse = [];
      const expectedUserResponse = [];
      const preferences = {
        language: 'en-US',
      };

      const users = getUsersForTable(userResponse, preferences);

      expect(users).to.eql(expectedUserResponse);
    });

    it('should return at least one user', function () {
      const preferences = {
        language: 'en-US',
      };

      const userResponse = [
        {
          email: 'jdoe@gmail.com',
          firstName: 'John',
          lastName: 'Doe',
          role: 'GP Employee',
          lastLoginDate: '1502323200000',
          status: 'PENDING',
          statusKey: 'PENDING',
          userId: 7,
          acquirer: 'Acquirer Name',
          merchants: [
            {
              acquirer: 'Albina Lynch',
              address1: '749 Nikolaus Overpass',
              address2: 'Suite 708',
              associate: '098',
              associateId: 1000,
              attention: 'Pedro Koelpin',
              businessName: 'Champlin Inc',
              chain: '017',
              chainId: 405,
              city: 'Yost View',
              corp: '043',
              corpId: 2243,
              country: 'United States',
              dbaName: 'Champlin Inc',
              email: 'Isabel28@hotmail.com',
              fax: '419-714-0388',
              id: 603,
              merchantId: 8681,
              merchantNumber: '0060282947379',
              paperStatements: true,
              phoneNumber1: '138-958-5320',
              phoneNumber2: '496-228-9287',
              postalCode: '11144',
              principal: '039',
              principalId: 593,
              region: '093',
              regionId: 735,
              state: 'MO',
            },
          ],
        },
      ];

      const expectedUserResponse = [
        {
          email: 'jdoe@gmail.com',
          name: 'John Doe',
          firstName: 'John',
          lastName: 'Doe',
          role: {},
          roleName: 'GP Employee',
          roleKey: undefined,
          permissions: null,
          primaryMerchantId: undefined,
          lastLoginDate: '1502323200000',
          statusData: {
            value: 'pending-invite',
            text: 'Pending Invite',
          },
          status: 'Pending Invite',
          statusKey: 'PENDING',
          userId: 7,
          acquirer: 'Acquirer Name',
          dataAccess: null,
          merchants: [
            {
              acquirer: 'Albina Lynch',
              address1: '749 Nikolaus Overpass',
              address2: 'Suite 708',
              associate: '098',
              associateId: 1000,
              attention: 'Pedro Koelpin',
              businessName: 'Champlin Inc',
              chain: '017',
              chainId: 405,
              city: 'Yost View',
              corp: '043',
              corpId: 2243,
              country: 'United States',
              dbaName: 'Champlin Inc',
              email: 'Isabel28@hotmail.com',
              fax: '419-714-0388',
              fullAddress: '749 Nikolaus Overpass, Suite 708, Yost View, MO 11144',
              hasAccess: false,
              id: 603,
              merchantId: 8681,
              merchantNumber: '0060282947379',
              merchant_id: '0060282947379',
              paperStatements: true,
              phoneNumber1: '138-958-5320',
              phoneNumber2: '496-228-9287',
              postalCode: '11144',
              principal: '039',
              principalId: 593,
              region: '093',
              regionId: 735,
              state: 'MO',
            },
          ],
        },
      ];

      const users = getUsersForTable(userResponse, preferences.language);

      expect(users).to.eql(expectedUserResponse);
    });

    it('should return multiple users', function () {
      const preferences = {
        language: 'en-US',
      };

      const userResponse = [
        {
          email: 'jdoe@gmail.com',
          firstName: 'John',
          lastName: 'Doe',
          role: 'GP Employee',
          lastLoginDate: '1502323200000',
          status: 'PENDING',
          statusKey: 'PENDING',
          userId: 7,
          acquirer: 'Acquirer Name',
          merchants: [
            {
              acquirer: 'Albina Lynch',
              address1: '749 Nikolaus Overpass',
              address2: 'Suite 708',
              associate: '098',
              associateId: 1000,
              attention: 'Pedro Koelpin',
              businessName: 'Champlin Inc',
              chain: '017',
              chainId: 405,
              city: 'Yost View',
              corp: '043',
              corpId: 2243,
              country: 'United States',
              email: 'Isabel28@hotmail.com',
              fax: '419-714-0388',
              id: 603,
              merchantId: 8681,
              merchantNumber: '0060282947379',
              paperStatements: true,
              phoneNumber1: '138-958-5320',
              phoneNumber2: '496-228-9287',
              postalCode: '11144',
              principal: '039',
              principalId: 593,
              region: '093',
              regionId: 735,
              state: 'MO',
            },
          ],
        },
        {
          email: 'kaityhallman@gmail.com',
          firstName: 'Kaity',
          lastName: 'Hallman',
          role: 'GP Admin',
          lastLoginDate: '1502323200000',
          status: 'ACTIVE',
          statusKey: 'ACTIVE',
          userId: 3,
          acquirer: 'Acquirer Name',
          merchants: [
            {
              acquirer: 'Albina Lynch',
              address1: '749 Nikolaus Overpass',
              address2: 'Suite 708',
              associate: '098',
              associateId: 1000,
              attention: 'Pedro Koelpin',
              businessName: 'Champlin Inc',
              chain: '017',
              chainId: 405,
              city: 'Yost View',
              corp: '043',
              corpId: 2243,
              country: 'United States',
              email: 'Isabel28@hotmail.com',
              fax: '419-714-0388',
              id: 603,
              merchantId: 8681,
              merchantNumber: '0060282947379',
              paperStatements: true,
              phoneNumber1: '138-958-5320',
              phoneNumber2: '496-228-9287',
              postalCode: '11144',
              principal: '039',
              principalId: 593,
              region: '093',
              regionId: 735,
              state: 'MO',
            },
          ],
        },
      ];

      const expectedUserResponse = [
        {
          acquirer: 'Acquirer Name',
          email: 'kaityhallman@gmail.com',
          firstName: 'Kaity',
          lastName: 'Hallman',
          name: 'Kaity Hallman',
          lastLoginDate: '1502323200000',
          roleName: 'GP Admin',
          roleKey: undefined,
          role: {},
          permissions: null,
          primaryMerchantId: undefined,
          status: 'Activated',
          statusData: {
            text: 'Activated',
            value: 'activated',
          },
          statusKey: 'ACTIVE',
          dataAccess: null,
          merchants: [
            {
              acquirer: 'Albina Lynch',
              address1: '749 Nikolaus Overpass',
              address2: 'Suite 708',
              associate: '098',
              associateId: 1000,
              attention: 'Pedro Koelpin',
              businessName: 'Champlin Inc',
              chain: '017',
              chainId: 405,
              city: 'Yost View',
              corp: '043',
              corpId: 2243,
              country: 'United States',
              email: 'Isabel28@hotmail.com',
              fax: '419-714-0388',
              hasAccess: false,
              id: 603,
              merchantId: 8681,
              merchantNumber: '0060282947379',
              paperStatements: true,
              phoneNumber1: '138-958-5320',
              phoneNumber2: '496-228-9287',
              postalCode: '11144',
              principal: '039',
              principalId: 593,
              region: '093',
              regionId: 735,
              state: 'MO',
              dbaName: 'Champlin Inc',
              fullAddress: '749 Nikolaus Overpass, Suite 708, Yost View, MO 11144',
              merchant_id: '0060282947379',
            },
          ],
          userId: 3,
        },
        {
          acquirer: 'Acquirer Name',
          email: 'jdoe@gmail.com',
          firstName: 'John',
          lastName: 'Doe',
          name: 'John Doe',
          lastLoginDate: '1502323200000',
          roleName: 'GP Employee',
          roleKey: undefined,
          role: {},
          permissions: null,
          primaryMerchantId: undefined,
          status: 'Pending Invite',
          statusData: {
            text: 'Pending Invite',
            value: 'pending-invite',
          },
          statusKey: 'PENDING',
          dataAccess: null,
          merchants: [
            {
              acquirer: 'Albina Lynch',
              address1: '749 Nikolaus Overpass',
              address2: 'Suite 708',
              associate: '098',
              associateId: 1000,
              attention: 'Pedro Koelpin',
              businessName: 'Champlin Inc',
              chain: '017',
              chainId: 405,
              city: 'Yost View',
              corp: '043',
              corpId: 2243,
              country: 'United States',
              email: 'Isabel28@hotmail.com',
              fax: '419-714-0388',
              hasAccess: false,
              id: 603,
              merchantId: 8681,
              merchantNumber: '0060282947379',
              paperStatements: true,
              phoneNumber1: '138-958-5320',
              phoneNumber2: '496-228-9287',
              postalCode: '11144',
              principal: '039',
              principalId: 593,
              region: '093',
              regionId: 735,
              state: 'MO',
              dbaName: 'Champlin Inc',
              fullAddress: '749 Nikolaus Overpass, Suite 708, Yost View, MO 11144',
              merchant_id: '0060282947379',
            },
          ],
          userId: 7,
        },
      ];

      const users = getUsersForTable(userResponse, preferences.language);

      expect(users).to.eql(expectedUserResponse);
    });
  });

  describe('getReportLimits', function () {
    it('should contain a true flag if the user is some kind of merchant user', function () {
      const mockMerchantUser = getMockUser('MERCHANT_USER');

      const userLimits = getReportLimits(mockMerchantUser);

      expect(userLimits.isMerchant).to.be.true;
    });

    it('should contain a false flag if the user is not some kind of merchant user', function () {
      const mockGlobalEmployeeUser = getMockUser('GLOBAL_PAYMENTS_EMPLOYEE');

      const userLimits = getReportLimits(mockGlobalEmployeeUser);

      expect(userLimits.isMerchant).to.be.false;
    });

    it('should contain the number of months reporting data a merchant type user has access to', function () {
      const mockMerchantUser = getMockUser('MERCHANT_USER');

      const userLimits = getReportLimits(mockMerchantUser);

      expect(userLimits.maxMonthsAccess).to.equal(mockMerchantUser.maxMonths);
    });
  });

  describe('checkForAcquirerUser', function () {
    it('should return true for an acquirer user role', function () {
      const mockAcquirerUser = getMockUser('MERCHANT_USER');
      mockAcquirerUser.role.key = 'ACQUIRER_USER';

      const isAcquirerUser = checkForAcquirerUser(mockAcquirerUser.role);

      expect(isAcquirerUser).to.be.true;
    });

    it('should contain a false flag if the user is not some kind of acquirer user', function () {
      const mockGlobalEmployeeUser = getMockUser('GLOBAL_PAYMENTS_EMPLOYEE');

      const isAcquirerUser = checkForAcquirerUser(mockGlobalEmployeeUser.role);

      expect(isAcquirerUser).to.be.false;
    });
  });

  describe('checkForMerchantUser', function () {
    it('should return true for a merchant user role', function () {
      const mockMerchantUser = getMockUser('MERCHANT_USER');

      const isMerchantUser = checkForMerchantUser(mockMerchantUser.role);

      expect(isMerchantUser).to.be.true;
    });

    it('should contain a false flag if the user is not some kind of merchant user', function () {
      const mockGlobalEmployeeUser = getMockUser('GLOBAL_PAYMENTS_EMPLOYEE');

      const isMerchantUser = checkForMerchantUser(mockGlobalEmployeeUser.role);

      expect(isMerchantUser).to.be.false;
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
