'use strict';

/**
 * @ngdoc overview
 * @name webApp
 * @description
 * # webApp
 *
 * Main module of the application.
 */
angular
  .module('webApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',            
    'nvd3ChartDirectives'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })      
      .when('/alert', {
        templateUrl: 'views/alert.html',
        controller: 'AlertCtrl'
      })
      .when('/gh-ht', {
        templateUrl: 'views/gh-ht.html',
        controller: 'GhHtCtrl'
      })
      .when('/gh-lux', {
        templateUrl: 'views/gh-lux.html',
        controller: 'GhLuxCtrl'
      })
      .when('/media-ht', {
        templateUrl: 'views/media-ht.html',
        controller: 'MediaHtCtrl'
      })
      .when('/media-ecph', {
        templateUrl: 'views/media-ecph.html',
        controller: 'MediaEcphCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
