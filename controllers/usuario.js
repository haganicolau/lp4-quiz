/** module.exports:
 *      O module.exports é um objeto especial que é incluído em todos os arquivos JS no aplicativo Node.js por padrão. 
 *      module é uma variável que representa o módulo atual e as exportações são um objeto que será exposto como um módulo. 
 *      Então, o que você designar para module.exports, será exposto como um módulo.
 */
module.exports = function(app){
 
    /** GET /usuario
     *  rota que obtém lista de usuários (find all)
     */
    app.get('/usuario', function(req, resp){
        var con = app.persistencia.connectionFactory;
        var dao = new app.persistencia.usuarioDAO(con);
        dao.findAll(function(exception, result){
            console.log(exception);
            if(exception){
                resp.status(500);
                resp.send({"message":"Error inesperado"});
            }

            if(result.length == 0){
                resp.status(404);
                resp.send({"message":"usuario não encontrado"});
            }

            resp.status(200);
            resp.send(result);
        });
    });

    app.get('/usuario/:id', function(req, resp){
        data = req.params;
        var con = app.persistencia.connectionFactory;
        var dao = new app.persistencia.usuarioDAO(con);

        dao.findById(data.id, function(exception, result){
            
            if(result.length == 0){
                resp.status(404);
                resp.send({"message":"usuario não encontrado"});
            }

            console.log(exception);
            resp.send(result[0]);
        });
        
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
            if(exception){
                resp.status(500);
                resp.send({"mensagem":"erro ao salvar usuário"});
                console.log(exception);
            }
           resp.status(201);
           resp.send(data);
        });
    });
    
    /** PUT /usuario 
     *  rota que permite alterar um usuário pelo id
    */
    app.put('/usuario/:id', function(req, resp){
        param = req.params;
        novo = req.body;

        var con = app.persistencia.connectionFactory;
        var dao = new app.persistencia.usuarioDAO(con);

        dao.findById(param.id, function(exception, result){

            if(exception){
                resp.status(500);
                resp.send({"mensagem":"erro ao salvar usuário"});
                console.log(exception);
            }
            
            if(result.length == 0){
                resp.status(404);
                resp.send({"message":"usuario não encontrado"});
            }

            antigo = result[0];
            antigo.nome = novo.nome;
            antigo.email = novo.email;
            antigo.senha = novo.senha;

            dao.update(param.id, antigo, function(exception, result){
                console.log(exception);
                resp.send({"messagem":"alterado com sucesso"});
            });
            
        });
    });

    /** DELTE /usuario 
     *  rota que permite deletar um usuário existente
    */
    app.delete('/usuario', function(req, resp){

    })
}