/* 09)​ Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado. */

function calculaNota (nota) {
    let notaCorrigida = arredondarNota(nota);

    if (notaCorrigida<38){
        return `Reprovado. Nota ${notaCorrigida}`;
    }

    return `Aprovado! Nota ${notaCorrigida}`;
}

function arredondarNota(nota){
    let diferenca=0;
    if(nota%5!=0){
        while ((nota%5)!=0){
            nota++;
            diferenca++;
        }

        if(diferenca>=3){
            nota-=5;
        }
    }

    return nota;
}

console.log(calculaNota(100))
console.log(calculaNota(30))
console.log(calculaNota(35))
console.log(calculaNota(36))
console.log(calculaNota(38))
console.log(calculaNota(0))
console.log(calculaNota(88))
console.log(calculaNota(61))