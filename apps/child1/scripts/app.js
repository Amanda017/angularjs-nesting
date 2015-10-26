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
    .controller('HomeCtrl', function(config, $scope, $window) {
        var self = this;

        this.receivedMessages = [];
        this.message = config.appName;

        //receiving postmessage
        $window.addEventListener('message', function(event){
            console.log(config.appName + ": received message " + event.data);
            if(event.origin !== 'http://localhost:3000') return;

            if(event.data !== 'ping'){
                $scope.$applyAsync(function(){
                    self.receivedMessages.push(event.data);
                });
                event.source.postMessage('Roger!', event.origin);
            } else {
                event.source.postMessage('pong', event.origin);
            }

        })
    })
    .controller('View1Ctrl', function(config){
        this.message = "Hello! I'm view 1 of " + config.appName + "!"
    })
    .controller('View2Ctrl', function(config){
        this.message = "Hello! I'm view 2 of " + config.appName + "!"
    })
;
