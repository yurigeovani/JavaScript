// Armazenando uma função em uma variável
const imprimirSoma = function(a, b){
    console.log(a+b);
}

imprimirSoma(2,3);


// Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b;
}

console.log(soma(2,5));


// Retorno implicito
const subtracao = (a,b) => a - b;

console.log(subtracao(6,4));


// Retorno implicito com apenas um parâmetro
const quadrado = a => a*a;

console.log(quadrado(8))