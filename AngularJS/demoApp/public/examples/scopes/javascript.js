/// <reference path="../../../typings/angularjs/angular.d.ts"/>
(function() {
  var app = angular.module('myApp', []);
  
  app.controller('topController', function($scope) {
  	  $scope.name = 'top';
  });
  
  app.controller('nestedController', function($scope) {
  	  $scope.name = 'bottom';
  });
}());