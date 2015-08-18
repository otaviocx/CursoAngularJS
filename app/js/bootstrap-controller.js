/**
 * Created by Otávio on 11/08/2015.
 */
angular.module('helloWorldApp').controller('BootstrapController', BootstrapController).config(['growlProvider', function (growlProvider) {
    growlProvider.globalTimeToLive(3000);
    growlProvider.onlyUniqueMessages(false);
}]);

BootstrapController.$inject = ['$scope', 'growl', '$rootScope'];
function BootstrapController($scope, growl, $rootScope) {
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        //alert(toState.name+"/"+fromState.name);
    });

    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        //alert("Bla:"+toState.name+"/"+fromState.name);
    });

    $rootScope.$on('$stateNotFound', function(event, notfoundstate, fromState, fromParams) {
       // alert("Blabel:"+notfoundstate+"/"+fromState.name);
    });

    $scope.novo = true;
    $scope.pessoas = [];
    $scope.pessoa = {
        nome: "Otávio"
    }

    $scope.gridOptions = {
        data: 'pessoas',
        columnDefs: [
            {name: 'Nome', field:'nome', cellTemplate: 'app/templates/cell-template.html'},
            {name: 'Sobrenome', field:'sobrenome', cellTemplate: 'app/templates/cell-template.html'},
            {name: 'E-mail', field:'email', cellTemplate: 'app/templates/cell-template.html'},
            {name: 'Data de Nascimento', field:'nascimento', cellTemplate: 'app/templates/cell-date-template.html'},
            {name: 'Ações', field:'acoes', cellTemplate: 'app/templates/cell-buttons-template.html'}
        ],
        enableColumnMenus:false,
        rowTemplate: 'app/templates/row-template.html'
    };

    $scope.gridItemClick = function(row, col, colIndex) {
        console.log(row);
    };

    $scope.getRowStyle = function(row) {
        var rowStyle = {};
        if(angular.isDefined(row.entity.cor)) {
            rowStyle.backgroundColor = row.entity.cor;
        }
        return rowStyle;
    };

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
