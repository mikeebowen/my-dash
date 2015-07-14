'use strict';

require('./array_tests/chunk_test');

var chai = require('chai');
var expect = chai.expect;

describe('test that tests run', function (done) {

  it('should run a test', function (done) {
    expect(true).to.eql(true);
    done();
  })

})
