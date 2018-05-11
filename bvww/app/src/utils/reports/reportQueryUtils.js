import queryString from 'query-string';

import { filterRequestPayloadObject } from '../../api/apiHelpers';

export function normalizeQueryString(search) {
  return (search.charAt(0) === '?')
    ? search.substr(1)
    : search;
}

export function makeReportQueryString(options) {
  if (options) {
    const allowedKeys = [
      'filters',
      'page',
      'limit',
      'sortOrder',
      'sortColumnKey',
    ];

    const filteredOptions = filterRequestPayloadObject(options, allowedKeys);

    if (filteredOptions.filters !== null &&
        typeof filteredOptions.filters === 'object') {
      filteredOptions.filters = JSON.stringify(filteredOptions.filters);
    }

    return queryString.stringify(filteredOptions);
  }
  return '';
}

export default {
  normalizeQueryString,
  makeReportQueryString,
};
