/// <reference path="../../../typings/angularjs/angular.d.ts"/>
(function() {
  var app = angular.module('myApp', []);
  
  app.controller('myController', function(z, x) {
  	  	z.counter = 0;
		x(function() {
			z.counter = z.counter + 1;
			console.log("Counter: " + z.counter);
		}, 1000);
  });
}());