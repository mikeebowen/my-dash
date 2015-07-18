'use strict';

var chai = require('chai');
var expect = chai.expect;
var dropRight = require('../../methods/array/dropRight');

describe('dropRight Function Check', function (done) {
  it('should trim an array by number entered as an argument', function (done) {
    expect(dropRight([1, 2, 3, 4, 5], 3)).to.eql([1, 2]);
    done()
  });
  it('should trime by one value if no second argument is entered', function (done) {
    expect(dropRight([1, 2, 3, 4, 5])).to.eql([1, 2, 3, 4]);
    done();
  });
});
