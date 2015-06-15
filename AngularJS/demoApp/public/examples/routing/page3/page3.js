(function() {
  var app = angular.module('myApp');
  
  app.controller('page3Ctrl', function($scope, $routeParams) {
  	  	$scope.message = $routeParams.message;
  });
  
}());