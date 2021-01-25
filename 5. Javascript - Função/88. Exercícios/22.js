/* 22)​ Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro...) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido. */

const calcularJuros = (mes, vlr) => {
    if(mes<1 || mes>12){
        return `Mês inválido!`
    }
    if(mes==1){
        return `R$ ${vlr.toFixed(2).replace('.',',')}`;
    } else {
        mes--;
        vlr*=1.05;
        return calcularJuros(mes,vlr);
    }

}

console.log(calcularJuros(0,100));
console.log(calcularJuros(1,100));
console.log(calcularJuros(4,100));
console.log(calcularJuros(12,100));
console.log(calcularJuros(16,100));
