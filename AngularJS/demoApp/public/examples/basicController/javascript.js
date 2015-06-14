/// <reference path="../../../typings/angularjs/angular.d.ts"/>
(function() {
  var app = angular.module('myApp', []);
  
  app.controller('myController', function($scope, $http) {
  	  $http.get('/examples/basicController/users.json')
        .success(function(json) {
           $scope.users = json;
        });
  });
}());