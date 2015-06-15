/// <reference path="../../../typings/angularjs/angular.d.ts"/>
(function() {
  var app = angular.module('myApp', ['ngRoute']);
  
  app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/page1', {
        templateUrl: 'page1/page1.html',
      }).
      when('/page2', {
        templateUrl: 'page2/page2.html',
        controller: 'page2Ctrl'
      }).
      when('/page3', {
        templateUrl: 'page3/page3.html',
        controller: 'page3Ctrl'
      }).
      when('/page4', {
        templateUrl: 'page4/page4.html'
      }).
      otherwise({
        redirectTo: '/page1'
      });
  }]);
  
    
}());

