/* 34)​ Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras. */


let a = 'asdf';
let b = 'FDSA';

function compararStrings (str1, str2){
    let compara=true;
    let qtdIgual1 = comparador(str1,str2);
    let qtdIgual2 = comparador(str2,str1);

    qtdIgual1==str1.length && qtdIgual2==str2.length ? compara=true : compara=false;
    
    return compara;
}

function comparador (str1, str2){
    let qtdIgual = 0;

    for (let i=0;i<str1.length;i++){
        for(let j=0;j<str2.length;j++){
            if(str1.toLowerCase().charAt(i)==str2.toLowerCase().charAt(j)){
                qtdIgual++;
            }
        }
    }

    return qtdIgual;
}

console.log(compararStrings(a,b))