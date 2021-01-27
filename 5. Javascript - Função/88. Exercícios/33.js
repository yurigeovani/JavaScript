/* 33) ​ Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console. */



vetorInteiro = [1, 2, 3, 4];
vetorString = ['Pedro', 'Tiago', 'João', 'No Barquinho'];
vetorDouble = [1.6, 1.7, 1.8, 1.5];

function concatenar (...vetores){
    merge = [];
    for(let i=0;i<vetores.length;i++){
        merge = merge.concat(vetores[i]);
    }

    return merge;
}

console.log(concatenar(vetorString,vetorDouble));
console.log(concatenar(vetorInteiro,vetorDouble));