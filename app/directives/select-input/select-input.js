/**
 * Created by Otávio on 18/08/2015.
 */
(function() {
    'use strict';

    angular.module("oobjDirectives").directive("selectInput", select);

    select.$inject = ['$rootScope'];
    function select($rootScope) {
        return {
            restrict: 'E',
            templateUrl: 'app/directives/select-input/select-input.html',
            scope: {
                values: '=',
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