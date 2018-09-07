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

    findAll(callback){
        try{
            this._con.query('SELECT * FROM usuario', callback);
        } catch(error){
            console.log(error);
        }
    }

    findById(id, callback){
        try{
            this._con.query('SELECT * FROM usuario where usuario.id = ?', id, callback);
        } catch(error){
            console.log(error);
        }
    }

    update(id, usuario, callback){
        try{
            this._con.query('UPDATE usuario SET ? WHERE id = ? ', [usuario, id], callback);
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