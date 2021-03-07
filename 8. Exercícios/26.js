/* Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as
consoantes, ou seja, sem as vogais.
Exemplos:
removerVogais("Cod3r") // retornará "Cd3r"
removerVogais("Fundamentos") // retornará "Fndmnts" */


function removerVogais (palavra) {
    let vogais = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'];
    let resultado = [];

    for(let i of palavra){
        let count = 0;
         for(let j of vogais){
            if(i!=j){
                count++;
            }
        }
        if(count==vogais.length){
            resultado.push(i);
        }
    }

    return console.log(resultado.join(''))
}


removerVogais("Cod3r") // retornará "Cd3r"
removerVogais("Fundamentos") // retornará "Fndmnts"


// Teacher resolution
function removerVogais2 (palavra){
    let vogais = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'];
    vogais.forEach(vogal => palavra = palavra.replace(vogal, ''));
    return console.log(palavra)
}

removerVogais2("Cod3r") // retornará "Cd3r"
removerVogais2("Fundamentos") // retornará "Fndmnts"