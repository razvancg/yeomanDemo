'use strict';

describe('Controller: SeasonsCtrl', function () {

  // load the controller's module
  beforeEach(module('imdbAppApp'));

  var SeasonsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SeasonsCtrl = $controller('SeasonsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
