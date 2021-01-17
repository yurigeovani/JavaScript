/* 20)​ Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1. */


const contaCedulas = (valor) => {
    valor=contaCedulas100(valor);
    valor=contaCedulas50(valor);
    valor=contaCedulas10(valor);
    valor=contaCedulas5(valor);
    valor=contaCedulas1(valor);
}


const contaCedulas100 = (valor, qtd=0) => {
    if(valor<100){
        return valor;
    } else {
        valor-=100;
        qtd++;
        contaCedulas100(valor,qtd)
    }
    console.log(`${qtd} nota(s) de R$ 100`)
    return valor;
}

const contaCedulas50 = (valor, qtd=0) => {
    if(valor<50){
        return valor;
    } else {
        valor-=50;
        qtd++;
        contaCedulas50(valor,qtd)
    }
    console.log(`${qtd} nota(s) de R$ 50`)
    return valor;
}

const contaCedulas10 = (valor, qtd=0) => {
    if(valor<10){
        return valor;
    } else {
        valor-=10;
        qtd++;
        contaCedulas10(valor,qtd)
    }
    console.log(`${qtd} nota(s) de R$ 10`)
    return valor;
}

const contaCedulas5 = (valor, qtd=0) => {
    if(valor<5){
        return valor;
    } else {
        valor-=5;
        qtd++;
        contaCedulas5(valor,qtd)
    }
    console.log(`${qtd} nota(s) de R$ 5`)
    return valor;
}

const contaCedulas1 = (valor, qtd=0) => {
    if(valor<1){
        return valor;
    } else {
        valor-=1;
        qtd++;
        contaCedulas1(valor,qtd)
    }
    console.log(`${qtd} nota(s) de R$ 1`)
    return valor;
}

contaCedulas(150);