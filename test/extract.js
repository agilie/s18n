'use strict';

var assert = require('assert');
var s18n = require('../');

describe('s18n.extract()', function() {

  it('should have an "extract" method', function() {
    assert.equal(typeof s18n, 'object');
    assert.equal(typeof s18n.extract, 'function');
  });

  it('should extract locale strings from configured html attributes', function() {
    var html = '<img src="example.gif" data-custom="custom attribute">';
    var locale = s18n.extract(html, {
      attributes: ['data-custom']
    });
    assert.deepEqual(JSON.parse(locale), {
      '89f8af89':'custom attribute'
    });
  });

  it('should extract locale strings from configured html elements', function() {
    var html = '<h1>heading</h1><custom>Custom element</custom>';
    var locale = s18n.extract(html, {
      elements: ['custom']
    });
    assert.deepEqual(JSON.parse(locale), {
      '74251aeb':'Custom element'
    });
  });

  it('should extract locale strings from html elements with configured directives', function() {
    var html = '<div localize>This is a test.</div><div custom>custom directive</div>';
    var locale = s18n.extract(html, {
        directives : ['localize', 'custom']
      });
    assert.deepEqual(JSON.parse(locale), {
      '120ea8a2':'This is a test.',
      '6bd3b8ac':'custom directive'
    });
  });

  it('should allow other hash algorithms', function() {
    var html = '<p>This is a test.</p>';
    var locale = s18n.extract(html, {
        hashAlgorithm : 'rmd160'
      });
    assert.deepEqual(JSON.parse(locale), {
      '3c82f755':'This is a test.'
    });
  });

  it('should allow for different hash lengths', function() {
    var html = '<p>This is a test.</p>';
    var locale = s18n.extract(html, {
        hashLength : 13
      });
    assert.deepEqual(JSON.parse(locale), {
      '120ea8a25e5d4':'This is a test.'
    });
  });

});