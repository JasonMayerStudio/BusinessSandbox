import { getQueryStringParameterByName } from './apiHelpers';

export default function getReportsApiV2BaseUrl() {
  return getQueryStringParameterByName('useMockApi')
    ? 'http://localhost:3009/'
    : __REPORTS_API_V2__; // eslint-disable-line no-undef
}
