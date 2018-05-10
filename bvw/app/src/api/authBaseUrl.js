import { getQueryStringParameterByName } from './apiHelpers';

export default function getReportsBaseUrl() {
  return getQueryStringParameterByName('useMockApi')
    ? 'http://localhost:3009/'
    : __AUTH_API__; // eslint-disable-line no-undef
}
