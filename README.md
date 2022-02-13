# sort-by-chapter

Creates an array of elements, sorted in ascending order by the element chapter number string or by specific attribute chapter number string.

[![Inline docs](http://inch-ci.org/github/Envisio/sort-by-chapter.svg?branch=master&style=shields)](http://inch-ci.org/github/Envisio/sort-by-chapter) [![Coverage Status](https://coveralls.io/repos/github/Envisio/sort-by-chapter/badge.svg?branch=master)](https://coveralls.io/github/Envisio/sort-by-chapter?branch=master)

## Examples

### Basic

```js
import sortByChapter from 'sort-by-chapter';

const arr = [
  'Goal 1',
  'Goal 2',
  'Goal 3',
  'Strategy 1.1',
  'Strategy 1.2',
  'Strategy 1.3',
  'Activity 1.1.1',
  'Activity 1.1.2',
  'Activity 1.1.3',
];
const newArr = sortByChapter(arr);
console.log(newArr);
```

```
[ 'Goal 1',
  'Strategy 1.1',
  'Activity 1.1.1',
  'Activity 1.1.2',
  'Activity 1.1.3',
  'Strategy 1.2',
  'Strategy 1.3',
  'Goal 2',
  'Goal 3' ]
```

### Specify Attribute

```js
import sortByChapter from 'sort-by-chapter';

const arr = [
  { title: 'Goal 1',
  { title: 'Goal 2' },
  { title: 'Goal 3' },
  { title: 'Strategy 1.1' },
  { title: 'Strategy 1.2' },
  { title: 'Strategy 1.3' },
  { title: 'Activity 1.1.1' },
  { title: 'Activity 1.1.2' },
  { title: 'Activity 1.1.3' }
];
const newArr = sortByChapter(arr, { attribute: 'title' });
console.log(newArr);
```

or

```js
import sortByChapter from 'sort-by-chapter';

const arr = [
  { title: 'Goal 1',
  { title: 'Goal 2' },
  { title: 'Goal 3' },
  { title: 'Strategy 1.1' },
  { title: 'Strategy 1.2' },
  { title: 'Strategy 1.3' },
  { title: 'Activity 1.1.1' },
  { title: 'Activity 1.1.2' },
  { title: 'Activity 1.1.3' }
];
const newArr = sortByChapter(arr, 'title');
console.log(newArr);
```

```
[ { title: 'Goal 1' },
  { title: 'Strategy 1.1' },
  { title: 'Activity 1.1.1' },
  { title: 'Activity 1.1.2' },
  { title: 'Activity 1.1.3' },
  { title: 'Strategy 1.2' },
  { title: 'Strategy 1.3' },
  { title: 'Goal 2' },
  { title: 'Goal 3' } ]
```
