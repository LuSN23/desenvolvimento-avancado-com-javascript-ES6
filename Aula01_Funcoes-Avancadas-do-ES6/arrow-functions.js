//Arrow Functions

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
