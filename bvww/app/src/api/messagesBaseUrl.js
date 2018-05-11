import { getQueryStringParameterByName } from './apiHelpers';

export default function getMessagesBaseUrl() {
  return getQueryStringParameterByName('useMockApi')
    ? 'http://localhost:3009/'
    : __MESSAGES_API__; // eslint-disable-line no-undef
}
