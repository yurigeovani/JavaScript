// function declaration
// ao utilizar a function declaration, a função estará disponível em todo o código, inclusive antes.
// todas as functions declaration são carregadas antes de executar o código.
// diferente da function expression e named function expression, somente executam após declaração da função
console.log(soma(3,4));
function soma (x, y) {
    return x + y;
}

// function expression
const sub = function (x, y) {
    return x-y;
}
console.log(sub(3,4));

// named function expression
const mult = function mult (x, y){
    return x*y;
}
console.log(mult(3,4));