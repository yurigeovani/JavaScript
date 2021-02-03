/* Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
array:
Exemplos:
receberPrimeiroEUltimoElemento([7,14,"olá"]) // retornará [7, "olá"]
receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]) // retornará [-100, 16] */

// Resolução 1
function receberPrimeiroEUltimoElemento1 (array) {
    return console.log([array[0],array[array.length-1]]);
}


receberPrimeiroEUltimoElemento1([7,14,"olá"]) // retornará [7, "olá"]
receberPrimeiroEUltimoElemento1([-100, "aplicativo", 16]) // retornará [-100, 16]


// Resolução 2
function receberPrimeiroEUltimoElemento2 (array) {
    return console.log([array.shift(),array.pop()])
}

receberPrimeiroEUltimoElemento2([7,14,"olá"]) // retornará [7, "olá"]
receberPrimeiroEUltimoElemento2([-100, "aplicativo", 16]) // retornará [-100, 16]