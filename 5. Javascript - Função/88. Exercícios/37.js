/* 37) ​ Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), ​ a1 ​ (o primeiro termo) e ​ r ​ (a razão) e escreva os ​ n ​ termos ,
bem como a soma dos elementos. */

function progArit (qtdNum,primTerm,razao){
    let sum=primTerm;
    console.log(`1) ${primTerm}`)
    for(let i=2;i<=qtdNum;i++){
        primTerm+=razao;
        console.log(`${i}) ${primTerm}`);
        sum+=primTerm;
    }
    console.log(`SOMA) ${sum}`)
}

function progGeom (qtdNum,primTerm,razao){
    let sum=primTerm;
    console.log(`1) ${primTerm}`)
    for(let i=2;i<=qtdNum;i++){
        primTerm*=razao;
        console.log(`${i}) ${primTerm}`);
        sum+=primTerm;
    }
    console.log(`SOMA) ${sum}`)
}


progArit(3,2,4)
progArit(7,18,6)
progGeom(3,2,4)
progGeom(7,18,6)