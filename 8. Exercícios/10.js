/* Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.
Exemplos:
simboloMais(2) // retornará "++"
simboloMais(4) // retornará "++++" */

// Resolução 1
function simboloMais1 (qtd) {
    if(qtd==1) return '+';
    return '+'.concat(simboloMais1(qtd-1))
}

console.log(simboloMais1(2))
console.log(simboloMais1(5))
console.log(simboloMais1(9))


// Resolução 2
function simboloMais2 (qtd) {
    return console.log(Array(qtd).fill('+').join(''))
}

simboloMais2(2)
simboloMais2(5)
simboloMais2(9)

// Resolução professor
function simboloMais3 (qtd) {
    return '+'.repeat(qtd);
}

console.log(simboloMais3(2))
console.log(simboloMais3(5))
console.log(simboloMais3(9))