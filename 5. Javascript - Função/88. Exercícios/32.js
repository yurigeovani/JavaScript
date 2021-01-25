/* 32)​ Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros. */

function media(vetor){
    let sum = 0;
    for(let i=0;i<vetor.length;i++){
        sum+=vetor[i];
    }

    return sum/vetor.length;
}

vetor1 = [8, 9, 10];
vetor2 = [1, 2, 3, 4, 5]


console.log(media(vetor1));
console.log(media(vetor2));