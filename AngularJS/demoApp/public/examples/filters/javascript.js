/// <reference path="../../../typings/angularjs/angular.d.ts"/>
(function() {
  var app = angular.module('myApp', []);
  
  app.controller('myController', function($scope) {
  	  	$scope.ceos = [
				{ name: 'Bill Gates', sex: 'male' },
				{ name: 'Larry Page', sex: 'male' },
				{ name: 'Sergey Brin', sex: 'male' },
				{ name: 'Oprah Winfrey', sex: 'female' },
				{ name: 'Elon Musk', sex: 'male' },
				{ name: 'Jeff Bezos', sex: 'male' },
				{ name: 'Mark Zuckerberg', sex: 'male' },
				{ name: 'Tim Cook', sex: 'male' },
				{ name: 'Warren Buffet', sex: 'male' },
				{ name: 'Marissa Mayer', sex: 'female' }				
			];
  });
  
  app.filter('voweless', function() {
	  return function(input) {
	    return input.replace(/[aeiouAEIOU]/g, '');
	  };
	});
  
}());

