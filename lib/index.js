"use strict";

module.exports = function (arr, options) {
  if (options) {
    var attr = options.attribute;
    return arr.sort(function (a, b) {
      return (attr ? a[attr] : a).match(/(\d+\.*)+/)[0].localeCompare((attr ? b[attr] : b).match(/(\d+\.*)+/)[0], undefined, { numeric: true });
    });
  }
  return arr.sort(function (a, b) {
    return a.match(/(\d+\.*)+/)[0].localeCompare(b.match(/(\d+\.*)+/)[0], undefined, { numeric: true });
  });
};
//# sourceMappingURL=index.js.map