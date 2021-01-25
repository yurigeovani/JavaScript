/* 30) ​ Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor. */

const vetor1 = [1, 7, 10, 12, 8, 15, 22, 6, -2];
const vetor2 =  [10, 5, 7, 3, 1, 3, 11, 20, 6, 9]


function maiorMenor(vetor){
    vetor.sort((a,b)=>a-b);
    console.log(`
    Maior: ${vetor[vetor.length-1]}
    Menor: ${vetor[0]}`)
}

maiorMenor(vetor1);
maiorMenor(vetor2);