'use strict';

var assert = require('assert');
var s18n = require('../');

describe('s18n.map()', function() {

  it('should be a method', function() {
    assert.notEqual(typeof s18n, 'undefined');
    assert.equal(typeof s18n.map, 'function');
  });

  it('should be called', function() {
    s18n.map();
  });

});
