"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sortByChapter(array, option) {
    if (array instanceof Array) {
        if (array.every(function (item) { return typeof item === 'string'; })) {
            return Array.from(array).sort(function (a, b) {
                var aMatch = a.match(/(\d+\.*)+/);
                var bMatch = b.match(/(\d+\.*)+/);
                if (aMatch && bMatch && aMatch.length && bMatch.length) {
                    return aMatch[0].localeCompare(bMatch[0], undefined, {
                        numeric: true,
                    });
                }
                return 0;
            });
        }
        switch (typeof option) {
            case 'object': {
                if (option === null) {
                    return array;
                }
                var attr_1 = option.attribute;
                if (attr_1 &&
                    array.every(function (item) { var _a; return typeof item === 'object' && ((_a = Object.getOwnPropertyDescriptor(item, attr_1)) === null || _a === void 0 ? void 0 : _a.value); })) {
                    return Array.from(array).sort(function (_a, _b) {
                        var _c = attr_1, aAttribute = _a[_c];
                        var _d = attr_1, bAttribute = _b[_d];
                        var aMatch = String(aAttribute).match(/(\d+\.*)+/);
                        var bMatch = String(bAttribute).match(/(\d+\.*)+/);
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
            case 'string':
                if (option &&
                    array.every(function (obj) { var _a; return typeof obj === 'object' && ((_a = Object.getOwnPropertyDescriptor(obj, option)) === null || _a === void 0 ? void 0 : _a.value); })) {
                    return Array.from(array).sort(function (_a, _b) {
                        var _c = option, _d = _a[_c], aAttribute = _d === void 0 ? '' : _d;
                        var _e = option, _f = _b[_e], bAttribute = _f === void 0 ? '' : _f;
                        var aMatch = String(aAttribute).match(/(\d+\.*)+/);
                        var bMatch = String(bAttribute).match(/(\d+\.*)+/);
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
exports.default = sortByChapter;
