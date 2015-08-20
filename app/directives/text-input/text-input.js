/**
 * Created by Otávio on 18/08/2015.
 */
(function() {
    'use strict';

    angular.module("oobjDirectives").directive("textInput", textInput);

    textInput.$inject = ['$rootScope'];
    function textInput($rootScope) {
        return {
            restrict: 'E',
            templateUrl: 'app/directives/text-input/text-input.html',
            scope: {
                ngModel: '=',
                label: '@',
                colspan: '@',
                ngRequired: '=?',
                ngDisabled: '=?',
            },
            link: function($scope, element, attr) {
                $scope.classInputText = "col-sm-3";

                if(angular.isDefined($scope.colspan)) {
                    $scope.classInputText = "col-sm-"+$scope.colspan;
                }
            }
        };
    };
})();
