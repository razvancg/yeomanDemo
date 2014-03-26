'use strict';

angular.module('imdbAppApp')
  .service('Getepisodes', function Getepisodes($http) {
    this.getEpisodes = function(movieId, seasonId) {
        return $http.jsonp("http://api.trakt.tv/show/season.json/TRAKTKEY/" + movieId + "/" + seasonId + "?callback=JSON_CALLBACK");
	
    };
  });
