import { expect } from 'chai';
import { describe, it } from 'mocha';
import sortByChapter from '../lib/index';

const stringArray = [
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
const stringArrayWithNull = [
  'Goal 1',
  'Goal 2',
  'Goal 3',
  'Strategy 1.1',
  'Strategy 1.2',
  'Strategy 1.3',
  'Activity 1.1.1',
  'Activity 1.1.2',
  'Activity 1.1.3',
  null,
];
const stringArrayWithUndefined = [
  'Goal 1',
  'Goal 2',
  'Goal 3',
  'Strategy 1.1',
  'Strategy 1.2',
  'Strategy 1.3',
  'Activity 1.1.1',
  'Activity 1.1.2',
  'Activity 1.1.3',
  undefined,
];
const stringArrayWithNoNumber = [
  'Goal 1',
  'Goal 2',
  'Goal 3',
  'Strategy 1.1',
  'Strategy 1.2',
  'Strategy 1.3',
  'Activity 1.1.1',
  'Activity 1.1.2',
  'Activity 1.1.3',
  'Activity',
];
const emptyArray = [];
const undefinedArray = undefined;
const nullArray = null;
const objectArray = [
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
const objectArrayWithUndefinedAttribute = [
  { title: 'Goal 1' },
  { title: 'Goal 2' },
  { title: 'Goal 3' },
  { title: 'Strategy 1.2' },
  { title: 'Strategy 1.3' },
  { title: 'Activity 1.1.1' },
  { title: 'Activity 1.1.2' },
  { title: 'Activity 1.1.3' },
  { title: undefined },
];
const objectArrayWithUndefined = [
  { title: 'Goal 1' },
  { title: 'Goal 2' },
  { title: 'Goal 3' },
  { title: 'Strategy 1.2' },
  { title: 'Strategy 1.3' },
  { title: 'Activity 1.1.1' },
  { title: 'Activity 1.1.2' },
  { title: 'Activity 1.1.3' },
  undefined,
];
const objectArrayWithNull = [
  { title: 'Goal 1' },
  { title: 'Goal 2' },
  { title: 'Goal 3' },
  { title: 'Strategy 1.2' },
  { title: 'Strategy 1.3' },
  { title: 'Activity 1.1.1' },
  { title: 'Activity 1.1.2' },
  { title: 'Activity 1.1.3' },
  null,
];
const objectArrayWithNullAttribute = [
  { title: 'Goal 1' },
  { title: 'Goal 2' },
  { title: 'Goal 3' },
  { title: 'Strategy 1.2' },
  { title: 'Strategy 1.3' },
  { title: 'Activity 1.1.1' },
  { title: 'Activity 1.1.2' },
  { title: 'Activity 1.1.3' },
  { title: null },
];

describe('Array of string', () => {
  it('Should be sorted', () =>
    expect(sortByChapter(stringArray, undefined)).to.eql([
      'Goal 1',
      'Strategy 1.1',
      'Activity 1.1.1',
      'Activity 1.1.2',
      'Activity 1.1.3',
      'Strategy 1.2',
      'Strategy 1.3',
      'Goal 2',
      'Goal 3',
    ]));
  it('Should not be sorted', () =>
    expect(sortByChapter(stringArrayWithNull, undefined)).to.eql([
      'Goal 1',
      'Goal 2',
      'Goal 3',
      'Strategy 1.1',
      'Strategy 1.2',
      'Strategy 1.3',
      'Activity 1.1.1',
      'Activity 1.1.2',
      'Activity 1.1.3',
      null,
    ]));
  it('Should be sort numbered only', () =>
    expect(sortByChapter(stringArrayWithNoNumber, undefined)).to.eql([
      'Goal 1',
      'Strategy 1.1',
      'Activity 1.1.1',
      'Activity 1.1.2',
      'Activity 1.1.3',
      'Strategy 1.2',
      'Strategy 1.3',
      'Goal 2',
      'Goal 3',
      'Activity',
    ]));
});
describe('Array of object', () => {
  it('Should be sorted', () =>
    expect(sortByChapter(objectArray, 'title')).to.eql([
      { title: 'Goal 1' },
      { title: 'Strategy 1.1' },
      { title: 'Activity 1.1.1' },
      { title: 'Activity 1.1.2' },
      { title: 'Activity 1.1.3' },
      { title: 'Strategy 1.2' },
      { title: 'Strategy 1.3' },
      { title: 'Goal 2' },
      { title: 'Goal 3' },
    ]));
  it('Should be sorted', () =>
    expect(sortByChapter(objectArray, { attribute: 'title' })).to.eql([
      { title: 'Goal 1' },
      { title: 'Strategy 1.1' },
      { title: 'Activity 1.1.1' },
      { title: 'Activity 1.1.2' },
      { title: 'Activity 1.1.3' },
      { title: 'Strategy 1.2' },
      { title: 'Strategy 1.3' },
      { title: 'Goal 2' },
      { title: 'Goal 3' },
    ]));
});

// describe('Array with Any Option', () => {
//   const [first, , , , , , , , last] = sortByChapter(stringArray, { attribute: 'title' });

//   it('Last should be "Goal 3"', () => expect(last).to.equal('Goal 3'));
// });

// describe('Array of Object with No Option', () => {
//   const [first, , , , , , , , last] = sortByChapter(objectArray, 'title');
//   it('First should be "Goal 1"', () => expect(first.title).to.equal('Goal 1'));
//   it('Last should be "Activity 1.1.3"', () => expect(last.title).to.equal('Activity 1.1.3'));
// });

// describe('Array of Object with Empty Option', () => {
//   const [first, , , , , , , , last] = sortByChapter(objArr, {});
//   it('First should be "Goal 1"', () => expect(first.title).to.equal('Goal 1'));
//   it('Last should be "Activity 1.1.3"', () => expect(last.title).to.equal('Activity 1.1.3'));
// });

// describe('Array of Object with Invalid Option', () => {
//   const [first, , , , , , , , last] = sortByChapter(objArr, 666);
//   it('First should be "Goal 1"', () => expect(first.title).to.equal('Goal 1'));
//   it('Last should be "Activity 1.1.3"', () => expect(last.title).to.equal('Activity 1.1.3'));
// });

// describe('Array of Object with Empty String Option', () => {
//   const [{ title: firstTitle }, , , , , , , , { title: lastTitle }] = sortByChapter(objArr, '');
//   it('First should be "Goal 1"', () => expect(firstTitle).to.equal('Goal 1'));
//   it('Last should be "Activity 1.1.3"', () => expect(lastTitle).to.equal('Activity 1.1.3'));
// });

// describe('Array of Object with String Option', () => {
//   const [first, , , , , , , , last] = sortByChapter(objArr, 'title');
//   it('First should be "Goal 1"', () => expect(first.title).to.equal('Goal 1'));
//   it('Last should be "Goal 3"', () => expect(last.title).to.equal('Goal 3'));
// });

// describe('Array of Object', () => {
//   const [first, , , , , , , , last] = sortByChapter(objArr, {
//     attribute: 'title',
//   });
//   it('First should be "Goal 1"', () => expect(first.title).to.equal('Goal 1'));
//   it('Last should be "Goal 3"', () => expect(last.title).to.equal('Goal 3'));
// });

// describe('Array of Object with Invalid String Option', () => {
//   const [first, , , , , , , , last] = sortByChapter(objArr, 'name');
//   it('First should be "Goal 1"', () => expect(first.title).to.equal('Goal 1'));
//   it('Last should be "Activity 1.1.3"', () => expect(last.title).to.equal('Activity 1.1.3'));
// });

// describe('Array of Object with Invalid Attribute Option', () => {
//   const [first, , , , , , , , last] = sortByChapter(objArr, {
//     attribute: 'name',
//   });
//   it('First should be "Goal 1"', () => expect(first.title).to.equal('Goal 1'));
//   it('Last should be "Activity 1.1.3"', () => expect(last.title).to.equal('Activity 1.1.3'));
// });

// describe('Array of Object with String Option and Invalid Attribute Value', () => {
//   const [first, , , , , , , , last] = sortByChapter(objArr2, 'title');
//   it('First should be "Goal 1"', () => expect(first.title).to.equal('Goal 1'));
//   it('Last should be "Activity 1.1.3"', () => expect(last.title).to.equal('Activity 1.1.3'));
// });

// describe('Array of Object with Object Option and Invalid Attribute Value', () => {
//   const [first, , , , , , , , last] = sortByChapter(objArr2, {
//     attribute: 'title',
//   });
//   it('First should be "Goal 1"', () => expect(first.title).to.equal('Goal 1'));
//   it('Last should be "Activity 1.1.3"', () => expect(last.title).to.equal('Activity 1.1.3'));
// });
