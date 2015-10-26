angular.module('app.user', ['app.core'])
    .config(function ($routeProvider) {
        $routeProvider.when('/profile', {
            template: '{{message}}',
            controller: 'ProfileCtrl'
        });
        $routeProvider.when('/account', {
            template: '{{message}}',
            controller: 'AccountCtrl'
        });

    })
    .config(function (MenuProvider) {
        MenuProvider.add({
            url: '/profile',
            title: 'Profile',
            icon: 'glyphicon-user'
        });
        MenuProvider.add({
                url: '/account',
                title: 'Account',
                icon: 'glyphicon-th-large'
            }
        );
    })
    .controller('MenuCtrl', function ($scope, Menu) {
        $scope.menu = Menu.getItems();
    })
    .controller('ProfileCtrl', function ($scope) {
        $scope.message = "Profile";
    })
    .controller('AccountCtrl', function ($scope) {
        $scope.message = "Account";
    });