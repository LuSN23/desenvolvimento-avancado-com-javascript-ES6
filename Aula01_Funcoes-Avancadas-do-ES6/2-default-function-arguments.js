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