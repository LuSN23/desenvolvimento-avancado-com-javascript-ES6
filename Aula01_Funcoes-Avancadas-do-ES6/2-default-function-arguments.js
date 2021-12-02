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