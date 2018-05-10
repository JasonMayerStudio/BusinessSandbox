/* eslint-disable func-names, prefer-arrow-callback */

import { expect } from 'chai';
import * as globalFilterActions from './globalFilterActions';
import * as types from './actionTypes';

describe('Global Filter actions', function () {
  it('should add a branch to the global filter', function () {
    // arrange
    const branch = {
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
    const expectedAction = {
      type: types.ADD_TO_GLOBAL_FILTER,
      branch,
    };

    // act
    const action = globalFilterActions.addToGlobalFilter(branch);

    // asset
    expect(action).to.eql(expectedAction);
  });

  it('should remove a branch from global filter', function () {
    // arrange
    const branch = {
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
    const expectedAction = {
      type: types.REMOVE_FROM_GLOBAL_FILTER,
      branch,
    };

    // act
    const action = globalFilterActions.removeFromGlobalFilter(branch);

    // asset
    expect(action).to.eql(expectedAction);
  });

  it('should clear the global filter', function () {
    // arrange
    const expectedAction = {
      type: types.CLEAR_GLOBAL_FILTER,
    };

    // act
    const action = globalFilterActions.clearGlobalFilter();

    // asset
    expect(action).to.eql(expectedAction);
  });
});

/* eslint-enable func-names, prefer-arrow-callback */
