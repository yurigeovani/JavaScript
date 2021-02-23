/* Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.
Exemplos:
somarNumeros([10, 10, 10]) // retornará 30
somarNumeros([15, 15, 15, 15]) // retornará 60 */


function somarNumeros1 (array){
    let resultado = 0;

    for(let i of array){
        resultado+=i;
    }

    return console.log(resultado)
}

somarNumeros1([10, 10, 10]) // retornará 30
somarNumeros1([15, 15, 15, 15]) // retornará 60


function somarNumeros2 (array){
    let resultado = 0;
    array.forEach(e => resultado+=e);
    return (console.log(resultado))
}

somarNumeros2([10, 10, 10]) // retornará 30
somarNumeros2([15, 15, 15, 15]) // retornará 60