"use strict";angular.module("yeoAppApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).otherwise({redirectTo:"/"})}]),angular.module("yeoAppApp").config(["$sceDelegateProvider",function(a){a.resourceUrlWhitelist(["**"])}]),angular.module("yeoAppApp").controller("MainCtrl",["$scope","$http",function(a,b){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma","Mangos"],a.search=function(a){var c="https://api.flickr.com/services/feeds/photos_public.gne";c=c+"?&tags="+encodeURIComponent(a)+"&format=json",console.log(c),b.jsonp(c,{callbackParam:"JSON_CALLBACK"}).then(function(a){console.log(a)})["catch"](function(a){console.log(a)})}}]),angular.module("yeoAppApp").run(["$templateCache",function(a){a.put("views/main.html",'<div class="row marketing"> <h4>Angular Flicker</h4> <p> search for images below! </p> </div> <div class="well"> <form> <h1>Search:</h1> <input ng-model="userInput"> <button type="submit" ng-click="search(userInput)">submit</button> </form> <p>{{custom.data}}</p> <ul> <li ng-repeat="thing in awesomeThings"> <a>{{thing}}</a> </li> </ul> </div>')}]);