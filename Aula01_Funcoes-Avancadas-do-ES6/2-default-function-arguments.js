//Default Function Arguments

//Lidando com parâmetros em função clássica:
function multiply(a, b) {
    return a * b;
}

console.log(multiplay(5, 4)); //20


//Comum haver comportamentos atípicos ao lidar com parâmetros de funções
//Podia ocorrer erros assim:
function multiply(a, b) {
    return a * b;
}

console.log(multiply(5)); //NaN  porque esqueceu-se de passar 1 número e a multiplicação foi de 
                          //5 * undefined(número não definido)

//As resoluções antigas para isso eram:
//1 - Recorrer ao operador lógico || (OU) 
function multiply(a, b) {
    b = b || 1; //b vale o parâmetro passado(se ele for true) ou 1, para efetuar a multiplicação
                //garantindo que undefined é valerá 1
    return a * b;
}

console.log(multiply(5)); //5


//Problema com uso do operador lógico || 
function multiply(a, b) {
    b = b || 1; //Ao invés de 5 * 0, a validação aqui, lê 0 como false e vai para o true que é 1
                        //Resultando num comportamento atípico (undefined é false)
    return a * b;
}

console.log(multiply(5, 0)); //Passando 0 como parâmetro para o b    //5   mesmo resultado


//Usando a validação de tipo para resolver o problema com o operador lógico ||
function multiply(a, b) {
    b = typeof b === undefined ? 1 : b; //Se for undefined atribua 1 senão b
                                        //Não usa operador lógico e não lê 0 como false mais
    return a * b;
} 

console.log(multiply(5, 0)); //0     Assim o comportamento seria como o esperado
                                    //Se eu omitir 1 número, também irá funcionar

//Porém esse método é verboso


//(Poderia usar também)Usando if para resolver o problema com o operador lógico ||
function multiply(a, b) {
    if (typeof b === 'undefined') {
        b = 1;
    }

    return a + b;
}

console.log(multiply(5));

//Porém continua verboso, também dificulta para outros desenvolvedores lerem o código e entenderem



//Com o ES6, posso atribuir valores padrão/default function arguments sem
//ser verboso com toda a validação necessária naqueles casos, e que se comporta da mesma maneira 
//em casos em que o parâmetro não é passado, ou passado com valor undefined
function multiply(a, b = 1) { //basta usar o sinal =
    return a * b;
}

console.log(multiply(5)); //5    se aqui for (5, 0) também vai funcionar normalmente


//Fazer referência a outro parâmetro
function multiply(a, b = a){  //b tem o mesmo valor de a
    return a * b;
}

console.log(multiply(5)); //25  5 * 5 (a = 5, b = a), ambos são 5

//* Prestar atenção na ordem porque é importante, porque se o valor vier após ele será lido como 
//undefined, porque ainda não foi atribuido, definido
function multiply(b = a, a) { //Dará erro, porque irá ler b como undefined, já que a não tem um 
    return a * b;             //valor quando b é chamado
}

console.log(multiply(5)); //NaN
//Uncaught ReferrenceError: Cannot access 'a' before initialization
//*ATENÇÃO na ordem!


//Usando Lazy Evaluation
//Supondo que queremos um número randômico toda vez que alguém esqueça de passar um parâmetro
function randomNumber() {
    console.log('Generating a random number...');

    return Math.random() * 10;
}

function multiply(a, b = randomNumber()){ //b é apenas um número aleatório quando não é passado
    return a * b;      //A função randomNumber() só é chamada no caso de b não ser definido
}

console.log(multiply(5));
console.log(multiply(5));   //Toda vez que você deixa de passar um parâmetro a função é invocada 
                            //novamente(lazy evaluation)

/*
(Avaliação preguiçosa)
LAZY EVALUATION(ou CALL-BY-NEED) = Na teoria de linguagem de programação, é uma estratégia de 
avaliação o que atrasa a avaliação de uma expressão até que o seu valor seja necessário(e não na sua atribuição) 
e que também evita repetidas avaliações(as avaliações são diferentes).
- Basicamente, só é executada quando chamada, quando necessária.
- O exemplo acima, é bom para gerar IDs randômicos, disparar erros caso a pessoa esqueça de passar
algum parâmetro e outros em que a função gere um valor.
*/