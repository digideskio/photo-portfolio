/**
 * Created by lucavgobbi on 3/21/15.
 */

var homeCtrl = angular.module('homeCtrl', []);

homeCtrl.controller('ShowHome', ['$scope', 'websiteConfig',
    function ($scope, websiteConfig) {
        $scope.config = websiteConfig;
        console.log($scope.config);
    }
]);
