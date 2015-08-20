/**
 * Created by Otávio on 18/08/2015.
 */
(function() {
    'use strict';

    angular.module("oobjDirectives").directive("crud", crud);

    crud.$inject = ['$rootScope'];
    function crud($rootScope) {
        return {
            restrict: 'E',
            templateUrl: 'app/directives/crud/crud.html',
            transclude: true,
            scope: {
                titulo: '@',
                acaoSalvar: '&',
                acaoExcluir: '&',
                acaoLimpar: '&'
            },
            link: function ($scope, element, attr) {
                $scope.salvar = function () {
                    if (angular.isFunction($scope.acaoSalvar)) {
                        $scope.acaoSalvar();
                    }
                };
                $scope.excluir = function () {
                    if (angular.isFunction($scope.acaoExcluir)) {
                        $scope.acaoExcluir();
                    }
                };
                $scope.limpar = function () {
                    if (angular.isFunction($scope.acaoLimpar)) {
                        $scope.acaoLimpar();
                    }
                };
            }
        };
    };
})();