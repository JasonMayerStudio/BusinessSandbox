/* eslint-disable no-param-reassign */
export function swapElements(array, indexA, indexB) {
  const temp = array[indexA];
  array[indexA] = array[indexB];
  array[indexB] = temp;
  return array;
}

export default {
  swapElements,
};
/* eslint-enable no-param-reassign */
