'use strict';

describe('Controller: EpisodeCtrl', function () {

  // load the controller's module
  beforeEach(module('imdbAppApp'));

  var EpisodesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EpisodesCtrl = $controller('EpisodeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
