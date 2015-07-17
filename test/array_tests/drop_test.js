'use strict';

var chai = require('chai');
var expect = chai.expect;
var drop = require('../../methods/array/drop');

describe('Test Drop Function', function (done) {
  it('should trim off from the beginning of an array given as the first argument by the number given in the second argument', function (done) {
    expect(drop([1, 2, 3, 4], 3)).to.eql([4]);
    done();
  });
});
