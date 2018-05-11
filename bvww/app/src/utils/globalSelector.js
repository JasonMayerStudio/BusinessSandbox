export function shouldIgnoreGlobalSelector(pathname = '') {
  return pathname.includes('transaction-finder');
}

export default {
  shouldIgnoreGlobalSelector,
};
