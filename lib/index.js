"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sortByChapter(array, option) {
    if (array instanceof Array) {
        if (array.every((item) => typeof item === 'string')) {
            return Array.from(array).sort((a, b) => {
                const aMatch = a.match(/(\d+\.*)+/);
                const bMatch = b.match(/(\d+\.*)+/);
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
                const { attribute: attr } = option;
                if (attr &&
                    array.every((item) => typeof item === 'object' && Object.getOwnPropertyDescriptor(item, attr)?.value)) {
                    return Array.from(array).sort(({ [attr]: aAttribute }, { [attr]: bAttribute }) => {
                        const aMatch = String(aAttribute).match(/(\d+\.*)+/);
                        const bMatch = String(bAttribute).match(/(\d+\.*)+/);
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
                    array.every((obj) => typeof obj === 'object' && Object.getOwnPropertyDescriptor(obj, option)?.value)) {
                    return Array.from(array).sort(({ [option]: aAttribute = '' }, { [option]: bAttribute = '' }) => {
                        const aMatch = String(aAttribute).match(/(\d+\.*)+/);
                        const bMatch = String(bAttribute).match(/(\d+\.*)+/);
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
