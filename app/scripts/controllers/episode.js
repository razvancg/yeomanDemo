'use strict';

angular.module('imdbAppApp')
  .controller('EpisodeCtrl', function ($scope, $http, $routeParams, getmovie) {
    $scope.episodeDetails = [];
	
	$scope.movieId = $routeParams.movieId;
	$scope.seasonId = $routeParams.seasonId;
	$scope.epId = $routeParams.epId;
	console.log($routeParams);
	
	
	console.log(getmovie.movieDetails($scope.movieId, $scope.seasonId, $scope.epId));
	
	$http.jsonp("http://api.trakt.tv/show/episode/stats.json/TRAKTKEY/" + $scope.movieId + "/" + $scope.seasonId + "/" + $scope.epId + "?callback=JSON_CALLBACK")
	.success(function(data, status, headers, config) {
		$scope.episodeDetails = data;
		console.log(data);
	}).error(function(data, status, headers, config) {
		$scope.episodeDetails = [];
	});
  });