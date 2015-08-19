/**
 * Created by Otávio on 17/08/2015.
 */
angular.module('helloWorldApp').controller('CadastroPessoaController', CadastroPessoaController);

CadastroPessoaController.$inject = ['$scope'];
function CadastroPessoaController($scope) {
    $scope.salvar = function() {
        alert("salvar");
    };
    $scope.limpar = function() {

    };
    $scope.excluir = function() {

    };
}