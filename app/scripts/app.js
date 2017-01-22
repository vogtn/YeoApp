'use strict';

/**
 * @ngdoc overview
 * @name yeoAppApp
 * @description
 * # yeoAppApp
 *
 * Main module of the application.
 */
angular
  .module('yeoAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
