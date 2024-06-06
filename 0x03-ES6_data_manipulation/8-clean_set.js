/**
 * Function that joins a set of strings with a dash
 * after stripping the strings of a leading sub string.
 * @param {Set<String>} set - A collection of strings.
 * @param {String} startString - The string to strip from the beginning
 * of each item in the set.
 * @returns {String}
 */
export default function cleanSet(set, startString) {
  let text = '';
  const array = [];

  if (startString && typeof startString === 'string') {
    for (const element of set) {
      if (element && element.startsWith(startString)) {
        array.push(element.slice(startString.length));
      }
    }
    text = array.join('-');
  }
  return text;
}
