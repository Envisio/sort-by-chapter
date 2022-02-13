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
export default function sortByChapter(
  array: Array<string | object | null | undefined>,
  option:
    | string
    | {
        attribute: string;
      }
    | undefined
    | null,
): Array<string | object | null | undefined> {
  if (array instanceof Array) {
    if (array.every((item: string | object | undefined | null): boolean => typeof item === 'string')) {
      return (Array.from(array) as Array<string>).sort((a: string, b: string): number => {
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

        const { attribute: attr }: { attribute: string } = option;

        if (
          attr &&
          (array as Array<object>).every(
            (item: object): boolean => typeof item === 'object' && Object.getOwnPropertyDescriptor(item, attr)?.value,
          )
        ) {
          return (Array.from(array) as Array<{ [attr: string]: string }>).sort(
            ({ [attr]: aAttribute }: { [attr: string]: string }, { [attr]: bAttribute }: { [attr: string]: string }): number => {
              const aMatch = aAttribute.match(/(\d+\.*)+/);
              const bMatch = bAttribute.match(/(\d+\.*)+/);

              if (aMatch && bMatch && aMatch.length && bMatch.length) {
                return aMatch[0].localeCompare(bMatch[0], undefined, {
                  numeric: true,
                });
              }

              return 0;
            },
          );
        }

        return array;
      }
      case 'string':
        if (
          option &&
          (array as Array<object>).every(
            (obj: string | object): boolean => typeof obj === 'object' && Object.getOwnPropertyDescriptor(obj, option)?.value,
          )
        ) {
          return (Array.from(array) as Array<{ [option: string]: string }>).sort(
            ({ [option]: aAttribute }: { [option: string]: string }, { [option]: bAttribute }: { [option: string]: string }): number => {
              const aMatch = aAttribute.match(/(\d+\.*)+/);
              const bMatch = bAttribute.match(/(\d+\.*)+/);

              if (aMatch && bMatch && aMatch.length && bMatch.length) {
                return aMatch[0].localeCompare(bMatch[0], undefined, {
                  numeric: true,
                });
              }

              return 0;
            },
          );
        }

        return array;
      default:
        return array;
    }
  } else {
    return array;
  }
}
