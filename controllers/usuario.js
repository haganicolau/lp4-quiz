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

    /** GET /usuario:id
     *  rota que obtém um único usuário pelo id passado por parâmetro (find by id)
     *  quando queremos definir um parâmetro definimos :id, assim, o que vier na rota /usuario/2 o 2 é o id de um usuário
     */
    app.get('/usuario/:id', function(req, resp){
        data = req.params;
        var con = app.persistencia.connectionFactory;
        var dao = new app.persistencia.usuarioDAO(con);

        /**
         * função assíncrona para obter o usuário pelo id
         */
        dao.findById(data.id, function(exception, result){
            
            /** 
             * tratamento se result vier vazio, quer dizer que não foi encontrado nenhum usuário, assim retorna 404, código http para não encontrado
            */
            if(result.length == 0){
                resp.status(404);
                resp.send({"message":"usuario não encontrado"});
            }

            /**
             * se usuário é encontrado, retorna a posição 0, pq como buscamos pelo id, deve ter apenas um usuário
             */
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

        /**
         * o put temos tanto o parâmetro que é o id do usuário, quanto elementos no corpo da requisição com os dados novos
         */
        param = req.params;
        novo = req.body;

        var con = app.persistencia.connectionFactory;
        var dao = new app.persistencia.usuarioDAO(con);

        /**
         * primeiro passo na alteraçaõ do usuário é buscar o usuário pelo id
         */
        dao.findById(param.id, function(exception, result){

            /**
             * verifica se houve alguma exception, se houver, retorna 500, código http para erro
             */
            if(exception){
                resp.status(500);
                resp.send({"mensagem":"erro ao salvar usuário"});
                console.log(exception);
            }
            
            /**
             * se result vazio mensagem de usuário não encontrado junto com código http 404
             */
            if(result.length == 0){
                resp.status(404);
                resp.send({"message":"usuario não encontrado"});
            }

            /**
             * dados do usuário são alterados, observação: a partir do usuário já registrado no banco, antigo, alteramos
             * os atributos que vieram na request (novo), desta forma, garantimos que um usuário existente está sendo alterado
             */
            antigo = result[0];
            antigo.nome = novo.nome;
            antigo.email = novo.email;
            antigo.senha = novo.senha;

            /**
             * Passo 2, alteramos os dados do usuário por meio de uma função assíncrona de update no banco
             */
            dao.update(param.id, antigo, function(exception, result){
                console.log(exception);
                resp.send({"messagem":"alterado com sucesso"});
            });
            
        });
    });

    /** DELETE /usuario 
     *  rota que permite deletar um usuário existente
    */
    app.delete('/usuario', function(req, resp){

    })
}