/* 16)​ Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica. O programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valoresnuméricos
na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e 3.
Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas. */

const calculadora = (num1, op, num2) => {
    switch (op) {
        case '+':
            console.log(num1+num2);
            break;
        case '-':
            console.log(num1-num2);
            break;
        case '*':
            if(num1==0 || num2==0){
                console.log(0)
            } else {
                console.log(num1*num2)
            }
            break;
        case '/':
            if(num1==0){
                console.log(0);
            } else if (num2==0){
                console.log('Division by zero is undefined');
            } else {
                console.log(num1/num2);
            }
            break;
        default:
            console.log('Operador inválido!')
    }
}


calculadora(0,'+',8);
calculadora(0,'-',8);
calculadora(0,'*',8);
calculadora(0,'/',8);
calculadora(0,'#',8);