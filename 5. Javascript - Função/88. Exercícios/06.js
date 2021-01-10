/* 06)​ Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */

function jurosSimples (capitalInicial, juros, tempoAplicacao){
    return `VALOR COM JUROS SIMPLES: R$ ${(capitalInicial+(capitalInicial*juros/100*tempoAplicacao)).toFixed(2).replace('.',',')}`;
}


function jurosComposto (capitalInicial, juros, tempoAplicacao){
    return 'VALOR COM JUROS COMPOSTO: R$ ' + (capitalInicial*(1+juros/100)**tempoAplicacao).toFixed(2).replace('.',',');
}

console.log(jurosSimples(15000, 2, 4));
console.log(jurosComposto(15000, 2, 4));