"use strict";angular.module("yeoAppApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).otherwise({redirectTo:"/"})}]),angular.module("yeoAppApp").config(["$sceDelegateProvider",function(a){a.resourceUrlWhitelist(["**"])}]),angular.module("yeoAppApp").controller("MainCtrl",["$scope","$http",function(a,b){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma","Mangos"],a.search=function(c){var d="http://api.flickr.com/services/feeds/photos_public.gne";d=d+"?&tags="+encodeURIComponent(c)+"&format=json",console.log(d),b.get(d).then(function(b){a.posts=b})}}]),angular.module("yeoAppApp").run(["$templateCache",function(a){a.put("views/main.html",'<div class="row marketing"> <h4>Angular Flicker</h4> <p> search for images below! </p> </div> <div class="well"> <form> <h1>Search:</h1> <input ng-model="userInput"> <button type="submit" ng-click="search(userInput)">submit</button> </form> <p>{{custom.data}}</p> <ul> <li ng-repeat="thing in awesomeThings"> <a>{{thing}}</a> </li> </ul> </div>')}]);