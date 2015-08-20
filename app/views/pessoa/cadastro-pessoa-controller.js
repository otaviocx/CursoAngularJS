/**
 * Created by Otávio on 17/08/2015.
 */
(function() {
    'use strict';

    angular.module('helloWorldApp').controller('CadastroPessoaController', CadastroPessoaController);

    CadastroPessoaController.$inject = ['$scope'];
    function CadastroPessoaController($scope) {
        $scope.generos = [
            {value: 'F', label: 'Feminino'},
            {value: 'M', label: 'Masculino'}
        ];

        $scope.salvar = function () {
            alert("salvar");
        };
        $scope.limpar = function () {
            $scope.generos.push({value: 'I', label: 'Indiferente'});
        };
        $scope.excluir = function () {

        };
    }
})();