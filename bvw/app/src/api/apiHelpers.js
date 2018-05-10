import pickBy from 'lodash/pickBy';
import queryString from 'query-string';

import { shouldIgnoreGlobalSelector } from 'Utils/globalSelector';
import { loadState } from '../store/browserStorage';

export function configureHttpHeaders(axios) {
  const auth = loadState('auth');
  const sessionToken = (auth && auth.session && auth.session.sessionToken) || '';

  const orgIds = loadState('orgIds');
  const organizationIds = (orgIds &&
    orgIds.join &&
    orgIds.join(',')
  ) || '';

  /* eslint-disable no-param-reassign, dot-notation */
  axios.defaults.headers.common['Accept'] = 'text/csv,application/pdf,application/json';
  axios.defaults.headers.common['Authorization'] = sessionToken;

  // WARNING: access to global environment object
  // for tests, window location is mocked in the test setup file helpers/browser.js
  if (!shouldIgnoreGlobalSelector(window.location.pathname)) {
    axios.defaults.headers.common['organizationFilter'] = organizationIds;
  }
  /* eslint-enable no-param-reassign, dot-notation */
}

export function isLanguageSupported(langCode) {
  const supportedLanguages = [
    'en-US',
    'en-GB',
    'fr-CA',
    'zh-Hans',
    'zh-Hant',
  ];

  const langPosition = supportedLanguages.indexOf(langCode);

  return langPosition > -1;
}

export default {
  configureHttpHeaders,
  isLanguageSupported,
  combineUserProperties,
};

export function combineUserProperties(user, role = {}, permissions = [], organizationsIds = []) {
  const combinedUser = Object.assign({}, user);
  combinedUser.role = {
    key: role.key,
    id: role.id,
    name: role.name,
    description: role.description,
    permissions: role.permissions,
    permissionIds: [],
  };

  if (Array.isArray(permissions)) {
    combinedUser.role.permissionIds = permissions.filter((perm) => {
      return perm.isChecked;
    }).map((perm) => {
      return perm.id;
    });
  } else {
    combinedUser.role.permissionIds = [];
  }

  if (Array.isArray(organizationsIds)) {
    combinedUser.organizationIds = organizationsIds;
  } else {
    combinedUser.organizationIds = [];
  }

  return combinedUser;
}

export function getQueryStringParameterByName(name, url) {
  const urlToParse = url || window.location.href;
  const encodedName = name.replace(/[\[\]]/g, '\\$&'); // eslint-disable-line
  const regex = new RegExp(`[?&]${encodedName}(=([^&#]*)|&|#|$)`);

  const results = regex.exec(urlToParse);
  if (!results) return null;

  if (!results[2]) return '';

  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

export function buildQueryStringFromObject(objectToStringify) {
  return queryString.stringify(objectToStringify);
}

export function filterRequestPayloadObject(objectToFilter, allowedKeys) {
  return pickBy(objectToFilter, (value, key) => {
    return allowedKeys.includes(key);
  });
}

export function filterRequestPayloadArray(arrayToFilter, allowedKeys) {
  return arrayToFilter.map((item) => {
    return filterRequestPayloadObject(item, allowedKeys);
  });
}

export function buildReportPreviewObject(report) {
  const columnIds = report.dataColumns.map((column) => column.templateColumnId);
  const filters = report.filters.map((filter) => filter.defaultValue);

  return {
    columnIds,
    templateId: report.templateId,
  };
}
