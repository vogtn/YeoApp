"use strict";angular.module("yeoAppApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).otherwise({redirectTo:"/"})}]),angular.module("yeoAppApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma","Mangos"]}]),angular.module("yeoAppApp").run(["$templateCache",function(a){a.put("views/main.html",'<div class="row marketing"> <h4>HTML5 Boilerplate</h4> <p> HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites. </p> </div> <div class="well"> <ul> <li ng-repeat="thing in awesomeThings"> <a>{{thing}}</a> </li> </ul> </div>')}]);