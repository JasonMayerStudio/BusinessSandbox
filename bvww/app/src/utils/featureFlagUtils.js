export function getFeatureFlags(hostname = '') {
  const isQa2 = hostname
    .toLowerCase()
    .includes('qa2');

  return {
    isQa2,
  };
}

export default {
  getFeatureFlags,
};
