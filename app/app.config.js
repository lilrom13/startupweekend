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
        .otherwise({redirectTo : '/'});
});

