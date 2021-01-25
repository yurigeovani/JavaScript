/* 23)​ Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo. */

const calcularMedia = (cod, nota1, nota2, nota3) => {
    let resultado, media;
    let notas = [];

    notas.push(nota1);
    notas.push(nota2);
    notas.push(nota3);

    notas.sort((a,b)=>b-a);

    media = ((notas[0]*4)+(notas[1]*3)+(notas[2]*3))/10;

    media>=5 ? resultado = 'APROVADO' : resultado = 'REPROVADO';

    return `
    Código: ${cod}
    Nota 1: ${nota1}
    Nota 2: ${nota2}
    Nota 3: ${nota3}
    Média: ${media}
    ${resultado}`
}

console.log(calcularMedia(123, 8, 9, 6))
console.log(calcularMedia(123, 2.8, 6, 3.5))