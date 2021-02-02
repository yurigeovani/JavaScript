/* Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado.
Exemplos:
repetir("código", 2) // retornará ["código", "código"]
repetir(7, 3) // retornará [7, 7, 7] */

// Minha resolução
function repetir (elemento, qtdRepeticoes) {
    resultado = [];
    for(let i = 0; i<qtdRepeticoes; i++){
        resultado.push(elemento);
    }
    return console.log(resultado)
}


repetir("código", 2) // retornará ["código", "código"]
repetir(7, 3) // retornará [7, 7, 7]
repetir('Luma',7)

// Resolução professor
function repetir2 (elemento, qtdRepeticoes){
    return console.log(Array(qtdRepeticoes).fill(elemento));
}

repetir2("código", 2) // retornará ["código", "código"]
repetir2(7, 3) // retornará [7, 7, 7]
repetir2('Luma',7)