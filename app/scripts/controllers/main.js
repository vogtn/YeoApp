'use strict';

/**
 * @ngdoc function
 * @name yeoAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeoAppApp
 */
angular.module('yeoAppApp').config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist(['**']);
});
angular.module('yeoAppApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'Mangos'
    ];
    $scope.search  = function(custom) {
      var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne";
      flickrAPI = flickrAPI + "?" + "&tags=" + encodeURIComponent(custom) + "&format=json";
      console.log(flickrAPI);
      $http.get(flickrAPI).
      then(function(data) {
      $scope.posts = data;
    })

      // $http.jsonp(flickrAPI, {jsonpCallbackParam: 'callback'})
      //   .then(function(data) {
      //     console.log(data);
      //     $custom.data = data;
      // });
    };
  });
