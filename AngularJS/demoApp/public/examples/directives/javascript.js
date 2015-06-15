/// <reference path="../../../typings/angularjs/angular.d.ts"/>
(function() {
  var app = angular.module('myApp', []);
  
  app.controller('myController', function($scope) {
  	  	
  });
  
  app.directive('helloWorld', function() {
	 return {
		  template: 'Hello World'
	  };
  });
  
}());

