function HelloWorldController(a){a.nome="Otavio",a.myStyle={},a.myClass="",a.myStyle.width="100px",a.myStyle.height="100px",a.$watch("nome",function(b,c){b!=c&&(void 0!=b&&"oobj"==b?(a.myStyle.backgroundColor="green",a.myClass="blue"):(a.myStyle.backgroundColor="yellow",a.myClass="red"))})}function BootstrapController(a,b,c){c.$on("$stateChangeStart",function(a,b,c,d,e){}),c.$on("$stateChangeSuccess",function(a,b,c,d,e){}),c.$on("$stateNotFound",function(a,b,c,d){}),a.novo=!0,a.pessoas=[],a.pessoa={nome:"Otávio"},a.gridOptions={data:"pessoas",columnDefs:[{name:"Nome",field:"nome",cellTemplate:"app/templates/cell-template.html"},{name:"Sobrenome",field:"sobrenome",cellTemplate:"app/templates/cell-template.html"},{name:"E-mail",field:"email",cellTemplate:"app/templates/cell-template.html"},{name:"Data de Nascimento",field:"nascimento",cellTemplate:"app/templates/cell-date-template.html"},{name:"Ações",field:"acoes",cellTemplate:"app/templates/cell-buttons-template.html"}],enableColumnMenus:!1,rowTemplate:"app/templates/row-template.html"},a.gridItemClick=function(a,b,c){console.log(a)},a.getRowStyle=function(a){var b={};return angular.isDefined(a.entity.cor)&&(b.backgroundColor=a.entity.cor),b},a.salvar=function(){return a.formPessoa.$invalid?void b.warning("Existem erros no formulário",{title:"Erro!"}):void(a.pessoa&&(a.pessoas.push(a.pessoa),a.limpar()))},a.limpar=function(){a.formPessoa.$setPristine(),a.pessoa={},a.novo=!0},a.excluir=function(b){b&&(a.pessoa=b),a.pessoas.splice(a.pessoas.indexOf(a.pessoa),1),a.limpar()},a.editar=function(b){a.pessoa=b,a.novo=!1}}angular.module("helloWorldApp",["ngMessages","ui.growl","ui.router","ngMaterial"]).controller("HelloWorldController",HelloWorldController),HelloWorldController.$inject=["$scope"],angular.module("helloWorldApp").controller("BootstrapController",BootstrapController).config(["growlProvider",function(a){a.globalTimeToLive(3e3),a.onlyUniqueMessages(!1)}]),BootstrapController.$inject=["$scope","growl","$rootScope"];