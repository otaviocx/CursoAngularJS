/**
 * Created by Otávio on 10/08/2015.
 */

(function() {
    function resolver(path) {
        return {
            deps: function($ocLazyLoad) {
                return $ocLazyLoad.load({
                    files: [
                        'app/views/'+path+'-controller.js'
                    ]
                });
            }
        };
    }

    angular.module('helloWorldApp', ['oobjDirectives', 'ngMessages', 'angular-growl',
            'ui.grid', 'ui.grid.resizeColumns',
            'ui.grid.selection',
            'ui.router', 'oc.lazyLoad'])
        .config(config);

    config.$inject = ['$urlRouterProvider', '$stateProvider'];
    function config($urlRouterProvider, $stateProvider, $rootScope) {
        var home = {
            url: '/',
            templateUrl: 'app/views/home.html'
        };

        var produto = {
            url: '/produto/:id',
            templateUrl: 'app/views/produto/cadastro-produto.html',
            resolve: resolver('produto/cadastro-produto')
        };

        var produtoPesquisa = {
            url: '/pesquisa',
            templateUrl: 'app/views/produto/pesquisa-produto.html',
            resolve: resolver('produto/pesquisa-produto')
        };

        var pessoa = {
            abstract: true,
            url: '/pessoa',
            template: '<ui-view/>',

        };

        var pessoaCadastro = {
            url: '/cadastro',
            templateUrl: 'app/views/pessoa/cadastro-pessoa.html',
            resolve: resolver('pessoa/cadastro-pessoa')
        };

        var pessoaPesquisa = {
            url: '/pesquisa',
            templateUrl: 'app/views/pessoa/pesquisa-pessoa.html',
            resolve: resolver('pessoa/pesquisa-pessoa')
        };

        $stateProvider
            .state('home', home)
            .state('produto', produto)
            .state('produto.pesquisa', produtoPesquisa)

            .state('pessoa', pessoa)
            .state('pessoa.cadastro', pessoaCadastro)
            .state('pessoa.pesquisa', pessoaPesquisa);

        $urlRouterProvider.otherwise("/");
    };
})();
