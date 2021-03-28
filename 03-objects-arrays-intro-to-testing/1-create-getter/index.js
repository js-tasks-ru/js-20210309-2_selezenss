/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const pathKeys = path.split('.');

  return (obj) => {
    for (let key of pathKeys) {
      if (obj[key]) {
        obj = obj[key];
      } else {
        return;
      }
    }

    return obj;
  };
}
