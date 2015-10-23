/**
 * Created by enrico.costanzi on 23/10/2015.
 */
angular.module('app.core', [])
    .provider('Menu', function() {
    var _menu = [];

    this.$get = function() {
        return {
            getItems: function() {
                return _menu;
            }
        };
    };

    this.add = function(item) {
        _menu.push(item);
    };
});