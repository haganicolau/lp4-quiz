/** objeto node*/
var pessoa = {
    "nome": "hagamenon",
    "telefone": "123456",
    "cpf": "123456"
};
/*array de objetos node*/ 
var pessoas = [
    {
        "nome": "nome1",
        "telefone": "123456",
        "cpf": "123456"
    },
    {
        "nome": "nome2",
        "telefone": "123456",
        "cpf": "123456"
    }
];

/** função node */
function somar(n){
    return 1+1+n;
}

/**em javascript, as variáveis pode receber qualquer coisa, tanto valores, quanto funções */
var funcao = function(){
    return 6+6+6+6;
}
//console.log(funcao());

/** função assíncrona, ou seja, quando executado o setTimeout o primeiro parâmetro é uma função anônima (nao possui nome), e o segundo parâmetro é o tempo de espera.  é uma função assíncrona pq não se sabe o tempo de execução e quando irá retornar, assim enquanto espera-se o tempo de execução da função, o resto do codigo é executado*/
setTimeout(function(){
    console.log('função assíncrona terminou!');
}, 3000);
console.log('executou o resto do código');