/* Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.
Exemplos:
segundoMaior([12, 16, 1, 5]) // retornará 12
segundoMaior([8, 4, 5, 6]) // retornará 6 */

// Resolution 1
function segundoMaior1 (array) {
    array.sort((a, b) => b - a);

    return console.log(array[1])
}

segundoMaior1([12, 16, 1, 5]) // retornará 12
segundoMaior1([8, 4, 5, 6]) // retornará 6


// Resolution 2
const segundoMaior2 = array => console.log(array.sort((a, b) => b - a)[1]);

segundoMaior2([12, 16, 1, 5]) // retornará 12
segundoMaior2([8, 4, 5, 6]) // retornará 6