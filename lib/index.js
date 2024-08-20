"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = sortByChapter;
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
function sortByChapter(array, option) {
    if (array instanceof Array) {
        if (array.every(function (item) {
            return typeof item === "string";
        })) {
            return Array.from(array).sort(function (a, b) {
                if (a === void 0) { a = ""; }
                if (b === void 0) { b = ""; }
                var aValue = a.split(" ").reverse()[0];
                var bValue = b.split(" ").reverse()[0];
                var aMatch = aValue.match(/(\d+\.*)+/);
                var bMatch = bValue.match(/(\d+\.*)+/);
                if (aMatch && bMatch && aMatch.length && bMatch.length) {
                    return aMatch[0].localeCompare(bMatch[0], undefined, {
                        numeric: true,
                    });
                }
                return 0;
            });
        }
        switch (typeof option) {
            case "object": {
                if (option === null) {
                    return array;
                }
                var attr_1 = option.attribute;
                if (attr_1 &&
                    array.every(function (item) {
                        var _a;
                        return typeof item === "object" &&
                            ((_a = Object.getOwnPropertyDescriptor(item, attr_1)) === null || _a === void 0 ? void 0 : _a.value);
                    })) {
                    return Array.from(array).sort(function (_a, _b) {
                        var _c = attr_1, aAttribute = _a[_c];
                        var _d = attr_1, bAttribute = _b[_d];
                        var aValue = String(aAttribute).split(" ").reverse()[0];
                        var bValue = String(bAttribute).split(" ").reverse()[0];
                        var aMatch = aValue.match(/(\d+\.*)+/);
                        var bMatch = bValue.match(/(\d+\.*)+/);
                        if (aMatch && bMatch && aMatch.length && bMatch.length) {
                            return aMatch[0].localeCompare(bMatch[0], undefined, {
                                numeric: true,
                            });
                        }
                        return 0;
                    });
                }
                return array;
            }
            case "string":
                if (option &&
                    array.every(function (obj) {
                        var _a;
                        return typeof obj === "object" &&
                            ((_a = Object.getOwnPropertyDescriptor(obj, option)) === null || _a === void 0 ? void 0 : _a.value);
                    })) {
                    return Array.from(array).sort(function (_a, _b) {
                        var _c = option, _d = _a[_c], aAttribute = _d === void 0 ? "" : _d;
                        var _e = option, _f = _b[_e], bAttribute = _f === void 0 ? "" : _f;
                        var aValue = String(aAttribute).split(" ").reverse()[0];
                        var bValue = String(bAttribute).split(" ").reverse()[0];
                        var aMatch = aValue.match(/(\d+\.*)+/);
                        var bMatch = bValue.match(/(\d+\.*)+/);
                        if (aMatch && bMatch && aMatch.length && bMatch.length) {
                            return aMatch[0].localeCompare(bMatch[0], undefined, {
                                numeric: true,
                            });
                        }
                        return 0;
                    });
                }
                return array;
            default:
                return array;
        }
    }
    else {
        return array;
    }
}
