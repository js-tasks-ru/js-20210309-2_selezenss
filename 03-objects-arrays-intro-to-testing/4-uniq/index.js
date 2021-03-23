/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr = []) {
  const result = [];

  arr.forEach(function (item) {
    if (!result.includes(item)) {
      result.push(item);
    }
  });

  return result;
}
