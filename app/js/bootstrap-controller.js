/**
 * Created by Otávio on 11/08/2015.
 */
angular.module('helloWorldApp').controller('BootstrapController', BootstrapController).config(['growlProvider', function (growlProvider) {
    growlProvider.globalTimeToLive(3000);
    growlProvider.onlyUniqueMessages(false);
}]);

BootstrapController.$inject = ['$scope', 'growl'];
function BootstrapController($scope, growl) {
    $scope.novo = true;
    $scope.pessoas = [];
    $scope.pessoa = {
        nome: "Otávio"
    }
    $scope.salvar = function() {
        if($scope.formPessoa.$invalid) {
            growl.warning("Existem erros no formulário", {title: 'Erro!'});
            return;
        }
        if(!$scope.pessoa) return;
        $scope.pessoas.push($scope.pessoa);
        $scope.limpar();
    }
    $scope.limpar = function() {
        $scope.formPessoa.$setPristine();
        $scope.pessoa = {};
        $scope.novo = true;
    }
    $scope.excluir = function(p) {
        if(p) $scope.pessoa = p;
        $scope.pessoas.splice($scope.pessoas.indexOf($scope.pessoa), 1);
        $scope.limpar();
    }
    $scope.editar = function(item) {
        $scope.pessoa = item;
        $scope.novo = false;
    }
}
