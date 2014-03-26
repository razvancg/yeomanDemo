'use strict';

angular.module('imdbAppApp')
  .controller('NavbarCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.navClass = function (page) {
        var currentRoute = $location.path().substring(1) || 'main';
        return page === currentRoute ? 'active' : '';
    };        
}]);