/* 40) ​ Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A. */


function calcularNotas (nota){
    if(nota<0 || nota > 10){
        console.log('Nota inválida!');
    } else if(nota<4.9){
        console.log('Conceito: D');
    } else if(nota<6.9){
        console.log('Conceito: C');
    } else if(nota<8.9){
        console.log('Conceito: B');
    } else {
        console.log('Conceito: A');
    }
}


notas = [-1, 3.5, 5.7, 7.2, 9.5, 12];

notas.forEach(element => {
    calcularNotas(element);
});

notas.forEach(calcularNotas)

notas.forEach(a=>calcularNotas(a))