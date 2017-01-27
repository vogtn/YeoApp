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
      var flickrAPI = 'https://api.flickr.com/services/feeds/photos_public.gne';
      flickrAPI = flickrAPI + '?' + '&tags=' + encodeURIComponent(custom) + '&format=json';

      console.log(flickrAPI);
      // $http.jsonp(flickrAPI, function(data){
      //   console.log(data.title);
      // }).catch(function(e){
      //   console.log(e);
      // });
      $http.jsonp(flickrAPI, {callbackParam:'JSON_CALLBACK'}).then(function(response){
        console.log(response);
      }).catch(function(e){
        console.log(e);
      });
    };
  });
