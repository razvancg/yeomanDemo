'use strict';

angular.module('imdbAppApp')
  .controller('SeasonCtrl', function ($scope, $http, $routeParams, Getepisodes) {
    $scope.episodesList = [];
	
	$scope.movieId = $routeParams.movieId;
	$scope.seasonId = $routeParams.seasonId;
	console.log($routeParams);
	
	Getepisodes.getEpisodes($scope.movieId, $scope.seasonId)
	.success(function(data, status, headers, config) {
		$scope.episodesList = data;
		console.log(data);
	}).error(function(data, status, headers, config) {
		$scope.episodesList = [];
	});
  });