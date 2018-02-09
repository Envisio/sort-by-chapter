module.exports = (arr, options) => {
  if (options) {
    const attr = options.attribute;
    return arr.sort((a, b) => (attr ? a[attr] : a).match(/(\d+\.*)+/)[0].localeCompare((attr ? b[attr] : b).match(/(\d+\.*)+/)[0], undefined, { numeric: true }));
  }
  return arr.sort((a, b) => a.match(/(\d+\.*)+/)[0].localeCompare(b.match(/(\d+\.*)+/)[0], undefined, { numeric: true }));
};
