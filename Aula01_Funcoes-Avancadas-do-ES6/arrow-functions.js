//Arrow Functions:

//Função clássica 
function log(value) {
    console.log(value);
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
    console.log(value);
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

console.log(sumOld(5, 20));

//Função sum com Arrow Function 
var sum = (a, b) => a + b;   //Omitindo return(apenas uma expressão)

console.log(sum(5, 15));

/*
- Obrigatoriamente usar os caractéres =>
- São funções anônimas então tem que ser atríbuidas à variáveis ou inseridas como argumentos 
de funções.
- Tem diferentes maneiras de se escrever.

//Passos:
- Omitir a palavra function.
- Parênteses(na maioria dos casos) para os argumentos.
- E o retorno implícito no lado direito.
*/
