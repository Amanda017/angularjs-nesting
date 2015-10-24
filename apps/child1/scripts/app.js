// Code goes here
angular.module('child1app', ['ngRoute'])
    .constant("config", {appName: 'APP1'})
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/view1', {
                templateUrl: 'views/view1.html',
                controller: 'View1Ctrl',
                controllerAs: 'view1'
            })
            .when('/view2', {
                templateUrl: 'views/view2.html',
                controller: 'View2Ctrl',
                controllerAs: 'view2'
            });

    })
    .controller('HomeCtrl', function(config) {
        this.message = "Hello I'm " + config.appName + "!!!";
    })
    .controller('View1Ctrl', function(config){
        this.message = "Hello! I'm view 1 of " + config.appName + "!"
    })
    .controller('View2Ctrl', function(config){
        this.message = "Hello! I'm view 2 of " + config.appName + "!"
    })
;
