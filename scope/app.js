/* global angular */

var testApp = angular.module('testApp', []);

testApp.controller('TestController', ['$scope', function($scope) {
    $scope.numberValue = 12;
    $scope.stringValue = "this is a string";
    $scope.objectValue = null;
    $scope.arrayValue = [{
        message: 'outside'
    }, {
        message: 'w1'
    }, {
        message: 'w2'
    }];
}]);

testApp.directive('w1', function() {
    return {
        restrict: 'EA',
        templateUrl: 'w1.html',
        scope: {
            numberValue: '=',
            stringValue: '=',
            objectValue: '=',
            arrayValue: '='
        },
        link: function(scope) {
            scope.changeValue = function() {
                scope.numberValue = 1111;
                scope.stringValue = 'string change by w1';
                scope.objectValue = scope.arrayValue[1];
            };

            window.changeValueNativeW1 = function() {
                scope.numberValue = 1111;
                scope.stringValue = 'native change by w1';
                scope.objectValue = scope.arrayValue[1];
                scope.$apply();
            };
        }
    };
});


testApp.directive('w2', function() {
    return {
        restrict: 'EA',
        templateUrl: 'w2.html',
        scope: {
            numberValue: '=',
            stringValue: '=',
            objectValue: '=',
            arrayValue: '='
        },
        link: function(scope) {
            scope.changeValue = function() {
                scope.numberValue = 1111;
                scope.stringValue = 'string change by w2';
                scope.objectValue = scope.arrayValue[2];
            };

            window.changeValueNativeW2 = function() {
                scope.numberValue = 1111;
                scope.stringValue = 'native change by w2';
                scope.objectValue = scope.arrayValue[2];
                scope.$apply();
            };
        }
    };
});