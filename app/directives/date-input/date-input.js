/**
 * Created by Otávio on 18/08/2015.
 */
(function() {
    'use strict';

    angular.module("oobjDirectives").directive("dateInput", dateInput);

    dateInput.$inject = ['$rootScope'];
    function dateInput($rootScope) {
        return {
            restrict: 'E',
            templateUrl: 'app/directives/date-input/date-input.html',
            scope: {
                format: '@',
                ngModel: '=',
                label: '@',
                colspan: '@',
                ngRequired: '=?',
                ngDisabled: '=?',
            },
            link: function ($scope, element, attr) {
                $("input", element).pickadate({format: $scope.format});
                $scope.classInputText = "col-sm-3";

                if (angular.isDefined($scope.colspan)) {
                    $scope.classInputText = "col-sm-" + $scope.colspan;
                }
            }
        };
    };
})();