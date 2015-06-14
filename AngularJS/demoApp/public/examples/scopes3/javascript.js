/// <reference path="../../../typings/angularjs/angular.d.ts"/>
(function() {
  var app = angular.module('myApp', []);
  
  app.controller('myController', function($scope) {
  	  $scope.counter = 0;
      // I want to do something every time the counter changes...
  });
}());