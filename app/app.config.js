'use strict';

var app = angular.module('myApp', ['ngRoute'])
.config(function($routeProvider){
    $routeProvider
        .when('/', {templateUrl: 'templates/view_index/index.html',
            controller: 'indexCtrl'})
        .otherwise({redirectTo : '/'});
});

var user = angular.module('myApp.user', ['ngRoute', 'myApp'])
.config(function($routeProvider){
    $routeProvider
        .when('/', {templateUrl: 'templates/view_user/user.html',
            controller: 'userCtrl'})
        .when('/step1', {templateUrl: 'templates/view_user/step1.html',
            controller: 'step1Ctrl'})
        .when('/step2', {templateUrl: 'templates/view_user/step2.html',
            controller: 'step2Ctrl'})
        .when('/step3', {templateUrl: 'templates/view_user/step3.html',
            controller: 'step3Ctrl'})
        .otherwise({redirectTo : '/'});
});

