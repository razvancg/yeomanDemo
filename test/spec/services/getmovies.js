'use strict';

describe('Service: getmovies', function () {

  // load the service's module
  beforeEach(module('imdbAppApp'));

  // instantiate service
  var getmovies;
  beforeEach(inject(function (_getmovies_) {
    getmovies = _getmovies_;
  }));

  it('should do something', function () {
    expect(!!getmovies).toBe(true);
  });

});
