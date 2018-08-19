/*Query para criar usuário e seus atributos*/
CREATE TABLE lp4.usuario (
	id INT NOT NULL AUTO_INCREMENT COMMENT 'id do usuário',
	nome varchar(100) NOT NULL COMMENT 'nome do usuario',
	email varchar(100) NOT NULL COMMENT 'email do usuario',
	senha varchar(255) NOT NULL COMMENT 'senha criptografada',
	secret varchar(100) NOT NULL COMMENT 'secret para fazre login',
	perfil INT NOT NULL COMMENT 'tipo de usuário: 1-admin, 2-professor, 3-aluno',
	CONSTRAINT usuario_PK PRIMARY KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8
COLLATE=utf8_general_ci;