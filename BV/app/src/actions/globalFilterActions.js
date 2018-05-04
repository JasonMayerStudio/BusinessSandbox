import * as types from './actionTypes';

export function addToGlobalFilter(branch) {
  return { type: types.ADD_TO_GLOBAL_FILTER, branch };
}

export function removeFromGlobalFilter(branch) {
  return { type: types.REMOVE_FROM_GLOBAL_FILTER, branch };
}

export function clearGlobalFilter() {
  return { type: types.CLEAR_GLOBAL_FILTER };
}
