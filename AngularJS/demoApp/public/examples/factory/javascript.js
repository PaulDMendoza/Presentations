/// <reference path="../../../typings/angularjs/angular.d.ts"/>
(function() {
  var app = angular.module('myApp', []);
  
  app.controller('myController', function($scope, getID, time) {
  	  	$scope.id = getID;
        $scope.date = time.now();
  });
  
  app.factory('getID', function() {
    return "42";
  });
  
  app.factory('time', function() {
    return {
     now: function() {
       return new Date();
     } 
    };
  });
  
}());

