/**
 * sorts an array of objects by a specified key, in a specificed order
 * @param  {Array} dataToSort  the list of objects to sort
 * @param  {string} key        the property in the objects to sort by
 * @param  {string} order      'ASC' (default), or 'DESC'
 * @return {Array}             a new, sorted array
 */
export function getSortedData(dataToSort, key, order = 'ASC') {
  if (key) {
    return [...dataToSort].sort((a, b) => {
      return compareBy(a, b, key) * (order === 'DESC' ? -1 : 1);
    });
  }
  return dataToSort;
}

function compareBy(a, b, key) {
  if (key) {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
  }
  return 0;
}

export default {
  getSortedData,
};
