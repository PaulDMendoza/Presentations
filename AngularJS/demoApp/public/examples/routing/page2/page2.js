(function() {
  var app = angular.module('myApp');
  
  app.controller('page2Ctrl', function($scope) {
  	  	$scope.name = 'John Smith';
	    $scope.dateOnController = new Date();
  });
  
}());