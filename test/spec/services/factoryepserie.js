'use strict';

describe('Service: factoryEpSerie', function () {

  // load the service's module
  beforeEach(module('imdbAppApp'));

  // instantiate service
  var factoryEpSerie;
  beforeEach(inject(function (_factoryEpSerie_) {
    factoryEpSerie = _factoryEpSerie_;
  }));

  it('should do something', function () {
    expect(!!factoryEpSerie).toBe(true);
  });

});
