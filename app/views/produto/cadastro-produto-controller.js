/**
 * Created by Otávio on 17/08/2015.
 */
angular.module('helloWorldApp').controller('CadastroProdutoController', CadastroProdutoController);

CadastroProdutoController.$inject = ['$scope', '$stateParams', '$state'];
function CadastroProdutoController($scope, $stateParams, $state) {
    $scope.produtoId = $stateParams.id;

    //$state.go("pessoa.cadastro", {bla: $scope.produtoId});
}