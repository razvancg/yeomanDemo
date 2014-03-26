'use strict';

describe('Service: getseasons', function () {

  // load the service's module
  beforeEach(module('imdbAppApp'));

  // instantiate service
  var getseasons;
  beforeEach(inject(function (_getseasons_) {
    getseasons = _getseasons_;
  }));

  it('should do something', function () {
    expect(!!getseasons).toBe(true);
  });

});
