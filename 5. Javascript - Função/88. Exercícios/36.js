/* 36) ​ Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5. */

vetor1 = [1, 2, 5, 8, 2, 9];
vetor2 = [2,4,5]


function calcularVetor (vet, int) {
    resultado =  [];
    for(let i = 0; i<vet.length;i++){
        resultado.push(vet[i]*int);
    }

    return resultado;
}

function calcularVetorMaior5 (vet, int){
    resultado = [];
    
    for(let i = 0; i<vet.length;i++){
        if(vet[i]>5){
            resultado.push(vet[i]*int);
        }
    }

    return resultado;
}

console.log(calcularVetor(vetor1,2));

console.log(calcularVetorMaior5(vetor1,2));


function calcularVetorComForEach(vet, int) {
    resultado = [];
    vet.forEach(valor=>{
        resultado.push(valor*int);
    })

    return resultado;
}

console.log(calcularVetorComForEach(vetor2,3))