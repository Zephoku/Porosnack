'use strict';

/* Controllers */

angular.module('runeBuilder', []).controller("RuneCtrl", function($scope, $http) {
    $scope.runes = {};
    $http({method: 'GET', url: 'runes.json'}).success(function(data) {
        $scope.runes = data;
        console.log(data[0].name);
    });
});
