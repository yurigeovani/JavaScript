/* 20)​ Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1. */


/* const contaCedulas = (valor) => {
    valor=contaCedulas100(valor);
    valor=contaCedulas50(valor);
    valor=contaCedulas10(valor);
    valor=contaCedulas5(valor);
    valor=contaCedulas1(valor);
}


const contaCedulas100 = (valor, qtd=0) => {
    if(valor<100){
        if(qtd==0){
            return valor;
        } else {
            console.log(`${qtd} nota(s) de R$ 100`);
            return valor;
        }
    } else {
        valor-=100;
        qtd++;
        return contaCedulas100(valor,qtd)
    }
}

const contaCedulas50 = (valor, qtd=0) => {
    if(valor<50){
        if(qtd==0){
            return valor;
        } else {
            console.log(`${qtd} nota(s) de R$ 50`);
            return valor;
        }
    } else {
        valor-=50;
        qtd++;
        return contaCedulas50(valor,qtd)
    }
}

const contaCedulas10 = (valor, qtd=0) => {
    if(valor<10){
        if(qtd==0){
            return valor;
        } else {
            console.log(`${qtd} nota(s) de R$ 10`);
            return valor;
        }
    } else {
        valor-=10;
        qtd++;
        return contaCedulas10(valor,qtd)
    }
}

const contaCedulas5 = (valor, qtd=0) => {
    if(valor<5){
        if(qtd==0){
            return valor;
        } else {
            console.log(`${qtd} nota(s) de R$ 5`);
            return valor;
        }
    } else {
        valor-=5;
        qtd++;
        return contaCedulas5(valor,qtd)
    }
}

const contaCedulas1 = (valor, qtd=0) => {
    if(valor<1){
        if(qtd==0){
            return valor;
        } else {
            console.log(`${qtd} nota(s) de R$ 1`);
            return valor;
        }
    } else {
        valor-=1;
        qtd++;
        return contaCedulas1(valor,qtd)
    }
}

contaCedulas(232); */


// Refactoring...

const cedulas = [100,50,10,5,1,2,200,20];
cedulas.sort((a,b)=>b-a);

const totalCedulas = (valor) => {
    cedulas.map(cedula => valor=contaCedulas(valor,cedula))
}

const contaCedulas = (valor, cedula, qtd=0) => {
    if(valor<cedula){
        if(qtd==0){
            return valor;
        } else {
            console.log(`${qtd} nota(s) de R$ ${cedula}`);
            return valor;
        }
    } else {
        valor-=cedula;
        qtd++;
        return contaCedulas(valor,cedula,qtd)
    }
}

console.log('####################')
totalCedulas(38);
console.log('####################')
totalCedulas(362);