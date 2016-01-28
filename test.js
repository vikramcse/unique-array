var expect = require('chai').expect;
var unique = require('./index.js');

describe('Tests for array uniqueness', function () {
  it('should return unique array of numbers', function () {
    expect(unique([1, 2, 3, 4, 4, 5, 1, 6])).to.eql([1, 2, 3, 4, 5, 6]);
  });

  it('should return unique array of strings', function () {
    expect(unique(['a', 'b', 'github', 'a', 'github'])).to.eql(['a', 'b', 'github']);
  });
});
