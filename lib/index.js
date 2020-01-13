'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
module.exports = function (arr, option) {
  if (arr.every(function (item) {
    return typeof item === 'string';
  })) {
    return JSON.parse(JSON.stringify(arr)).sort(function (a, b) {
      return a.match(/(\d+\.*)+/)[0].localeCompare(b.match(/(\d+\.*)+/)[0], undefined, { numeric: true });
    });
  }

  switch (typeof option === 'undefined' ? 'undefined' : _typeof(option)) {
    case 'object':
      if (option.attribute && arr.every(function (obj) {
        return Object.prototype.hasOwnProperty.call(obj, option.attribute) && typeof obj[option.attribute] === 'string';
      })) {
        var attr = option.attribute;


        return JSON.parse(JSON.stringify(arr)).sort(function (a, b) {
          return a[attr].match(/(\d+\.*)+/)[0].localeCompare(b[attr].match(/(\d+\.*)+/)[0], undefined, { numeric: true });
        });
      }

      return arr;
    case 'string':
      if (arr.every(function (obj) {
        return Object.prototype.hasOwnProperty.call(obj, option) && obj[option];
      })) {
        return JSON.parse(JSON.stringify(arr)).sort(function (a, b) {
          return a[option].match(/(\d+\.*)+/)[0].localeCompare(b[option].match(/(\d+\.*)+/)[0], undefined, { numeric: true });
        });
      }

      return arr;
    case 'undefined':
      return arr;
    default:
      return arr;
  }
};
//# sourceMappingURL=index.js.map