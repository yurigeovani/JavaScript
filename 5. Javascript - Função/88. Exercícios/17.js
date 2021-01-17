/* 17)​ Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:

          Plano | Aumento
            A       10%
            B       15%
            C       20%

Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido. */


const calcularNovoSalario = (plano, salario) => {

    switch (plano) {
        case 'A':
            salario += salario*10/100;
            return salario;
            //ou return salario *1.1;
        case 'B':
            salario += salario*15/100;
            return salario;
            //ou return salario *1.15;
        case 'C':
            salario += salario*20/100;
            return salario;
            //ou return salario *1.2;
        default:
            return 'Plano inválido';
    }
}


console.log(calcularNovoSalario('A', 1000));
console.log(calcularNovoSalario('B', 1000));
console.log(calcularNovoSalario('C', 1000));
console.log(calcularNovoSalario('D', 1000));