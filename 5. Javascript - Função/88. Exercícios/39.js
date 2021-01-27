/* 39) ​ Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar. */

vetor1 = [1,3,5,7,9]
vetor2 = [2,4,6,8,10]

function inverterVetores (vet1, vet2){
    for(let i =0;i<vet1.length;i++){
        vet2.push(vet1[i]);
    }

    for(let i =0;i<vet1.length/2;i++){
        vet1.push(vet2[i]);
    }
    
    vet1.splice(0,vet1.length/2);
    vet2.splice(0,vet2.length/2);

    console.log(vetor1,vetor2);
}

inverterVetores(vetor1,vetor2)