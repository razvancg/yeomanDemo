'use strict';

describe('Filter: boldRed', function () {

  // load the filter's module
  beforeEach(module('imdbAppApp'));

  // initialize a new instance of the filter before each test
  var boldRed;
  beforeEach(inject(function ($filter) {
    boldRed = $filter('boldRed');
  }));

  it('should return the input prefixed with "boldRed filter:"', function () {
    var text = 'angularjs';
    expect(boldRed(text)).toBe('boldRed filter: ' + text);
  });

});
