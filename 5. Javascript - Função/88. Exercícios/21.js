/* 21)​ Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130 */

const calcularPlano = (idade) => {
    return idade<10 ? 180:(idade<30 ? 150:(idade<60 ? 195:230))
}

console.log(calcularPlano(8))
console.log(calcularPlano(12))
console.log(calcularPlano(38))
console.log(calcularPlano(62))