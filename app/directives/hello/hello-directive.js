/**
 * Created by Otávio on 18/08/2015.
 */
(function() {
    'use strict';

    angular.module("oobjDirectives").directive("hello", hello);

    function hello() {
        return {
            restrict: 'E',
            template: '<h1>Olá mundo... Eu sou uma diretiva muito legal!</h1>'
        };
    };
})();