'use strict';

angular.module('imdbAppApp')
  .provider('getmovie', function () {

    // Private variables
    var url = "http://api.trakt.tv/show/episode/stats.json/TRAKTKEY/";

    // Private constructor
    function Movie($http) {
      this.movieDetails = function (movieId, seasonId, epId) {
		console.log(movieId+ seasonId+ epId);
        return $http.jsonp("http://api.trakt.tv/show/episode/stats.json/TRAKTKEY/" + movieId + "/" + seasonId + "/" + epId + "?callback=JSON_CALLBACK");
      };
    }

    // Method for instantiating
    this.$get = function ($http) {
      return new Movie($http);
    };
  });
