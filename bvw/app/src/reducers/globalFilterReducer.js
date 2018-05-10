import isEqual from 'lodash/isEqual';

import * as types from '../actions/actionTypes';
import initialState from './initialState';

import { getLowestSelectedOrgs } from '../selectors/dataAccessSelectors';

export default function globalFilterReducer(state = initialState.globalFilter, action) {
  switch (action.type) {
    case types.ADD_TO_GLOBAL_FILTER:
      return Object.assign(
        {},
        state,
        { filters: [...state.filters, action.branch] },
        { orgIds: state.orgIds.concat(getLowestSelectedOrgs(action.branch.startData)) } // eslint-disable-line comma-dangle
      );

    case types.REMOVE_FROM_GLOBAL_FILTER:
      return state.filter((branch) => {
        return !isEqual(branch, action.branch);
      });

    case types.CLEAR_GLOBAL_FILTER:
      return initialState.globalFilter;

    default:
      return state;
  }
}
