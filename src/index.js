/**
 * @param {Array} arr
 * @param {Object} option
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
module.exports = (arr, option) => {
  if (arr.every((item) => typeof item === 'string')) {
    return JSON.parse(JSON.stringify(arr)).sort((a, b) => a.match(/(\d+\.*)+/)[0].localeCompare(b.match(/(\d+\.*)+/)[0], undefined, { numeric: true }));
  }

  switch (typeof option) {
    case 'object':
      if (option.attribute) {
        const { attribute: attr } = option;

        return JSON.parse(JSON.stringify(arr)).sort((a, b) => a[attr].match(/(\d+\.*)+/)[0].localeCompare(b[attr].match(/(\d+\.*)+/)[0], undefined, { numeric: true }));
      }

      return arr;
    case 'string':
      if (arr.some((obj) => Object.prototype.hasOwnProperty.call(obj, option))) {
        return JSON.parse(JSON.stringify(arr)).sort((a, b) => a[option].match(/(\d+\.*)+/)[0].localeCompare(b[option].match(/(\d+\.*)+/)[0], undefined, { numeric: true }));
      }

      return arr;
    case 'undefined':
      return arr;
    default:
      return arr;
  }
};
