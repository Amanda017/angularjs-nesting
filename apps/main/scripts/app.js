// Code goes here
angular.module('app', ['ngRoute','app.core', 'app.user', 'app.settings'])
    .config(function($routeProvider) {
        $routeProvider.when('/home', {
            template: '{{message}}',
            controller: 'HomeCtrl'
        });
        //Handle all exceptions
        $routeProvider.otherwise({
            redirectTo: '/home'
        });
    })
    .config(function(MenuProvider) {
        MenuProvider.add({
            url: '/home',
            title: 'Home',
            icon: 'glyphicon-home'
        });
    })
    .controller('HomeCtrl', function($scope) {
        $scope.message = "Hello Home";
    });
