// Code goes here
angular.module('child2app', ['ngRoute'])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/home', {
                template: '{{message}}',
                controller: 'HomeCtrl',
                controllerAs: 'home'
            })
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
        //Handle all exceptions
        $routeProvider.otherwise({
            redirectTo: '/home'
        });

    })
    .controller('HomeCtrl', function() {
        this.message = "Hello Child 2!";
    })
    .controller('View1Ctrl', function(){
        this.message = "Hello! I'm view 1 of child 2!"
    })
    .controller('View2Ctrl', function(){
        this.message = "Hello! I'm view 2 of child 2!"
    });
