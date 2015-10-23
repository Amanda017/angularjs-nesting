angular.module('app.settings', ['app.core'])
    .config(function ($routeProvider) {
        $routeProvider.when('/settings', {
            template: '{{message}}',
            controller: 'SettingsCtrl'
        });
    })
    .config(function (MenuProvider) {
        MenuProvider.add({
            url: '/settings',
            title: 'Settings',
            icon: 'glyphicon-wrench'
        });
    })
    .controller('SettingsCtrl', function ($scope) {
        $scope.message = "Settings";
    });