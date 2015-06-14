/// <reference path="../../../typings/angularjs/angular.d.ts"/>
(function() {
  var app = angular.module('myApp', []);
  
  app.controller('topController', function($scope) {
  	  $scope.counter = 0;
      $scope.users = [
        { name: 'Tony Stark'},
        { name: 'Bruce Banner'},
        { name: 'Steve Rogers'}
      ];
  });
}());