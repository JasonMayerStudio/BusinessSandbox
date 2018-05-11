import { getQueryStringParameterByName } from './apiHelpers';

export default function getReportsBaseUrl() {
  return getQueryStringParameterByName('useMockApi')
    ? 'http://localhost:3009/'
    : __REPORTS_API__; // eslint-disable-line no-undef
}
