/* Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.
Obs: considere que um ano tem 365 dias. Desconsidere anos bissextos (com 366 dias) e
desconsidere também dias decorridos desde o último aniversário.
Exemplos:
converterIdadeEmAnosParaDias(25) // retornará 9125
converterIdadeEmAnosParaDias(70) // retornará 25550 */

// Resolução 1
const converterIdadeEmAnosParaDias1 = idade => idade*365;

console.log(converterIdadeEmAnosParaDias1(25));
console.log(converterIdadeEmAnosParaDias1(70));

// Resolução 2
function converterIdadeEmAnosParaDias2 (idade){
    let diasAno = 365;
    return idade*diasAno;
}

console.log(converterIdadeEmAnosParaDias2(25));
console.log(converterIdadeEmAnosParaDias2(70));