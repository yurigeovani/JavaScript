const nums = [1, 2, 3, 4, 5];

// o Map é um For com propósito
// cria um novo array do mesmo tamanho do array de origem mas com valores obedecendo uma lógica

let resultado = nums.map(function(e){
    return e*2;
});

console.log(resultado)

const soma10 = e=> e+10;
const triplo = e=> e*3;
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro); // há a possibilidade de utilizar mais de um map.
console.log(resultado)