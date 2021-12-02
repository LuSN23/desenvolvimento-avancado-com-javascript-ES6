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


