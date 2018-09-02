/**
 * class usuarioDAO responsável pelas operações com o banco de dados
 */
class usuarioDAO{
    constructor(connection){
        this._con = connection;
    }

    /**
     * 
     * @param usuario - dados do usuario
     * @param callback - função de retorno 
     */
    create(usuario, callback){
        try {
            this._con.query('INSERT INTO usuario set ?', usuario, callback);
        } catch(error){
            console.log(error);
        }
    }
}

/**
 * Expõem o módulo para outros módulos
 */
module.exports = function(){
    return usuarioDAO;
}