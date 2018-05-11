import axios from 'axios';
import getBaseUrl from './baseUrl';
import {
  configureHttpHeaders,
  filterRequestPayloadObject,
} from './apiHelpers';

const baseUrl = getBaseUrl();

export function getUsers() {
  configureHttpHeaders(axios);

  return get('users');
}

export function getUserById(userId) {
  configureHttpHeaders(axios);

  return get(`users/${userId}`);
}

export function getPrimaryMerchantByUserId(userId) {
  configureHttpHeaders(axios);

  return get(`users/${userId}/primary-merchant`);
}

export function getUserDataAccessById(userId) {
  configureHttpHeaders(axios);

  return get(`users/${userId}/dataaccess`);
}

export function getHierarchyBasedReport(userId) {
  configureHttpHeaders(axios);

  return get(`users/${userId}/hierarchyReport`);
}

export function getUserMerchants(userId) {
  configureHttpHeaders(axios);

  return get(`users/${userId}/merchants`);
}

export function saveUser(user) {
  configureHttpHeaders(axios);

  const userWithFilteredRole = filterUserRoleForSaving(user);

  if (user.userId) {
    const filteredExistingUser = filterExistingUserObj(userWithFilteredRole);

    return put(`users/${user.userId}`, filteredExistingUser);
  } else {  // eslint-disable-line no-else-return
    const filteredNewUser = filterNewUserObj(userWithFilteredRole);

    return post('users', filteredNewUser);
  }
}

export function getUserTerms(webToken) {
  axios.defaults.headers.common['Authorization'] = webToken; // eslint-disable-line no-param-reassign, dot-notation
  return get('users/terms');
}

export function setUserTermsAccepted(termsId) {
  configureHttpHeaders(axios);

  return post(`users/terms/${termsId}`);
}

function get(url) {
  /* eslint-enable dot-notation */

  return axios.get(`${baseUrl}${url}`)
    .then(onSuccess)
    .catch(onError);
}

function put(url, user) {
  return axios.put(`${baseUrl}${url}`, user)
    .then(onSuccess)
    .catch(onError);
}

function post(url, user) {
  return axios.post(`${baseUrl}${url}`, user)
    .then(onSuccess)
    .catch(onError);
}

function onSuccess(response) {
  let result;

  if (response.status !== 204) {
    result = response.data;
  } else {
    result = 'Success';
  }
  return result;
}

function onError(error) {
  const returnedError = error && error.response && error.response.data;
  throw returnedError;
}

function filterUserRoleForSaving(user) {
  const allowedRoleKeys = [
    'id',
    'permissionIds',
  ];
  const filteredRole = filterRequestPayloadObject(user.role, allowedRoleKeys);
  const userWithFilteredRole = Object.assign({}, user, { role: filteredRole });

  return userWithFilteredRole;
}

function filterNewUserObj(user) {
  const allowedNewUserKeys = [
    'firstName',
    'lastName',
    'email',
    'role',
    'organizationIds',
    'userId',
  ];
  const filteredNewUser = filterRequestPayloadObject(user, allowedNewUserKeys);

  return filteredNewUser;
}

function filterExistingUserObj(user) {
  const userWithFilteredPreferences = filterUserPreferencesForSaving(user);

  const allowedExistingUserKeys = [
    'firstName',
    'lastName',
    'email',
    'role',
    'organizationIds',
    'preferences',
    'status',
  ];
  const filteredExistingUser = filterRequestPayloadObject(userWithFilteredPreferences, allowedExistingUserKeys);

  return filteredExistingUser;
}

function filterUserPreferencesForSaving(user) {
  const allowedPreferencesKeys = [
    'dateFormat',
    'firstName',
    'lastName',
    'language',
    'timeFormat',
  ];
  const filteredPreferences = filterRequestPayloadObject(user.preferences, allowedPreferencesKeys);
  const userWithFilteredPreferences = Object.assign({}, user, { preferences: filteredPreferences });

  return userWithFilteredPreferences;
}

export default {
  getUsers,
  getUserById,
  getUserDataAccessById,
  getPrimaryMerchantByUserId,
  saveUser,
};
