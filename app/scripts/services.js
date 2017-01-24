angular.module('yeoAppApp.services', [])
  .controller('FlickrController', ['$scope', '$http', function ($scope, $http) {
    $scope.master = {};
      $scope.images = {};

      $scope.search = function (searchCriteria) {

        if (searchCriteria.tags == undefined || searchCriteria.tags.trim() == "") {
          searchCriteria.tags = null;
          $scope.master = angular.copy(searchCriteria);
          $scope.form.$submitted = true;
          return false;
        }
        $scope.form.tags.$setUntouched();
        $scope.form.tags.$setValidity();

        // build URL for Flickr API
        var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne";

        flickrAPI = flickrAPI + "?jsoncallback=JSON_CALLBACK"
          + "&tags=" + encodeURIComponent($scope.searchCriteria.tags)
          + "&tagmode=" + $scope.searchCriteria.mode
          + "&format=json";

        // send AJAX query to Flickr API
        $http.jsonp(flickrAPI)
          .success(function (data, status, headers, config) {
          $scope.images = data;
          $scope.imagesStatus = status;

        })

        // trap error if any
          .error(function (data, status, headers, config) {
          $scope.images = data;
          $scope.imagesStatus = status;
        });

        // reset form validation
        $scope.form.tags.$setValidity();
      };

      // reset form to initial state
      $scope.resetForm = function (form) {
        $scope.form.tags.$setValidity();
        $scope.images = {};
        $scope.searchCriteria = {};
      };

}]);
