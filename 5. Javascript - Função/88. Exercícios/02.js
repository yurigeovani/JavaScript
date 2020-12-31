/* 02)​ Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
    Equilátero: Os três lados são iguais.
    Isósceles: Dois lados iguais.
    Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto ao tamanho de seus lados.
OBS: (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo). */


const triangulo = function (ladoA, ladoB, ladoC) {

    if(ladoA == ladoB && ladoA == ladoC){
        return( `
        Triângulo Equilátero: Todos os lados iguais
        Lado A = ${ladoA}
        Lado B = ${ladoB}
        Lado C = ${ladoC}
        `)
    } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC){
        return `
        Triângulo Isósceles: Dois lados iguais
        Lado A = ${ladoA}
        Lado B = ${ladoB}
        Lado C = ${ladoC}
        `
    } else {
        return `
        Triângulo Escaleno: Todos os lados são diferentes
        Lado A = ${ladoA}
        Lado B = ${ladoB}
        Lado C = ${ladoC}
        `
    }
}

console.log(triangulo(20,1,10));