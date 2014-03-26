'use strict';

describe('Service: Getepisodes', function () {

  // load the service's module
  beforeEach(module('imdbAppApp'));

  // instantiate service
  var Getepisodes;
  beforeEach(inject(function (_Getepisodes_) {
    Getepisodes = _Getepisodes_;
  }));

  it('should do something', function () {
    expect(!!Getepisodes).toBe(true);
  });

});
