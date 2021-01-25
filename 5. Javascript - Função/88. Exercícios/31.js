/* 31) ​ Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console. */

function contarNegativos (vetor){
    let count = 0;
    for (let i=0; i<vetor.length;i++){
        vetor[i]<0 ? count++ : null;
    }

    return count;
}

vetor1 = [-1, -3, 9, 8, -5, 3, 10, 27, -10];
vetor2 =  [10, 5, -7, 3, -1, 3, -11, -20, 6, 9]

console.log(contarNegativos(vetor1));
console.log(contarNegativos(vetor2));