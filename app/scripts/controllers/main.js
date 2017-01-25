'use strict';

/**
 * @ngdoc function
 * @name yeoAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeoAppApp
 */
angular.module('yeoAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'Mangos'
    ];
    $scope.search  = function(custom) {
      $scope.custom = custom;
    };
  });
