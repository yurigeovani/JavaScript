/* Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
pares e que também tenham índices pares.

Lembre-se que um número é par porque é divisível por 2, ou seja, o resto da divisão da divisão dele
por 2 é zero.
Exemplos:
receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]) // retornará []
receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]) // retornará [10, 22] */


function receberSomenteOsParesDeIndicesPares1(array){
    let resultado = [];

    for(let i in array){
        if(i%2==0)
            if(array[i]%2==0)
                resultado.push(array[i]);
    }

    return console.log(resultado)
}

receberSomenteOsParesDeIndicesPares1([1, 2, 3, 4]) // retornará []
receberSomenteOsParesDeIndicesPares1([10, 70, 22, 43, 2, 2]) // retornará [10, 22]



// Teacher resolution

function receberSomenteOsParesDeIndicesPares(numeros) {
    return console.log(numeros.filter((numero, indice) => {
    const numeroPar = numero % 2 === 0
    const indicePar = indice % 2 === 0
    return numeroPar && indicePar
    }))
}

receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]) // retornará []
receberSomenteOsParesDeIndicesPares([10, 70, 22, 43, 2, 2]) // retornará [10, 22]