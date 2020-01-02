const { expect } = require('chai');
const { describe, it } = require('mocha');
const sortByChapter = require('../lib/index');

const arr = ['Goal 1', 'Goal 2', 'Goal 3', 'Strategy 1.1', 'Strategy 1.2', 'Strategy 1.3', 'Activity 1.1.1', 'Activity 1.1.2', 'Activity 1.1.3'];

const objArr = [
  { title: 'Goal 1' },
  { title: 'Goal 2' },
  { title: 'Goal 3' },
  { title: 'Strategy 1.1' },
  { title: 'Strategy 1.2' },
  { title: 'Strategy 1.3' },
  { title: 'Activity 1.1.1' },
  { title: 'Activity 1.1.2' },
  { title: 'Activity 1.1.3' },
];

describe('Array', () => {
  const [first, , , , , , , , last] = sortByChapter(arr);

  it('First should be "Goal 1"', () => expect(first).to.equal('Goal 1'));
  it('Last should be "Goal 3"', () => expect(last).to.equal('Goal 3'));
});

describe('Array with Any Option', () => {
  const [first, , , , , , , , last] = sortByChapter(arr, { foo: 'bar' });

  it('First should be "Goal 1"', () => expect(first).to.equal('Goal 1'));
  it('Last should be "Goal 3"', () => expect(last).to.equal('Goal 3'));
});

describe('Array of Object with No Option', () => {
  const [first, , , , , , , , last] = sortByChapter(objArr);
  it('First should be "Goal 1"', () => expect(first.title).to.equal('Goal 1'));
  it('Last should be "Activity 1.1.3"', () => expect(last.title).to.equal('Activity 1.1.3'));
});

describe('Array of Object with Empty Option', () => {
  const [first, , , , , , , , last] = sortByChapter(objArr, {});
  it('First should be "Goal 1"', () => expect(first.title).to.equal('Goal 1'));
  it('Last should be "Activity 1.1.3"', () => expect(last.title).to.equal('Activity 1.1.3'));
});

describe('Array of Object with Invalid Option', () => {
  const [first, , , , , , , , last] = sortByChapter(objArr, 666);
  it('First should be "Goal 1"', () => expect(first.title).to.equal('Goal 1'));
  it('Last should be "Activity 1.1.3"', () => expect(last.title).to.equal('Activity 1.1.3'));
});

describe('Array of Object with Empty String Option', () => {
  const [{ title: firstTitle }, , , , , , , , { title: lastTitle }] = sortByChapter(objArr, '');
  it('First should be "Goal 1"', () => expect(firstTitle).to.equal('Goal 1'));
  it('Last should be "Activity 1.1.3"', () => expect(lastTitle).to.equal('Activity 1.1.3'));
});

describe('Array of Object with String Option', () => {
  const [first, , , , , , , , last] = sortByChapter(objArr, 'title');
  it('First should be "Goal 1"', () => expect(first.title).to.equal('Goal 1'));
  it('Last should be "Goal 3"', () => expect(last.title).to.equal('Goal 3'));
});

describe('Array of Object', () => {
  const [first, , , , , , , , last] = sortByChapter(objArr, { attribute: 'title' });
  it('First should be "Goal 1"', () => expect(first.title).to.equal('Goal 1'));
  it('Last should be "Strategy 1.3"', () => expect(last.title).to.equal('Goal 3'));
});
