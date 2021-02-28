/* Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de
vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar
maiúsculas de minúsculas.
Exemplos:
contarCaractere("r", "A sorte favorece os audazes") // retornará 2
contarCaractere("c", "Conhece-te a ti mesmo") // retornará 1 */



const contarCaractere = (caractere, string) => console.log(string.split(caractere).length-1)

contarCaractere("r", "A sorte favorece os audazes") // retornará 2
contarCaractere("c", "Conhece-te a ti mesmo") // retornará 1
contarCaractere(`a`,`aa A b a`);


// Teacher resolution
function contarCaractere2 (caractere, string){
    return console.log([...string].filter(e => e === caractere).length)
}

contarCaractere2("r", "A sorte favorece os audazes") // retornará 2
contarCaractere2("c", "Conhece-te a ti mesmo") // retornará 1
contarCaractere2(`a`,`aa A b a`);