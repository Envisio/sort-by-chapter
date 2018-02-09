const sortByChapter = require('../lib/index');
const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;

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

describe('Array', function () {
  describe('.first', function () {
    it('should be "Goal 1"', function () {
      expect(sortByChapter(arr)[0]).to.equal('Goal 1');
    })
  });
  describe('.last', function () {
    it('should be "Strategy 1.3"', function () {
      expect(sortByChapter(arr)[8]).to.equal('Goal 3');
    })
  })
});

describe('Array with Empty Options', function () {
  describe('.first', function () {
    it('should be "Goal 1"', function () {
      expect(sortByChapter(arr, {})[0]).to.equal('Goal 1');
    })
  });
  describe('.last', function () {
    it('should be "Strategy 1.3"', function () {
      expect(sortByChapter(arr, {})[8]).to.equal('Goal 3');
    })
  })
});

describe('Array of Object', function () {
  describe('.first', function () {
    it('should be "Goal 1"', function () {
      expect(sortByChapter(objArr, { attribute: 'title' })[0].title).to.equal('Goal 1');
    })
  });
  describe('.last', function () {
    it('should be "Strategy 1.3"', function () {
      expect(sortByChapter(objArr, { attribute: 'title' })[8].title).to.equal('Goal 3');
    })
  })
});