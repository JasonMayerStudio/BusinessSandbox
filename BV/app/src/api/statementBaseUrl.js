import { getQueryStringParameterByName } from './apiHelpers';

export default function getStatementsBaseUrl() {
  return getQueryStringParameterByName('useMockApi')
    ? 'http://localhost:3009/'
    : __STATEMENTS_API__; // eslint-disable-line no-undef
}
