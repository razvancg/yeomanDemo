'use strict';

angular.module('imdbAppApp')
  .filter('boldRed', function ($filter) {
    return function (input) {
		return input.replace(new RegExp('red', 'ig'), '<strong>RED</strong>');
    };
  });
