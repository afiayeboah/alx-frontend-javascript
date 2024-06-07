/**
 * Checks if a set contains each element in an array.
 *
 * @param {Set} set - The collection of unique items.
 * @param {Array} array - The array of items to check against the set.
 * @returns {boolean} - Returns true if the set contains all elements
 * in the array, otherwise false.
 */
export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const buf = new DataView(new ArrayBuffer(length), 0, length);
  buf.setInt8(position, value);
  return buf;
}
