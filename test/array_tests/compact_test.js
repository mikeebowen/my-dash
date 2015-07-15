'use strict';

var chai = require('chai');
var expect = chai.expect;
var compact = require('../../methods/array/compact.js');

describe('Test Compact Function', function (done) {
  it('should remove falsey values from an array', function (done) {
    var testArr = [1, false, 0, '', 'eggplant'];
    var returnedArr = compact(testArr);
    expect(returnedArr).to.eql([1, 'eggplant']);
    done();
  });
});
