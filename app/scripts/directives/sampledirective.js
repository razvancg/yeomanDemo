'use strict';

angular.module('imdbAppApp')
  .directive('sampleDirective', function () {
	return {
    restrict: 'AE',
    replace: false,
    template: "<span>{{time+'000' | date:'fullDate'}}",
    link: function(scope, elem, attrs) {
      scope.time = attrs.sampleTimeAiered;
    }
  };
});
