let p = new Promise(function(cumprirPromessa){
    cumprirPromessa(3);
});

p.then(function(valor){
    console.log(valor);
})

// uma Promise gera apenas UM valor. Para mais valores, deve-se utilizar array, objeto, etc...


let q = new Promise(function(cumprirPromessa){
    cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel']);
});

q
    .then(valor => valor[0]) // Para o próximo .then, retornará: Ana
    .then(primeiro => primeiro[0]) // Para o próximo .then, retornará primeira letra: A
    .then(letra => letra.toLowerCase()) // Para o próximo .then, retornará: a
    .then(letraMinuscula => console.log(letraMinuscula)) // Imprimirá: a
    // O resultado de um método .then é passado para o próximo .then


// Também pode-se utilizar funções 
const primeiroElemento = stringOuArray => stringOuArray[0];
const letraMinuscula = letra => letra.toLowerCase();

// No caso de não reutilizar a Promise, pode-se aplicar o .then logo após a criação
new Promise(resolve => resolve(['Pedro', 'Tiago', 'João', 'No Barquinho']))
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log)