//Arrow Functions:

//Função clássica 
function log(value) {
    console.log(value); // test
}

log('test');

/*
- palavra function
- nome para a função(nome opcional)
- parênteses, dentro os argumentos da função
*/

//Função anônima
//Atribuindo a uma variável:
var log = function(value) {
    console.log(value);   //test
};

log('test');
/*
2 maneiras de usá-las:
        1 - Atribuindo a uma variável
        2 - Passando-as como argumento de outra função(funções de primeira-classe)
*/

//Surgimento das 'Arrow Functions' com o ES6
//Função sum(sumOld) da maneira clássica
var sumOld = function(a, b) {
    return a + b;
};

console.log(sumOld(5, 20)); //25

//Função sum com Arrow Function (Return implícito)
var sum = (a, b) => a + b;   //Omitindo return(apenas uma expressão)

console.log(sum(5, 15)); //20

/*
- Obrigatoriamente usar os caractéres =>
- São funções anônimas então tem que ser atríbuidas à variáveis ou inseridas como argumentos 
de funções.
- Tem diferentes maneiras de se escrever.

//Passos:
- Omitir a palavra function.
- Parênteses(na maioria dos casos) para os argumentos.
- E o retorno implícito no lado direito.


- Tudo que não for uma expressão como: 
ternários, 
operadores lógicos, 
funções invocadas e já retornando algo, 
sempre que fazer um statement, como:
- Declaração de variáveis,
- Condicionais com if e 
- outros, obrigatoriamente tem que ter chaves que envolveram o bloco.
*/
//Return não implícito(com chaves envolvendo o bloco obrigatórias):
var sum = (a, b) => {
    var x = 10;

    if (a > b) {

    }
    return a + b;
}

console.log(sum(5, 6)); //11


//Parênteses dos argumentos
//Quando há apenas 1 argumento posso omití-los
var sum = a => a + 5; 
console.log(sum(5));  //10

//Quando há um destructuring assignment é obrigatório usar os parênteses
var sum = ({ a }) => a; //Sintaxe de destructuring ({})

//Para fazer um REST operator também é obrigatório usar os parênteses
var sum = (...a) => a;

//Com default values também é obrigatório o uso dos parênteses
var sum = (a = 5) => a;



//Como são declarados object literals da maneira clássica
var obj = {
    test: '123'
};


//Return de Object Literals com Arrow Functions
var createObj = () => ({ teste: 123 }); //Para indicar retorno de um objeto literal, 
                                        //o uso de chaves dentro dos parênteses
console.log(createObj());

//1ª forma de construir objetos no JavaScript = Object Literals/Objetos Literais