"use strict";

app.config(function ($stateProvider) {
    $stateProvider
        .state({
            name: 'login',
            url: '/login',
            controller: 'LoginCtrl',
            templateUrl: 'templates/login.tmpl.html'
        })
        .state({
            name: 'signup',
            url: '/signup',
            controller: 'SignupCtrl',
            templateUrl: 'templates/signup.tmpl.html'
        })
        .state({
            name: 'home',
            url: '/home',
            controller: 'HomeCtrl',
            templateUrl: 'templates/home.tmpl.html'
        })
        .state({
            name: 'demo',
            url: '/demo',
            controller: 'DemoCtrl',
            templateUrl: 'templates/demo.tmpl.html'
        });
});