const nome = 'Rebeca';
const concatenacao = "Olá " + nome + "!";
const templateQuebraDeLinha = `
    Olá,
    ${nome}!`

    const templateUmaLinha = `
    Olá, ${nome}!`

console.log("Concatenação normal: " + concatenacao);

console.log("Concatenação com Template String e quebra de linha: " + templateQuebraDeLinha);

console.log("Concatenação com Template String e quebra de linha: " + templateUmaLinha);

// expressões...
console.log(`1 + 1 = ${1+1}`);

const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}!`)