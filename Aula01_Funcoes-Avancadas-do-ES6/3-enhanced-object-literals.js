//Enhanced Object Literals

//Maneira clássica de se escrever
var obj = {
    prop1: 'Digital Innovation One'
};
/*
- Abre-se chaves
- Dentro dessas chaves é possível declarar propriedades e métodos
*/



//Outra maneira de atribuir valores para propriedades e métodos, na maneira clássica
//Referenciando uma variável
var prop1 = 'Digital Innovation One';

var obj = {
    prop1: prop1  //Fazendo referência à variável prop1 ao criar a propriedade prop1
};

console.log(obj); // { prop1: 'Digital Innovation One' }