/*  custom-exress.js:
*      Responsável por ter a configuração da aplicação
*/

/** require: 
 *      é a forma de importar as dependências que foram instaladas pelo npm
 *      necessário que as dependências sejam instaldas pelo: 
 *      npm install --save nomeDependencia (o --save é para inserir no packge.json)
 */

/** express: 
 *     O Express é um framework para aplicativo da web do Node.js mínimo e flexível que fornece 
 *     um conjunto robusto de recursos para aplicativos REST.  Configuração de rotas, recursos HTTP*/
var express = require('express');

/** consign:
 *     O Consign facilita o desenvolvimento de aplicativos com separação lógica de arquivos e carregamento automático de scripts. 
 *     Consign pode ser usado para carregar automaticamente modelos, rotas, esquemas, configurações, controladores, mapas de objetos ... etc
*/
var consign = require('consign');

module.exports = function(){
    var app = express();
    consign()
        .include('controllers')
        .into(app);

    return app;
}