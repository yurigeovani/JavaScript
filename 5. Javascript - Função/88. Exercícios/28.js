/* 28) ​ Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares. */

let vetor = [2, 1, 8, 9, 10, 15, 22, 77,123];
let vetor2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

function parOuImpar(vetor) {
    let par=0
    let impar=0;
    for(let i = 0; i<vetor.length; i++ ){
        if(vetor[i]%2==0){
            par++;
        } else {
            impar++;
        }
    }

    console.log(`
    Pares: ${par}
    Ímpares: ${impar}`)
}

parOuImpar(vetor);
parOuImpar(vetor2);