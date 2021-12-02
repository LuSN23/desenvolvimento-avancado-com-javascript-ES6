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
//Referenciando uma variável(Modelo clássico)
var prop1 = 'Digital Innovation One';

var obj = {
    prop1: prop1  //Fazendo referência à variável prop1 ao criar a propriedade prop1
};

console.log(obj); // { prop1: 'Digital Innovation One' }

//Referenciando uma variável(ES6)
//Propriedade:
var prop1 = 'Digital Innovation One';

var obj = {
    prop1       //Omitindo o lado direito(shorthand/abreviação) do que repetir o nome da variável que 
                //é o mesmo da propriedade, o JS agora entende que tá fazendo a referência sozinho
};              //propriedade e variável

//Método
function method1() {
    console.log('method called');
}

var obj = {
    method1        //O mesmo que com propriedade e variável
};            

obj.method1();    //método e função



//Escrevendo método dentro de objeto na versão clássica
var obj = {
    sum: function sum(a, b) {      //Aqui pode ser uma função anônima também function(a, b) {} 
        return a + b;
    }
};

console.log(obj.sum(1,5));  //6

//Escrevendo método dentro de objeto no ES6
var obj = {
    sum(a, b) {       //A mesma coisa, sem escrever sum 2 vezes, como propriedade e como nome de função 
        return a + b; //e omitindo function
    }
};

console.log(obj.sum(1, 5)); //6
console.log(obj); //Para visualizar que foi criado um método sum dentro de obj

//É possível escrever diretamente a função, sem até mesmo a palavra function, 
//deixando menos código e sendo mais direto ao ponto