/**
 * Checks if a set contains each element in an array.
 *
 * @param {Set} set - The collection of unique items.
 * @param {Array} array - The array of items to check against the set.
 * @returns {boolean} - Returns true if the set contains all elements
 * in the array, otherwise false.
 */
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
