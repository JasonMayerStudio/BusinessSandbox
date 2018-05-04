/* eslint-disable */

import { expect } from 'chai';
import {
  mapDataAccessList,
  getAllSelectableMerchants,
  getNewSelectorFilter,
  getLowestSelectedOrgs,
  getCurrentDataAccess,
} from './dataAccessSelectors';

import { getDataAccess, getAllMerchantsTestResponse, getLimitedDataAccess } from 'Helpers/testHelpers/testMocks.js';

describe('SelectionList selectors', function () {
  describe('mapDataAccessList', function () {
    it('should return an empty array when given an empty array', function () {
      const dataAccess = [];
      const expectedResponse = [];

      const augmentedDataAccess = mapDataAccessList(dataAccess);

      expect(augmentedDataAccess).to.eql(expectedResponse);
    });

    it('should map the label field to mainLine by default', function () {
      const dataAccess = [
        { label: 'George I', id: 3 },
        { label: 'George II', id: 4 },
        { label: 'George III', id: 5 },
      ];
      const expectedResponse = [
        { label: 'George I', id: 3, mainLine: 'George I' },
        { label: 'George II', id: 4, mainLine: 'George II' },
        { label: 'George III', id: 5, mainLine: 'George III' },
      ];

      const augmentedDataAccess = mapDataAccessList(dataAccess);

      expect(augmentedDataAccess).to.eql(expectedResponse);
    });

    it('should map the specified field to mainLine', function () {
      const dataAccess = [
        { name: 'George I', label: '055', id: 3 },
        { name: 'George II', label: '057', id: 4 },
        { name: 'George III', label: '059', id: 5 },
      ];
      const expectedResponse = [
        { name: 'George I', label: '055', id: 3, mainLine: '055' },
        { name: 'George II', label: '057', id: 4, mainLine: '057' },
        { name: 'George III', label: '059', id: 5, mainLine: '059' },
      ];
      const mainField = 'label';

      const augmentedDataAccess = mapDataAccessList(dataAccess, mainField);

      expect(augmentedDataAccess).to.eql(expectedResponse);
    });

    it('should optionally map the specified field to subLine', function () {
      const dataAccess = [
        { name: 'George I',
          label: '055',
          email: 'georgei@gov.uk',
          id: 3,
        },
        { name: 'George II',
          label: '057',
          email: 'georgeii@gov.uk',
          id: 4,
        },
        { name: 'George III',
          label: '059',
          email: 'georgeiii@gov.uk',
          id: 5,
        },
      ];
      const expectedResponse = [
        { name: 'George I',
          label: '055',
          email: 'georgei@gov.uk',
          id: 3,
          mainLine: 'George I',
          subLine: 'georgei@gov.uk',
        },
        { name: 'George II',
          label: '057',
          email: 'georgeii@gov.uk',
          id: 4,
          mainLine: 'George II',
          subLine: 'georgeii@gov.uk',
        },
        { name: 'George III',
          label: '059',
          email: 'georgeiii@gov.uk',
          id: 5,
          mainLine: 'George III',
          subLine: 'georgeiii@gov.uk',
        },
      ];
      const mainField = 'name';
      const subField = 'email';

      const augmentedDataAccess = mapDataAccessList(dataAccess, mainField, subField);

      expect(augmentedDataAccess).to.eql(expectedResponse);
    });
  });

  describe('getAllSelectableMerchants', function () {
    it('should return an empty array when given an empty array', function () {
      const dataAccess = [];
      const expectedResponse = [];

      const allAvailableMerchants = getAllSelectableMerchants(dataAccess);

      expect(allAvailableMerchants).to.eql(expectedResponse);
    });

    it('should return one merchant when the chain only has one merchant', function () {
      const dataAccess = getDataAccess();
      const expectedResponse = [{
        id: 320,
        label: '0000062331615704',
        organizations: [],
        parentIds: [195, 129],
      }];

      const startParentId = dataAccess[0].organizations[0].organizations[0].organizations[1].id;
      const allAvailableMerchants = getAllSelectableMerchants(dataAccess[0].organizations[0].organizations[0].organizations[1].organizations, [startParentId]);

      expect(allAvailableMerchants).to.eql(expectedResponse);
    });

    it('should return all the merchants in one chain', function () {
      const dataAccess = getDataAccess();
      const expectedResponse = [
        { id: 323, label: '0000062243315704', organizations: [], parentIds: [195, 130] },
        { id: 321, label: '0000062243955704', organizations: [], parentIds: [195, 130] },
        { id: 324, label: '0000062242445704', organizations: [], parentIds: [195, 130] },
        { id: 322, label: '0000062243405704', organizations: [], parentIds: [195, 130] }
      ];

      const startParentId = dataAccess[0].organizations[0].organizations[0].organizations[1].id;
      const allAvailableMerchants = getAllSelectableMerchants(dataAccess[0].organizations[0].organizations[0].organizations[0].organizations, [startParentId]);

      expect(allAvailableMerchants).to.eql(expectedResponse);
    });

    it('should return all the merchants in two sibling chains', function () {
      const dataAccess = getDataAccess();
      const expectedResponse = [
        { id: 323, label: '0000062243315704', organizations: [], parentIds: [59, 196, 130] },
        { id: 321, label: '0000062243955704', organizations: [], parentIds: [59, 196, 130] },
        { id: 324, label: '0000062242445704', organizations: [], parentIds: [59, 196, 130] },
        { id: 322, label: '0000062243405704', organizations: [], parentIds: [59, 196, 130] },
        { id: 320, label: '0000062331615704', organizations: [], parentIds: [59, 195, 129] }
      ];

      const startParentId = dataAccess[0].organizations[0].organizations[0].id;
      const allAvailableMerchants = getAllSelectableMerchants(dataAccess[0].organizations[0].organizations[0].organizations, [startParentId]);

      expect(allAvailableMerchants).to.eql(expectedResponse);
    });

    it('should return all the merchants in one corp', function () {
      const dataAccess = getDataAccess();
      const expectedResponse = [
        { id: 226, label: '0008788270082700', organizations: [], parentIds: [15, 22, 37, 163, 100] },
        { id: 227, label: '0008788270082214', organizations: [], parentIds: [15, 22, 37, 163, 100] }
      ];

      const startParentId = dataAccess[2].id;
      const allAvailableMerchants = getAllSelectableMerchants(dataAccess[2].organizations, [startParentId]);

      expect(allAvailableMerchants).to.eql(expectedResponse);
    });

    it('should return all the merchants in all corps', function () {
      const dataAccess = getDataAccess();
      const expectedResponse = getAllMerchantsTestResponse();

      const startParentId = dataAccess;
      const allAvailableMerchants = getAllSelectableMerchants(dataAccess, []);

      expect(allAvailableMerchants).to.eql(expectedResponse);
    });
  });

  describe('getNewSelectorFilter', function () {
    it('should return an object with the appropriate helper fields', function () {
      const dataAccess = getDataAccess();
      const expectedResponse = {
        startData: dataAccess,
        corps: dataAccess,
        selectedCorp: null,
        regions: [],
        selectedRegion: null,
        principals: [],
        selectedPrincipal: null,
        associates: [],
        selectedAssociate: null,
        chains: [],
        selectedChain: null,
        availableMerchants: [],
        selectedMerchants: null,
      };

      const newSelectorFilter = getNewSelectorFilter(dataAccess);

      expect(newSelectorFilter).to.eql(expectedResponse);
    });
  });

  describe('getLowestSelectedOrgs', function () {
    it('should return an array of the lowest selected org IDs in a org filter, corp level', function () {
      const startData = getDataAccess();
      startData[2].selected = true;
      const expectedResponse = [startData[2].id];

      const accessList = getLowestSelectedOrgs(startData);

      expect(accessList).to.eql(expectedResponse)
    });

    it('should return an array of the lowest selected org IDs in a org filter, region level', function () {
      const startData = getDataAccess();
      startData[0].organizations[1].selected = true;
      const expectedResponse = [startData[0].organizations[1].id];

      const accessList = getLowestSelectedOrgs(startData);

      expect(accessList).to.eql(expectedResponse)
    });

    it('should return an array of the lowest selected org IDs in a org filter, principal level', function () {
      const startData = getDataAccess();
      startData[0].organizations[1].organizations[1].selected = true;
      const expectedResponse = [startData[0].organizations[1].organizations[1].id];

      const accessList = getLowestSelectedOrgs(startData);

      expect(accessList).to.eql(expectedResponse)
    });

    it('should return an array of the lowest selected org IDs in a org filter, associate level', function () {
      const startData = getDataAccess();
      startData[0].organizations[0].organizations[1].organizations[0].selected = true;
      const expectedResponse = [startData[0].organizations[0].organizations[1].organizations[0].id];

      const accessList = getLowestSelectedOrgs(startData);

      expect(accessList).to.eql(expectedResponse)
    });

    it('should return an array of the lowest selected org IDs in a org filter, chain level', function () {
      const startData = getDataAccess();
      startData[0].organizations[0].organizations[0].organizations[0].organizations[0].selected = true;
      const expectedResponse = [startData[0].organizations[0].organizations[0].organizations[0].organizations[0].id];

      const accessList = getLowestSelectedOrgs(startData);

      expect(accessList).to.eql(expectedResponse)
    });

    it('should return an array of the lowest selected org IDs in a org filter, merchant level, one merchant', function () {
      const startData = getDataAccess();
      startData[0].organizations[0].organizations[0].organizations[0].organizations[0].organizations[2].selected = true;
      const expectedResponse = [startData[0].organizations[0].organizations[0].organizations[0].organizations[0].organizations[2].id];

      const accessList = getLowestSelectedOrgs(startData);

      expect(accessList).to.eql(expectedResponse)
    });

    it('should return an array of the lowest selected org IDs in a org filter, merchant level, multiple merchants', function () {
      const startData = getDataAccess();
      startData[0].organizations[0].organizations[0].organizations[0].organizations[0].organizations[0].selected = true;
      startData[0].organizations[0].organizations[0].organizations[0].organizations[0].organizations[2].selected = true;
      const expectedResponse = [
        startData[0].organizations[0].organizations[0].organizations[0].organizations[0].organizations[0].id,
        startData[0].organizations[0].organizations[0].organizations[0].organizations[0].organizations[2].id,
      ];

      const accessList = getLowestSelectedOrgs(startData);

      expect(accessList).to.eql(expectedResponse)
    });
  });

  describe('getCurrentDataAccess', function () {
    describe('single access row only, with access at different levels', function() {
      it('should return an empty array when given an empty array', function () {
        const dataAccess = [];
        const expectedResponse = [];

        const currentDataAccess = getCurrentDataAccess(dataAccess);

        expect(currentDataAccess).to.eql(expectedResponse);
      });

      it('should return a single corp when given a single corp access', function () {
        const dataAccess = getLimitedDataAccess();

        const singleChain = dataAccess.slice(0, 1); // first one has multiple merchants
        singleChain[0].hasAccess = true;
        const expectedResponse = {
          corp: { id: singleChain[0].id },
          region: { label: 'All' },
          principal: { label: 'All' },
          associate: { label: 'All' },
          chain: { label: 'All' },
          merchant: { label: 'All' },
        };

        const currentDataAccess = getCurrentDataAccess(singleChain);

        expect(currentDataAccess).to.have.lengthOf(1);
        expect(currentDataAccess[0].corp.endOfChain).to.be.true;

        expect(currentDataAccess[0].corp.id).to.eql(expectedResponse.corp.id);
        expect(currentDataAccess[0].region.label).to.eql(expectedResponse.region.label);
        expect(currentDataAccess[0].principal.label).to.eql(expectedResponse.principal.label);
        expect(currentDataAccess[0].associate.label).to.eql(expectedResponse.associate.label);
        expect(currentDataAccess[0].chain.label).to.eql(expectedResponse.chain.label);
        expect(currentDataAccess[0].merchant.label).to.eql(expectedResponse.merchant.label);
      });

      it('should return a single region when given a single region access', function () {
        const dataAccess = getLimitedDataAccess();

        const singleChain = dataAccess.slice(0, 1); // first one has multiple merchants
        singleChain[0].organizations[0].hasAccess = true;
        const expectedResponse = {
          corp: { id: singleChain[0].id },
          region: { id: singleChain[0].organizations[0].id },
          principal: { label: 'All' },
          associate: { label: 'All' },
          chain: { label: 'All' },
          merchant: { label: 'All' },
        };

        const currentDataAccess = getCurrentDataAccess(singleChain);
        expect(currentDataAccess[0].region.endOfChain).to.be.true;

        expect(currentDataAccess).to.have.lengthOf(1);
        expect(currentDataAccess[0].corp.id).to.eql(expectedResponse.corp.id);
        expect(currentDataAccess[0].region.id).to.eql(expectedResponse.region.id);
        expect(currentDataAccess[0].principal.label).to.eql(expectedResponse.principal.label);
        expect(currentDataAccess[0].associate.label).to.eql(expectedResponse.associate.label);
        expect(currentDataAccess[0].chain.label).to.eql(expectedResponse.chain.label);
        expect(currentDataAccess[0].merchant.label).to.eql(expectedResponse.merchant.label);
      });

      it('should return a single principal when given a single principal access', function () {
        const dataAccess = getLimitedDataAccess();

        const singleChain = dataAccess.slice(-1); // last one has one principal
        singleChain[0].organizations[0].organizations[0].hasAccess = true;
        const expectedResponse = {
          corp: { id: singleChain[0].id },
          region: { id: singleChain[0].organizations[0].id },
          principal: { id: singleChain[0].organizations[0].organizations[0].id },
          associate: { label: 'All' },
          chain: { label: 'All' },
          merchant: { label: 'All' },
        };

        const currentDataAccess = getCurrentDataAccess(singleChain);
        expect(currentDataAccess[0].principal.endOfChain).to.be.true;

        expect(currentDataAccess).to.have.lengthOf(1);
        expect(currentDataAccess[0].corp.id).to.eql(expectedResponse.corp.id);
        expect(currentDataAccess[0].region.id).to.eql(expectedResponse.region.id);
        expect(currentDataAccess[0].principal.id).to.eql(expectedResponse.principal.id);
        expect(currentDataAccess[0].associate.label).to.eql(expectedResponse.associate.label);
        expect(currentDataAccess[0].chain.label).to.eql(expectedResponse.chain.label);
        expect(currentDataAccess[0].merchant.label).to.eql(expectedResponse.merchant.label);
      });

      it('should return a single associate when given a single associate access', function () {
        const dataAccess = getLimitedDataAccess();

        const singleChain = dataAccess.slice(-1); // last one has one associate
        singleChain[0].organizations[0].organizations[0].organizations[0].hasAccess = true;
        const expectedResponse = {
          corp: { id: singleChain[0].id },
          region: { id: singleChain[0].organizations[0].id },
          principal: { id: singleChain[0].organizations[0].organizations[0].id },
          associate: { id: singleChain[0].organizations[0].organizations[0].organizations[0].id },
          chain: { label: 'All' },
          merchant: { label: 'All' },
        };

        const currentDataAccess = getCurrentDataAccess(singleChain);
        expect(currentDataAccess[0].associate.endOfChain).to.be.true;

        expect(currentDataAccess).to.have.lengthOf(1);
        expect(currentDataAccess[0].corp.id).to.eql(expectedResponse.corp.id);
        expect(currentDataAccess[0].region.id).to.eql(expectedResponse.region.id);
        expect(currentDataAccess[0].principal.id).to.eql(expectedResponse.principal.id);
        expect(currentDataAccess[0].associate.id).to.eql(expectedResponse.associate.id);
        expect(currentDataAccess[0].chain.label).to.eql(expectedResponse.chain.label);
        expect(currentDataAccess[0].merchant.label).to.eql(expectedResponse.merchant.label);
      });

      it('should return a single chain when given a single chain access', function () {
        const dataAccess = getLimitedDataAccess();

        const singleChain = dataAccess.slice(-1); // last one has one chain
        singleChain[0].organizations[0].organizations[0].organizations[0].organizations[0].hasAccess = true;
        const expectedResponse = {
          corp: { id: singleChain[0].id },
          region: { id: singleChain[0].organizations[0].id },
          principal: { id: singleChain[0].organizations[0].organizations[0].id },
          associate: { id: singleChain[0].organizations[0].organizations[0].organizations[0].id },
          chain: { id: singleChain[0].organizations[0].organizations[0].organizations[0].organizations[0].id },
          merchant: { label: 'All' },
        };

        const currentDataAccess = getCurrentDataAccess(singleChain);
        expect(currentDataAccess[0].chain.endOfChain).to.be.true;

        expect(currentDataAccess).to.have.lengthOf(1);
        expect(currentDataAccess[0].corp.id).to.eql(expectedResponse.corp.id);
        expect(currentDataAccess[0].region.id).to.eql(expectedResponse.region.id);
        expect(currentDataAccess[0].principal.id).to.eql(expectedResponse.principal.id);
        expect(currentDataAccess[0].associate.id).to.eql(expectedResponse.associate.id);
        expect(currentDataAccess[0].chain.id).to.eql(expectedResponse.chain.id);
        expect(currentDataAccess[0].merchant.label).to.eql(expectedResponse.merchant.label);
      });

      it('should return a single merchant when given a single merchant access', function () {
        const dataAccess = getLimitedDataAccess();

        const singleChain = dataAccess.slice(-1); // last one has one merchant
        singleChain[0].organizations[0].organizations[0].organizations[0].organizations[0].organizations[0].hasAccess = true;
        const expectedResponse = {
          corp: { id: singleChain[0].id },
          region: { id: singleChain[0].organizations[0].id },
          principal: { id: singleChain[0].organizations[0].organizations[0].id },
          associate: { id: singleChain[0].organizations[0].organizations[0].organizations[0].id },
          chain: { id: singleChain[0].organizations[0].organizations[0].organizations[0].organizations[0].id },
          merchant: { id: singleChain[0].organizations[0].organizations[0].organizations[0].organizations[0].organizations[0].id },
        };

        const currentDataAccess = getCurrentDataAccess(singleChain);
        expect(currentDataAccess[0].merchant.endOfChain).to.be.true;

        expect(currentDataAccess).to.have.lengthOf(1);
        expect(currentDataAccess[0].corp.id).to.eql(expectedResponse.corp.id);
        expect(currentDataAccess[0].region.id).to.eql(expectedResponse.region.id);
        expect(currentDataAccess[0].principal.id).to.eql(expectedResponse.principal.id);
        expect(currentDataAccess[0].associate.id).to.eql(expectedResponse.associate.id);
        expect(currentDataAccess[0].chain.id).to.eql(expectedResponse.chain.id);
        expect(currentDataAccess[0].merchant.id).to.eql(expectedResponse.merchant.id);
      });
    });

    describe('multiple access rows', function() {
      it('should return two merchants when you have individual merchant access', function () {
        const dataAccess = getLimitedDataAccess();

        const singleChain = dataAccess.slice(0, 1); // first one has four merchants

        // strip out the additional principals in the test data
        singleChain[0].organizations[0].organizations = singleChain[0].organizations[0].organizations.slice(0, 1);

        // give access to first and third of four mechants in the region
        singleChain[0].organizations[0].organizations[0].organizations[0].organizations[0].organizations[0].hasAccess = true;
        singleChain[0].organizations[0].organizations[0].organizations[0].organizations[0].organizations[2].hasAccess = true;

        const expectedResponse = [
          {
            corp: { id: singleChain[0].id },
            region: { id: singleChain[0].organizations[0].id },
            principal: { id: singleChain[0].organizations[0].organizations[0].id },
            associate: { id: singleChain[0].organizations[0].organizations[0].organizations[0].id },
            chain: { id: singleChain[0].organizations[0].organizations[0].organizations[0].organizations[0].id },
            merchant: { id: singleChain[0].organizations[0].organizations[0].organizations[0].organizations[0].organizations[0].id },
          },
          {
            corp: { id: singleChain[0].id },
            region: { id: singleChain[0].organizations[0].id },
            principal: { id: singleChain[0].organizations[0].organizations[0].id },
            associate: { id: singleChain[0].organizations[0].organizations[0].organizations[0].id },
            chain: { id: singleChain[0].organizations[0].organizations[0].organizations[0].organizations[0].id },
            merchant: { id: singleChain[0].organizations[0].organizations[0].organizations[0].organizations[0].organizations[2].id },
          }
        ];

        const currentDataAccess = getCurrentDataAccess(singleChain);

        expect(currentDataAccess).to.have.lengthOf(2);

        expect(currentDataAccess[0].merchant.endOfChain).to.be.true;
        expect(currentDataAccess[0].corp.id).to.eql(expectedResponse[0].corp.id);
        expect(currentDataAccess[0].region.id).to.eql(expectedResponse[0].region.id);
        expect(currentDataAccess[0].principal.id).to.eql(expectedResponse[0].principal.id);
        expect(currentDataAccess[0].associate.id).to.eql(expectedResponse[0].associate.id);
        expect(currentDataAccess[0].chain.id).to.eql(expectedResponse[0].chain.id);
        expect(currentDataAccess[0].merchant.id).to.eql(expectedResponse[0].merchant.id);

        expect(currentDataAccess[1].merchant.endOfChain).to.be.true;
        expect(currentDataAccess[1].corp.id).to.eql(expectedResponse[1].corp.id);
        expect(currentDataAccess[1].region.id).to.eql(expectedResponse[1].region.id);
        expect(currentDataAccess[1].principal.id).to.eql(expectedResponse[1].principal.id);
        expect(currentDataAccess[1].associate.id).to.eql(expectedResponse[1].associate.id);
        expect(currentDataAccess[1].chain.id).to.eql(expectedResponse[1].chain.id);
        expect(currentDataAccess[1].merchant.id).to.eql(expectedResponse[1].merchant.id);
      });

      it('should return access at different levels', function () {
        const dataAccess = getLimitedDataAccess();

        // give access to 2 principals under first corp
        dataAccess[0].organizations[0].organizations[0].hasAccess = true;
        dataAccess[0].organizations[0].organizations[1].hasAccess = true;

        // give access to 2 chains under second corp
        dataAccess[1].organizations[0].organizations[0].organizations[0].organizations[0].hasAccess = true;
        dataAccess[1].organizations[0].organizations[0].organizations[0].organizations[1].hasAccess = true;

        // give access to first and third of four mechants in the region
        dataAccess[2].organizations[0].organizations[0].organizations[0].organizations[0].organizations[0].hasAccess = true;

        const expectedResponse = [
          {
            corp: { id: dataAccess[0].id },
            region: { id: dataAccess[0].organizations[0].id },
            principal: { id: dataAccess[0].organizations[0].organizations[0].id },
            associate: { label: 'All' },
            chain: { label: 'All' },
            merchant: { label: 'All' },
          },
          {
            corp: { id: dataAccess[0].id },
            region: { id: dataAccess[0].organizations[0].id },
            principal: { id: dataAccess[0].organizations[0].organizations[1].id },
            associate: { label: 'All' },
            chain: { label: 'All' },
            merchant: { label: 'All' },
          },
          {
            corp: { id: dataAccess[1].id },
            region: { id: dataAccess[1].organizations[0].id },
            principal: { id: dataAccess[1].organizations[0].organizations[0].id },
            associate: { id: dataAccess[1].organizations[0].organizations[0].organizations[0].id },
            chain: { id: dataAccess[1].organizations[0].organizations[0].organizations[0].organizations[0].id },
            merchant: { label: 'All' },
          },
          {
            corp: { id: dataAccess[1].id },
            region: { id: dataAccess[1].organizations[0].id },
            principal: { id: dataAccess[1].organizations[0].organizations[0].id },
            associate: { id: dataAccess[1].organizations[0].organizations[0].organizations[0].id },
            chain: { id: dataAccess[1].organizations[0].organizations[0].organizations[0].organizations[1].id },
            merchant: { label: 'All' },
          },
          {
            corp: { id: dataAccess[2].id },
            region: { id: dataAccess[2].organizations[0].id },
            principal: { id: dataAccess[2].organizations[0].organizations[0].id },
            associate: { id: dataAccess[2].organizations[0].organizations[0].organizations[0].id },
            chain: { id: dataAccess[2].organizations[0].organizations[0].organizations[0].organizations[0].id },
            merchant: { id: dataAccess[2].organizations[0].organizations[0].organizations[0].organizations[0].organizations[0].id },
          },
        ];

        const currentDataAccess = getCurrentDataAccess(dataAccess);

        expect(currentDataAccess).to.have.lengthOf(5);

        expect(currentDataAccess[0].principal.endOfChain).to.be.true;
        expect(currentDataAccess[0].corp.id).to.eql(expectedResponse[0].corp.id);
        expect(currentDataAccess[0].region.id).to.eql(expectedResponse[0].region.id);
        expect(currentDataAccess[0].principal.id).to.eql(expectedResponse[0].principal.id);
        expect(currentDataAccess[0].associate.label).to.eql(expectedResponse[0].associate.label);
        expect(currentDataAccess[0].chain.label).to.eql(expectedResponse[0].chain.label);
        expect(currentDataAccess[0].merchant.label).to.eql(expectedResponse[0].merchant.label);

        expect(currentDataAccess[1].principal.endOfChain).to.be.true;
        expect(currentDataAccess[1].corp.id).to.eql(expectedResponse[1].corp.id);
        expect(currentDataAccess[1].region.id).to.eql(expectedResponse[1].region.id);
        expect(currentDataAccess[1].principal.id).to.eql(expectedResponse[1].principal.id);
        expect(currentDataAccess[1].associate.label).to.eql(expectedResponse[1].associate.label);
        expect(currentDataAccess[1].chain.label).to.eql(expectedResponse[1].chain.label);
        expect(currentDataAccess[1].merchant.label).to.eql(expectedResponse[1].merchant.label);

        expect(currentDataAccess[2].chain.endOfChain).to.be.true;
        expect(currentDataAccess[2].corp.id).to.eql(expectedResponse[2].corp.id);
        expect(currentDataAccess[2].region.id).to.eql(expectedResponse[2].region.id);
        expect(currentDataAccess[2].principal.id).to.eql(expectedResponse[2].principal.id);
        expect(currentDataAccess[2].associate.id).to.eql(expectedResponse[2].associate.id);
        expect(currentDataAccess[2].chain.id).to.eql(expectedResponse[2].chain.id);
        expect(currentDataAccess[2].merchant.label).to.eql(expectedResponse[2].merchant.label);

        expect(currentDataAccess[3].chain.endOfChain).to.be.true;
        expect(currentDataAccess[3].corp.id).to.eql(expectedResponse[3].corp.id);
        expect(currentDataAccess[3].region.id).to.eql(expectedResponse[3].region.id);
        expect(currentDataAccess[3].principal.id).to.eql(expectedResponse[3].principal.id);
        expect(currentDataAccess[3].associate.id).to.eql(expectedResponse[3].associate.id);
        expect(currentDataAccess[3].chain.id).to.eql(expectedResponse[3].chain.id);
        expect(currentDataAccess[3].merchant.label).to.eql(expectedResponse[3].merchant.label);

        expect(currentDataAccess[4].merchant.endOfChain).to.be.true;
        expect(currentDataAccess[4].corp.id).to.eql(expectedResponse[4].corp.id);
        expect(currentDataAccess[4].region.id).to.eql(expectedResponse[4].region.id);
        expect(currentDataAccess[4].principal.id).to.eql(expectedResponse[4].principal.id);
        expect(currentDataAccess[4].associate.id).to.eql(expectedResponse[4].associate.id);
        expect(currentDataAccess[4].chain.id).to.eql(expectedResponse[4].chain.id);
        expect(currentDataAccess[4].merchant.id).to.eql(expectedResponse[4].merchant.id);
      });
    });
  });
});

/* eslint-enable */
