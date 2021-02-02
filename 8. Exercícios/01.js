/* Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
    função) e com ponto de exclamação "!" no final.
    Exemplos:
    cumprimentar("Leonardo") // retornará "Olá, Leonardo!"
    cumprimentar("Maria") // retornará "Olá, Maria!" */

// Resolução 1
function cumprimentar1(text) {
    let intro = 'Olá, '
    console.log(intro.concat(text,'!'));
}

cumprimentar1('Leonardo');
cumprimentar1('Maria');


// Resolução 2
const cumprimentar2 = text => console.log(`Olá, ${text}!`)

cumprimentar2('Leonardo');
cumprimentar2('Maria');