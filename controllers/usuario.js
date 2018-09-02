/** module.exports:
 *      O module.exports é um objeto especial que é incluído em todos os arquivos JS no aplicativo Node.js por padrão. 
 *      module é uma variável que representa o módulo atual e as exportações são um objeto que será exposto como um módulo. 
 *      Então, o que você designar para module.exports, será exposto como um módulo.
 */
module.exports = function(app){
 
    /** GET /usuario
     *  rota que obtém lista de usuários (find all)
     */
    app.get('/usuario', function(request, response){
        
    });
    
    /** POST /usuario 
     *  rota que permite criar um novo usuário
    */
    app.post('/usuario', function(req, resp){
        /**Propriedade que permite manipular o body da requisição */
        data = req.body;

        /**objetos quer me permite conectar no banco e maninpular as operações */
        var con = app.persistencia.connectionFactory;
        var dao = new app.persistencia.usuarioDAO(con);
        
        /**função assíncrona, como não sabemos quanto tempo irá demorar a conexão com banco. 
         * É importante que as operações sejam assíncronas. O quer dizer que a função create
         * será realizada, porém não será aguardado um retorno, as rotinas irão continuar sem 
         * um retorno de create, por isto tempos a função anônima passada no segundo parâmetro 
         * que é responsável por manipular o retorno da fução assíncrona. 
         */
        dao.create(data, function(exception, result){
            console.log(exception);  
            console.log(result);
        });

        console.log('teste');
    });
    
    /** PUT /usuario 
     *  rota que permite alterar um usuário pelo id
    */
    app.put('/usuario', function(req, resp){

    });

    /** DELTE /usuario 
     *  rota que permite deletar um usuário existente
    */
    app.delete('/usuario', function(req, resp){

    })
}