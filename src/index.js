/**
 * @param {Array} arr
 * @param {Object} options
 * @returns {Array}
 * @example
 * const arr = [
 *   'Goal 1',
 *   'Goal 2',
 *   'Goal 3',
 *   'Strategy 1.1',
 *   'Strategy 1.2',
 *   'Strategy 1.3',
 *   'Activity 1.1.1',
 *   'Activity 1.1.2',
 *   'Activity 1.1.3'
 * ];
 * const newArr = sortByChapter(arr);
 * console.log(newArr);
 */
module.exports = (arr, options) => {
  if (options) {
    const attr = options.attribute;

    return arr.sort((a, b) => {
      if (attr && a[attr] && b[attr]) {
        return a[attr].match(/(\d+\.*)+/)[0].localeCompare(b[attr].match(/(\d+\.*)+/)[0], undefined, { numeric: true });
      }
      return true;
    });
  }
  return arr.sort((a, b) => a.match(/(\d+\.*)+/)[0].localeCompare(b.match(/(\d+\.*)+/)[0], undefined, { numeric: true }));
};
