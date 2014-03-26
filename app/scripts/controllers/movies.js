'use strict';

angular.module('imdbAppApp')
  .controller('MoviesCtrl', function ($scope, $http) {
    $scope.moviesList = [];
	
	var movieOne = {'name': 'Criminal Minds', 'description': 'First movie description', 'id': 'criminal-minds'},
		movieTwo = {'name': 'The Mentalist', 'description': 'Second movie description', 'id': 'the-mentalist'};
	
	$scope.moviesList.push(movieOne);
	$scope.moviesList.push(movieTwo);
  });
