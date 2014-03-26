'use strict';

angular.module('imdbAppApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/movies', {
        templateUrl: 'views/movies.html',
        controller: 'MoviesCtrl'
      })
      .when('/movies/:movieId', {
        templateUrl: 'views/seasons.html',
        controller: 'SeasonsCtrl'
      })
      .when('/movies/:movieId/:seasonId', {
        templateUrl: 'views/season.html',
        controller: 'SeasonCtrl'
      })
      .when('/movies/:movieId/:seasonId/:epId', {
        templateUrl: 'views/episode.html',
        controller: 'EpisodeCtrl'
      })
      .otherwise({
        redirectTo: '/main'
      });
  });
