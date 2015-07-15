'use strict';

var chai = require('chai');
var expect = chai.expect;
var chunk = require('../../methods/array/chunk');

describe('Chunk Function Test', function (done) {
  it('should chunk an array', function (done) {
    var testArray = [1, 2, 3, 4, 5, 6];
    var testVal = chunk(testArray, 2);
    expect(testVal).to.eql([[1, 2], [3, 4], [5, 6]]);
    done();
  });

  it('should extra numbers in an their own array', function (done) {
    var testArray2 = [1, 2, 3, 4, 5, 6, 7];
    var testVal2 = chunk(testArray2, 3);
    expect(testVal2).to.eql([[1, 2, 3], [4, 5, 6], [7]]);
    done();
  })

});
