/* 01)​ Crie uma função que, dado dois valores (passados como parâmetros), mostre no console a soma, subtração,
multiplicação e divisão desses valores. */


const tabuada = (num1, num2) => {
    let soma = num1 + num2;
    let subtracao = num1-num2;
    let multiplicacao;
    let divisao;


    if (num1 == 0){
        multiplicacao = 0;
        divisao = 0;
    } else if(num2 == 0){
        multiplicacao = 0;
        divisao = 'Division by zero is undefined';
    } else {
        multiplicacao = num1*num2;
        divisao = num1/num2;
    }

    return console.log(`
    RESULTADO:
    SOMA: ${num1} + ${num2} = ${soma}
    SUBTRAÇÃO: ${num1} - ${num2} = ${subtracao}
    MULTIPLICAÇÃO: ${num1} * ${num2} = ${multiplicacao}
    DIVISÃO: ${num1} / ${num2} = ${divisao}`)
}


tabuada(0,10);