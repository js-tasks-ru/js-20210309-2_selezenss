/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  if (param === 'asc') {
    return sortArr(arr, 1);
  } else if (param === 'desc') {
    return sortArr(arr, -1);
  }

  function sortArr(arr, direction) {
    return [...arr].sort(function (a, b) {
      return direction * (a.localeCompare(b, ['ru', 'en'], { caseFirst: 'upper'}));
    });
  }
}

