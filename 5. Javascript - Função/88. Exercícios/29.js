/* 29) ​ Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações. */

const array = [1, 2, 7, 14, 9, 8, 17, 32, 22, 16, 10];
const vetor = [ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]


function verificaIntervalo(array){
    let countIn = 0;
    let countOut = 0;

    for(let i=0;i<array.length;i++){
        array[i]>=10 && array[i]<=20 ? countIn++ : countOut++;
    }

    console.log(`
    Dentro do intervalo: ${countIn}
    Fora do intervalo: ${countOut}`)
}


verificaIntervalo(array);
verificaIntervalo(vetor);