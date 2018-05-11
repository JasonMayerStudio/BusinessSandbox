/* eslint-disable func-names, prefer-arrow-callback */

import { expect } from 'chai';

import {
  getDataAccess,
  getGlobalFilterFirstTwoMerchantsSelected,
} from 'Helpers/testHelpers/testMocks.js';

import * as globalFilterActions from '../actions/globalFilterActions';
import globalFilterReducer from './globalFilterReducer';
import initialState from './initialState';

describe('Global Filter reducer', function () {
  describe('Set Global filter action', function () {
    it('should add a branch to an empty global filter', function () {
      const stateBefore = initialState.globalFilter;
      const dataAccess = getDataAccess();
      const newBranch = getGlobalFilterFirstTwoMerchantsSelected(dataAccess);

      const action = globalFilterActions.addToGlobalFilter(newBranch);
      const stateAfter = {
        filters: [newBranch],
        orgIds: [323, 324],
      };

      const result = globalFilterReducer(stateBefore, action);

      expect(result).to.eql(stateAfter);
    });

    it('should add a branch to an existing global filter', function () {
      const dataAccess = getDataAccess();
      const existingBranch = getGlobalFilterFirstTwoMerchantsSelected(dataAccess);
      const stateBefore = {
        filters: [existingBranch],
        orgIds: [323, 324],
      };

      const startData = getDataAccess();
      startData[1].organizations[0].organizations[0].organizations[0].organizations[0].organizations[2].selected = true;
      const newBranch = {
        startData,
        corps: startData,
        selectedCorp: startData[1],
        regions: startData[1].organizations,
        selectedRegion: startData[1].organizations[0],
        principals: startData[1].organizations[0].organizations,
        selectedPrincipal: startData[1].organizations[0].organizations[0],
        associates: startData[1].organizations[0].organizations[0].organizations,
        selectedAssociate: startData[1].organizations[0].organizations[0].organizations[0],
        chains: startData[1].organizations[0].organizations[0].organizations[0].organizations,
        selectedChain: startData[1].organizations[0].organizations[0].organizations[0].organizations[0],
        availableMerchants: startData[1].organizations[0].organizations[0].organizations[0].organizations[0].organizations,
        selectedMerchants: [
          startData[1].organizations[0].organizations[0].organizations[0].organizations[0].organizations[0],
          startData[1].organizations[0].organizations[0].organizations[0].organizations[0].organizations[2],
        ],
      };

      const action = globalFilterActions.addToGlobalFilter(newBranch);

      const stateAfter = {
        filters: [existingBranch, newBranch],
        orgIds: [323, 324, 383],
      };

      const result = globalFilterReducer(stateBefore, action);

      expect(result).to.eql(stateAfter);
    });
  });

  describe('Remove From Global filter action', function () {
    it('should remove a branch from an existing global filter', function () {
      const firstBranch = {
        corp: '055',
        region: '070',
        prin: '026',
        assoc: '001',
        chain: '001',
        merchant: '8788260132732',
        corp_id: '1',
        region_id: '2',
        prin_id: '3',
        chain_id: '5',
        merchant_id: '6',
      };
      const secondBranch = {
        corp: '055',
        region: '071',
        prin: '002',
        assoc: '003',
        chain: '009',
        merchant: '8788260132734',
        corp_id: '1',
        region_id: '7',
        prin_id: '8',
        chain_id: '10',
        merchant_id: '11',
      };
      const stateBefore = [firstBranch, secondBranch];

      const action = globalFilterActions.removeFromGlobalFilter(firstBranch);
      const stateAfter = [secondBranch];

      const result = globalFilterReducer(stateBefore, action);

      expect(result.length).to.equal(1);
      expect(result).to.eql(stateAfter);
    });
  });

  describe('Clear Global filter action', function () {
    it('should clear all global filter branchs', function () {
      const firstBranch = getDataAccess();
      firstBranch[0].organizations[0].organizations[0].organizations[0].organizations[0].organizations[0].selected = true;
      firstBranch[0].organizations[0].organizations[0].organizations[0].organizations[0].organizations[2].selected = true;
      const stateBefore = {
        filters: [firstBranch],
        orgIds: [323, 324],
      };

      const action = globalFilterActions.clearGlobalFilter();

      const stateAfter = initialState.globalFilter;

      const result = globalFilterReducer(stateBefore, action);

      expect(result).to.eql(stateAfter);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback */
