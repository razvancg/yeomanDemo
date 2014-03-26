'use strict';

angular.module('imdbAppApp')
  .factory('getseasons', function ($http) {

    return {
		getSeasonsMethod: function (movieId) {
			var results = [],
				jsonPUrl = "http://api.trakt.tv/show/seasons.json/TRAKTKEY/" + movieId + "?callback=JSON_CALLBACK";
			return $http.jsonp(jsonPUrl);
		}
    };
  });
