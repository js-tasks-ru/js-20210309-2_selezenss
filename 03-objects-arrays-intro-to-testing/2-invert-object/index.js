/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
  const result = {};

  if (!obj) {
    return undefined;
  } else {
    for (let key of Object.keys(obj)) {
      result[obj[key]] = key;
    }
    return result;
  }
}
