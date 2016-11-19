'use strict';
var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/', {templateUrl: 'templates/view_index/index.html',
            controller: 'indexCtrl'})
        .otherwise({redirectTo : '/'});
});
