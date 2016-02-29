var app = angular.module('calApp', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
    
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'features/calendar/calendarTmpl.html',
            controller: 'calendarCtrl'
        });
    
    $urlRouterProvider
        .otherwise('/');
    
});