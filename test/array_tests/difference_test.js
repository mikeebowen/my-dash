'use strict';

var chai = require('chai');
var expect = chai.expect;
var difference = require('../../methods/array/difference');

describe('Difference Function Test', function (done) {
  it('should return a new array without the excluded values', function (done) {
    expect(difference([1, 2, 3, 'apple'], ['apple', 3])).to.eql([1, 2]);
    done();
  });
});
