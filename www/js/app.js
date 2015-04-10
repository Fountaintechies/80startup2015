var startup = angular.module('startup', ['ui.router']);

startup.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'templates/home.html'

        })

        .state('add', {
            url: '/add',
            templateUrl: 'templates/add_startup.html'
        })

        .state('details', {
            url: '/details',
            templateUrl: 'templates/details.html'
        })
});
