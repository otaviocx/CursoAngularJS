function HelloWorldController(a){a.nome="Otavio",a.myStyle={},a.myClass="",a.myStyle.width="100px",a.myStyle.height="100px",a.$watch("nome",function(b,c){b!=c&&(void 0!=b&&"oobj"==b?(a.myStyle.backgroundColor="green",a.myClass="blue"):(a.myStyle.backgroundColor="yellow",a.myClass="red"))})}angular.module("helloWorldApp",["ngMessages","ui.growl","ui.router","ngMaterial"]).controller("HelloWorldController",HelloWorldController),HelloWorldController.$inject=["$scope"];