
variavel1 = '';
var variavel2;
let variavel3;

var anonima = function(n){ console.log(n) };
anonima(2);


setTimeout(function(){
    console.log('entrou timeout');
}, 3000);
console.log('passou timeout');

pessoa = {
    'nome': 'hagamenon nicolau',
    'telefone': '123465',
    'endereco': 'bla bla balb abla blalbaba'
};

pessoas = [
    {
        'nome': 'Nome 1',
        'telefone': '123465',
        'endereco': 'bla bla balb abla blalbaba'
    },
    {
        'nome': 'nome 2',
        'telefone': '123465',
        'endereco': 'bla bla balb abla blalbaba'
    },
    {
        'nome': 'Nome 3',
        'telefone': '123465',
        'endereco': 'bla bla balb abla blalbaba'
    }
];

function funcaoNormal(n){
    console.log(n+2);
}

class Carro{
    constructor(modelo, marca, placa){
        this.modelo = modelo;
        this.marca = marca;
        this.placa = placa;
    }
}

car = new Carro("argo", "fiat", "ABD1234");
console.log(car);