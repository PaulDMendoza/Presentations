/// <reference path="../../../typings/angularjs/angular.d.ts"/>
(function() {
  var app = angular.module('myApp', []);
  
  app.controller('myController', function($scope) {
  	  	$scope.counter = 0;
		setInterval(function() {
			$scope.counter = $scope.counter + 1;
			console.log("Counter: " + $scope.counter);
		}, 1000);
  });
}());