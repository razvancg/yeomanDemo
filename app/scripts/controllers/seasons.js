'use strict';

angular.module('imdbAppApp')
  .controller('SeasonsCtrl', function ($scope, getseasons, $routeParams) {
    $scope.seasonsList = [];
	
	$scope.movieId = $routeParams.movieId;
	console.log($routeParams);
	
	getseasons.getSeasonsMethod($scope.movieId).success(function(data, status, headers, config) {
		$scope.seasonsList = data;
	}).error(function(data, status, headers, config) {
		$scope.seasonsList = [];
	});
	console.log($scope.seasonsList);
  });

