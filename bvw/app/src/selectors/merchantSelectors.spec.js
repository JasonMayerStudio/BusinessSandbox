/* eslint-disable func-names, prefer-arrow-callback */

import { expect } from 'chai';
import { getMerchantsForTable } from './merchantSelectors';

describe('User selectors', function () {
  describe('getUsers', function () {
    it('should return an empty array when given an empty array', function () {
      const merchantResponse = [];
      const expectedUserResponse = [];

      const merchants = getMerchantsForTable(merchantResponse);

      expect(merchants).to.eql(expectedUserResponse);
    });

    it('should return at least one merchant', function () {
      const merchantResponse = [
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
      ];

      const expectedUserResponse = [
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
          fullAddress: '749 Nikolaus Overpass, Suite 708, Yost View, MO 11144 United States',
          hasAccess: false,
          id: 603,
          merchantId: 8681,
          merchant_id: '0060282947379',
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
      ];

      const merchants = getMerchantsForTable(merchantResponse);

      expect(merchants).to.eql(expectedUserResponse);
    });

    it('should omit missing address parts in return', function () {
      const merchantResponse = [
        {
          acquirer: 'Albina Lynch',
          address1: '749 Nikolaus Overpass',
          address2: '',
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
      ];

      const expectedUserResponse = [
        {
          acquirer: 'Albina Lynch',
          address1: '749 Nikolaus Overpass',
          address2: '',
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
          fullAddress: '749 Nikolaus Overpass, Yost View, MO 11144 United States',
          hasAccess: false,
          id: 603,
          merchantId: 8681,
          merchant_id: '0060282947379',
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
      ];

      const merchants = getMerchantsForTable(merchantResponse);

      expect(merchants).to.eql(expectedUserResponse);
    });

    it('should return multiple merchants', function () {
      const merchantResponse = [
        {
          acquirer: 'Carrie Krajcik',
          address1: '16945 Dasia Dale',
          address2: 'Apt. 402',
          associate: '071',
          associateId: 5,
          attention: 'Camille Williamson Ms.',
          businessName: 'Legros, Runte and Upton',
          chain: '006',
          chainId: 45,
          city: 'Margaret',
          corp: '058',
          corpId: 9651,
          country: 'United States',
          email: 'Rodrick.Tromp@hotmail.com',
          fax: '721-317-0723',
          id: 990,
          merchantId: 1636,
          merchantNumber: '9644364657673',
          paperStatements: false,
          phoneNumber1: '844-640-2923',
          phoneNumber2: '483-899-9056',
          postalCode: '27978',
          principal: '009',
          principalId: 856,
          region: '078',
          regionId: 125,
          state: 'GA',
        },
        {
          acquirer: 'Albina Lynch',
          address1: '749 Nikolaus Overpass',
          address2: '',
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
      ];

      const expectedUserResponse = [
        {
          acquirer: 'Carrie Krajcik',
          address1: '16945 Dasia Dale',
          address2: 'Apt. 402',
          associate: '071',
          associateId: 5,
          attention: 'Camille Williamson Ms.',
          businessName: 'Legros, Runte and Upton',
          chain: '006',
          chainId: 45,
          city: 'Margaret',
          corp: '058',
          corpId: 9651,
          country: 'United States',
          dbaName: 'Legros, Runte and Upton',
          email: 'Rodrick.Tromp@hotmail.com',
          fax: '721-317-0723',
          fullAddress: '16945 Dasia Dale, Apt. 402, Margaret, GA 27978 United States',
          hasAccess: false,
          id: 990,
          merchantId: 1636,
          merchant_id: '9644364657673',
          merchantNumber: '9644364657673',
          paperStatements: false,
          phoneNumber1: '844-640-2923',
          phoneNumber2: '483-899-9056',
          postalCode: '27978',
          principal: '009',
          principalId: 856,
          region: '078',
          regionId: 125,
          state: 'GA',
        },
        {
          acquirer: 'Albina Lynch',
          address1: '749 Nikolaus Overpass',
          address2: '',
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
          fullAddress: '749 Nikolaus Overpass, Yost View, MO 11144 United States',
          hasAccess: false,
          id: 603,
          merchantId: 8681,
          merchant_id: '0060282947379',
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
      ];

      const merchants = getMerchantsForTable(merchantResponse);

      expect(merchants).to.eql(expectedUserResponse);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback */
