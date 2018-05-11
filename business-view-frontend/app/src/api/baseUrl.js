import { getQueryStringParameterByName } from './apiHelpers';

export default function getBaseUrl() {
  return getQueryStringParameterByName('useMockApi')
    ? 'http://localhost:3009/'
    : __API__; // eslint-disable-line no-undef
}
