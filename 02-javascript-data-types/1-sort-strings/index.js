/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const mapped = arr.map(function(el, i) {
    return el;
  });

  const result = mapped.sort(function (a, b) {
    return a.localeCompare(b, ['ru', 'en'], { caseFirst: 'upper'});
  });

  if (param === 'asc') {
    return result;
  } else if (param === 'desc') {
    return result.reverse();
  }
}
